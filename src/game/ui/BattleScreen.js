import { eventBus } from '../core/EventBus.js';
import { ItemBlueprints } from '../data/items.js';
import { GameConfig } from '../data/config.js';

export class BattleScreen {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.overlay = null;
    this.state = null;
    this.itemsWithEffects = [];
    this._lastLogLength = 0;
    this._lastItemCount = -1;

    // DOM element caches (set in show())
    this._els = {};

    this._resultShown = false;

    this._unsubs = [
      eventBus.on('battle:start', (state) => this.show(state)),
      eventBus.on('battle:tick', (state) => this.update(state)),
      eventBus.on('battle:win', () => this.showResult('win')),
      eventBus.on('battle:lose', (data) => this.showResult(data.reason)),
    ];
  }

  show(state) {
    this.state = state;
    this._lastLogLength = 0;
    this._lastItemCount = -1;
    eventBus.emit('game:pause');

    // Filter available items
    this.itemsWithEffects = this.inventory.items.filter(item => {
      const bp = ItemBlueprints[item.blueprintId];
      return bp && bp.battleEffect;
    });

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

    this._bindItemClicks();
    this.update(state);
  }

  _bindItemClicks() {
    if (!this.overlay) return;
    this.overlay.querySelectorAll('.battle-item-btn').forEach(btn => {
       btn.addEventListener('click', () => {
         if (this.state && this.state.itemCooldown > 0) return;
         const uid = btn.dataset.uid;
         eventBus.emit('battle:command', { action: 'useItem', uid: uid });
       });
    });
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
        </div>
      </div>
    `).join('');
  }

  _renderItems() {
    if (this.itemsWithEffects.length === 0) {
      return '<div class="no-items">使えるアイテムがありません</div>';
    }
    return this.itemsWithEffects.map(item => {
      const bp = ItemBlueprints[item.blueprintId];
      return `
        <div class="battle-item-btn" data-uid="${item.uid}">
          <img src="${bp.image}" alt="${item.name}" />
          <div class="item-name">${item.name}</div>
          <div class="item-qty">Q${item.quality}</div>
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
    if (els.bossHpText) els.bossHpText.textContent = `${state.boss.hp}/${state.boss.maxHp}`;
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
      ae.hpText.textContent = `${a.hp}/${a.maxHp}`;
      ae.atbFill.style.width = `${Math.min(100, a.atbGauge)}%`;

      if (ae.buffs) {
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

    // Log updates — only when log has new entries (avoid innerHTML every frame)
    if (els.logContainer && state.log.length !== this._lastLogLength) {
      this._lastLogLength = state.log.length;
      els.logContainer.innerHTML = state.log.map(l => `<div class="log-line">${l.msg}</div>`).join('');
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
         
         // Re-check inventory only if item count actually changed
         const currentCount = this.inventory.items.filter(i => ItemBlueprints[i.blueprintId]?.battleEffect).length;
         if (currentCount !== this._lastItemCount) {
            this._lastItemCount = currentCount;
            this.itemsWithEffects = this.inventory.items.filter(i => ItemBlueprints[i.blueprintId]?.battleEffect);
            if (els.inventory) {
              els.inventory.innerHTML = this._renderItems();
              this._bindItemClicks();
            }
         }
       }
    }
  }

  showResult(result) {
    if (!this.overlay || this._resultShown) return;
    this._resultShown = true;

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

  dispose() {
    this._unsubs.forEach(u => u());
  }
}
