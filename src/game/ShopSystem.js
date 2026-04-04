/**
 * ShopSystem — リアルタイム販売 + 陳列管理
 */
import { GameConfig } from './data/config.js';
import { ItemBlueprints, TraitDefs } from './data/items.js';
import { UpgradeDefs } from './data/upgrades.js';
import { eventBus } from './core/EventBus.js';
import { StatsTracker } from './StatsTracker.js';

const AUTO_SELL_CHANCE = 0.15;  // 自動販売確率 (お客さんなし時のフォールバック)
const QUALITY_REFERENCE = 50;   // 品質基準値: quality=50 のとき baseValue が売値になる

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
    // Bug#3: 倉庫がいっぱいの場合は取り下げを拒否してアイテムロストを防ぐ
    if (this.inventory.isFull) {
      eventBus.emit('toast', { message: '⚠️ 倉庫がいっぱいのため取り下げできません！', type: 'warning' });
      return null;
    }
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

  /** 自動販売（お客さんがいない場合のフォールバック） */
  _tryAutoSell() {
    if (this.displayedItems.length === 0) return;
    const item = this.displayedItems[Math.floor(Math.random() * this.displayedItems.length)];
    if (Math.random() < AUTO_SELL_CHANCE) {
      this.processSale(item);
    }
  }

  _calcValue(item) {
    const bp = ItemBlueprints[item.blueprintId];
    if (!bp) return 10;

    // Q1-50: 線形（quality/50）、Q51-100: 二次曲線で加速
    // Q50=×1.0, Q75=×2.0, Q100=×5.0
    let multiplier;
    if (item.quality <= QUALITY_REFERENCE) {
      multiplier = item.quality / QUALITY_REFERENCE;
    } else {
      const t = (item.quality - QUALITY_REFERENCE) / QUALITY_REFERENCE;
      multiplier = 1 + 4 * (t * t);
    }
    let value = Math.max(1, Math.floor(bp.baseValue * multiplier));

    // 特性の売値ボーナスを合算
    if (item.traits && item.traits.length > 0) {
      let sellBonusPct = 0;
      for (const traitName of item.traits) {
        const def = TraitDefs[traitName];
        if (def && def.effects && def.effects.sellBonus) {
          sellBonusPct += def.effects.sellBonus;
        }
      }
      if (sellBonusPct !== 0) {
        value = Math.max(1, Math.floor(value * (1 + sellBonusPct / 100)));
      }
    }
    return value;
  }

  /** アップグレード購入処理 */
  purchaseUpgrade(upgradeId, currentRank) {
    if (this.isPurchased(upgradeId)) return false;
    const upgradeDef = UpgradeDefs.find(u => u.id === upgradeId);
    if (!upgradeDef) return false;
    if (currentRank < upgradeDef.requiredRank) return false;
    if (!this.inventory.spendGold(upgradeDef.cost)) return false;

    this.purchasedUpgrades.push(upgradeId);

    // 効果の適用
    const effect = upgradeDef.effect;
    switch (effect.type) {
      case 'display_slots':
        this.maxSlots += effect.value;
        eventBus.emit('toast', { message: `🏪 販売棚が ${effect.value} 枠増えました！（${this.maxSlots}枠）`, type: 'success' });
        break;
      case 'inventory_capacity':
        this.inventory.expandCapacity(effect.value);
        break;
      default:
        // その他の効果は各システムで参照可能にする
        break;
    }

    eventBus.emit('upgrade:purchased', { upgradeId, effect });
    return true;
  }

  /** アップグレード購入済み判定 */
  isPurchased(upgradeId) {
    return this.purchasedUpgrades.includes(upgradeId);
  }
}

