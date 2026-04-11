/**
 * InventoryTab — 倉庫タブ（一括操作・即時処分・高度フィルタ対応版）
 */
import { ItemBlueprints, TraitDefs } from '../data/items.js';
import { createItemCardHTML, getTypeInfo, getQualityTier, openItemDetailModal, createTraitBadgeHTML } from './UIHelpers.js';
import { eventBus } from '../core/EventBus.js';

export class InventoryTab {
  constructor(inventorySystem, shopSystem, collectionSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.collection = collectionSystem;
    this.el = document.getElementById('inventory-list');
    this.filter = 'all';        // 'all' | 'material' | 'equipment' | 'consumable' | 'accessory'
    this.sort = 'type';          // 'type' | 'quality' | 'name' | 'value'
    this.qualityFilter = 'all';  // 'all' | 'poor' | 'common' | 'fine' | 'excellent' | 'legendary'
    this.traitFilter = 'all';    // 'all' | 'with' | 'without'
    this.selectMode = false;
    this.selectedUids = new Set();
    this._autoLockOpen = false; // 自動ロックパネルの開閉状態
  }

  render() {
    let items = this.inventory.getItems();

    // カテゴリーフィルタ
    const filtered = this.filter === 'all'
      ? items
      : items.filter(i => i.type === this.filter);

    // 品質フィルタ
    const qualityRanges = {
      poor: [0, 20], common: [21, 40], fine: [41, 60], excellent: [61, 80], legendary: [81, 100],
    };
    let qualityFiltered = filtered;
    if (this.qualityFilter !== 'all' && qualityRanges[this.qualityFilter]) {
      const [min, max] = qualityRanges[this.qualityFilter];
      qualityFiltered = filtered.filter(i => i.quality >= min && i.quality <= max);
    }

    // 特性フィルタ
    let traitFiltered = qualityFiltered;
    if (this.traitFilter === 'with') {
      traitFiltered = qualityFiltered.filter(i => i.traits && i.traits.length > 0);
    } else if (this.traitFilter === 'without') {
      traitFiltered = qualityFiltered.filter(i => !i.traits || i.traits.length === 0);
    }

    // ソート
    const sorted = [...traitFiltered].sort((a, b) => {
      if (this.sort === 'quality') return b.quality - a.quality;
      if (this.sort === 'name') return a.name.localeCompare(b.name);
      if (this.sort === 'value') return (b.value || 0) - (a.value || 0);
      // type: material → equipment → consumable → accessory
      const typeOrder = { material: 0, equipment: 1, consumable: 2, accessory: 3 };
      const d = (typeOrder[a.type] || 0) - (typeOrder[b.type] || 0);
      return d !== 0 ? d : b.quality - a.quality;
    });

    // カテゴリ集計
    const counts = { all: items.length, material: 0, equipment: 0, consumable: 0, accessory: 0 };
    items.forEach(i => counts[i.type] = (counts[i.type] || 0) + 1);

    // Filter tabs
    const filters = [
      { key: 'all', label: `📦 すべて (${items.length}/${this.inventory.maxCapacity})` },
      { key: 'material', label: '🪨 素材' },
      { key: 'equipment', label: '⚔️ 装備' },
      { key: 'consumable', label: '🧪 消耗品' },
      { key: 'accessory', label: '💎 アクセ' },
    ];

    let html = `<div class="inv-toolbar">`;
    html += `<div class="inv-filters">`;
    filters.forEach(f => {
      const active = this.filter === f.key ? 'active' : '';
      const count = counts[f.key] || 0;
      html += `<button class="btn inv-filter-btn ${active}" data-filter="${f.key}">${f.label} <span class="inv-count">${count}</span></button>`;
    });
    html += `</div>`;

    // Sort buttons
    html += `<div class="inv-sort">`;
    html += `<button class="btn btn-sm inv-sort-btn ${this.sort === 'type' ? 'active' : ''}" data-sort="type">種類</button>`;
    html += `<button class="btn btn-sm inv-sort-btn ${this.sort === 'quality' ? 'active' : ''}" data-sort="quality">品質</button>`;
    html += `<button class="btn btn-sm inv-sort-btn ${this.sort === 'name' ? 'active' : ''}" data-sort="name">名前</button>`;
    html += `<button class="btn btn-sm inv-sort-btn ${this.sort === 'value' ? 'active' : ''}" data-sort="value">売値</button>`;
    html += `</div></div>`;

    // 高度フィルター行
    html += `<div class="inv-advanced-filters">`;
    // 品質フィルタ
    html += `<div class="inv-adv-group"><span class="inv-adv-label">品質:</span>`;
    const qFilters = [
      { key: 'all', label: 'すべて' },
      { key: 'poor', label: '▪ 粗悪' },
      { key: 'common', label: '▫ 普通' },
      { key: 'fine', label: '◆ 良品' },
      { key: 'excellent', label: '★ 優品' },
      { key: 'legendary', label: '✦ 極上' },
    ];
    qFilters.forEach(f => {
      html += `<button class="btn btn-xs inv-qf-btn ${this.qualityFilter === f.key ? 'active' : ''}" data-qf="${f.key}">${f.label}</button>`;
    });
    html += `</div>`;
    // 特性フィルタ
    html += `<div class="inv-adv-group"><span class="inv-adv-label">特性:</span>`;
    html += `<button class="btn btn-xs inv-tf-btn ${this.traitFilter === 'all' ? 'active' : ''}" data-tf="all">すべて</button>`;
    html += `<button class="btn btn-xs inv-tf-btn ${this.traitFilter === 'with' ? 'active' : ''}" data-tf="with">特性あり</button>`;
    html += `<button class="btn btn-xs inv-tf-btn ${this.traitFilter === 'without' ? 'active' : ''}" data-tf="without">特性なし</button>`;
    html += `</div>`;
    html += `</div>`;

    // 一括操作バー
    html += `<div class="inv-bulk-bar">`;
    html += `<button class="btn btn-sm inv-select-toggle ${this.selectMode ? 'active' : ''}" id="inv-select-toggle">${this.selectMode ? '✕ 選択解除' : '☑ 選択モード'}</button>`;
    if (this.selectMode) {
      const selCount = this.selectedUids.size;
      const selItems = sorted.filter(i => this.selectedUids.has(i.uid) && !i.locked);
      const totalQuickSellValue = selItems.reduce((sum, item) => {
        const bp = ItemBlueprints[item.blueprintId];
        if (!bp) return sum;
        return sum + Math.max(1, Math.floor((item.value || bp.baseValue || 10) * 0.2));
      }, 0);

      html += `<span class="inv-sel-count">${selCount}個選択中</span>`;
      html += `<button class="btn btn-sm inv-select-all" id="inv-select-all">全選択</button>`;
      html += `<button class="btn btn-sm inv-select-filtered" id="inv-select-filtered">表示中を全選択</button>`;
      if (selCount > 0) {
        html += `<button class="btn btn-sm btn-danger inv-bulk-sell" id="inv-bulk-sell">🗑 まとめて処分 (${totalQuickSellValue}G)</button>`;
      }
    }
    html += `</div>`;

    // 特性自動ロックパネル（折りたたみ式）
    const lockTraits = this.inventory.autoLockTraits;
    const lockCount = lockTraits.size;
    const isOpen = this._autoLockOpen;
    const rarityOrder = { legendary: 0, epic: 1, rare: 2, uncommon: 3, common: 4 };
    const discovered = this.collection ? this.collection.discoveredTraits : new Set();
    const sortedTraits = Object.entries(TraitDefs)
      .filter(([name]) => discovered.has(name))
      .sort((a, b) => (rarityOrder[a[1].rarity] ?? 5) - (rarityOrder[b[1].rarity] ?? 5));
    const traitBadges = sortedTraits.length > 0
      ? sortedTraits.map(([name, def]) => {
          const active = lockTraits.has(name);
          return `<button class="autolock-trait-btn ${active ? 'autolock-trait-active' : ''}" data-autolock-trait="${name}" title="${def.description}">${createTraitBadgeHTML(name)}</button>`;
        }).join('')
      : `<span class="autolock-empty">素材を入手して特性を発見しましょう</span>`;
    html += `
      <div class="autolock-accordion ${isOpen ? 'autolock-open' : ''}">
        <button class="autolock-accordion-header" id="autolock-toggle">
          <span class="autolock-accordion-icon">${isOpen ? '▼' : '▶'}</span>
          <span>🔒 特性自動ロック</span>
          ${lockCount > 0 ? `<span class="autolock-count">${lockCount}件</span>` : ''}
        </button>
        <div class="autolock-accordion-body" ${isOpen ? '' : 'style="display:none"'}>
          <p class="autolock-desc">選択した特性を持つ素材を入手時に自動でロックします</p>
          <div class="autolock-trait-grid">${traitBadges}</div>
        </div>
      </div>
    `;

    if (sorted.length === 0) {
      const isAll = this.filter === 'all' && this.qualityFilter === 'all' && this.traitFilter === 'all';
      html += `<div class="empty-state">
        <div class="empty-state-icon">${isAll ? '📦' : '🔍'}</div>
        <div class="empty-state-text">${isAll ? 'まだ何も持っていません' : '条件に合うアイテムはありません'}</div>
        <div class="empty-state-hint">${isAll ? '冒険者を派遣して素材を集めましょう！' : 'フィルターを変更してみましょう'}</div>
      </div>`;
    } else {
      html += `<div class="item-grid">`;
      html += sorted.map(i => {
        const isSelected = this.selectedUids.has(i.uid);
        const quickValue = Math.max(1, Math.floor((i.value || ItemBlueprints[i.blueprintId]?.baseValue || 10) * 0.2));
        let cardHtml = createItemCardHTML(i);
        // ロックバッジ + ロックボタン
        if (i.locked) {
          cardHtml = cardHtml.replace(
            'class="item-card ',
            'class="item-card item-locked '
          );
        }
        cardHtml = cardHtml.replace(
          'data-uid="' + i.uid + '">',
          `data-uid="${i.uid}"><button class="item-lock-btn" data-lock-uid="${i.uid}" title="ロック切替">${i.locked ? '🔒' : '🔓'}</button>`
        );
        if (this.selectMode) {
          // 選択チェックマーク + 即時処分ボタンを追加
          cardHtml = cardHtml.replace(
            'class="item-card ',
            `class="item-card ${isSelected ? 'inv-selected' : ''} inv-selectable `
          );
          cardHtml = cardHtml.replace(
            '</div>\n  </div>\n  ',
            `</div><div class="inv-card-actions"><button class="inv-quick-sell-btn" data-uid="${i.uid}" title="即時処分 (${quickValue}G)">🗑 ${quickValue}G</button></div></div>`
          );
          // チェックマークオーバーレイ
          cardHtml = cardHtml.replace(
            'data-uid="' + i.uid + '">',
            `data-uid="${i.uid}"><div class="inv-check-overlay">${isSelected ? '☑' : '☐'}</div>`
          );
        }
        return cardHtml;
      }).join('');
      html += `</div>`;
    }

    // フッター統計
    html += `<div class="inv-footer-stats">`;
    html += `<span>表示: ${sorted.length}/${items.length}個</span>`;
    if (sorted.length > 0) {
      const avgQ = Math.round(sorted.reduce((s, i) => s + i.quality, 0) / sorted.length);
      html += `<span>平均品質: Q${avgQ}</span>`;
    }
    html += `</div>`;

    this.el.innerHTML = html;
    this._bindEvents(sorted);
  }

  _bindEvents(sorted) {
    // カテゴリフィルター
    this.el.querySelectorAll('.inv-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filter = e.currentTarget.dataset.filter;
        this.render();
      });
    });
    // ソート
    this.el.querySelectorAll('.inv-sort-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.sort = e.currentTarget.dataset.sort;
        this.render();
      });
    });
    // 品質フィルタ
    this.el.querySelectorAll('.inv-qf-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.qualityFilter = e.currentTarget.dataset.qf;
        this.render();
      });
    });
    // 特性フィルタ
    this.el.querySelectorAll('.inv-tf-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.traitFilter = e.currentTarget.dataset.tf;
        this.render();
      });
    });
    // 選択モード切替
    const toggleBtn = this.el.querySelector('#inv-select-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.selectMode = !this.selectMode;
        this.selectedUids.clear();
        this.render();
      });
    }
    // 全選択
    const selectAllBtn = this.el.querySelector('#inv-select-all');
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', () => {
        sorted.forEach(i => this.selectedUids.add(i.uid));
        this.render();
      });
    }
    // 表示中を全選択
    const selectFilteredBtn = this.el.querySelector('#inv-select-filtered');
    if (selectFilteredBtn) {
      selectFilteredBtn.addEventListener('click', () => {
        sorted.forEach(i => this.selectedUids.add(i.uid));
        this.render();
      });
    }
    // 一括処分
    const bulkSellBtn = this.el.querySelector('#inv-bulk-sell');
    if (bulkSellBtn) {
      bulkSellBtn.addEventListener('click', () => {
        const count = this.selectedUids.size;
        if (count === 0) return;
        this._showConfirm(`${count}個のアイテムを処分しますか？（売値の20%で即時売却）`, () => {
          const uids = [...this.selectedUids];
          const totalPrice = this.shop.quickSellBulk(uids, this.inventory);
          this.selectedUids.clear();
          eventBus.emit('inventory:changed');
          eventBus.emit('toast', { message: `${count}個を処分しました (+${totalPrice}G)`, type: 'success' });
          this.render();
        });
      });
    }

    // カードクリック
    const grid = this.el.querySelector('.item-grid');
    if (grid) {
      grid.addEventListener('click', (e) => {
        // 即時処分ボタン
        const sellBtn = e.target.closest('.inv-quick-sell-btn');
        if (sellBtn) {
          e.stopPropagation();
          const uid = sellBtn.dataset.uid;
          const item = this.inventory.getItemByUid(uid);
          if (!item) return;
          const price = this.shop.quickSell(uid, this.inventory);
          if (price > 0) {
            this.selectedUids.delete(uid);
            eventBus.emit('inventory:changed');
            eventBus.emit('toast', { message: `${item.name}を処分しました (+${price}G)`, type: 'info' });
            this.render();
          }
          return;
        }

        // ロックボタン
        const lockBtn = e.target.closest('.item-lock-btn');
        if (lockBtn) {
          e.stopPropagation();
          const lockUid = lockBtn.dataset.lockUid;
          if (lockUid) {
            this.inventory.toggleLock(lockUid);
            this.render();
          }
          return;
        }

        const card = e.target.closest('.item-card[data-uid]');
        if (!card) return;
        const uid = card.dataset.uid;

        if (this.selectMode) {
          // 選択トグル
          if (this.selectedUids.has(uid)) {
            this.selectedUids.delete(uid);
          } else {
            this.selectedUids.add(uid);
          }
          this.render();
        } else {
          // 詳細モーダル
          const item = sorted.find(i => i.uid === uid);
          if (item) openItemDetailModal(item);
        }
      });
    }

    // 自動ロック: アコーディオン開閉
    const alToggle = this.el.querySelector('#autolock-toggle');
    if (alToggle) {
      alToggle.addEventListener('click', () => {
        this._autoLockOpen = !this._autoLockOpen;
        const body = this.el.querySelector('.autolock-accordion-body');
        const icon = this.el.querySelector('.autolock-accordion-icon');
        if (body) body.style.display = this._autoLockOpen ? '' : 'none';
        if (icon) icon.textContent = this._autoLockOpen ? '▼' : '▶';
        this.el.querySelector('.autolock-accordion')?.classList.toggle('autolock-open', this._autoLockOpen);
      });
    }
    // 自動ロック: 特性バッジトグル
    this.el.querySelectorAll('.autolock-trait-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const traitName = btn.dataset.autolockTrait;
        if (!traitName) return;
        const nowActive = this.inventory.toggleAutoLockTrait(traitName);
        btn.classList.toggle('autolock-trait-active', nowActive);
        // ヘッダーのカウント更新
        const countEl = this.el.querySelector('.autolock-count');
        const sz = this.inventory.autoLockTraits.size;
        if (countEl) {
          countEl.textContent = `${sz}件`;
        } else if (sz > 0) {
          // カウントが最初からなかった場合、ヘッダーに追加
          const header = this.el.querySelector('.autolock-accordion-header');
          if (header) {
            const span = document.createElement('span');
            span.className = 'autolock-count';
            span.textContent = `${sz}件`;
            header.appendChild(span);
          }
        }
      });
    });
  }

  _showConfirm(message, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'inv-confirm-overlay';
    modal.innerHTML = `
      <div class="inv-confirm-box">
        <div class="inv-confirm-msg">${message}</div>
        <div class="inv-confirm-btns">
          <button class="btn btn-danger" id="inv-confirm-yes">はい</button>
          <button class="btn" id="inv-confirm-no">いいえ</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('#inv-confirm-yes').addEventListener('click', () => { modal.remove(); onConfirm(); });
    modal.querySelector('#inv-confirm-no').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  }
}
