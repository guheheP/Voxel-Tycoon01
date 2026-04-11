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
    /** 型別に陳列中アイテムをバケット化（B2: CustomerSystem の繰り返し filter 回避） */
    this._displayedByType = { equipment: [], consumable: [], accessory: [], material: [] };
    this.maxSlots = GameConfig.shopMaxDisplaySlots;
    this.sellTimer = 0;
    this.purchasedUpgrades = [];
    this._cachedUpgrades = {};

    // オートセル設定
    this.autoSellEnabled = false;
    this.autoSellRules = {
      types: ['equipment', 'consumable', 'accessory'],  // 自動陳列する種類
      minQuality: 0,     // 最低品質
      maxQuality: 100,   // 最高品質
      excludeTraits: false,  // 特性付きは除外
    };
    this.autoSellTimer = 0;

    // 素材自動処分設定
    this.autoDisposeEnabled = false;
    this.autoDisposeMaxQuality = 30;  // この品質以下の素材を自動処分

    // 探索帰還時に自動処分を実行
    this._unsubAdventurerReturn = eventBus.on('adventurer:return', () => {
      this.tryAutoDispose();
    });

    // 他システムからアップグレードボーナスを同期取得するリスナー
    this._unsubUpgradeQuery = eventBus.on('upgrade:queryBonus', (query) => {
      query.result = this.getUpgradeBonus(query.effectType);
    });
  }

  dispose() {
    this._unsubUpgradeQuery?.();
    this._unsubAdventurerReturn?.();
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
    this._addToDisplayedIndex(item);
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
    this._removeFromDisplayedIndex(item);
    this.inventory.addItem(item);
    return item;
  }

  /** お客さんが指定アイテムを購入 */
  processSale(item, bonusMultiplier = 1) {
    const idx = this.displayedItems.findIndex(i => i.uid === item.uid);
    if (idx === -1) return false;

    this.displayedItems.splice(idx, 1);
    this._removeFromDisplayedIndex(item);
    const price = Math.floor((item.value || 10) * bonusMultiplier);
    this.inventory.addGold(price);

    eventBus.emit('item:sold', { item, price });
    StatsTracker.add('itemsSold', 1);
    return true;
  }

  /** 陳列中の型別インデックスに追加 (B2) */
  _addToDisplayedIndex(item) {
    if (!item || !item.type) return;
    const bucket = this._displayedByType[item.type];
    if (bucket) bucket.push(item);
  }

  /** 陳列中の型別インデックスから除去 (B2) */
  _removeFromDisplayedIndex(item) {
    if (!item || !item.type) return;
    const bucket = this._displayedByType[item.type];
    if (!bucket) return;
    const i = bucket.indexOf(item);
    if (i !== -1) bucket.splice(i, 1);
  }

  /** セーブロード後に型別インデックスを再構築する */
  rebuildDisplayedIndex() {
    for (const key of Object.keys(this._displayedByType)) {
      this._displayedByType[key].length = 0;
    }
    for (const item of this.displayedItems) {
      this._addToDisplayedIndex(item);
    }
  }

  /** 指定タイプに合致する陳列中アイテムを返す (B2: CustomerSystem 用) */
  getDisplayedByTypes(types) {
    if (!types || types.length === 0) return [];
    if (types.length === 1) {
      return this._displayedByType[types[0]] || [];
    }
    // 複数タイプの場合は結合
    const result = [];
    for (const t of types) {
      const bucket = this._displayedByType[t];
      if (bucket) result.push(...bucket);
    }
    return result;
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

    // 品質倍率カーブ（緩やか・上限解放対応）
    //   Q0-50    : 0.4 → 1.0  （線形: 0.4 + q/50 × 0.6）
    //   Q51-100  : 1.0 → 2.0  （線形: 1 + (q-50)/50）
    //   Q101-999 : 2.0 → 3.5  （√曲線で鈍化: 2 + sqrt(q-100) × 0.05）
    const q = item.quality;
    let multiplier;
    if (q <= QUALITY_REFERENCE) {
      multiplier = 0.4 + (q / QUALITY_REFERENCE) * 0.6;
    } else if (q <= 100) {
      multiplier = 1.0 + ((q - QUALITY_REFERENCE) / QUALITY_REFERENCE) * 1.0;
    } else {
      multiplier = 2.0 + Math.sqrt(q - 100) * 0.05;
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

    this.recalculateUpgrades();
    eventBus.emit('upgrade:purchased', { upgradeId, effect });
    return true;
  }

  /** 購入済みアップグレードの効果値を再計算してキャッシュに保存 */
  recalculateUpgrades() {
    this._cachedUpgrades = {};
    for (const uid of this.purchasedUpgrades) {
      const def = UpgradeDefs.find(u => u.id === uid);
      if (def) {
        const type = def.effect.type;
        this._cachedUpgrades[type] = (this._cachedUpgrades[type] || 0) + def.effect.value;
      }
    }
  }

  /** 購入済みアップグレードの効果値をキャッシュから即座に返す */
  getUpgradeBonus(effectType) {
    if (this._cachedUpgrades[effectType] !== undefined) {
      return this._cachedUpgrades[effectType];
    }
    return 0;
  }

  /** アップグレード購入済み判定 */
  isPurchased(upgradeId) {
    return this.purchasedUpgrades.includes(upgradeId);
  }

  /** オートセル — ルールに合うアイテムを空き棚へ自動陳列 */
  _tryAutoDisplay() {
    if (this.displayedItems.length >= this.maxSlots) return;
    const rules = this.autoSellRules;

    // 型別インデックスで対象タイプのアイテムだけを取得 → 大きな倉庫でも O(対象タイプのアイテム数)
    const candidates = [];
    for (const type of rules.types) {
      const bucket = this.inventory.getItemsByType(type);
      for (const item of bucket) {
        if (item.locked) continue;
        if (item.quality < rules.minQuality) continue;
        if (item.quality > rules.maxQuality) continue;
        if (rules.excludeTraits && item.traits && item.traits.length > 0) continue;
        candidates.push({ item, value: this._calcValue(item) });
      }
    }
    candidates.sort((a, b) => b.value - a.value);

    // 空き棚分だけ陳列
    let displayed = 0;
    for (const { item } of candidates) {
      if (this.displayedItems.length >= this.maxSlots) break;
      this.displayItem(item.uid);
      displayed++;
    }

    if (displayed > 0) {
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

  /** 一括即時処分 — 複数アイテムを一度に処分（イベント1回のみ発火）*/
  quickSellBulk(uids, inventorySystem) {
    let totalPrice = 0;
    let count = 0;
    for (const uid of uids) {
      const item = inventorySystem.removeItem(uid);
      if (!item) continue;
      const fullValue = this._calcValue(item);
      const price = Math.max(1, Math.floor(fullValue * 0.2));
      inventorySystem.addGold(price);
      totalPrice += price;
      count++;
    }
    if (count > 0) {
      eventBus.emit('item:sold', { item: null, price: totalPrice, bulkCount: count });
      StatsTracker.add('itemsSold', count);
    }
    return totalPrice;
  }

  /** 素材自動処分 — 品質しきい値以下の素材を自動売却（バッチ処理） */
  tryAutoDispose() {
    if (!this.autoDisposeEnabled) return;

    // 型別インデックスで素材だけを取得 → 大きな倉庫でも O(素材数)
    const materials = this.inventory.getItemsByType('material');
    const targets = materials.filter(item =>
      !item.locked && item.quality <= this.autoDisposeMaxQuality
    );
    if (targets.length === 0) return;

    const uids = targets.map(i => i.uid);
    const totalPrice = this.quickSellBulk(uids, this.inventory);

    if (totalPrice > 0) {
      eventBus.emit('toast', {
        message: `🗑 低品質素材を ${uids.length} 個自動処分しました（+${totalPrice}G）`,
        type: 'info',
      });
      eventBus.emit('inventory:changed');
    }
  }
}

