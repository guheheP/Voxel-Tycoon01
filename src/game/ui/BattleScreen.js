import { eventBus } from '../core/EventBus.js';
import { ItemBlueprints } from '../data/items.js';
import { GameConfig } from '../data/config.js';
import { assetPath } from '../core/assetPath.js';

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

    this._unsubs = [
      eventBus.on('battle:start', (state) => this.show(state)),
      eventBus.on('battle:tick', (state) => this.update(state)),
      eventBus.on('battle:win', () => this.showResult('win')),
      eventBus.on('battle:lose', (data) => this.showResult(data.reason)),
      eventBus.on('battle:phaseShift', (d) => this._onPhaseShift(d)),
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
             <div class="boss-name">${state.boss.name}</div>
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
      if (this.state && this.state.itemCooldown > 0) return;
      const uid = btn.dataset.uid;
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
    return this.itemsWithEffects.map(item => {
      const bp = ItemBlueprints[item.blueprintId];
      const uses = itemUses[item.uid];
      const remaining = uses ? uses.remaining : 0;
      const max = uses ? uses.max : 0;
      const exhausted = remaining <= 0;
      const imgUrl = bp.image ? assetPath(bp.image) : null;
      const imgHtml = imgUrl
        ? `<img src="${imgUrl}" alt="${item.name}" />`
        : `<span class="battle-item-emoji">💊</span>`;
      return `
        <div class="battle-item-btn ${exhausted ? 'disabled' : ''}" data-uid="${item.uid}">
          ${imgHtml}
          <div class="item-name">${item.name}</div>
          <div class="item-uses-badge">${remaining}/${max}</div>
        </div>
      `;
    }).join('');
  }

  update(state) {
    if (!this.overlay || !state) return;
    this.state = state;
    const els = this._els;

    // Boss updates (cached elements, no querySelector per frame)
    const bossHpPct = Math.max(0, (state.boss.hp / state.boss.maxHp) * 100);
    if (els.bossHpFill) els.bossHpFill.style.width = `${bossHpPct}%`;
    if (els.bossHpText) els.bossHpText.textContent = `${Math.floor(state.boss.hp)}/${state.boss.maxHp}`;
    if (els.bossAtbFill) els.bossAtbFill.style.width = `${Math.min(100, state.boss.atbGauge)}%`;
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
      ae.hpText.textContent = `${Math.floor(a.hp)}/${a.maxHp}`;
      ae.atbFill.style.width = `${Math.min(100, a.atbGauge)}%`;

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
       if (state.itemCooldown > 0) {
         const cdMax = GameConfig.bossBattle.itemCooldownSeconds;
         const pct = (state.itemCooldown / cdMax) * 100;
         els.cdBar.style.width = `${Math.min(100, pct)}%`;
         els.cdBar.style.display = 'block';

         // Disable item buttons via CSS class on container (single operation, not per-button)
         if (els.inventory) els.inventory.classList.add('cooldown-active');
       } else {
         els.cdBar.style.width = '0%';
         els.cdBar.style.display = 'none';
         if (els.inventory) els.inventory.classList.remove('cooldown-active');
       }

       // アイテムリストの同期（使用回数の変化を検知して再描画）
       const usesKey = state.itemUses
         ? Object.entries(state.itemUses).map(([k, v]) => `${k}:${v.remaining}`).join(',')
         : '';
       if (usesKey !== this._lastUsesKey) {
          this._lastUsesKey = usesKey;
          if (els.inventory) {
            els.inventory.innerHTML = this._renderItems();
          }
       }
    }
  }

  showResult(result) {
    if (!this.overlay || this._resultShown) return;
    this._resultShown = true;

    // バトル終了 — 全 pending タイマーをクリア
    this._clearAllTimers();

    let msg = '';
    let btnText = '戻る';

    if (result === 'win') {
      msg = '<div class="result-win">WIN! ボスを撃破した！</div>';
    } else if (result === 'wipeout') {
      msg = '<div class="result-lose">LOSE... 全滅してしまった。</div>';
    } else {
      msg = '<div class="result-lose">逃走した。</div>';
    }

    const resultOverlay = document.createElement('div');
    resultOverlay.className = 'battle-result-overlay';
    resultOverlay.innerHTML = `
      <div class="battle-result-box">
         ${msg}
         <button class="btn btn-primary mt-4 w-full" id="btn-close-result">${btnText}</button>
      </div>
    `;

    this.overlay.appendChild(resultOverlay);

    resultOverlay.querySelector('#btn-close-result').addEventListener('click', () => {
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

  dispose() {
    this._clearAllTimers();
    this._unsubs.forEach(u => u());
  }
}
