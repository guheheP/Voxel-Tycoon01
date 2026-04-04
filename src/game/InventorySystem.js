/**
 * InventorySystem — 所持品（アイテム＆ゴールド）の管理
 * 倉庫容量制限付き
 */
import { createItemInstance } from './ItemSystem.js';
import { GameConfig } from './data/config.js';
import { eventBus } from './core/EventBus.js';

export class InventorySystem {
  constructor() {
    this.gold = GameConfig.initialGold;
    this.items = [];
    this.maxCapacity = GameConfig.initialInventoryCapacity;

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
    this.items.push(itemInstance);
    eventBus.emit('inventory:changed');
    return true;
  }

  /** 容量無視でアイテム追加（探索報酬等、確実に追加したい場合） */
  forceAddItem(itemInstance) {
    this.items.push(itemInstance);
    eventBus.emit('inventory:changed');
  }

  removeItem(uid) {
    const idx = this.items.findIndex(i => i.uid === uid);
    if (idx !== -1) {
      return this.items.splice(idx, 1)[0];
    }
    return null;
  }

  getItems() {
    return this.items;
  }

  getItemsByBlueprint(blueprintId) {
    return this.items.filter(i => i.blueprintId === blueprintId);
  }

  /** 容量拡張 (アップグレード購入時) */
  expandCapacity(amount) {
    this.maxCapacity += amount;
    eventBus.emit('toast', { message: `📦 倉庫容量が ${amount} 増えました！（${this.maxCapacity}枠）`, type: 'success' });
  }
}
