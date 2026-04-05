/**
 * AdventurerSystem — 自動探索版
 * 冒険者は割り当てエリアへ自動で繰り返し探索に行く
 */
import { GameConfig } from './data/config.js';
import { AreaDefs } from './data/areas.js';
import { ItemBlueprints, TraitDefs } from './data/items.js';
import { AdventurerDefs, LevelExpTable, LevelBonuses } from './data/adventurers.js';
import { eventBus } from './core/EventBus.js';
import { StatsTracker } from './StatsTracker.js';

const BASE_SUCCESS_RATE = 50; // 基本成功率 50%
const DIFFICULTY_PENALTY = 20; // difficulty×20%

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
    this._unlockUnsub = eventBus.on('adventurer:unlock', (data) => {
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
    // 倉庫が溢れすぎている場合は自動派遣を一時停止（メモリリーク防止）
    if (this.inventory.items.length >= this.inventory.maxCapacity * 2) {
      return;
    }

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
    // 装備の速度ボーナス
    const speedBonus = this._getWeaponTraitEffects(adv).speedBonus || 0;
    const speedMult = 1 - (speedBonus / 100);
    return Math.max(8, Math.ceil(area.baseTime * (adv.exploreTimeMultiplier || 1.0) * levelReduction * speedMult));
  }

  /** 成功率計算 — 外部（UI）からも呼べるように public */
  calcSuccessRate(adv, area) {
    const levelBonus = (adv.level - 1) * LevelBonuses.successBonus;
    const traitBonus = this._getWeaponTraitEffects(adv).exploreSuccess || 0;
    const difficultyPenalty = (area.difficulty || 0) * DIFFICULTY_PENALTY;
    const rate = BASE_SUCCESS_RATE + levelBonus + traitBonus - difficultyPenalty;
    return Math.min(100, Math.max(10, rate));
  }

  /** 装備の特性効果を集計 */
  _getWeaponTraitEffects(adv) {
    const result = {};
    if (!adv.equipment.weapon || !adv.equipment.weapon.traits) return result;
    for (const traitName of adv.equipment.weapon.traits) {
      const def = TraitDefs[traitName];
      if (!def || !def.effects) continue;
      for (const [key, val] of Object.entries(def.effects)) {
        result[key] = (result[key] || 0) + val;
      }
    }
    return result;
  }

  /** 探索完了 */
  _completeExploration(adv) {
    const area = AreaDefs[adv.currentArea];
    const completedAreaId = adv.currentArea;
    if (!area) { adv.status = 'idle'; return; }

    // 成功判定
    const successRate = this.calcSuccessRate(adv, area);
    const isSuccess = Math.random() * 100 < successRate;

    const items = [];

    if (isSuccess) {
      // === 成功: 通常ドロップ ===
      const traitEffects = this._getWeaponTraitEffects(adv);
      const minDrops = area.dropCountMin || GameConfig.exploreDropCountMin || 1;
      const maxDrops = area.dropCountMax || GameConfig.exploreDropCountMax || 2;
      const extraDrops = traitEffects.dropBonus || 0;
      const dropCount = minDrops + Math.floor(Math.random() * (maxDrops - minDrops + 1)) + extraDrops;

      const pool = area.dropTable;
      const totalWeight = pool.reduce((sum, d) => sum + d.weight, 0);

      for (let i = 0; i < dropCount; i++) {
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

        // ── 品質計算（装備品質がメインドライバー） ──
        const areaMinQ = area.qualityMin || GameConfig.exploreQualityMin || 10;
        const areaMaxQ = area.qualityMax || GameConfig.exploreQualityMax || 50;
        let quality;

        if (adv.equipment.weapon) {
          // 装備あり: 装備品質を基準にエリア範囲内でスケール
          // weaponQ=1→ areaMin付近, weaponQ=100→ areaMax付近
          const weaponQ = adv.equipment.weapon.quality;
          const baseQ = areaMinQ + (areaMaxQ - areaMinQ) * (weaponQ / 100);
          // ランダム揺らぎ ±10%
          const spread = (areaMaxQ - areaMinQ) * 0.1;
          quality = Math.round(baseQ + (Math.random() * spread * 2 - spread));
        } else {
          // 装備なし: 最低品質付近（areaMin ～ areaMin+10）
          quality = areaMinQ + Math.floor(Math.random() * 10);
        }

        // レベルボーナス
        quality += (adv.level - 1) * LevelBonuses.qualityBonus;
        // 装備の品質ボーナス特性
        quality += traitEffects.qualityBonus || 0;
        quality = Math.min(100, Math.max(1, quality));

        // 特性 — エリアのtraitPoolから付与 + はみ出し抽選
        const traits = [];
        const traitPool = area.traitPool || [];
        // 装備の特性チャンスボーナス
        const traitChanceBonus = traitEffects.traitChanceBonus || 0;
        const effectiveTraitChance = Math.min(0.8, GameConfig.traitChance + traitChanceBonus / 100);

        for (const t of traitPool) {
          if (Math.random() < effectiveTraitChance) {
            traits.push(t);
          }
        }

        // はみ出し抽選 — エリアのプール外からランダムにレアな特性が出る
        if (Math.random() < GameConfig.traitBonusRollChance) {
          const bonusTrait = this._rollBonusTrait(traitPool, traits);
          if (bonusTrait) traits.push(bonusTrait);
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
        // 倉庫が一杯なら素材は入らない
        if (!this.inventory.addItem(item)) {
          items.pop();
        }
      }
    }

    // 経験値（失敗時は半分）
    const baseExp = area.expReward || 1;
    const expGain = isSuccess ? baseExp : Math.max(1, Math.floor(baseExp / 2));
    adv.exp += expGain;
    this._checkLevelUp(adv);

    // idleに戻す → 次フレームで自動再出発
    adv.status = 'idle';
    adv.currentArea = null;
    adv.timer = 0;

    eventBus.emit('adventurer:return', {
      adventurer: adv,
      items,
      areaId: completedAreaId,
      success: isSuccess,
      successRate,
    });
    if (isSuccess) StatsTracker.add('materialsGathered', items.length);
  }

  /** はみ出し抽選 — エリアプール外の特性をレアリティ重み付きで抽選 */
  _rollBonusTrait(currentPool, alreadyObtained) {
    const weights = GameConfig.traitBonusRarityWeights;
    // レアリティ別に候補を収集（現在のプール・既に取得済みを除外）
    const excludeSet = new Set([...currentPool, ...alreadyObtained]);
    const candidates = [];
    for (const [name, def] of Object.entries(TraitDefs)) {
      if (excludeSet.has(name)) continue;
      const rarity = def.rarity || 'common';
      const weight = weights[rarity];
      if (weight && weight > 0) {
        candidates.push({ name, weight });
      }
    }
    if (candidates.length === 0) return null;

    // 重み付きランダム選択
    const totalWeight = candidates.reduce((sum, c) => sum + c.weight, 0);
    let roll = Math.random() * totalWeight;
    for (const c of candidates) {
      roll -= c.weight;
      if (roll <= 0) return c.name;
    }
    return candidates[0].name;
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

  dispose() {
    this._unlockUnsub?.();
  }
}
