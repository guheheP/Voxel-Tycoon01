import { eventBus } from './core/EventBus.js';
import { GameConfig } from './data/config.js';
import { ItemBlueprints, TraitDefs } from './data/items.js';
import { AdventurerDefs, UnlockableAdventurers } from './data/adventurers.js';

// 全冒険者定義を結合して高速ルックアップ
const _allAdvDefs = [...AdventurerDefs, ...UnlockableAdventurers];
function _getAdvDef(id) {
  return _allAdvDefs.find(d => d.id === id);
}

export class BattleSystem {
  constructor(adventurerSystem, inventorySystem) {
    this.adventurers = adventurerSystem;
    this.inventory = inventorySystem;
    
    this.active = false;
    this.state = null;
  }

  startBattle(rankIndex, bossDef, selectedItems = null) {
    // 持ち込みアイテムを保存（BattleScreenで参照）
    this.selectedItems = selectedItems;
    // 参加冒険者は全生存者
    const participants = this.adventurers.adventurers.map(a => {
      const def = _getAdvDef(a.id);
      // level bonus points
      const level = a.level || 1;
      const bat = (def && def.battle) || { maxHp: 100, atk: 10, def: 5, spd: 50 };
      const spd = bat.spd + (level - 1) * 2;
      const maxHp = bat.maxHp + (level - 1) * 5;
      const atk = bat.atk + (level - 1) * 2;
      const defStat = bat.def + (level - 1) * 1;
      
      // equipment bonus (weapon value + trait passive effects)
      let eqAtk = 0, eqDef = 0, eqSpd = 0, eqHp = 0;
      let initialAtb = 0, regen = 0, dmgReduction = 0;
      if (a.equipment?.weapon) {
        const wVal = a.equipment.weapon.value || 0;
        eqAtk += Math.floor(wVal / 10);
        for (const traitName of (a.equipment.weapon.traits || [])) {
          const td = TraitDefs[traitName];
          if (!td?.effects) continue;
          eqAtk        += td.effects.battleAtk         || 0;
          eqDef        += td.effects.battleDef         || 0;
          eqSpd        += td.effects.battleSpd         || 0;
          eqHp         += td.effects.battleHp          || 0;
          initialAtb    = Math.max(initialAtb, td.effects.startAtb || 0);
          regen        += td.effects.battleRegen       || 0;
          dmgReduction += td.effects.battleDmgReduction || 0;
        }
      }

      return {
        id: a.id,
        name: a.name,
        icon: a.icon,
        level: level,
        hp: maxHp + eqHp,
        maxHp: maxHp + eqHp,
        baseAtk: atk + eqAtk,
        baseDef: defStat + eqDef,
        baseSpd: spd + eqSpd,
        atbGauge: Math.min(50, initialAtb),
        status: 'active',
        regen,
        dmgReduction,
        activeBuffs: []
      };
    });

    if (participants.length === 0) {
      eventBus.emit('toast', { message: '冒険者がいません！', type: 'error' });
      return false;
    }

    this.state = {
      rankIndex: rankIndex,
      phase: 'fighting',
      boss: {
        id: bossDef.id,
        name: bossDef.name,
        icon: bossDef.icon,
        hp: bossDef.maxHp,
        maxHp: bossDef.maxHp,
        baseAtk: bossDef.atk,
        baseDef: bossDef.def,
        baseSpd: bossDef.spd,
        atbGauge: 0,
        activeBuffs: [],
        stunTimer: 0,
        phases: bossDef.phases || [],
        triggeredPhases: [],
        currentPhaseName: null,
      },
      adventurers: participants,
      log: [],
      itemCooldown: 0,
      selectedItems: selectedItems, // 持ち込みアイテムのuid[] (nullなら全アイテム)
    };

    this.active = true;
    eventBus.emit('battle:start', this.state);
    this._log('ボスバトル開始！');
    return true;
  }

  update(dt) {
    if (!this.active || !this.state || this.state.phase !== 'fighting') return;

    const s = this.state;
    const fillRate = GameConfig.bossBattle.atbFillRate || 1.0;

    // クールダウン更新
    if (s.itemCooldown > 0) {
      s.itemCooldown -= dt;
      if (s.itemCooldown < 0) s.itemCooldown = 0;
    }

    // バフ更新
    this._updateBuffs(s.boss, dt);
    for (const a of s.adventurers) {
      if (a.status === 'active') this._updateBuffs(a, dt);
    }

    // ATB 進行 (boss) — スタン中は停止
    if (s.boss.stunTimer > 0) {
      s.boss.stunTimer = Math.max(0, s.boss.stunTimer - dt);
    } else {
      s.boss.atbGauge += this._getSpd(s.boss) * dt * fillRate;
      if (s.boss.atbGauge >= 100 && this.state.phase === 'fighting') {
        this._executeBossAction();
      }
    }

    // リジェネ処理
    for (const a of s.adventurers) {
      if (a.status === 'active' && a.regen > 0) {
        a.hp = Math.min(a.maxHp, a.hp + a.regen * dt);
      }
    }

    // ATB 進行 (adventurers)
    for (const a of s.adventurers) {
      if (a.status === 'dead') continue;
      a.atbGauge += this._getSpd(a) * dt * fillRate;
      if (a.atbGauge >= 100 && this.state.phase === 'fighting') {
        this._executeAdvAction(a);
      }
    }

    eventBus.emit('battle:tick', this.state);
  }

  useItem(itemUid, targetAdvId = null) {
    if (!this.active || this.state.phase !== 'fighting') return false;
    if (this.state.itemCooldown > 0) return false;

    // アイテム検索
    const item = this.inventory.items.find(i => i.uid === itemUid);
    if (!item) return false;
    const bp = ItemBlueprints[item.blueprintId];
    if (!bp || !bp.battleEffect) return false;

    const fx = bp.battleEffect;

    // Remove from inventory
    this.inventory.removeItem(itemUid);

    this._log(`プレイヤーが ${item.name} を使った！`);
    eventBus.emit('battle:se:itemUse');

    // revive は死亡者を対象にする
    const resolveTarget = fx.type === 'revive'
      ? (fx.target === 'ally' || fx.target === 'all' ? 'dead_ally' : fx.target)
      : fx.target;
    const targets = this._resolveTargets(resolveTarget, targetAdvId);

    // Apply effect
    for (const t of targets) {
      if (fx.type === 'heal') {
        if (t.status === 'dead') continue;
        const amount = typeof fx.value === 'number' ? fx.value : 50;
        t.hp = Math.min(t.maxHp, t.hp + amount);
        this._log(`${t.name}のHPが ${amount} 回復！`);
        eventBus.emit('battle:se:heal');
      } else if (fx.type === 'healfull') {
        if (t.status === 'dead') continue;
        t.hp = t.maxHp;
        this._log(`${t.name}のHPが 全回復！`);
        eventBus.emit('battle:se:heal');
      } else if (fx.type === 'revive') {
        if (t.status === 'dead') {
           t.status = 'active';
           t.hp = typeof fx.value === 'number' ? fx.value : Math.floor(t.maxHp / 2);
           t.atbGauge = 0;
           this._log(`${t.name}が復活した！`);
           eventBus.emit('battle:se:revive');
        }
      } else if (fx.type === 'damage') {
        const dmg = fx.value ?? 30;
        this.state.boss.hp = Math.max(0, this.state.boss.hp - dmg);
        this._log(`${item.name} がボスに ${dmg} ダメージ！`);
        eventBus.emit('battle:se:damage');
        if (this.state.boss.hp <= 0) { this._doWin(); break; }
      } else if (fx.type === 'stun') {
        this.state.boss.atbGauge = 0;
        this.state.boss.stunTimer = fx.duration ?? 8;
        this._log(`${item.name} がボスをスタンさせた！`);
        eventBus.emit('battle:se:stun');
      } else if (fx.type === 'buff' || fx.type === 'debuff') {
        if (t.status === 'dead') continue;
        t.activeBuffs.push({
          stat: fx.stat,
          amount: fx.amount,
          timer: fx.duration
        });
        const statName = fx.stat === 'atk' ? '攻撃力' : fx.stat === 'def' ? '防御力' : '素早さ';
        const updown = fx.type === 'buff' ? 'アップ' : 'ダウン';
        this._log(`${t.name}の${statName}が${updown}！`);
        if (fx.type === 'buff') eventBus.emit('battle:se:buff');
        else eventBus.emit('battle:se:debuff');
      }
    }

    // クールダウン設定
    this.state.itemCooldown = GameConfig.bossBattle.itemCooldownSeconds;
    
    // UIの描画用に1回発火
    eventBus.emit('battle:tick', this.state);
    
    return true;
  }

  flee() {
    if (!this.active) return;
    this._log('逃走した...');
    this.state.phase = 'lose';
    this.active = false;
    eventBus.emit('battle:lose', { reason: 'flee' });
  }

  getState() {
    return this.state;
  }

  dispose() { /* no EventBus subscriptions */ }

  // --- Private ---

  _updateBuffs(actor, dt) {
    if (!actor.activeBuffs) return;
    actor.activeBuffs.forEach(b => b.timer -= dt);
    actor.activeBuffs = actor.activeBuffs.filter(b => b.timer > 0);
  }

  _getSpd(actor) {
    let spd = actor.baseSpd;
    if (actor.activeBuffs) {
       for (const b of actor.activeBuffs) {
          if (b.stat === 'spd') spd += b.amount;
       }
    }
    return Math.max(10, spd);
  }

  _getAtk(actor) {
    let atk = actor.baseAtk;
    if (actor.activeBuffs) {
       for (const b of actor.activeBuffs) {
          if (b.stat === 'atk') atk += b.amount;
       }
    }
    return Math.max(1, atk);
  }

  _getDef(actor) {
    let def = actor.baseDef;
    if (actor.activeBuffs) {
       for (const b of actor.activeBuffs) {
          if (b.stat === 'def') def += b.amount;
       }
    }
    return Math.max(0, def);
  }

  _executeBossAction() {
    const s = this.state;
    s.boss.atbGauge = 0;

    // 生存者からランダムにターゲット
    const aliveTargets = s.adventurers.filter(a => a.status === 'active');
    if (aliveTargets.length === 0) return;

    const target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
    
    // ダメージ計算（鉄壁特性によるダメージ軽減を考慮）
    const atk = this._getAtk(s.boss);
    const def = this._getDef(target);
    const dmgReduction = target.dmgReduction || 0;
    const damage = Math.max(1, Math.floor(atk * (1 + Math.random() * 0.2) - def) - dmgReduction);

    target.hp -= damage;
    this._log(`ボスの攻撃！ ${target.name}に ${damage} のダメージ！`);
    eventBus.emit('battle:se:bossAttack');

    if (target.hp <= 0) {
      target.hp = 0;
      target.status = 'dead';
      target.atbGauge = 0;
      target.activeBuffs = [];
      this._log(`${target.name}は倒れた！`);
      eventBus.emit('battle:se:ko');
      this._checkLose();
    }
  }

  _executeAdvAction(adv) {
    const s = this.state;
    adv.atbGauge = 0;

    const atk = this._getAtk(adv);
    const def = this._getDef(s.boss);
    const damage = Math.max(1, Math.floor(atk * (1 + Math.random() * 0.2) - def));

    s.boss.hp -= damage;
    this._log(`${adv.name}の攻撃！ ボスに ${damage} のダメージ！`);
    eventBus.emit('battle:se:advAttack');

    // フェーズシフトチェック
    this._checkPhaseShift();

    if (s.boss.hp <= 0) {
      s.boss.hp = 0;
      this._doWin();
    }
  }

  _resolveTargets(targetType, singleId) {
    const s = this.state;
    if (targetType === 'all') return s.adventurers;
    if (targetType === 'all_dead') {
       return s.adventurers.filter(a => a.status === 'dead');
    }
    if (targetType === 'enemy') return [s.boss];
    if (targetType === 'ally') {
       if (singleId) {
         const found = s.adventurers.find(a => a.id === singleId);
         return found ? [found] : [];
       }
       // IDが指定されなかった場合はランダムな味方か、全員の中で一番HP割合が低い味方にする（簡易処理）
       const alive = s.adventurers.filter(a => a.status === 'active');
       if (alive.length === 0) return [];
       // HPが減っている順にソートして一番低い対象にする
       alive.sort((a,b) => (a.hp/a.maxHp) - (b.hp/b.maxHp));
       return [alive[0]];
    }
    if (targetType === 'dead_ally') {
       if (singleId) {
         const found = s.adventurers.find(a => a.id === singleId && a.status === 'dead');
         return found ? [found] : [];
       }
       const dead = s.adventurers.filter(a => a.status === 'dead');
       return dead.length > 0 ? [dead[0]] : [];
    }
    return [];
  }

  _checkLose() {
    if (this.state.phase !== 'fighting') return; // already resolved
    const aliveTargets = this.state.adventurers.filter(a => a.status === 'active');
    if (aliveTargets.length === 0) {
      this._log('パーティは全滅した...');
      this.state.phase = 'lose';
      this.active = false;
      eventBus.emit('battle:lose', { reason: 'wipeout' });
    }
  }

  _doWin() {
    if (this.state.phase !== 'fighting') return; // already resolved
    this._log('ボスを撃破した！！');
    this.state.phase = 'win';
    this.active = false;
    eventBus.emit('battle:win', { rankIndex: this.state.rankIndex });
  }

  _log(msg) {
    if (!this.state) return;
    this.state.log.unshift({ time: Date.now(), msg });
    if (this.state.log.length > 50) this.state.log.pop();
  }

  /** フェーズシフト判定 — ボスHPが閾値を下回ったら永続バフを付与 */
  _checkPhaseShift() {
    const boss = this.state.boss;
    if (!boss.phases || boss.phases.length === 0) return;

    const hpRatio = boss.hp / boss.maxHp;

    for (const phase of boss.phases) {
      // 既に発動済みならスキップ
      if (boss.triggeredPhases.includes(phase.name)) continue;
      // HP割合が閾値以下になったら発動
      if (hpRatio <= phase.hpThreshold) {
        boss.triggeredPhases.push(phase.name);
        boss.currentPhaseName = phase.name;

        // 永続バフとして基本ステータスに加算（戦闘終了まで持続）
        if (phase.effect) {
          const stat = phase.effect.stat;
          const amount = phase.effect.amount;
          if (stat === 'atk') boss.baseAtk += amount;
          else if (stat === 'def') boss.baseDef += amount;
          else if (stat === 'spd') boss.baseSpd += amount;
        }

        // ログ・演出
        this._log(`── ${phase.name} ──`);
        if (phase.message) this._log(phase.message);

        const statName = phase.effect?.stat === 'atk' ? '攻撃力'
                       : phase.effect?.stat === 'def' ? '防御力'
                       : phase.effect?.stat === 'spd' ? '素早さ' : '';
        if (statName) {
          this._log(`ボスの${statName}が上がった！`);
        }

        eventBus.emit('battle:phaseShift', { phase });
        eventBus.emit('battle:se:phaseShift');

        // 1回のチェックで1フェーズのみ発動（同時に複数発動しない）
        break;
      }
    }
  }
}
