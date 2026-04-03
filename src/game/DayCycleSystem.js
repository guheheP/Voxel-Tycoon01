/**
 * DayCycleSystem — AP(行動ポイント)制の日数管理
 * プレイヤーの行動でAPを消費し、AP=0で日が終わる
 */
import { GameConfig } from './data/config.js';
import { Recipes, ItemBlueprints } from './data/items.js';
import { AreaDefs } from './data/areas.js';
import { eventBus } from './core/EventBus.js';

export class DayCycleSystem {
  constructor(inventorySystem, questSystem) {
    this.inventory = inventorySystem;
    this.questSystem = questSystem;
    this.day = GameConfig.startingDay;
    this.maxAP = GameConfig.dailyAP;
    this.ap = this.maxAP;
    this.totalSales = 0;
    this.currentRankIndex = 0;
    this.isGameOver = false;
    this.isGameCleared = false;
    this._apSpentThisTurn = 0; // AP消費カウンタ（お客さん用）

    // 販売実績を記録
    eventBus.on('item:sold', (d) => {
      this.totalSales += d.item.value;
      if (this.questSystem) {
        this.questSystem.updateTotalSales(this.totalSales);
      }
      this._checkRankUp();
    });
  }

  get currentRank() {
    return GameConfig.ranks[this.currentRankIndex];
  }

  get currentRent() {
    return GameConfig.dailyRent + (this.currentRankIndex * GameConfig.rentIncreasePerRank);
  }

  /** dayProgressは AP消費率 (0=朝, 1=夜) */
  get dayProgress() {
    return 1 - (this.ap / this.maxAP);
  }

  /**
   * APを消費する（全行動の中心メソッド）
   * @returns {boolean} 消費成功かどうか
   */
  spendAP(cost) {
    if (this.isGameOver || cost <= 0) return false;
    if (this.ap < cost) {
      eventBus.emit('toast', { message: '⚡ 行動ポイントが足りません', type: 'error' });
      return false;
    }

    this.ap -= cost;
    this._apSpentThisTurn += cost;
    eventBus.emit('ap:changed', { ap: this.ap, maxAP: this.maxAP });
    eventBus.emit('ap:spent', { cost, remaining: this.ap });

    // AP=0で自動的に日が終わる
    if (this.ap <= 0) {
      this._processNewDay();
    }

    return true;
  }

  /** 翌日に進む（手動日送り） */
  skipDay() {
    if (this.isGameOver) return;
    this.ap = 0;
    eventBus.emit('ap:changed', { ap: this.ap, maxAP: this.maxAP });
    this._processNewDay();
  }

  /** 現在のMaxAP（アップグレード込み） */
  getMaxAP(shopSystem) {
    let bonus = 0;
    if (shopSystem) {
      bonus = shopSystem.getUpgradeTotal('max_ap');
    }
    return GameConfig.dailyAP + bonus;
  }

  /** APアップグレード反映用 */
  refreshMaxAP(shopSystem) {
    this.maxAP = this.getMaxAP(shopSystem);
  }

  _processNewDay() {
    this.day++;
    const rent = this.currentRent;

    // 維持費の支払い
    const canPay = this.inventory.spendGold(rent);

    if (!canPay) {
      this.isGameOver = true;
      eventBus.emit('game:over', {
        day: this.day,
        reason: `維持費 ${rent}G を支払えませんでした。`,
        totalSales: this.totalSales,
        rank: this.currentRank.name,
      });
      return;
    }

    // APリセット
    this.ap = this.maxAP;
    this._apSpentThisTurn = 0;

    eventBus.emit('day:newDay', { day: this.day, rent });
    eventBus.emit('ap:changed', { ap: this.ap, maxAP: this.maxAP });
    eventBus.emit('day:tick');
  }

  // update(dt) は不要になった（AP制なのでフレーム更新しない）

  _checkRankUp() {
    const nextRankIndex = this.currentRankIndex + 1;
    if (nextRankIndex >= GameConfig.ranks.length) return;

    const nextRank = GameConfig.ranks[nextRankIndex];

    // 条件1: 売上達成
    if (this.totalSales < nextRank.requiredSales) return;

    // 条件2: クエスト達成 (questSystemがある場合)
    if (this.questSystem && !this.questSystem.isRankQuestSatisfied(nextRank.rank)) return;

    // ランクアップ!
    this.currentRankIndex = nextRankIndex;

    eventBus.emit('rank:up', {
      rank: nextRank.rank,
      rankName: nextRank.name,
    });

    // 新レシピ解放
    for (const recipeKey of nextRank.newRecipes) {
      if (Recipes[recipeKey]) {
        Recipes[recipeKey].unlocked = true;
        const bp = ItemBlueprints[Recipes[recipeKey].targetId];
        eventBus.emit('recipe:unlocked', { id: recipeKey, name: bp ? bp.name : recipeKey });
      }
    }

    // 新エリア解放
    for (const areaKey of nextRank.newAreas) {
      if (AreaDefs[areaKey]) {
        AreaDefs[areaKey].unlocked = true;
        eventBus.emit('area:unlocked', { id: areaKey, name: AreaDefs[areaKey].name });
      }
    }

    // ゲームクリアチェック
    if (nextRank.rank >= GameConfig.goalShopRank && !this.isGameCleared) {
      this.isGameCleared = true;
      eventBus.emit('game:cleared', {
        day: this.day,
        totalSales: this.totalSales,
        rank: nextRank.name,
      });
    }
  }
}
