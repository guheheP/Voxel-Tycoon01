/**
 * アイテム・レシピのマスターデータ定義
 * 
 * type: 'material' | 'equipment' | 'consumable' | 'accessory'
 * tier: 1〜5 (素材の希少度。高いほどレア)
 */

export const ItemBlueprints = {
  // =====================================================================
  //  素 材 (50種)
  // =====================================================================

  // --- Tier 1: 草原・基本 (10種) ---
  wood: { id: 'wood', name: '木材', type: 'material', tier: 1, baseValue: 4, image: '/art/items/wood.jpeg' },
  stone: { id: 'stone', name: '石材', type: 'material', tier: 1, baseValue: 4, image: '/art/items/stone.jpeg' },
  herb: { id: 'herb', name: '薬草', type: 'material', tier: 1, baseValue: 6, image: '/art/items/herb.jpeg' },
  slime_jelly: { id: 'slime_jelly', name: 'スライムゼリー', type: 'material', tier: 1, baseValue: 8, image: '/art/items/slime_jelly.png' },
  clay: { id: 'clay', name: '粘土', type: 'material', tier: 1, baseValue: 3, image: '/art/items/clay.png' },
  flower_petal: { id: 'flower_petal', name: '花びら', type: 'material', tier: 1, baseValue: 5, image: '/art/items/flower_petal.png' },
  bug_shell: { id: 'bug_shell', name: '虫の殻', type: 'material', tier: 1, baseValue: 6, image: '/art/items/bug_shell.png' },
  feather_small: { id: 'feather_small', name: '小さな羽根', type: 'material', tier: 1, baseValue: 5, image: '/art/items/feather_small.png' },
  sand: { id: 'sand', name: '砂', type: 'material', tier: 1, baseValue: 3, image: '/art/items/sand.png' },
  mushroom: { id: 'mushroom', name: 'キノコ', type: 'material', tier: 1, baseValue: 7, image: '/art/items/mushroom.png' },

  // --- Tier 2: 洞窟・丘陵 (10種) ---
  iron_ore: { id: 'iron_ore', name: '鉄鉱石', type: 'material', tier: 2, baseValue: 12, image: '/art/items/iron_ore.png' },
  cloth: { id: 'cloth', name: '魔法の布', type: 'material', tier: 2, baseValue: 10, image: '/art/items/cloth.png' },
  crystal: { id: 'crystal', name: '水晶', type: 'material', tier: 2, baseValue: 15, image: '/art/items/crystal.png' },
  poison_herb: { id: 'poison_herb', name: '毒草', type: 'material', tier: 2, baseValue: 14, image: '/art/items/poison_herb.png' },
  silver_ore: { id: 'silver_ore', name: '銀鉱石', type: 'material', tier: 2, baseValue: 16, image: '/art/items/silver_ore.png' },
  moss_stone: { id: 'moss_stone', name: '苔石', type: 'material', tier: 2, baseValue: 11, image: '/art/items/moss_stone.png' },
  spider_silk: { id: 'spider_silk', name: '蜘蛛の糸', type: 'material', tier: 2, baseValue: 13, image: '/art/items/spider_silk.png' },
  dark_stone: { id: 'dark_stone', name: '暗黒石', type: 'material', tier: 2, baseValue: 15, image: '/art/items/dark_stone.png' },
  bone: { id: 'bone', name: '古びた骨', type: 'material', tier: 2, baseValue: 10, image: '/art/items/bone.png' },
  amber: { id: 'amber', name: '琥珀', type: 'material', tier: 2, baseValue: 14, image: '/art/items/amber.png' },

  // --- Tier 3: 妖精の森・火山 (10種) ---
  fire_stone: { id: 'fire_stone', name: '火石', type: 'material', tier: 3, baseValue: 25, image: '/art/items/fire_stone.png' },
  ice_shard: { id: 'ice_shard', name: '氷片', type: 'material', tier: 3, baseValue: 25, image: '/art/items/ice_shard.png' },
  feather: { id: 'feather', name: '不死鳥の羽', type: 'material', tier: 3, baseValue: 40, image: '/art/items/feather.png' },
  dragon_scale: { id: 'dragon_scale', name: '竜の鱗', type: 'material', tier: 3, baseValue: 50, image: '/art/items/dragon_scale.png' },
  fairy_dust: { id: 'fairy_dust', name: '妖精の粉', type: 'material', tier: 3, baseValue: 30, image: '/art/items/fairy_dust.png' },
  lava_core: { id: 'lava_core', name: '溶岩核', type: 'material', tier: 3, baseValue: 28, image: '/art/items/lava_core.png' },
  spirit_essence: { id: 'spirit_essence', name: '精霊のエッセンス', type: 'material', tier: 3, baseValue: 35, image: '/art/items/spirit_essence.png' },
  enchanted_wood: { id: 'enchanted_wood', name: '霊樹の枝', type: 'material', tier: 3, baseValue: 22, image: '/art/items/enchanted_wood.png' },
  thunder_stone: { id: 'thunder_stone', name: '雷石', type: 'material', tier: 3, baseValue: 30, image: '/art/items/thunder_stone.png' },
  cursed_gem: { id: 'cursed_gem', name: '呪いの宝石', type: 'material', tier: 3, baseValue: 32, image: '/art/items/cursed_gem.png' },

  // --- Tier 4: 深海・竜の巣 (10種) ---
  deep_pearl: { id: 'deep_pearl', name: '深海の真珠', type: 'material', tier: 4, baseValue: 55 },
  moonstone: { id: 'moonstone', name: '月光石', type: 'material', tier: 4, baseValue: 60 },
  wind_crystal: { id: 'wind_crystal', name: '風の結晶', type: 'material', tier: 4, baseValue: 50 },
  coral_fragment: { id: 'coral_fragment', name: '古代珊瑚', type: 'material', tier: 4, baseValue: 45 },
  mithril_ore: { id: 'mithril_ore', name: 'ミスリル鉱', type: 'material', tier: 4, baseValue: 65 },
  void_shard: { id: 'void_shard', name: '虚空の欠片', type: 'material', tier: 4, baseValue: 55 },
  elder_bark: { id: 'elder_bark', name: '長老樹の樹皮', type: 'material', tier: 4, baseValue: 48 },
  sea_serpent_fin: { id: 'sea_serpent_fin', name: '海竜のヒレ', type: 'material', tier: 4, baseValue: 58 },
  frozen_tear: { id: 'frozen_tear', name: '凍れる涙', type: 'material', tier: 4, baseValue: 52 },
  black_lotus: { id: 'black_lotus', name: '黒蓮華', type: 'material', tier: 4, baseValue: 62 },

  // --- Tier 5: 天空・時の回廊 (10種) ---
  sky_fragment: { id: 'sky_fragment', name: '天空の欠片', type: 'material', tier: 5, baseValue: 80 },
  time_sand: { id: 'time_sand', name: '時の砂', type: 'material', tier: 5, baseValue: 90 },
  rainbow_scale: { id: 'rainbow_scale', name: '虹色の鱗', type: 'material', tier: 5, baseValue: 85 },
  star_dust: { id: 'star_dust', name: '星屑', type: 'material', tier: 5, baseValue: 75 },
  world_tree_sap: { id: 'world_tree_sap', name: '世界樹の樹液', type: 'material', tier: 5, baseValue: 100 },
  divine_ore: { id: 'divine_ore', name: '神鉄鉱', type: 'material', tier: 5, baseValue: 95 },
  chaos_crystal: { id: 'chaos_crystal', name: '混沌の結晶', type: 'material', tier: 5, baseValue: 88 },
  phoenix_ash: { id: 'phoenix_ash', name: '不死鳥の灰', type: 'material', tier: 5, baseValue: 92 },
  aether_essence: { id: 'aether_essence', name: 'エーテルの精', type: 'material', tier: 5, baseValue: 110 },
  primordial_gem: { id: 'primordial_gem', name: '始原の宝玉', type: 'material', tier: 5, baseValue: 120 },

  // =====================================================================
  //  ク ラ フ ト 品 (100種)
  // =====================================================================

  // ===== Rank 1: 初期レシピ (8種) =====
  sword: { id: 'sword', name: '鉄の剣', type: 'equipment', baseValue: 35, image: '/art/items/sword.png' },
  shield: { id: 'shield', name: '木の盾', type: 'equipment', baseValue: 25, image: '/art/items/shield.png' },
  potion: { id: 'potion', name: '回復薬', type: 'consumable', baseValue: 18, image: '/art/items/potion.png' },
  wooden_bow: { id: 'wooden_bow', name: '木の弓', type: 'equipment', baseValue: 30, image: '/art/items/wooden_bow.png' },
  herb_tea: { id: 'herb_tea', name: 'ハーブティー', type: 'consumable', baseValue: 12, image: '/art/items/herb_tea.png' },
  stone_axe: { id: 'stone_axe', name: '石斧', type: 'equipment', baseValue: 28, image: '/art/items/stone_axe.png' },
  clay_pot: { id: 'clay_pot', name: '粘土の壺', type: 'accessory', baseValue: 15, image: '/art/items/clay_pot.png' },
  antidote_basic: { id: 'antidote_basic', name: '毒消し薬', type: 'consumable', baseValue: 20, image: '/art/items/antidote.png' },

  // ===== Rank 2: 洞窟解放 (10種) =====
  fire_sword: { id: 'fire_sword', name: '炎の剣', type: 'equipment', baseValue: 80, image: '/art/items/fire_sword.png' },
  ice_shield: { id: 'ice_shield', name: '氷の盾', type: 'equipment', baseValue: 65, image: '/art/items/ice_shield.png' },
  antidote: { id: 'antidote', name: '解毒薬', type: 'consumable', baseValue: 30, image: '/art/items/antidote.png' },
  silver_dagger: { id: 'silver_dagger', name: '銀の短剣', type: 'equipment', baseValue: 55, image: '/art/items/silver_dagger.png' },
  leather_armor: { id: 'leather_armor', name: '革鎧', type: 'equipment', baseValue: 60, image: '/art/items/leather_armor.png' },
  iron_spear: { id: 'iron_spear', name: '鉄の槍', type: 'equipment', baseValue: 50, image: '/art/items/iron_spear.png' },
  amber_ring: { id: 'amber_ring', name: '琥珀の指輪', type: 'accessory', baseValue: 45, image: '/art/items/amber_ring.png' },
  bone_charm: { id: 'bone_charm', name: '骨のお守り', type: 'accessory', baseValue: 35, image: '/art/items/bone_charm.png' },
  stamina_drink: { id: 'stamina_drink', name: 'スタミナドリンク', type: 'consumable', baseValue: 25, image: '/art/items/stamina_drink.png' },
  iron_helm: { id: 'iron_helm', name: '鉄兜', type: 'equipment', baseValue: 48, image: '/art/items/iron_helm.png' },

  // ===== Rank 3: 森解放 (12種) =====
  mage_staff: { id: 'mage_staff', name: '魔法の杖', type: 'equipment', baseValue: 120 },
  chainmail: { id: 'chainmail', name: '鎖帷子', type: 'equipment', baseValue: 100 },
  elixir: { id: 'elixir', name: '万能薬', type: 'consumable', baseValue: 75 },
  wind_bow: { id: 'wind_bow', name: '風の弓', type: 'equipment', baseValue: 95 },
  spirit_robe: { id: 'spirit_robe', name: '精霊のローブ', type: 'equipment', baseValue: 110 },
  strength_potion: { id: 'strength_potion', name: '力の薬', type: 'consumable', baseValue: 55 },
  spider_cloak: { id: 'spider_cloak', name: '蜘蛛糸のマント', type: 'equipment', baseValue: 85 },
  crystal_orb: { id: 'crystal_orb', name: '水晶の宝珠', type: 'accessory', baseValue: 90 },
  dark_blade: { id: 'dark_blade', name: '暗黒の刃', type: 'equipment', baseValue: 105 },
  fairy_necklace: { id: 'fairy_necklace', name: '妖精のネックレス', type: 'accessory', baseValue: 70 },
  poison_dagger: { id: 'poison_dagger', name: '毒塗りの短剣', type: 'equipment', baseValue: 88 },
  magic_ink: { id: 'magic_ink', name: '魔法のインク', type: 'consumable', baseValue: 40 },

  // ===== Rank 4: 火山解放 (12種) =====
  holy_sword: { id: 'holy_sword', name: '聖剣', type: 'equipment', baseValue: 250 },
  dragon_armor: { id: 'dragon_armor', name: '竜鱗の鎧', type: 'equipment', baseValue: 220 },
  phoenix_feather_acc: { id: 'phoenix_feather_acc', name: '不死鳥のお守り', type: 'accessory', baseValue: 180 },
  flame_lance: { id: 'flame_lance', name: '炎の槍', type: 'equipment', baseValue: 200 },
  moonlight_staff: { id: 'moonlight_staff', name: '月光の杖', type: 'equipment', baseValue: 190 },
  silver_mail: { id: 'silver_mail', name: '銀糸の鎧', type: 'equipment', baseValue: 210 },
  spirit_potion: { id: 'spirit_potion', name: '霊薬', type: 'consumable', baseValue: 120 },
  thunder_hammer: { id: 'thunder_hammer', name: '雷鳴のハンマー', type: 'equipment', baseValue: 230 },
  cursed_ring: { id: 'cursed_ring', name: '呪いの指輪', type: 'accessory', baseValue: 160 },
  lava_shield: { id: 'lava_shield', name: '溶岩の盾', type: 'equipment', baseValue: 195 },
  fire_cloak: { id: 'fire_cloak', name: '焔纏いのマント', type: 'equipment', baseValue: 175 },
  enchant_scroll: { id: 'enchant_scroll', name: '付呪の巻物', type: 'consumable', baseValue: 140 },

  // ===== Rank 5: 深海解放 (12種) =====
  trident: { id: 'trident', name: '海神の三叉槍', type: 'equipment', baseValue: 320 },
  coral_armor: { id: 'coral_armor', name: '珊瑚の鎧', type: 'equipment', baseValue: 280 },
  pearl_tiara: { id: 'pearl_tiara', name: '真珠のティアラ', type: 'accessory', baseValue: 250 },
  tidal_bow: { id: 'tidal_bow', name: '潮流の弓', type: 'equipment', baseValue: 300 },
  deep_elixir: { id: 'deep_elixir', name: '深海の霊薬', type: 'consumable', baseValue: 200 },
  mithril_sword: { id: 'mithril_sword', name: 'ミスリルの剣', type: 'equipment', baseValue: 350 },
  mithril_shield: { id: 'mithril_shield', name: 'ミスリルの盾', type: 'equipment', baseValue: 310 },
  void_amulet: { id: 'void_amulet', name: '虚空のアミュレット', type: 'accessory', baseValue: 270 },
  frost_blade: { id: 'frost_blade', name: '凍てつく刃', type: 'equipment', baseValue: 290 },
  elder_staff: { id: 'elder_staff', name: '長老樹の杖', type: 'equipment', baseValue: 260 },
  sea_serpent_whip: { id: 'sea_serpent_whip', name: '海竜の鞭', type: 'equipment', baseValue: 330 },
  lotus_perfume: { id: 'lotus_perfume', name: '黒蓮の香水', type: 'consumable', baseValue: 180 },

  // ===== Rank 6: 竜の巣解放 (12種) =====
  dragon_slayer: { id: 'dragon_slayer', name: '竜殺しの大剣', type: 'equipment', baseValue: 450 },
  storm_cloak: { id: 'storm_cloak', name: '嵐のマント', type: 'equipment', baseValue: 380 },
  ancient_crown: { id: 'ancient_crown', name: '古代王の冠', type: 'accessory', baseValue: 420 },
  sage_stone: { id: 'sage_stone', name: '賢者の石', type: 'consumable', baseValue: 350 },
  mystic_amulet: { id: 'mystic_amulet', name: '神秘のアミュレット', type: 'accessory', baseValue: 400 },
  dragon_bow: { id: 'dragon_bow', name: '竜骨の弓', type: 'equipment', baseValue: 430 },
  phoenix_robe: { id: 'phoenix_robe', name: '不死鳥のローブ', type: 'equipment', baseValue: 410 },
  void_blade: { id: 'void_blade', name: '虚無の剣', type: 'equipment', baseValue: 460 },
  dragon_potion: { id: 'dragon_potion', name: '竜の血薬', type: 'consumable', baseValue: 300 },
  thunder_spear: { id: 'thunder_spear', name: '雷光の槍', type: 'equipment', baseValue: 440 },
  cursed_crown: { id: 'cursed_crown', name: '呪王の冠', type: 'accessory', baseValue: 360 },
  scale_shield: { id: 'scale_shield', name: '竜鱗の大盾', type: 'equipment', baseValue: 390 },

  // ===== Rank 7: 天空解放 (12種) =====
  sky_sword: { id: 'sky_sword', name: '天空の剣', type: 'equipment', baseValue: 600 },
  time_hourglass: { id: 'time_hourglass', name: '時の砂時計', type: 'accessory', baseValue: 550 },
  star_shield: { id: 'star_shield', name: '星盾', type: 'equipment', baseValue: 520 },
  divine_armor: { id: 'divine_armor', name: '神鉄の鎧', type: 'equipment', baseValue: 580 },
  aether_staff: { id: 'aether_staff', name: 'エーテルの杖', type: 'equipment', baseValue: 560 },
  sky_bow: { id: 'sky_bow', name: '天翔ける弓', type: 'equipment', baseValue: 540 },
  rainbow_robe: { id: 'rainbow_robe', name: '虹のローブ', type: 'equipment', baseValue: 530 },
  divine_elixir: { id: 'divine_elixir', name: '神酒', type: 'consumable', baseValue: 400 },
  chaos_ring: { id: 'chaos_ring', name: '混沌の指輪', type: 'accessory', baseValue: 480 },
  star_pendant: { id: 'star_pendant', name: '星のペンダント', type: 'accessory', baseValue: 500 },
  wind_lance: { id: 'wind_lance', name: '疾風の槍', type: 'equipment', baseValue: 570 },
  phoenix_bow: { id: 'phoenix_bow', name: '不死鳥の弓', type: 'equipment', baseValue: 590 },

  // ===== Rank 8: 最終レシピ (10種) =====
  legendary_blade: { id: 'legendary_blade', name: '伝説の刃', type: 'equipment', baseValue: 800 },
  world_tree_staff: { id: 'world_tree_staff', name: '世界樹の杖', type: 'equipment', baseValue: 850 },
  genesis_armor: { id: 'genesis_armor', name: '始原の鎧', type: 'equipment', baseValue: 900 },
  time_blade: { id: 'time_blade', name: '時渡りの剣', type: 'equipment', baseValue: 820 },
  primordial_crown: { id: 'primordial_crown', name: '始原の冠', type: 'accessory', baseValue: 780 },
  eternity_ring: { id: 'eternity_ring', name: '永遠の指輪', type: 'accessory', baseValue: 750 },
  cosmos_bow: { id: 'cosmos_bow', name: '星界弓コスモス', type: 'equipment', baseValue: 830 },
  panacea: { id: 'panacea', name: '万象の霊薬', type: 'consumable', baseValue: 600 },
  oblivion_shield: { id: 'oblivion_shield', name: '忘却の盾', type: 'equipment', baseValue: 770 },
  astral_robe: { id: 'astral_robe', name: '星衣アストラル', type: 'equipment', baseValue: 860 },
};

// ===================================================================
//  レ シ ピ マ ス タ
// ===================================================================
export const Recipes = {
  // --- Rank 1: 初期解放 (8種) — AP: 1 ---
  sword: { id: 'r_sword', targetId: 'sword', materials: ['stone', 'wood'], unlocked: true, apCost: 1 },
  shield: { id: 'r_shield', targetId: 'shield', materials: ['wood', 'wood'], unlocked: true, apCost: 1 },
  potion: { id: 'r_potion', targetId: 'potion', materials: ['herb', 'slime_jelly'], unlocked: true, apCost: 1 },
  wooden_bow: { id: 'r_wooden_bow', targetId: 'wooden_bow', materials: ['wood', 'feather_small'], unlocked: true, apCost: 1 },
  herb_tea: { id: 'r_herb_tea', targetId: 'herb_tea', materials: ['herb', 'flower_petal'], unlocked: true, apCost: 1 },
  stone_axe: { id: 'r_stone_axe', targetId: 'stone_axe', materials: ['stone', 'wood'], unlocked: true, apCost: 1 },
  clay_pot: { id: 'r_clay_pot', targetId: 'clay_pot', materials: ['clay', 'sand'], unlocked: true, apCost: 1 },
  antidote_basic: { id: 'r_antidote_basic', targetId: 'antidote_basic', materials: ['bug_shell', 'slime_jelly'], unlocked: true, apCost: 1 },

  // --- Rank 2 解放 (10種) — AP: 2 ---
  fire_sword: { id: 'r_fire_sword', targetId: 'fire_sword', materials: ['iron_ore', 'fire_stone'], unlocked: false, apCost: 2 },
  ice_shield: { id: 'r_ice_shield', targetId: 'ice_shield', materials: ['wood', 'ice_shard'], unlocked: false, apCost: 2 },
  antidote: { id: 'r_antidote', targetId: 'antidote', materials: ['herb', 'poison_herb'], unlocked: false, apCost: 1 },
  silver_dagger: { id: 'r_silver_dagger', targetId: 'silver_dagger', materials: ['silver_ore', 'bone'], unlocked: false, apCost: 2 },
  leather_armor: { id: 'r_leather_armor', targetId: 'leather_armor', materials: ['cloth', 'iron_ore'], unlocked: false, apCost: 2 },
  iron_spear: { id: 'r_iron_spear', targetId: 'iron_spear', materials: ['iron_ore', 'wood'], unlocked: false, apCost: 2 },
  amber_ring: { id: 'r_amber_ring', targetId: 'amber_ring', materials: ['amber', 'silver_ore'], unlocked: false, apCost: 2 },
  bone_charm: { id: 'r_bone_charm', targetId: 'bone_charm', materials: ['bone', 'herb'], unlocked: false, apCost: 1 },
  stamina_drink: { id: 'r_stamina_drink', targetId: 'stamina_drink', materials: ['mushroom', 'slime_jelly'], unlocked: false, apCost: 1 },
  iron_helm: { id: 'r_iron_helm', targetId: 'iron_helm', materials: ['iron_ore', 'cloth'], unlocked: false, apCost: 2 },

  // --- Rank 3 解放 (12種) — AP: 2 ---
  mage_staff: { id: 'r_mage_staff', targetId: 'mage_staff', materials: ['crystal', 'enchanted_wood'], unlocked: false, apCost: 2 },
  chainmail: { id: 'r_chainmail', targetId: 'chainmail', materials: ['iron_ore', 'iron_ore', 'cloth'], unlocked: false, apCost: 2 },
  elixir: { id: 'r_elixir', targetId: 'elixir', materials: ['herb', 'crystal', 'slime_jelly'], unlocked: false, apCost: 2 },
  wind_bow: { id: 'r_wind_bow', targetId: 'wind_bow', materials: ['enchanted_wood', 'spider_silk'], unlocked: false, apCost: 2 },
  spirit_robe: { id: 'r_spirit_robe', targetId: 'spirit_robe', materials: ['cloth', 'spirit_essence'], unlocked: false, apCost: 2 },
  strength_potion: { id: 'r_strength_potion', targetId: 'strength_potion', materials: ['mushroom', 'fairy_dust'], unlocked: false, apCost: 2 },
  spider_cloak: { id: 'r_spider_cloak', targetId: 'spider_cloak', materials: ['spider_silk', 'cloth'], unlocked: false, apCost: 2 },
  crystal_orb: { id: 'r_crystal_orb', targetId: 'crystal_orb', materials: ['crystal', 'fairy_dust'], unlocked: false, apCost: 2 },
  dark_blade: { id: 'r_dark_blade', targetId: 'dark_blade', materials: ['dark_stone', 'iron_ore'], unlocked: false, apCost: 2 },
  fairy_necklace: { id: 'r_fairy_necklace', targetId: 'fairy_necklace', materials: ['fairy_dust', 'silver_ore'], unlocked: false, apCost: 2 },
  poison_dagger: { id: 'r_poison_dagger', targetId: 'poison_dagger', materials: ['silver_ore', 'poison_herb'], unlocked: false, apCost: 2 },
  magic_ink: { id: 'r_magic_ink', targetId: 'magic_ink', materials: ['crystal', 'flower_petal'], unlocked: false, apCost: 1 },

  // --- Rank 4 解放 (12種) — AP: 2-3 ---
  holy_sword: { id: 'r_holy_sword', targetId: 'holy_sword', materials: ['iron_ore', 'crystal', 'feather'], unlocked: false, apCost: 3 },
  dragon_armor: { id: 'r_dragon_armor', targetId: 'dragon_armor', materials: ['dragon_scale', 'iron_ore', 'cloth'], unlocked: false, apCost: 3 },
  phoenix_feather_acc: { id: 'r_phoenix_feather_acc', targetId: 'phoenix_feather_acc', materials: ['feather', 'crystal'], unlocked: false, apCost: 2 },
  flame_lance: { id: 'r_flame_lance', targetId: 'flame_lance', materials: ['fire_stone', 'iron_ore', 'enchanted_wood'], unlocked: false, apCost: 3 },
  moonlight_staff: { id: 'r_moonlight_staff', targetId: 'moonlight_staff', materials: ['enchanted_wood', 'crystal', 'fairy_dust'], unlocked: false, apCost: 3 },
  silver_mail: { id: 'r_silver_mail', targetId: 'silver_mail', materials: ['silver_ore', 'silver_ore', 'spider_silk'], unlocked: false, apCost: 2 },
  spirit_potion: { id: 'r_spirit_potion', targetId: 'spirit_potion', materials: ['spirit_essence', 'herb', 'fairy_dust'], unlocked: false, apCost: 2 },
  thunder_hammer: { id: 'r_thunder_hammer', targetId: 'thunder_hammer', materials: ['thunder_stone', 'iron_ore', 'lava_core'], unlocked: false, apCost: 3 },
  cursed_ring: { id: 'r_cursed_ring', targetId: 'cursed_ring', materials: ['cursed_gem', 'silver_ore'], unlocked: false, apCost: 2 },
  lava_shield: { id: 'r_lava_shield', targetId: 'lava_shield', materials: ['lava_core', 'iron_ore', 'stone'], unlocked: false, apCost: 3 },
  fire_cloak: { id: 'r_fire_cloak', targetId: 'fire_cloak', materials: ['fire_stone', 'cloth', 'spider_silk'], unlocked: false, apCost: 2 },
  enchant_scroll: { id: 'r_enchant_scroll', targetId: 'enchant_scroll', materials: ['crystal', 'fairy_dust', 'spirit_essence'], unlocked: false, apCost: 2 },

  // --- Rank 5 解放 (12種) — AP: 3 ---
  trident: { id: 'r_trident', targetId: 'trident', materials: ['mithril_ore', 'deep_pearl', 'coral_fragment'], unlocked: false, apCost: 3 },
  coral_armor: { id: 'r_coral_armor', targetId: 'coral_armor', materials: ['coral_fragment', 'mithril_ore', 'cloth'], unlocked: false, apCost: 3 },
  pearl_tiara: { id: 'r_pearl_tiara', targetId: 'pearl_tiara', materials: ['deep_pearl', 'moonstone'], unlocked: false, apCost: 2 },
  tidal_bow: { id: 'r_tidal_bow', targetId: 'tidal_bow', materials: ['elder_bark', 'sea_serpent_fin'], unlocked: false, apCost: 3 },
  deep_elixir: { id: 'r_deep_elixir', targetId: 'deep_elixir', materials: ['deep_pearl', 'black_lotus', 'herb'], unlocked: false, apCost: 3 },
  mithril_sword: { id: 'r_mithril_sword', targetId: 'mithril_sword', materials: ['mithril_ore', 'mithril_ore', 'moonstone'], unlocked: false, apCost: 3 },
  mithril_shield: { id: 'r_mithril_shield', targetId: 'mithril_shield', materials: ['mithril_ore', 'coral_fragment'], unlocked: false, apCost: 3 },
  void_amulet: { id: 'r_void_amulet', targetId: 'void_amulet', materials: ['void_shard', 'moonstone'], unlocked: false, apCost: 3 },
  frost_blade: { id: 'r_frost_blade', targetId: 'frost_blade', materials: ['frozen_tear', 'mithril_ore'], unlocked: false, apCost: 3 },
  elder_staff: { id: 'r_elder_staff', targetId: 'elder_staff', materials: ['elder_bark', 'crystal', 'fairy_dust'], unlocked: false, apCost: 3 },
  sea_serpent_whip: { id: 'r_sea_serpent_whip', targetId: 'sea_serpent_whip', materials: ['sea_serpent_fin', 'spider_silk'], unlocked: false, apCost: 3 },
  lotus_perfume: { id: 'r_lotus_perfume', targetId: 'lotus_perfume', materials: ['black_lotus', 'flower_petal', 'fairy_dust'], unlocked: false, apCost: 2 },

  // --- Rank 6 解放 (12種) — AP: 3 ---
  dragon_slayer: { id: 'r_dragon_slayer', targetId: 'dragon_slayer', materials: ['dragon_scale', 'mithril_ore', 'fire_stone'], unlocked: false, apCost: 3 },
  storm_cloak: { id: 'r_storm_cloak', targetId: 'storm_cloak', materials: ['wind_crystal', 'spider_silk', 'thunder_stone'], unlocked: false, apCost: 3 },
  ancient_crown: { id: 'r_ancient_crown', targetId: 'ancient_crown', materials: ['moonstone', 'deep_pearl', 'dragon_scale'], unlocked: false, apCost: 3 },
  sage_stone: { id: 'r_sage_stone', targetId: 'sage_stone', materials: ['crystal', 'moonstone', 'spirit_essence'], unlocked: false, apCost: 3 },
  mystic_amulet: { id: 'r_mystic_amulet', targetId: 'mystic_amulet', materials: ['void_shard', 'deep_pearl', 'fairy_dust'], unlocked: false, apCost: 3 },
  dragon_bow: { id: 'r_dragon_bow', targetId: 'dragon_bow', materials: ['dragon_scale', 'elder_bark', 'spider_silk'], unlocked: false, apCost: 3 },
  phoenix_robe: { id: 'r_phoenix_robe', targetId: 'phoenix_robe', materials: ['feather', 'cloth', 'spirit_essence'], unlocked: false, apCost: 3 },
  void_blade: { id: 'r_void_blade', targetId: 'void_blade', materials: ['void_shard', 'mithril_ore', 'dark_stone'], unlocked: false, apCost: 3 },
  dragon_potion: { id: 'r_dragon_potion', targetId: 'dragon_potion', materials: ['dragon_scale', 'black_lotus', 'fire_stone'], unlocked: false, apCost: 3 },
  thunder_spear: { id: 'r_thunder_spear', targetId: 'thunder_spear', materials: ['thunder_stone', 'mithril_ore', 'wind_crystal'], unlocked: false, apCost: 3 },
  cursed_crown: { id: 'r_cursed_crown', targetId: 'cursed_crown', materials: ['cursed_gem', 'moonstone', 'dark_stone'], unlocked: false, apCost: 3 },
  scale_shield: { id: 'r_scale_shield', targetId: 'scale_shield', materials: ['dragon_scale', 'dragon_scale', 'iron_ore'], unlocked: false, apCost: 3 },

  // --- Rank 7 解放 (12種) — AP: 3-4 ---
  sky_sword: { id: 'r_sky_sword', targetId: 'sky_sword', materials: ['sky_fragment', 'divine_ore', 'star_dust'], unlocked: false, apCost: 4 },
  time_hourglass: { id: 'r_time_hourglass', targetId: 'time_hourglass', materials: ['time_sand', 'crystal', 'moonstone'], unlocked: false, apCost: 3 },
  star_shield: { id: 'r_star_shield', targetId: 'star_shield', materials: ['star_dust', 'mithril_ore', 'divine_ore'], unlocked: false, apCost: 4 },
  divine_armor: { id: 'r_divine_armor', targetId: 'divine_armor', materials: ['divine_ore', 'divine_ore', 'dragon_scale'], unlocked: false, apCost: 4 },
  aether_staff: { id: 'r_aether_staff', targetId: 'aether_staff', materials: ['aether_essence', 'elder_bark', 'sky_fragment'], unlocked: false, apCost: 4 },
  sky_bow: { id: 'r_sky_bow', targetId: 'sky_bow', materials: ['sky_fragment', 'wind_crystal', 'feather'], unlocked: false, apCost: 3 },
  rainbow_robe: { id: 'r_rainbow_robe', targetId: 'rainbow_robe', materials: ['rainbow_scale', 'cloth', 'fairy_dust'], unlocked: false, apCost: 3 },
  divine_elixir: { id: 'r_divine_elixir', targetId: 'divine_elixir', materials: ['aether_essence', 'world_tree_sap', 'deep_pearl'], unlocked: false, apCost: 3 },
  chaos_ring: { id: 'r_chaos_ring', targetId: 'chaos_ring', materials: ['chaos_crystal', 'cursed_gem', 'moonstone'], unlocked: false, apCost: 3 },
  star_pendant: { id: 'r_star_pendant', targetId: 'star_pendant', materials: ['star_dust', 'deep_pearl', 'sky_fragment'], unlocked: false, apCost: 3 },
  wind_lance: { id: 'r_wind_lance', targetId: 'wind_lance', materials: ['wind_crystal', 'divine_ore', 'sky_fragment'], unlocked: false, apCost: 4 },
  phoenix_bow: { id: 'r_phoenix_bow', targetId: 'phoenix_bow', materials: ['phoenix_ash', 'elder_bark', 'feather'], unlocked: false, apCost: 3 },

  // --- Rank 8 解放: 最終レシピ (10種) — AP: 4-5 ---
  legendary_blade: { id: 'r_legendary_blade', targetId: 'legendary_blade', materials: ['divine_ore', 'dragon_scale', 'sky_fragment', 'primordial_gem'], unlocked: false, apCost: 5 },
  world_tree_staff: { id: 'r_world_tree_staff', targetId: 'world_tree_staff', materials: ['world_tree_sap', 'aether_essence', 'star_dust'], unlocked: false, apCost: 4 },
  genesis_armor: { id: 'r_genesis_armor', targetId: 'genesis_armor', materials: ['primordial_gem', 'divine_ore', 'dragon_scale', 'mithril_ore'], unlocked: false, apCost: 5 },
  time_blade: { id: 'r_time_blade', targetId: 'time_blade', materials: ['time_sand', 'divine_ore', 'chaos_crystal'], unlocked: false, apCost: 4 },
  primordial_crown: { id: 'r_primordial_crown', targetId: 'primordial_crown', materials: ['primordial_gem', 'moonstone', 'star_dust'], unlocked: false, apCost: 4 },
  eternity_ring: { id: 'r_eternity_ring', targetId: 'eternity_ring', materials: ['time_sand', 'primordial_gem', 'aether_essence'], unlocked: false, apCost: 4 },
  cosmos_bow: { id: 'r_cosmos_bow', targetId: 'cosmos_bow', materials: ['rainbow_scale', 'sky_fragment', 'phoenix_ash'], unlocked: false, apCost: 4 },
  panacea: { id: 'r_panacea', targetId: 'panacea', materials: ['world_tree_sap', 'phoenix_ash', 'primordial_gem'], unlocked: false, apCost: 4 },
  oblivion_shield: { id: 'r_oblivion_shield', targetId: 'oblivion_shield', materials: ['chaos_crystal', 'divine_ore', 'void_shard'], unlocked: false, apCost: 4 },
  astral_robe: { id: 'r_astral_robe', targetId: 'astral_robe', materials: ['aether_essence', 'rainbow_scale', 'star_dust'], unlocked: false, apCost: 4 },
};
// 特性マスタ — 名前と効果の説明
export const TraitDefs = {
  '攻撃力+1': { name: '攻撃力+1', color: 'red', description: '攻撃力が少し上がる' },
  '攻撃力+2': { name: '攻撃力+2', color: 'red', description: '攻撃力が上がる' },
  '攻撃力+3': { name: '攻撃力+3', color: 'red', description: '攻撃力が大幅に上がる' },
  '防御力+1': { name: '防御力+1', color: 'blue', description: '防御力が少し上がる' },
  '防御力+2': { name: '防御力+2', color: 'blue', description: '防御力が上がる' },
  '防御力+3': { name: '防御力+3', color: 'blue', description: '防御力が大幅に上がる' },
  'HP回復+': { name: 'HP回復+', color: 'green', description: '回復量が増える' },
  'HP回復++': { name: 'HP回復++', color: 'green', description: '回復量が大幅に増える' },
  '採取量UP': { name: '採取量UP', color: 'yellow', description: '探索での収穫量が増える' },
  '売値UP': { name: '売値UP', color: 'gold', description: '売却価格が20%上がる' },
  '売値UP+': { name: '売値UP+', color: 'gold', description: '売却価格が40%上がる' },
  '丈夫': { name: '丈夫', color: 'brown', description: '耐久性が高い' },
  '軽い': { name: '軽い', color: 'cyan', description: '軽くて扱いやすい' },
  '硬い': { name: '硬い', color: 'gray', description: '非常に硬い' },
  '光る': { name: '光る', color: 'yellow', description: '神秘的に光る' },
  '燃えやすい': { name: '燃えやすい', color: 'orange', description: '火に弱い' },
  '水溶性': { name: '水溶性', color: 'blue', description: '水に溶けやすい' },
  '猛毒': { name: '猛毒', color: 'purple', description: '致死量の毒を含む' },
  '聖なる力': { name: '聖なる力', color: 'white', description: '聖なる光を宿す' },
  '風の加護': { name: '風の加護', color: 'cyan', description: '風の精霊の加護' },
  '雷撃': { name: '雷撃', color: 'yellow', description: '雷の力が宿る' },
  '吸血': { name: '吸血', color: 'purple', description: 'HPを吸収する' },
  '時の祝福': { name: '時の祝福', color: 'gold', description: '時の力で強化される' },
  '星の輝き': { name: '星の輝き', color: 'white', description: '星の力を宿す' },
  '混沌': { name: '混沌', color: 'purple', description: '混沌のエネルギーを秘める' },
};
