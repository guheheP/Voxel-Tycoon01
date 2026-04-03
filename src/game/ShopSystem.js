/**
 * ShopSystem — リアルタイム販売 + 陳列管理
 */
import { GameConfig } from './data/config.js';
import { ItemBlueprints } from './data/items.js';
import { eventBus } from './core/EventBus.js';
import { StatsTracker } from './StatsTracker.js';

export class ShopSystem {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.displayedItems = [];
    this.maxSlots = GameConfig.shopMaxDisplaySlots;
    this.sellTimer = 0;
    this.purchasedUpgrades = [];
  }

  /** 毎フレーム更新 — 自動販売チェック */
  update(dt) {
    if (this.displayedItems.length === 0) return;
    this.sellTimer += dt;
    if (this.sellTimer >= GameConfig.shopSellInterval) {
      this.sellTimer = 0;
      this._tryAutoSell();
    }
  }

  /** 倉庫からアイテムを陳列 */
  displayItem(uid) {
    if (this.displayedItems.length >= this.maxSlots) return false;
    const item = this.inventory.removeItem(uid);
    if (!item) return false;

    // 売値計算
    item.value = this._calcValue(item);
    this.displayedItems.push(item);
    eventBus.emit('shop:displayed', { item });
    return true;
  }

  /** 陳列棚から取り下げ */
  removeDisplayedItem(uid) {
    const idx = this.displayedItems.findIndex(i => i.uid === uid);
    if (idx === -1) return null;
    const item = this.displayedItems.splice(idx, 1)[0];
    this.inventory.addItem(item);
    return item;
  }

  /** お客さんが指定アイテムを購入 */
  processSale(item, bonusMultiplier = 1) {
    const idx = this.displayedItems.findIndex(i => i.uid === item.uid);
    if (idx === -1) return false;

    this.displayedItems.splice(idx, 1);
    const price = Math.floor((item.value || 10) * bonusMultiplier);
    this.inventory.addGold(price);

    eventBus.emit('item:sold', { item, price });
    StatsTracker.add('itemsSold', 1);
    return true;
  }

  /** 自動販売（お客さんシステムなしのフォールバック） */
  _tryAutoSell() {
    if (this.displayedItems.length === 0) return;
    // お客さんがいない場合のみ低確率で自動販売
    const item = this.displayedItems[Math.floor(Math.random() * this.displayedItems.length)];
    if (Math.random() < 0.15) {
      this.processSale(item);
    }
  }

  _calcValue(item) {
    const bp = ItemBlueprints[item.blueprintId];
    if (!bp) return 10;
    return Math.max(1, Math.floor(bp.baseValue * (item.quality / 50)));
  }

  /** アップグレード適用 */
  applyUpgrade(upgradeId, effect) {
    this.purchasedUpgrades.push(upgradeId);
    if (effect.maxSlots) this.maxSlots += effect.maxSlots;
  }

  /** アップグレード購入済み判定 */
  isPurchased(upgradeId) {
    return this.purchasedUpgrades.includes(upgradeId);
  }
}
