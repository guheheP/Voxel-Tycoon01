/**
 * AdventurerSystem — 自動探索版
 * 冒険者は割り当てエリアへ自動で繰り返し探索に行く
 */
import { GameConfig } from './data/config.js';
import { AreaDefs } from './data/areas.js';
import { ItemBlueprints } from './data/items.js';
import { AdventurerDefs, LevelExpTable, LevelBonuses } from './data/adventurers.js';
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
        assignedArea: 'plains',
        currentArea: null,
        equipment: { weapon: null },
      });
    });

    // 冒険者解放イベント
    eventBus.on('adventurer:unlock', (data) => {
      const def = data.adventurer;
      if (!def) return;
      // 既に加入済みの場合はスキップ
      if (this.adventurers.find(a => a.id === def.id)) return;
      const adv = {
        id: def.id, name: def.name, icon: def.icon,
        status: 'idle', timer: 0, maxTimer: 0,
        exploreTimeMultiplier: def.exploreTimeMultiplier,
        assignedArea: 'plains',
        currentArea: null, level: 1, exp: 0,
        equipment: { weapon: null },
      };
      this.adventurers.push(adv);
      eventBus.emit('adventurer:joined', { adventurer: adv });
    });
  }

  /** 毎フレーム更新 — 自動探索 */
  update(dt) {
    this.adventurers.forEach(adv => {
      if (adv.status === 'exploring') {
        adv.timer -= dt;
        if (adv.timer <= 0) {
          this._completeExploration(adv);
        }
      } else if (adv.status === 'idle') {
        // 自動で再出発
        this._autoDispatch(adv);
      }
    });
  }

  /** 探索エリアを変更 */
  assignArea(advId, areaId) {
    const adv = this.adventurers.find(a => a.id === advId);
    if (!adv) return false;
    const area = AreaDefs[areaId];
    if (!area || !area.unlocked) return false;
    adv.assignedArea = areaId;
    return true;
  }

  /** 自動派遣 */
  _autoDispatch(adv) {
    const areaId = adv.assignedArea;
    const area = AreaDefs[areaId];
    if (!area || !area.unlocked) {
      // フォールバック: 草原に戻す
      adv.assignedArea = 'plains';
      return;
    }

    const time = this._calcExploreTime(adv, area);

    adv.status = 'exploring';
    adv.currentArea = areaId;
    adv.timer = time;
    adv.maxTimer = time;

    StatsTracker.add('expeditionsSent', 1);
  }

  /** 探索時間の計算 */
  _calcExploreTime(adv, area) {
    const levelReduction = 1 - ((adv.level - 1) * LevelBonuses.timeReduction);
    return Math.max(8, Math.ceil(area.baseTime * (adv.exploreTimeMultiplier || 1.0) * levelReduction));
  }

  /** 探索完了 */
  _completeExploration(adv) {
    const area = AreaDefs[adv.currentArea];
    const completedAreaId = adv.currentArea; // areaIdを保持（後でイベントに含めるため）
    if (!area) { adv.status = 'idle'; return; }

    // ドロップ
    const minDrops = area.dropCountMin || GameConfig.exploreDropCountMin || 1;
    const maxDrops = area.dropCountMax || GameConfig.exploreDropCountMax || 2;
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

      const minQ = area.qualityMin || GameConfig.exploreQualityMin || 10;
      const maxQ = area.qualityMax || GameConfig.exploreQualityMax || 50;
      let quality = minQ + Math.floor(Math.random() * (maxQ - minQ));

      // 武器ボーナス
      if (adv.equipment.weapon) {
        quality += Math.floor(adv.equipment.weapon.quality * GameConfig.equipmentQualityBonus);
      }
      // レベルボーナス
      quality += (adv.level - 1) * LevelBonuses.qualityBonus;
      quality = Math.min(100, Math.max(1, quality));

      // 特性 — エリアのtraitPoolから付与
      const traits = [];
      const traitPool = area.traitPool || [];
      for (const t of traitPool) {
        if (Math.random() < GameConfig.traitChance) {
          traits.push(t);
        }
      }

      const item = {
        uid: crypto.randomUUID(),
        blueprintId: selectedItemId,
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

    // idleに戻す → 次フレームで自動再出発
    adv.status = 'idle';
    adv.currentArea = null;
    adv.timer = 0;

    eventBus.emit('adventurer:return', { adventurer: adv, items, areaId: completedAreaId });
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
    if (!adv) return false;
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
