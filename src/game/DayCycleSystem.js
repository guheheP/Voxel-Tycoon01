/**
 * DayCycleSystem — リアルタイム日数サイクル + 翌日スキップ対応
 * 調合タブ中は時間停止
 */
import { GameConfig } from './data/config.js';
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
    this.paused = false;       // 調合タブなどで一時停止

    // ランク定義
    this.ranks = [
      { name: '駆け出しの店',   salesGoal: 0 },
      { name: '街角の雑貨屋',   salesGoal: 300 },
      { name: '人気の錬金術店', salesGoal: 800 },
      { name: '王都の名店',     salesGoal: 1800 },
      { name: '大陸に名高い工房', salesGoal: 3500 },
      { name: '伝説の錬金術師', salesGoal: 6000 },
      { name: '世界の至宝',     salesGoal: 10000 },
      { name: '神話の工房',     salesGoal: 20000 },
    ];
    this.currentRankIndex = 0;

    // 売上追跡
    this._unsubSold = eventBus.on('item:sold', (d) => {
      this.totalSales += d.price || 0;
      StatsTracker.add('totalRevenue', d.price || 0);
      this._checkRankUp();
    });

    // 一時停止イベント
    eventBus.on('game:pause', () => { this.paused = true; });
    eventBus.on('game:resume', () => { this.paused = false; });
  }

  /** 日数の進行度 (0〜1) */
  get dayProgress() {
    return Math.min(1, this.dayTimer / this.dayDuration);
  }

  get currentRank() { return this.ranks[this.currentRankIndex]; }
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
      });
      return;
    }
    this.inventory.spendGold(rent);

    this.day++;
    StatsTracker.add('totalDays', 1);

    // クエスト更新
    if (this.quest) this.quest.onNewDay(this.day);

    eventBus.emit('day:newDay', { day: this.day, rent });
  }

  _checkRankUp() {
    while (
      this.currentRankIndex < this.ranks.length - 1 &&
      this.totalSales >= this.ranks[this.currentRankIndex + 1].salesGoal
    ) {
      this.currentRankIndex++;
      const rank = this.currentRank;
      eventBus.emit('rank:up', { rank: rank.name, index: this.currentRankIndex });

      if (this.currentRankIndex >= GameConfig.goalShopRank) {
        eventBus.emit('game:clear', {
          day: this.day,
          totalSales: this.totalSales,
          rank: rank.name,
        });
      }
    }
  }

  dispose() {
    if (this._unsubSold) this._unsubSold();
  }
}
