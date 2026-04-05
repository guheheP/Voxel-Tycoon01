/**
 * CollectionSystem — 図鑑・コレクション管理
 * 発見したアイテム・素材・ボスを記録し、収集率ボーナスを提供する
 */
import { eventBus } from './core/EventBus.js';
import { ItemBlueprints } from './data/items.js';
import { AreaDefs } from './data/areas.js';
import { GameConfig } from './data/config.js';

export class CollectionSystem {
  constructor() {
    // 発見済みアイテムID (blueprintId) → { firstDay, bestQuality, craftCount }
    this.discoveredItems = {};
    // 発見済みエリアID
    this.discoveredAreas = new Set();
    // 撃破済みボスID
    this.defeatedBosses = new Set();
    // 発見済み特性名
    this.discoveredTraits = new Set();

    this._bindEvents();
  }

  _bindEvents() {
    this._unsubs = [
      // 調合完了
      eventBus.on('item:crafted', (d) => {
        if (d.item) {
          this._registerItem(d.item, 'craft');
          (d.item.traits || []).forEach(t => this.discoveredTraits.add(t));
        }
      }),
      // 探索帰還
      eventBus.on('adventurer:return', (d) => {
        if (d.areaId) this.discoveredAreas.add(d.areaId);
        if (d.items) {
          d.items.forEach(item => {
            this._registerItem(item, 'explore');
            (item.traits || []).forEach(t => this.discoveredTraits.add(t));
          });
        }
      }),
      // 販売
      eventBus.on('item:sold', (d) => {
        if (d.item) this._registerItem(d.item, 'sell');
      }),
      // ボス撃破
      eventBus.on('battle:win', (d) => {
        if (d.rankIndex != null) {
          const rank = GameConfig.ranks[d.rankIndex];
          if (rank?.requiredBossId) {
            this.defeatedBosses.add(rank.requiredBossId);
          }
        }
      }),
      // エリア解放
      eventBus.on('area:unlocked', (d) => {
        if (d.key) this.discoveredAreas.add(d.key);
      }),
    ];
  }

  _registerItem(item, source) {
    const id = item.blueprintId;
    if (!this.discoveredItems[id]) {
      this.discoveredItems[id] = {
        firstDiscovered: Date.now(),
        bestQuality: item.quality,
        count: 1,
      };
      eventBus.emit('collection:newItem', { blueprintId: id, name: item.name });
    } else {
      const entry = this.discoveredItems[id];
      entry.count++;
      if (item.quality > entry.bestQuality) {
        entry.bestQuality = item.quality;
      }
    }
  }

  /** 図鑑の収集率 (0〜1) */
  getCompletionRate() {
    const totalItems = Object.keys(ItemBlueprints).length;
    const discovered = Object.keys(this.discoveredItems).length;
    return totalItems > 0 ? discovered / totalItems : 0;
  }

  /** 収集率ボーナス — 評判に加算される値 */
  getReputationBonus() {
    const rate = this.getCompletionRate();
    // 10%ごとに+1評判ボーナス
    return Math.floor(rate * 10);
  }

  /** カテゴリ別の発見数を取得 */
  getStatsByType() {
    const stats = { material: { total: 0, found: 0 }, equipment: { total: 0, found: 0 }, consumable: { total: 0, found: 0 }, accessory: { total: 0, found: 0 } };
    for (const [id, bp] of Object.entries(ItemBlueprints)) {
      const type = bp.type || 'material';
      if (stats[type]) {
        stats[type].total++;
        if (this.discoveredItems[id]) stats[type].found++;
      }
    }
    return stats;
  }

  /** セーブ用 */
  toSaveData() {
    return {
      discoveredItems: { ...this.discoveredItems },
      discoveredAreas: [...this.discoveredAreas],
      defeatedBosses: [...this.defeatedBosses],
      discoveredTraits: [...this.discoveredTraits],
    };
  }

  /** ロード */
  loadSaveData(data) {
    if (!data) return;
    if (data.discoveredItems) {
      Object.assign(this.discoveredItems, data.discoveredItems);
    }
    if (data.discoveredAreas) {
      data.discoveredAreas.forEach(a => this.discoveredAreas.add(a));
    }
    if (data.defeatedBosses) {
      data.defeatedBosses.forEach(b => this.defeatedBosses.add(b));
    }
    if (data.discoveredTraits) {
      data.discoveredTraits.forEach(t => this.discoveredTraits.add(t));
    }
  }

  dispose() {
    this._unsubs?.forEach(u => u());
  }
}
