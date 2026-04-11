/**
 * CollectionTab — 図鑑タブ
 * 発見したアイテム・素材・ボス・特性を一覧表示
 */
import { ItemBlueprints, TraitDefs } from '../data/items.js';
import { AreaDefs } from '../data/areas.js';
import { getQualityTier, getTypeInfo } from './UIHelpers.js';
import { assetPath } from '../core/assetPath.js';

export class CollectionTab {
  constructor(collectionSystem) {
    this.collection = collectionSystem;
    this.el = document.querySelector('#tab-collection');
    this.subTab = 'items';  // 'items' | 'areas' | 'traits'
    this.typeFilter = 'all'; // 'all' | 'material' | 'equipment' | 'consumable' | 'accessory'
    // C2: HTML キャッシュ — 発見状態が変わらない限り再構築不要
    this._htmlCache = null;
    this._cacheKey = null;
  }

  /** 現在の状態のキャッシュキーを生成 */
  _computeCacheKey() {
    const col = this.collection;
    // 発見数はアイテム/特性/エリア/ボス全てを含める
    const itemCount = Object.keys(col.discoveredItems).length;
    const traitCount = col.discoveredTraits.size;
    const areaCount = col.discoveredAreas.size;
    const bossCount = col.defeatedBosses.size;
    return `${this.subTab}:${this.typeFilter}:${itemCount}:${traitCount}:${areaCount}:${bossCount}`;
  }

  render() {
    if (!this.el) return;

    // C2: キャッシュチェック — 発見状態が同じなら HTML 再構築をスキップ
    const cacheKey = this._computeCacheKey();
    if (cacheKey === this._cacheKey && this._htmlCache !== null) {
      if (this.el.innerHTML !== this._htmlCache) {
        this.el.innerHTML = this._htmlCache;
        this._bindEvents();
      }
      return;
    }

    const col = this.collection;
    const rate = col.getCompletionRate();
    const pct = Math.floor(rate * 100);
    const stats = col.getStatsByType();

    // サブタブ
    const subTabs = [
      { key: 'items', label: '📦 アイテム図鑑' },
      { key: 'areas', label: '🗺️ エリア' },
      { key: 'traits', label: '✨ 特性' },
    ];

    let html = `
      <div class="coll-header">
        <div class="coll-rate">
          <span class="coll-rate-label">図鑑収集率</span>
          <div class="coll-rate-bar"><div class="coll-rate-fill" style="width:${pct}%"></div></div>
          <span class="coll-rate-pct">${pct}%</span>
        </div>
        <div class="coll-type-stats">
          ${Object.entries(stats).map(([type, s]) => {
            const info = getTypeInfo(type);
            return `<span class="coll-type-stat">${info.icon} ${s.found}/${s.total}</span>`;
          }).join('')}
        </div>
      </div>
      <div class="coll-subtabs">
        ${subTabs.map(t => `<button class="btn btn-sm coll-subtab ${this.subTab === t.key ? 'active' : ''}" data-subtab="${t.key}">${t.label}</button>`).join('')}
      </div>
    `;

    if (this.subTab === 'items') {
      html += this._renderItemsTab(stats);
    } else if (this.subTab === 'areas') {
      html += this._renderAreasTab();
    } else if (this.subTab === 'traits') {
      html += this._renderTraitsTab();
    }

    // C2: 生成した HTML をキャッシュしてから描画
    this._htmlCache = html;
    this._cacheKey = cacheKey;
    this.el.innerHTML = html;
    this._bindEvents();
  }

  _renderItemsTab(stats) {
    const col = this.collection;

    // タイプフィルタ
    let html = `<div class="coll-filters">`;
    const typeFilters = [
      { key: 'all', label: 'すべて' },
      { key: 'material', label: '🪨 素材' },
      { key: 'equipment', label: '⚔️ 装備' },
      { key: 'consumable', label: '🧪 消耗品' },
      { key: 'accessory', label: '💎 アクセ' },
    ];
    typeFilters.forEach(f => {
      html += `<button class="btn btn-xs coll-type-filter ${this.typeFilter === f.key ? 'active' : ''}" data-coll-type="${f.key}">${f.label}</button>`;
    });
    html += `</div>`;

    // アイテム一覧
    const allItems = Object.entries(ItemBlueprints)
      .filter(([, bp]) => this.typeFilter === 'all' || bp.type === this.typeFilter)
      .sort((a, b) => {
        // 発見済みを先に、未発見を後に
        const aFound = col.discoveredItems[a[0]] ? 1 : 0;
        const bFound = col.discoveredItems[b[0]] ? 1 : 0;
        if (aFound !== bFound) return bFound - aFound;
        // タイプ順 → Tier順
        const typeOrder = { material: 0, equipment: 1, consumable: 2, accessory: 3 };
        const td = (typeOrder[a[1].type] || 0) - (typeOrder[b[1].type] || 0);
        if (td !== 0) return td;
        return (a[1].tier || 1) - (b[1].tier || 1);
      });

    html += `<div class="coll-grid">`;
    for (const [id, bp] of allItems) {
      const entry = col.discoveredItems[id];
      const found = !!entry;
      const typeInfo = getTypeInfo(bp.type);
      const imgUrl = bp.image ? assetPath(bp.image) : null;

      if (found) {
        const bestTier = getQualityTier(entry.bestQuality);
        html += `
          <div class="coll-card coll-card-found ${typeInfo.css}">
            <div class="coll-card-img">
              ${imgUrl ? `<img src="${imgUrl}" alt="${bp.name}" />` : `<span>${typeInfo.emoji}</span>`}
            </div>
            <div class="coll-card-body">
              <span class="coll-card-name">${bp.name}</span>
              <span class="coll-card-meta">${typeInfo.icon} ${bestTier.icon} Best Q${entry.bestQuality}</span>
              <span class="coll-card-count">入手: ${entry.count}回</span>
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="coll-card coll-card-unknown">
            <div class="coll-card-img coll-card-img-unknown"><span>？</span></div>
            <div class="coll-card-body">
              <span class="coll-card-name">？？？</span>
              <span class="coll-card-meta">${typeInfo.icon} 未発見</span>
            </div>
          </div>
        `;
      }
    }
    html += `</div>`;
    return html;
  }

  _renderAreasTab() {
    const col = this.collection;
    let html = `<div class="coll-area-list">`;

    for (const [id, area] of Object.entries(AreaDefs)) {
      const discovered = col.discoveredAreas.has(id);
      const boss = area.boss;
      const bossDefeated = boss ? col.defeatedBosses.has(boss.id) : false;

      if (discovered || area.unlocked) {
        html += `
          <div class="coll-area-card coll-area-found">
            <span class="coll-area-icon">${area.icon}</span>
            <div class="coll-area-info">
              <span class="coll-area-name">${area.name}</span>
              <span class="coll-area-desc">${area.description || ''}</span>
              ${boss ? `<span class="coll-area-boss ${bossDefeated ? 'coll-boss-defeated' : ''}">${boss.icon || '👹'} ${boss.name} ${bossDefeated ? '✅ 撃破済み' : '❓ 未撃破'}</span>` : ''}
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="coll-area-card coll-area-locked">
            <span class="coll-area-icon">🔒</span>
            <div class="coll-area-info">
              <span class="coll-area-name">？？？</span>
              <span class="coll-area-desc">未解放のエリア</span>
            </div>
          </div>
        `;
      }
    }

    html += `</div>`;
    return html;
  }

  _renderTraitsTab() {
    const col = this.collection;
    const allTraits = Object.entries(TraitDefs);
    const found = allTraits.filter(([name]) => col.discoveredTraits.has(name));
    const notFound = allTraits.filter(([name]) => !col.discoveredTraits.has(name));

    let html = `<div class="coll-trait-summary">${found.length}/${allTraits.length} 特性を発見</div>`;
    html += `<div class="coll-trait-grid">`;

    for (const [name, def] of found) {
      const rarityClass = `trait-rarity-${def.rarity || 'common'}`;
      html += `
        <div class="coll-trait-card coll-trait-found">
          <span class="trait-badge ${rarityClass}">${name}</span>
          <span class="coll-trait-desc">${def.description || ''}</span>
          <span class="coll-trait-rarity">${def.rarity || 'common'}</span>
        </div>
      `;
    }

    for (const [name, def] of notFound) {
      html += `
        <div class="coll-trait-card coll-trait-unknown">
          <span class="trait-badge trait-rarity-unknown">？？？</span>
          <span class="coll-trait-desc">未発見の特性</span>
          <span class="coll-trait-rarity">${def.rarity || 'common'}</span>
        </div>
      `;
    }

    html += `</div>`;
    return html;
  }

  _bindEvents() {
    // サブタブ
    this.el.querySelectorAll('.coll-subtab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.subTab = btn.dataset.subtab;
        this.render();
      });
    });
    // タイプフィルタ
    this.el.querySelectorAll('.coll-type-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        this.typeFilter = btn.dataset.collType;
        this.render();
      });
    });
  }
}
