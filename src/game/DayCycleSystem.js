/**
 * DayCycleSystem — リアルタイム日数サイクル + 翌日スキップ対応
 * ランクアップ時にレシピ・エリア・冒険者を解放する
 */
import { GameConfig } from './data/config.js';
import { Recipes } from './data/items.js';
import { AreaDefs } from './data/areas.js';
import { UnlockableAdventurers } from './data/adventurers.js';
import { eventBus } from './core/EventBus.js';
import { StatsTracker } from './StatsTracker.js';

export class DayCycleSystem {
  constructor(inventorySystem, questSystem) {
    this.inventory = inventorySystem;
    this.quest = questSystem;
    this.day = GameConfig.startingDay;
    this.dayTimer = 0;
    this.dayDuration = GameConfig.dayDurationSeconds;
    this.totalSales = 0;
    this.isGameOver = false;
    this.paused = false;

    // GameConfig.ranks を正規のランク定義として使用
    this.currentRankIndex = 0;
    this.rankBossAvailable = false;

    // 売上追跡
    this._unsubs = [];
    this._unsubs.push(eventBus.on('item:sold', (d) => {
      this.totalSales += d.price || 0;
      StatsTracker.add('totalRevenue', d.price || 0);
      // クエストの累計売上を更新
      if (this.quest && typeof this.quest.updateTotalSales === 'function') {
        this.quest.updateTotalSales(this.totalSales);
      }
      this._checkRankUp();
    }));

    // Bug#4: クエスト条件達成後すぐにランクアップを検知するため、
    // 調合完了・日替わり・アップグレード購入時にもチェック
    this._unsubs.push(eventBus.on('item:crafted',       () => this._checkRankUp()));
    this._unsubs.push(eventBus.on('day:newDay',          () => this._checkRankUp()));
    this._unsubs.push(eventBus.on('upgrade:purchased',   () => this._checkRankUp()));
    this._unsubs.push(eventBus.on('adventurer:return',   () => this._checkRankUp()));

    // 一時停止イベント
    this._unsubs.push(eventBus.on('game:pause', () => { this.paused = true; }));
    this._unsubs.push(eventBus.on('game:resume', () => { this.paused = false; }));
    
    // ボス撃破イベント
    this._unsubs.push(eventBus.on('battle:win', (d) => {
       if (d.rankIndex) {
         this._doRankUp(d.rankIndex);
       }
    }));
  }

  /** 日数の進行度 (0〜1) */
  get dayProgress() {
    return Math.min(1, this.dayTimer / this.dayDuration);
  }

  get currentRank() { return GameConfig.ranks[this.currentRankIndex]; }
  get currentRent() {
    return GameConfig.dailyRent + this.currentRankIndex * GameConfig.rentIncreasePerRank;
  }

  /** 毎フレーム呼ばれるリアルタイム更新 */
  update(dt) {
    if (this.isGameOver || this.paused) return;

    this.dayTimer += dt;
    if (this.dayTimer >= this.dayDuration) {
      this._advanceDay();
    }
  }

  /** 翌日ボタン — 即座に翌日へ進む */
  skipDay() {
    if (this.isGameOver) return;
    this._advanceDay();
  }

  /** 調合タブの一時停止 */
  setPaused(paused) {
    this.paused = paused;
  }

  /** --- 内部: 日送り処理 --- */
  _advanceDay() {
    this.dayTimer = 0;

    // 維持費の徴収
    const rent = this.currentRent;
    if (this.inventory.gold < rent) {
      this.isGameOver = true;
      eventBus.emit('game:over', {
        day: this.day,
        totalSales: this.totalSales,
        rank: this.currentRank.name,
        rent,
        reason: `維持費 ${rent}G を支払えませんでした…`,
      });
      return;
    }
    this.inventory.spendGold(rent);

    this.day++;
    StatsTracker.add('totalDays', 1);

    // Bug#5: quest.onNewDay は存在しない死にコードだったため削除。
    // QuestSystem は eventBus.on('day:newDay') で自主的に日替わり処理を行う。

    eventBus.emit('day:newDay', { day: this.day, rent });
  }

  /** ランクアップ挑戦権の判定 */
  _checkRankUp() {
    const ranks = GameConfig.ranks;
    if (this.currentRankIndex < ranks.length - 1) {
       const nextRank = ranks[this.currentRankIndex + 1];
       if (this.totalSales >= nextRank.requiredSales && 
           (this.quest ? this.quest.isRankQuestSatisfied(this.currentRankIndex + 1) : true)) {
           
           if (!this.rankBossAvailable) {
               this.rankBossAvailable = true;
               eventBus.emit('rank:boss_available', { rankIndex: this.currentRankIndex + 1, bossId: nextRank.requiredBossId });
           }
       }
    }
  }

  /** 実際のランクアップ処理（ボス撃破時に呼ばれる） */
  _doRankUp(targetRankIndex) {
    if (targetRankIndex !== this.currentRankIndex + 1) return;
    
    this.currentRankIndex = targetRankIndex;
    this.rankBossAvailable = false;
    
    const ranks = GameConfig.ranks;
    const rankDef = ranks[this.currentRankIndex];

    // レシピ解放
    if (rankDef.newRecipes) {
      for (const key of rankDef.newRecipes) {
        if (Recipes[key]) {
          Recipes[key].unlocked = true;
          eventBus.emit('recipe:unlocked', { name: Recipes[key].targetId, key });
        }
      }
    }

    // エリア解放
    if (rankDef.newAreas) {
      for (const key of rankDef.newAreas) {
        if (AreaDefs[key]) {
          AreaDefs[key].unlocked = true;
          eventBus.emit('area:unlocked', { name: AreaDefs[key].name, key });
        }
      }
    }

    // 冒険者加入
    const newAdventurers = UnlockableAdventurers.filter(a => a.unlockRank === rankDef.rank);
    for (const def of newAdventurers) {
      eventBus.emit('adventurer:unlock', { adventurer: def });
    }

    eventBus.emit('rank:up', { rank: rankDef.name, index: this.currentRankIndex });

    if (this.currentRankIndex >= GameConfig.goalShopRank - 1) {
      eventBus.emit('game:clear', {
        day: this.day,
        totalSales: this.totalSales,
        rank: rankDef.name,
      });
    }
    
    // さらに次のランクへの条件を即座に満たしているかチェック
    this._checkRankUp();
  }

  dispose() {
    this._unsubs.forEach(u => u());
  }
}
