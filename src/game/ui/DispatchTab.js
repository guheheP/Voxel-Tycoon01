/**
 * DispatchTab — 冒険者の派遣タブ（2カラム分割レイアウト版）
 * 左: エリア情報カード / 右: 冒険者カード
 */
import { LevelExpTable, LevelBonuses } from '../data/adventurers.js';
import { AreaDefs } from '../data/areas.js';
import { ItemBlueprints, TraitDefs } from '../data/items.js';
import { eventBus } from '../core/EventBus.js';
import { getQualityTier } from './UIHelpers.js';
import { assetPath } from '../core/assetPath.js';

export class DispatchTab {
  constructor(adventurerSystem, inventorySystem) {
    this.adventurers = adventurerSystem;
    this.inventory = inventorySystem;
    this.el = document.querySelector('#tab-dispatch');
  }

  render() {
    const areas = this.adventurers.getUnlockedAreas();
    const advs = this.adventurers.getAdventurers();

    // 各エリアの派遣人数を集計
    const areaAdvCount = {};
    advs.forEach(adv => {
      if (adv.assignedArea) {
        areaAdvCount[adv.assignedArea] = (areaAdvCount[adv.assignedArea] || 0) + 1;
      }
    });

    // ── 左パネル: エリア一覧 ──
    const areaCards = areas.map(area => {
      const topDrops = (area.dropTable || [])
        .sort((a, b) => b.weight - a.weight)
        .slice(0, 5);
      const dropNames = topDrops.map(d => {
        const bp = ItemBlueprints[d.blueprintId];
        return bp ? bp.name : d.blueprintId;
      }).join('、');
      const advCount = areaAdvCount[area.id] || 0;

      return `
        <div class="disp-area-card">
          <div class="disp-area-header">
            <span class="disp-area-icon">${area.icon}</span>
            <span class="disp-area-name">${area.name}</span>
            ${advCount > 0 ? `<span class="disp-area-badge">👤×${advCount}</span>` : ''}
          </div>
          <div class="disp-area-desc">${area.description || ''}</div>
          <div class="disp-area-stats">
            <span class="disp-area-stat">💎 Q${area.qualityMin}〜${area.qualityMax}</span>
            <span class="disp-area-stat">⏱ ${area.baseTime}s</span>
            <span class="disp-area-stat disp-area-diff">☠${'★'.repeat(area.difficulty || 0)}${'☆'.repeat(Math.max(0, 4 - (area.difficulty || 0)))}</span>
          </div>
          <div class="disp-area-drops">📦 ${dropNames}</div>
        </div>
      `;
    }).join('');

    const leftPanel = `
      <div class="disp-panel disp-panel-left">
        <div class="disp-panel-header">
          <h4>🗺️ エリア一覧</h4>
          <span class="disp-area-count">${areas.length}エリア</span>
        </div>
        <div class="disp-area-grid">${areaCards}</div>
      </div>
    `;

    // ── 右パネル: 冒険者一覧 ──
    const advCards = advs.map(adv => {
      const isExploring = adv.status === 'exploring';
      const progressPct = isExploring && adv.maxTimer > 0
        ? Math.max(0, (1 - adv.timer / adv.maxTimer) * 100) : 0;
      const assignedArea = AreaDefs[adv.assignedArea];
      const weapon = adv.equipment.weapon;

      // エリア選択ボタン
      const areaBtns = areas.map(area => {
        const selected = adv.assignedArea === area.id;
        return `<button class="disp-area-btn ${selected ? 'disp-area-btn-active' : ''}" data-adv-id="${adv.id}" data-area-id="${area.id}" title="${area.name}">${area.icon}</button>`;
      }).join('');

      return `
        <div class="disp-adv-card">
          <div class="disp-adv-header">
            <div class="disp-adv-identity">
              <span class="disp-adv-icon">${adv.icon}</span>
              <span class="disp-adv-name">${adv.name}</span>
              <span class="disp-adv-level">Lv.${adv.level}</span>
            </div>
            <span class="disp-adv-status ${isExploring ? 'disp-status-exploring' : ''}" data-adv-id="${adv.id}">
              ${isExploring ? '🚶 探索中' : '☕ 準備中'}
            </span>
          </div>

          <div class="disp-adv-exp">
            <div class="disp-exp-bar"><div class="disp-exp-fill" style="width:${this._expPct(adv)}%"></div></div>
            <span class="disp-exp-text">EXP ${adv.exp}/${LevelExpTable[adv.level] || '—'}</span>
          </div>

          <div class="disp-adv-progress">
            <div class="progress-bar-container">
              <div class="progress-bar-fill" data-adv-progress="${adv.id}" style="width:${progressPct}%"></div>
            </div>
          </div>

          <div class="disp-adv-info">
            <div class="disp-adv-area">
              <span class="disp-info-label">探索先:</span>
              <span class="disp-info-value">${assignedArea ? `${assignedArea.icon} ${assignedArea.name}` : '未設定'}</span>
              ${assignedArea ? `<span class="disp-time-hint">${this._calcTimeText(adv, assignedArea)}</span>` : ''}
            </div>
            ${assignedArea ? this._renderSuccessRate(adv, assignedArea) : ''}
          </div>

          <div class="disp-equip-slot" data-adv-id="${adv.id}">
            ${this._renderEquipSlot(weapon)}
          </div>
          ${weapon && weapon.traits && weapon.traits.length > 0 ? this._renderTraitEffects(weapon) : ''}

          <div class="disp-area-select">
            ${areaBtns}
          </div>
        </div>
      `;
    }).join('');

    const rightPanel = `
      <div class="disp-panel disp-panel-right">
        <div class="disp-panel-header">
          <h4>👥 冒険者</h4>
          <span class="disp-adv-count">${advs.length}人</span>
        </div>
        <div class="disp-adv-list">${advCards}</div>
      </div>
    `;

    this.el.innerHTML = `
      <div class="disp-layout">
        <p class="text-dim disp-description">冒険者は割り当てられたエリアを自動で繰り返し探索します。レベルが上がると探索が速くなります。</p>
        <div class="disp-columns">${leftPanel}${rightPanel}</div>
      </div>
    `;

    this._bindEvents();
  }

  _bindEvents() {
    // エリア割り当て
    this.el.querySelectorAll('.disp-area-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const advId = e.currentTarget.dataset.advId;
        const areaId = e.currentTarget.dataset.areaId;
        this.adventurers.assignArea(advId, areaId);
        this.render();
      });
    });

    // 装備スロットクリック
    this.el.querySelectorAll('.disp-equip-slot').forEach(slot => {
      slot.addEventListener('click', (e) => {
        const advId = slot.dataset.advId;
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

  _renderSuccessRate(adv, area) {
    const rate = this.adventurers.calcSuccessRate(adv, area);
    let colorClass = 'disp-rate-low';
    if (rate >= 70) colorClass = 'disp-rate-high';
    else if (rate >= 40) colorClass = 'disp-rate-mid';
    return `
      <div class="disp-success-bar-wrap" title="探索成功率: ${rate}%">
        <div class="disp-success-bar-fill ${colorClass}" style="width:${rate}%"></div>
        <span class="disp-success-bar-label">🎯 ${rate}%</span>
      </div>
    `;
  }

  _renderTraitEffects(weapon) {
    const badges = weapon.traits.map(t => {
      const def = TraitDefs[t];
      if (!def) return '';
      const rarityClass = `trait-rarity-${def.rarity || 'common'}`;
      return `<span class="trait-badge ${rarityClass}" title="${def.description}">${t}</span>`;
    }).join('');
    return `<div class="disp-trait-row">${badges}</div>`;
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

  /** 装備スロット表示 */
  _renderEquipSlot(weapon) {
    if (!weapon) {
      return `
        <div class="disp-equip-empty">
          <span class="disp-equip-empty-icon">＋</span>
          <span class="disp-equip-empty-text">装備なし — クリックで装備</span>
        </div>
      `;
    }
    const bp = ItemBlueprints[weapon.blueprintId];
    const tier = getQualityTier(weapon.quality);
    const imgUrl = bp && bp.image ? assetPath(bp.image) : null;
    const imgHtml = imgUrl
      ? `<img class="disp-equip-img" src="${imgUrl}" alt="${weapon.name}" />`
      : `<span class="disp-equip-emoji">⚔️</span>`;

    return `
      <div class="disp-equip-item ${tier.css}">
        ${imgHtml}
        <div class="disp-equip-info">
          <span class="disp-equip-name">${weapon.name}</span>
          <span class="disp-equip-quality" style="color:${tier.color}">${tier.icon} Q${weapon.quality}</span>
        </div>
        <span class="disp-equip-change">変更 ▾</span>
      </div>
    `;
  }

  _showEquipmentPanel(advId) {
    const adv = this.adventurers.getAdventurers().find(a => a.id === advId);
    if (!adv) return;
    const weapons = this.inventory.getItems().filter(i => i.type === 'equipment')
      .sort((a, b) => b.quality - a.quality);

    let itemsHtml = '';
    if (adv.equipment.weapon) {
      itemsHtml += `<button class="disp-equip-option disp-equip-unequip" data-adv-id="${advId}">❌ 装備を外す</button>`;
    }
    if (weapons.length === 0 && !adv.equipment.weapon) {
      itemsHtml = `<p class="text-dim" style="padding:12px;text-align:center;">装備可能なアイテムがありません</p>`;
    } else {
      weapons.forEach(w => {
        const bp = ItemBlueprints[w.blueprintId];
        const tier = getQualityTier(w.quality);
        const imgUrl = bp && bp.image ? assetPath(bp.image) : null;
        const imgHtml = imgUrl
          ? `<img class="disp-equip-opt-img" src="${imgUrl}" alt="${w.name}" />`
          : `<span class="disp-equip-opt-emoji">⚔️</span>`;

        itemsHtml += `
          <button class="disp-equip-option ${tier.css}" data-adv-id="${advId}" data-uid="${w.uid}">
            ${imgHtml}
            <div class="disp-equip-opt-info">
              <span class="disp-equip-opt-name">${w.name}</span>
              <span class="disp-equip-opt-quality" style="color:${tier.color}">${tier.icon} Q${w.quality}</span>
            </div>
          </button>
        `;
      });
    }

    const html = `
      <div class="disp-equip-panel">
        <div class="disp-equip-panel-header">
          <h4>⚔️ 装備選択 — ${adv.name}</h4>
          <button class="disp-equip-panel-close">✕</button>
        </div>
        <div class="disp-equip-panel-list">${itemsHtml}</div>
      </div>
    `;

    const overlay = document.createElement('div');
    overlay.className = 'disp-equip-overlay';
    overlay.innerHTML = html;
    this.el.appendChild(overlay);

    // 装備選択
    overlay.querySelectorAll('.disp-equip-option[data-uid]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.adventurers.equipWeapon(e.currentTarget.dataset.advId, e.currentTarget.dataset.uid);
        overlay.remove();
        this.render();
      });
    });
    // 装備解除
    overlay.querySelectorAll('.disp-equip-unequip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.adventurers.unequipWeapon(e.currentTarget.dataset.advId);
        overlay.remove();
        this.render();
      });
    });
    // 閉じる
    overlay.querySelector('.disp-equip-panel-close')?.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  }

  /** プログレスバーのリアルタイム更新 */
  updateTimers() {
    const advs = this.adventurers.getAdventurers();
    this.el.querySelectorAll('.disp-adv-status').forEach(el => {
      const advId = el.getAttribute('data-adv-id');
      const adv = advs.find(a => a.id === advId);
      if (adv) {
        if (adv.status === 'exploring' && adv.timer < 3) {
          el.textContent = '🏠 帰還中...';
        } else {
          el.textContent = adv.status === 'idle' ? '☕ 準備中' : '🚶 探索中';
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
