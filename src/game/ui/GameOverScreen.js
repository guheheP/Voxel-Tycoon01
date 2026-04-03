/**
 * GameOverScreen — ゲームオーバー & クリア画面
 */
import { eventBus } from '../core/EventBus.js';

export class GameOverScreen {
  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'gameover-overlay';
    this.el.style.display = 'none';
    document.body.appendChild(this.el);

    eventBus.on('game:over', (d) => this._showGameOver(d));
    eventBus.on('game:clear', (d) => this._showGameClear(d));
  }

  _showGameOver(data) {
    this.el.innerHTML = `
      <div class="gameover-particles gameover-dark-particles"></div>
      <div class="gameover-box gameover-fail">
        <h2>💀 閉店…</h2>
        <p class="gameover-reason">${data.reason || '維持費を支払えませんでした…'}</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">営業日数</span>
            <span class="gameover-stat-value">${data.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${data.totalSales?.toLocaleString('ja-JP') || 0}G</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">最終ランク</span>
            <span class="gameover-stat-value">${data.rank}</span>
          </div>
        </div>
        <button class="btn primary gameover-retry-btn" id="btn-retry">もう一度挑戦する</button>
      </div>
    `;
    this.el.style.display = 'flex';

    // ダークパーティクル生成
    this._spawnParticles('.gameover-dark-particles', 30, ['#555', '#777', '#444', '#666'], true);

    document.getElementById('btn-retry').addEventListener('click', () => {
      location.reload();
    });
  }

  _showGameClear(data) {
    this.el.innerHTML = `
      <div class="gameover-particles gameover-confetti-layer"></div>
      <div class="gameover-particles gameover-fireworks-layer"></div>
      <div class="gameover-box gameover-clear">
        <h2>🎉 おめでとう！</h2>
        <p class="gameover-reason">伝説のアイテム工房に到達しました！</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">達成日数</span>
            <span class="gameover-stat-value">${data.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${data.totalSales?.toLocaleString('ja-JP') || 0}G</span>
          </div>
        </div>
        <p class="gameover-continue-msg">このまま経営を続けることもできます。</p>
        <div class="gameover-buttons">
          <button class="btn gameover-continue-btn" id="btn-continue">経営を続ける</button>
          <button class="btn primary gameover-retry-btn" id="btn-newgame">新しく始める</button>
        </div>
      </div>
    `;
    this.el.style.display = 'flex';

    // 紙吹雪
    const confettiColors = ['#e8b84b', '#7daa68', '#c47a5a', '#7ab0c4', '#f5e6c8', '#ff9955', '#fff', '#ffd700'];
    this._spawnParticles('.gameover-confetti-layer', 80, confettiColors, false);

    // 花火パーティクル
    this._spawnFireworks('.gameover-fireworks-layer', 30);

    document.getElementById('btn-continue').addEventListener('click', () => {
      this.el.style.display = 'none';
    });
    document.getElementById('btn-newgame').addEventListener('click', () => {
      location.reload();
    });
  }

  /** CSS紙吹雪パーティクル生成 */
  _spawnParticles(selector, count, colors, isDark) {
    const container = this.el.querySelector(selector);
    if (!container) return;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = isDark ? 'gameover-dark-particle' : 'gameover-confetti-piece';
      p.style.left = `${Math.random() * 100}%`;
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDelay = `${Math.random() * 4}s`;
      p.style.animationDuration = `${2 + Math.random() * 3}s`;
      if (!isDark) {
        p.style.width = `${4 + Math.random() * 8}px`;
        p.style.height = `${3 + Math.random() * 6}px`;
      }
      container.appendChild(p);
    }
  }

  /** 花火パーティクル生成 */
  _spawnFireworks(selector, count) {
    const container = this.el.querySelector(selector);
    if (!container) return;
    const colors = ['#e8b84b', '#ff6b6b', '#7daa68', '#7ab0c4', '#ff9955', '#ffd700'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'gameover-firework';
      p.style.left = `${10 + Math.random() * 80}%`;
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDelay = `${Math.random() * 5}s`;
      p.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      container.appendChild(p);
    }
  }
}

