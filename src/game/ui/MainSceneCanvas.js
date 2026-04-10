/**
 * MainSceneCanvas — 2D ピクセルアート風メインシーン（お店）描画
 * 内部解像度 480×120 をキャンバスで描き、CSS で拡大表示
 */
import { eventBus } from '../core/EventBus.js';

// キャラクター用パレット
const PALETTES = {
  player:   { head:'#d4a017', skin:'#f0c8a0', body:'#4a7a2a', legs:'#321', accent:'#a05020' }, // 店主
  knight:   { head:'#708090', skin:'#f0c8a0', body:'#b0b8c0', legs:'#5a3828', accent:'#b83030' },
  archer:   { head:'#2d5016', skin:'#f0c8a0', body:'#8b6914', legs:'#4a3828', accent:'#2d5016' },
  mage:     { head:'#6a3d9a', skin:'#f0c8a0', body:'#4a5a9a', legs:'#3a3050', accent:'#8b5cf6' },
  villager: { head:'#403020', skin:'#f0c8a0', body:'#8b6914', legs:'#4a3828', accent:'#2d5016' }, // 一般客
};

const GROUND_Y = 100;

export class MainSceneCanvas {
  constructor() {
    this.scale = 1.6; // 描画拡大率
    this.canvas = null;
    this.ctx = null;
    this.W = Math.floor(480 / this.scale);
    this.H = Math.floor(120 / this.scale);
    this._time = 0;
    this._animId = null;
    this._disposed = false;

    this.dayProgress = 0; // 0.0~1.0 (昼〜夜〜朝)
    this.shopRank = 1;
    this._customers = [];
    this._returningAdvs = [];
    this._particles = [];
    this._unsubs = [];
    this._handleResize = null;
  }

  get shopX() { return this.W / 2; }
  get groundY() { return this.H - 20; }

  init(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'main-canvas';
    this.canvas.height = this.H;
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    // リサイズ処理
    this._handleResize = () => {
      this.W = Math.floor((container.clientWidth || 480) / this.scale);
      this.canvas.width = this.W;
      
      // お客さん等の画面外調整 (右寄りに再設定)
      for (const c of this._customers) {
        if (c.x > this.W) c.x = this.W + 20;
      }
    };
    window.addEventListener('resize', this._handleResize);
    this._handleResize();

    // イベントフック
    this._unsubs = [
      eventBus.on('customer:arrived', (d) => this._onCustomerArrived(d)),
      eventBus.on('customer:bought', (d) => this._onCustomerLeft(d.customer.id)),
      eventBus.on('customer:left', (d) => this._onCustomerLeft(d.customer.id)),
      eventBus.on('item:sold', (d) => this._onItemSold()),
      eventBus.on('item:crafted', (d) => this._onItemCrafted(d.item)),
      eventBus.on('adventurer:return', (d) => this._onAdventurerReturn()),
      eventBus.on('adventurer:depart', (d) => this._onAdventurerDepart()),
      eventBus.on('rank:up', (d) => this._onRankUp(d.index + 1))
    ];

    this._startLoop();
  }

  setDayProgress(p) {
    this.dayProgress = p;
  }

  setShopRank(rank) {
    this.shopRank = rank;
  }

  _onRankUp(rank) {
    this.shopRank = rank;
    this._spawnConfetti(50);
  }

  _onCustomerArrived(data) {
    const isLeft = Math.random() < 0.5;
    this._customers.push({
      id: data.customer.id,
      palette: PALETTES[data.customer.type || 'villager'],
      dialogue: data.customer.dialogue,
      x: this.shopX + (isLeft ? -150 : 150),
      y: this.groundY,
      state: 'arriving', // arriving -> browsing -> leaving
      targetX: this.shopX + (isLeft ? -35 : 35) + (Math.random() * 20 - 10),
      timer: 0,
      alpha: 0,
      dir: isLeft ? 1 : -1
    });
  }

  _onCustomerLeft(cid) {
    const c = this._customers.find(c => c.id === cid);
    if (c && c.state !== 'leaving') {
      c.state = 'leaving';
      c.timer = 0; // 帰り用タイマーをリセット
      // 帰る方向を中心から遠ざかる方向に設定
      c.dir = c.x < this.shopX ? -1 : 1;
    }
  }

  _onAdventurerReturn() {
    this._returningAdvs.push({
      palette: PALETTES.knight,
      x: this.shopX - 150,
      y: this.groundY,
      targetX: this.shopX - 45,
      state: 'walking',
      timer: 0,
      alpha: 0,
      dir: 1
    });
  }

  _onAdventurerDepart() {
    this._returningAdvs.push({
      palette: PALETTES.knight,
      x: this.shopX - 45,
      y: this.groundY,
      targetX: this.shopX - 150,
      state: 'leaving',
      timer: 0,
      alpha: 1,
      dir: -1
    });
  }

  _onItemSold() {
    this._spawnCoins(this.shopX + 20, this.groundY - 15, 5);
  }

  _onItemCrafted(item) {
    const count = item && item.quality >= 60 ? 10 : 5;
    this._spawnStars(this.shopX - 20, this.groundY - 20, count);
  }

  // ── パーティクル生成 ──
  _spawnCoins(x, y, count) {
    for (let i=0; i<count; i++) {
      this._particles.push({
        type: 'coin', x, y,
        vx: (Math.random()-0.5)*60, vy: -30 - Math.random()*30,
        life: 1.0 + Math.random()*0.5
      });
    }
  }
  _spawnStars(x, y, count) {
    for (let i=0; i<count; i++) {
      this._particles.push({
        type: 'star', x, y,
        vx: (Math.random()-0.5)*60, vy: -20 - Math.random()*40,
        life: 0.8 + Math.random()*0.4
      });
    }
  }
  _spawnConfetti(count) {
    for (let i=0; i<count; i++) {
      const colors = ['#fca311','#e63946','#457b9d','#7ddd88','#ff6b35','#a855f7'];
      this._particles.push({
        type: 'confetti',
        color: colors[Math.floor(Math.random() * colors.length)],
        x: Math.random() * this.W,
        y: -10, // 画面上端のすぐ外側から
        vx: (Math.random()-0.5)*20, vy: 10 + Math.random()*20,
        life: 3.0 + Math.random()*2.0
      });
    }
  }

  _spawnAmbientParticle() {
    if (this._particles.filter(p => p.type === 'ambient').length > 20) return;
    const isNight = this.dayProgress > 0.7; // 夕方〜夜は蛍風に
    this._particles.push({
      type: 'ambient',
      x: Math.random() * this.W,
      y: Math.random() * this.groundY,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 4 - 2, // ふわふわ上へ
      life: 5.0 + Math.random() * 5.0,
      maxLife: 10.0,
      phase: Math.random() * Math.PI * 2,
      isFirefly: isNight
    });
  }

  _startLoop() {
    let last = performance.now();
    const tick = (now) => {
      if (this._disposed) return;
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
    // お客様の更新
    for (let i = this._customers.length - 1; i >= 0; i--) {
      const c = this._customers[i];
      if (c.state === 'arriving') {
        c.alpha = Math.min(1, c.alpha + dt * 2); // フェードイン
        c.x += c.dir * 40 * dt;
        if ((c.dir > 0 && c.x >= c.targetX) || (c.dir < 0 && c.x <= c.targetX)) {
          c.x = c.targetX;
          c.state = 'browsing';
          c.timer = 0;
        }
      } else if (c.state === 'browsing') {
        c.timer += dt;
        if (c.timer > 30) c.state = 'leaving'; // timeout safe-guard
      } else if (c.state === 'leaving') {
        c.x += c.dir * 50 * dt;
        c.timer += dt;
        if (c.timer > 1.0) { // 1秒歩いてからフェードアウト開始
          c.alpha = Math.max(0, c.alpha - dt * 1.5);
          if (c.alpha <= 0) {
            this._customers.splice(i, 1);
          }
        }
      }
    }

    // 冒険者の更新
    for (let i = this._returningAdvs.length - 1; i >= 0; i--) {
      const a = this._returningAdvs[i];
      if (a.state === 'walking') {
        a.alpha = Math.min(1, a.alpha + dt * 2);
        a.x += a.dir * 50 * dt;
        if ((a.dir > 0 && a.x >= a.targetX) || (a.dir < 0 && a.x <= a.targetX)) {
          a.x = a.targetX;
          a.state = 'idle';
          a.timer = 2.0;
        }
      } else if (a.state === 'idle') {
        a.timer -= dt;
        if (a.timer <= 0) {
          a.alpha = Math.max(0, a.alpha - dt * 2);
          if (a.alpha <= 0) this._returningAdvs.splice(i, 1);
        }
      } else if (a.state === 'leaving') {
        // 出発時
        a.x += a.dir * 50 * dt;
        a.timer += dt;
        if (a.timer > 1.0) {
          a.alpha = Math.max(0, a.alpha - dt * 1.5);
          if (a.alpha <= 0) this._returningAdvs.splice(i, 1);
        }
      }
    }

    // 環境パーティクル生成 (ランダム確率で)
    if (Math.random() < dt * 4) this._spawnAmbientParticle();

    // パーティクルの更新
    for (let i = this._particles.length - 1; i >= 0; i--) {
      const p = this._particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      if (p.type === 'ambient') {
        p.x += Math.sin(this._time * 2 + p.phase) * 10 * dt; // 揺らめき
        if (p.y < -10) p.life = 0; // 上に消える
      } else if (p.type === 'coin' || p.type === 'confetti') {
        p.vy += 150 * dt; // 重力
        if (p.y > this.groundY) {
          p.y = this.groundY;
          p.vy *= -0.5;
          p.vx *= 0.8;
        }
      }
      p.life -= dt;
      if (p.life <= 0) this._particles.splice(i, 1);
    }
  }

  _draw() {
    const ctx = this.ctx;
    const W = this.W, H = this.H;
    ctx.imageSmoothingEnabled = false;

    // 空の描画 (時間によるグラデーション補間)
    const skyColors = this._getSkyColors(this.dayProgress);
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, skyColors.top);
    grad.addColorStop(1, skyColors.bottom);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);



    // 遠景シルエット (森)
    ctx.fillStyle = skyColors.silhouette;
    this._drawSihouetteLayer(ctx);

    // 地面
    ctx.fillStyle = '#1e1e2a';
    ctx.fillRect(0, this.groundY + 4, W, H - this.groundY - 4);
    ctx.fillStyle = '#2a2a3a';
    ctx.fillRect(0, this.groundY + 2, W, 3);
    ctx.fillStyle = '#3a3a4e';
    ctx.fillRect(0, this.groundY, W, 2);

    // ショップ（カウンター、テント等）
    this._drawShop(ctx, this.shopX, this.groundY);

    // キャラクタ
    // 店主
    this._drawCharacter(ctx, this.shopX - 15, this.groundY, PALETTES.player, false, Math.sin(this._time*2)*1.5, 1);
    
    // 来客
    for (const c of this._customers) {
      const walking = c.state !== 'browsing';
      const bob = walking ? Math.sin(c.x * 0.4) * 2 : Math.sin(this._time * 2 + c.id * 0.5) * 1.5;
      const flip = c.dir === -1;
      this._drawCharacter(ctx, c.x, c.y + bob, c.palette, flip, 0, c.alpha);
      
      // 来店時は吹き出しを表示
      if (c.state === 'arriving' && c.dialogue && c.alpha > 0.5) {
        // アルファでふわっと出す
        const bubbleAlpha = Math.min(1, (c.alpha - 0.5) * 2);
        ctx.globalAlpha = bubbleAlpha;
        this._drawSpeechBubble(ctx, c.x, c.y - 25, c.dialogue);
        ctx.globalAlpha = 1;
      }
    }

    // 冒険者
    for (const a of this._returningAdvs) {
      const walking = a.state === 'walking' || a.state === 'leaving';
      const bob = walking ? Math.sin(a.x * 0.4) * 2 : 0;
      const flip = a.dir === -1;
      this._drawCharacter(ctx, a.x, a.y + bob, a.palette, flip, 0, a.alpha);
    }

    // パーティクル
    this._drawParticles(ctx);

    // 夜間の半透明オーバーレイ
    if (this.dayProgress > 0.8) {
      const alpha = (this.dayProgress - 0.8) / 0.2 * 0.5;
      ctx.fillStyle = `rgba(10, 10, 20, ${alpha})`;
      ctx.fillRect(0, 0, W, H);
    }
  }

  // ── 描画ユーティリティ ──

  _getSkyColors(p) {
    const STAGES = [
      { p: 0.0, top: '#3b6e96', bottom: '#ffcca0', silhouette: '#2a3a4a' }, // 朝焼け
      { p: 0.2, top: '#5ba1f5', bottom: '#b4e3ff', silhouette: '#3a5a7a' }, // 昼（鮮やかな水色）
      { p: 0.6, top: '#5ba1f5', bottom: '#b4e3ff', silhouette: '#3a5a7a' }, // 昼維持
      { p: 0.8, top: '#ff9040', bottom: '#ff4020', silhouette: '#402020' }, // 夕方
      { p: 1.0, top: '#0a0a14', bottom: '#1a1a28', silhouette: '#101018' }, // 夜
    ];
    let s1 = STAGES[0], s2 = STAGES[1];
    for (let i = 0; i < STAGES.length - 1; i++) {
      if (p >= STAGES[i].p && p <= STAGES[i+1].p) {
        s1 = STAGES[i]; s2 = STAGES[i+1]; break;
      }
    }
    const t = (p - s1.p) / (s2.p - s1.p) || 0;
    return {
      top: this._lerpColor(s1.top, s2.top, t),
      bottom: this._lerpColor(s1.bottom, s2.bottom, t),
      silhouette: this._lerpColor(s1.silhouette, s2.silhouette, t) 
    };
  }

  _lerpColor(hexA, hexB, t) {
    const rA = parseInt(hexA.slice(1, 3), 16), gA = parseInt(hexA.slice(3, 5), 16), bA = parseInt(hexA.slice(5, 7), 16);
    const rB = parseInt(hexB.slice(1, 3), 16), gB = parseInt(hexB.slice(3, 5), 16), bB = parseInt(hexB.slice(5, 7), 16);
    const r = Math.round(rA + (rB - rA) * t).toString(16).padStart(2, '0');
    const g = Math.round(gA + (gB - gA) * t).toString(16).padStart(2, '0');
    const b = Math.round(bA + (bB - bA) * t).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }



  _drawSihouetteLayer(ctx) {
    // 画面全体に木を敷き詰める（スクロールなし固定）
    // Math.sin を使ってランダムっぽく配置
    for (let i = -1; i < this.W / 40 + 2; i++) {
      const bx = i * 40;
      const hScale = Math.sin(i * 1234.5) * 0.3 + 1.0; // 0.7 ~ 1.3
      const offX = Math.cos(i * 4321.0) * 15;
      const tx = bx + offX;

      // 幹
      ctx.fillRect(tx + 18, this.groundY - 20 * hScale, 4, 20 * hScale);
      // 葉っぱ（円形に近似した四角形と段）
      ctx.fillRect(tx + 5, this.groundY - 35 * hScale, 30, 20 * hScale);
      ctx.fillRect(tx + 10, this.groundY - 45 * hScale, 20, 15 * hScale);
      ctx.fillRect(tx + 15, this.groundY - 55 * hScale, 10, 15 * hScale);
    }
  }

  _drawShop(ctx, x, y) {
    const P = 2;
    
    // カウンター本体
    ctx.fillStyle = '#6a4a2a'; // 木のベース
    ctx.fillRect(x - 30, y - 20, 60, 20);
    // 天板
    ctx.fillStyle = '#8b6914';
    ctx.fillRect(x - 35, y - 22, 70, 4);

    // ランクに応じた装飾
    if (this.shopRank >= 2) {
      // 日除けテント
      ctx.fillStyle = '#e63946';
      ctx.fillRect(x - 45, y - 50, 90, 8);
      ctx.fillStyle = '#f1faee';
      for (let i=0; i<9; i++) {
        if (i%2!==0) ctx.fillRect(x - 45 + i*10, y - 50, 10, 8);
      }
      ctx.fillStyle = '#a83030';
      ctx.fillRect(x - 45, y - 42, 90, 2);
    }
    
    if (this.shopRank >= 3) {
      // 看板
      ctx.fillStyle = '#4a2a1a';
      ctx.fillRect(x - 40, y - 65, 80, 15);
      ctx.fillStyle = '#d4a017'; // 文字っぽい点
      ctx.fillRect(x - 20, y - 60, 40, 5);
      // 柱
      ctx.fillStyle = '#5a3a2a';
      ctx.fillRect(x - 45, y - 65, 4, 45);
      ctx.fillRect(x + 41, y - 65, 4, 45);
    }

    if (this.shopRank >= 4) {
      // 左右のディスプレイや樽
      ctx.fillStyle = '#5a4a3a';
      ctx.fillRect(x + 35, y - 15, 15, 15); // 箱
      ctx.fillStyle = '#8b6914';
      ctx.fillRect(x - 50, y - 12, 12, 12); // 樽
    }
  }

  _drawCharacter(ctx, x, y, pal, flip, atkOffset, alpha = 1) {
    if (alpha <= 0) return;
    const P = 2;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    if (flip) ctx.scale(-1, 1);

    // 影
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(-6, 2, 12, 3);

    const dx = atkOffset;

    // 足
    ctx.fillStyle = pal.legs;
    ctx.fillRect(dx - 1*P, - 1*P, 2*P, 2*P);
    ctx.fillRect(dx + 2*P, - 1*P, 2*P, 2*P);
    // 胴体
    ctx.fillStyle = pal.body;
    ctx.fillRect(dx - 2*P, - 5*P, 6*P, 4*P);
    // アクセント
    ctx.fillStyle = pal.accent;
    ctx.fillRect(dx - 2*P, - 2*P, 6*P, 1*P);
    // 顔
    ctx.fillStyle = pal.skin;
    ctx.fillRect(dx - 1*P, - 7*P, 4*P, 2*P);
    // 頭(髪/兜)
    ctx.fillStyle = pal.head;
    ctx.fillRect(dx - 1*P, - 9*P, 4*P, 2*P);
    // 目
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(dx - 1*P, - 7*P, 1*P, 1*P);

    ctx.restore();
  }

  _drawSpeechBubble(ctx, x, y, text) {
    ctx.save();
    ctx.font = '10px sans-serif';
    const paddingX = 6;
    const paddingY = 4;
    const textMetrics = ctx.measureText(text);
    const w = textMetrics.width + paddingX * 2;
    const h = 18;
    
    const bx = x - w / 2;
    const by = y - h;

    // 吹き出し本体
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.strokeStyle = '#4a3828';
    ctx.lineWidth = 1;
    
    ctx.beginPath();
    // roundRectはモダンブラウザ向け
    if (ctx.roundRect) {
      ctx.roundRect(bx, by, w, h, 3);
    } else {
      ctx.rect(bx, by, w, h);
    }
    ctx.fill();
    ctx.stroke();

    // 尻尾
    ctx.beginPath();
    ctx.moveTo(x - 3, by + h);
    ctx.lineTo(x + 3, by + h);
    ctx.lineTo(x, by + h + 4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // 尻尾と本体の境界線を消すため上塗り
    ctx.beginPath();
    ctx.moveTo(x - 2, by + h);
    ctx.lineTo(x + 2, by + h);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.stroke();

    // テキスト
    ctx.fillStyle = '#111';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, by + h / 2 + 1);
    
    ctx.restore();
  }

  _drawParticles(ctx) {
    for (const p of this._particles) {
      if (p.type === 'coin') {
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
        ctx.fill();
      } else if (p.type === 'star') {
        const a = (p.life / 1.2);
        ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
        ctx.fillRect(p.x - 1, p.y - 1, 3, 3);
      } else if (p.type === 'confetti') {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 4, 4);
      } else if (p.type === 'ambient') {
        // 出現時と消滅時にフェード計算
        const a = p.life < 2 ? p.life / 2 : (p.maxLife - p.life < 2 ? (p.maxLife - p.life) / 2 : 1);
        if (p.isFirefly) {
          ctx.fillStyle = `rgba(180, 255, 120, ${a * 0.8})`;
          ctx.fillRect(Math.floor(p.x), Math.floor(p.y), 2, 2);
          ctx.fillStyle = `rgba(180, 255, 120, ${a * 0.2})`; // グロー
          ctx.fillRect(Math.floor(p.x) - 2, Math.floor(p.y) - 2, 6, 6);
        } else {
          ctx.fillStyle = `rgba(255, 230, 150, ${a * 0.4})`; // 昼の埃/綿毛
          ctx.fillRect(Math.floor(p.x), Math.floor(p.y), 1, 1);
        }
      }
    }
  }

  dispose() {
    this._disposed = true;
    if (this._animId) cancelAnimationFrame(this._animId);
    if (this._handleResize) {
      window.removeEventListener('resize', this._handleResize);
      this._handleResize = null;
    }
    this._unsubs.forEach(u => u());
    this._unsubs = [];
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.remove();
    }
  }
}
