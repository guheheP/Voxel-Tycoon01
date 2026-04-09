/**
 * BattleScreen — サイドビュー RPG 風バトル UI
 * 上部: ボスステータスバー
 * 中央: 2D ピクセルアート風キャンバス（冒険者 vs ボス）
 * 下部左: アイテムカード / 下部右: パーティステータス
 */
import { eventBus } from '../core/EventBus.js';
import { ItemBlueprints } from '../data/items.js';
import { GameConfig } from '../data/config.js';
import { assetPath } from '../core/assetPath.js';
import { BattleCanvas } from './BattleCanvas.js';

export class BattleScreen {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.overlay = null;
    this.state = null;
    this.itemsWithEffects = [];
    this._lastUsesKey = '';
    this._lastLogLength = 0;
    this._els = {};
    this._lastBuffKeys = {};
    this._resultShown = false;
    this._pendingTimers = [];
    this._canvas = null;

    this._unsubs = [
      eventBus.on('battle:start', (state) => this.show(state)),
      eventBus.on('battle:tick', (state) => this.update(state)),
      eventBus.on('battle:win', () => this.showResult('win')),
      eventBus.on('battle:lose', (data) => this.showResult(data.reason)),
      eventBus.on('battle:phaseShift', (d) => this._onPhaseShift(d)),
      eventBus.on('battle:se:advAttack', () => this._onAdvAttack()),
      eventBus.on('battle:se:bossAttack', () => this._onBossAttack()),
      eventBus.on('battle:se:bossAoe', () => this._onBossAoe()),
      eventBus.on('battle:se:bossHeavy', () => this._onBossAttack()),
      eventBus.on('battle:se:heal', () => this._animateItemFx('heal')),
      eventBus.on('battle:se:revive', () => this._animateItemFx('revive')),
      eventBus.on('battle:se:damage', () => this._animateItemFx('damage')),
      eventBus.on('battle:se:stun', () => this._animateItemFx('stun')),
      eventBus.on('battle:se:buff', () => this._animateItemFx('buff')),
      eventBus.on('battle:se:debuff', () => this._animateItemFx('debuff')),
      eventBus.on('challenge:waveStart', (d) => this._onChallengeWaveStart(d)),
      eventBus.on('challenge:complete', (d) => this._onChallengeComplete(d)),
    ];
  }

  // ── タイマー管理 ──
  _trackedTimeout(fn, ms) {
    const id = setTimeout(() => { fn(); const i = this._pendingTimers.indexOf(id); if (i !== -1) this._pendingTimers.splice(i, 1); }, ms);
    this._pendingTimers.push(id);
    return id;
  }
  _clearAllTimers() { for (const id of this._pendingTimers) clearTimeout(id); this._pendingTimers.length = 0; }

  // ══════════════════════════════════════════════
  //  show — バトル画面構築
  // ══════════════════════════════════════════════
  show(state) {
    this.state = state;
    this._lastLogLength = 0;
    this._lastUsesKey = '';
    this._resultShown = false;
    this._clearAllTimers();
    eventBus.emit('game:pause');

    // バトルアイテムのフィルタリング
    const allBattleItems = this.inventory.items.filter(i => { const bp = ItemBlueprints[i.blueprintId]; return bp && bp.battleEffect; });
    this.itemsWithEffects = (state.selectedItems?.length > 0)
      ? allBattleItems.filter(i => state.selectedItems.includes(i.uid))
      : allBattleItems;

    this.overlay = document.createElement('div');
    this.overlay.className = 'btl-overlay';

    const waveBadge = state.isChallenge ? `<span class="btl-wave-badge">Wave ${state.challengeWave}/${state.challengeTotalWaves}</span>` : '';

    this.overlay.innerHTML = `
      <div class="btl-root">
        <!-- ボスステータスバー（上部） -->
        <div class="btl-boss-bar">
          <div class="btl-boss-left">
            <span class="btl-boss-icon" id="boss-icon">${state.boss.icon}</span>
            <span class="btl-boss-name">${state.boss.name}</span>
            ${waveBadge}
            <span class="btl-boss-phase" id="boss-phase"></span>
          </div>
          <div class="btl-boss-right">
            <div class="btl-hp-bar">
              <div class="btl-hp-fill" id="boss-hp-fill" style="width:100%"></div>
            </div>
            <span class="btl-hp-text" id="boss-hp-text">${state.boss.hp}/${state.boss.maxHp}</span>
          </div>
        </div>

        <!-- キャンバス（中央） -->
        <div class="btl-scene" id="btl-scene"></div>

        <!-- 下部パネル -->
        <div class="btl-bottom">
          <!-- アイテムカード（左） -->
          <div class="btl-cards" id="btl-cards">
            ${this._renderItemCards()}
            <button class="btl-flee-btn" id="btn-flee">🏃 逃走</button>
          </div>
          <!-- パーティステータス（右） -->
          <div class="btl-party" id="btl-party">
            ${this._renderParty(state)}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);

    // 2Dキャンバス初期化
    const sceneEl = this.overlay.querySelector('#btl-scene');
    this._canvas = new BattleCanvas();
    this._canvas.init(sceneEl, state.boss, state.adventurers);

    // DOM キャッシュ
    this._els = {
      bossHpFill: this.overlay.querySelector('#boss-hp-fill'),
      bossHpText: this.overlay.querySelector('#boss-hp-text'),
      bossIcon: this.overlay.querySelector('#boss-icon'),
      bossPhase: this.overlay.querySelector('#boss-phase'),
      bossName: this.overlay.querySelector('.btl-boss-name'),
      cards: this.overlay.querySelector('#btl-cards'),
      party: this.overlay.querySelector('#btl-party'),
      advEls: {},
    };
    for (const a of state.adventurers) {
      this._els.advEls[a.id] = {
        card: this.overlay.querySelector(`#adv-${a.id}`),
        hpFill: this.overlay.querySelector(`#adv-hp-${a.id}`),
        hpText: this.overlay.querySelector(`#adv-hptext-${a.id}`),
        atbFill: this.overlay.querySelector(`#adv-atb-${a.id}`),
        buffs: this.overlay.querySelector(`#adv-buffs-${a.id}`),
      };
    }

    // イベント
    this.overlay.querySelector('#btn-flee').addEventListener('click', () => {
      this._showConfirmModal('本当に逃げますか？', () => eventBus.emit('battle:command', { action: 'flee' }));
    });
    this._els.cards.addEventListener('click', (e) => {
      const btn = e.target.closest('.btl-card');
      if (!btn || btn.classList.contains('btl-card-disabled')) return;
      const uid = btn.dataset.uid;
      if (this.state?.itemCooldowns?.[uid] > 0) return;
      eventBus.emit('battle:command', { action: 'useItem', uid });
    });

    this.update(state);
  }

  // ── パーティ描画 ──
  _renderParty(state) {
    return state.adventurers.map(a => {
      const hpPct = Math.max(0, (a.hp / a.maxHp) * 100);
      const atbPct = Math.min(100, a.atbGauge);
      const dead = a.status === 'dead';
      return `
        <div class="btl-adv ${dead ? 'btl-adv-dead' : ''}" id="adv-${a.id}">
          <div class="btl-adv-head">
            <span class="btl-adv-icon">${a.icon}</span>
            <span class="btl-adv-name">${a.name}</span>
            <span class="btl-adv-lv">Lv.${a.level}</span>
          </div>
          <div class="btl-adv-bars">
            <div class="btl-bar btl-bar-hp">
              <div class="btl-bar-fill btl-bar-hp-fill" id="adv-hp-${a.id}" style="width:${hpPct}%"></div>
            </div>
            <span class="btl-bar-text" id="adv-hptext-${a.id}">${Math.floor(a.hp)}/${a.maxHp}</span>
          </div>
          <div class="btl-adv-atb">
            <div class="btl-bar btl-bar-atb">
              <div class="btl-bar-fill btl-bar-atb-fill ${atbPct >= 95 ? 'btl-atb-ready' : ''}" id="adv-atb-${a.id}" style="width:${atbPct}%"></div>
            </div>
          </div>
          <div class="btl-adv-buffs" id="adv-buffs-${a.id}"></div>
        </div>
      `;
    }).join('');
  }

  // ── アイテムカード描画 ──
  _renderItemCards() {
    if (this.itemsWithEffects.length === 0) return '<div class="btl-no-items">アイテムなし</div>';
    const uses = this.state?.itemUses || {};
    const cds = this.state?.itemCooldowns || {};
    return this.itemsWithEffects.map(item => {
      const bp = ItemBlueprints[item.blueprintId];
      const u = uses[item.uid];
      const rem = u ? u.remaining : 0;
      const max = u ? u.max : 0;
      const exhausted = rem <= 0;
      const cd = cds[item.uid] || 0;
      const onCd = cd > 0;
      const imgUrl = bp.image ? assetPath(bp.image) : null;
      const imgHtml = imgUrl
        ? `<img class="btl-card-img" src="${imgUrl}" />`
        : `<span class="btl-card-emoji">💊</span>`;
      // 使用回数ドット表示
      let dots = '';
      for (let i = 0; i < max; i++) dots += `<span class="btl-dot ${i < rem ? 'btl-dot-on' : ''}"></span>`;

      return `
        <div class="btl-card ${exhausted ? 'btl-card-disabled' : ''} ${onCd ? 'btl-card-cd' : ''}" data-uid="${item.uid}">
          ${imgHtml}
          <div class="btl-card-name">${item.name}</div>
          <div class="btl-card-dots">${dots}</div>
          ${onCd ? `<div class="btl-card-cd-overlay">${Math.ceil(cd)}s</div>` : ''}
        </div>
      `;
    }).join('');
  }

  // ══════════════════════════════════════════════
  //  update — 毎フレーム更新
  // ══════════════════════════════════════════════
  update(state) {
    if (!this.overlay || !state || this._resultShown) return;
    this.state = state;
    const els = this._els;

    // キャンバスに状態同期
    if (this._canvas) this._canvas.sync(state);

    // ── ボスHP ──
    const bossHpPct = Math.max(0, (state.boss.hp / state.boss.maxHp) * 100);
    if (els.bossHpFill) {
      els.bossHpFill.style.width = `${bossHpPct}%`;
      els.bossHpFill.classList.toggle('btl-hp-mid', bossHpPct <= 50 && bossHpPct > 20);
      els.bossHpFill.classList.toggle('btl-hp-low', bossHpPct <= 20);
    }
    if (els.bossHpText) els.bossHpText.textContent = `${Math.floor(state.boss.hp)}/${state.boss.maxHp}`;
    if (els.bossIcon) els.bossIcon.classList.toggle('btl-stun', state.boss.stunTimer > 0);

    // ── パーティ更新 ──
    for (const a of state.adventurers) {
      const ae = els.advEls[a.id];
      if (!ae?.hpFill) continue;
      ae.card.classList.toggle('btl-adv-dead', a.status === 'dead');
      const hpPct = Math.max(0, (a.hp / a.maxHp) * 100);
      ae.hpFill.style.width = `${hpPct}%`;
      ae.hpFill.classList.toggle('btl-hp-mid', hpPct <= 50 && hpPct > 20);
      ae.hpFill.classList.toggle('btl-hp-low', hpPct <= 20);
      ae.hpText.textContent = `${Math.floor(a.hp)}/${a.maxHp}`;
      const atbPct = Math.min(100, a.atbGauge);
      ae.atbFill.style.width = `${atbPct}%`;
      ae.atbFill.classList.toggle('btl-atb-ready', atbPct >= 95);

      // バフ
      if (ae.buffs) {
        const bk = a.activeBuffs?.map(b => `${b.stat}${b.amount > 0 ? '+' : '-'}`).join(',') || '';
        if (this._lastBuffKeys[a.id] !== bk) {
          this._lastBuffKeys[a.id] = bk;
          ae.buffs.innerHTML = (a.activeBuffs || []).map(b => {
            const nm = b.stat === 'atk' ? '攻' : b.stat === 'def' ? '防' : '速';
            return `<span class="btl-buff ${b.amount > 0 ? 'btl-buff-up' : 'btl-buff-down'}">${nm}${b.amount > 0 ? '↑' : '↓'}</span>`;
          }).join('');
        }
      }
    }

    // ── ログからポップアップ生成 ──
    if (state.log.length !== this._lastLogLength) {
      const newEntries = state.log.slice(0, state.log.length - this._lastLogLength);
      this._lastLogLength = state.log.length;
      for (const entry of newEntries) this._processLogForPopup(entry.msg);
    }

    // ── アイテムカード更新 ──
    const cdKey = state.itemCooldowns ? Object.entries(state.itemCooldowns).map(([k,v]) => `${k}:${Math.ceil(v)}`).join(',') : '';
    const uKey = state.itemUses ? Object.entries(state.itemUses).map(([k,v]) => `${k}:${v.remaining}`).join(',') : '';
    const combined = uKey + '|' + cdKey;
    if (combined !== this._lastUsesKey) {
      this._lastUsesKey = combined;
      // カード部分のみ再描画（逃走ボタンは維持）
      const cards = this.overlay.querySelectorAll('.btl-card');
      const newHtml = this._renderItemCards();
      // 逃走ボタンの前にカードを再配置
      const container = this._els.cards;
      const fleeBtn = container.querySelector('.btl-flee-btn');
      // 既存カード削除
      cards.forEach(c => c.remove());
      container.querySelector('.btl-no-items')?.remove();
      fleeBtn.insertAdjacentHTML('beforebegin', newHtml);
    }
  }

  // ══════════════════════════════════════════════
  //  ログ → ポップアップ変換
  // ══════════════════════════════════════════════
  _processLogForPopup(msg) {
    if (!this._canvas) return;

    // ボスへのダメージ
    const bossDmg = msg.match(/ボスに (\d+) (?:のダメージ|ダメージ)/);
    if (bossDmg) {
      this._canvas.spawnBossPopup(`-${bossDmg[1]}`, '#ffaa33');
      return;
    }

    // 冒険者へのダメージ
    const advDmg = msg.match(/(.+?)に (\d+) のダメージ/);
    if (advDmg) {
      const name = advDmg[1].replace(/^.*?！ /, '');
      const adv = this.state?.adventurers.find(a => a.name === name);
      if (adv) this._canvas.spawnAdvPopup(adv.id, `-${advDmg[2]}`, '#ff4444');
      return;
    }

    // HP回復
    const heal = msg.match(/(.+?)のHPが (\d+) 回復/);
    if (heal) {
      const adv = this.state?.adventurers.find(a => a.name === heal[1]);
      if (adv) this._canvas.spawnAdvPopup(adv.id, `+${heal[2]}`, '#44ff66');
      return;
    }

    // チェイン
    const chain = msg.match(/(\d+) Chain/);
    if (chain) {
      this._canvas.spawnBossPopup(`${chain[1]}Chain!`, '#ffd700');
    }
  }

  // ══════════════════════════════════════════════
  //  アニメーション
  // ══════════════════════════════════════════════
  _onAdvAttack() {
    if (!this._canvas || !this.state) return;
    this._canvas.animateBossHit();
    // 最後に攻撃した冒険者のアタックアニメーション
    const lastLog = this.state.log[0]?.msg || '';
    const m = lastLog.match(/^(.+?)の攻撃/);
    if (m) {
      const adv = this.state.adventurers.find(a => a.name === m[1]);
      if (adv) this._canvas.animateAdvAttack(adv.id);
    }
  }
  _onBossAttack() {
    if (!this._canvas || !this.state) return;
    const lastLog = this.state.log[0]?.msg || '';
    const m = lastLog.match(/(.+?)に \d+ (?:のダメージ|の大ダメージ)/);
    if (m) {
      const name = m[1].replace(/^.*?！ /, '');
      const adv = this.state.adventurers.find(a => a.name === name);
      if (adv) this._canvas.animateAdvHit(adv.id);
    }
  }
  _onBossAoe() {
    if (this._canvas) this._canvas.animateAoeHit();
  }

  _animateItemFx(type) {
    if (!this.overlay) return;
    const cls = `btl-fx-${type}`;
    const root = this.overlay.querySelector('.btl-root');
    if (!root) return;
    root.classList.remove(cls);
    void root.offsetWidth;
    root.classList.add(cls);
    this._trackedTimeout(() => root.classList.remove(cls), 600);
  }

  _onPhaseShift(data) {
    if (!this.overlay || !data?.phase) return;
    const badge = this._els.bossPhase;
    if (badge) {
      badge.textContent = `🔥 ${data.phase.name}`;
      badge.classList.add('btl-phase-active');
    }
    // キャンバスフラッシュ
    if (this._canvas) this._canvas.animateBossHit();
  }

  // ══════════════════════════════════════════════
  //  結果画面
  // ══════════════════════════════════════════════
  showResult(result) {
    if (!this.overlay || this._resultShown) return;
    this._resultShown = true;
    this._clearAllTimers();

    let titleHtml, detailHtml = '', confetti = '';

    if (result === 'win') {
      titleHtml = '<div class="btl-result-title btl-win">VICTORY!</div>';
      const survivors = this.state?.adventurers.filter(a => a.status === 'active').length || 0;
      const total = this.state?.adventurers.length || 0;
      const chainMax = this.state?.chainMax || 0;
      detailHtml = `
        <div class="btl-result-detail">
          <div>⚔️ ボス撃破！</div>
          <div>👥 生存: ${survivors}/${total}</div>
          ${chainMax >= 2 ? `<div>🔗 最大チェイン: ${chainMax}</div>` : ''}
        </div>`;
      // 紙吹雪
      const colors = ['#fca311','#e63946','#457b9d','#7ddd88','#ff6b35','#a855f7'];
      let pieces = '';
      for (let i = 0; i < 40; i++) {
        const c = colors[i % colors.length], l = Math.random()*100, d = Math.random()*0.8, dur = 1.5+Math.random()*1.5, s = 4+Math.random()*5;
        pieces += `<div class="btl-confetti" style="left:${l}%;background:${c};width:${s}px;height:${s}px;animation-delay:${d}s;animation-duration:${dur}s"></div>`;
      }
      confetti = `<div class="btl-confetti-wrap">${pieces}</div>`;
    } else if (result === 'wipeout') {
      titleHtml = '<div class="btl-result-title btl-lose">DEFEAT...</div>';
      detailHtml = '<div class="btl-result-detail">全滅してしまった。装備を強化して再挑戦しよう。</div>';
    } else {
      titleHtml = '<div class="btl-result-title btl-lose">逃走した。</div>';
      detailHtml = '<div class="btl-result-detail">態勢を整えてから再挑戦しよう。</div>';
    }
    const lost = this.state?.selectedItems?.length || 0;
    if (lost > 0 && result !== 'win') {
      detailHtml += `<div class="btl-result-lost">持ち込みアイテム ${lost}個 を失った...</div>`;
    }

    const res = document.createElement('div');
    res.className = 'btl-result-overlay';
    res.innerHTML = `${confetti}<div class="btl-result-box">${titleHtml}${detailHtml}<button class="btl-result-btn" id="btn-close-result">戻る</button></div>`;
    this.overlay.appendChild(res);

    res.querySelector('#btn-close-result').addEventListener('click', () => {
      this._disposeCanvas();
      eventBus.emit('game:resume');
      this.overlay.remove();
      this.overlay = null;
      this.state = null;
      this._els = {};
      this._resultShown = false;
    });
  }

  // ── 確認モーダル ──
  _showConfirmModal(message, onConfirm) {
    if (!this.overlay) return;
    const m = document.createElement('div');
    m.className = 'btl-result-overlay';
    m.innerHTML = `<div class="btl-result-box"><div style="margin-bottom:12px">${message}</div><div style="display:flex;gap:8px;justify-content:center"><button class="btl-result-btn btl-btn-yes">はい</button><button class="btl-result-btn">いいえ</button></div></div>`;
    this.overlay.appendChild(m);
    m.querySelector('.btl-btn-yes').addEventListener('click', () => { m.remove(); onConfirm(); });
    m.querySelectorAll('.btl-result-btn:not(.btl-btn-yes)').forEach(b => b.addEventListener('click', () => m.remove()));
  }

  // ── チャレンジモード ──
  _onChallengeWaveStart(data) {
    if (!this.overlay || !this.state) return;
    const s = this.state;
    const nameEl = this._els.bossName;
    if (nameEl) nameEl.textContent = s.boss.name;
    const waveBadges = this.overlay.querySelectorAll('.btl-wave-badge');
    waveBadges.forEach(b => b.textContent = `Wave ${data.wave}/${data.totalWaves}`);
    if (this._els.bossIcon) this._els.bossIcon.textContent = s.boss.icon;
    if (this._canvas) this._canvas.updateBoss(s.boss);
  }
  _onChallengeComplete(data) {
    const gold = data.rewards?.gold || 0;
    if (gold > 0 && this.inventory) this.inventory.addGold(gold);
    eventBus.emit('toast', { message: `👑 チャレンジクリア！ 報酬: ${gold}G`, type: 'success' });
  }

  // ── ターゲット選択 ──
  showTargetSelection(uid, targetType) {
    if (!this.overlay || !this.state) return;
    const isRevive = targetType === 'dead_ally';
    const candidates = this.state.adventurers.filter(a => isRevive ? a.status === 'dead' : a.status === 'active');
    if (candidates.length === 0) { eventBus.emit('toast', { message: isRevive ? '蘇生対象がいません' : '回復対象がいません', type: 'warning' }); return; }
    if (candidates.length === 1) { eventBus.emit('battle:command', { action: 'useItem', uid }); return; }

    const sel = document.createElement('div');
    sel.className = 'btl-result-overlay';
    sel.innerHTML = `<div class="btl-result-box"><div style="margin-bottom:10px">💚 ${isRevive ? '蘇生' : '回復'}対象を選択</div>
      ${candidates.map(a => `<button class="btl-result-btn" data-adv="${a.id}">${a.icon} ${a.name} ${isRevive ? '💀' : `HP${Math.floor(a.hp/a.maxHp*100)}%`}</button>`).join('')}
      <button class="btl-result-btn btl-cancel">キャンセル</button></div>`;
    this.overlay.appendChild(sel);
    sel.querySelectorAll('[data-adv]').forEach(b => b.addEventListener('click', () => { sel.remove(); eventBus.emit('battle:command', { action: 'useItem', uid, targetAdvId: b.dataset.adv }); }));
    sel.querySelector('.btl-cancel').addEventListener('click', () => sel.remove());
  }

  // ── クリーンアップ ──
  _disposeCanvas() { if (this._canvas) { this._canvas.dispose(); this._canvas = null; } }
  dispose() {
    this._clearAllTimers();
    this._disposeCanvas();
    this._unsubs.forEach(u => u());
  }
}
