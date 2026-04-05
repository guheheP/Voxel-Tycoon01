/**
 * BattleSim — モンテカルロ法バトルシミュレータ
 * BattleSystem.js の計算式を pure function として完全移植
 */
import { AdventurerDefs, UnlockableAdventurers, LevelBonuses } from '../data/adventurers.js';
import { AreaDefs } from '../data/areas.js';
import { TraitDefs } from '../data/items.js';

const ATB_FILL_RATE = 1.0;
const SIM_DT = 0.05;
const MAX_SIM_TIME = 600;

const _allAdvDefs = [...AdventurerDefs, ...UnlockableAdventurers];

/** 冒険者ステータスを BattleSystem.startBattle と同じロジックで構築 */
function buildAdvActor(def, level, weaponQ = 0, weaponTraits = []) {
  const bat = def.battle || { maxHp: 100, atk: 10, def: 5, spd: 50 };
  const maxHp  = bat.maxHp  + (level - 1) * 5;
  const atk    = bat.atk    + (level - 1) * 2;
  const defStat= bat.def    + (level - 1) * 1;
  const spd    = bat.spd    + (level - 1) * 2;

  let eqAtk = 0, eqDef = 0, eqSpd = 0, eqHp = 0;
  let initialAtb = 0, regen = 0, dmgReduction = 0;

  if (weaponQ > 0) {
    eqAtk += Math.floor(weaponQ / 10);
  }
  for (const traitName of weaponTraits) {
    const td = TraitDefs[traitName];
    if (!td?.effects) continue;
    eqAtk        += td.effects.battleAtk          || 0;
    eqDef        += td.effects.battleDef          || 0;
    eqSpd        += td.effects.battleSpd          || 0;
    eqHp         += td.effects.battleHp           || 0;
    initialAtb    = Math.max(initialAtb, td.effects.startAtb || 0);
    regen        += td.effects.battleRegen        || 0;
    dmgReduction += td.effects.battleDmgReduction || 0;
  }

  return {
    id: def.id,
    name: def.name,
    hp: maxHp + eqHp,
    maxHp: maxHp + eqHp,
    baseAtk: atk + eqAtk,
    baseDef: defStat + eqDef,
    baseSpd: spd + eqSpd,
    atbGauge: Math.min(50, initialAtb),
    status: 'active',
    regen,
    dmgReduction,
    activeBuffs: [],
  };
}

function _getSpd(actor) {
  let spd = actor.baseSpd;
  for (const b of (actor.activeBuffs || [])) {
    if (b.stat === 'spd') spd += b.amount;
  }
  return Math.max(10, spd);
}
function _getAtk(actor) {
  let atk = actor.baseAtk;
  for (const b of (actor.activeBuffs || [])) {
    if (b.stat === 'atk') atk += b.amount;
  }
  return Math.max(1, atk);
}
function _getDef(actor) {
  let def = actor.baseDef;
  for (const b of (actor.activeBuffs || [])) {
    if (b.stat === 'def') def += b.amount;
  }
  return Math.max(0, def);
}

/** フェーズシフト判定（BattleSystem._checkPhaseShift と完全一致） */
function checkPhaseShift(boss) {
  if (!boss.phases || boss.phases.length === 0) return;
  const hpRatio = boss.hp / boss.maxHp;
  for (const phase of boss.phases) {
    if (boss.triggeredPhases.includes(phase.name)) continue;
    if (hpRatio <= phase.hpThreshold) {
      boss.triggeredPhases.push(phase.name);
      boss.currentPhaseName = phase.name;
      if (phase.effect) {
        const { stat, amount } = phase.effect;
        if (stat === 'atk') boss.baseAtk += amount;
        else if (stat === 'def') boss.baseDef += amount;
        else if (stat === 'spd') boss.baseSpd += amount;
      }
      break;
    }
  }
}

/** 1バトルのシミュレーション */
function simulateOneBattle(party, bossDef, rng) {
  // ディープコピー
  const advs = party.map(a => ({ ...a, activeBuffs: [] }));
  const boss = {
    hp: bossDef.maxHp, maxHp: bossDef.maxHp,
    baseAtk: bossDef.atk, baseDef: bossDef.def, baseSpd: bossDef.spd,
    atbGauge: 0,
    stunTimer: 0,
    phases: (bossDef.phases || []).map(p => ({ ...p })),
    triggeredPhases: [],
    currentPhaseName: null,
    activeBuffs: [],
  };

  let elapsed = 0;

  while (elapsed < MAX_SIM_TIME) {
    elapsed += SIM_DT;

    // リジェネ
    for (const a of advs) {
      if (a.status === 'active' && a.regen > 0) {
        a.hp = Math.min(a.maxHp, a.hp + a.regen * SIM_DT);
      }
    }

    // ボス ATB（スタン中は停止）
    if (boss.stunTimer > 0) {
      boss.stunTimer = Math.max(0, boss.stunTimer - SIM_DT);
    } else {
      boss.atbGauge += _getSpd(boss) * SIM_DT * ATB_FILL_RATE;
      if (boss.atbGauge >= 100) {
        boss.atbGauge = 0;
        const aliveAdvs = advs.filter(a => a.status === 'active');
        if (aliveAdvs.length === 0) return { win: false, elapsed };
        const target = aliveAdvs[Math.floor(rng() * aliveAdvs.length)];
        const dmg = Math.max(1,
          Math.floor(_getAtk(boss) * (1 + rng() * 0.2) - _getDef(target)) - (target.dmgReduction || 0)
        );
        target.hp -= dmg;
        if (target.hp <= 0) {
          target.hp = 0;
          target.status = 'dead';
          target.atbGauge = 0;
        }
        if (advs.every(a => a.status === 'dead')) return { win: false, elapsed };
      }
    }

    // 冒険者 ATB
    for (const a of advs) {
      if (a.status === 'dead') continue;
      a.atbGauge += _getSpd(a) * SIM_DT * ATB_FILL_RATE;
      if (a.atbGauge >= 100) {
        a.atbGauge = 0;
        const dmg = Math.max(1,
          Math.floor(_getAtk(a) * (1 + rng() * 0.2) - _getDef(boss))
        );
        boss.hp -= dmg;
        checkPhaseShift(boss);
        if (boss.hp <= 0) return { win: true, elapsed };
      }
    }
  }

  return { win: false, elapsed: MAX_SIM_TIME }; // タイムアウト
}

/**
 * モンテカルロバトルシミュレーション
 * @param {Object} params
 * @param {string[]} params.adventurerIds
 * @param {number[]} params.levels
 * @param {number[]} params.weaponQualities  各冒険者の武器品質 (0=なし)
 * @param {string}   params.bossAreaId       AreaDefs のキー
 * @param {number}   [iterations=200]
 * @returns {{ winRate: number, avgTime: number, minTime: number, maxTime: number, wins: number, total: number }}
 */
export function runBattleMonteCarlo(params, iterations = 200) {
  const { adventurerIds, levels, weaponQualities = [], bossAreaId } = params;

  const area = AreaDefs[bossAreaId];
  if (!area || !area.boss) throw new Error(`Boss not found for area: ${bossAreaId}`);
  const bossDef = area.boss;

  // 冒険者ビルド
  const party = adventurerIds.map((id, i) => {
    const def = _allAdvDefs.find(d => d.id === id);
    if (!def) throw new Error(`Adventurer not found: ${id}`);
    return buildAdvActor(def, levels[i] || 1, weaponQualities[i] || 0, []);
  });

  // シンプルな線形合同法 RNG（シード固定可能）
  let seed = 12345;
  function rng() {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    return (seed >>> 0) / 0x100000000;
  }

  let wins = 0;
  let totalTime = 0;
  let minTime = Infinity;
  let maxTime = -Infinity;

  for (let i = 0; i < iterations; i++) {
    // 各試行で seed を変える
    seed = seed ^ (i * 2654435761);
    const { win, elapsed } = simulateOneBattle(party, bossDef, rng);
    if (win) wins++;
    totalTime += elapsed;
    if (elapsed < minTime) minTime = elapsed;
    if (elapsed > maxTime) maxTime = elapsed;
  }

  return {
    wins,
    total: iterations,
    winRate: Math.round((wins / iterations) * 100),
    avgTime: Math.round(totalTime / iterations),
    minTime: Math.round(minTime),
    maxTime: Math.round(maxTime),
  };
}

/** 全ボス一覧を返す */
export function getAllBosses() {
  return Object.values(AreaDefs)
    .filter(a => a.boss)
    .map(a => ({ areaId: a.id, areaName: a.name, boss: a.boss }));
}

/** 全冒険者定義を返す */
export function getAllAdventurerDefs() {
  return _allAdvDefs;
}
