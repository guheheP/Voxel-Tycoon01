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
  },
  {
    id: 'adv_archer',
    name: '狩人ロビン',
    icon: '🏹',
    exploreTimeMultiplier: 0.85,
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
  },
  {
    id: 'adv_thief',
    name: '盗賊キャット',
    icon: '🐱',
    exploreTimeMultiplier: 0.7,
    unlockRank: 3,
  },
  {
    id: 'adv_paladin',
    name: '聖騎士セシル',
    icon: '⚜️',
    exploreTimeMultiplier: 1.2,
    unlockRank: 4,
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
  qualityBonus: 2,       // レベルごとに品質+2
  timeReduction: 0.08,   // レベルごとに探索時間-8%
  dropBonus: 0.06,       // レベルごとに追加ドロップ確率+6%
};
