/**
 * BattlePrepScreen — 戦闘前のアイテム持ち込み準備画面
 * 
 * プレイヤーがインベントリからバトル用アイテム（最大4つ）を選び、
 * 参加冒険者のステータスを確認してからバトルを開始する。
 */
import { eventBus } from '../core/EventBus.js';
import { ItemBlueprints, TraitDefs } from '../data/items.js';
import { AdventurerDefs, UnlockableAdventurers } from '../data/adventurers.js';
import { GameConfig } from '../data/config.js';
import { assetPath } from '../core/assetPath.js';

const _allAdvDefs = [...AdventurerDefs, ...UnlockableAdventurers];
function _getAdvDef(id) {
  return _allAdvDefs.find(d => d.id === id);
}

export class BattlePrepScreen {
  constructor(inventorySystem, adventurerSystem, dayCycleSystem) {
    this.inventory = inventorySystem;
    this.adventurers = adventurerSystem;
    this.dayCycle = dayCycleSystem;
    this.overlay = null;
    this.selectedItems = [];
    // ランクに応じた持ち込み枠数
    const rankIdx = this.dayCycle?.currentRankIndex ?? 0;
    const rankDef = GameConfig.ranks[rankIdx];
    this.maxSlots = this._calcMaxSlots(rankIdx);
    this._pendingBattle = null; // { rankIndex, bossDef }
  }

  /** 持ち込み枠数を計算（ランク基準 + アップグレードボーナス） */
  _calcMaxSlots(rankIdx) {
    const rankDef = GameConfig.ranks[rankIdx];
    const base = rankDef?.battleItemSlots || GameConfig.bossBattle?.baseItemSlots || 2;
    const q = { effectType: 'battle_item_slots', result: 0 };
    eventBus.emit('upgrade:queryBonus', q);
    return base + q.result;
  }

  /**
   * 準備画面を表示
   * @param {number} rankIndex
   * @param {object} bossDef
   */
  show(rankIndex, bossDef) {
    this._pendingBattle = { rankIndex, bossDef };
    this.selectedItems = [];
    // ランク枠数を再計算
    const rankIdx = this.dayCycle?.currentRankIndex ?? 0;
    this.maxSlots = this._calcMaxSlots(rankIdx);

    // バトル用アイテムをフィルタ
    const allItems = this.inventory.items;
    const battleItems = allItems.filter(item => {
      const bp = ItemBlueprints[item.blueprintId];
      return bp && bp.battleEffect;
    });

    // 冒険者一覧
    const advs = this.adventurers.adventurers;

    this.overlay = document.createElement('div');
    this.overlay.className = 'battle-prep-overlay';
    this.overlay.innerHTML = `
      <div class="battle-prep-container">
        <div class="prep-header">
          <h2>⚔️ 戦闘準備</h2>
          <div class="prep-boss-info">
            <span class="prep-boss-icon">${bossDef.icon}</span>
            <span class="prep-boss-name">${bossDef.name}</span>
          </div>
        </div>

        <div class="prep-body">
          <div class="prep-section prep-party">
            <h3>👥 参加冒険者</h3>
            <div class="prep-party-list" id="prep-party-list">
              ${advs.map(adv => this._renderAdvCard(adv)).join('')}
            </div>
          </div>

          <div class="prep-section prep-items">
            <h3>🎒 持ち込みアイテム（最大${this.maxSlots}つ）</h3>
            <p class="prep-item-warning">⚠ 持ち込みアイテムはバトル終了後に消費されます</p>
            <div class="prep-slots" id="prep-slots">
              ${Array.from({ length: this.maxSlots }, (_, i) => `
                <div class="prep-slot" data-slot="${i}">
                  <span class="prep-slot-empty">＋</span>
                </div>
              `).join('')}
            </div>
            <div class="prep-item-grid" id="prep-item-grid">
              ${battleItems.length > 0
                ? battleItems.map(item => this._renderItemOption(item)).join('')
                : '<p class="prep-no-items">戦闘用アイテムがありません</p>'
              }
            </div>
          </div>
        </div>

        <div class="prep-footer">
          <button class="prep-btn prep-btn-cancel" id="prep-cancel">← 戻る</button>
          <button class="prep-btn prep-btn-start" id="prep-start">⚔️ バトル開始！</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    this._bindEvents(battleItems);
  }

  _renderAdvCard(adv) {
    const def = _getAdvDef(adv.id);
    const bat = (def && def.battle) || { maxHp: 100, atk: 10, def: 5, spd: 50 };
    const level = adv.level || 1;
    const baseHp = bat.maxHp + (level - 1) * 5;
    const baseAtk = bat.atk + (level - 1) * 2;
    const baseDef = bat.def + (level - 1) * 1;
    const baseSpd = bat.spd + (level - 1) * 2;

    // 装備ボーナス計算
    let eqAtk = 0, eqDef = 0, eqSpd = 0, eqHp = 0;
    if (adv.equipment?.weapon) {
      const wVal = adv.equipment.weapon.value || 0;
      eqAtk += Math.floor(wVal / 10);
      for (const traitName of (adv.equipment.weapon.traits || [])) {
        const td = TraitDefs[traitName];
        if (!td?.effects) continue;
        eqAtk += td.effects.battleAtk  || 0;
        eqDef += td.effects.battleDef  || 0;
        eqSpd += td.effects.battleSpd  || 0;
        eqHp  += td.effects.battleHp   || 0;
      }
    }

    const totalHp = baseHp + eqHp;
    const totalAtk = baseAtk + eqAtk;
    const totalDef = baseDef + eqDef;
    const totalSpd = baseSpd + eqSpd;

    const formatStat = (total, bonus) => bonus > 0
      ? `${total} <span class="prep-stat-bonus">(+${bonus})</span>` : `${total}`;

    const weaponName = adv.equipment?.weapon ? adv.equipment.weapon.name : null;

    return `
      <div class="prep-adv-card">
        <span class="prep-adv-icon">${adv.icon}</span>
        <div class="prep-adv-info">
          <div class="prep-adv-name">${adv.name} <span class="prep-adv-lv">Lv.${level}</span></div>
          <div class="prep-adv-stats">
            <span>❤️ ${formatStat(totalHp, eqHp)}</span>
            <span>⚔ ${formatStat(totalAtk, eqAtk)}</span>
            <span>🛡 ${formatStat(totalDef, eqDef)}</span>
            <span>💨 ${formatStat(totalSpd, eqSpd)}</span>
          </div>
          ${weaponName ? `<div class="prep-adv-equip">🗡️ ${weaponName}</div>` : '<div class="prep-adv-equip prep-no-equip">装備なし</div>'}
        </div>
      </div>
    `;
  }

  _renderItemOption(item) {
    const bp = ItemBlueprints[item.blueprintId];
    const effectText = this._getEffectText(bp.battleEffect);
    const imgUrl = bp.image ? assetPath(bp.image) : null;
    const imgHtml = imgUrl
      ? `<img class="prep-item-img" src="${imgUrl}" alt="${item.name}" />`
      : `<span class="prep-item-emoji">💊</span>`;

    return `
      <button class="prep-item-option" data-uid="${item.uid}" title="${effectText}">
        ${imgHtml}
        <div class="prep-item-info">
          <span class="prep-item-name">${item.name}</span>
          <span class="prep-item-effect">${effectText}</span>
        </div>
      </button>
    `;
  }

  _getEffectText(effect) {
    if (!effect) return '';
    switch (effect.type) {
      case 'heal': return `回復 ${effect.value}HP`;
      case 'healfull': return '全体完全回復';
      case 'revive': return `蘇生 ${effect.value || 50}%`;
      case 'buff': return `${effect.stat}↑${effect.amount} (${effect.duration}s)`;
      case 'debuff': return `敵${effect.stat}↓${Math.abs(effect.amount)} (${effect.duration}s)`;
      case 'damage': return `敵に${effect.value}ダメージ`;
      case 'stun': return `敵スタン ${effect.duration}s`;
      default: return effect.type;
    }
  }

  _bindEvents(battleItems) {
    // アイテム選択
    this.overlay.querySelectorAll('.prep-item-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.dataset.uid;
        if (this.selectedItems.includes(uid)) {
          // 選択解除
          this.selectedItems = this.selectedItems.filter(u => u !== uid);
          btn.classList.remove('prep-item-selected');
        } else if (this.selectedItems.length < this.maxSlots) {
          // 選択
          this.selectedItems.push(uid);
          btn.classList.add('prep-item-selected');
        }
        this._updateSlots(battleItems);
      });
    });

    // キャンセル
    this.overlay.querySelector('#prep-cancel').addEventListener('click', () => {
      this._close();
    });

    // バトル開始
    this.overlay.querySelector('#prep-start').addEventListener('click', () => {
      if (!this._pendingBattle) return;
      const { rankIndex, bossDef } = this._pendingBattle;
      const selectedUids = [...this.selectedItems];
      this._close();
      eventBus.emit('battle:prepComplete', { rankIndex, bossDef, selectedItems: selectedUids });
    });

    // オーバーレイ背景クリックで閉じない（意図しない操作防止）
  }

  _updateSlots(battleItems) {
    const slotsEl = this.overlay.querySelector('#prep-slots');
    if (!slotsEl) return;

    const items = this.inventory.items;
    const slots = slotsEl.querySelectorAll('.prep-slot');
    slots.forEach((slot, i) => {
      if (i < this.selectedItems.length) {
        const uid = this.selectedItems[i];
        const item = items.find(it => it.uid === uid);
        if (item) {
          const bp = ItemBlueprints[item.blueprintId];
          const imgUrl = bp?.image ? assetPath(bp.image) : null;
          slot.innerHTML = imgUrl
            ? `<img class="prep-slot-img" src="${imgUrl}" alt="${item.name}" />`
            : `<span class="prep-slot-name">${item.name.slice(0, 2)}</span>`;
          slot.classList.add('prep-slot-filled');
        }
      } else {
        slot.innerHTML = '<span class="prep-slot-empty">＋</span>';
        slot.classList.remove('prep-slot-filled');
      }
    });
  }

  _close() {
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
    this._pendingBattle = null;
    this.selectedItems = [];
  }
}
