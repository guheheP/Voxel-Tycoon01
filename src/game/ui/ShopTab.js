/**
 * ShopTab — お店タブ（リアルタイム客タイマー対応版）
 */
import { createItemCardHTML, createShopItemCardHTML, createDisplayedItemCardHTML } from './UIHelpers.js';
import { eventBus } from '../core/EventBus.js';
import { GameConfig } from '../data/config.js';

export class ShopTab {
  constructor(inventorySystem, shopSystem, customerSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.customers = customerSystem;
    this.el = document.querySelector('#tab-shop');
    this.shopFilter = 'craftable';
  }

  render() {
    let html = `<h3>🏪 お店の管理</h3>`;

    // お客さん表示
    const activeCustomers = this.customers ? this.customers.getActiveCustomers() : [];
    if (activeCustomers.length > 0) {
      html += `<div class="customer-section">`;
      html += `<h4>🔔 来店中のお客さん</h4>`;
      html += `<div class="customer-list">`;
      activeCustomers.forEach(c => {
        const pct = Math.max(0, (c.timer / c.maxTimer) * 100);
        html += `
          <div class="customer-card">
            <div class="customer-header">
              <span class="customer-name">${c.icon} ${c.name}</span>
              <span class="customer-timer" data-customer-id="${c.id}">⏳ 品定め中...</span>
            </div>
            <div class="customer-dialogue">「${c.dialogue}」</div>
            <div class="customer-demand">欲しいもの: ${c.demandTypes.map(t => {
              const labels = { equipment: '⚔️ 武具', consumable: '🧪 消耗品', accessory: '💎 アクセサリ', material: '🪨 素材' };
              return labels[t] || t;
            }).join('・')}</div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill customer-patience-bar" data-customer-bar="${c.id}" style="width:${pct}%"></div>
            </div>
          </div>
        `;
      });
      html += `</div></div>`;
    } else {
      html += `<div class="customer-empty">お客さんはまだ来ていません… 時間が経つと来店します。</div>`;
    }

    // 陳列中アイテム
    html += `<h4>📋 陳列中 (${this.shop.displayedItems.length} / ${this.shop.maxSlots})</h4>`;
    if (this.shop.displayedItems.length > 0) {
      html += `<div class="item-grid shop-displayed-grid">`;
      html += this.shop.displayedItems.map(i => createDisplayedItemCardHTML(i)).join('');
      html += `</div>`;
    } else {
      html += `<p class="shop-empty-message">陳列棚は空です。倉庫からアイテムを陳列しましょう！</p>`;
    }

    // 倉庫から陳列
    const items = this.inventory.getItems();
    const craftable = items.filter(i => i.type !== 'material');
    const materials = items.filter(i => i.type === 'material');

    html += `<h4>📦 倉庫から陳列する</h4>`;
    if (items.length > 0) {
      html += `<div class="shop-inv-filters">`;
      html += `<button class="btn btn-sm shop-filter-btn ${this.shopFilter === 'craftable' ? 'active' : ''}" data-shop-filter="craftable">⚔️ クラフト品 (${craftable.length})</button>`;
      html += `<button class="btn btn-sm shop-filter-btn ${this.shopFilter === 'material' ? 'active' : ''}" data-shop-filter="material">🪨 素材 (${materials.length})</button>`;
      html += `<button class="btn btn-sm shop-filter-btn ${this.shopFilter === 'all' ? 'active' : ''}" data-shop-filter="all">すべて (${items.length})</button>`;
      html += `</div>`;

      let displayItems;
      if (this.shopFilter === 'craftable') displayItems = craftable;
      else if (this.shopFilter === 'material') displayItems = materials;
      else displayItems = items;

      displayItems = [...displayItems].sort((a, b) => b.quality - a.quality);

      if (displayItems.length > 0) {
        html += `<div class="item-grid">`;
        html += displayItems.map(i => createShopItemCardHTML(i)).join('');
        html += `</div>`;
      } else {
        html += `<p class="shop-empty-message">このカテゴリのアイテムはありません。</p>`;
      }
    } else {
      html += `<p class="shop-empty-message">倉庫にアイテムがありません。冒険者を派遣して素材を集めましょう！</p>`;
    }

    this.el.innerHTML = html;

    // イベントバインド
    this.el.querySelectorAll('.btn-display-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const uid = e.currentTarget.getAttribute('data-uid');
        this.shop.displayItem(uid);
        eventBus.emit('inventory:changed');
        this.render();
      });
    });

    this.el.querySelectorAll('.shop-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.shopFilter = e.currentTarget.dataset.shopFilter;
        this.render();
      });
    });
  }

  /** 客タイマーのリアルタイム更新（毎フレーム） */
  updateCustomerTimers() {
    const customers = this.customers ? this.customers.getActiveCustomers() : [];
    customers.forEach(c => {
      const timerEl = this.el.querySelector(`[data-customer-id="${c.id}"]`);
      if (timerEl && c.timer < 5) timerEl.textContent = `⏳ もうすぐ帰る...`;

      const barEl = this.el.querySelector(`[data-customer-bar="${c.id}"]`);
      if (barEl) barEl.style.width = `${Math.max(0, (c.timer / c.maxTimer) * 100)}%`;
    });
  }
}
