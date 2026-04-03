/**
 * DispatchTab — 冒険者の派遣タブ（リアルタイム探索タイマー版）
 * エリア選択・レベル/EXP表示・装備管理を担当
 */
import { LevelExpTable } from '../data/adventurers.js';
import { eventBus } from '../core/EventBus.js';

export class DispatchTab {
  constructor(adventurerSystem, inventorySystem) {
    this.adventurers = adventurerSystem;
    this.inventory = inventorySystem;
    this.el = document.querySelector('#tab-dispatch');
    this.selectedArea = {};
  }

  render() {
    const areas = this.adventurers.getUnlockedAreas();
    const advs = this.adventurers.getAdventurers();

    let html = `<h3>冒険者の派遣</h3>`;
    html += `<p class="text-dim dispatch-description">冒険者に探索を依頼し、素材を集めてもらいます。</p>`;

    html += `<div class="dispatch-list">`;
    advs.forEach(adv => {
      const isExploring = adv.status === 'exploring';
      const progressPct = isExploring && adv.maxTimer > 0
        ? Math.max(0, (1 - adv.timer / adv.maxTimer) * 100) : 0;

      html += `
        <div class="dispatch-card">
          <div class="dispatch-card-header">
            <div>
              <h4>${adv.icon} ${adv.name}</h4>
              <span class="adv-level">Lv.${adv.level}</span>
            </div>
            <span class="timer-display ${isExploring ? 'timer-exploring' : ''}" data-adv-id="${adv.id}">
              ${isExploring ? '🚶 探索中...' : '☕ 待機中'}
            </span>
          </div>
          <div class="adv-exp-bar">
            <div class="adv-exp-fill" style="width:${this._expPct(adv)}%"></div>
            <span class="adv-exp-text">EXP: ${adv.exp} / ${LevelExpTable[adv.level] || '—'}</span>
          </div>
      `;

      if (isExploring) {
        html += `
          <div class="progress-bar-container">
            <div class="progress-bar-fill" data-adv-progress="${adv.id}" style="width:${progressPct}%"></div>
          </div>
        `;
      }

      // 装備スロット
      const weapon = adv.equipment.weapon;
      html += `<button class="btn btn-sm btn-equip" data-adv-id="${adv.id}">${weapon ? `⚔️ ${weapon.name} (Q:${weapon.quality})` : '装備変更'}</button>`;

      // エリア選択 (idleのみ)
      if (!isExploring) {
        html += `<div class="area-select-row">`;
        areas.forEach(area => {
          const selected = this.selectedArea[adv.id] === area.id;
          const levelReduction = 1 - ((adv.level - 1) * 0.05);
          const time = Math.max(5, Math.ceil(area.baseTime * adv.exploreTimeMultiplier * levelReduction));
          const timeText = time <= 10 ? '短め' : (time <= 30 ? '普通' : '長め');
          html += `
            <button class="btn area-btn ${selected ? 'area-btn-selected' : ''}"
                    data-adv-id="${adv.id}" data-area-id="${area.id}">
              <span class="area-icon">${area.icon}</span>
              <span class="area-name">${area.name}</span>
              <span class="area-time">${timeText}</span>
            </button>
          `;
        });
        html += `</div>`;

        // 派遣ボタン
        const selectedAreaId = this.selectedArea[adv.id];
        const canDispatch = selectedAreaId && !isExploring;
        html += `<button class="btn btn-dispatch ${!canDispatch ? 'disabled' : ''}"
                         data-adv-id="${adv.id}" ${!canDispatch ? 'disabled' : ''}>探索へ向かわせる</button>`;
      }

      html += `</div>`;
    });
    html += `</div>`;

    this.el.innerHTML = html;

    // エリア選択バインド
    this.el.querySelectorAll('.area-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.dataset.advId;
        const areaId = e.currentTarget.dataset.areaId;
        this.selectedArea[advId] = areaId;
        this.render();
      });
    });

    // 派遣バインド
    this.el.querySelectorAll('.btn-dispatch').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.dataset.advId;
        const areaId = this.selectedArea[advId];
        if (areaId) {
          this.adventurers.dispatch(advId, areaId);
          this.render();
        }
      });
    });

    // 装備バインド
    this.el.querySelectorAll('.btn-equip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.dataset.advId;
        this._showEquipmentPanel(advId);
      });
    });
  }

  _expPct(adv) {
    const next = LevelExpTable[adv.level];
    if (!next) return 100;
    const prev = LevelExpTable[adv.level - 1] || 0;
    return Math.min(100, ((adv.exp - prev) / (next - prev)) * 100);
  }

  _showEquipmentPanel(advId) {
    const adv = this.adventurers.getAdventurers().find(a => a.id === advId);
    if (!adv) return;
    const weapons = this.inventory.getItems().filter(i => i.type === 'equipment');

    let html = `<div class="equipment-panel"><h4>装備選択 — ${adv.name}</h4>`;
    if (adv.equipment.weapon) {
      html += `<button class="btn btn-sm btn-unequip" data-adv-id="${advId}">❌ ${adv.equipment.weapon.name}を外す</button>`;
    }
    if (weapons.length === 0) {
      html += `<p class="text-dim">装備可能なアイテムがありません。</p>`;
    } else {
      weapons.forEach(w => {
        html += `<button class="btn btn-sm btn-select-weapon" data-adv-id="${advId}" data-uid="${w.uid}">
          ⚔️ ${w.name} (Q:${w.quality})
        </button>`;
      });
    }
    html += `<button class="btn btn-sm btn-close-equip">閉じる</button></div>`;

    const panel = document.createElement('div');
    panel.className = 'equipment-overlay';
    panel.innerHTML = html;
    this.el.appendChild(panel);

    panel.querySelectorAll('.btn-select-weapon').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.adventurers.equipWeapon(e.currentTarget.dataset.advId, e.currentTarget.dataset.uid);
        panel.remove();
        this.render();
      });
    });
    panel.querySelectorAll('.btn-unequip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.adventurers.unequipWeapon(e.currentTarget.dataset.advId);
        panel.remove();
        this.render();
      });
    });
    panel.querySelector('.btn-close-equip')?.addEventListener('click', () => {
      panel.remove();
    });
  }

  /** タイマーのリアルタイム更新 */
  updateTimers() {
    const advs = this.adventurers.getAdventurers();
    this.el.querySelectorAll('.timer-display').forEach(el => {
      const advId = el.getAttribute('data-adv-id');
      const adv = advs.find(a => a.id === advId);
      if (adv) {
        if (adv.status === 'exploring' && adv.timer < 3) {
          el.textContent = '🏠 もうすぐ帰還...';
        } else {
          el.textContent = adv.status === 'idle' ? '☕ 待機中' : '🚶 探索中...';
        }
      }
    });
    this.el.querySelectorAll('.progress-bar-fill').forEach(el => {
      const advId = el.getAttribute('data-adv-progress');
      const adv = advs.find(a => a.id === advId);
      if (adv && adv.status === 'exploring' && adv.maxTimer > 0) {
        const pct = Math.max(0, (1 - adv.timer / adv.maxTimer) * 100);
        el.style.width = `${pct}%`;
      }
    });
  }
}
