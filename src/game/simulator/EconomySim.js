/**
 * EconomySim — 経済シミュレータ
 * ShopSystem / DayCycleSystem の計算式を pure function として移植
 */
import { AreaDefs } from '../data/areas.js';
import { AdventurerDefs, UnlockableAdventurers, LevelBonuses } from '../data/adventurers.js';
import { GameConfig } from '../data/config.js';
import { ItemBlueprints } from '../data/items.js';
import { simulateExploration } from './ExploreSim.js';

const QUALITY_REFERENCE = 50;
const _allAdvDefs = [...AdventurerDefs, ...UnlockableAdventurers];

/** 販売価格計算（ShopSystem._calcValue と完全一致） */
function calcItemValue(blueprintId, quality) {
  const bp = ItemBlueprints[blueprintId];
  if (!bp) return 10;
  let multiplier;
  if (quality <= QUALITY_REFERENCE) {
    multiplier = quality / QUALITY_REFERENCE;
  } else {
    const t = (quality - QUALITY_REFERENCE) / QUALITY_REFERENCE;
    multiplier = 1 + 4 * (t * t);
  }
  return Math.max(1, Math.floor(bp.baseValue * multiplier));
}

/** 維持費計算（DayCycleSystem と完全一致） */
function calcDailyRent(rankIndex) {
  return GameConfig.dailyRent + rankIndex * GameConfig.rentIncreasePerRank;
}

/** エリアのドロップテーブルから平均売値を推定 */
function estimateAreaAvgItemValue(area, avgQuality) {
  if (!area.dropTable || area.dropTable.length === 0) return 20;
  const totalWeight = area.dropTable.reduce((s, d) => s + d.weight, 0);
  let weightedValue = 0;
  for (const drop of area.dropTable) {
    const val = calcItemValue(drop.blueprintId, avgQuality);
    weightedValue += val * (drop.weight / totalWeight);
  }
  return Math.round(weightedValue);
}

/**
 * 経済シミュレーション（N日間）
 * @param {Object} params
 * @param {number} params.numAdventurers    冒険者数
 * @param {string} params.areaId           探索エリア
 * @param {number} params.level            平均冒険者レベル
 * @param {number} params.weaponQ          平均武器品質
 * @param {string} params.adventurerId     代表冒険者ID（探索時間計算用）
 * @param {number} params.craftingIncome   1日あたりの調合品売上（概算）
 * @param {number} params.currentGold      現在の所持金
 * @param {number} params.currentRankIndex 現在のランクインデックス (0=ランク1)
 * @param {number} [days=30]
 * @returns {{
 *   dailyIncome: number[],
 *   dailyExpense: number[],
 *   goldHistory: number[],
 *   rankReachDays: number | null,
 *   totalSales: number,
 * }}
 */
export function simulateEconomy(params, days = 30) {
  const {
    numAdventurers = 2,
    areaId = 'plains',
    level = 1,
    weaponQ = 0,
    adventurerId = 'adv_knight',
    craftingIncome = 0,
    currentGold = 250,
    currentRankIndex = 0,
  } = params;

  const area = AreaDefs[areaId];
  if (!area) throw new Error(`Area not found: ${areaId}`);

  // 探索シミュレーションで1日あたりのアイテム数を推定
  let exploreResult;
  try {
    exploreResult = simulateExploration({ adventurerId, level, areaId, weaponQ });
  } catch {
    exploreResult = { itemsPerHour: 4, qualityDist: { avg: 25 } };
  }

  const dayDurationSec = GameConfig.dayDurationSeconds || 90;
  const itemsPerDay = exploreResult.itemsPerHour * (dayDurationSec / 3600) * numAdventurers;
  const avgQuality = exploreResult.qualityDist.avg;
  const avgItemValue = estimateAreaAvgItemValue(area, avgQuality);
  const exploreIncomePerDay = Math.round(itemsPerDay * avgItemValue);

  const rent = calcDailyRent(currentRankIndex);

  const dailyIncome = [];
  const dailyExpense = [];
  const goldHistory = [currentGold];
  let gold = currentGold;
  let totalSales = 0;

  // ランク目標（現在のランク+1）
  const ranks = GameConfig.ranks || [];
  const nextRank = ranks[currentRankIndex + 1];
  const salesTarget = nextRank ? nextRank.requiredSales : null;
  let rankReachDays = null;
  let cumulativeSales = 0;

  for (let day = 0; day < days; day++) {
    const income = exploreIncomePerDay + craftingIncome;
    const expense = rent;

    dailyIncome.push(income);
    dailyExpense.push(expense);

    gold += income - expense;
    goldHistory.push(Math.max(0, gold));

    cumulativeSales += income;
    totalSales += income;

    if (salesTarget && rankReachDays === null && cumulativeSales >= salesTarget) {
      rankReachDays = day + 1;
    }
  }

  return {
    dailyIncome,
    dailyExpense,
    goldHistory,
    rankReachDays,
    totalSales,
    avgDailyProfit: Math.round((totalSales - rent * days) / days),
    itemsPerDay: Math.round(itemsPerDay * 10) / 10,
    avgItemValue,
  };
}

export function getAllAreas() {
  return Object.values(AreaDefs);
}

export function getAllAdventurerDefs() {
  return _allAdvDefs;
}

export function getRanks() {
  return GameConfig.ranks || [];
}
