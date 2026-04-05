/**
 * CustomerSystem — リアルタイムお客さん管理
 * 評判(ReputationSystem)に応じて来店頻度・売値が変動
 */
import { GameConfig } from './data/config.js';
import { eventBus } from './core/EventBus.js';

const CUSTOMER_NAMES = [
  { name: '旅の商人', icon: '🧳', dialogue: '珍しいものはないかね？' },
  { name: '見習い騎士', icon: '⚔️', dialogue: '武器を探しています！' },
  { name: '森の薬師', icon: '🌿', dialogue: '良い薬草はある？' },
  { name: 'お嬢様', icon: '👗', dialogue: 'キラキラしたものが欲しいわ' },
  { name: '鍛冶屋の親方', icon: '🔨', dialogue: '素材を仕入れたい' },
  { name: '冒険者', icon: '🗡️', dialogue: '冒険に必要なものを！' },
  { name: '魔法使い', icon: '🧙', dialogue: '魔法の触媒を探している' },
  { name: '村の子供', icon: '👦', dialogue: 'かっこいいの、ある？' },
];

const DEMAND_SETS = [
  ['equipment'],
  ['consumable'],
  ['accessory'],
  ['material'],
  ['equipment', 'consumable'],
  ['equipment', 'accessory'],
  ['consumable', 'material'],
];

export class CustomerSystem {
  constructor(inventorySystem, shopSystem, randomEventSystem, reputationSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.events = randomEventSystem;
    this.reputation = reputationSystem;

    this.customers = [];
    this.spawnTimer = 0;
    this.customersToday = 0;

    // 日替わりリセット
    this._unsub = eventBus.on('day:newDay', () => {
      this.customersToday = 0;
      this.spawnTimer = 0;
      this.customers = [];
    });
  }

  /** 毎フレーム更新 */
  update(dt) {
    // 来店タイマー — 評判で間隔を短縮
    const rateMultiplier = this.reputation ? this.reputation.getCustomerRateMultiplier() : 1.0;
    const spawnInterval = GameConfig.customerSpawnInterval / rateMultiplier;

    this.spawnTimer += dt;
    if (this.spawnTimer >= spawnInterval) {
      this.spawnTimer = 0;
      if (this.customersToday < GameConfig.maxCustomersPerDay) {
        this._spawnCustomer();
      }
    }

    // 滞在タイマー
    for (let i = this.customers.length - 1; i >= 0; i--) {
      const c = this.customers[i];
      c.timer -= dt;

      // 商品チェック（3秒ごと）
      c.checkTimer = (c.checkTimer || 0) + dt;
      if (c.checkTimer >= 3) {
        c.checkTimer = 0;
        this._tryPurchase(c);
      }

      if (c.timer <= 0) {
        this.customers.splice(i, 1);
        eventBus.emit('customer:left', { customer: c, reason: 'timeout' });
      }
    }
  }

  _spawnCustomer() {
    const template = CUSTOMER_NAMES[Math.floor(Math.random() * CUSTOMER_NAMES.length)];
    const demands = DEMAND_SETS[Math.floor(Math.random() * DEMAND_SETS.length)];
    const patience = GameConfig.customerPatienceSeconds;

    const customer = {
      id: crypto.randomUUID(),
      ...template,
      demandTypes: demands,
      timer: patience,
      maxTimer: patience,
      checkTimer: 0,
    };

    this.customers.push(customer);
    this.customersToday++;
    eventBus.emit('customer:arrived', { customer });
  }

  _tryPurchase(customer) {
    const matching = this.shop.displayedItems.filter(item =>
      customer.demandTypes.includes(item.type)
    );
    if (matching.length === 0) return;

    // 最も高いアイテムを購入
    const best = matching.reduce((a, b) => ((b.value || 0) > (a.value || 0) ? b : a));

    // 評判ボーナスを売値に加算
    const priceBonus = this.reputation ? this.reputation.getPriceBonus() : 0;
    const bonus = GameConfig.customerBonusMultiplier * (1 + priceBonus);
    const sold = this.shop.processSale(best, bonus);

    if (sold) {
      // 客は買ったら帰る
      const idx = this.customers.indexOf(customer);
      if (idx !== -1) this.customers.splice(idx, 1);

      eventBus.emit('customer:bought', { customer, item: best });
    }
  }

  getActiveCustomers() { return this.customers; }

  dispose() {
    this._unsub?.();
  }
}

