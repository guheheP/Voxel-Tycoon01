/**
 * BattleCanvas — 2D ピクセルアート風バトルシーン描画
 * 内部解像度 320×160 をキャンバスで描き、CSS で拡大（pixelated）
 */

// ── 冒険者カラーパレット ──
const ADV_PALETTE = {
  adv_knight:  { head:'#708090', skin:'#f0c8a0', body:'#b0b8c0', legs:'#5a3828', accent:'#b83030', weapon:'sword' },
  adv_archer:  { head:'#2d5016', skin:'#f0c8a0', body:'#8b6914', legs:'#4a3828', accent:'#2d5016', weapon:'bow' },
  adv_mage:    { head:'#6a3d9a', skin:'#f0c8a0', body:'#4a5a9a', legs:'#3a3050', accent:'#8b5cf6', weapon:'staff' },
  adv_thief:   { head:'#2a2a3a', skin:'#f0c8a0', body:'#3a3a4a', legs:'#2a2a2a', accent:'#505060', weapon:'dagger' },
  adv_paladin: { head:'#d4a017', skin:'#f0c8a0', body:'#e8e0d0', legs:'#8b7355', accent:'#d4a017', weapon:'sword' },
};

// ── ボスカラー & シェイプ ──
const BOSS_PALETTE = {
  slime:    { c1:'#4a90d9', c2:'#3a70b9', c3:'#9ac4f0', shape:'blob' },
  golem:    { c1:'#8b7355', c2:'#6a5a45', c3:'#a09080', shape:'block' },
  treant:   { c1:'#2d5016', c2:'#4a7a2a', c3:'#8b6914', shape:'tree' },
  ifrit:    { c1:'#e63946', c2:'#ff6b35', c3:'#ffd700', shape:'flame' },
  kraken:   { c1:'#6a3d9a', c2:'#4a2d7a', c3:'#8b5cf6', shape:'tentacle' },
  dragon:   { c1:'#2d8b46', c2:'#1a6b30', c3:'#ffd700', shape:'dragon' },
  titan:    { c1:'#607080', c2:'#4a5a6a', c3:'#ffd700', shape:'giant' },
  timelord: { c1:'#6a3d9a', c2:'#d4a017', c3:'#3a2050', shape:'mage' },
};

const GROUND_Y = 118;  // グラウンドライン

export class BattleCanvas {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.W = 320;
    this.H = 160;
    this._advs = [];
    this._boss = null;
    this._time = 0;
    this._animId = null;
    this._disposed = false;
  }

  init(container, bossDef, adventurers) {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'battle-canvas';
    this.canvas.width = this.W;
    this.canvas.height = this.H;
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    // 冒険者エンティティ
    const count = Math.min(adventurers.length, 5);
    const spacing = 26;
    const startX = 25;
    this._advs = adventurers.slice(0, 5).map((a, i) => ({
      id: a.id, palette: ADV_PALETTE[a.id] || ADV_PALETTE.adv_knight,
      x: startX + i * spacing, y: GROUND_Y,
      alive: true, shake: 0, flash: 0, attackAnim: 0,
    }));

    // ボスエンティティ
    const bossKey = this._bossKey(bossDef.id);
    this._boss = {
      id: bossDef.id, palette: BOSS_PALETTE[bossKey] || BOSS_PALETTE.slime,
      x: 252, y: GROUND_Y,
      shake: 0, flash: 0, hpRatio: 1,
    };

    this._startLoop();
  }

  /** ボスを差し替え（チャレンジモードのウェーブ進行用） */
  updateBoss(bossDef) {
    const bossKey = this._bossKey(bossDef.id);
    this._boss.id = bossDef.id;
    this._boss.palette = BOSS_PALETTE[bossKey] || BOSS_PALETTE.slime;
    this._boss.shake = 0;
    this._boss.flash = 0;
    this._boss.hpRatio = 1;
  }

  /** 毎フレーム呼ばれるステート同期 */
  sync(state) {
    if (!state) return;
    // ボスHP
    this._boss.hpRatio = state.boss.hp / state.boss.maxHp;
    // 冒険者の生死
    for (const adv of this._advs) {
      const sa = state.adventurers.find(a => a.id === adv.id);
      adv.alive = sa ? sa.status === 'active' : false;
    }
  }

  // ── ポップアップ ──
  /** 冒険者の画面上の相対位置を返す（DOMポップアップ配置用） */
  getAdvPosition(advId) {
    const e = this._advs.find(a => a.id === advId);
    if (!e) return null;
    return { xPct: e.x / this.W, yPct: (e.y - 20) / this.H };
  }
  getBossPosition() {
    return { xPct: this._boss.x / this.W, yPct: (this._boss.y - 30) / this.H };
  }

  // ── アニメーション ──
  animateBossHit() { this._boss.shake = 12; this._boss.flash = 8; }
  animateAdvHit(advId) {
    const e = this._advs.find(a => a.id === advId);
    if (e) { e.shake = 10; e.flash = 8; }
  }
  animateAoeHit() { this._advs.forEach(a => { if (a.alive) { a.shake = 8; a.flash = 6; } }); }
  animateAdvAttack(advId) {
    const e = this._advs.find(a => a.id === advId);
    if (e) e.attackAnim = 16;
  }

  dispose() {
    this._disposed = true;
    if (this._animId) cancelAnimationFrame(this._animId);
    if (this.canvas?.parentNode) this.canvas.remove();
  }

  // ── Private ──

  _bossKey(bossId) {
    if (bossId.includes('slime'))   return 'slime';
    if (bossId.includes('golem'))   return 'golem';
    if (bossId.includes('treant'))  return 'treant';
    if (bossId.includes('ifrit'))   return 'ifrit';
    if (bossId.includes('kraken'))  return 'kraken';
    if (bossId.includes('dragon'))  return 'dragon';
    if (bossId.includes('titan'))   return 'titan';
    if (bossId.includes('time'))    return 'timelord';
    return 'slime';
  }

  _startLoop() {
    let last = performance.now();
    const tick = (now) => {
      if (this._disposed) return;
      // タブ復帰時の巨大dt防止 + 非表示中はスキップ
      if (document.hidden) { last = now; this._animId = requestAnimationFrame(tick); return; }
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      this._time += dt;
      this._update(dt);
      this._draw();
      this._animId = requestAnimationFrame(tick);
    };
    this._animId = requestAnimationFrame(tick);
  }

  _update(dt) {
    // シェイク減衰
    if (this._boss.shake > 0) this._boss.shake = Math.max(0, this._boss.shake - dt * 30);
    if (this._boss.flash > 0) this._boss.flash = Math.max(0, this._boss.flash - dt * 20);
    for (const a of this._advs) {
      if (a.shake > 0) a.shake = Math.max(0, a.shake - dt * 30);
      if (a.flash > 0) a.flash = Math.max(0, a.flash - dt * 20);
      if (a.attackAnim > 0) a.attackAnim = Math.max(0, a.attackAnim - dt * 24);
    }
  }

  _draw() {
    const ctx = this.ctx;
    const W = this.W, H = this.H;
    ctx.imageSmoothingEnabled = false;

    // ── 背景 ──
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0a0a14');
    grad.addColorStop(0.5, '#141420');
    grad.addColorStop(0.75, '#1a1a28');
    grad.addColorStop(1, '#0d0d18');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // ── 地面 ──
    ctx.fillStyle = '#1e1e2a';
    ctx.fillRect(0, GROUND_Y + 4, W, H - GROUND_Y - 4);
    ctx.fillStyle = '#2a2a3a';
    ctx.fillRect(0, GROUND_Y + 2, W, 3);
    ctx.fillStyle = '#3a3a4e';
    ctx.fillRect(0, GROUND_Y, W, 2);

    // ── 背景の装飾（木のシルエット等） ──
    ctx.fillStyle = 'rgba(20, 20, 35, 0.8)';
    this._drawTreeSilhouette(ctx, 10, GROUND_Y, 20);
    this._drawTreeSilhouette(ctx, 280, GROUND_Y, 16);
    this._drawTreeSilhouette(ctx, 300, GROUND_Y, 22);

    // ── 冒険者描画 ──
    for (const adv of this._advs) {
      if (!adv.alive) continue;
      const idleBob = Math.sin(this._time * 2.5 + adv.x * 0.1) * 1.5;
      const shakeX = adv.shake > 0 ? Math.sin(this._time * 40) * adv.shake * 0.3 : 0;
      const atkOffset = adv.attackAnim > 0 ? Math.sin(adv.attackAnim * 0.4) * 12 : 0;
      const dx = adv.x + shakeX + atkOffset;
      const dy = adv.y + idleBob;

      // フラッシュ
      if (adv.flash > 0 && Math.floor(adv.flash * 3) % 2 === 0) {
        ctx.globalAlpha = 0.5;
      }
      // 影
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.fillRect(dx - 5, GROUND_Y + 1, 12, 3);
      this._drawAdventurer(ctx, dx, dy, adv.palette);
      ctx.globalAlpha = 1;
    }
    // 死亡した冒険者（薄く表示）
    for (const adv of this._advs) {
      if (adv.alive) continue;
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect(adv.x - 5, GROUND_Y + 1, 12, 3);
      this._drawAdventurer(ctx, adv.x, adv.y + 2, adv.palette);
      ctx.globalAlpha = 1;
    }

    // ── ボス描画 ──
    const bIdleBob = Math.sin(this._time * 1.8) * 2;
    const bShakeX = this._boss.shake > 0 ? Math.sin(this._time * 35) * this._boss.shake * 0.5 : 0;
    const bx = this._boss.x + bShakeX;
    const by = this._boss.y + bIdleBob;

    if (this._boss.flash > 0 && Math.floor(this._boss.flash * 3) % 2 === 0) {
      ctx.globalAlpha = 0.5;
    }
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(bx - 12, GROUND_Y + 1, 26, 4);
    this._drawBoss(ctx, bx, by, this._boss.palette);
    ctx.globalAlpha = 1;

  }

  // ── 冒険者スプライト ──
  _drawAdventurer(ctx, x, y, pal) {
    const P = 2; // pixel size
    // 足
    ctx.fillStyle = pal.legs;
    ctx.fillRect(x - 1*P, y - 1*P, 2*P, 2*P);
    ctx.fillRect(x + 2*P, y - 1*P, 2*P, 2*P);
    // 胴体
    ctx.fillStyle = pal.body;
    ctx.fillRect(x - 2*P, y - 5*P, 6*P, 4*P);
    // アクセント(ベルトor装飾)
    ctx.fillStyle = pal.accent;
    ctx.fillRect(x - 2*P, y - 2*P, 6*P, 1*P);
    // 肌(顔)
    ctx.fillStyle = pal.skin;
    ctx.fillRect(x - 1*P, y - 7*P, 4*P, 2*P);
    // 頭(ヘルメ/髪)
    ctx.fillStyle = pal.head;
    ctx.fillRect(x - 1*P, y - 9*P, 4*P, 2*P);
    // 目(1px)
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(x + 0*P, y - 7*P, 1*P, 1*P);
    ctx.fillRect(x + 2*P, y - 7*P, 1*P, 1*P);
    // 武器
    this._drawWeapon(ctx, x, y, pal);
  }

  _drawWeapon(ctx, x, y, pal) {
    const P = 2;
    switch (pal.weapon) {
      case 'sword':
        ctx.fillStyle = '#c0c0d0';
        ctx.fillRect(x + 4*P, y - 8*P, 1*P, 6*P);
        ctx.fillStyle = '#e8b84b';
        ctx.fillRect(x + 3*P, y - 3*P, 3*P, 1*P);
        break;
      case 'bow':
        ctx.fillStyle = '#8b6914';
        ctx.fillRect(x + 4*P, y - 8*P, 1*P, 5*P);
        ctx.fillStyle = '#a0a0a0';
        ctx.fillRect(x + 5*P, y - 7*P, 0.5*P, 3*P);
        break;
      case 'staff':
        ctx.fillStyle = '#6a4a2a';
        ctx.fillRect(x + 4*P, y - 10*P, 1*P, 8*P);
        ctx.fillStyle = '#8b5cf6';
        ctx.fillRect(x + 3*P, y - 11*P, 3*P, 2*P);
        break;
      case 'dagger':
        ctx.fillStyle = '#c0c0c0';
        ctx.fillRect(x + 4*P, y - 5*P, 1*P, 3*P);
        break;
    }
  }

  // ── ボススプライト ──
  _drawBoss(ctx, x, y, pal) {
    switch (pal.shape) {
      case 'blob':   this._drawBlobBoss(ctx, x, y, pal); break;
      case 'block':  this._drawBlockBoss(ctx, x, y, pal); break;
      case 'tree':   this._drawTreeBoss(ctx, x, y, pal); break;
      case 'flame':  this._drawFlameBoss(ctx, x, y, pal); break;
      case 'tentacle': this._drawTentacleBoss(ctx, x, y, pal); break;
      case 'dragon': this._drawDragonBoss(ctx, x, y, pal); break;
      case 'giant':  this._drawGiantBoss(ctx, x, y, pal); break;
      case 'mage':   this._drawMageBoss(ctx, x, y, pal); break;
      default:       this._drawBlobBoss(ctx, x, y, pal); break;
    }
  }

  _drawBlobBoss(ctx, x, y, pal) {
    const P = 3;
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 4*P, y - 4*P, 8*P, 4*P);
    ctx.fillRect(x - 3*P, y - 6*P, 6*P, 2*P);
    ctx.fillRect(x - 5*P, y - 2*P, 10*P, 2*P);
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 2*P, y - 5*P, 2*P, 2*P);
    ctx.fillRect(x + 1*P, y - 5*P, 2*P, 2*P);
    ctx.fillStyle = '#111';
    ctx.fillRect(x - 1*P, y - 4*P, 1*P, 1*P);
    ctx.fillRect(x + 1*P, y - 4*P, 1*P, 1*P);
  }

  _drawBlockBoss(ctx, x, y, pal) {
    const P = 3;
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 5*P, y - 8*P, 10*P, 8*P);
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 4*P, y - 10*P, 8*P, 3*P);
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 3*P, y - 9*P, 2*P, 1*P);
    ctx.fillRect(x + 1*P, y - 9*P, 2*P, 1*P);
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(x - 2*P, y - 8*P, 1*P, 1*P);
    ctx.fillRect(x + 2*P, y - 8*P, 1*P, 1*P);
    // 腕
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 7*P, y - 6*P, 2*P, 5*P);
    ctx.fillRect(x + 5*P, y - 6*P, 2*P, 5*P);
  }

  _drawTreeBoss(ctx, x, y, pal) {
    const P = 3;
    // 幹
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 2*P, y - 6*P, 4*P, 6*P);
    // 葉
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 5*P, y - 10*P, 10*P, 5*P);
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 4*P, y - 12*P, 8*P, 3*P);
    // 目
    ctx.fillStyle = '#ff4444';
    ctx.fillRect(x - 2*P, y - 8*P, 1*P, 1*P);
    ctx.fillRect(x + 1*P, y - 8*P, 1*P, 1*P);
    // 枝(腕)
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 6*P, y - 8*P, 2*P, 4*P);
    ctx.fillRect(x + 4*P, y - 8*P, 2*P, 4*P);
  }

  _drawFlameBoss(ctx, x, y, pal) {
    const P = 3;
    const flicker = Math.sin(this._time * 8) * 0.5;
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 4*P, y - 6*P, 8*P, 6*P);
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 3*P, y - 9*P, 6*P, 4*P);
    ctx.fillRect(x - 2*P, y - 11*P + flicker, 4*P, 3*P);
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 1*P, y - 10*P + flicker, 2*P, 2*P);
    // 目
    ctx.fillStyle = '#fff';
    ctx.fillRect(x - 2*P, y - 5*P, 1*P, 1*P);
    ctx.fillRect(x + 1*P, y - 5*P, 1*P, 1*P);
    // 腕
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 6*P, y - 5*P, 2*P, 3*P);
    ctx.fillRect(x + 4*P, y - 5*P, 2*P, 3*P);
  }

  _drawTentacleBoss(ctx, x, y, pal) {
    const P = 3;
    // 頭
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 4*P, y - 8*P, 8*P, 5*P);
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 3*P, y - 10*P, 6*P, 3*P);
    // 目
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 2*P, y - 7*P, 2*P, 2*P);
    ctx.fillRect(x + 1*P, y - 7*P, 2*P, 2*P);
    // 触手
    const wave = Math.sin(this._time * 3);
    ctx.fillStyle = pal.c1;
    for (let i = -3; i <= 3; i += 2) {
      const tentY = y - 3*P + Math.sin(this._time * 4 + i) * 2;
      ctx.fillRect(x + i*P, tentY, 1*P, 4*P);
    }
  }

  _drawDragonBoss(ctx, x, y, pal) {
    const P = 3;
    // 体
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 4*P, y - 6*P, 8*P, 6*P);
    // 頭
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 6*P, y - 10*P, 5*P, 4*P);
    // 角
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 6*P, y - 12*P, 1*P, 2*P);
    ctx.fillRect(x - 3*P, y - 12*P, 1*P, 2*P);
    // 目
    ctx.fillStyle = '#ff4444';
    ctx.fillRect(x - 5*P, y - 9*P, 1*P, 1*P);
    // 翼
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x + 2*P, y - 10*P, 5*P, 3*P);
    ctx.fillRect(x + 5*P, y - 12*P, 3*P, 2*P);
    // 尻尾
    ctx.fillRect(x + 4*P, y - 3*P, 4*P, 1*P);
  }

  _drawGiantBoss(ctx, x, y, pal) {
    const P = 3;
    // 脚
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 3*P, y - 2*P, 3*P, 2*P);
    ctx.fillRect(x + 1*P, y - 2*P, 3*P, 2*P);
    // 胴
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 4*P, y - 8*P, 9*P, 6*P);
    // 頭
    ctx.fillRect(x - 3*P, y - 11*P, 6*P, 3*P);
    // 冠
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 2*P, y - 13*P, 1*P, 2*P);
    ctx.fillRect(x + 0*P, y - 13*P, 1*P, 2*P);
    ctx.fillRect(x + 2*P, y - 13*P, 1*P, 2*P);
    // 目
    ctx.fillStyle = '#ff8800';
    ctx.fillRect(x - 1*P, y - 10*P, 1*P, 1*P);
    ctx.fillRect(x + 1*P, y - 10*P, 1*P, 1*P);
    // 腕
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 6*P, y - 7*P, 2*P, 5*P);
    ctx.fillRect(x + 5*P, y - 7*P, 2*P, 5*P);
  }

  _drawMageBoss(ctx, x, y, pal) {
    const P = 3;
    // ローブ
    ctx.fillStyle = pal.c3;
    ctx.fillRect(x - 4*P, y - 6*P, 8*P, 6*P);
    ctx.fillRect(x - 5*P, y - 3*P, 10*P, 3*P);
    // 体
    ctx.fillStyle = pal.c1;
    ctx.fillRect(x - 3*P, y - 8*P, 6*P, 3*P);
    // フード
    ctx.fillRect(x - 3*P, y - 11*P, 6*P, 3*P);
    // 目
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 1*P, y - 9*P, 1*P, 1*P);
    ctx.fillRect(x + 1*P, y - 9*P, 1*P, 1*P);
    // 杖
    ctx.fillStyle = pal.c2;
    ctx.fillRect(x - 6*P, y - 12*P, 1*P, 10*P);
    ctx.fillStyle = '#ffd700';
    const glow = Math.sin(this._time * 4) * 0.3 + 0.7;
    ctx.globalAlpha = glow;
    ctx.fillRect(x - 7*P, y - 13*P, 3*P, 2*P);
    ctx.globalAlpha = 1;
  }

  // ── 背景装飾 ──
  _drawTreeSilhouette(ctx, x, groundY, height) {
    ctx.fillRect(x - 1, groundY - height, 3, height);
    ctx.fillRect(x - 5, groundY - height - 4, 11, 6);
    ctx.fillRect(x - 3, groundY - height - 8, 7, 5);
  }
}
