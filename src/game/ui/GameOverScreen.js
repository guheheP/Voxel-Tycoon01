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
    eventBus.on('game:cleared', (d) => this._showGameClear(d));
  }

  _showGameOver(data) {
    this.el.innerHTML = `
      <div class="gameover-box gameover-fail">
        <h2>💀 閉店…</h2>
        <p class="gameover-reason">${data.reason}</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">営業日数</span>
            <span class="gameover-stat-value">${data.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${data.totalSales}G</span>
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
    document.getElementById('btn-retry').addEventListener('click', () => {
      location.reload();
    });
  }

  _showGameClear(data) {
    this.el.innerHTML = `
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
            <span class="gameover-stat-value">${data.totalSales}G</span>
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
    document.getElementById('btn-continue').addEventListener('click', () => {
      this.el.style.display = 'none';
    });
    document.getElementById('btn-newgame').addEventListener('click', () => {
      location.reload();
    });
  }
}
