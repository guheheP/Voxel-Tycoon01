/**
 * ゲーム全体の定数・設定値
 * マジックナンバーをここに集約し、バランス調整を容易にします。
 */

export const GameConfig = {
  // --- 日数サイクル ---
  dayDurationSeconds: 90,       // 1日の長さ（秒）
  startingDay: 1,

  // --- 経済 ---
  initialGold: 250,
  dailyRent: 25,
  rentIncreasePerRank: 12,
  bankruptcyThreshold: 0,

  // --- ショップ ---
  shopMaxDisplaySlots: 4,
  shopSellInterval: 8,          // 陳列品の自動販売チェック間隔（秒）
  customerBonusMultiplier: 1.5,

  // --- インベントリ ---
  initialInventoryCapacity: 20,

  // --- 冒険者 ---
  exploreDropCountMin: 1,
  exploreDropCountMax: 2,
  exploreQualityMin: 10,
  exploreQualityMax: 40,
  traitChance: 0.35,

  // --- クラフト ---
  maxTraitSlots: 3,

  // --- お客さん ---
  customerSpawnInterval: 12,    // お客さんの来店間隔（秒）
  maxCustomersPerDay: 6,        // 1日の最大来客数
  customerPatienceSeconds: 20,  // お客さんの滞在時間（秒）

  // --- ゲームクリア ---
  goalShopRank: 8,

  // --- クエスト ---
  questRequiredRatio: 0.67,

  // --- ランク定義 (8段階) ---
  ranks: [
    {
      rank: 1, name: '駆け出しの店',
      requiredSales: 0,
      newRecipes: [],
      newAreas: [],
    },
    {
      rank: 2, name: '町の小さな店',
      requiredSales: 500,
      newRecipes: ['fire_sword', 'ice_shield', 'antidote', 'silver_dagger', 'leather_armor',
                   'iron_spear', 'amber_ring', 'bone_charm', 'stamina_drink', 'iron_helm'],
      newAreas: ['cave'],
    },
    {
      rank: 3, name: '繁盛する道具屋',
      requiredSales: 1500,
      newRecipes: ['mage_staff', 'chainmail', 'elixir', 'wind_bow', 'spirit_robe',
                   'strength_potion', 'spider_cloak', 'crystal_orb', 'dark_blade',
                   'fairy_necklace', 'poison_dagger', 'magic_ink'],
      newAreas: ['forest'],
    },
    {
      rank: 4, name: '名高き工房',
      requiredSales: 3500,
      newRecipes: ['holy_sword', 'dragon_armor', 'phoenix_feather_acc', 'flame_lance',
                   'moonlight_staff', 'silver_mail', 'spirit_potion', 'thunder_hammer',
                   'cursed_ring', 'lava_shield', 'fire_cloak', 'enchant_scroll'],
      newAreas: ['volcano'],
    },
    {
      rank: 5, name: '王都の名店',
      requiredSales: 7000,
      newRecipes: ['trident', 'coral_armor', 'pearl_tiara', 'tidal_bow', 'deep_elixir',
                   'mithril_sword', 'mithril_shield', 'void_amulet', 'frost_blade',
                   'elder_staff', 'sea_serpent_whip', 'lotus_perfume'],
      newAreas: ['deep_sea'],
    },
    {
      rank: 6, name: '大陸一の店',
      requiredSales: 12000,
      newRecipes: ['dragon_slayer', 'storm_cloak', 'ancient_crown', 'sage_stone',
                   'mystic_amulet', 'dragon_bow', 'phoenix_robe', 'void_blade',
                   'dragon_potion', 'thunder_spear', 'cursed_crown', 'scale_shield'],
      newAreas: ['dragon_nest'],
    },
    {
      rank: 7, name: '王国御用達',
      requiredSales: 20000,
      newRecipes: ['sky_sword', 'time_hourglass', 'star_shield', 'divine_armor',
                   'aether_staff', 'sky_bow', 'rainbow_robe', 'divine_elixir',
                   'chaos_ring', 'star_pendant', 'wind_lance', 'phoenix_bow'],
      newAreas: ['sky_tower'],
    },
    {
      rank: 8, name: '伝説のアイテム工房',
      requiredSales: 35000,
      newRecipes: ['legendary_blade', 'world_tree_staff', 'genesis_armor', 'time_blade',
                   'primordial_crown', 'eternity_ring', 'cosmos_bow', 'panacea',
                   'oblivion_shield', 'astral_robe'],
      newAreas: ['time_corridor'],
    },
  ],

  // --- 初期インベントリ ---
  initialItems: [
    { blueprintId: 'stone',  quality: 15, traits: [] },
    { blueprintId: 'wood',   quality: 20, traits: [] },
    { blueprintId: 'wood',   quality: 12, traits: [] },
    { blueprintId: 'herb',   quality: 18, traits: [] },
    { blueprintId: 'clay',   quality: 10, traits: [] },
    { blueprintId: 'sand',   quality: 25, traits: [] },
  ],
};
