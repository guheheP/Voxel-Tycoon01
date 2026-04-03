/**
 * AdventurerSystem — リアルタイム探索タイマー版
 */
import { GameConfig } from './data/config.js';
import { AreaDefs } from './data/areas.js';
import { ItemBlueprints } from './data/items.js';
import { AdventurerDefs, LevelExpTable } from './data/adventurers.js';
import { eventBus } from './core/EventBus.js';
import { StatsTracker } from './StatsTracker.js';

export class AdventurerSystem {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.adventurers = [];

    // 初期冒険者
    AdventurerDefs.forEach(def => {
      this.adventurers.push({
        ...def,
        level: 1,
        exp: 0,
        status: 'idle',
        timer: 0,
        maxTimer: 0,
        currentArea: null,
        equipment: { weapon: null },
        exploreTimeMultiplier: 1.0,
      });
    });
  }

  /** 毎フレーム更新 — 探索タイマー */
  update(dt) {
    this.adventurers.forEach(adv => {
      if (adv.status !== 'exploring') return;
      adv.timer -= dt;
      if (adv.timer <= 0) {
        this._completeExploration(adv);
      }
    });
  }

  /** 冒険者を派遣 */
  dispatch(advId, areaId) {
    const adv = this.adventurers.find(a => a.id === advId);
    if (!adv || adv.status !== 'idle') return false;

    const area = AreaDefs[areaId];
    if (!area || !area.unlocked) return false;

    const levelReduction = 1 - ((adv.level - 1) * 0.05);
    const time = Math.max(5, Math.ceil(area.baseTime * adv.exploreTimeMultiplier * levelReduction));

    adv.status = 'exploring';
    adv.currentArea = areaId;
    adv.timer = time;
    adv.maxTimer = time;

    StatsTracker.add('expeditionsSent', 1);
    eventBus.emit('adventurer:dispatched', { adventurer: adv, area });
    return true;
  }

  /** 探索完了 */
  _completeExploration(adv) {
    const area = AreaDefs[adv.currentArea];
    if (!area) { adv.status = 'idle'; return; }

    // ドロップ
    let minDrops = area.dropCountMin || GameConfig.exploreDropCountMin || 1;
    let maxDrops = area.dropCountMax || GameConfig.exploreDropCountMax || 2;
    const dropCount = minDrops + Math.floor(Math.random() * (maxDrops - minDrops + 1));

    const items = [];
    const pool = area.dropTable;

    for (let i = 0; i < dropCount; i++) {
      let totalWeight = 0;
      pool.forEach(d => totalWeight += d.weight);
      let r = Math.random() * totalWeight;
      let selectedItemId = pool[0].blueprintId;
      for (const drop of pool) {
        r -= drop.weight;
        if (r <= 0) {
          selectedItemId = drop.blueprintId;
          break;
        }
      }

      const bp = ItemBlueprints[selectedItemId];
      if (!bp) continue;

      let minQ = area.qualityMin || GameConfig.exploreQualityMin || 10;
      let maxQ = area.qualityMax || GameConfig.exploreQualityMax || 50;
      let quality = minQ + Math.floor(Math.random() * (maxQ - minQ));

      // 武器ボーナス
      if (adv.equipment.weapon) {
        quality += Math.floor(adv.equipment.weapon.quality * GameConfig.equipmentQualityBonus);
      }
      // レベルボーナス
      quality += (adv.level - 1) * 2;
      quality = Math.min(100, Math.max(1, quality));

      // 特性
      const traits = [];
      if (bp.possibleTraits && bp.possibleTraits.length > 0) {
        bp.possibleTraits.forEach(t => {
          if (Math.random() < GameConfig.traitChance) traits.push(t);
        });
      }

      const item = {
        uid: crypto.randomUUID(),
        blueprintId: itemId,
        name: bp.name,
        type: bp.type,
        quality,
        traits,
        tier: bp.tier || 1,
      };
      items.push(item);
      this.inventory.addItem(item);
    }

    // 経験値
    const expGain = area.expReward || 1;
    adv.exp += expGain;
    this._checkLevelUp(adv);

    adv.status = 'idle';
    adv.currentArea = null;
    adv.timer = 0;

    eventBus.emit('adventurer:return', { adventurer: adv, items });
    StatsTracker.add('materialsGathered', items.length);
  }

  _checkLevelUp(adv) {
    while (adv.level < LevelExpTable.length && adv.exp >= LevelExpTable[adv.level]) {
      adv.level++;
      eventBus.emit('adventurer:levelUp', { adventurer: adv });
    }
  }

  /** 装備 */
  equipWeapon(advId, itemUid) {
    const adv = this.adventurers.find(a => a.id === advId);
    if (!adv || adv.status !== 'idle') return false;
    const item = this.inventory.removeItem(itemUid);
    if (!item) return false;

    if (adv.equipment.weapon) {
      this.inventory.addItem(adv.equipment.weapon);
    }
    adv.equipment.weapon = item;
    eventBus.emit('inventory:changed');
    return true;
  }

  unequipWeapon(advId) {
    const adv = this.adventurers.find(a => a.id === advId);
    if (!adv || !adv.equipment.weapon) return false;
    this.inventory.addItem(adv.equipment.weapon);
    adv.equipment.weapon = null;
    eventBus.emit('inventory:changed');
    return true;
  }

  getAdventurers() { return this.adventurers; }
  getUnlockedAreas() { return Object.values(AreaDefs).filter(a => a.unlocked); }
}
