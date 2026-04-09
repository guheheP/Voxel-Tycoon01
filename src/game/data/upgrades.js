/**
 * アップグレード定義
 * ランクを上げると「購入権利」が解放され、ゴールドで購入する仕組み
 *
 * 効果タイプ一覧:
 *   display_slots      — 販売棚の陳列枠を増やす (ShopSystem)
 *   inventory_capacity — 倉庫の容量を増やす (InventorySystem)
 *   quality_bonus      — 調合時のベース品質ボーナス (ItemSystem/CraftingPuzzle)
 *   customer_rate      — 来客間隔を短縮する割合 (CustomerSystem)
 *   customer_patience  — お客さんの滞在時間を延長 (CustomerSystem)
 *   sell_bonus         — 全アイテムの売値を割合UP (ShopSystem)
 *   reputation_bonus   — 評判獲得量を割合UP (ReputationSystem)
 *   explore_speed      — 探索時間を割合短縮 (AdventurerSystem)
 *   battle_item_slots  — ボスバトルの持ち込み枠を増やす (BattlePrepScreen)
 *   puzzle_extra_piece — パズルのブロック数を追加 (CraftingPuzzle)
 *   puzzle_grid_expand — パズルのグリッドサイズ拡張 (CraftingPuzzle)
 *   puzzle_bonus_cap   — パズルの品質ボーナス上限を引き上げ (CraftingPuzzle)
 */

export const UpgradeDefs = [
  // ===== 🏪 販売棚拡張 =====
  { id: 'shop_slots_1',   category: 'shop',     name: '販売棚 拡張I',     description: '陳列枠 +2',           icon: '🏪', cost: 150,  requiredRank: 1, effect: { type: 'display_slots', value: 2 } },
  { id: 'shop_slots_2',   category: 'shop',     name: '販売棚 拡張II',    description: '陳列枠 +2',           icon: '🏪', cost: 500,  requiredRank: 3, effect: { type: 'display_slots', value: 2 } },
  { id: 'shop_slots_3',   category: 'shop',     name: '販売棚 拡張III',   description: '陳列枠 +2',           icon: '🏪', cost: 1200, requiredRank: 5, effect: { type: 'display_slots', value: 2 } },
  { id: 'shop_slots_4',   category: 'shop',     name: '販売棚 拡張IV',    description: '陳列枠 +2',           icon: '🏪', cost: 3000, requiredRank: 7, effect: { type: 'display_slots', value: 2 } },

  // ===== 📦 倉庫拡張 =====
  { id: 'storage_1',      category: 'storage',  name: '倉庫 拡張I',       description: '倉庫容量 +20',        icon: '📦', cost: 100,  requiredRank: 1, effect: { type: 'inventory_capacity', value: 20 } },
  { id: 'storage_2',      category: 'storage',  name: '倉庫 拡張II',      description: '倉庫容量 +20',        icon: '📦', cost: 300,  requiredRank: 2, effect: { type: 'inventory_capacity', value: 20 } },
  { id: 'storage_3',      category: 'storage',  name: '倉庫 拡張III',     description: '倉庫容量 +25',        icon: '📦', cost: 800,  requiredRank: 4, effect: { type: 'inventory_capacity', value: 25 } },
  { id: 'storage_4',      category: 'storage',  name: '倉庫 拡張IV',      description: '倉庫容量 +25',        icon: '📦', cost: 2000, requiredRank: 6, effect: { type: 'inventory_capacity', value: 25 } },
  { id: 'storage_5',      category: 'storage',  name: '倉庫 拡張V',       description: '倉庫容量 +30',        icon: '📦', cost: 5000, requiredRank: 8, effect: { type: 'inventory_capacity', value: 30 } },

  // ===== 🔨 工房設備 =====
  { id: 'craft_quality_1',category: 'workshop', name: '品質管理台',        description: '調合品質 +5',         icon: '🔨', cost: 400,  requiredRank: 2, effect: { type: 'quality_bonus', value: 5 } },
  { id: 'craft_quality_2',category: 'workshop', name: '精密作業台',        description: '調合品質 +5',         icon: '🔨', cost: 1500, requiredRank: 5, effect: { type: 'quality_bonus', value: 5 } },
  { id: 'puzzle_piece_1', category: 'workshop', name: '補助素材棚',        description: 'パズルのブロック +1',   icon: '🧩', cost: 600,  requiredRank: 3, effect: { type: 'puzzle_extra_piece', value: 1 } },
  { id: 'puzzle_piece_2', category: 'workshop', name: '高級素材棚',        description: 'パズルのブロック +1',   icon: '🧩', cost: 2500, requiredRank: 6, effect: { type: 'puzzle_extra_piece', value: 1 } },
  { id: 'puzzle_grid_1',  category: 'workshop', name: '大型調合台',        description: 'パズルのグリッド +1',   icon: '🧩', cost: 1000, requiredRank: 4, effect: { type: 'puzzle_grid_expand', value: 1 } },
  { id: 'puzzle_cap_1',   category: 'workshop', name: '匠の秘伝書',        description: 'パズルボーナス上限 +1', icon: '🧩', cost: 2000, requiredRank: 5, effect: { type: 'puzzle_bonus_cap', value: 1 } },
  { id: 'puzzle_cap_2',   category: 'workshop', name: '極意の書',          description: 'パズルボーナス上限 +1', icon: '🧩', cost: 5000, requiredRank: 7, effect: { type: 'puzzle_bonus_cap', value: 1 } },

  // ===== 🎪 店の装飾 =====
  { id: 'sign_board',     category: 'decor',    name: '看板設置',          description: '来客間隔 -15%',       icon: '🎪', cost: 80,   requiredRank: 1, effect: { type: 'customer_rate', value: 0.15 } },
  { id: 'interior_1',     category: 'decor',    name: '内装改善',          description: 'お客の滞在 +5秒',     icon: '🎪', cost: 400,  requiredRank: 3, effect: { type: 'customer_patience', value: 5 } },
  { id: 'fame_banner',    category: 'decor',    name: '名声の旗',          description: '評判獲得 +30%',       icon: '🎪', cost: 1000, requiredRank: 4, effect: { type: 'reputation_bonus', value: 0.3 } },
  { id: 'lucky_cat',      category: 'decor',    name: '招き猫',            description: '売値 +10%',           icon: '🎪', cost: 2000, requiredRank: 5, effect: { type: 'sell_bonus', value: 0.10 } },
  { id: 'golden_sign',    category: 'decor',    name: '黄金看板',          description: '来客間隔 -15%',       icon: '🎪', cost: 4000, requiredRank: 7, effect: { type: 'customer_rate', value: 0.15 } },

  // ===== 🏕️ 冒険者支援 =====
  { id: 'explore_speed_1', category: 'expedition', name: '探索地図',        description: '探索時間 -10%',       icon: '🏕️', cost: 300,  requiredRank: 2, effect: { type: 'explore_speed', value: 0.10 } },
  { id: 'explore_speed_2', category: 'expedition', name: '冒険者ギルド提携', description: '探索時間 -10%',      icon: '🏕️', cost: 1200, requiredRank: 5, effect: { type: 'explore_speed', value: 0.10 } },
  { id: 'battle_slots_1',  category: 'expedition', name: '携帯用ポーチ',    description: '持ち込み枠 +1',       icon: '🎒', cost: 200,  requiredRank: 2, effect: { type: 'battle_item_slots', value: 1 } },
  { id: 'battle_slots_2',  category: 'expedition', name: '冒険者の鞄',     description: '持ち込み枠 +1',       icon: '🎒', cost: 500,  requiredRank: 3, effect: { type: 'battle_item_slots', value: 1 } },
  { id: 'battle_slots_3',  category: 'expedition', name: '革のバックパック', description: '持ち込み枠 +1',      icon: '🎒', cost: 1000, requiredRank: 4, effect: { type: 'battle_item_slots', value: 1 } },
  { id: 'battle_slots_4',  category: 'expedition', name: '強化リュック',    description: '持ち込み枠 +1',       icon: '🎒', cost: 2000, requiredRank: 5, effect: { type: 'battle_item_slots', value: 1 } },
  { id: 'battle_slots_5',  category: 'expedition', name: '魔法のカバン',    description: '持ち込み枠 +1',       icon: '🎒', cost: 3500, requiredRank: 6, effect: { type: 'battle_item_slots', value: 1 } },
  { id: 'battle_slots_6',  category: 'expedition', name: '異次元収納袋',   description: '持ち込み枠 +1',       icon: '🎒', cost: 5000, requiredRank: 7, effect: { type: 'battle_item_slots', value: 1 } },
];

// カテゴリの表示名
export const UpgradeCategories = {
  shop:       { name: '🏪 販売棚',   order: 1 },
  storage:    { name: '📦 倉庫',     order: 2 },
  workshop:   { name: '🔨 工房',     order: 3 },
  decor:      { name: '🎪 装飾',     order: 4 },
  expedition: { name: '🏕️ 冒険支援', order: 5 },
};
