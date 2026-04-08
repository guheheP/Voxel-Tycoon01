/**
 * CraftingPuzzle — ブロック配置パズル v3
 *
 * ■ 各セルが独立した素材カテゴリを持つマルチカラーミノ
 * ■ レシピ素材からタイル構成を生成 + エッセンスボーナスピース
 * ■ 全隣接(ピース内含む)をスコア対象にし戦略性を強化
 * ■ 中心アンカー配置 / ホイール・右クリック・Rキー回転
 */

import { MaterialCategories, ItemBlueprints, Recipes } from '../data/items.js';
import { isCategorySlot, getCategoryId } from '../ItemSystem.js';
import { eventBus } from '../core/EventBus.js';

const ROWS = 4, COLS = 4;

const INERT = '_inert'; // 効果なしブロック

const CAT_COLOR = {
  wood_type: '#8b7355', stone_type: '#8a8a7a', ore_type: '#c4a87a',
  herb_type: '#7daa68', cloth_type: '#b48cb4', crystal_type: '#7ab0c4',
  monster_type: '#c46a5a', gem_type: '#a08cc8', essence_type: '#e8b84b',
  [INERT]: '#555',
};
const CAT_ICON = { [INERT]: '⬜' };
for (const [k, v] of Object.entries(MaterialCategories)) CAT_ICON[k] = v.icon;

const TETROS = [
  [[0,0],[0,1],[0,2],[1,1]],  // T
  [[0,0],[1,0],[2,0],[2,1]],  // L
  [[0,1],[1,1],[2,0],[2,1]],  // J
  [[0,1],[0,2],[1,0],[1,1]],  // S
  [[0,0],[0,1],[1,1],[1,2]],  // Z
  [[0,0],[0,1],[1,0],[1,1]],  // O
  [[0,0],[0,1],[0,2],[0,3]],  // I
];
const TRIS = [
  [[0,0],[0,1],[0,2]],
  [[0,0],[1,0],[1,1]],
  [[0,0],[0,1],[1,0]],
];
const SINGLE = [[[0,0]]]; // essence wildcard

const SYN_TABLE = {
  'cloth_type+gem_type':       { name: '装飾の美',   pts:  2, icon: '👑' },
  'cloth_type+herb_type':      { name: '薬布',       pts:  2, icon: '🩹' },
  'cloth_type+wood_type':      { name: '木綿の織り', pts:  2, icon: '🧶' },
  'crystal_type+essence_type': { name: '魔力収束',   pts:  3, icon: '🌟' },
  'crystal_type+gem_type':     { name: '輝石共鳴',   pts:  2, icon: '✨' },
  'crystal_type+herb_type':    { name: '薬術融合',   pts:  2, icon: '⚗️' },
  'crystal_type+ore_type':     { name: '結晶精錬',   pts:  3, icon: '🔮' },
  'crystal_type+stone_type':   { name: '岩晶融合',   pts:  1, icon: '💠' },
  'essence_type+gem_type':     { name: '魔石の力',   pts:  3, icon: '💫' },
  'essence_type+herb_type':    { name: '蒸留の妙',   pts:  3, icon: '🧪' },
  'essence_type+monster_type': { name: '魔獣の力',   pts:  2, icon: '🐉' },
  'gem_type+ore_type':         { name: '宝飾鍛造',   pts:  2, icon: '💍' },
  'herb_type+monster_type':    { name: '調薬術',     pts:  2, icon: '🧬' },
  'herb_type+wood_type':       { name: '自然の調和', pts:  3, icon: '🌱' },
  'monster_type+ore_type':     { name: '獣骨鍛造',   pts:  2, icon: '🔨' },
  'ore_type+stone_type':       { name: '鉱脈共鳴',   pts:  3, icon: '⛰️' },
  'ore_type+wood_type':        { name: '道具作り',   pts:  1, icon: '🪓' },
  'stone_type+wood_type':      { name: '基礎工芸',   pts:  1, icon: '🏠' },
  'cloth_type+monster_type':   { name: '素材の損傷', pts: -1, icon: '💔' },
  'cloth_type+stone_type':     { name: '圧迫',       pts: -1, icon: '🪨' },
  'crystal_type+wood_type':    { name: '結晶の浸食', pts: -1, icon: '🌀' },
  'essence_type+stone_type':   { name: '精霊の不和', pts: -2, icon: '💥' },
  'gem_type+monster_type':     { name: '獣の反発',   pts: -2, icon: '💢' },
};

const SCORE_TIERS = [
  { min: 0,  bonus: 0, rank: 'なし', color: '#888' },
  { min: 6,  bonus: 1, rank: '銅',   color: '#c4a87a' },
  { min: 12, bonus: 2, rank: '銀',   color: '#c0c0c0' },
  { min: 19, bonus: 3, rank: '金',   color: '#e8b84b' },
  { min: 27, bonus: 5, rank: '極',   color: '#e87ae8' },
];
const COMPLETE_BONUS = 3;

function rotateCW(cells) {
  const rot = cells.map(([r, c]) => [c, -r]);
  const mr = Math.min(...rot.map(([r]) => r));
  const mc = Math.min(...rot.map(([, c]) => c));
  return rot.map(([r, c]) => [r - mr, c - mc]);
}
function getCells(base, rotation) {
  let c = base.map(v => [...v]);
  for (let i = 0; i < (rotation % 4); i++) c = rotateCW(c);
  return c;
}
function centroid(cells) {
  const sr = cells.reduce((s, [r]) => s + r, 0);
  const sc = cells.reduce((s, [, c]) => s + c, 0);
  return [Math.round(sr / cells.length), Math.round(sc / cells.length)];
}
function synKey(a, b) { return a < b ? `${a}+${b}` : `${b}+${a}`; }
function getSyn(a, b) { return a === b ? null : (SYN_TABLE[synKey(a, b)] || null); }
function synColors(pts) {
  if (pts >= 3) return { fg: '#7daa68', bg: 'rgba(125,170,104,0.15)', bd: 'rgba(125,170,104,0.3)' };
  if (pts >= 2) return { fg: '#e8b84b', bg: 'rgba(232,184,75,0.15)',  bd: 'rgba(232,184,75,0.3)' };
  if (pts >= 1) return { fg: '#8a8a7a', bg: 'rgba(138,138,122,0.15)', bd: 'rgba(138,138,122,0.3)' };
  return { fg: '#c46a5a', bg: 'rgba(196,106,90,0.15)', bd: 'rgba(196,106,90,0.3)' };
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }

let _uid = 0;

export class CraftingPuzzle {
  constructor() { this.overlay = null; this.resolve = null; }

  start(recipeName, recipeId) {
    return new Promise(resolve => {
      this.resolve = resolve;
      this.recipeName = recipeName;
      this._init(recipeId);
      this._build();
    });
  }

  /* ═══ Init ═══ */

  _init(recipeId) {
    // _genPieces sets this._gridRows / _gridCols / _bonusCapExtra
    this.pieces = this._genPieces(recipeId);
    this.R = this._gridRows; this.C = this._gridCols;
    this.grid = Array.from({ length: this.R }, () => Array(this.C).fill(null));
    this.selPiece = null;
    this.ghostCells = [];
    this._ghostAnchor = null;
    this._lastHR = null; this._lastHC = null;
    this.score = 0; this.synList = []; this.regionBonus = 0; this.synAdj = 0; this.allPlaced = false;
  }

  _genPieces(recipeId) {
    const recipe = recipeId ? Recipes[recipeId] : null;
    const recipeCats = [];
    if (recipe) {
      for (const mat of recipe.materials) {
        let cat;
        if (isCategorySlot(mat)) cat = getCategoryId(mat);
        else cat = ItemBlueprints[mat]?.category;
        if (cat && MaterialCategories[cat]) recipeCats.push(cat);
        else if (mat && !isCategorySlot(mat)) recipeCats.push('stone_type'); // fallback
      }
    }
    const allCats = Object.keys(MaterialCategories).filter(c => c !== 'essence_type');
    while (recipeCats.length < 2) recipeCats.push(allCats[Math.floor(Math.random() * allCats.length)]);

    // Inert tiles: fewer unique recipe cats → more inert to prevent easy same-type matches
    const uniqueCount = new Set(recipeCats).size;
    const inertCount = uniqueCount <= 1 ? 4 : uniqueCount <= 2 ? 3 : 1;

    // Build tile pool for recipe pieces (4+4+3 = 11 cells)
    const pool = [];
    // Fill with recipe cats first
    while (pool.length < 11 - inertCount) {
      for (const cat of recipeCats) { if (pool.length < 11 - inertCount) pool.push(cat); }
    }
    // Add inert tiles
    for (let i = 0; i < inertCount; i++) pool.push(INERT);
    shuffle(pool);

    const ts = [...TETROS]; shuffle(ts);
    const tr = [...TRIS]; shuffle(tr);

    // Query upgrade bonuses
    const qPiece = { effectType: 'puzzle_extra_piece', result: 0 };
    const qGrid  = { effectType: 'puzzle_grid_expand', result: 0 };
    const qCap   = { effectType: 'puzzle_bonus_cap',   result: 0 };
    eventBus.emit('upgrade:queryBonus', qPiece);
    eventBus.emit('upgrade:queryBonus', qGrid);
    eventBus.emit('upgrade:queryBonus', qCap);
    this._gridRows = ROWS + qGrid.result;
    this._gridCols = COLS + qGrid.result;
    this._bonusCapExtra = qCap.result;

    let idx = 0;
    const mkTiles = (shape) => shape.map(() => ({ cat: pool[idx++] }));

    const pieces = [
      { id: ++_uid, base: ts[0], tiles: mkTiles(ts[0]), rot: 0, placed: false, cells: null, isEssence: false },
      { id: ++_uid, base: ts[1], tiles: mkTiles(ts[1]), rot: 0, placed: false, cells: null, isEssence: false },
      { id: ++_uid, base: tr[0], tiles: mkTiles(tr[0]), rot: 0, placed: false, cells: null, isEssence: false },
      { id: ++_uid, base: SINGLE[0], tiles: [{ cat: 'essence_type' }], rot: 0, placed: false, cells: null, isEssence: true },
    ];

    // Extra pieces from upgrades
    for (let i = 0; i < qPiece.result && i < 2; i++) {
      const extra = i === 0 ? tr[1 % tr.length] : tr[2 % tr.length];
      // Rebuild pool tiles for extra piece
      const extraTiles = extra.map(() => {
        const c = recipeCats[Math.floor(Math.random() * recipeCats.length)];
        return { cat: Math.random() < 0.3 ? INERT : c };
      });
      pieces.splice(pieces.length - 1, 0,
        { id: ++_uid, base: extra, tiles: extraTiles, rot: 0, placed: false, cells: null, isEssence: false });
    }

    return pieces;
  }

  _pCells(p) { return getCells(p.base, p.rot); }

  /* ═══ Placement ═══ */

  /** Compute anchor with snap — clamp so piece stays within grid */
  _anchorFor(piece, r, c) {
    const cells = this._pCells(piece);
    const [cr, cc] = centroid(cells);
    let ar = r - cr, ac = c - cc;
    // Clamp into grid bounds
    let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
    for (const [dr, dc] of cells) {
      const gr = ar + dr, gc = ac + dc;
      if (gr < minR) minR = gr; if (gr > maxR) maxR = gr;
      if (gc < minC) minC = gc; if (gc > maxC) maxC = gc;
    }
    if (minR < 0) ar -= minR;
    if (maxR >= this.R) ar -= maxR - this.R + 1;
    if (minC < 0) ac -= minC;
    if (maxC >= this.C) ac -= maxC - this.C + 1;
    return [ar, ac];
  }

  _canPlace(piece, ar, ac) {
    for (const [r, c] of this._pCells(piece)) {
      const gr = ar + r, gc = ac + c;
      if (gr < 0 || gr >= this.R || gc < 0 || gc >= this.C) return false;
      if (this.grid[gr][gc]) return false;
    }
    return true;
  }

  _place(piece, ar, ac) {
    const pcells = this._pCells(piece);
    const placed = [];
    for (let i = 0; i < pcells.length; i++) {
      const [r, c] = pcells[i];
      const gr = ar + r, gc = ac + c;
      this.grid[gr][gc] = { pid: piece.id, cat: piece.tiles[i].cat };
      placed.push([gr, gc]);
    }
    piece.placed = true;
    piece.cells = placed;
  }

  _remove(pid) {
    const p = this.pieces.find(x => x.id === pid);
    if (!p?.placed) return;
    for (const [r, c] of p.cells) this.grid[r][c] = null;
    p.placed = false;
    p.cells = null;
  }

  /* ═══ Scoring ═══ */

  /** Essence is wildcard — matches any non-inert category */
  _catMatch(a, b) {
    if (a === INERT || b === INERT) return false;
    if (a === b) return true;
    return a === 'essence_type' || b === 'essence_type';
  }

  _recalc() {
    const R = this.R, C = this.C;
    this.synList = [];
    this.regionBonus = 0;
    this.synAdj = 0;

    // ① Connected region bonus via flood fill (essence = wildcard)
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    this.regions = [];
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const cell = this.grid[r][c];
        if (!cell || visited[r][c] || cell.cat === INERT) continue;
        // BFS — essence joins any adjacent region
        const queue = [[r, c]];
        visited[r][c] = true;
        const region = [[r, c]];
        const baseCat = cell.cat === 'essence_type' ? null : cell.cat;
        let regionCat = baseCat;
        while (queue.length) {
          const [cr, cc] = queue.shift();
          for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
            const nr = cr + dr, nc = cc + dc;
            if (nr < 0 || nr >= R || nc < 0 || nc >= C || visited[nr][nc]) continue;
            const nb = this.grid[nr][nc];
            if (!nb || nb.cat === INERT) continue;
            // Determine match: compare with regionCat (or accept if essence/wildcard)
            const nbCat = nb.cat === 'essence_type' ? null : nb.cat;
            if (regionCat && nbCat && regionCat !== nbCat) continue;
            // Compatible — join region
            if (!regionCat && nbCat) regionCat = nbCat;
            visited[nr][nc] = true;
            region.push([nr, nc]);
            queue.push([nr, nc]);
          }
        }
        if (region.length >= 4) {
          const pts = region.length; // 4=4, 5=5, 6=6 ...
          this.regionBonus += pts;
          this.regions.push({ cells: region, cat: regionCat, pts });
          const catName = regionCat ? (MaterialCategories[regionCat]?.name || regionCat) : 'エッセンス';
          this.synList.push({ name: `${catName}連結×${region.length}`, pts, icon: '🔗' });
        }
      }
    }

    // ② Cross-category synergy (different non-same, non-essence pairs)
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const a = this.grid[r][c];
        if (!a || a.cat === INERT || a.cat === 'essence_type') continue;
        const pairs = [];
        if (c + 1 < C && this.grid[r][c + 1]) pairs.push(this.grid[r][c + 1]);
        if (r + 1 < R && this.grid[r + 1][c]) pairs.push(this.grid[r + 1][c]);
        for (const b of pairs) {
          if (b.cat === INERT || b.cat === 'essence_type' || b.cat === a.cat) continue;
          const s = getSyn(a.cat, b.cat);
          if (s) { this.synAdj += s.pts; this.synList.push({ ...s }); }
        }
      }
    }

    this.allPlaced = this.pieces.every(p => p.placed);
    this.score = this.regionBonus + this.synAdj + (this.allPlaced ? COMPLETE_BONUS : 0);
  }

  _getTier() {
    let t = SCORE_TIERS[0];
    for (const s of SCORE_TIERS) if (this.score >= s.min) t = s;
    // Apply bonus cap upgrade
    if (this._bonusCapExtra > 0 && t.bonus > 0) {
      return { ...t, bonus: t.bonus + this._bonusCapExtra };
    }
    return t;
  }

  /* ═══ UI build ═══ */

  _build() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'puzzle-overlay';

    let gridHtml = '';
    for (let r = 0; r < this.R; r++)
      for (let c = 0; c < this.C; c++)
        gridHtml += `<div class="pz-gcell pz-gcell-empty" data-r="${r}" data-c="${c}"></div>`;

    this.overlay.innerHTML = `
      <div class="puzzle-container">
        <div class="puzzle-header">
          <h3>⚗️ ブロック配置 — ${this.recipeName}</h3>
          <span class="pz-swap-hint">ホイール / 右クリック / R で回転</span>
        </div>
        <div class="puzzle-body">
          <div class="pz-left">
            <div class="pz-grid" id="pz-grid" style="grid-template-columns:repeat(${this.C},56px);grid-template-rows:repeat(${this.R},56px)">${gridHtml}</div>
            <div class="pz-syn-list" id="pz-syn-list">
              <span class="pz-syn-empty">ピースを配置するとシナジーが表示されます</span>
            </div>
          </div>
          <div class="puzzle-sidebar">
            <div class="pz-panel">
              <div class="pz-panel-label">ブロック</div>
              <div class="pz-pieces" id="pz-pieces"></div>
            </div>
            <div class="pz-panel">
              <div class="pz-panel-label">スコア</div>
              <div class="pz-score-val" id="pz-score">0</div>
              <div class="pz-bonus-bar"><div class="pz-bonus-fill" id="pz-bonus-fill"></div></div>
              <div class="pz-tier" id="pz-tier">品質ボーナス: +0</div>
            </div>
            <div class="pz-panel pz-breakdown" id="pz-breakdown"></div>
            <button class="btn primary pz-confirm-btn" id="pz-confirm">✨ 完成！</button>
            <button class="btn pz-skip-btn" id="pz-skip">スキップ (ボーナスなし)</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);

    // Cache DOM references for performance
    this._$grid = [];
    for (let r = 0; r < this.R; r++) {
      this._$grid[r] = [];
      for (let c = 0; c < this.C; c++) {
        this._$grid[r][c] = this.overlay.querySelector(`.pz-gcell[data-r="${r}"][data-c="${c}"]`);
      }
    }
    this._$score = this.overlay.querySelector('#pz-score');
    this._$fill = this.overlay.querySelector('#pz-bonus-fill');
    this._$tier = this.overlay.querySelector('#pz-tier');
    this._$synList = this.overlay.querySelector('#pz-syn-list');
    this._$bd = this.overlay.querySelector('#pz-breakdown');
    this._$pieces = this.overlay.querySelector('#pz-pieces');
    this._prevScore = -1;

    this._renderPieces();
    this._bindEvents();
    this._recalc();
    this._updateUI();
    requestAnimationFrame(() => this.overlay.classList.add('puzzle-visible'));
  }

  _renderPieces() {
    const el = this._$pieces || this.overlay.querySelector('#pz-pieces');
    el.innerHTML = this.pieces.map(p => {
      const label = p.isEssence ? '✨ エッセンス' : '素材ブロック';
      return `
        <div class="pz-piece${p.placed ? ' pz-piece-placed' : ''}${this.selPiece === p ? ' pz-piece-sel' : ''}${p.isEssence ? ' pz-piece-ess' : ''}" data-pid="${p.id}">
          <div class="pz-piece-shape">${this._miniShape(p)}</div>
          <div class="pz-piece-info">
            <span class="pz-piece-cat">${label}</span>
          </div>
          <button class="pz-rot-btn" data-pid="${p.id}" title="回転">↻</button>
        </div>`;
    }).join('');
  }

  _miniShape(piece) {
    const cells = this._pCells(piece);
    const maxR = Math.max(...cells.map(([r]) => r)) + 1;
    const maxC = Math.max(...cells.map(([, c]) => c)) + 1;
    const map = new Map();
    cells.forEach(([r, c], i) => map.set(`${r},${c}`, piece.tiles[i]));
    let html = `<div class="pz-mini" style="grid-template-columns:repeat(${maxC},14px);grid-template-rows:repeat(${maxR},14px)">`;
    for (let r = 0; r < maxR; r++)
      for (let c = 0; c < maxC; c++) {
        const t = map.get(`${r},${c}`);
        html += t
          ? `<div class="pz-mini-on" style="background:${CAT_COLOR[t.cat]}" title="${MaterialCategories[t.cat]?.name || ''}"></div>`
          : `<div class="pz-mini-off"></div>`;
      }
    return html + '</div>';
  }

  _bindEvents() {
    const gridEl = this.overlay.querySelector('#pz-grid');
    gridEl.addEventListener('click', e => {
      const cell = e.target.closest('.pz-gcell');
      if (cell) this._onGridClick(+cell.dataset.r, +cell.dataset.c);
    });
    gridEl.addEventListener('mouseover', e => {
      const cell = e.target.closest('.pz-gcell');
      if (cell) this._showGhost(+cell.dataset.r, +cell.dataset.c);
    });
    gridEl.addEventListener('mouseleave', () => this._clearGhost());

    // Wheel rotation
    gridEl.addEventListener('wheel', e => {
      if (!this.selPiece || this.selPiece.placed) return;
      e.preventDefault();
      this.selPiece.rot = (this.selPiece.rot + (e.deltaY > 0 ? 1 : 3)) % 4;
      this._renderPieces();
      this._refreshGhost();
    }, { passive: false });

    // Right-click rotation
    gridEl.addEventListener('contextmenu', e => {
      e.preventDefault();
      if (!this.selPiece || this.selPiece.placed) return;
      this.selPiece.rot = (this.selPiece.rot + 1) % 4;
      this._renderPieces();
      this._refreshGhost();
    });

    // Keyboard rotation
    this._onKey = e => {
      if (!this.selPiece || this.selPiece.placed) return;
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        this.selPiece.rot = (this.selPiece.rot + 1) % 4;
        this._renderPieces();
        this._refreshGhost();
      }
    };
    document.addEventListener('keydown', this._onKey);

    this.overlay.querySelector('#pz-pieces').addEventListener('click', e => {
      const rotBtn = e.target.closest('.pz-rot-btn');
      if (rotBtn) { this._onRotate(+rotBtn.dataset.pid); return; }
      const pieceEl = e.target.closest('.pz-piece');
      if (pieceEl) this._onPieceClick(+pieceEl.dataset.pid);
    });

    this.overlay.querySelector('#pz-confirm').addEventListener('click', () => this._finish(false));
    this.overlay.querySelector('#pz-skip').addEventListener('click', () => this._finish(true));
  }

  /* ═══ Interaction ═══ */

  _onPieceClick(pid) {
    const p = this.pieces.find(x => x.id === pid);
    if (!p) return;
    if (p.placed) { this._remove(pid); this.selPiece = p; }
    else { this.selPiece = (this.selPiece === p) ? null : p; }
    this._recalc(); this._renderPieces(); this._updateUI();
  }

  /** Force ghost redraw after rotation */
  _refreshGhost() {
    if (this._lastHR != null) {
      const r = this._lastHR, c = this._lastHC;
      this._lastHR = null; // invalidate cache
      this._showGhost(r, c);
    }
  }

  _onRotate(pid) {
    const p = this.pieces.find(x => x.id === pid);
    if (!p || p.placed) return;
    p.rot = (p.rot + 1) % 4;
    this._renderPieces();
    this._refreshGhost();
  }

  _onGridClick(r, c) {
    if (this.selPiece && !this.selPiece.placed) {
      // Use the ghost anchor if available (ensures visual = actual)
      const [ar, ac] = this._ghostAnchor || this._anchorFor(this.selPiece, r, c);
      if (this._canPlace(this.selPiece, ar, ac)) {
        this._place(this.selPiece, ar, ac);
        this.selPiece = null;
        this._ghostAnchor = null;
        this._clearGhost();
        this._recalc(); this._renderPieces(); this._updateUI();
      }
    } else if (!this.selPiece && this.grid[r][c]) {
      this._remove(this.grid[r][c].pid);
      this._recalc(); this._renderPieces(); this._updateUI();
    }
  }

  _showGhost(r, c) {
    // Early return if same cell — avoid redundant DOM work
    if (r === this._lastHR && c === this._lastHC && this.ghostCells.length > 0) return;
    this._clearGhost();
    this._lastHR = r; this._lastHC = c;
    if (!this.selPiece || this.selPiece.placed) return;
    const [ar, ac] = this._anchorFor(this.selPiece, r, c);
    this._ghostAnchor = [ar, ac];
    const ok = this._canPlace(this.selPiece, ar, ac);
    const cls = ok ? 'pz-ghost-ok' : 'pz-ghost-ng';
    const pcells = this._pCells(this.selPiece);
    this.ghostCells = [];
    for (let i = 0; i < pcells.length; i++) {
      const gr = ar + pcells[i][0], gc = ac + pcells[i][1];
      if (gr < 0 || gr >= this.R || gc < 0 || gc >= this.C) continue;
      const el = this._$grid[gr][gc];
      if (this.grid[gr][gc]) continue; // skip occupied
      el.classList.add(cls);
      if (ok) el.style.setProperty('--ghost-clr', CAT_COLOR[this.selPiece.tiles[i].cat]);
      this.ghostCells.push(el);
    }
  }

  _clearGhost() {
    for (let i = 0; i < this.ghostCells.length; i++) {
      const el = this.ghostCells[i];
      el.className = 'pz-gcell pz-gcell-empty';
      el.style.removeProperty('--ghost-clr');
    }
    this.ghostCells.length = 0;
  }

  /* ═══ UI update ═══ */

  _updateUI() {
    // Grid cells — use cached refs
    for (let r = 0; r < this.R; r++) {
      for (let c = 0; c < this.C; c++) {
        const el = this._$grid[r][c];
        const g = this.grid[r][c];
        if (g) {
          const clr = CAT_COLOR[g.cat]; const icon = CAT_ICON[g.cat] || '';
          el.className = 'pz-gcell pz-gcell-filled';
          el.style.background = clr + '33';
          el.style.borderColor = clr;
          el.textContent = '';
          const span = el.firstElementChild?.tagName === 'SPAN' ? el.firstElementChild : el.appendChild(document.createElement('span'));
          span.className = 'pz-gcell-icon';
          span.textContent = icon;
        } else {
          el.className = 'pz-gcell pz-gcell-empty';
          el.style.background = ''; el.style.borderColor = '';
          el.textContent = '';
        }
      }
    }

    // Synergy tags (only rebuild string, assign once)
    let synHtml = '';
    for (let i = 0; i < this.synList.length; i++) {
      const s = this.synList[i];
      const sc = synColors(s.pts);
      synHtml += `<span class="pz-syn-tag" style="background:${sc.bg};color:${sc.fg};border-color:${sc.bd}">${s.icon} ${s.name} ${s.pts > 0 ? '+' : ''}${s.pts}</span>`;
    }
    if (this.allPlaced) synHtml += `<span class="pz-syn-tag pz-line-tag">🏆 全配置 +${COMPLETE_BONUS}</span>`;
    this._$synList.innerHTML = synHtml || '<span class="pz-syn-empty">ピースを配置するとシナジーが表示されます</span>';

    // Score — only animate on change
    const tier = this._getTier();
    this._$score.textContent = this.score;
    this._$score.style.color = tier.color;
    if (this._prevScore !== this.score) {
      this._$score.classList.remove('pz-score-pop');
      void this._$score.offsetWidth;
      this._$score.classList.add('pz-score-pop');
      this._prevScore = this.score;
    }

    const max = SCORE_TIERS[SCORE_TIERS.length - 1].min;
    this._$fill.style.width = `${Math.min(100, Math.max(0, this.score / max) * 100)}%`;
    this._$fill.style.background = tier.color;
    this._$tier.textContent = `品質ボーナス: +${tier.bonus}`;
    this._$tier.style.color = tier.color;

    // Breakdown
    this._$bd.innerHTML =
      `<div class="pz-bd-row"><span>連結(4+)</span><span style="color:#7daa68">${this.regionBonus > 0 ? '+'+this.regionBonus : '—'}</span></div>` +
      `<div class="pz-bd-row"><span>シナジー</span><span style="color:${this.synAdj >= 0 ? '#e8b84b' : '#c46a5a'}">${this.synAdj !== 0 ? (this.synAdj>0?'+':'')+this.synAdj : '—'}</span></div>` +
      `<div class="pz-bd-row"><span>全配置</span><span style="color:#7ab0c4">${this.allPlaced ? '+'+COMPLETE_BONUS : '—'}</span></div>`;
  }

  /* ═══ Finish & result ═══ */

  _finish(skipped) {
    document.removeEventListener('keydown', this._onKey);
    const tier = skipped ? SCORE_TIERS[0] : this._getTier();
    this._showResult({ bonus: tier.bonus, score: skipped ? 0 : this.score, rank: skipped ? 'スキップ' : tier.rank, rankColor: tier.color, skipped });
  }

  _showResult(result) {
    const container = this.overlay.querySelector('.puzzle-container');
    const tags = result.skipped ? '' : this.synList.filter(s => s.pts > 0).map(s => {
      const sc = synColors(s.pts);
      return `<span class="pz-syn-tag" style="background:${sc.bg};color:${sc.fg};border-color:${sc.bd}">${s.icon} ${s.name} +${s.pts}</span>`;
    }).join('');

    container.innerHTML = `
      <div class="puzzle-result">
        <h3>${result.skipped ? '⏭️ スキップ' : '✨ 配置完了！'}</h3>
        <div class="puzzle-result-stats">
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">スコア</span>
            <span class="puzzle-result-value">${result.score}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">配置率</span>
            <span class="puzzle-result-value">${result.skipped ? '-' : Math.round(this.pieces.filter(p => p.placed).length / this.pieces.length * 100) + '%'}</span>
          </div>
        </div>
        ${tags ? `<div class="pz-result-tags">${tags}</div>` : ''}
        <div class="puzzle-result-bonus" style="color:${result.rankColor}">
          <div class="puzzle-result-rank">${result.rank}</div>
          <div class="puzzle-result-bonus-value">品質ボーナス: +${result.bonus}</div>
        </div>
        <button class="btn primary puzzle-result-btn" id="puzzle-done">OK</button>
      </div>
    `;
    this.overlay.querySelector('#puzzle-done').addEventListener('click', () => {
      this.overlay.classList.remove('puzzle-visible');
      setTimeout(() => { this.overlay.remove(); this.overlay = null; }, 300);
      if (this.resolve) this.resolve(result);
    });
  }
}
