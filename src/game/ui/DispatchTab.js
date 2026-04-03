/**
 * DispatchTab — 冒険者の派遣タブ（自動探索版）
 * エリア割り当て・レベル/EXP表示・装備管理を担当
 */
import { LevelExpTable, LevelBonuses } from '../data/adventurers.js';
import { AreaDefs } from '../data/areas.js';
import { ItemBlueprints } from '../data/items.js';
import { eventBus } from '../core/EventBus.js';

export class DispatchTab {
  constructor(adventurerSystem, inventorySystem) {
    this.adventurers = adventurerSystem;
    this.inventory = inventorySystem;
    this.el = document.querySelector('#tab-dispatch');
  }

  render() {
    const areas = this.adventurers.getUnlockedAreas();
    const advs = this.adventurers.getAdventurers();

    let html = `<h3>🗺️ 冒険者の探索</h3>`;
    html += `<p class="text-dim dispatch-description">冒険者は割り当てられたエリアを自動で繰り返し探索します。<br>レベルが上がると探索が速くなります。</p>`;

    html += `<div class="dispatch-list">`;
    advs.forEach(adv => {
      const isExploring = adv.status === 'exploring';
      const progressPct = isExploring && adv.maxTimer > 0
        ? Math.max(0, (1 - adv.timer / adv.maxTimer) * 100) : 0;
      const assignedArea = AreaDefs[adv.assignedArea];

      html += `
        <div class="dispatch-card">
          <div class="dispatch-card-header">
            <div>
              <h4>${adv.icon} ${adv.name}</h4>
              <span class="adv-level">Lv.${adv.level}</span>
            </div>
            <span class="timer-display ${isExploring ? 'timer-exploring' : ''}" data-adv-id="${adv.id}">
              ${isExploring ? '🚶 探索中...' : '☕ 準備中...'}
            </span>
          </div>
          <div class="adv-exp-bar">
            <div class="adv-exp-fill" style="width:${this._expPct(adv)}%"></div>
            <span class="adv-exp-text">EXP: ${adv.exp} / ${LevelExpTable[adv.level] || '—'}</span>
          </div>
      `;

      // 探索プログレスバー
      html += `
        <div class="progress-bar-container">
          <div class="progress-bar-fill" data-adv-progress="${adv.id}" style="width:${progressPct}%"></div>
        </div>
      `;

      // 現在の割り当て表示
      html += `<div class="assigned-area-info">`;
      html += `<span class="assigned-label">探索先:</span>`;
      html += `<span class="assigned-area-name">${assignedArea ? `${assignedArea.icon} ${assignedArea.name}` : '未設定'}</span>`;

      // 探索時間の目安
      if (assignedArea) {
        const time = this._calcTimeText(adv, assignedArea);
        html += `<span class="explore-time-hint">（${time}）</span>`;
      }
      html += `</div>`;

      // エリア選択ボタン
      html += `<div class="area-select-row">`;
      areas.forEach(area => {
        const selected = adv.assignedArea === area.id;
        // ドロップ品のプレビュー（上位5件）
        const topDrops = (area.dropTable || []).sort((a, b) => b.weight - a.weight).slice(0, 5);
        const dropNames = topDrops.map(d => {
          const bp = ItemBlueprints[d.blueprintId];
          return bp ? bp.name : d.blueprintId;
        }).join('、');
        const tooltipText = `${area.description || ''}\n📦 主な素材: ${dropNames}\n⏱ 基本時間: ${area.baseTime}秒\n💎 品質: ${area.qualityMin || '?'}〜${area.qualityMax || '?'}`;

        html += `
          <button class="btn area-btn ${selected ? 'area-btn-selected' : ''}"
                  data-adv-id="${adv.id}" data-area-id="${area.id}"
                  title="${tooltipText}">
            <span class="area-icon">${area.icon}</span>
            <span class="area-name">${area.name}</span>
            <span class="area-quality-hint">Q${area.qualityMin || '?'}-${area.qualityMax || '?'}</span>
          </button>
        `;
      });
      html += `</div>`;

      // 装備スロット
      const weapon = adv.equipment.weapon;
      html += `<button class="btn btn-sm btn-equip" data-adv-id="${adv.id}">${weapon ? `⚔️ ${weapon.name} (Q:${weapon.quality})` : '🔧 装備変更'}</button>`;

      html += `</div>`;
    });
    html += `</div>`;

    this.el.innerHTML = html;

    // エリア割り当てバインド
    this.el.querySelectorAll('.area-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.dataset.advId;
        const areaId = e.currentTarget.dataset.areaId;
        this.adventurers.assignArea(advId, areaId);
        this.render();
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

  _calcTimeText(adv, area) {
    const levelReduction = 1 - ((adv.level - 1) * LevelBonuses.timeReduction);
    const time = Math.max(8, Math.ceil(area.baseTime * (adv.exploreTimeMultiplier || 1.0) * levelReduction));
    if (time <= 12) return 'とても速い';
    if (time <= 20) return '速い';
    if (time <= 35) return 'ふつう';
    if (time <= 55) return 'やや遅い';
    return 'ゆっくり';
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

  /** プログレスバーのリアルタイム更新 */
  updateTimers() {
    const advs = this.adventurers.getAdventurers();
    this.el.querySelectorAll('.timer-display').forEach(el => {
      const advId = el.getAttribute('data-adv-id');
      const adv = advs.find(a => a.id === advId);
      if (adv) {
        if (adv.status === 'exploring' && adv.timer < 3) {
          el.textContent = '🏠 もうすぐ帰還...';
        } else {
          el.textContent = adv.status === 'idle' ? '☕ 準備中...' : '🚶 探索中...';
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
