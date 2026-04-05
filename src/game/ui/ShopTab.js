/**
 * ShopTab — お店タブ（2カラム分割レイアウト版）
 * 左: 陳列棚 + お客さん / 右: 倉庫ブラウザ
 */
import { createShopItemCardHTML, createDisplayedItemCardHTML } from './UIHelpers.js';
import { eventBus } from '../core/EventBus.js';

const TypeIcons = {
  material: '🪨', equipment: '⚔️', consumable: '🧪', accessory: '💎',
};

export class ShopTab {
  constructor(inventorySystem, shopSystem, customerSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.customers = customerSystem;
    this.el = document.querySelector('#tab-shop');
    this.shopFilter = 'craftable';
  }

  render() {
    const customers = this.customers ? this.customers.getActiveCustomers() : [];
    const displayed = this.shop.displayedItems;
    const maxSlots = this.shop.maxSlots;

    // ── お客さんバー ──
    let customerBar = '';
    if (customers.length > 0) {
      const custItems = customers.map(c => {
        const pct = Math.max(0, (c.timer / c.maxTimer) * 100);
        const demands = c.demandTypes.map(t => TypeIcons[t] || t).join('');
        return `
          <div class="shop-cust-chip" data-customer-id="${c.id}">
            <span class="shop-cust-icon">${c.icon}</span>
            <span class="shop-cust-name">${c.name}</span>
            <span class="shop-cust-wants">${demands}</span>
            <div class="shop-cust-bar"><div class="shop-cust-bar-fill" data-customer-bar="${c.id}" style="width:${pct}%"></div></div>
          </div>
        `;
      }).join('');
      customerBar = `<div class="shop-customer-bar"><span class="shop-cust-label">🔔 来店中</span>${custItems}</div>`;
    }

    // ── 左パネル: 陳列棚 ──
    let shelfCards = '';
    // 陳列中アイテム（既存の displayed カード）
    shelfCards += displayed.map(item => createDisplayedItemCardHTML(item)).join('');
    // 空きスロット
    for (let i = displayed.length; i < maxSlots; i++) {
      shelfCards += `<div class="shop-shelf-slot shop-shelf-empty"><span class="shop-shelf-empty-icon">＋</span><span class="shop-shelf-empty-text">空きスロット</span></div>`;
    }

    const leftPanel = `
      <div class="shop-panel shop-panel-left">
        <div class="shop-panel-header">
          <h4>📋 陳列棚</h4>
          <span class="shop-shelf-count">${displayed.length} / ${maxSlots}</span>
        </div>
        <div class="shop-shelf-grid">${shelfCards}</div>
        ${displayed.length > 0 ? '<p class="shop-shelf-hint">クリックで取り下げ</p>' : ''}
      </div>
    `;

    // ── 右パネル: 倉庫ブラウザ ──
    const items = this.inventory.getItems();
    const craftable = items.filter(i => i.type !== 'material');
    const materials = items.filter(i => i.type === 'material');

    let filterItems;
    if (this.shopFilter === 'craftable') filterItems = craftable;
    else if (this.shopFilter === 'material') filterItems = materials;
    else filterItems = items;

    filterItems = [...filterItems].sort((a, b) => b.quality - a.quality);

    let invContent = '';
    if (filterItems.length > 0) {
      invContent = `<div class="item-grid shop-inv-grid">${filterItems.map(i => createShopItemCardHTML(i)).join('')}</div>`;
    } else if (items.length === 0) {
      invContent = `<div class="shop-inv-empty"><span>📦</span><span>倉庫にアイテムがありません</span></div>`;
    } else {
      invContent = `<div class="shop-inv-empty"><span>🔍</span><span>該当するアイテムがありません</span></div>`;
    }

    const isFull = displayed.length >= maxSlots;

    const rightPanel = `
      <div class="shop-panel shop-panel-right">
        <div class="shop-panel-header">
          <h4>📦 倉庫から陳列</h4>
          ${isFull ? '<span class="shop-shelf-full-badge">棚がいっぱい</span>' : ''}
        </div>
        <div class="shop-inv-filters">
          <button class="shop-filter-btn ${this.shopFilter === 'craftable' ? 'active' : ''}" data-shop-filter="craftable">⚔️ クラフト品 <span class="shop-filter-count">${craftable.length}</span></button>
          <button class="shop-filter-btn ${this.shopFilter === 'material' ? 'active' : ''}" data-shop-filter="material">🪨 素材 <span class="shop-filter-count">${materials.length}</span></button>
          <button class="shop-filter-btn ${this.shopFilter === 'all' ? 'active' : ''}" data-shop-filter="all">すべて <span class="shop-filter-count">${items.length}</span></button>
        </div>
        <div class="shop-inv-scroll ${isFull ? 'shop-inv-disabled' : ''}">${invContent}</div>
      </div>
    `;

    // ── オートセル設定パネル ──
    const as = this.shop.autoSellRules;
    const autoSellPanel = `
      <div class="autosell-panel">
        <div class="autosell-header">
          <label class="autosell-toggle">
            <input type="checkbox" id="autosell-enabled" ${this.shop.autoSellEnabled ? 'checked' : ''} />
            <span class="autosell-toggle-label">🤖 オートセル</span>
          </label>
          <span class="autosell-desc">空き棚にルールに合うアイテムを自動陳列</span>
        </div>
        <div class="autosell-rules ${this.shop.autoSellEnabled ? '' : 'autosell-rules-disabled'}">
          <div class="autosell-rule">
            <span class="autosell-rule-label">対象:</span>
            <label class="autosell-cb"><input type="checkbox" data-as-type="equipment" ${as.types.includes('equipment') ? 'checked' : ''} /> ⚔️ 装備</label>
            <label class="autosell-cb"><input type="checkbox" data-as-type="consumable" ${as.types.includes('consumable') ? 'checked' : ''} /> 🧪 消耗品</label>
            <label class="autosell-cb"><input type="checkbox" data-as-type="accessory" ${as.types.includes('accessory') ? 'checked' : ''} /> 💎 アクセ</label>
            <label class="autosell-cb"><input type="checkbox" data-as-type="material" ${as.types.includes('material') ? 'checked' : ''} /> 🪨 素材</label>
          </div>
          <div class="autosell-rule">
            <span class="autosell-rule-label">最低品質:</span>
            <input type="range" id="autosell-min-q" min="0" max="80" step="10" value="${as.minQuality}" class="autosell-range" />
            <span id="autosell-min-q-val" class="autosell-range-val">Q${as.minQuality}+</span>
          </div>
          <div class="autosell-rule">
            <label class="autosell-cb"><input type="checkbox" id="autosell-exclude-traits" ${as.excludeTraits ? 'checked' : ''} /> 特性付きは陳列しない（装備用に温存）</label>
          </div>
        </div>
      </div>
    `;

    // ── 組み立て ──
    this.el.innerHTML = `
      <div class="shop-layout">
        ${customerBar}
        <div class="shop-columns">${leftPanel}${rightPanel}</div>
        ${autoSellPanel}
      </div>
    `;

    // ── イベントバインド ──
    this._bindEvents();
  }

  _bindEvents() {
    // 倉庫 → 陳列（カード全体クリック）
    this.el.querySelectorAll('.shop-displayable-card').forEach(card => {
      card.addEventListener('click', () => {
        if (this.shop.displayedItems.length >= this.shop.maxSlots) return;
        const uid = card.getAttribute('data-uid');
        this.shop.displayItem(uid);
        eventBus.emit('inventory:changed');
        eventBus.emit('item:displayed');
        this.render();
      });
    });

    // 陳列 → 取り下げ
    this.el.querySelectorAll('.displayed-glow').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        const uid = card.dataset.uid;
        if (!uid) return;
        this.shop.removeDisplayedItem(uid);
        eventBus.emit('inventory:changed');
        eventBus.emit('item:removed');
        this.render();
      });
    });

    // フィルター
    this.el.querySelectorAll('.shop-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.shopFilter = e.currentTarget.dataset.shopFilter;
        this.render();
      });
    });

    // オートセル設定
    const asEnabled = this.el.querySelector('#autosell-enabled');
    if (asEnabled) {
      asEnabled.addEventListener('change', () => {
        this.shop.autoSellEnabled = asEnabled.checked;
        this.render();
      });
    }
    this.el.querySelectorAll('[data-as-type]').forEach(cb => {
      cb.addEventListener('change', () => {
        const type = cb.dataset.asType;
        const types = this.shop.autoSellRules.types;
        if (cb.checked && !types.includes(type)) types.push(type);
        else if (!cb.checked) {
          const idx = types.indexOf(type);
          if (idx !== -1) types.splice(idx, 1);
        }
      });
    });
    const minQRange = this.el.querySelector('#autosell-min-q');
    const minQVal = this.el.querySelector('#autosell-min-q-val');
    if (minQRange) {
      minQRange.addEventListener('input', () => {
        this.shop.autoSellRules.minQuality = parseInt(minQRange.value);
        if (minQVal) minQVal.textContent = `Q${minQRange.value}+`;
      });
    }
    const excludeTraits = this.el.querySelector('#autosell-exclude-traits');
    if (excludeTraits) {
      excludeTraits.addEventListener('change', () => {
        this.shop.autoSellRules.excludeTraits = excludeTraits.checked;
      });
    }
  }

  /** 客タイマーのリアルタイム更新（毎フレーム） */
  updateCustomerTimers() {
    const customers = this.customers ? this.customers.getActiveCustomers() : [];
    customers.forEach(c => {
      const barEl = this.el.querySelector(`[data-customer-bar="${c.id}"]`);
      if (barEl) barEl.style.width = `${Math.max(0, (c.timer / c.maxTimer) * 100)}%`;
    });
  }
}
