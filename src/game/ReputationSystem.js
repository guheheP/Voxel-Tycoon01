/**
 * ReputationSystem — 店の評判を管理
 * 
 * 評判レベルに応じて来客数・客種・売値ボーナスが変化する
 */
import { eventBus } from './core/EventBus.js';

// 評判レベル定義
const ReputationLevels = [
  { level: 1, name: '無名の店',    icon: '☆',  minRep: 0,   customerRate: 1.0, priceBonus: 0,    customerPool: ['villager', 'adventurer_customer'] },
  { level: 2, name: '知られた店',   icon: '★',  minRep: 30,  customerRate: 1.3, priceBonus: 0.05, customerPool: ['villager', 'adventurer_customer', 'soldier', 'healer'] },
  { level: 3, name: '人気店',      icon: '★★', minRep: 80,  customerRate: 1.6, priceBonus: 0.10, customerPool: ['villager', 'adventurer_customer', 'soldier', 'healer', 'merchant', 'scholar', 'alchemist'] },
  { level: 4, name: '王国御用達',   icon: '★★★', minRep: 150, customerRate: 2.0, priceBonus: 0.15, customerPool: ['villager', 'adventurer_customer', 'soldier', 'healer', 'merchant', 'noble', 'witch', 'scholar', 'alchemist', 'knight', 'dancer'] },
  { level: 5, name: '伝説の名店',   icon: '🌟',  minRep: 250, customerRate: 2.5, priceBonus: 0.20, customerPool: ['villager', 'adventurer_customer', 'soldier', 'healer', 'merchant', 'noble', 'witch', 'scholar', 'alchemist', 'knight', 'dancer', 'pirate', 'fairy'] },
];

export class ReputationSystem {
  constructor() {
    this.reputation = 0;
    this.currentLevel = ReputationLevels[0];

    this._bindEvents();
  }

  _bindEvents() {
    // 売買完了 → 評判UP
    this._unsubBought = eventBus.on('customer:bought', (data) => {
      // 品質ティアに応じた評判ボーナス
      const quality = data.item?.quality || 30;
      let gain = 1;
      if (quality >= 80) gain = 4;
      else if (quality >= 60) gain = 3;
      else if (quality >= 40) gain = 2;

      this.addReputation(gain);
    });

    // お客が買わずに帰る → 評判DOWN
    this._unsubLeft = eventBus.on('customer:left', (data) => {
      if (data?.reason === 'no_match' || data?.reason === 'timeout') {
        this.addReputation(-2);
      }
    });

    // ランクアップ → 評判ボーナス
    this._unsubRankUp = eventBus.on('rank:up', () => {
      this.addReputation(10);
    });

    // 調合成功 → 少し評判UP
    this._unsubCrafted = eventBus.on('item:crafted', () => {
      this.addReputation(1);
    });
  }

  addReputation(amount) {
    const oldLevel = this.currentLevel;
    this.reputation = Math.max(0, this.reputation + amount);
    this._updateLevel();

    if (this.currentLevel !== oldLevel) {
      eventBus.emit('reputation:levelUp', {
        level: this.currentLevel.level,
        name: this.currentLevel.name,
        icon: this.currentLevel.icon,
      });
    }

    eventBus.emit('reputation:changed', {
      reputation: this.reputation,
      level: this.currentLevel,
    });
  }

  _updateLevel() {
    for (let i = ReputationLevels.length - 1; i >= 0; i--) {
      if (this.reputation >= ReputationLevels[i].minRep) {
        this.currentLevel = ReputationLevels[i];
        return;
      }
    }
    this.currentLevel = ReputationLevels[0];
  }

  /** 現在の来客倍率 */
  getCustomerRateMultiplier() {
    return this.currentLevel.customerRate;
  }

  /** 売値ボーナス（0.0 ~ 0.20） */
  getPriceBonus() {
    return this.currentLevel.priceBonus;
  }

  /** 来店可能な客種ID一覧 */
  getAvailableCustomerPool() {
    return this.currentLevel.customerPool;
  }

  /** 次レベルまでの進捗 (0.0~1.0) */
  getProgress() {
    const idx = ReputationLevels.indexOf(this.currentLevel);
    if (idx >= ReputationLevels.length - 1) return 1.0;
    const next = ReputationLevels[idx + 1];
    const range = next.minRep - this.currentLevel.minRep;
    const progress = this.reputation - this.currentLevel.minRep;
    return Math.min(1.0, progress / range);
  }

  /** セーブ用データ */
  toSaveData() {
    return { reputation: this.reputation };
  }

  /** ロード */
  loadSaveData(data) {
    if (data && typeof data.reputation === 'number') {
      this.reputation = data.reputation;
      this._updateLevel();
    }
  }

  dispose() {
    this._unsubBought?.();
    this._unsubLeft?.();
    this._unsubRankUp?.();
    this._unsubCrafted?.();
  }
}
