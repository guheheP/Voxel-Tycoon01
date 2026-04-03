/**
 * StatsTracker — 売上・調合・来客等のゲーム統計を記録
 */
import { eventBus } from './core/EventBus.js';

class StatsTrackerClass {
  constructor() {
    this.totalGoldEarned = 0;
    this.totalItemsSold = 0;
    this.totalItemsCrafted = 0;
    this.totalCustomersServed = 0;
    this.totalCustomersLost = 0;
    this.totalPuzzlesPlayed = 0;
    this.bestPuzzleScore = 0;

    // 日別売上記録 (最大30日分)
    this.dailySales = [];
    this._currentDaySales = 0;

    // カテゴリ別売上
    this.salesByType = {
      equipment: 0,
      consumable: 0,
      accessory: 0,
      material: 0,
    };

    this._bindEvents();
  }

  _bindEvents() {
    eventBus.on('item:sold', (data) => {
      const price = data.price || data.item?.value || 0;
      this.totalGoldEarned += price;
      this.totalItemsSold++;
      this._currentDaySales += price;

      // カテゴリ別
      const type = data.item?.type || 'material';
      if (this.salesByType[type] !== undefined) {
        this.salesByType[type] += price;
      }
    });

    eventBus.on('item:crafted', () => {
      this.totalItemsCrafted++;
    });

    eventBus.on('customer:bought', () => {
      this.totalCustomersServed++;
    });

    eventBus.on('customer:left', () => {
      this.totalCustomersLost++;
    });

    eventBus.on('day:newDay', () => {
      this.dailySales.push(this._currentDaySales);
      if (this.dailySales.length > 30) this.dailySales.shift();
      this._currentDaySales = 0;
    });
  }

  recordPuzzle(score) {
    this.totalPuzzlesPlayed++;
    if (score > this.bestPuzzleScore) {
      this.bestPuzzleScore = score;
    }
  }

  /** 任意の統計を追加 */
  add(key, amount = 1) {
    if (this[key] !== undefined) {
      this[key] += amount;
    } else {
      this[key] = amount;
    }
  }

  /** 直近N日の売上平均 */
  getAverageDailySales(days = 7) {
    const slice = this.dailySales.slice(-days);
    if (slice.length === 0) return 0;
    return Math.round(slice.reduce((a, b) => a + b, 0) / slice.length);
  }

  /** セーブ用 */
  toSaveData() {
    return {
      totalGoldEarned: this.totalGoldEarned,
      totalItemsSold: this.totalItemsSold,
      totalItemsCrafted: this.totalItemsCrafted,
      totalCustomersServed: this.totalCustomersServed,
      totalCustomersLost: this.totalCustomersLost,
      totalPuzzlesPlayed: this.totalPuzzlesPlayed,
      bestPuzzleScore: this.bestPuzzleScore,
      dailySales: this.dailySales,
      salesByType: { ...this.salesByType },
    };
  }

  /** ロード */
  loadSaveData(data) {
    if (!data) return;
    this.totalGoldEarned = data.totalGoldEarned || 0;
    this.totalItemsSold = data.totalItemsSold || 0;
    this.totalItemsCrafted = data.totalItemsCrafted || 0;
    this.totalCustomersServed = data.totalCustomersServed || 0;
    this.totalCustomersLost = data.totalCustomersLost || 0;
    this.totalPuzzlesPlayed = data.totalPuzzlesPlayed || 0;
    this.bestPuzzleScore = data.bestPuzzleScore || 0;
    this.dailySales = data.dailySales || [];
    if (data.salesByType) {
      Object.assign(this.salesByType, data.salesByType);
    }
  }
}

export const StatsTracker = new StatsTrackerClass();
