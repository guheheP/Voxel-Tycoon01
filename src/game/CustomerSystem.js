/**
 * CustomerSystem — リアルタイムお客さん管理
 * 評判(ReputationSystem)に応じて来店頻度・売値が変動
 */
import { GameConfig } from './data/config.js';
import { eventBus } from './core/EventBus.js';

const CUSTOMER_NAMES = [
  { name: '旅の商人', icon: '🧳', type: 'villager', dialogues: ['珍しいものはないかね？', '商売繁盛してるかい？', '何か仕入れたいなあ'] },
  { name: '見習い騎士', icon: '⚔️', type: 'knight', dialogues: ['強力な武器を探しています！', '鍛錬に耐えうる装備はないでしょうか', '任務に役立ちそうなものを頼む'] },
  { name: '森の薬師', icon: '🌿', type: 'villager', dialogues: ['良い薬草は入った？', '調合の素材が足りなくてね', '新薬のヒントになりそうなものは…'] },
  { name: 'お嬢様', icon: '👗', type: 'villager', dialogues: ['キラキラしたものが欲しいわ', '少し退屈なの', '何か珍しいものはある？'] },
  { name: '鍛冶屋の親方', icon: '🔨', type: 'archer', dialogues: ['仕事で使う道具が欲しい', '良い鉱石はあるか？', '頑丈な武具の素材を探してる'] },
  { name: '冒険者', icon: '🗡️', type: 'knight', dialogues: ['冒険に必要なものを頼む！', 'ダンジョンに潜る準備だ', '回復薬は必須だな'] },
  { name: '魔法使い', icon: '🧙', type: 'mage', dialogues: ['魔法の触媒を探している', '知を深める魔導書はないか？', 'マナの込もった品が欲しい'] },
  { name: '村の子供', icon: '👦', type: 'villager', dialogues: ['かっこいいの、ある？', 'すっごい武器が見たい！', 'おこづかいで買えたりするかなぁ'] },
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

  /** アップグレードボーナスをShopSystemから直接取得 */
  _getUpgradeBonus(effectType) {
    if (this.shop) {
      return this.shop.getUpgradeBonus(effectType);
    }
    return 0;
  }

  /** 毎フレーム更新 */
  update(dt) {
    // 来店タイマー — 評判+アップグレードで間隔を短縮
    const rateMultiplier = this.reputation ? this.reputation.getCustomerRateMultiplier() : 1.0;
    const upgradeRate = this._getUpgradeBonus('customer_rate');
    const spawnInterval = GameConfig.customerSpawnInterval / (rateMultiplier + upgradeRate);

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
        // 購入成功で既に除去されていたらスキップ
        if (this.customers.indexOf(c) === -1) continue;
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
    const patience = GameConfig.customerPatienceSeconds + this._getUpgradeBonus('customer_patience');
    const selectedDialogue = template.dialogues[Math.floor(Math.random() * template.dialogues.length)];

    const customer = {
      id: crypto.randomUUID(),
      name: template.name,
      icon: template.icon,
      type: template.type,
      dialogue: selectedDialogue,
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
    // B2: 型別インデックスでマッチを高速取得 (O(displayed) → O(type-bucket))
    const matching = this.shop.getDisplayedByTypes(customer.demandTypes);
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

