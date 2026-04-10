/**
 * InventorySystem — 所持品（アイテム＆ゴールド）の管理
 * 倉庫容量制限付き
 */
import { createItemInstance } from './ItemSystem.js';
import { ItemBlueprints } from './data/items.js';
import { GameConfig } from './data/config.js';
import { eventBus } from './core/EventBus.js';

export class InventorySystem {
  constructor() {
    this.items = [];
    this.gold = GameConfig.initialGold;
    this.maxCapacity = GameConfig.initialInventoryCapacity;
    this._batchMode = false;
    this._batchDirty = false;

    /** 自動ロック対象の特性名セット */
    this.autoLockTraits = new Set();

    // 初期アイテムの生成
    for (const def of GameConfig.initialItems) {
      this.items.push(createItemInstance(def.blueprintId, def.quality, def.traits));
    }
  }

  get isFull() {
    return this.items.length >= this.maxCapacity;
  }

  get freeSlots() {
    return Math.max(0, this.maxCapacity - this.items.length);
  }

  addGold(amount) {
    this.gold += amount;
    eventBus.emit('gold:changed', { gold: this.gold });
  }

  spendGold(amount) {
    if (this.gold >= amount) {
      this.gold -= amount;
      eventBus.emit('gold:changed', { gold: this.gold });
      return true;
    }
    return false;
  }

  addItem(itemInstance) {
    if (this.isFull) {
      // トーストスパム防止（5秒間隔）
      const now = Date.now();
      if (!this._lastFullToast || now - this._lastFullToast > 5000) {
        eventBus.emit('toast', { message: '⚠️ 倉庫がいっぱいです！素材を整理しましょう', type: 'warning' });
        this._lastFullToast = now;
      }
      return false;
    }
    this._applyAutoLock(itemInstance);
    this.items.push(itemInstance);
    if (this._batchMode) { this._batchDirty = true; } else { eventBus.emit('inventory:changed'); }
    return true;
  }

  /** 容量無視でアイテム追加（探索報酬等、確実に追加したい場合） */
  forceAddItem(itemInstance) {
    this._applyAutoLock(itemInstance);
    this.items.push(itemInstance);
    if (this._batchMode) { this._batchDirty = true; } else { eventBus.emit('inventory:changed'); }
  }

  /** バッチモード開始 — inventory:changed イベント発火を抑制 */
  beginBatch() { this._batchMode = true; this._batchDirty = false; }
  /** バッチモード終了 — 変更があった場合のみ1回イベント発火 */
  endBatch() {
    this._batchMode = false;
    if (this._batchDirty) {
      this._batchDirty = false;
      eventBus.emit('inventory:changed');
    }
  }

  /** 自動ロック判定 — アイテムの特性が autoLockTraits に含まれていればロック */
  _applyAutoLock(item) {
    if (this.autoLockTraits.size === 0) return;
    if (item.traits && item.traits.some(t => this.autoLockTraits.has(t))) {
      item.locked = true;
    }
  }

  /** 自動ロック特性のトグル */
  toggleAutoLockTrait(traitName) {
    if (this.autoLockTraits.has(traitName)) {
      this.autoLockTraits.delete(traitName);
      return false;
    } else {
      this.autoLockTraits.add(traitName);
      return true;
    }
  }

  removeItem(uid, force = false) {
    const idx = this.items.findIndex(i => i.uid === uid);
    if (idx === -1) return null;
    // ロック済みアイテムは force=true でない限り削除不可
    if (this.items[idx].locked && !force) return null;
    return this.items.splice(idx, 1)[0];
  }

  /** アイテムのロック状態を切り替え */
  toggleLock(uid) {
    const item = this.items.find(i => i.uid === uid);
    if (item) {
      item.locked = !item.locked;
      eventBus.emit('inventory:changed');
      return item.locked;
    }
    return false;
  }

  /** ロックされていないアイテムのみを返す */
  getUnlockedItems() {
    return this.items.filter(i => !i.locked);
  }

  getItems() {
    return this.items;
  }

  getItemsByBlueprint(blueprintId) {
    return this.items.filter(i => i.blueprintId === blueprintId);
  }

  /** カテゴリに属するアイテムを返す */
  getItemsByCategory(categoryId) {
    return this.items.filter(i => {
      const bp = ItemBlueprints[i.blueprintId];
      return bp && bp.category === categoryId;
    });
  }

  /** 容量拡張 (アップグレード購入時) */
  expandCapacity(amount) {
    this.maxCapacity += amount;
    eventBus.emit('toast', { message: `📦 倉庫容量が ${amount} 増えました！（${this.maxCapacity}枠）`, type: 'success' });
  }
}
