/**
 * CraftingPuzzle — 素材配置パズル
 *
 * 3x3 グリッドに素材タイルを配置し、
 * 隣接タイルのカテゴリ相性（シナジー）で品質ボーナスを獲得するミニゲーム。
 *
 * - タイル数: 7 (グリッド9マスのうち2マスは空き)
 * - レシピ素材 + ランダムでタイル生成
 * - 制限時間なし / 配置確定でスコア計算
 */

import { MaterialCategories, ItemBlueprints, Recipes } from '../data/items.js';
import { isCategorySlot, getCategoryId } from '../ItemSystem.js';

const G = 3;          // grid size
const TILE_COUNT = 7;

/* ── Category colors ── */
const CAT_COLOR = {
  wood_type:    '#8b7355',
  stone_type:   '#8a8a7a',
  ore_type:     '#c4a87a',
  herb_type:    '#7daa68',
  cloth_type:   '#b48cb4',
  crystal_type: '#7ab0c4',
  monster_type: '#c46a5a',
  gem_type:     '#a08cc8',
  essence_type: '#e8b84b',
};

/* ── Synergy table (keys alphabetically sorted) ── */
const SYN_TABLE = {
  'cloth_type+gem_type':      { name: '装飾の美',   pts: 2, icon: '👑' },
  'cloth_type+herb_type':     { name: '薬布',       pts: 2, icon: '🩹' },
  'cloth_type+wood_type':     { name: '木綿の織り', pts: 2, icon: '🧶' },
  'crystal_type+essence_type':{ name: '魔力収束',   pts: 3, icon: '🌟' },
  'crystal_type+gem_type':    { name: '輝石共鳴',   pts: 2, icon: '✨' },
  'crystal_type+herb_type':   { name: '薬術融合',   pts: 2, icon: '⚗️' },
  'crystal_type+ore_type':    { name: '結晶精錬',   pts: 3, icon: '🔮' },
  'crystal_type+stone_type':  { name: '岩晶融合',   pts: 1, icon: '💠' },
  'essence_type+gem_type':    { name: '魔石の力',   pts: 3, icon: '💫' },
  'essence_type+herb_type':   { name: '蒸留の妙',   pts: 3, icon: '🧪' },
  'essence_type+monster_type':{ name: '魔獣の力',   pts: 2, icon: '🐉' },
  'gem_type+ore_type':        { name: '宝飾鍛造',   pts: 2, icon: '💍' },
  'herb_type+monster_type':   { name: '調薬術',     pts: 2, icon: '🧬' },
  'herb_type+wood_type':      { name: '自然の調和', pts: 3, icon: '🌱' },
  'monster_type+ore_type':    { name: '獣骨鍛造',   pts: 2, icon: '🔨' },
  'ore_type+stone_type':      { name: '鉱脈共鳴',   pts: 3, icon: '⛰️' },
  'ore_type+wood_type':       { name: '道具作り',   pts: 1, icon: '🪓' },
  'stone_type+wood_type':     { name: '基礎工芸',   pts: 1, icon: '🏠' },
};

const SCORE_TIERS = [
  { min: 0,  bonus: 0, rank: 'なし', color: '#888' },
  { min: 4,  bonus: 1, rank: '銅',   color: '#c4a87a' },
  { min: 8,  bonus: 2, rank: '銀',   color: '#c0c0c0' },
  { min: 13, bonus: 3, rank: '金',   color: '#e8b84b' },
  { min: 19, bonus: 5, rank: '極',   color: '#e87ae8' },
];

function synKey(a, b) { return a < b ? `${a}+${b}` : `${b}+${a}`; }

function getSyn(a, b) {
  if (a === b) return { name: '同種共鳴', pts: 2, icon: '🔄' };
  return SYN_TABLE[synKey(a, b)] || null;
}

function synColors(pts) {
  if (pts >= 3) return { fg: '#7daa68', bg: 'rgba(125,170,104,0.15)', bd: 'rgba(125,170,104,0.3)' };
  if (pts >= 2) return { fg: '#e8b84b', bg: 'rgba(232,184,75,0.15)',  bd: 'rgba(232,184,75,0.3)' };
  return { fg: '#8a8a7a', bg: 'rgba(138,138,122,0.15)', bd: 'rgba(138,138,122,0.3)' };
}

let _uid = 0;

export class CraftingPuzzle {
  constructor() {
    this.overlay = null;
    this.resolve = null;
  }

  /**
   * @param {string} recipeName
   * @param {string} [recipeId]
   * @returns {Promise<{bonus:number, score:number, rank:string, rankColor:string, skipped:boolean}>}
   */
  start(recipeName, recipeId) {
    return new Promise(resolve => {
      this.resolve = resolve;
      this.recipeName = recipeName;
      this.grid = Array.from({ length: G }, () => Array(G).fill(null));
      this.pool = this._genTiles(recipeId);
      this.sel = null;   // selected pool tile
      this.score = 0;
      this.activeSyn = [];
      this._build();
    });
  }

  /* ═══════════════════════════════════════════
     Tile generation
     ═══════════════════════════════════════════ */

  _genTiles(recipeId) {
    const tiles = [];
    const recipe = recipeId ? Recipes[recipeId] : null;
    const seen = new Set();

    if (recipe) {
      for (const mat of recipe.materials) {
        let cat;
        if (isCategorySlot(mat)) cat = getCategoryId(mat);
        else cat = ItemBlueprints[mat]?.category;
        if (cat && MaterialCategories[cat]) {
          tiles.push(this._mkTile(cat));
          seen.add(cat);
        }
      }
    }

    const allCats = Object.keys(MaterialCategories);
    while (tiles.length < TILE_COUNT) {
      const pool = seen.size < 4 ? allCats.filter(c => !seen.has(c)) : allCats;
      const src = pool.length ? pool : allCats;
      const cat = src[Math.floor(Math.random() * src.length)];
      tiles.push(this._mkTile(cat));
      seen.add(cat);
    }

    // Shuffle
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    return tiles;
  }

  _mkTile(catId) {
    const c = MaterialCategories[catId];
    return { id: ++_uid, cat: catId, icon: c.icon, name: c.name };
  }

  /* ═══════════════════════════════════════════
     UI construction
     ═══════════════════════════════════════════ */

  _build() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'puzzle-overlay';

    // ── Board cells (3x3 placed in 5x5 interleaved grid) ──
    let board = '';
    for (let r = 0; r < G; r++) {
      for (let c = 0; c < G; c++) {
        board += `<div class="pz-cell pz-cell-empty" data-r="${r}" data-c="${c}"
                       style="grid-row:${r * 2 + 1};grid-column:${c * 2 + 1}"></div>`;
      }
    }
    // Horizontal synergy slots
    for (let r = 0; r < G; r++) {
      for (let c = 0; c < G - 1; c++) {
        board += `<div class="pz-syn pz-syn-h" data-sr="${r}" data-sc="${c}"
                       style="grid-row:${r * 2 + 1};grid-column:${c * 2 + 2}"></div>`;
      }
    }
    // Vertical synergy slots
    for (let r = 0; r < G - 1; r++) {
      for (let c = 0; c < G; c++) {
        board += `<div class="pz-syn pz-syn-v" data-sr="${r}" data-sc="${c}"
                       style="grid-row:${r * 2 + 2};grid-column:${c * 2 + 1}"></div>`;
      }
    }

    this.overlay.innerHTML = `
      <div class="puzzle-container">
        <div class="puzzle-header">
          <h3>⚗️ 素材配置 — ${this.recipeName}</h3>
        </div>
        <div class="puzzle-body">
          <div class="pz-left">
            <div class="pz-board">${board}</div>
            <div class="pz-syn-list" id="pz-syn-list">
              <span class="pz-syn-empty">タイルを配置するとシナジーが表示されます</span>
            </div>
          </div>
          <div class="puzzle-sidebar">
            <div class="pz-panel">
              <div class="pz-panel-label">素材タイル</div>
              <div class="pz-pool" id="pz-pool"></div>
            </div>
            <div class="pz-panel">
              <div class="pz-panel-label">シナジースコア</div>
              <div class="pz-score-val" id="pz-score">0</div>
              <div class="pz-bonus-bar"><div class="pz-bonus-fill" id="pz-bonus-fill"></div></div>
              <div class="pz-tier" id="pz-tier">品質ボーナス: +0</div>
            </div>
            <button class="btn primary pz-confirm-btn" id="pz-confirm" disabled>✨ 完成！</button>
            <button class="btn pz-skip-btn" id="pz-skip">スキップ (ボーナスなし)</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    this._bindEvents();
    this._updateUI();
    requestAnimationFrame(() => this.overlay.classList.add('puzzle-visible'));
  }

  _bindEvents() {
    // Board — event delegation
    this.overlay.querySelector('.pz-board').addEventListener('click', e => {
      const cell = e.target.closest('.pz-cell');
      if (cell) this._onCellClick(+cell.dataset.r, +cell.dataset.c);
    });

    // Pool — event delegation
    this.overlay.querySelector('#pz-pool').addEventListener('click', e => {
      const el = e.target.closest('.pz-pool-tile');
      if (el) this._onPoolClick(+el.dataset.tid);
    });

    this.overlay.querySelector('#pz-confirm').addEventListener('click', () => this._finish(false));
    this.overlay.querySelector('#pz-skip').addEventListener('click', () => this._finish(true));
  }

  /* ═══════════════════════════════════════════
     Interaction
     ═══════════════════════════════════════════ */

  _onPoolClick(tid) {
    const tile = this.pool.find(t => t.id === tid);
    if (!tile) return;
    this.sel = (this.sel === tile) ? null : tile;
    this._updateUI();
  }

  _onCellClick(r, c) {
    if (this.grid[r][c]) {
      // Return placed tile to pool
      this.pool.push(this.grid[r][c]);
      this.grid[r][c] = null;
      this.sel = null;
    } else if (this.sel) {
      // Place selected tile
      this.grid[r][c] = this.sel;
      this.pool = this.pool.filter(t => t !== this.sel);
      this.sel = null;
    } else {
      return;
    }
    this._recalc();
    this._updateUI();
  }

  /* ═══════════════════════════════════════════
     Scoring
     ═══════════════════════════════════════════ */

  _recalc() {
    this.activeSyn = [];
    this.score = 0;
    for (let r = 0; r < G; r++) {
      for (let c = 0; c < G; c++) {
        if (!this.grid[r][c]) continue;
        // Right neighbor
        if (c + 1 < G && this.grid[r][c + 1]) {
          const s = getSyn(this.grid[r][c].cat, this.grid[r][c + 1].cat);
          if (s) {
            this.activeSyn.push({ ...s, r, c, dir: 'h' });
            this.score += s.pts;
          }
        }
        // Bottom neighbor
        if (r + 1 < G && this.grid[r + 1][c]) {
          const s = getSyn(this.grid[r][c].cat, this.grid[r + 1][c].cat);
          if (s) {
            this.activeSyn.push({ ...s, r, c, dir: 'v' });
            this.score += s.pts;
          }
        }
      }
    }
  }

  _getTier() {
    let tier = SCORE_TIERS[0];
    for (const t of SCORE_TIERS) if (this.score >= t.min) tier = t;
    return tier;
  }

  /* ═══════════════════════════════════════════
     UI update
     ═══════════════════════════════════════════ */

  _updateUI() {
    this._updateGrid();
    this._updateSynergyIndicators();
    this._updatePool();
    this._updateScore();
  }

  _updateGrid() {
    for (let r = 0; r < G; r++) {
      for (let c = 0; c < G; c++) {
        const el = this.overlay.querySelector(`.pz-cell[data-r="${r}"][data-c="${c}"]`);
        const t = this.grid[r][c];
        if (t) {
          const clr = CAT_COLOR[t.cat] || '#888';
          el.className = 'pz-cell pz-cell-filled';
          el.style.borderColor = clr;
          el.style.background = clr + '22';
          el.innerHTML = `<span class="pz-cell-icon">${t.icon}</span><span class="pz-cell-lbl">${t.name}</span>`;
        } else {
          el.className = `pz-cell pz-cell-empty${this.sel ? ' pz-cell-hint' : ''}`;
          el.style.borderColor = '';
          el.style.background = '';
          el.innerHTML = '';
        }
      }
    }
  }

  _updateSynergyIndicators() {
    // Horizontal
    for (let r = 0; r < G; r++) {
      for (let c = 0; c < G - 1; c++) {
        const el = this.overlay.querySelector(`.pz-syn-h[data-sr="${r}"][data-sc="${c}"]`);
        const syn = this.activeSyn.find(s => s.dir === 'h' && s.r === r && s.c === c);
        if (syn) {
          const sc = synColors(syn.pts);
          el.className = 'pz-syn pz-syn-h pz-syn-active';
          el.style.color = sc.fg;
          el.innerHTML = `<span class="pz-syn-icon">${syn.icon}</span>`;
          el.title = `${syn.name} +${syn.pts}`;
        } else {
          el.className = 'pz-syn pz-syn-h';
          el.style.color = '';
          el.innerHTML = '';
          el.title = '';
        }
      }
    }
    // Vertical
    for (let r = 0; r < G - 1; r++) {
      for (let c = 0; c < G; c++) {
        const el = this.overlay.querySelector(`.pz-syn-v[data-sr="${r}"][data-sc="${c}"]`);
        const syn = this.activeSyn.find(s => s.dir === 'v' && s.r === r && s.c === c);
        if (syn) {
          const sc = synColors(syn.pts);
          el.className = 'pz-syn pz-syn-v pz-syn-active';
          el.style.color = sc.fg;
          el.innerHTML = `<span class="pz-syn-icon">${syn.icon}</span>`;
          el.title = `${syn.name} +${syn.pts}`;
        } else {
          el.className = 'pz-syn pz-syn-v';
          el.style.color = '';
          el.innerHTML = '';
          el.title = '';
        }
      }
    }

    // Synergy tag list
    const listEl = this.overlay.querySelector('#pz-syn-list');
    if (this.activeSyn.length > 0) {
      listEl.innerHTML = this.activeSyn.map(s => {
        const sc = synColors(s.pts);
        return `<span class="pz-syn-tag" style="background:${sc.bg};color:${sc.fg};border-color:${sc.bd}">${s.icon} ${s.name} +${s.pts}</span>`;
      }).join('');
    } else {
      listEl.innerHTML = '<span class="pz-syn-empty">タイルを配置するとシナジーが表示されます</span>';
    }
  }

  _updatePool() {
    const el = this.overlay.querySelector('#pz-pool');
    el.innerHTML = this.pool.map(t => {
      const sel = this.sel === t ? ' pz-pool-sel' : '';
      const clr = CAT_COLOR[t.cat] || '#888';
      return `<div class="pz-pool-tile${sel}" data-tid="${t.id}" style="--tc:${clr}">` +
        `<span class="pz-pool-icon">${t.icon}</span>` +
        `<span class="pz-pool-name">${t.name}</span></div>`;
    }).join('');
  }

  _updateScore() {
    const tier = this._getTier();

    const scoreEl = this.overlay.querySelector('#pz-score');
    scoreEl.textContent = this.score;
    scoreEl.style.color = tier.color;

    const fillEl = this.overlay.querySelector('#pz-bonus-fill');
    const max = SCORE_TIERS[SCORE_TIERS.length - 1].min;
    fillEl.style.width = `${Math.min(100, (this.score / max) * 100)}%`;
    fillEl.style.background = tier.color;

    const tierEl = this.overlay.querySelector('#pz-tier');
    tierEl.textContent = `品質ボーナス: +${tier.bonus}`;
    tierEl.style.color = tier.color;

    // Confirm button
    const placed = this.grid.flat().filter(Boolean).length;
    this.overlay.querySelector('#pz-confirm').disabled = placed === 0;
  }

  /* ═══════════════════════════════════════════
     Finish & result
     ═══════════════════════════════════════════ */

  _finish(skipped) {
    const tier = skipped ? SCORE_TIERS[0] : this._getTier();
    const result = {
      bonus: tier.bonus,
      score: skipped ? 0 : this.score,
      rank: skipped ? 'スキップ' : tier.rank,
      rankColor: tier.color,
      skipped,
    };
    this._showResult(result);
  }

  _showResult(result) {
    const container = this.overlay.querySelector('.puzzle-container');

    const synTags = result.skipped ? '' : this.activeSyn.map(s => {
      const sc = synColors(s.pts);
      return `<span class="pz-syn-tag" style="background:${sc.bg};color:${sc.fg};border-color:${sc.bd}">${s.icon} ${s.name} +${s.pts}</span>`;
    }).join('');

    container.innerHTML = `
      <div class="puzzle-result">
        <h3>${result.skipped ? '⏭️ スキップ' : '✨ 配置完了！'}</h3>
        <div class="puzzle-result-stats">
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">シナジー数</span>
            <span class="puzzle-result-value">${result.skipped ? '-' : this.activeSyn.length}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">スコア</span>
            <span class="puzzle-result-value">${result.score}</span>
          </div>
        </div>
        ${synTags ? `<div class="pz-result-tags">${synTags}</div>` : ''}
        <div class="puzzle-result-bonus" style="color:${result.rankColor}">
          <div class="puzzle-result-rank">${result.rank}</div>
          <div class="puzzle-result-bonus-value">品質ボーナス: +${result.bonus}</div>
        </div>
        <button class="btn primary puzzle-result-btn" id="puzzle-done">OK</button>
      </div>
    `;

    this.overlay.querySelector('#puzzle-done').addEventListener('click', () => {
      this.overlay.classList.remove('puzzle-visible');
      setTimeout(() => {
        this.overlay.remove();
        this.overlay = null;
      }, 300);
      if (this.resolve) this.resolve(result);
    });
  }
}
