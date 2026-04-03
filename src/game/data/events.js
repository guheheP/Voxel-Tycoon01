/**
 * ランダムイベントの定義
 */

export const EventDefs = [
  {
    id: 'merchant_visit',
    name: '旅の商人',
    icon: '🧳',
    description: '旅の商人が珍しい素材を持ってきた！安く買える。',
    effect: 'bonus_material',
    duration: 0,
    weight: 25,
  },
  {
    id: 'storm',
    name: '暴風雨',
    icon: '🌧️',
    description: '激しい嵐が来た。探索時間が50%長くなる。',
    effect: 'explore_slow',
    multiplier: 1.5,
    duration: 1, // 1日間
    weight: 15,
  },
  {
    id: 'festival',
    name: '収穫祭',
    icon: '🎉',
    description: '町でお祭り！来客数が2倍に。',
    effect: 'double_customers',
    duration: 1,
    weight: 15,
  },
  {
    id: 'tax',
    name: '王国の徴税',
    icon: '📜',
    description: '王国から臨時の税金が課されました…',
    effect: 'pay_tax',
    taxAmount: 50,
    duration: 0,
    weight: 12,
  },
  {
    id: 'lucky_find',
    name: '幸運の発見',
    icon: '🍀',
    description: '道端で素材を拾った！',
    effect: 'free_material',
    duration: 0,
    weight: 20,
  },
  {
    id: 'reputation',
    name: '評判の広まり',
    icon: '📢',
    description: '店の評判が広まった！次の売却価格が30%アップ。',
    effect: 'sell_bonus',
    multiplier: 1.3,
    duration: 1,
    weight: 13,
  },
];
