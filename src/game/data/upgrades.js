/**
 * アップグレード定義
 * ランクを上げると「購入権利」が解放され、ゴールドで購入する仕組み
 */

export const UpgradeDefs = [
  // ===== 🏪 販売棚拡張 =====
  { id: 'shop_slots_1',   category: 'shop',     name: '販売棚 拡張I',     description: '陳列枠 +2',           icon: '🏪', cost: 150,  requiredRank: 1, effect: { type: 'display_slots', value: 2 } },
  { id: 'shop_slots_2',   category: 'shop',     name: '販売棚 拡張II',    description: '陳列枠 +2',           icon: '🏪', cost: 500,  requiredRank: 3, effect: { type: 'display_slots', value: 2 } },
  { id: 'shop_slots_3',   category: 'shop',     name: '販売棚 拡張III',   description: '陳列枠 +2',           icon: '🏪', cost: 1200, requiredRank: 5, effect: { type: 'display_slots', value: 2 } },
  { id: 'shop_slots_4',   category: 'shop',     name: '販売棚 拡張IV',    description: '陳列枠 +2',           icon: '🏪', cost: 3000, requiredRank: 7, effect: { type: 'display_slots', value: 2 } },

  // ===== 📦 倉庫拡張 =====
  { id: 'storage_1',      category: 'storage',  name: '倉庫 拡張I',       description: '倉庫容量 +10',        icon: '📦', cost: 100,  requiredRank: 1, effect: { type: 'inventory_capacity', value: 10 } },
  { id: 'storage_2',      category: 'storage',  name: '倉庫 拡張II',      description: '倉庫容量 +10',        icon: '📦', cost: 300,  requiredRank: 2, effect: { type: 'inventory_capacity', value: 10 } },
  { id: 'storage_3',      category: 'storage',  name: '倉庫 拡張III',     description: '倉庫容量 +15',        icon: '📦', cost: 800,  requiredRank: 4, effect: { type: 'inventory_capacity', value: 15 } },
  { id: 'storage_4',      category: 'storage',  name: '倉庫 拡張IV',      description: '倉庫容量 +15',        icon: '📦', cost: 2000, requiredRank: 6, effect: { type: 'inventory_capacity', value: 15 } },
  { id: 'storage_5',      category: 'storage',  name: '倉庫 拡張V',       description: '倉庫容量 +20',        icon: '📦', cost: 5000, requiredRank: 8, effect: { type: 'inventory_capacity', value: 20 } },

  // ===== 🔨 工房設備 =====
  { id: 'craft_quality_1',category: 'workshop', name: '品質管理台',        description: '品質安定 +10',        icon: '🔨', cost: 400,  requiredRank: 3, effect: { type: 'quality_bonus', value: 10 } },
  { id: 'craft_quality_2',category: 'workshop', name: '精密作業台',        description: '品質安定 +10',        icon: '🔨', cost: 1500, requiredRank: 6, effect: { type: 'quality_bonus', value: 10 } },
  { id: 'trait_slot_1',   category: 'workshop', name: '特性研究室',        description: '特性枠 +1',           icon: '🔨', cost: 1800, requiredRank: 5, effect: { type: 'trait_slots', value: 1 } },
  { id: 'trait_slot_2',   category: 'workshop', name: '特性研究室・改',    description: '特性枠 +1',           icon: '🔨', cost: 5000, requiredRank: 7, effect: { type: 'trait_slots', value: 1 } },

  // ===== 👥 冒険者宿舎 =====
  { id: 'dispatch_slot_1', category: 'barracks', name: '派遣所 拡張I',     description: '同時派遣枠 +1',       icon: '👥', cost: 200,  requiredRank: 2, effect: { type: 'dispatch_slots', value: 1 } },
  { id: 'dispatch_slot_2', category: 'barracks', name: '派遣所 拡張II',    description: '同時派遣枠 +1',       icon: '👥', cost: 700,  requiredRank: 4, effect: { type: 'dispatch_slots', value: 1 } },
  { id: 'dispatch_slot_3', category: 'barracks', name: '派遣所 拡張III',   description: '同時派遣枠 +1',       icon: '👥', cost: 2500, requiredRank: 6, effect: { type: 'dispatch_slots', value: 1 } },

  // ===== 🎪 店の装飾 =====
  { id: 'sign_board',     category: 'decor',    name: '看板設置',          description: '来客率 +15%',         icon: '🎪', cost: 80,   requiredRank: 1, effect: { type: 'customer_rate', value: 0.15 } },
  { id: 'interior_1',     category: 'decor',    name: '内装改善',          description: 'お客の滞在 +1AP',     icon: '🎪', cost: 400,  requiredRank: 3, effect: { type: 'patience_ap', value: 1 } },
  { id: 'vip_room',       category: 'decor',    name: 'VIPルーム',         description: '貴族出現率UP',        icon: '🎪', cost: 1200, requiredRank: 5, effect: { type: 'noble_rate', value: 0.3 } },
  { id: 'fame_banner',    category: 'decor',    name: '名声の旗',          description: '評判獲得 +30%',       icon: '🎪', cost: 2000, requiredRank: 6, effect: { type: 'reputation_bonus', value: 0.3 } },
  { id: 'lucky_cat',      category: 'decor',    name: '招き猫',            description: '売値 +10%',          icon: '🎪', cost: 3000, requiredRank: 7, effect: { type: 'sell_bonus', value: 0.1 } },

  // ===== ⚡ 行動力強化 =====
  { id: 'ap_boost_1',     category: 'stamina',  name: '体力トレーニング',   description: '最大AP +2',          icon: '⚡', cost: 300,  requiredRank: 2, effect: { type: 'max_ap', value: 2 } },
  { id: 'ap_boost_2',     category: 'stamina',  name: '滋養強壮薬',        description: '最大AP +2',          icon: '⚡', cost: 1000, requiredRank: 4, effect: { type: 'max_ap', value: 2 } },
  { id: 'ap_boost_3',     category: 'stamina',  name: '仙人の秘薬',        description: '最大AP +3',          icon: '⚡', cost: 3500, requiredRank: 6, effect: { type: 'max_ap', value: 3 } },
];

// カテゴリの表示名
export const UpgradeCategories = {
  shop:     { name: '🏪 販売棚', order: 1 },
  storage:  { name: '📦 倉庫',   order: 2 },
  workshop: { name: '🔨 工房',   order: 3 },
  barracks: { name: '👥 冒険者', order: 4 },
  decor:    { name: '🎪 装飾',   order: 5 },
  stamina:  { name: '⚡ 行動力', order: 6 },
};
