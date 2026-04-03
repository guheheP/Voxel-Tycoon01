/**
 * ShopSystem — 商品の陳列と販売管理（AP制対応）
 * 陳列枠はアップグレード購入制、陳列時にAP消費
 */
import { GameConfig } from './data/config.js';
import { UpgradeDefs } from './data/upgrades.js';
import { eventBus } from './core/EventBus.js';

export class ShopSystem {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.displayedItems = [];
    this.maxSlots = GameConfig.shopMaxDisplaySlots;

    // 購入済みアップグレードID一覧
    this.purchasedUpgrades = [];

    // DayCycleSystemの参照（main.jsでセットされる）
    this.dayCycle = null;
  }

  /**
   * アップグレードを購入
   */
  purchaseUpgrade(upgradeId, currentRank) {
    const def = UpgradeDefs.find(u => u.id === upgradeId);
    if (!def) return false;
    if (this.purchasedUpgrades.includes(upgradeId)) return false;
    if (currentRank < def.requiredRank) return false;

    if (!this.inventory.spendGold(def.cost)) {
      eventBus.emit('toast', { message: '💸 ゴールドが足りません', type: 'error' });
      return false;
    }

    this.purchasedUpgrades.push(upgradeId);
    this._applyUpgradeEffect(def);
    eventBus.emit('upgrade:purchased', { upgrade: def });
    eventBus.emit('toast', { message: `🏗️ ${def.name} を購入しました！`, type: 'success' });

    return true;
  }

  _applyUpgradeEffect(def) {
    switch (def.effect.type) {
      case 'display_slots':
        this.maxSlots += def.effect.value;
        break;
      case 'inventory_capacity':
        this.inventory.expandCapacity(def.effect.value);
        break;
      case 'max_ap':
        // AP上限はDayCycleSystemで適用
        if (this.dayCycle) {
          this.dayCycle.refreshMaxAP(this);
        }
        break;
      // 他のエフェクトは対応するシステムが読み取る
    }
  }

  /** 指定エフェクトタイプの購入済み合計値を取得 */
  getUpgradeTotal(effectType) {
    let total = 0;
    for (const id of this.purchasedUpgrades) {
      const def = UpgradeDefs.find(u => u.id === id);
      if (def && def.effect.type === effectType) {
        total += def.effect.value;
      }
    }
    return total;
  }

  /** 指定IDのアップグレードが購入済みか */
  isPurchased(upgradeId) {
    return this.purchasedUpgrades.includes(upgradeId);
  }

  /**
   * インベントリからお店の棚へアイテムを移動する（AP消費）
   */
  displayItem(uid) {
    if (this.displayedItems.length >= this.maxSlots) return false;

    // AP消費チェック
    if (this.dayCycle && !this.dayCycle.spendAP(GameConfig.apCost.display)) {
      return false;
    }

    const item = this.inventory.removeItem(uid);
    if (item) {
      this.displayedItems.push(item);
      eventBus.emit('shop:displayed', { item });
      return true;
    }
    return false;
  }

  /**
   * お客さんが棚の商品を購入する（CustomerSystemから呼ばれる）
   */
  processSale(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.displayedItems.length) return null;
    
    const item = this.displayedItems.splice(itemIndex, 1)[0];
    if (!item) return null;

    // 売値ボーナス (装飾アップグレード)
    const sellBonus = this.getUpgradeTotal('sell_bonus');
    const finalValue = Math.round(item.value * (1 + sellBonus));

    this.inventory.addGold(finalValue);
    eventBus.emit('item:sold', { item: { ...item, value: finalValue } });
    return { ...item, value: finalValue };
  }

  // update(dt) は不要（AP制なのでリアルタイム自動販売しない）
}
