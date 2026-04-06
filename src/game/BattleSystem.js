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

    // パーティ平均レベルに応じたボスステータスのスケーリング
    const avgLevel = participants.reduce((sum, a) => sum + a.level, 0) / participants.length;
    const levelScale = 1 + (avgLevel - 1) * 0.05; // Lv1=1.0, Lv7=1.30, Lv10=1.45
    const scaledMaxHp = Math.floor(bossDef.maxHp * levelScale);
    const scaledAtk = Math.floor(bossDef.atk * levelScale);
    const scaledDef = Math.floor(bossDef.def * levelScale);
    const scaledSpd = Math.floor(bossDef.spd * (1 + (avgLevel - 1) * 0.025)); // SPDは控えめにスケール

    this.state = {
      rankIndex: rankIndex,
      phase: 'fighting',
      boss: {
        id: bossDef.id,
        name: bossDef.name,
        icon: bossDef.icon,
        preset: bossDef.preset || null,
        hp: scaledMaxHp,
        maxHp: scaledMaxHp,
        baseAtk: scaledAtk,
        baseDef: scaledDef,
        baseSpd: scaledSpd,
        atbGauge: 0,
        activeBuffs: [],
        stunTimer: 0,
        phases: bossDef.phases || [],
        triggeredPhases: [],
        currentPhaseName: null,
        skills: bossDef.skills || [],
        healCooldownTimer: 0,
      },
      adventurers: participants,
      log: [],
      itemCooldown: 0,       // 後方互換（UI参照用）
      itemCooldowns: {},     // uid → 残りクールダウン秒
      chainCount: 0,
      chainTimer: 0,
      chainMax: 0,
      selectedItems: selectedItems,
      itemUses: {}, // uid → { remaining, max }
    };

    // バトルアイテムの使用回数を初期化
    const defaultUses = GameConfig.bossBattle.defaultItemUses || 3;
    const allBattleItems = this.inventory.items.filter(i => {
      const bp = ItemBlueprints[i.blueprintId];
      return bp && bp.battleEffect;
    });
    const targetItems = selectedItems
      ? allBattleItems.filter(i => selectedItems.includes(i.uid))
      : allBattleItems;
    for (const item of targetItems) {
      let bonusUses = 0;
      for (const traitName of (item.traits || [])) {
        const td = TraitDefs[traitName];
        if (td?.effects?.battleItemUses) bonusUses += td.effects.battleItemUses;
      }
      const maxUses = defaultUses + bonusUses;
      this.state.itemUses[item.uid] = { remaining: maxUses, max: maxUses };
    }

    this.active = true;
    eventBus.emit('battle:start', this.state);
    this._log('ボスバトル開始！');
    return true;
  }

  update(dt) {
    if (!this.active || !this.state || this.state.phase !== 'fighting') return;

    const s = this.state;
    const fillRate = GameConfig.bossBattle.atbFillRate || 1.0;

    // チェインタイマー更新
    if (s.chainTimer > 0) {
      s.chainTimer -= dt;
      if (s.chainTimer <= 0) {
        s.chainTimer = 0;
        s.chainCount = 0;
      }
    }

    // アイテム個別クールダウン更新
    for (const uid of Object.keys(s.itemCooldowns)) {
      if (s.itemCooldowns[uid] > 0) {
        s.itemCooldowns[uid] -= dt;
        if (s.itemCooldowns[uid] < 0) s.itemCooldowns[uid] = 0;
      }
    }
    // 後方互換: 最大クールダウンを共通フィールドにも反映（UI用）
    s.itemCooldown = Math.max(0, ...Object.values(s.itemCooldowns), 0);

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
    // アイテム個別クールダウンチェック
    if ((this.state.itemCooldowns[itemUid] || 0) > 0) return false;

    // 使用回数チェック
    const usesInfo = this.state.itemUses[itemUid];
    if (!usesInfo || usesInfo.remaining <= 0) return false;

    // アイテム検索
    const item = this.inventory.items.find(i => i.uid === itemUid);
    if (!item) return false;
    const bp = ItemBlueprints[item.blueprintId];
    if (!bp || !bp.battleEffect) return false;

    const fx = bp.battleEffect;

    // 品質補正: quality 0~100 → 0.7x ~ 1.5x (50で1.0x)
    const quality = item.quality ?? 50;
    const qualityMult = 0.7 + (quality / 100) * 0.8;

    // 特性ボーナス: アイテムのトレイトにバトル系効果があれば加算
    let traitBonus = 0;
    let healBonus = 0;   // battleHealBonus: 回復量の割合増加 (%)
    let healFlat = 0;    // battleHealFlat: アイテム使用時の味方全体固定値回復
    for (const traitName of (item.traits || [])) {
      const td = TraitDefs[traitName];
      if (!td?.effects) continue;
      traitBonus += (td.effects.battleAtk || 0) + (td.effects.battleDef || 0);
      healBonus  += td.effects.battleHealBonus || 0;
      healFlat   += td.effects.battleHealFlat  || 0;
    }
    // トレイトボーナスを割合に変換 (0~56 → 0~0.5x)
    const traitMult = 1 + Math.min(traitBonus / 100, 0.5);
    // 回復量割合ボーナス (0~100% → 1.0x ~ 2.0x)
    const healMult = 1 + healBonus / 100;

    // 統合倍率
    const totalMult = qualityMult * traitMult;

    // 使用回数をデクリメント（アイテムはインベントリに残る）
    usesInfo.remaining--;

    this._log(`プレイヤーが ${item.name} を使った！`);
    eventBus.emit('battle:se:itemUse');

    // revive は死亡者を対象にする
    const resolveTarget = fx.type === 'revive'
      ? (fx.target === 'ally' || fx.target === 'all' ? 'dead_ally' : fx.target)
      : fx.target;
    const targets = this._resolveTargets(resolveTarget, targetAdvId);

    // Apply effect (基礎効果 × 品質補正 × 特性ボーナス)
    for (const t of targets) {
      if (fx.type === 'heal') {
        if (t.status === 'dead') continue;
        const base = typeof fx.value === 'number' ? fx.value : 50;
        const amount = Math.floor(base * totalMult * healMult);
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
           const base = typeof fx.value === 'number' ? fx.value : Math.floor(t.maxHp / 2);
           t.hp = Math.floor(base * qualityMult * healMult);
           t.atbGauge = 0;
           this._log(`${t.name}が復活した！`);
           eventBus.emit('battle:se:revive');
        }
      } else if (fx.type === 'damage') {
        const base = fx.value ?? 30;
        const dmg = Math.floor(base * totalMult);
        this.state.boss.hp = Math.max(0, this.state.boss.hp - dmg);
        this._log(`${item.name} がボスに ${dmg} ダメージ！`);
        eventBus.emit('battle:se:damage');
        if (this.state.boss.hp <= 0) { this._doWin(); break; }
      } else if (fx.type === 'stun') {
        this.state.boss.atbGauge = 0;
        const baseDur = fx.duration ?? 8;
        this.state.boss.stunTimer = Math.floor(baseDur * qualityMult); // スタンは品質のみ
        this._log(`${item.name} がボスをスタンさせた！`);
        eventBus.emit('battle:se:stun');
      } else if (fx.type === 'buff' || fx.type === 'debuff') {
        if (t.status === 'dead') continue;
        const baseAmount = fx.amount;
        const amount = Math.floor(baseAmount * totalMult);
        t.activeBuffs.push({
          stat: fx.stat,
          amount: amount,
          timer: Math.floor((fx.duration || 10) * qualityMult) // 持続時間も品質で変動
        });
        const statName = fx.stat === 'atk' ? '攻撃力' : fx.stat === 'def' ? '防御力' : '素早さ';
        const updown = fx.type === 'buff' ? 'アップ' : 'ダウン';
        this._log(`${t.name}の${statName}が${updown}！`);
        if (fx.type === 'buff') eventBus.emit('battle:se:buff');
        else eventBus.emit('battle:se:debuff');
      }
    }

    // battleHealFlat: アイテム使用時に味方全体を固定値回復（攻撃アイテムにも乗る）
    if (healFlat > 0 && this.state.phase === 'fighting') {
      const flatAmount = Math.floor(healFlat * qualityMult);
      let healed = false;
      for (const a of this.state.adventurers) {
        if (a.status === 'dead' || a.hp >= a.maxHp) continue;
        a.hp = Math.min(a.maxHp, a.hp + flatAmount);
        healed = true;
      }
      if (healed) {
        this._log(`生命の力で味方全体が ${flatAmount} HP回復！`);
        eventBus.emit('battle:se:heal');
      }
    }

    // アイテム個別クールダウン設定
    const itemCd = fx.cooldown ?? GameConfig.bossBattle.itemCooldownSeconds;
    this.state.itemCooldowns[itemUid] = itemCd;
    
    // UIの描画用に1回発火
    eventBus.emit('battle:tick', this.state);
    
    return true;
  }

  flee() {
    if (!this.active) return;
    this._log('逃走した...');
    this.state.phase = 'lose';
    this.active = false;
    this._discardBattleItems();
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

    // ヒールクールダウンをデクリメント
    if (s.boss.healCooldownTimer > 0) {
      s.boss.healCooldownTimer--;
    }

    // 生存者からランダムにターゲット
    const aliveTargets = s.adventurers.filter(a => a.status === 'active');
    if (aliveTargets.length === 0) return;

    // スキル選択
    const skill = this._selectBossSkill(s.boss);

    if (skill && skill.type === 'aoe') {
      // --- AoE: 全冒険者に減衰ダメージ ---
      const atk = this._getAtk(s.boss);
      const mult = skill.damageMult || 0.6;
      this._log(`ボスの${skill.name}！ 全体攻撃！`);
      eventBus.emit('battle:se:bossAoe');
      for (const target of aliveTargets) {
        const def = this._getDef(target);
        const dmgReduction = target.dmgReduction || 0;
        const damage = Math.max(1, Math.floor(atk * mult * (1 + Math.random() * 0.2) - def) - dmgReduction);
        target.hp -= damage;
        this._log(`${target.name}に ${damage} のダメージ！`);
        if (target.hp <= 0) {
          target.hp = 0;
          target.status = 'dead';
          target.atbGauge = 0;
          target.activeBuffs = [];
          this._log(`${target.name}は倒れた！`);
          eventBus.emit('battle:se:ko');
        }
      }
      this._checkLose();

    } else if (skill && skill.type === 'heavy') {
      // --- Heavy: 高倍率単体攻撃、次ターンATBペナルティ ---
      const target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
      const atk = this._getAtk(s.boss);
      const def = this._getDef(target);
      const mult = skill.damageMult || 1.5;
      const dmgReduction = target.dmgReduction || 0;
      const damage = Math.max(1, Math.floor(atk * mult * (1 + Math.random() * 0.2) - def) - dmgReduction);
      target.hp -= damage;
      this._log(`ボスの${skill.name}！ ${target.name}に ${damage} の大ダメージ！`);
      eventBus.emit('battle:se:bossHeavy');
      // ATBペナルティ: 次ターンが遅くなる
      s.boss.atbGauge = -30;
      if (target.hp <= 0) {
        target.hp = 0;
        target.status = 'dead';
        target.atbGauge = 0;
        target.activeBuffs = [];
        this._log(`${target.name}は倒れた！`);
        eventBus.emit('battle:se:ko');
        this._checkLose();
      }

    } else if (skill && skill.type === 'heal') {
      // --- Heal: ボス自身のHP回復 ---
      const healPercent = skill.healPercent || 10;
      const healAmount = Math.floor(s.boss.maxHp * healPercent / 100);
      s.boss.hp = Math.min(s.boss.maxHp, s.boss.hp + healAmount);
      s.boss.healCooldownTimer = 3;
      this._log(`ボスの${skill.name}！ HPが ${healAmount} 回復した！`);
      eventBus.emit('battle:se:bossHeal');

    } else {
      // --- 通常攻撃 (デフォルト / attack タイプ) ---
      const target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
      const atk = this._getAtk(s.boss);
      const def = this._getDef(target);
      const dmgReduction = target.dmgReduction || 0;
      const damage = Math.max(1, Math.floor(atk * (1 + Math.random() * 0.2) - def) - dmgReduction);
      target.hp -= damage;
      const skillName = skill ? skill.name : '攻撃';
      this._log(`ボスの${skillName}！ ${target.name}に ${damage} のダメージ！`);
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
  }

  /** ボスのスキルを重み付きランダムで選択。条件を満たさないスキルは除外。 */
  _selectBossSkill(boss) {
    const skills = boss.skills;
    if (!skills || skills.length === 0) return null;

    // 使用可能なスキルをフィルタリング
    const available = skills.filter(sk => {
      if (sk.type === 'heal') {
        // HP50%以下かつクールダウン0のときだけ使用可能
        if (boss.hp / boss.maxHp > 0.5) return false;
        if (boss.healCooldownTimer > 0) return false;
      }
      return true;
    });

    if (available.length === 0) return null;

    // 重み付きランダム選択
    const totalWeight = available.reduce((sum, sk) => sum + sk.chance, 0);
    let roll = Math.random() * totalWeight;
    for (const sk of available) {
      roll -= sk.chance;
      if (roll <= 0) return sk;
    }
    return available[available.length - 1];
  }

  _executeAdvAction(adv) {
    const s = this.state;
    adv.atbGauge = 0;

    // B8: チェインカウント更新
    if (s.chainTimer > 0) {
      s.chainCount++;
    } else {
      s.chainCount = 1;
    }
    s.chainTimer = 2.0;

    // チェインボーナス倍率 (2-chain=1.1x, ..., 6+chain=1.5x cap)
    const chainMult = Math.min(1.5, 1 + (s.chainCount - 1) * 0.1);

    const atk = this._getAtk(adv);
    const def = this._getDef(s.boss);
    const baseDamage = Math.max(1, Math.floor(atk * (1 + Math.random() * 0.2) - def));
    const damage = Math.max(1, Math.floor(baseDamage * chainMult));

    s.boss.hp -= damage;
    this._log(`${adv.name}の攻撃！ ボスに ${damage} のダメージ！`);
    eventBus.emit('battle:se:advAttack');

    // チェイン最大値を記録
    if (s.chainCount > s.chainMax) s.chainMax = s.chainCount;

    // チェインログ・効果音
    if (s.chainCount >= 2) {
      const bonusPct = Math.round((chainMult - 1) * 100);
      this._log(`🔗 ${s.chainCount} Chain! ダメージ+${bonusPct}%`);
      eventBus.emit('battle:se:chain');
    }

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
      this._discardBattleItems();
      eventBus.emit('battle:lose', { reason: 'wipeout' });
    }
  }

  _doWin() {
    if (this.state.phase !== 'fighting') return; // already resolved
    this._log('ボスを撃破した！！');
    this.state.phase = 'win';
    this.active = false;
    this._discardBattleItems();
    eventBus.emit('battle:win', { rankIndex: this.state.rankIndex });
  }

  /** バトル終了時に持ち込みアイテムをインベントリから破棄 */
  _discardBattleItems() {
    if (!this.selectedItems || this.selectedItems.length === 0) return;
    const discarded = [];
    for (const uid of this.selectedItems) {
      const removed = this.inventory.removeItem(uid);
      if (removed) discarded.push(removed.name);
    }
    if (discarded.length > 0) {
      this._log(`持ち込みアイテム ${discarded.length} 個を消費した`);
    }
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
