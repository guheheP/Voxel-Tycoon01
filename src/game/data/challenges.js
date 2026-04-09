/**
 * チャレンジモード定義
 * ランク8到達（全クリア）後に解放されるエンドコンテンツ。
 * マルチウェーブ戦闘で強化ボスと連戦する。
 */

export const ChallengeDefs = [
  {
    id: 'challenge_1',
    name: '試練の塔 第1層',
    description: '初級チャレンジ。序盤ボスの強化版と連戦する。',
    icon: '🗼',
    waves: [
      { bossId: 'boss_plains_slime', statMultiplier: 1.8 },
      { bossId: 'boss_cave_golem', statMultiplier: 1.5 },
      { bossId: 'boss_forest_treant', statMultiplier: 1.3, isFinalWave: true },
    ],
    rewards: { gold: 3000 },
  },
  {
    id: 'challenge_2',
    name: '試練の塔 第2層',
    description: '中級チャレンジ。中盤ボスの強化版との連戦。',
    icon: '🗼',
    waves: [
      { bossId: 'boss_volcano_ifrit', statMultiplier: 1.6 },
      { bossId: 'boss_sea_kraken', statMultiplier: 1.5 },
      { bossId: 'boss_elder_dragon', statMultiplier: 1.3, isFinalWave: true },
    ],
    rewards: { gold: 5000 },
  },
  {
    id: 'challenge_3',
    name: '試練の塔 第3層',
    description: '上級チャレンジ。後半ボスの強化版との壮絶な連戦。',
    icon: '🗼',
    waves: [
      { bossId: 'boss_elder_dragon', statMultiplier: 1.8 },
      { bossId: 'boss_sky_titan', statMultiplier: 1.6 },
      { bossId: 'boss_time_lord', statMultiplier: 1.4, isFinalWave: true },
    ],
    rewards: { gold: 8000 },
  },
  {
    id: 'challenge_4',
    name: '試練の塔 最終層',
    description: '伝説級チャレンジ。全ボスが最強形態で襲いかかる。',
    icon: '👑',
    waves: [
      { bossId: 'boss_volcano_ifrit', statMultiplier: 2.0 },
      { bossId: 'boss_sea_kraken', statMultiplier: 2.0 },
      { bossId: 'boss_elder_dragon', statMultiplier: 1.8 },
      { bossId: 'boss_sky_titan', statMultiplier: 1.8 },
      { bossId: 'boss_time_lord', statMultiplier: 1.6, isFinalWave: true },
    ],
    rewards: { gold: 15000 },
  },
];
