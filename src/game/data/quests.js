/**
 * クエスト定義
 * ランクアップ条件として各ランクに配置
 * conditionType: 売上系/調合系/探索系/客系/品質系
 */

export const QuestDefs = {
  // ===== Rank 2 昇格クエスト (3個中2個) =====
  rank2: [
    { id: 'q2_sell_3',         name: '初めての商売',       description: '商品を3個売る',              conditionType: 'sell_count',    target: 3,  icon: '💰' },
    { id: 'q2_craft_3',        name: '調合入門',           description: 'アイテムを3個調合する',        conditionType: 'craft_count',   target: 3,  icon: '🔨' },
    { id: 'q2_explore_2',      name: '冒険の始まり',       description: '探索を2回完了する',            conditionType: 'explore_count', target: 2,  icon: '🗺️' },
  ],

  // ===== Rank 3 昇格クエスト (3個中2個) =====
  rank3: [
    { id: 'q3_quality_50',     name: '品質へのこだわり',    description: '品質50以上のアイテムを調合する', conditionType: 'craft_quality', target: 50, icon: '⭐' },
    { id: 'q3_daily_100',      name: '一日百金',           description: '1日の売上100Gを達成する',       conditionType: 'daily_sales',    target: 100, icon: '📈' },
    { id: 'q3_cave_3',         name: '洞窟探検家',         description: '洞窟を3回探索する',             conditionType: 'explore_area',   target: 3,  targetArea: 'cave', icon: '⛏️' },
  ],

  // ===== Rank 4 昇格クエスト (3個中2個) =====
  rank4: [
    { id: 'q4_serve_noble',    name: '貴族のお気に入り',    description: '貴族に商品を売る',              conditionType: 'serve_customer', target: 1,  targetCustomer: 'noble', icon: '👑' },
    { id: 'q4_trait_5',        name: '特性マスター',        description: '特性付きアイテムを5個調合する',   conditionType: 'craft_with_trait', target: 5, icon: '✨' },
    { id: 'q4_sell_equip_8',   name: '武器商人',           description: '装備品を8個売る',               conditionType: 'sell_type',      target: 8,  targetType: 'equipment', icon: '⚔️' },
  ],

  // ===== Rank 5 昇格クエスト (3個中2個) =====
  rank5: [
    { id: 'q5_quality_70',     name: '匠の技',             description: '品質70以上のアイテムを調合する', conditionType: 'craft_quality', target: 70,  icon: '🏅' },
    { id: 'q5_sell_10k',       name: '一万金の壁',         description: '累計売上10,000Gを達成する',     conditionType: 'total_sales',   target: 10000, icon: '💎' },
    { id: 'q5_explore_forest', name: '森の守護者',         description: '妖精の森を5回探索する',         conditionType: 'explore_area',  target: 5,  targetArea: 'forest', icon: '🌲' },
  ],

  // ===== Rank 6 昇格クエスト (4個中3個) =====
  rank6: [
    { id: 'q6_customers_20',   name: '人気店の証',         description: 'お客様を20人接客する',          conditionType: 'total_customers', target: 20, icon: '🤝' },
    { id: 'q6_craft_30',       name: '熟練の調合師',       description: 'アイテムを30個調合する',        conditionType: 'craft_count',    target: 30, icon: '🔬' },
    { id: 'q6_daily_300',      name: '三百金の日',         description: '1日の売上300Gを達成する',       conditionType: 'daily_sales',    target: 300, icon: '📊' },
    { id: 'q6_sell_consumable',name: '薬師の道',           description: '消耗品を12個売る',              conditionType: 'sell_type',      target: 12, targetType: 'consumable', icon: '🧪' },
  ],

  // ===== Rank 7 昇格クエスト (4個中3個) =====
  rank7: [
    { id: 'q7_quality_85',     name: '至高の品質',         description: '品質85以上のアイテムを調合する', conditionType: 'craft_quality', target: 85,  icon: '👑' },
    { id: 'q7_explore_dragon', name: '竜狩り',             description: '竜の巣を3回探索する',           conditionType: 'explore_area',  target: 3,  targetArea: 'dragon_nest', icon: '🐉' },
    { id: 'q7_sell_acc_5',     name: '宝飾品鑑定士',       description: 'アクセサリーを5個売る',         conditionType: 'sell_type',     target: 5,  targetType: 'accessory', icon: '💍' },
    { id: 'q7_upgrades_10',    name: '設備投資家',         description: 'アップグレードを10個購入する',   conditionType: 'upgrade_count', target: 10, icon: '🏗️' },
  ],

  // ===== Rank 8 昇格クエスト (5個中3個) =====
  rank8: [
    { id: 'q8_quality_95',     name: '伝説の調合',         description: '品質95以上のアイテムを調合する', conditionType: 'craft_quality', target: 95,   icon: '🌟' },
    { id: 'q8_sell_50k',       name: '五万金の王',         description: '累計売上50,000Gを達成する',     conditionType: 'total_sales',   target: 50000, icon: '👸' },
    { id: 'q8_explore_sky',    name: '天空の覇者',         description: '天空の塔を3回探索する',         conditionType: 'explore_area',  target: 3,   targetArea: 'sky_tower', icon: '☁️' },
    { id: 'q8_serve_50',       name: '百客万来',           description: 'お客様を50人接客する',          conditionType: 'total_customers', target: 50, icon: '🏆' },
    { id: 'q8_craft_trait_3',  name: '究極の付呪',         description: '特性3つ付きのアイテムを調合する', conditionType: 'craft_max_traits', target: 3, icon: '🔮' },
  ],
};
