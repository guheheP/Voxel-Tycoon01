/**
 * CraftingPuzzle — 落ちモノパズルミニゲーム
 * 
 * 仕様:
 * - 6列 x 12行 のグリッド
 * - 6色ブロック（素材タイプ対応）
 * - 横3つ以上の同色で消去 + 連鎖
 * - 制限時間 45秒
 * - スコア → 品質ボーナス
 * - キーボード & マウス/タッチ操作
 */

const COLS = 6;
const ROWS = 12;
const CELL_SIZE = 40;
const TIME_LIMIT = 45;  // 秒
const DROP_INTERVAL_INITIAL = 1.0; // 秒
const DROP_INTERVAL_MIN = 0.3;
const DROP_SPEED_UP_RATE = 0.02; // 秒ごとの加速

// ブロック色定義
const BLOCK_TYPES = [
  { id: 0, emoji: '🪨', label: '石',  color: '#8a8a7a', glow: 'rgba(138,138,122,0.4)' },
  { id: 1, emoji: '🌿', label: '草',  color: '#7daa68', glow: 'rgba(125,170,104,0.4)' },
  { id: 2, emoji: '🔥', label: '火',  color: '#c46a5a', glow: 'rgba(196,106,90,0.4)' },
  { id: 3, emoji: '💎', label: '結晶', color: '#7ab0c4', glow: 'rgba(122,176,196,0.4)' },
  { id: 4, emoji: '⚔️', label: '金属', color: '#c4a87a', glow: 'rgba(196,168,122,0.4)' },
  { id: 5, emoji: '🧪', label: '薬品', color: '#b87ae8', glow: 'rgba(184,122,232,0.4)' },
];

// スコア → 品質ボーナステーブル
const SCORE_TIERS = [
  { min: 0,    bonus: 0, rank: 'なし',  color: '#888' },
  { min: 300,  bonus: 1, rank: '銅',    color: '#c4a87a' },
  { min: 800,  bonus: 2, rank: '銀',    color: '#c0c0c0' },
  { min: 1500, bonus: 3, rank: '金',    color: '#e8b84b' },
  { min: 2800, bonus: 5, rank: '極',    color: '#e87ae8' },
];

export class CraftingPuzzle {
  constructor() {
    this.overlay = null;
    this.canvas = null;
    this.ctx = null;
    this.running = false;
    this.resolveCallback = null;

    // Game state
    this.grid = [];        // [row][col] = blockTypeId or -1
    this.currentPiece = null;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.timeLeft = TIME_LIMIT;
    this.dropTimer = 0;
    this.dropInterval = DROP_INTERVAL_INITIAL;
    this.linesCleared = 0;
    this.paused = false;

    // Animation state
    this.clearingCells = [];  // [{row, col, timer}]
    this.shakeTimer = 0;

    // Input
    this._boundKeyDown = this._onKeyDown.bind(this);
    this._boundMouseDown = this._onMouseDown.bind(this);
    this._boundMouseMove = this._onMouseMove.bind(this);
    this._boundTouchStart = this._onTouchStart.bind(this);
    this._boundTouchMove = this._onTouchMove.bind(this);
    this._touchStartX = 0;
    this._touchStartY = 0;
    this._mouseCol = -1;
  }

  /**
   * パズルを開始し、完了時にボーナスを返すPromise
   * @param {string} recipeName
   * @param {number[]} materialColorHints - レシピ素材に対応する色ID
   * @returns {Promise<{bonus: number, score: number, rank: string}>}
   */
  start(recipeName, materialColorHints = []) {
    return new Promise((resolve) => {
      this.resolveCallback = resolve;
      this.recipeName = recipeName;
      this.materialHints = materialColorHints;
      this._initGame();
      this._createUI();
      this._startLoop();
    });
  }

  _initGame() {
    // グリッド初期化
    this.grid = [];
    for (let r = 0; r < ROWS; r++) {
      this.grid.push(new Array(COLS).fill(-1));
    }
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.timeLeft = TIME_LIMIT;
    this.dropTimer = 0;
    this.dropInterval = DROP_INTERVAL_INITIAL;
    this.linesCleared = 0;
    this.clearingCells = [];
    this.shakeTimer = 0;
    this.paused = false;
    this.running = true;
    this._spawnPiece();
  }

  _spawnPiece() {
    const typeId = Math.floor(Math.random() * BLOCK_TYPES.length);
    this.currentPiece = {
      col: Math.floor(COLS / 2),
      row: 0,
      blocks: [typeId, BLOCK_TYPES[Math.floor(Math.random() * BLOCK_TYPES.length)].id],
      rotation: 0, // 0=vertical, 1=horizontal
    };

    // ゲームオーバーチェック
    if (this.grid[0][this.currentPiece.col] !== -1) {
      this._endGame();
    }
  }

  _createUI() {
    // Overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'puzzle-overlay';
    this.overlay.innerHTML = `
      <div class="puzzle-container">
        <div class="puzzle-header">
          <h3>🧩 錬金パズル — ${this.recipeName}</h3>
          <div class="puzzle-timer" id="puzzle-timer">${TIME_LIMIT}秒</div>
        </div>
        <div class="puzzle-body">
          <canvas id="puzzle-canvas" width="${COLS * CELL_SIZE}" height="${ROWS * CELL_SIZE}"></canvas>
          <div class="puzzle-sidebar">
            <div class="puzzle-score-box">
              <div class="puzzle-score-label">スコア</div>
              <div class="puzzle-score-value" id="puzzle-score">0</div>
            </div>
            <div class="puzzle-combo-box">
              <div class="puzzle-score-label">コンボ</div>
              <div class="puzzle-combo-value" id="puzzle-combo">x0</div>
            </div>
            <div class="puzzle-bonus-box">
              <div class="puzzle-score-label">品質ボーナス</div>
              <div class="puzzle-bonus-bar">
                <div class="puzzle-bonus-fill" id="puzzle-bonus-fill"></div>
              </div>
              <div class="puzzle-bonus-value" id="puzzle-bonus">+0</div>
            </div>
            <div class="puzzle-next-box">
              <div class="puzzle-score-label">操作</div>
              <div class="puzzle-controls-hint">
                ← → 移動<br>
                ↑ 回転<br>
                ↓ 加速<br>
                Space 即落
              </div>
            </div>
            <button class="btn puzzle-skip-btn" id="puzzle-skip">スキップ (ボーナスなし)</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(this.overlay);

    this.canvas = document.getElementById('puzzle-canvas');
    this.ctx = this.canvas.getContext('2d');

    // Skip button
    document.getElementById('puzzle-skip').addEventListener('click', () => {
      this._endGame(true);
    });

    // Input bindings
    document.addEventListener('keydown', this._boundKeyDown);
    this.canvas.addEventListener('mousedown', this._boundMouseDown);
    this.canvas.addEventListener('mousemove', this._boundMouseMove);
    this.canvas.addEventListener('touchstart', this._boundTouchStart, { passive: false });
    this.canvas.addEventListener('touchmove', this._boundTouchMove, { passive: false });

    // Show with animation
    requestAnimationFrame(() => this.overlay.classList.add('puzzle-visible'));
  }

  _startLoop() {
    this._lastTime = performance.now();
    this._loop();
  }

  _loop() {
    if (!this.running) return;

    const now = performance.now();
    const dt = (now - this._lastTime) / 1000;
    this._lastTime = now;

    if (!this.paused) {
      this._update(dt);
    }
    this._draw();

    this._animFrame = requestAnimationFrame(() => this._loop());
  }

  _update(dt) {
    // Timer
    this.timeLeft -= dt;
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this._endGame();
      return;
    }

    // Update UI elements
    const timerEl = document.getElementById('puzzle-timer');
    if (timerEl) {
      const sec = Math.ceil(this.timeLeft);
      timerEl.textContent = `${sec}秒`;
      timerEl.style.color = sec <= 10 ? '#c46a5a' : '';
    }

    // Clearing animation
    if (this.clearingCells.length > 0) {
      let allDone = true;
      for (const cell of this.clearingCells) {
        cell.timer -= dt * 4;
        if (cell.timer > 0) allDone = false;
      }
      if (allDone) {
        // Remove cleared cells and apply gravity
        for (const cell of this.clearingCells) {
          this.grid[cell.row][cell.col] = -1;
        }
        this.clearingCells = [];
        this._applyGravity();
        // Check for chain reactions
        const cleared = this._findMatches();
        if (cleared.length > 0) {
          this.combo++;
          this.maxCombo = Math.max(this.maxCombo, this.combo);
          this._scoreMatches(cleared);
          this.clearingCells = cleared.map(c => ({ ...c, timer: 1.0 }));
        } else {
          this.combo = 0;
        }
      }
      return;
    }

    // Drop speed increases over time
    this.dropInterval = Math.max(
      DROP_INTERVAL_MIN,
      DROP_INTERVAL_INITIAL - (TIME_LIMIT - this.timeLeft) * DROP_SPEED_UP_RATE
    );

    // Piece drop
    this.dropTimer += dt;
    if (this.dropTimer >= this.dropInterval) {
      this.dropTimer = 0;
      if (!this._movePiece(0, 1)) {
        this._placePiece();
      }
    }
  }

  _movePiece(dx, dy) {
    if (!this.currentPiece) return false;
    const p = this.currentPiece;
    const newCol = p.col + dx;
    const newRow = p.row + dy;

    // Get block positions
    const positions = this._getPiecePositions(newCol, newRow, p.rotation);
    for (const [r, c] of positions) {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return false;
      if (this.grid[r][c] !== -1) return false;
    }
    p.col = newCol;
    p.row = newRow;
    return true;
  }

  _rotatePiece() {
    if (!this.currentPiece) return;
    const p = this.currentPiece;
    const newRot = (p.rotation + 1) % 2;
    const positions = this._getPiecePositions(p.col, p.row, newRot);
    for (const [r, c] of positions) {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
      if (this.grid[r][c] !== -1) return;
    }
    p.rotation = newRot;
  }

  _getPiecePositions(col, row, rotation) {
    if (rotation === 0) {
      // Vertical: [row][col], [row+1][col]
      return [[row, col], [row + 1, col]];
    } else {
      // Horizontal: [row][col], [row][col+1]
      return [[row, col], [row, col + 1]];
    }
  }

  _hardDrop() {
    if (!this.currentPiece) return;
    while (this._movePiece(0, 1)) { /* keep dropping */ }
    this._placePiece();
  }

  _placePiece() {
    if (!this.currentPiece) return;
    const p = this.currentPiece;
    const positions = this._getPiecePositions(p.col, p.row, p.rotation);

    for (let i = 0; i < positions.length; i++) {
      const [r, c] = positions[i];
      if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
        this.grid[r][c] = p.blocks[i];
      }
    }

    // Check for matches
    const cleared = this._findMatches();
    if (cleared.length > 0) {
      this.combo = 1;
      this.maxCombo = Math.max(this.maxCombo, 1);
      this._scoreMatches(cleared);
      this.clearingCells = cleared.map(c => ({ ...c, timer: 1.0 }));
    }

    this._spawnPiece();
  }

  _findMatches() {
    const matched = new Set();

    // Horizontal matches
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c <= COLS - 3; c++) {
        const t = this.grid[r][c];
        if (t === -1) continue;
        if (this.grid[r][c + 1] === t && this.grid[r][c + 2] === t) {
          // Find full extent
          let end = c + 2;
          while (end + 1 < COLS && this.grid[r][end + 1] === t) end++;
          for (let x = c; x <= end; x++) matched.add(`${r},${x}`);
        }
      }
    }

    // Vertical matches
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r <= ROWS - 3; r++) {
        const t = this.grid[r][c];
        if (t === -1) continue;
        if (this.grid[r + 1][c] === t && this.grid[r + 2][c] === t) {
          let end = r + 2;
          while (end + 1 < ROWS && this.grid[end + 1][c] === t) end++;
          for (let y = r; y <= end; y++) matched.add(`${y},${c}`);
        }
      }
    }

    return Array.from(matched).map(s => {
      const [r, c] = s.split(',').map(Number);
      return { row: r, col: c, type: this.grid[r][c] };
    });
  }

  _scoreMatches(cells) {
    const basePoints = cells.length * 50;
    const comboMultiplier = 1 + (this.combo - 1) * 0.5;
    const points = Math.floor(basePoints * comboMultiplier);
    this.score += points;
    this.linesCleared += cells.length;

    // Update UI
    this._updateScoreUI();
  }

  _updateScoreUI() {
    const scoreEl = document.getElementById('puzzle-score');
    if (scoreEl) scoreEl.textContent = this.score;

    const comboEl = document.getElementById('puzzle-combo');
    if (comboEl) {
      comboEl.textContent = this.combo > 0 ? `x${this.combo}` : '-';
      comboEl.style.color = this.combo >= 3 ? '#e8b84b' : '';
    }

    const tier = this._getCurrentTier();
    const bonusEl = document.getElementById('puzzle-bonus');
    if (bonusEl) {
      bonusEl.textContent = `+${tier.bonus}`;
      bonusEl.style.color = tier.color;
    }

    const fillEl = document.getElementById('puzzle-bonus-fill');
    if (fillEl) {
      const maxScore = SCORE_TIERS[SCORE_TIERS.length - 1].min;
      const pct = Math.min(100, (this.score / maxScore) * 100);
      fillEl.style.width = `${pct}%`;
      fillEl.style.background = tier.color;
    }
  }

  _getCurrentTier() {
    let tier = SCORE_TIERS[0];
    for (const t of SCORE_TIERS) {
      if (this.score >= t.min) tier = t;
    }
    return tier;
  }

  _applyGravity() {
    for (let c = 0; c < COLS; c++) {
      let writeRow = ROWS - 1;
      for (let r = ROWS - 1; r >= 0; r--) {
        if (this.grid[r][c] !== -1) {
          if (r !== writeRow) {
            this.grid[writeRow][c] = this.grid[r][c];
            this.grid[r][c] = -1;
          }
          writeRow--;
        }
      }
    }
  }

  // ===== Drawing =====

  _draw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background
    ctx.fillStyle = 'rgba(30, 25, 18, 0.95)';
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(160, 132, 92, 0.1)';
    ctx.lineWidth = 1;
    for (let r = 0; r <= ROWS; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * CELL_SIZE);
      ctx.lineTo(w, r * CELL_SIZE);
      ctx.stroke();
    }
    for (let c = 0; c <= COLS; c++) {
      ctx.beginPath();
      ctx.moveTo(c * CELL_SIZE, 0);
      ctx.lineTo(c * CELL_SIZE, h);
      ctx.stroke();
    }

    // Placed blocks — clearingCells を Map 化して O(1) ルックアップ
    const clearingMap = new Map();
    for (const cl of this.clearingCells) {
      clearingMap.set(cl.row * COLS + cl.col, cl);
    }
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (this.grid[r][c] !== -1) {
          const clearing = clearingMap.get(r * COLS + c);
          if (clearing) {
            this._drawBlock(c, r, this.grid[r][c], clearing.timer);
          } else {
            this._drawBlock(c, r, this.grid[r][c], 1.0);
          }
        }
      }
    }

    // Current piece
    if (this.currentPiece && this.clearingCells.length === 0) {
      const p = this.currentPiece;
      // Ghost (drop preview)
      let ghostRow = p.row;
      while (true) {
        const positions = this._getPiecePositions(p.col, ghostRow + 1, p.rotation);
        let valid = true;
        for (const [r, c] of positions) {
          if (r >= ROWS || c < 0 || c >= COLS || (r >= 0 && this.grid[r][c] !== -1)) {
            valid = false;
            break;
          }
        }
        if (!valid) break;
        ghostRow++;
      }
      // Draw ghost
      const ghostPositions = this._getPiecePositions(p.col, ghostRow, p.rotation);
      for (let i = 0; i < ghostPositions.length; i++) {
        const [r, c] = ghostPositions[i];
        if (r >= 0) {
          this._drawGhost(c, r, p.blocks[i]);
        }
      }

      // Draw piece
      const positions = this._getPiecePositions(p.col, p.row, p.rotation);
      for (let i = 0; i < positions.length; i++) {
        const [r, c] = positions[i];
        if (r >= 0) {
          this._drawBlock(c, r, p.blocks[i], 1.0);
        }
      }
    }

    // Mouse column highlight
    if (this._mouseCol >= 0 && this._mouseCol < COLS) {
      ctx.fillStyle = 'rgba(232, 184, 75, 0.04)';
      ctx.fillRect(this._mouseCol * CELL_SIZE, 0, CELL_SIZE, h);
    }
  }

  _drawBlock(col, row, typeId, alpha) {
    const ctx = this.ctx;
    const bt = BLOCK_TYPES[typeId];
    const x = col * CELL_SIZE;
    const y = row * CELL_SIZE;
    const pad = 2;

    ctx.globalAlpha = alpha;

    // Block body
    ctx.fillStyle = bt.color;
    ctx.beginPath();
    ctx.roundRect(x + pad, y + pad, CELL_SIZE - pad * 2, CELL_SIZE - pad * 2, 4);
    ctx.fill();

    // Glow
    ctx.fillStyle = bt.glow;
    ctx.beginPath();
    ctx.roundRect(x + pad, y + pad, CELL_SIZE - pad * 2, (CELL_SIZE - pad * 2) * 0.4, [4, 4, 0, 0]);
    ctx.fill();

    // Emoji
    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(bt.emoji, x + CELL_SIZE / 2, y + CELL_SIZE / 2);

    ctx.globalAlpha = 1.0;
  }

  _drawGhost(col, row, typeId) {
    const ctx = this.ctx;
    const bt = BLOCK_TYPES[typeId];
    const x = col * CELL_SIZE;
    const y = row * CELL_SIZE;
    const pad = 2;

    ctx.globalAlpha = 0.2;
    ctx.strokeStyle = bt.color;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.roundRect(x + pad, y + pad, CELL_SIZE - pad * 2, CELL_SIZE - pad * 2, 4);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1.0;
  }

  // ===== Input =====

  _onKeyDown(e) {
    if (!this.running || this.clearingCells.length > 0) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        this._movePiece(-1, 0);
        break;
      case 'ArrowRight':
        e.preventDefault();
        this._movePiece(1, 0);
        break;
      case 'ArrowDown':
        e.preventDefault();
        this._movePiece(0, 1);
        this.dropTimer = 0;
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._rotatePiece();
        break;
      case ' ':
        e.preventDefault();
        this._hardDrop();
        break;
    }
  }

  _onMouseDown(e) {
    if (!this.running || this.clearingCells.length > 0) return;
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickCol = Math.floor(x / CELL_SIZE);

    if (e.button === 0) {
      // Left click: move piece to column
      if (this.currentPiece) {
        const diff = clickCol - this.currentPiece.col;
        if (diff !== 0) {
          this._movePiece(diff > 0 ? 1 : -1, 0);
        } else {
          // Click same column = rotate
          this._rotatePiece();
        }
      }
    }
    if (e.button === 2) {
      // Right click: hard drop
      e.preventDefault();
      this._hardDrop();
    }
  }

  _onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    this._mouseCol = Math.floor((e.clientX - rect.left) / CELL_SIZE);
  }

  _onTouchStart(e) {
    if (!this.running) return;
    e.preventDefault();
    const touch = e.touches[0];
    this._touchStartX = touch.clientX;
    this._touchStartY = touch.clientY;
  }

  _onTouchMove(e) {
    if (!this.running || this.clearingCells.length > 0) return;
    e.preventDefault();
    const touch = e.touches[0];
    const dx = touch.clientX - this._touchStartX;
    const dy = touch.clientY - this._touchStartY;

    if (Math.abs(dx) > 30) {
      this._movePiece(dx > 0 ? 1 : -1, 0);
      this._touchStartX = touch.clientX;
    }
    if (dy > 40) {
      this._movePiece(0, 1);
      this._touchStartY = touch.clientY;
      this.dropTimer = 0;
    }
    if (dy < -40) {
      this._rotatePiece();
      this._touchStartY = touch.clientY;
    }
  }

  // ===== End =====

  _endGame(skipped = false) {
    this.running = false;
    cancelAnimationFrame(this._animFrame);

    // Remove input
    document.removeEventListener('keydown', this._boundKeyDown);
    this.canvas.removeEventListener('mousedown', this._boundMouseDown);
    this.canvas.removeEventListener('mousemove', this._boundMouseMove);
    this.canvas.removeEventListener('touchstart', this._boundTouchStart);
    this.canvas.removeEventListener('touchmove', this._boundTouchMove);

    const tier = skipped ? SCORE_TIERS[0] : this._getCurrentTier();
    const result = {
      bonus: tier.bonus,
      score: skipped ? 0 : this.score,
      rank: skipped ? 'スキップ' : tier.rank,
      rankColor: tier.color,
      maxCombo: this.maxCombo,
      linesCleared: this.linesCleared,
      skipped,
    };

    // Show result screen
    this._showResult(result);
  }

  _showResult(result) {
    const container = this.overlay.querySelector('.puzzle-container');
    container.innerHTML = `
      <div class="puzzle-result">
        <h3>${result.skipped ? '⏭️ スキップ' : '✨ パズル完了！'}</h3>
        <div class="puzzle-result-stats">
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">スコア</span>
            <span class="puzzle-result-value">${result.score}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">最大コンボ</span>
            <span class="puzzle-result-value">x${result.maxCombo}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">消去数</span>
            <span class="puzzle-result-value">${result.linesCleared}</span>
          </div>
        </div>
        <div class="puzzle-result-bonus" style="color:${result.rankColor}">
          <div class="puzzle-result-rank">${result.rank}</div>
          <div class="puzzle-result-bonus-value">品質ボーナス: +${result.bonus}</div>
        </div>
        <button class="btn primary puzzle-result-btn" id="puzzle-done">完成！</button>
      </div>
    `;

    document.getElementById('puzzle-done').addEventListener('click', () => {
      this.overlay.classList.remove('puzzle-visible');
      setTimeout(() => {
        this.overlay.remove();
        this.overlay = null;
      }, 300);
      if (this.resolveCallback) {
        this.resolveCallback(result);
      }
    });
  }
}
