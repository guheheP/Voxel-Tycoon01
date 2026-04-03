/**
 * AdventurerSystem — 冒険者の派遣・探索・帰還・成長・装備を管理
 * AP制: 派遣は全員まとめて1AP、翌日朝に帰還
 */
import { createItemInstance } from './ItemSystem.js';
import { GameConfig } from './data/config.js';
import { AdventurerDefs, UnlockableAdventurers, LevelExpTable, LevelBonuses } from './data/adventurers.js';
import { AreaDefs } from './data/areas.js';
import { eventBus } from './core/EventBus.js';

export class AdventurerSystem {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.dayCycle = null; // main.jsでセット

    // マスターデータから冒険者インスタンスを生成
    this.adventurers = AdventurerDefs.map(def => this._createAdventurer(def));

    // ランクアップで冒険者追加
    eventBus.on('rank:up', (d) => this._checkUnlocks(d.rank));

    // 翌日朝に探索中の冒険者が帰還
    eventBus.on('day:newDay', () => this._processReturns());
  }

  _createAdventurer(def) {
    return {
      id: def.id,
      name: def.name,
      icon: def.icon,
      status: 'idle',       // 'idle' | 'exploring'
      timer: 0,
      maxTimer: 0,
      exploreTimeMultiplier: def.exploreTimeMultiplier,
      currentArea: null,
      level: 1,
      exp: 0,
      equipment: { weapon: null, armor: null },
    };
  }

  _checkUnlocks(rank) {
    for (const def of UnlockableAdventurers) {
      if (def.unlockRank === rank && !this.adventurers.find(a => a.id === def.id)) {
        const newAdv = this._createAdventurer(def);
        this.adventurers.push(newAdv);
        eventBus.emit('adventurer:joined', { adventurer: newAdv });
      }
    }
  }

  getAdventurers() {
    return this.adventurers;
  }

  getUnlockedAreas() {
    return Object.values(AreaDefs).filter(a => a.unlocked);
  }

  /**
   * 冒険者に装備をセットする
   */
  equipWeapon(advId, itemUid) {
    const adv = this.adventurers.find(a => a.id === advId);
    if (!adv || adv.status !== 'idle') return false;

    const item = this.inventory.removeItem(itemUid);
    if (!item) return false;

    // 既存装備をインベントリに戻す
    if (adv.equipment.weapon) {
      this.inventory.addItem(adv.equipment.weapon);
    }

    adv.equipment.weapon = item;
    eventBus.emit('inventory:changed');
    return true;
  }

  unequipWeapon(advId) {
    const adv = this.adventurers.find(a => a.id === advId);
    if (!adv || adv.status !== 'idle') return false;
    if (!adv.equipment.weapon) return false;

    this.inventory.addItem(adv.equipment.weapon);
    adv.equipment.weapon = null;
    eventBus.emit('inventory:changed');
    return true;
  }

  /**
   * 全待機中の冒険者をまとめて派遣（1AP消費）
   * dispatches: [{ advId, areaId }] の配列
   */
  dispatchAll(dispatches) {
    if (!dispatches || dispatches.length === 0) return false;

    // AP消費（人数関係なく1AP）
    if (this.dayCycle && !this.dayCycle.spendAP(GameConfig.apCost.dispatch)) {
      return false;
    }

    let anyDispatched = false;
    for (const { advId, areaId } of dispatches) {
      const adv = this.adventurers.find(a => a.id === advId);
      if (!adv || adv.status !== 'idle') continue;

      const area = AreaDefs[areaId];
      if (!area || !area.unlocked) continue;

      adv.status = 'exploring';
      adv.currentArea = areaId;
      adv.timer = 0;
      adv.maxTimer = 0;
      anyDispatched = true;
    }

    if (anyDispatched) {
      eventBus.emit('inventory:changed');
    }
    return anyDispatched;
  }

  /**
   * 単体派遣（UIからの互換用: 1APは dispatchAll で消費）
   */
  dispatch(advId, areaId) {
    return this.dispatchAll([{ advId, areaId }]);
  }

  /**
   * 翌日朝に全探索中冒険者が帰還
   */
  _processReturns() {
    for (const adv of this.adventurers) {
      if (adv.status === 'exploring') {
        this._returnFromExplore(adv);
      }
    }
  }

  // update(dt) は不要（AP制なのでリアルタイムタイマー不要）

  _returnFromExplore(adv) {
    const areaId = adv.currentArea;
    const area = AreaDefs[areaId];
    adv.status = 'idle';
    adv.timer = 0;
    adv.currentArea = null;

    if (!area) return;

    // レベルボーナスによる品質加算
    const levelQualityBonus = (adv.level - 1) * LevelBonuses.qualityBonus;

    // 装備による品質ボーナス
    let equipQualityBonus = 0;
    if (adv.equipment.weapon) {
      equipQualityBonus = Math.floor(adv.equipment.weapon.quality * GameConfig.equipmentQualityBonus);
    }

    // レベルボーナスによる追加ドロップ
    const extraDropChance = (adv.level - 1) * LevelBonuses.dropBonus;
    let dropCount = Math.floor(Math.random() * (area.dropCountMax - area.dropCountMin + 1)) + area.dropCountMin;
    if (Math.random() < extraDropChance) {
      dropCount++;
    }

    const lootedItems = [];
    for (let i = 0; i < dropCount; i++) {
      const bpId = this._rollDrop(area.dropTable);
      const baseQ = Math.floor(Math.random() * (area.qualityMax - area.qualityMin + 1)) + area.qualityMin;
      const finalQ = Math.min(100, baseQ + levelQualityBonus + equipQualityBonus);

      const traits = [];
      if (Math.random() < GameConfig.traitChance && area.traitPool.length > 0) {
        traits.push(area.traitPool[Math.floor(Math.random() * area.traitPool.length)]);
      }

      const item = createItemInstance(bpId, finalQ, traits);
      this.inventory.addItem(item);
      lootedItems.push(item);
    }

    // 経験値獲得 & レベルアップチェック
    this._gainExp(adv, 1);

    eventBus.emit('adventurer:return', { adventurer: adv, loot: lootedItems, areaId });
  }

  _gainExp(adv, amount) {
    adv.exp += amount;
    const maxLevel = LevelExpTable.length;

    while (adv.level < maxLevel && adv.exp >= LevelExpTable[adv.level]) {
      adv.level++;
      eventBus.emit('adventurer:levelUp', {
        adventurer: adv,
        newLevel: adv.level,
      });
    }
  }

  /** 重み付きランダム選択 */
  _rollDrop(dropTable) {
    const totalWeight = dropTable.reduce((sum, e) => sum + e.weight, 0);
    let roll = Math.random() * totalWeight;
    for (const entry of dropTable) {
      roll -= entry.weight;
      if (roll <= 0) return entry.blueprintId;
    }
    return dropTable[0].blueprintId;
  }
}
