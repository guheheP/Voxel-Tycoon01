/**
 * チャレンジモード定義
 * ランク8到達（全クリア）後に解放されるエンドコンテンツ。
 * マルチウェーブ戦闘で強化ボスと連戦する。
 * 
 * 設計基準: ランク8クリア時のパーティステータス
 *   HP ~160, ATK ~140, DEF ~56, SPD ~144 を前提
 *   連戦での累積ダメージと回復アイテム管理が攻略の鍵
 */

export const ChallengeDefs = [
  {
    id: 'challenge_1',
    name: '試練の塔 第1層',
    description: '初級チャレンジ。序盤ボスの強化版と連戦する。',
    icon: '🗼',
    waves: [
      { bossId: 'boss_plains_slime', statMultiplier: 2.2 },
      { bossId: 'boss_cave_golem', statMultiplier: 2.0 },
      { bossId: 'boss_forest_treant', statMultiplier: 1.8, isFinalWave: true },
    ],
    rewards: { gold: 3000 },
  },
  {
    id: 'challenge_2',
    name: '試練の塔 第2層',
    description: '中級チャレンジ。中盤ボスの強化版との連戦。',
    icon: '🗼',
    waves: [
      { bossId: 'boss_volcano_ifrit', statMultiplier: 2.5 },
      { bossId: 'boss_sea_kraken', statMultiplier: 2.3 },
      { bossId: 'boss_elder_dragon', statMultiplier: 2.0, isFinalWave: true },
    ],
    rewards: { gold: 5000 },
  },
  {
    id: 'challenge_3',
    name: '試練の塔 第3層',
    description: '上級チャレンジ。後半ボスの強化版との壮絶な連戦。',
    icon: '🗼',
    waves: [
      { bossId: 'boss_elder_dragon', statMultiplier: 3.0 },
      { bossId: 'boss_sky_titan', statMultiplier: 2.8 },
      { bossId: 'boss_time_lord', statMultiplier: 2.5, isFinalWave: true },
    ],
    rewards: { gold: 8000 },
  },
  {
    id: 'challenge_4',
    name: '試練の塔 最終層',
    description: '伝説級チャレンジ。全ボスが最強形態で襲いかかる。',
    icon: '👑',
    waves: [
      { bossId: 'boss_volcano_ifrit', statMultiplier: 3.5 },
      { bossId: 'boss_sea_kraken', statMultiplier: 3.5 },
      { bossId: 'boss_elder_dragon', statMultiplier: 3.0 },
      { bossId: 'boss_sky_titan', statMultiplier: 3.0 },
      { bossId: 'boss_time_lord', statMultiplier: 2.8, isFinalWave: true },
    ],
    rewards: { gold: 15000 },
  },
];
