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

    // オートセル設定
    this.autoSellEnabled = false;
    this.autoSellRules = {
      types: ['equipment', 'consumable', 'accessory'],  // 自動陳列する種類
      minQuality: 0,     // 最低品質
      maxQuality: 100,   // 最高品質
      excludeTraits: false,  // 特性付きは除外
    };
    this.autoSellTimer = 0;

    // 他システムからアップグレードボーナスを同期取得するリスナー
    this._unsubUpgradeQuery = eventBus.on('upgrade:queryBonus', (query) => {
      query.result = this.getUpgradeBonus(query.effectType);
    });
  }

  /** 毎フレーム更新 — 自動販売チェック + オートセル */
  update(dt) {
    // オートセル: 5秒ごとに空き棚へ自動陳列
    if (this.autoSellEnabled) {
      this.autoSellTimer += dt;
      if (this.autoSellTimer >= 5) {
        this.autoSellTimer = 0;
        this._tryAutoDisplay();
      }
    }

    if (this.displayedItems.length === 0 && !this.autoSellEnabled) return;
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

  /** 売値計算 — アップグレードボーナスを含む */
  _calcValue(item) {
    let value = ShopSystem.calcValue(item);
    // sell_bonusアップグレードを適用
    const sellBonus = this.getUpgradeBonus('sell_bonus');
    if (sellBonus > 0) {
      value = Math.max(1, Math.floor(value * (1 + sellBonus)));
    }
    return value;
  }

  /** 売値計算（静的メソッド — ShopSystem インスタンスなしで呼べる） */
  static calcValue(item) {
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

    // アクセサリ系アイテムのボーナス倍率
    if (bp.type === 'accessory') {
      value = Math.floor(value * 1.3);
    }

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

    // 効果の適用（即時効果はここで処理、参照型はgetUpgradeBonus()経由）
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
        // customer_rate, customer_patience, sell_bonus, reputation_bonus,
        // quality_bonus, trait_slots, explore_speed, battle_item_slots
        // → 各システムが getUpgradeBonus() で参照
        break;
    }

    eventBus.emit('upgrade:purchased', { upgradeId, effect });
    return true;
  }

  /** 購入済みアップグレードの効果値を合算して返す */
  getUpgradeBonus(effectType) {
    let total = 0;
    for (const uid of this.purchasedUpgrades) {
      const def = UpgradeDefs.find(u => u.id === uid);
      if (def && def.effect.type === effectType) {
        total += def.effect.value;
      }
    }
    return total;
  }

  /** アップグレード購入済み判定 */
  isPurchased(upgradeId) {
    return this.purchasedUpgrades.includes(upgradeId);
  }

  /** オートセル — ルールに合うアイテムを空き棚に自動陳列 */
  _tryAutoDisplay() {
    if (this.displayedItems.length >= this.maxSlots) return;
    const rules = this.autoSellRules;

    // ルールに合う候補を売値順で取得
    const candidates = this.inventory.items
      .filter(item => {
        if (item.locked) return false; // ロック済みは除外
        if (!rules.types.includes(item.type)) return false;
        if (item.quality < rules.minQuality) return false;
        if (item.quality > rules.maxQuality) return false;
        if (rules.excludeTraits && item.traits && item.traits.length > 0) return false;
        return true;
      })
      .map(item => ({ item, value: this._calcValue(item) }))
      .sort((a, b) => b.value - a.value);

    // 空き棚分だけ陳列
    for (const { item } of candidates) {
      if (this.displayedItems.length >= this.maxSlots) break;
      this.displayItem(item.uid);
    }

    if (candidates.length > 0) {
      eventBus.emit('inventory:changed');
    }
  }

  /** 即時処分 — 売値の20%でアイテムを即座に売却 */
  quickSell(uid, inventorySystem) {
    const item = inventorySystem.removeItem(uid);
    if (!item) return 0;
    const fullValue = this._calcValue(item);
    const price = Math.max(1, Math.floor(fullValue * 0.2));
    inventorySystem.addGold(price);
    eventBus.emit('item:sold', { item, price });
    StatsTracker.add('itemsSold', 1);
    return price;
  }

  /** 一括即時処分 — 複数アイテムを一度に処分 */
  quickSellBulk(uids, inventorySystem) {
    let totalPrice = 0;
    for (const uid of uids) {
      totalPrice += this.quickSell(uid, inventorySystem);
    }
    return totalPrice;
  }
}

