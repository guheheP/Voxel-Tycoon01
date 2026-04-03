/**
 * InventoryTab — 倉庫タブ（カテゴリフィルタ・ソート対応版）
 */
import { createItemCardHTML, getTypeInfo } from './UIHelpers.js';

export class InventoryTab {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.el = document.getElementById('inventory-list');
    this.filter = 'all';  // 'all' | 'material' | 'equipment' | 'consumable' | 'accessory'
    this.sort = 'type';   // 'type' | 'quality' | 'name'
  }

  render() {
    let items = this.inventory.getItems();

    // カテゴリーフィルタ
    const filtered = this.filter === 'all'
      ? items
      : items.filter(i => i.type === this.filter);

    // ソート
    const sorted = [...filtered].sort((a, b) => {
      if (this.sort === 'quality') return b.quality - a.quality;
      if (this.sort === 'name') return a.name.localeCompare(b.name);
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
      { key: 'all', label: '📦 すべて' },
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
    html += `</div></div>`;

    if (sorted.length === 0) {
      html += `<p class="inv-empty">${this.filter === 'all' ? '所持品がありません。' : 'このカテゴリのアイテムはありません。'}</p>`;
    } else {
      html += `<div class="item-grid">`;
      html += sorted.map(i => createItemCardHTML(i)).join('');
      html += `</div>`;
    }

    this.el.innerHTML = html;

    // Bind filter clicks
    this.el.querySelectorAll('.inv-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filter = e.currentTarget.dataset.filter;
        this.render();
      });
    });
    // Bind sort clicks
    this.el.querySelectorAll('.inv-sort-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.sort = e.currentTarget.dataset.sort;
        this.render();
      });
    });
  }
}
