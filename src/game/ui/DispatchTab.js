/**
 * DispatchTab — 冒険者派遣タブ
 * エリア選択・レベル/EXP表示・装備管理を担当
 */
import { LevelExpTable } from '../data/adventurers.js';
import { GameConfig } from '../data/config.js';
import { eventBus } from '../core/EventBus.js';

export class DispatchTab {
  constructor(adventurerSystem, inventorySystem) {
    this.adventurers = adventurerSystem;
    this.inventory = inventorySystem;
    this.el = document.querySelector('#tab-dispatch');
    this.selectedArea = {};      // advId -> areaId
    this.equipMode = null;       // advId if equip mode is active

    eventBus.on('adventurer:joined', () => this.render());
  }

  render() {
    const areas = this.adventurers.getUnlockedAreas();
    const advs = this.adventurers.getAdventurers();

    let html = `<h3>冒険者の派遣 <span class="ap-cost-badge">⚡${GameConfig.apCost.dispatch} AP</span></h3>`;
    html += `<p class="text-dim dispatch-description">冒険者に探索を依頼し、素材を集めてもらいます。派遣は人数問わず一括1AP、翌日の朝に帰還します。</p>`;

    html += `<div class="dispatch-list">`;
    advs.forEach(adv => {
      const isExploring = adv.status === 'exploring';
      const progressPct = isExploring ? Math.max(0, (1 - adv.timer / adv.maxTimer) * 100) : 0;
      const nextExp = adv.level < LevelExpTable.length ? LevelExpTable[adv.level] : '—';
      const expPct = adv.level < LevelExpTable.length
        ? ((adv.exp - (LevelExpTable[adv.level - 1] || 0)) / ((LevelExpTable[adv.level] || 1) - (LevelExpTable[adv.level - 1] || 0))) * 100
        : 100;

      html += `
        <div class="panel dispatch-card">
          <div class="dispatch-card-header">
            <div class="adv-identity">
              <h4>${adv.icon} ${adv.name}</h4>
              <span class="adv-level">Lv.${adv.level}</span>
            </div>
            <span class="timer-display ${isExploring ? 'timer-exploring' : ''}">
              ${isExploring ? '🕐 探索中（翌朝帰還）' : '☕ 待機中'}
            </span>
          </div>
          <div class="adv-exp-bar">
            <div class="adv-exp-fill" style="width:${expPct}%"></div>
            <span class="adv-exp-text">EXP: ${adv.exp} / ${nextExp}</span>
          </div>
      `;

      if (isExploring) {
        html += `
          <div class="dispatch-exploring-status">路中… 次の日に帰還します</div>
        `;
      }

      // 装備表示
      const weaponName = adv.equipment.weapon
        ? `${adv.equipment.weapon.name} (Q:${adv.equipment.weapon.quality})`
        : 'なし';

      html += `
        <div class="dispatch-equipment-row">
          <span class="equip-label">⚔️ 武器: ${weaponName}</span>
      `;
      if (!isExploring) {
        if (adv.equipment.weapon) {
          html += `<button class="btn btn-sm btn-unequip" data-adv-id="${adv.id}">外す</button>`;
        }
        html += `<button class="btn btn-sm btn-equip-toggle" data-adv-id="${adv.id}">装備変更</button>`;
      }
      html += `</div>`;

      // 装備選択モード
      if (this.equipMode === adv.id && !isExploring) {
        const equipableItems = this.inventory.getItems().filter(i => i.type === 'equipment');
        if (equipableItems.length > 0) {
          html += `<div class="equip-select-panel">`;
          equipableItems.forEach(item => {
            const traitsStr = item.traits.length > 0 ? ` [${item.traits.join(', ')}]` : '';
            html += `
              <button class="btn btn-sm btn-equip-item" data-adv-id="${adv.id}" data-item-uid="${item.uid}">
                ${item.name} (Q:${item.quality})${traitsStr}
              </button>
            `;
          });
          html += `</div>`;
        } else {
          html += `<p class="text-dim" style="font-size:12px; padding:4px 8px;">装備可能なアイテムがありません。</p>`;
        }
      }

      // エリア選択 (待機中のみ)
      if (!isExploring) {
        html += `<div class="area-select-row">`;
        areas.forEach(area => {
          const selected = this.selectedArea[adv.id] === area.id;
          html += `
            <button class="btn area-btn ${selected ? 'area-btn-selected' : ''}"
                    data-adv-id="${adv.id}" data-area-id="${area.id}">
              <span class="area-icon">${area.icon}</span>
              <span class="area-name">${area.name}</span>
              <span class="area-time">翌日帰還</span>
            </button>
          `;
        });
        html += `</div>`;
        const canDispatch = !!this.selectedArea[adv.id];
        html += `
          <button class="btn primary btn-dispatch" data-adv-id="${adv.id}" ${!canDispatch ? 'disabled' : ''}>
            探索へ向かわせる
          </button>
        `;
      }

      html += `</div>`;
    });
    html += `</div>`;
    this.el.innerHTML = html;

    this._bindEvents();
  }

  _bindEvents() {
    // エリア選択
    this.el.querySelectorAll('.area-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.getAttribute('data-adv-id');
        const areaId = e.currentTarget.getAttribute('data-area-id');
        this.selectedArea[advId] = areaId;
        this.render();
      });
    });

    // 派遣
    this.el.querySelectorAll('.btn-dispatch').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.getAttribute('data-adv-id');
        const areaId = this.selectedArea[advId];
        if (areaId) {
          this.adventurers.dispatch(advId, areaId);
          this.render();
        }
      });
    });

    // 装備変更トグル
    this.el.querySelectorAll('.btn-equip-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.getAttribute('data-adv-id');
        this.equipMode = this.equipMode === advId ? null : advId;
        this.render();
      });
    });

    // 装備アイテム選択
    this.el.querySelectorAll('.btn-equip-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.getAttribute('data-adv-id');
        const uid = e.currentTarget.getAttribute('data-item-uid');
        this.adventurers.equipWeapon(advId, uid);
        this.equipMode = null;
        this.render();
      });
    });

    // 装備を外す
    this.el.querySelectorAll('.btn-unequip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.getAttribute('data-adv-id');
        this.adventurers.unequipWeapon(advId);
        this.render();
      });
    });
  }

  // updateTimersはAP制では不要（リアルタイムタイマーがない）
}
