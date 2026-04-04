/**
 * 冒険者・ドロップテーブルのマスターデータ定義
 */

// 冒険者の初期定義
export const AdventurerDefs = [
  {
    id: 'adv_knight',
    name: '新人騎士アーサー',
    icon: '🛡️',
    exploreTimeMultiplier: 1.0,
    battle: { maxHp: 120, atk: 22, def: 15, spd: 70 },
  },
  {
    id: 'adv_archer',
    name: '狩人ロビン',
    icon: '🏹',
    exploreTimeMultiplier: 0.85,
    battle: { maxHp: 90, atk: 28, def: 8, spd: 90 },
  },
];

// Rank 2で加入
export const UnlockableAdventurers = [
  {
    id: 'adv_mage',
    name: '見習い魔女リリー',
    icon: '🧙‍♀️',
    exploreTimeMultiplier: 1.1,
    unlockRank: 2,
    battle: { maxHp: 80, atk: 35, def: 5, spd: 75 },
  },
  {
    id: 'adv_thief',
    name: '盗賊キャット',
    icon: '🐱',
    exploreTimeMultiplier: 0.7,
    unlockRank: 3,
    battle: { maxHp: 100, atk: 25, def: 10, spd: 100 },
  },
  {
    id: 'adv_paladin',
    name: '聖騎士セシル',
    icon: '⚜️',
    exploreTimeMultiplier: 1.2,
    unlockRank: 4,
    battle: { maxHp: 140, atk: 18, def: 20, spd: 60 },
  },
];

// レベルアップに必要な経験値テーブル (累積)
export const LevelExpTable = [
  0,    // Lv1
  3,    // Lv2
  8,    // Lv3
  15,   // Lv4
  25,   // Lv5
  40,   // Lv6
  60,   // Lv7
  85,   // Lv8
  120,  // Lv9
  170,  // Lv10 (max)
];

// レベルごとのボーナス
export const LevelBonuses = {
  qualityBonus: 1,       // レベルごとに品質+1（装備品質がメイン）
  timeReduction: 0.03,   // レベルごとに探索時間-3%（特性がメイン）
  dropBonus: 0.01,       // レベルごとに追加ドロップ確率+1%
  successBonus: 5,       // レベルごとに成功率+5%
};
