/**
 * QuestSystem — クエスト進捗管理
 * eventBusのイベントを購読して自動的にカウントを更新する
 */
import { eventBus } from './core/EventBus.js';
import { QuestDefs } from './data/quests.js';
import { GameConfig } from './data/config.js';

export class QuestSystem {
  constructor() {
    // クエスト進捗: { questId: currentCount }
    this.progress = {};
    // 日別売上トラッキング（daily_sales条件用）
    this._currentDaySales = 0;
    this._bestDaySales = 0;
    // 購入したアップグレード数
    this.upgradeCount = 0;

    this._initProgress();
    this._bindEvents();
  }

  _initProgress() {
    this._forEachQuest(q => {
      if (!(q.id in this.progress)) {
        this.progress[q.id] = 0;
      }
    });
  }

  _bindEvents() {
    // 売った
    eventBus.on('item:sold', (data) => {
      this._increment('sell_count', 1);
      const type = data.item?.type;
      if (type) this._incrementFiltered('sell_type', type, 1);
      this._currentDaySales += data.item?.value || 0;
    });

    // 客が買った
    eventBus.on('customer:bought', (data) => {
      this._increment('total_customers', 1);
      const custId = data.customer?.id;
      if (custId) this._incrementFiltered('serve_customer', custId, 1);
    });

    // 調合した
    eventBus.on('item:crafted', (data) => {
      this._increment('craft_count', 1);
      const quality = data.item?.quality || 0;
      this._updateMax('craft_quality', quality);
      if (data.item?.traits?.length > 0) {
        this._increment('craft_with_trait', 1);
      }
      const traitCount = data.item?.traits?.length || 0;
      this._updateMax('craft_max_traits', traitCount);
    });

    // 探索完了
    eventBus.on('adventurer:return', (data) => {
      this._increment('explore_count', 1);
      const areaId = data.areaId;
      if (areaId) this._incrementFiltered('explore_area', areaId, 1);
    });

    // 日替わり
    eventBus.on('day:newDay', () => {
      if (this._currentDaySales > this._bestDaySales) {
        this._bestDaySales = this._currentDaySales;
      }
      // daily_sales は「最高日売上」を記録
      this._updateDailySales();
      this._currentDaySales = 0;
    });

    // アップグレード購入
    eventBus.on('upgrade:purchased', () => {
      this.upgradeCount++;
      this._updateUpgradeCount();
    });
  }

  /** 全クエストを走査してコールバックを呼ぶ共通ヘルパー */
  _forEachQuest(fn) {
    for (const [, quests] of Object.entries(QuestDefs)) {
      for (const q of quests) {
        fn(q);
      }
    }
  }

  /** 指定conditionTypeの全クエスト進捗を加算 */
  _increment(conditionType, amount) {
    this._forEachQuest(q => {
      if (q.conditionType === conditionType) {
        this.progress[q.id] = (this.progress[q.id] || 0) + amount;
      }
    });
  }

  /** フィルタ付きインクリメント (targetArea/targetType/targetCustomer に一致するクエストのみ) */
  _incrementFiltered(conditionType, filterValue, amount) {
    this._forEachQuest(q => {
      if (q.conditionType !== conditionType) return;
      const match =
        (q.targetArea     && q.targetArea     === filterValue) ||
        (q.targetType     && q.targetType     === filterValue) ||
        (q.targetCustomer && q.targetCustomer === filterValue);
      if (match) {
        this.progress[q.id] = (this.progress[q.id] || 0) + amount;
      }
    });
  }

  /** 最大値更新 (品質・トレイト数など) */
  _updateMax(conditionType, value) {
    this._forEachQuest(q => {
      if (q.conditionType === conditionType) {
        this.progress[q.id] = Math.max(this.progress[q.id] || 0, value);
      }
    });
  }

  _updateDailySales() {
    this._forEachQuest(q => {
      if (q.conditionType === 'daily_sales') {
        this.progress[q.id] = Math.max(this.progress[q.id] || 0, this._bestDaySales);
      }
    });
  }

  _updateUpgradeCount() {
    this._forEachQuest(q => {
      if (q.conditionType === 'upgrade_count') {
        this.progress[q.id] = this.upgradeCount;
      }
    });
  }

  /** 累計売上をセット (DayCycleSystemから呼ばれる) */
  updateTotalSales(totalSales) {
    this._forEachQuest(q => {
      if (q.conditionType === 'total_sales') {
        this.progress[q.id] = totalSales;
      }
    });
  }

  /** 指定クエストが完了しているか */
  isQuestComplete(questId) {
    const quest = this._findQuest(questId);
    if (!quest) return false;
    return (this.progress[questId] || 0) >= quest.target;
  }

  /** 指定ランクのクエスト一覧と進捗を取得 */
  getQuestsForRank(rankNumber) {
    const key = `rank${rankNumber}`;
    const quests = QuestDefs[key] || [];
    return quests.map(q => ({
      ...q,
      current: this.progress[q.id] || 0,
      complete: (this.progress[q.id] || 0) >= q.target,
    }));
  }

  /** 指定ランクのクエスト達成条件を満たしているか */
  isRankQuestSatisfied(rankNumber) {
    const quests = this.getQuestsForRank(rankNumber);
    if (quests.length === 0) return true; // クエスト無しなら自動達成
    const completedCount = quests.filter(q => q.complete).length;
    const required = Math.ceil(quests.length * GameConfig.questRequiredRatio);
    return completedCount >= required;
  }

  /** クエスト必要達成数を取得 */
  getRequiredCount(rankNumber) {
    const quests = this.getQuestsForRank(rankNumber);
    return Math.ceil(quests.length * GameConfig.questRequiredRatio);
  }

  _findQuest(questId) {
    let found = null;
    this._forEachQuest(q => { if (q.id === questId) found = q; });
    return found;
  }

  // --- セーブ/ロード ---
  toSaveData() {
    return {
      progress: { ...this.progress },
      bestDaySales: this._bestDaySales,
      upgradeCount: this.upgradeCount,
    };
  }

  loadSaveData(data) {
    if (!data) return;
    if (data.progress) {
      Object.assign(this.progress, data.progress);
    }
    this._bestDaySales = data.bestDaySales || 0;
    this.upgradeCount = data.upgradeCount || 0;
  }
}
