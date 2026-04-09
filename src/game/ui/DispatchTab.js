/**
 * DispatchTab — 冒険者の派遣タブ（2カラム分割レイアウト版）
 * 左: エリア情報カード / 右: 冒険者カード
 */
import { LevelExpTable, LevelBonuses, AdventurerDefs, UnlockableAdventurers } from '../data/adventurers.js';
import { GameConfig } from '../data/config.js';
import { AreaDefs } from '../data/areas.js';
import { ItemBlueprints, TraitDefs, getEquipSlot } from '../data/items.js';
import { ShopSystem } from '../ShopSystem.js';
import { eventBus } from '../core/EventBus.js';
import { getQualityTier, createTraitBadgeHTML } from './UIHelpers.js';
import { assetPath } from '../core/assetPath.js';

const SLOT_LABELS = { weapon: '⚔️ 武器', armor: '🛡️ 防具', accessory: '💎 装飾' };
const SLOT_ICONS  = { weapon: '⚔️', armor: '🛡️', accessory: '💎' };

// 装備時に効果を発揮するトレイト効果キー（これ以外は非表示）
const EQUIP_VISIBLE_KEYS = new Set([
  // バトル系
  'battleAtk', 'battleDef', 'battleSpd', 'battleHp', 'battleRegen', 'battleDmgReduction', 'startAtb',
  // 探索系
  'speedBonus', 'exploreSuccess', 'dropBonus', 'qualityBonus', 'traitChanceBonus',
]);

// 冒険者定義ルックアップ
const _allAdvDefs = [...AdventurerDefs, ...UnlockableAdventurers];
function _getAdvDef(id) { return _allAdvDefs.find(d => d.id === id); }

export class DispatchTab {
  constructor(adventurerSystem, inventorySystem) {
    this.adventurers = adventurerSystem;
    this.inventory = inventorySystem;
    this.el = document.querySelector('#tab-dispatch');

    // 装備パネル状態（オーバーレイ中のrender()スキップ用）
    this._equipOverlay = null;

    // レベルアップ演出用: 対象冒険者ID を保持
    this._pendingLevelUps = new Set();
    this._unsubLevelUp = eventBus.on('adventurer:levelUp', (d) => {
      this._pendingLevelUps.add(d.adventurer.id);
    });
  }

  render() {
    // 装備パネルが開いている間はDOM再構築をスキップ（強制クローズ防止）
    if (this._equipOverlay && document.body.contains(this._equipOverlay)) return;

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

      // エリア選択ボタン
      const areaBtns = areas.map(area => {
        const selected = adv.assignedArea === area.id;
        return `<button class="disp-area-btn ${selected ? 'disp-area-btn-active' : ''}" data-adv-id="${adv.id}" data-area-id="${area.id}" title="${area.name}">${area.icon}</button>`;
      }).join('');

      // 3スロット装備表示
      const equipSlots = GameConfig.equipmentSlots.map(slot => {
        const eq = adv.equipment[slot];
        return `
          <div class="disp-equip-slot" data-adv-id="${adv.id}" data-slot="${slot}">
            <span class="disp-equip-slot-label">${SLOT_LABELS[slot] || slot}</span>
            ${this._renderEquipSlot(eq, slot)}
          </div>
        `;
      }).join('');

      // 全装備のトレイトをまとめて表示（重複排除 + 装備無効トレイト非表示）
      const allTraitSet = new Set();
      for (const slot of GameConfig.equipmentSlots) {
        const eq = adv.equipment[slot];
        if (eq?.traits) eq.traits.forEach(t => allTraitSet.add(t));
      }
      const uniqueTraits = [...allTraitSet].filter(t => {
        const def = TraitDefs[t];
        if (!def?.effects) return false;
        // 装備時に効果を発揮するキーが1つでもあれば表示
        return Object.keys(def.effects).some(k => EQUIP_VISIBLE_KEYS.has(k));
      });

      return `
        <div class="disp-adv-card" data-adv-id="${adv.id}">
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

          <div class="disp-equip-slots-row">
            ${equipSlots}
          </div>
          ${uniqueTraits.length > 0 ? this._renderAllTraitEffects(uniqueTraits) : ''}

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

    // 装備スロットクリック（スロット種別を渡す）
    this.el.querySelectorAll('.disp-equip-slot').forEach(slotEl => {
      slotEl.addEventListener('click', (e) => {
        const advId = slotEl.dataset.advId;
        const slot = slotEl.dataset.slot;
        this._showEquipmentPanel(advId, slot);
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

  _renderAllTraitEffects(traits) {
    const badges = traits.map(t => {
      const def = TraitDefs[t];
      if (!def) return '';
      return createTraitBadgeHTML(t);
    }).join('');
    return `<div class="disp-trait-row">${badges}</div>`;
  }

  _calcTimeText(adv, area) {
    const levelReduction = Math.max(0.1, 1 - ((adv.level - 1) * LevelBonuses.timeReduction));
    const time = Math.max(8, Math.ceil(area.baseTime * (adv.exploreTimeMultiplier || 1.0) * levelReduction));
    if (time <= 12) return 'とても速い';
    if (time <= 20) return '速い';
    if (time <= 35) return 'ふつう';
    if (time <= 55) return 'やや遅い';
    return 'ゆっくり';
  }

  /** 装備スロット表示 */
  _renderEquipSlot(equip, slot) {
    const defaultEmoji = slot === 'weapon' ? '⚔️' : slot === 'armor' ? '🛡️' : '💎';
    if (!equip) {
      return `
        <div class="disp-equip-empty">
          <span class="disp-equip-empty-icon">＋</span>
          <span class="disp-equip-empty-text">なし</span>
        </div>
      `;
    }
    const bp = ItemBlueprints[equip.blueprintId];
    const tier = getQualityTier(equip.quality);
    const imgUrl = bp && bp.image ? assetPath(bp.image) : null;
    const imgHtml = imgUrl
      ? `<img class="disp-equip-img" src="${imgUrl}" alt="${equip.name}" />`
      : `<span class="disp-equip-emoji">${defaultEmoji}</span>`;

    return `
      <div class="disp-equip-item ${tier.css}">
        ${imgHtml}
        <div class="disp-equip-info">
          <span class="disp-equip-name">${equip.name}</span>
          <span class="disp-equip-quality" style="color:${tier.color}">${tier.icon} Q${equip.quality}</span>
        </div>
      </div>
    `;
  }

  // ===== 装備選択パネル（リッチUI） =====

  /** 冒険者のバトルステータスを計算（装備を仮差し替え可能） */
  _calcBattleStats(adv, overrideSlot = null, overrideItem = null) {
    const def = _getAdvDef(adv.id);
    const bat = def?.battle || { maxHp: 100, atk: 10, def: 5, spd: 50 };
    const level = adv.level || 1;
    let hp = bat.maxHp + (level - 1) * 5;
    let atk = bat.atk + (level - 1) * 2;
    let defStat = bat.def + (level - 1) * 1;
    let spd = bat.spd + (level - 1) * 2;

    const eqCoeffs = GameConfig.equipStatCoefficients || {};
    for (const slot of GameConfig.equipmentSlots) {
      const eq = (slot === overrideSlot) ? overrideItem : adv.equipment[slot];
      if (!eq) continue;
      const coeff = eqCoeffs[slot];
      if (coeff) {
        const eqValue = eq.value || (ItemBlueprints[eq.blueprintId]?.baseValue || 0);
        const bonus = Math.floor(eqValue / coeff.divisor);
        if (coeff.stat === 'atk') atk += bonus;
        else if (coeff.stat === 'def') defStat += bonus;
        else if (coeff.stat === 'spd') spd += bonus;
      }
      for (const traitName of (eq.traits || [])) {
        const td = TraitDefs[traitName];
        if (!td?.effects) continue;
        atk     += td.effects.battleAtk || 0;
        defStat += td.effects.battleDef || 0;
        spd     += td.effects.battleSpd || 0;
        hp      += td.effects.battleHp  || 0;
      }
    }
    return { hp, atk, def: defStat, spd };
  }

  /** ステータスバーHTML */
  _renderStatBar(label, value, maxVal, color) {
    const pct = Math.min(100, (value / maxVal) * 100);
    return `
      <div class="ep-stat-row">
        <span class="ep-stat-label">${label}</span>
        <div class="ep-stat-bar"><div class="ep-stat-bar-fill" style="width:${pct}%;background:${color}"></div></div>
        <span class="ep-stat-value" data-stat="${label}">${value}</span>
      </div>
    `;
  }

  _showEquipmentPanel(advId, slot = 'weapon') {
    const adv = this.adventurers.getAdventurers().find(a => a.id === advId);
    if (!adv) return;
    const slotLabel = SLOT_LABELS[slot] || slot;
    const currentStats = this._calcBattleStats(adv);

    // スロットに対応するアイテムをフィルタリング
    const candidates = this.inventory.getItems()
      .filter(i => getEquipSlot(i) === slot)
      .sort((a, b) => {
        const aOk = this.adventurers.canEquip(advId, a) ? 0 : 1;
        const bOk = this.adventurers.canEquip(advId, b) ? 0 : 1;
        if (aOk !== bOk) return aOk - bOk;
        return b.quality - a.quality;
      });

    // 現在装備中のアイテム
    const currentEquip = adv.equipment[slot];

    // 装備中アイテム表示
    let currentEquipHtml = '';
    if (currentEquip) {
      const bp = ItemBlueprints[currentEquip.blueprintId];
      const tier = getQualityTier(currentEquip.quality);
      const imgUrl = bp?.image ? assetPath(bp.image) : null;
      const traitBadges = (currentEquip.traits || []).map(t => createTraitBadgeHTML(t)).join('');
      currentEquipHtml = `
        <div class="ep-current-equip ${tier.css}">
          ${imgUrl ? `<img class="ep-current-img" src="${imgUrl}" />` : `<span class="ep-current-emoji">${SLOT_ICONS[slot]}</span>`}
          <div class="ep-current-info">
            <span class="ep-current-name">${currentEquip.name}</span>
            <span class="ep-current-quality" style="color:${tier.color}">${tier.icon} Q${currentEquip.quality}</span>
          </div>
        </div>
        ${traitBadges ? `<div class="ep-current-traits">${traitBadges}</div>` : ''}
      `;
    } else {
      currentEquipHtml = `<div class="ep-current-none">装備なし</div>`;
    }

    // アイテムリスト
    let itemListHtml = '';
    if (currentEquip) {
      itemListHtml += `<button class="ep-item-btn ep-item-unequip" data-adv-id="${advId}" data-slot="${slot}">❌ 装備を外す</button>`;
    }
    if (candidates.length === 0 && !currentEquip) {
      itemListHtml = `<p class="ep-empty-msg">装備可能なアイテムがありません</p>`;
    } else {
      candidates.forEach(w => {
        const bp = ItemBlueprints[w.blueprintId];
        const tier = getQualityTier(w.quality);
        const canEquip = this.adventurers.canEquip(advId, w);
        const imgUrl = bp?.image ? assetPath(bp.image) : null;
        const traitBadges = (w.traits || []).map(t => createTraitBadgeHTML(t)).join('');
        const sellValue = w.value || ShopSystem.calcValue(w);

        itemListHtml += `
          <button class="ep-item-btn ${tier.css} ${canEquip ? '' : 'ep-item-disabled'}" data-adv-id="${advId}" data-uid="${w.uid}" ${canEquip ? '' : 'disabled'}>
            <div class="ep-item-main">
              ${imgUrl ? `<img class="ep-item-img" src="${imgUrl}" />` : `<span class="ep-item-emoji">${SLOT_ICONS[slot]}</span>`}
              <div class="ep-item-info">
                <span class="ep-item-name">${w.name}</span>
                <div class="ep-item-meta">
                  <span class="ep-item-quality" style="color:${tier.color}">${tier.icon} Q${w.quality}</span>
                  <span class="ep-item-value">💰${sellValue}</span>
                </div>
              </div>
              ${canEquip ? '' : '<span class="ep-item-lock">装備不可</span>'}
            </div>
            ${traitBadges ? `<div class="ep-item-traits">${traitBadges}</div>` : ''}
          </button>
        `;
      });
    }

    // パネル全体
    const overlay = document.createElement('div');
    overlay.className = 'ep-overlay';
    overlay.innerHTML = `
      <div class="ep-panel">
        <div class="ep-header">
          <h3>${adv.icon} ${adv.name} — ${slotLabel}</h3>
          <button class="ep-close">✕</button>
        </div>
        <div class="ep-body">
          <div class="ep-left">
            <div class="ep-section">
              <div class="ep-section-title">現在の装備</div>
              ${currentEquipHtml}
            </div>
            <div class="ep-section">
              <div class="ep-section-title">ステータス</div>
              <div class="ep-stats" id="ep-stats-area">
                ${this._renderStatBar('❤️ HP', currentStats.hp, 250, '#e05555')}
                ${this._renderStatBar('⚔️ ATK', currentStats.atk, 80, '#e8b84b')}
                ${this._renderStatBar('🛡️ DEF', currentStats.def, 60, '#6aadcf')}
                ${this._renderStatBar('💨 SPD', currentStats.spd, 150, '#7dca65')}
              </div>
              <div class="ep-preview-hint" id="ep-preview-hint"></div>
            </div>
          </div>
          <div class="ep-right">
            <div class="ep-section-title">装備候補 <span class="ep-count">${candidates.length}個</span></div>
            <div class="ep-item-list">${itemListHtml}</div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this._equipOverlay = overlay;

    // ─── ステータスプレビュー（ホバー） ───
    const statsArea = overlay.querySelector('#ep-stats-area');
    const previewHint = overlay.querySelector('#ep-preview-hint');

    overlay.querySelectorAll('.ep-item-btn[data-uid]').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const uid = btn.dataset.uid;
        const item = this.inventory.getItems().find(i => i.uid === uid);
        if (!item) return;
        const previewStats = this._calcBattleStats(adv, slot, item);
        this._updateStatsPreview(statsArea, currentStats, previewStats);
        previewHint.textContent = `${item.name} 装備時のステータス変化`;
      });
      btn.addEventListener('mouseleave', () => {
        this._clearStatsPreview(statsArea, currentStats);
        previewHint.textContent = '';
      });
    });

    // 装備解除ホバー
    overlay.querySelectorAll('.ep-item-unequip').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const previewStats = this._calcBattleStats(adv, slot, null);
        this._updateStatsPreview(statsArea, currentStats, previewStats);
        previewHint.textContent = '装備を外した時のステータス変化';
      });
      btn.addEventListener('mouseleave', () => {
        this._clearStatsPreview(statsArea, currentStats);
        previewHint.textContent = '';
      });
    });

    // ─── クリックイベント ───
    const closePanel = () => {
      overlay.remove();
      this._equipOverlay = null;
      this.render();
    };

    overlay.querySelectorAll('.ep-item-btn[data-uid]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.adventurers.equipItem(btn.dataset.advId, btn.dataset.uid);
        closePanel();
      });
    });
    overlay.querySelectorAll('.ep-item-unequip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.adventurers.unequipItem(btn.dataset.advId, btn.dataset.slot);
        closePanel();
      });
    });
    overlay.querySelector('.ep-close')?.addEventListener('click', closePanel);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closePanel(); });
  }

  /** ステータスプレビューを反映 */
  _updateStatsPreview(statsArea, currentStats, previewStats) {
    const statMap = { '❤️ HP': 'hp', '⚔️ ATK': 'atk', '🛡️ DEF': 'def', '💨 SPD': 'spd' };
    statsArea.querySelectorAll('.ep-stat-value').forEach(el => {
      const key = el.dataset.stat;
      const prop = statMap[key];
      if (!prop) return;
      const cur = currentStats[prop];
      const next = previewStats[prop];
      const diff = next - cur;
      if (diff > 0) {
        el.innerHTML = `${next} <span class="ep-diff ep-diff-up">+${diff}</span>`;
      } else if (diff < 0) {
        el.innerHTML = `${next} <span class="ep-diff ep-diff-down">${diff}</span>`;
      } else {
        el.textContent = `${next}`;
      }
    });
  }

  /** ステータスプレビューをリセット */
  _clearStatsPreview(statsArea, currentStats) {
    const statMap = { '❤️ HP': 'hp', '⚔️ ATK': 'atk', '🛡️ DEF': 'def', '💨 SPD': 'spd' };
    statsArea.querySelectorAll('.ep-stat-value').forEach(el => {
      const key = el.dataset.stat;
      const prop = statMap[key];
      if (prop) el.textContent = `${currentStats[prop]}`;
    });
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

    // レベルアップ演出
    if (this._pendingLevelUps.size > 0) {
      for (const advId of this._pendingLevelUps) {
        const card = this.el.querySelector(`.disp-adv-card[data-adv-id="${advId}"]`);
        if (!card) continue;

        // カード発光フラッシュ
        card.classList.add('levelup-flash');
        card.addEventListener('animationend', () => card.classList.remove('levelup-flash'), { once: true });

        // "+1 Lv" バッジを Lv表示の横にポップ
        const lvEl = card.querySelector('.disp-adv-level');
        if (lvEl) {
          const badge = document.createElement('span');
          badge.className = 'lv-up-badge';
          badge.textContent = '+1 Lv';
          lvEl.insertAdjacentElement('afterend', badge);
          setTimeout(() => badge.remove(), 1300);
        }

        this._pendingLevelUps.delete(advId);
      }
    }
  }

  dispose() {
    if (this._unsubLevelUp) this._unsubLevelUp();
  }
}
