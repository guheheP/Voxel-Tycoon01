import { eventBus } from '../core/EventBus.js';
import { ItemBlueprints } from '../data/items.js';
import { GameConfig } from '../data/config.js';
import { assetPath } from '../core/assetPath.js';
import { BattleScene3D } from './BattleScene3D.js';

export class BattleScreen {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.overlay = null;
    this.state = null;
    this.itemsWithEffects = [];
    this._lastLogLength = 0;
    this._lastUsesKey = '';

    // DOM element caches (set in show())
    this._els = {};
    this._lastBuffKeys = {};  // advId -> serialized buff string

    this._resultShown = false;
    this._pendingTimers = [];  // 全 setTimeout を追跡
    this._scene3d = null; // C9: 3Dバトルシーン

    this._unsubs = [
      eventBus.on('battle:start', (state) => this.show(state)),
      eventBus.on('battle:tick', (state) => this.update(state)),
      eventBus.on('battle:win', () => this.showResult('win')),
      eventBus.on('battle:lose', (data) => this.showResult(data.reason)),
      eventBus.on('battle:phaseShift', (d) => this._onPhaseShift(d)),
      // A1: Hit animations
      eventBus.on('battle:se:advAttack', () => this._animateBossHit()),
      eventBus.on('battle:se:bossAttack', () => this._animateAdvHit()),
      eventBus.on('battle:se:bossAoe', () => this._animateAoeHit()),
      // A5: Item effect animations
      eventBus.on('battle:se:heal', () => this._animateItemFx('heal')),
      eventBus.on('battle:se:revive', () => this._animateItemFx('revive')),
      eventBus.on('battle:se:damage', () => this._animateItemFx('damage')),
      eventBus.on('battle:se:stun', () => this._animateItemFx('stun')),
      eventBus.on('battle:se:buff', () => this._animateItemFx('buff')),
      eventBus.on('battle:se:debuff', () => this._animateItemFx('debuff')),
      // チャレンジモード: ウェーブ進行時にボスUIを更新
      eventBus.on('challenge:waveStart', (d) => this._onChallengeWaveStart(d)),
      eventBus.on('challenge:complete', (d) => this._onChallengeComplete(d)),
    ];
  }

  /** setTimeout をトラッキングして後でまとめてクリアできるようにする */
  _trackedTimeout(fn, ms) {
    const id = setTimeout(() => {
      fn();
      // 完了後にリストから除去
      const idx = this._pendingTimers.indexOf(id);
      if (idx !== -1) this._pendingTimers.splice(idx, 1);
    }, ms);
    this._pendingTimers.push(id);
    return id;
  }

  /** 全 pending タイマーをクリア */
  _clearAllTimers() {
    for (const id of this._pendingTimers) clearTimeout(id);
    this._pendingTimers.length = 0;
  }

  show(state) {
    this.state = state;
    this._lastLogLength = 0;
    this._lastUsesKey = '';
    this._clearAllTimers();
    eventBus.emit('game:pause');

    // Filter available items — 持ち込みアイテムが選択されていればそれだけ表示
    const allBattleItems = this.inventory.items.filter(item => {
      const bp = ItemBlueprints[item.blueprintId];
      return bp && bp.battleEffect;
    });
    if (state.selectedItems && state.selectedItems.length > 0) {
      this.itemsWithEffects = allBattleItems.filter(item =>
        state.selectedItems.includes(item.uid)
      );
    } else {
      this.itemsWithEffects = allBattleItems;
    }

    this.overlay = document.createElement('div');
    this.overlay.className = 'battle-overlay';

    this.overlay.innerHTML = `
      <div class="battle-container">
        <!-- HEADER / BOSS -->
        <div class="battle-header">
           <div class="boss-info">
             <div class="boss-icon" id="boss-icon">${state.boss.icon}</div>
             <div class="boss-name">${state.boss.name}${state.isChallenge ? ` <span class="challenge-wave-badge">Wave ${state.challengeWave}/${state.challengeTotalWaves}</span>` : ''}</div>
             ${state.isChallenge ? `<div class="challenge-name-badge">${state.challengeName}</div>` : ''}
             <div class="bar-container">
               <div class="bar-fill hp-fill boss-hp" id="boss-hp-fill" style="width:100%"></div>
             </div>
             <div class="bar-text" id="boss-hp-text">${state.boss.hp}/${state.boss.maxHp}</div>
             <div class="boss-phase-badge" id="boss-phase-badge"></div>
             <div class="bar-container atb-container">
               <div class="bar-fill atb-fill boss-atb" id="boss-atb-fill" style="width:0%"></div>
             </div>
           </div>
        </div>

        <div class="battle-main">
           <!-- PARTY -->
           <div class="party-container" id="party-container">
              ${this._renderParty(state)}
           </div>

           <!-- LOG -->
           <div class="battle-log" id="battle-log"></div>
        </div>

        <!-- ITEMS / FOOTER -->
        <div class="battle-footer">
           <h3 class="footer-title">サポートアイテム (インベントリ)</h3>
           <div class="item-cooldown-bar" id="item-cooldown-bar"></div>
           <div class="battle-inventory" id="battle-inventory">
              ${this._renderItems()}
           </div>
        </div>

        <div class="battle-actions">
           <button class="btn btn-danger" id="btn-flee">逃げる</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);

    // C9: 3Dバトルシーン初期化（モバイルでは省略）
    if (window.innerWidth > 768 && state.boss.preset) {
      this._init3DScene(state);
    }

    // Cache DOM elements to avoid querySelectorAll every frame
    this._els = {
      bossHpFill: this.overlay.querySelector('#boss-hp-fill'),
      bossHpText: this.overlay.querySelector('#boss-hp-text'),
      bossAtbFill: this.overlay.querySelector('#boss-atb-fill'),
      bossIcon: this.overlay.querySelector('#boss-icon'),
      logContainer: this.overlay.querySelector('#battle-log'),
      cdBar: this.overlay.querySelector('#item-cooldown-bar'),
      inventory: this.overlay.querySelector('#battle-inventory'),
      advEls: {},
    };

    // Cache adventurer elements
    for (const a of state.adventurers) {
      this._els.advEls[a.id] = {
        card: this.overlay.querySelector(`#adv-${a.id}`),
        hpFill: this.overlay.querySelector(`#adv-hp-fill-${a.id}`),
        hpText: this.overlay.querySelector(`#adv-hp-text-${a.id}`),
        atbFill: this.overlay.querySelector(`#adv-atb-fill-${a.id}`),
        buffs: this.overlay.querySelector(`#adv-buffs-${a.id}`),
      };
    }

    // Event listeners (custom confirm modal instead of native confirm)
    this.overlay.querySelector('#btn-flee').addEventListener('click', () => {
       this._showConfirmModal('本当に逃げますか？（HPは回復しません）', () => {
         eventBus.emit('battle:command', { action: 'flee' });
       });
    });

    // アイテムクリック — イベント委譲で重複リスナー問題を解消
    this._els.inventory.addEventListener('click', (e) => {
      const btn = e.target.closest('.battle-item-btn');
      if (!btn) return;
      const uid = btn.dataset.uid;
      // アイテム個別クールダウンチェック
      if (this.state && (this.state.itemCooldowns?.[uid] || 0) > 0) return;
      // 回復系アイテムはHP最低キャラに自動使用（対象選択不要）
      eventBus.emit('battle:command', { action: 'useItem', uid: uid });
    });

    this.update(state);
  }

  _renderParty(state) {
    return state.adventurers.map(a => `
      <div class="party-member ${a.status === 'dead' ? 'dead' : ''}" id="adv-${a.id}">
        <div class="adv-icon">${a.icon}</div>
        <div class="adv-details">
           <div class="adv-name">${a.name}</div>
           <div class="bar-container">
             <div class="bar-fill hp-fill adv-hp" id="adv-hp-fill-${a.id}" style="width:${(a.hp/a.maxHp)*100}%"></div>
           </div>
           <div class="bar-text" id="adv-hp-text-${a.id}">${a.hp}/${a.maxHp}</div>
           <div class="bar-container atb-container">
             <div class="bar-fill atb-fill adv-atb" id="adv-atb-fill-${a.id}" style="width:${Math.min(100,a.atbGauge)}%"></div>
           </div>
           <div class="adv-buffs" id="adv-buffs-${a.id}"></div>
           <div class="adv-passives">
             ${a.regen > 0 ? '<span class="adv-passive-badge regen">再生</span>' : ''}
             ${a.dmgReduction > 0 ? '<span class="adv-passive-badge guard">鉄壁</span>' : ''}
             ${a.atbGauge > 0 ? '<span class="adv-passive-badge quick">先制</span>' : ''}
           </div>
        </div>
      </div>
    `).join('');
  }

  _renderItems() {
    if (this.itemsWithEffects.length === 0) {
      return '<div class="no-items">使えるアイテムがありません</div>';
    }
    const itemUses = this.state?.itemUses || {};
    const itemCooldowns = this.state?.itemCooldowns || {};
    return this.itemsWithEffects.map(item => {
      const bp = ItemBlueprints[item.blueprintId];
      const uses = itemUses[item.uid];
      const remaining = uses ? uses.remaining : 0;
      const max = uses ? uses.max : 0;
      const exhausted = remaining <= 0;
      const cd = itemCooldowns[item.uid] || 0;
      const onCooldown = cd > 0;
      const imgUrl = bp.image ? assetPath(bp.image) : null;
      const imgHtml = imgUrl
        ? `<img src="${imgUrl}" alt="${item.name}" />`
        : `<span class="battle-item-emoji">💊</span>`;
      return `
        <div class="battle-item-btn ${exhausted ? 'disabled' : ''} ${onCooldown ? 'on-cooldown' : ''}" data-uid="${item.uid}">
          ${imgHtml}
          <div class="item-name">${item.name}</div>
          <div class="item-uses-badge">${remaining}/${max}</div>
          ${onCooldown ? `<div class="item-cd-overlay">${Math.ceil(cd)}s</div>` : ''}
        </div>
      `;
    }).join('');
  }

  update(state) {
    if (!this.overlay || !state) return;
    // バトル終了後は描画更新不要
    if (this._resultShown) return;
    this.state = state;
    const els = this._els;

    // Boss updates (cached elements, no querySelector per frame)
    const bossHpPct = Math.max(0, (state.boss.hp / state.boss.maxHp) * 100);
    if (els.bossHpFill) {
      els.bossHpFill.style.width = `${bossHpPct}%`;
      // A2: HP bar color stages
      els.bossHpFill.classList.remove('hp-mid', 'hp-low');
      if (bossHpPct <= 20) els.bossHpFill.classList.add('hp-low');
      else if (bossHpPct <= 50) els.bossHpFill.classList.add('hp-mid');
    }
    if (els.bossHpText) els.bossHpText.textContent = `${Math.floor(state.boss.hp)}/${state.boss.maxHp}`;
    if (els.bossAtbFill) {
      const bossAtb = Math.min(100, state.boss.atbGauge);
      els.bossAtbFill.style.width = `${bossAtb}%`;
      // A3: ATB full highlight
      els.bossAtbFill.classList.toggle('atb-full', bossAtb >= 95);
    }
    if (els.bossIcon) {
      if (state.boss.stunTimer > 0) els.bossIcon.classList.add('boss-stunned');
      else els.bossIcon.classList.remove('boss-stunned');
    }

    // Party updates (cached elements)
    for (const a of state.adventurers) {
      const ae = els.advEls[a.id];
      if (!ae || !ae.hpFill) continue;
      if (a.status === 'dead') ae.card.classList.add('dead');
      else ae.card.classList.remove('dead');

      const hpPct = Math.max(0, (a.hp / a.maxHp) * 100);
      ae.hpFill.style.width = `${hpPct}%`;
      // A2: HP bar color stages
      ae.hpFill.classList.remove('hp-mid', 'hp-low');
      if (hpPct <= 20) ae.hpFill.classList.add('hp-low');
      else if (hpPct <= 50) ae.hpFill.classList.add('hp-mid');
      ae.hpText.textContent = `${Math.floor(a.hp)}/${a.maxHp}`;
      const advAtb = Math.min(100, a.atbGauge);
      ae.atbFill.style.width = `${advAtb}%`;
      // A3: ATB full highlight
      ae.atbFill.classList.toggle('atb-full', advAtb >= 95);

      if (ae.buffs) {
        const buffKey = a.activeBuffs ? a.activeBuffs.map(b => `${b.stat}${b.amount > 0 ? '+' : '-'}`).join(',') : '';
        if (this._lastBuffKeys[a.id] !== buffKey) {
          this._lastBuffKeys[a.id] = buffKey;
          if (a.activeBuffs && a.activeBuffs.length > 0) {
            ae.buffs.innerHTML = a.activeBuffs.map(b => {
              const statName = b.stat === 'atk' ? '攻撃' : b.stat === 'def' ? '防御' : '速度';
              const isPos = b.amount > 0;
              return `<span class="adv-buff-badge ${isPos ? 'buff-up' : 'buff-down'}">${statName}${isPos ? '↑' : '↓'}</span>`;
            }).join('');
          } else {
            ae.buffs.innerHTML = '';
          }
        }
      }
    }

    // Log updates — only when log has new entries (avoid innerHTML every frame)
    if (els.logContainer && state.log.length !== this._lastLogLength) {
      const newCount = state.log.length - this._lastLogLength;
      const newEntries = state.log.slice(0, newCount);
      this._lastLogLength = state.log.length;
      els.logContainer.innerHTML = state.log.map(l => `<div class="log-line">${l.msg}</div>`).join('');
      // Spawn damage/heal popups for each new log entry
      for (const entry of newEntries) {
        this._processLogForPopup(entry.msg);
      }
    }

    // Cooldown + inventory update
    if (els.cdBar) {
       // グローバルクールダウンバーは非表示（個別CDに移行済み）
       els.cdBar.style.display = 'none';
       if (els.inventory) els.inventory.classList.remove('cooldown-active');

       // アイテムリストの同期（使用回数+クールダウンの変化を検知して再描画）
       const cooldownKey = state.itemCooldowns
         ? Object.entries(state.itemCooldowns).map(([k, v]) => `${k}:${Math.ceil(v)}`).join(',')
         : '';
       const usesKey = state.itemUses
         ? Object.entries(state.itemUses).map(([k, v]) => `${k}:${v.remaining}`).join(',')
         : '';
       const combinedKey = usesKey + '|' + cooldownKey;
       if (combinedKey !== this._lastUsesKey) {
          this._lastUsesKey = combinedKey;
          if (els.inventory) {
            els.inventory.innerHTML = this._renderItems();
          }
       }
    }
  }

  showResult(result) {
    if (!this.overlay || this._resultShown) return;
    this._resultShown = true;

    // バトル終了 — 全 pending タイマーをクリア + 3Dシーンを即座に解放
    this._clearAllTimers();
    this._dispose3DScene();

    let msg = '';
    let rewardsHtml = '';
    let confettiHtml = '';
    let btnText = '戻る';

    if (result === 'win') {
      msg = '<div class="result-win">VICTORY!</div>';
      // A4: 紙吹雪パーティクル
      const colors = ['#fca311', '#e63946', '#457b9d', '#7ddd88', '#ff6b35', '#a855f7'];
      let confettiPieces = '';
      for (let i = 0; i < 40; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 0.8;
        const duration = 1.5 + Math.random() * 1.5;
        const size = 5 + Math.random() * 6;
        confettiPieces += `<div class="confetti-piece" style="left:${left}%;background:${color};width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${duration}s"></div>`;
      }
      confettiHtml = `<div class="battle-confetti">${confettiPieces}</div>`;

      // 報酬プレビュー
      const survivors = this.state?.adventurers.filter(a => a.status === 'active').length || 0;
      const total = this.state?.adventurers.length || 0;
      const chainMax = this.state?.chainMax || 0;
      const usedItemCount = this.state?.selectedItems?.length || 0;
      rewardsHtml = `
        <div class="battle-result-rewards">
          <div class="reward-line"><span class="reward-icon">⚔️</span> ボス撃破！ランクアップ条件クリア</div>
          <div class="reward-line"><span class="reward-icon">👥</span> 生存者: <span class="reward-text">${survivors}/${total}</span></div>
          ${chainMax >= 2 ? `<div class="reward-line"><span class="reward-icon">🔗</span> 最大チェイン: <span class="reward-text">${chainMax}</span></div>` : ''}
          ${usedItemCount > 0 ? `<div class="reward-line"><span class="reward-icon">📦</span> 消費アイテム: <span class="reward-text">${usedItemCount}個</span></div>` : ''}
        </div>`;
    } else if (result === 'wipeout') {
      const lostCount = this.state?.selectedItems?.length || 0;
      msg = '<div class="result-lose">DEFEAT...</div><div style="color:#888;font-size:0.9rem;margin-top:8px">全滅してしまった。装備を強化して再挑戦しよう。</div>';
      if (lostCount > 0) msg += `<div style="color:#e57373;font-size:0.85rem;margin-top:4px">持ち込みアイテム ${lostCount}個 を失った...</div>`;
    } else {
      const lostCount = this.state?.selectedItems?.length || 0;
      msg = '<div class="result-lose">逃走した。</div><div style="color:#888;font-size:0.9rem;margin-top:8px">態勢を整えてから再挑戦しよう。</div>';
      if (lostCount > 0) msg += `<div style="color:#e57373;font-size:0.85rem;margin-top:4px">持ち込みアイテム ${lostCount}個 を失った...</div>`;
    }

    const resultOverlay = document.createElement('div');
    resultOverlay.className = 'battle-result-overlay';
    resultOverlay.innerHTML = `
      ${confettiHtml}
      <div class="battle-result-box">
         ${msg}
         ${rewardsHtml}
         <button class="btn btn-primary mt-4 w-full" id="btn-close-result" style="margin-top:16px">${btnText}</button>
      </div>
    `;

    this.overlay.appendChild(resultOverlay);

    resultOverlay.querySelector('#btn-close-result').addEventListener('click', () => {
      this._dispose3DScene();
      eventBus.emit('game:resume');
      this.overlay.remove();
      this.overlay = null;
      this.state = null;
      this._els = {};
      this._resultShown = false;
    });
  }

  _onPhaseShift(data) {
    if (!this.overlay || !data?.phase) return;
    const phase = data.phase;

    // ボスアイコンのシェイクアニメーション
    const bossIcon = this._els.bossIcon;
    if (bossIcon) {
      bossIcon.classList.add('boss-phase-shake');
      this._trackedTimeout(() => bossIcon.classList.remove('boss-phase-shake'), 1000);
    }

    // フェーズ名バッジを表示
    const badge = this.overlay.querySelector('#boss-phase-badge');
    if (badge) {
      badge.textContent = `🔥 ${phase.name}`;
      badge.classList.add('phase-badge-active');
    }

    // 画面フラッシュ
    const flash = document.createElement('div');
    flash.className = 'battle-phase-flash';
    this.overlay.appendChild(flash);
    this._trackedTimeout(() => flash.remove(), 800);
  }

  _showConfirmModal(message, onConfirm) {
    if (!this.overlay) return;

    const modal = document.createElement('div');
    modal.className = 'battle-result-overlay';
    modal.innerHTML = `
      <div class="battle-result-box">
        <div class="result-lose" style="font-size:14px; margin-bottom:12px">${message}</div>
        <div style="display:flex; gap:8px; justify-content:center">
          <button class="btn btn-danger" id="confirm-yes">はい</button>
          <button class="btn" id="confirm-no">いいえ</button>
        </div>
      </div>
    `;
    this.overlay.appendChild(modal);

    modal.querySelector('#confirm-yes').addEventListener('click', () => {
      modal.remove();
      onConfirm();
    });
    modal.querySelector('#confirm-no').addEventListener('click', () => {
      modal.remove();
    });
  }

  /**
   * ログエントリを解析してダメージ/回復ポップアップを発火
   */
  _processLogForPopup(msg) {
    const els = this._els;

    // ボスへのダメージ: "XXXの攻撃！ ボスに 42 のダメージ！" or "XXX がボスに 30 ダメージ！"
    const bossDmgMatch = msg.match(/ボスに (\d+) (?:のダメージ|ダメージ)/);
    if (bossDmgMatch && els.bossIcon) {
      this._spawnDamagePopup(`-${bossDmgMatch[1]}`, els.bossIcon, 'dmg-enemy');
      return;
    }

    // 冒険者へのダメージ: "ボスの攻撃！ XXXに 15 のダメージ！"
    const advDmgMatch = msg.match(/(.+?)に (\d+) のダメージ/);
    if (advDmgMatch) {
      const targetName = advDmgMatch[1].replace(/^.*?！ /, '');
      const adv = this.state?.adventurers.find(a => a.name === targetName);
      if (adv && els.advEls[adv.id]?.card) {
        this._spawnDamagePopup(`-${advDmgMatch[2]}`, els.advEls[adv.id].card, 'dmg-ally');
        return;
      }
    }

    // HP回復: "XXXのHPが 30 回復！"
    const healMatch = msg.match(/(.+?)のHPが (\d+) 回復/);
    if (healMatch) {
      const advName = healMatch[1];
      const adv = this.state?.adventurers.find(a => a.name === advName);
      if (adv && els.advEls[adv.id]?.card) {
        this._spawnDamagePopup(`+${healMatch[2]}`, els.advEls[adv.id].card, 'dmg-heal');
      }
    }
  }

  /**
   * 指定要素上にダメージ/回復テキストをフロートするポップアップを生成
   */
  _spawnDamagePopup(text, targetEl, cssClass) {
    if (!targetEl || !targetEl.parentNode) return;

    const popup = document.createElement('div');
    popup.className = `dmg-popup ${cssClass}`;
    popup.textContent = text;

    const offsetX = (Math.random() - 0.5) * 28;
    popup.style.left = `calc(50% + ${offsetX}px)`;
    popup.style.top = '10%';

    // 親に position:relative が必要
    if (!targetEl.style.position) targetEl.style.position = 'relative';

    targetEl.appendChild(popup);
    this._trackedTimeout(() => popup.remove(), 900);
  }

  // ── C9: 3D Battle Scene ──

  async _init3DScene(state) {
    if (this._scene3d) this._scene3d.dispose();
    this._scene3d = new BattleScene3D();
    const container = this.overlay?.querySelector('.battle-header');
    if (!container) return;
    await this._scene3d.init(container, state.boss, state.adventurers);
  }

  _dispose3DScene() {
    if (this._scene3d) {
      this._scene3d.dispose();
      this._scene3d = null;
    }
  }

  // ── A1: Hit Animations ──

  _animateBossHit() {
    const el = this._els.bossIcon;
    if (!el) return;
    el.classList.remove('boss-hit');
    void el.offsetWidth; // force reflow
    el.classList.add('boss-hit');
    this._trackedTimeout(() => el.classList.remove('boss-hit'), 400);
    // C9: 3Dシーン連動
    if (this._scene3d) this._scene3d.animateBossHit();
  }

  _animateAdvHit() {
    // Find the last adventurer that took damage (most recent log entry)
    if (!this.state) return;
    const lastLog = this.state.log[0]?.msg || '';
    const match = lastLog.match(/(.+?)に \d+ のダメージ/);
    if (!match) return;
    const targetName = match[1].replace(/^.*?！ /, '');
    const adv = this.state.adventurers.find(a => a.name === targetName);
    if (!adv) return;
    const card = this._els.advEls[adv.id]?.card;
    if (!card) return;
    card.classList.remove('adv-hit');
    void card.offsetWidth;
    card.classList.add('adv-hit');
    this._trackedTimeout(() => card.classList.remove('adv-hit'), 350);
    // C9: 3Dシーン連動
    if (this._scene3d) this._scene3d.animateAdvHit(adv.id);
  }

  _animateAoeHit() {
    // Flash all alive adventurer cards
    if (!this.state) return;
    for (const a of this.state.adventurers) {
      if (a.status === 'dead') continue;
      const card = this._els.advEls[a.id]?.card;
      if (!card) continue;
      card.classList.remove('boss-aoe-hit');
      void card.offsetWidth;
      card.classList.add('boss-aoe-hit');
      this._trackedTimeout(() => card.classList.remove('boss-aoe-hit'), 500);
    }
  }

  // ── A5: Item Effect Animations ──

  _animateItemFx(type) {
    if (!this.overlay) return;
    const cls = `item-fx-${type}`;
    const container = this.overlay.querySelector('.battle-container');
    if (!container) return;
    container.classList.remove(cls);
    void container.offsetWidth;
    container.classList.add(cls);
    this._trackedTimeout(() => container.classList.remove(cls), 800);
  }

  // ── B7: Target Selection UI ──

  showTargetSelection(uid, targetType) {
    if (!this.overlay || !this.state) return;
    const container = this.overlay.querySelector('.battle-container');
    if (!container) return;

    const isRevive = targetType === 'dead_ally';
    const candidates = this.state.adventurers.filter(a =>
      isRevive ? a.status === 'dead' : a.status === 'active'
    );

    if (candidates.length === 0) {
      // 対象がいない
      eventBus.emit('toast', { message: isRevive ? '蘇生対象がいません' : '回復対象がいません', type: 'warning' });
      return;
    }
    if (candidates.length === 1) {
      // Only one valid target — auto-select
      eventBus.emit('battle:command', { action: 'useItem', uid });
      return;
    }

    const title = isRevive ? '蘇生対象を選択' : '回復対象を選択';
    const selectOverlay = document.createElement('div');
    selectOverlay.className = 'target-select-overlay';
    selectOverlay.innerHTML = `
      <div class="target-select-title">💚 ${title}</div>
      <div class="target-select-list">
        ${candidates.map(a => {
          const hpPct = Math.floor((a.hp / a.maxHp) * 100);
          return `<button class="target-select-btn ${isRevive ? 'target-dead' : ''}" data-adv-id="${a.id}">
            <span>${a.icon}</span>
            <span>${a.name}</span>
            <span style="font-size:0.8rem;color:#aaa">${isRevive ? '💀' : `HP ${hpPct}%`}</span>
          </button>`;
        }).join('')}
      </div>
      <div class="target-select-cancel">キャンセル</div>
    `;

    container.appendChild(selectOverlay);

    selectOverlay.querySelectorAll('.target-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectOverlay.remove();
        eventBus.emit('battle:command', { action: 'useItem', uid, targetAdvId: btn.dataset.advId });
      });
    });
    selectOverlay.querySelector('.target-select-cancel').addEventListener('click', () => {
      selectOverlay.remove();
    });
  }

  /** チャレンジモード: 新ウェーブ開始時にボスUI更新 */
  _onChallengeWaveStart(data) {
    if (!this.overlay || !this.state) return;
    const s = this.state;
    // ボス名更新
    const bossNameEl = this.overlay.querySelector('.boss-name');
    if (bossNameEl) {
      bossNameEl.innerHTML = `${s.boss.name} <span class="challenge-wave-badge">Wave ${data.wave}/${data.totalWaves}</span>`;
    }
    // ボスアイコン更新
    const bossIconEl = this.overlay.querySelector('#boss-icon');
    if (bossIconEl) {
      bossIconEl.textContent = s.boss.icon;
    }
    // 3Dシーン: 新ボスのプリセットで再構築
    this._init3DScene(s);
  }

  /** チャレンジモード: 全ウェーブクリア */
  _onChallengeComplete(data) {
    if (!this.overlay) return;
    const rewards = data.rewards || {};
    const goldReward = rewards.gold || 0;
    // 報酬付与
    if (goldReward > 0 && this.inventory) {
      this.inventory.addGold(goldReward);
    }
    eventBus.emit('toast', {
      message: `👑 チャレンジクリア！ 報酬: ${goldReward}G`,
      type: 'success',
    });
  }

  dispose() {
    this._clearAllTimers();
    this._dispose3DScene();
    this._unsubs.forEach(u => u());
  }
}
