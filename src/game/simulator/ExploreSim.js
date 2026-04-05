/**
 * ExploreSim — 探索シミュレータ
 * AdventurerSystem の計算式を pure function として移植
 */
import { AdventurerDefs, UnlockableAdventurers, LevelBonuses } from '../data/adventurers.js';
import { AreaDefs } from '../data/areas.js';
import { TraitDefs } from '../data/items.js';
import { GameConfig } from '../data/config.js';

const BASE_SUCCESS_RATE = 50;
const DIFFICULTY_PENALTY = 30;

const _allAdvDefs = [...AdventurerDefs, ...UnlockableAdventurers];

/** 成功率計算（AdventurerSystem.calcSuccessRate と完全一致） */
function calcSuccessRate(level, difficulty, exploreSuccessBonus = 0) {
  const levelBonus = (level - 1) * LevelBonuses.successBonus;
  const difficultyPenalty = (difficulty || 0) * DIFFICULTY_PENALTY;
  const rate = BASE_SUCCESS_RATE + levelBonus + exploreSuccessBonus - difficultyPenalty;
  return Math.min(100, Math.max(10, rate));
}

/** 探索時間計算（AdventurerSystem._calcExploreTime と完全一致） */
function calcExploreTime(level, baseTime, exploreTimeMultiplier, speedBonus = 0) {
  const levelReduction = 1 - ((level - 1) * LevelBonuses.timeReduction);
  const speedMult = 1 - (speedBonus / 100);
  return Math.max(8, Math.ceil(baseTime * (exploreTimeMultiplier || 1.0) * levelReduction * speedMult));
}

/** 品質計算（AdventurerSystem._completeExploration と完全一致） */
function calcQualityRange(level, area, weaponQ, qualityBonus = 0) {
  const areaMinQ = area.qualityMin || GameConfig.exploreQualityMin || 10;
  const areaMaxQ = area.qualityMax || GameConfig.exploreQualityMax || 50;

  if (weaponQ > 0) {
    const baseQ = areaMinQ + (areaMaxQ - areaMinQ) * (weaponQ / 100);
    const spread = (areaMaxQ - areaMinQ) * 0.1;
    const min = Math.min(100, Math.max(1, Math.round(baseQ - spread) + (level - 1) + qualityBonus));
    const max = Math.min(100, Math.max(1, Math.round(baseQ + spread) + (level - 1) + qualityBonus));
    const avg = Math.min(100, Math.max(1, Math.round(baseQ) + (level - 1) + qualityBonus));
    return { min, avg, max };
  } else {
    const min = Math.min(100, Math.max(1, areaMinQ + (level - 1) + qualityBonus));
    const max = Math.min(100, Math.max(1, areaMinQ + 10 + (level - 1) + qualityBonus));
    const avg = Math.min(100, Math.max(1, areaMinQ + 5 + (level - 1) + qualityBonus));
    return { min, avg, max };
  }
}

/**
 * 探索シミュレーション
 * @param {Object} params
 * @param {string} params.adventurerId
 * @param {number} params.level
 * @param {string} params.areaId
 * @param {number} params.weaponQ   武器品質 (0=なし)
 * @returns {{
 *   successRatePct: number,
 *   exploreTimeSec: number,
 *   itemsPerHour: number,
 *   dropsPerRun: number,
 *   qualityDist: { min: number, avg: number, max: number }
 * }}
 */
export function simulateExploration(params) {
  const { adventurerId, level, areaId, weaponQ = 0 } = params;

  const def = _allAdvDefs.find(d => d.id === adventurerId);
  if (!def) throw new Error(`Adventurer not found: ${adventurerId}`);
  const area = AreaDefs[areaId];
  if (!area) throw new Error(`Area not found: ${areaId}`);

  const successRate = calcSuccessRate(level, area.difficulty);
  const exploreTime = calcExploreTime(level, area.baseTime, def.exploreTimeMultiplier);
  const qualityDist = calcQualityRange(level, area, weaponQ);

  const minDrops = area.dropCountMin || GameConfig.exploreDropCountMin || 1;
  const maxDrops = area.dropCountMax || GameConfig.exploreDropCountMax || 2;
  const avgDrops = (minDrops + maxDrops) / 2;

  // アイテム/時間 = 1時間あたりの探索回数 × 成功率 × 平均ドロップ数
  const runsPerHour = 3600 / exploreTime;
  const itemsPerHour = runsPerHour * (successRate / 100) * avgDrops;

  return {
    successRatePct: successRate,
    exploreTimeSec: exploreTime,
    itemsPerHour: Math.round(itemsPerHour * 10) / 10,
    dropsPerRun: avgDrops,
    qualityDist,
  };
}

/**
 * 複数冒険者×複数エリアの比較テーブルを生成
 */
export function simulateExplorationMatrix(adventurerIds, levels, areaIds, weaponQ = 0) {
  return adventurerIds.map((id, i) =>
    areaIds.map(areaId => {
      try {
        return simulateExploration({ adventurerId: id, level: levels[i] || 1, areaId, weaponQ });
      } catch {
        return null;
      }
    })
  );
}

export function getAllAreas() {
  return Object.values(AreaDefs);
}

export function getAllAdventurerDefs() {
  return [...AdventurerDefs, ...UnlockableAdventurers];
}
