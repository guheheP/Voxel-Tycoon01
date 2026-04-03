/**
 * CustomerSystem — AP制対応のお客さん管理
 * AP消費時にランダムで来店、2AP消費後にマッチ商品がなければ帰る
 */
import { GameConfig } from './data/config.js';
import { CustomerDefs } from './data/customers.js';
import { eventBus } from './core/EventBus.js';

export class CustomerSystem {
  constructor(inventorySystem, shopSystem, randomEventSystem, reputationSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.events = randomEventSystem;
    this.reputation = reputationSystem;
    this.activeCustomers = []; // 現在来店中のお客さん
    this._customersToday = 0;  // 今日来店した客数

    // AP消費時にお客さんの来店チャンス
    eventBus.on('ap:spent', (d) => this._onAPSpent(d));

    // 日替わりで客リセット
    eventBus.on('day:newDay', () => this._onNewDay());

    // 陳列時にマッチ判定
    eventBus.on('shop:displayed', () => this._checkMatches());
  }

  getActiveCustomers() {
    return this.activeCustomers;
  }

  _onNewDay() {
    // 残っている客を全員帰す
    for (const customer of this.activeCustomers) {
      eventBus.emit('customer:left', { name: customer.name, icon: customer.icon });
    }
    this.activeCustomers = [];
    this._customersToday = 0;
  }

  _onAPSpent(data) {
    // AP消費ごとに来店チャンスを判定
    const cost = data.cost || 1;
    for (let i = 0; i < cost; i++) {
      this._trySpawnCustomer();
    }

    // 待機中の客の忍耐を更新 (AP消費1回ごとに1カウント)
    for (let i = this.activeCustomers.length - 1; i >= 0; i--) {
      const c = this.activeCustomers[i];
      c.patienceCounter += cost;

      // 忍耐限界を超えたら帰る
      if (c.patienceCounter >= c.maxPatience) {
        this.activeCustomers.splice(i, 1);
        eventBus.emit('customer:left', { name: c.name, icon: c.icon });
        eventBus.emit('inventory:changed');
      }
    }

    // 陳列中アイテムとの即時マッチ判定
    this._checkMatches();
  }

  _trySpawnCustomer() {
    // 最大来客数チェック
    let maxCustomers = GameConfig.maxCustomersPerDay;
    if (this.reputation) {
      maxCustomers = Math.floor(maxCustomers * this.reputation.getCustomerRateMultiplier());
    }
    if (this.events && this.events.hasEffect('double_customers')) {
      maxCustomers *= 2;
    }

    const totalActive = this.activeCustomers.length + this._customersToday;
    if (totalActive >= maxCustomers) return;

    // アップグレードによる来客率ボーナス
    let spawnChance = GameConfig.customerSpawnChance;
    if (this.shop) {
      spawnChance += this.shop.getUpgradeTotal('customer_rate');
    }

    if (Math.random() >= spawnChance) return;

    // 評判による客種プール
    const availablePool = this.reputation
      ? CustomerDefs.filter(c => this.reputation.getAvailableCustomerPool().includes(c.id))
      : CustomerDefs;

    if (availablePool.length === 0) return;

    const def = availablePool[Math.floor(Math.random() * availablePool.length)];

    // 忍耐は基本2AP + アップグレード補正
    let patience = GameConfig.customerPatienceAP;
    if (this.shop) {
      patience += this.shop.getUpgradeTotal('patience_ap');
    }

    const customer = {
      ...def,
      patienceCounter: 0,               // AP消費カウンタ
      maxPatience: patience,             // AP消費何回で帰るか
      timer: patience,                   // UI互換用
      maxTimer: patience,
    };

    this.activeCustomers.push(customer);
    this._customersToday++;

    eventBus.emit('customer:arrived', {
      name: def.name,
      icon: def.icon,
      dialogue: def.dialogue,
    });
  }

  /**
   * 陳列中のアイテムとお客さんのマッチング
   */
  _checkMatches() {
    for (let i = this.activeCustomers.length - 1; i >= 0; i--) {
      const customer = this.activeCustomers[i];
      const match = this._findMatch(customer);
      if (match) {
        this._processPurchase(customer, match, i);
      }
    }
  }

  _findMatch(customer) {
    for (const item of this.shop.displayedItems) {
      if (customer.demandTypes.includes(item.type)) {
        return item;
      }
    }
    return null;
  }

  _processPurchase(customer, item, customerIndex) {
    const idx = this.shop.displayedItems.indexOf(item);
    if (idx === -1) return;
    this.shop.displayedItems.splice(idx, 1);

    // 価格計算
    let price = Math.floor(item.value * GameConfig.customerBonusMultiplier * customer.priceMultiplier);

    // 評判ボーナス
    if (this.reputation) {
      price = Math.floor(price * (1 + this.reputation.getPriceBonus()));
    }

    // イベント効果: 売上ボーナス
    if (this.events && this.events.hasEffect('sell_bonus')) {
      price = Math.floor(price * this.events.getEffectMultiplier('sell_bonus'));
    }

    this.inventory.addGold(price);

    // お客さんを退場
    this.activeCustomers.splice(customerIndex, 1);

    eventBus.emit('customer:bought', {
      customer,
      customerName: customer.name,
      item,
      price,
    });
    eventBus.emit('item:sold', { item: { ...item, value: price } });
    eventBus.emit('inventory:changed');
  }

  // update(dt) は不要（AP制）
}
