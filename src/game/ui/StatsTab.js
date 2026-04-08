/**
 * StatsTab — 統計ダッシュボードUI（売上グラフ・実績サマリー）
 */
import { StatsTracker } from '../StatsTracker.js';

export class StatsTab {
  constructor(dayCycleSystem, reputationSystem) {
    this.dayCycle = dayCycleSystem;
    this.reputation = reputationSystem;
  }

  render() {
    const el = document.getElementById('tab-stats');
    if (!el) return;

    const stats = StatsTracker;
    const avgSales = stats.getAverageDailySales(7);
    const custRate = stats.totalCustomersServed + stats.totalCustomersLost > 0
      ? Math.round((stats.totalCustomersServed / (stats.totalCustomersServed + stats.totalCustomersLost)) * 100)
      : 0;

    el.innerHTML = `
      <h2 class="section-title">📊 経営ダッシュボード</h2>

      <div class="stats-grid">
        <div class="stats-card stats-card-gold">
          <div class="stats-card-icon">🪙</div>
          <div class="stats-card-value">${stats.totalGoldEarned}G</div>
          <div class="stats-card-label">累計売上</div>
        </div>
        <div class="stats-card stats-card-items">
          <div class="stats-card-icon">📦</div>
          <div class="stats-card-value">${stats.totalItemsSold}</div>
          <div class="stats-card-label">販売数</div>
        </div>
        <div class="stats-card stats-card-craft">
          <div class="stats-card-icon">⚒️</div>
          <div class="stats-card-value">${stats.totalItemsCrafted}</div>
          <div class="stats-card-label">調合数</div>
        </div>
        <div class="stats-card stats-card-cust">
          <div class="stats-card-icon">👥</div>
          <div class="stats-card-value">${custRate}%</div>
          <div class="stats-card-label">接客成功率</div>
        </div>
      </div>

      <div class="stats-section">
        <h3 class="stats-section-title">📈 日別売上推移</h3>
        <div class="stats-chart-container">
          <canvas id="stats-chart" height="160"></canvas>
        </div>
        <div class="stats-avg">直近7日平均: <strong>${avgSales}G</strong> / 日</div>
      </div>

      <div class="stats-two-col">
        <div class="stats-section">
          <h3 class="stats-section-title">🏷️ カテゴリ別売上</h3>
          <div class="stats-category-list">
            ${this._renderCategoryBars(stats)}
          </div>
        </div>

        <div class="stats-section">
          <h3 class="stats-section-title">🏆 実績</h3>
          <div class="stats-achievements">
            ${this._renderAchievements(stats)}
          </div>
        </div>
      </div>
    `;

    // Chart описание
    this._drawChart(stats.dailySales);
  }

  _renderCategoryBars(stats) {
    const categories = [
      { key: 'equipment', name: '装備', icon: '⚔️', color: '#e8b84b' },
      { key: 'consumable', name: '消耗品', icon: '🧪', color: '#7bc96f' },
      { key: 'accessory', name: 'アクセ', icon: '💎', color: '#6bb5e8' },
      { key: 'material', name: '素材', icon: '🪨', color: '#a08060' },
    ];
    const total = Object.values(stats.salesByType).reduce((a, b) => a + b, 0) || 1;

    return categories.map(cat => {
      const val = stats.salesByType[cat.key] || 0;
      const pct = Math.round((val / total) * 100);
      return `
        <div class="stats-category-row">
          <span class="stats-cat-label">${cat.icon} ${cat.name}</span>
          <div class="stats-cat-bar">
            <div class="stats-cat-fill" style="width:${pct}%; background:${cat.color}"></div>
          </div>
          <span class="stats-cat-value">${val}G (${pct}%)</span>
        </div>
      `;
    }).join('');
  }

  _renderAchievements(stats) {
    const achievements = [
      { name: '初めての販売', check: stats.totalItemsSold >= 1, icon: '🎯' },
      { name: '10個販売', check: stats.totalItemsSold >= 10, icon: '📦' },
      { name: '50個販売', check: stats.totalItemsSold >= 50, icon: '🏬' },
      { name: '初めての配置調合', check: stats.totalPuzzlesPlayed >= 1, icon: '🧩' },
      { name: '配置マスター', check: stats.bestPuzzleScore >= 19, icon: '🌟' },
      { name: '接客率80%以上', check: (stats.totalCustomersServed / Math.max(1, stats.totalCustomersServed + stats.totalCustomersLost)) >= 0.8, icon: '💫' },
      { name: '累計売上1000G', check: stats.totalGoldEarned >= 1000, icon: '💰' },
      { name: '累計売上5000G', check: stats.totalGoldEarned >= 5000, icon: '👑' },
    ];

    return achievements.map(a => `
      <div class="stats-achievement ${a.check ? 'achieved' : ''}">
        <span class="stats-ach-icon">${a.icon}</span>
        <span class="stats-ach-name">${a.name}</span>
        ${a.check ? '<span class="stats-ach-done">✓</span>' : ''}
      </div>
    `).join('');
  }

  _drawChart(dailySales) {
    const canvas = document.getElementById('stats-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    // コンテナ幅に合わせてcanvasサイズを設定
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.clientWidth;
    }
    const W = canvas.width;
    const H = canvas.height;
    const padding = { top: 10, right: 10, bottom: 25, left: 40 };
    const chartW = W - padding.left - padding.right;
    const chartH = H - padding.top - padding.bottom;

    ctx.clearRect(0, 0, W, H);

    if (dailySales.length === 0) {
      ctx.fillStyle = 'rgba(200,180,140,0.3)';
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('データなし — 1日目が完了すると表示されます', W / 2, H / 2);
      return;
    }

    const maxVal = Math.max(...dailySales, 1);
    const barW = Math.min(30, chartW / dailySales.length - 2);
    const gap = (chartW - barW * dailySales.length) / (dailySales.length + 1);

    // Grid lines
    ctx.strokeStyle = 'rgba(200,180,140,0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + chartH * (1 - i / 4);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(W - padding.right, y);
      ctx.stroke();

      ctx.fillStyle = 'rgba(200,180,140,0.4)';
      ctx.font = '9px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`${Math.round(maxVal * i / 4)}`, padding.left - 4, y + 3);
    }

    // Bars
    const gradient = ctx.createLinearGradient(0, padding.top, 0, H - padding.bottom);
    gradient.addColorStop(0, '#e8b84b');
    gradient.addColorStop(1, '#a07830');

    dailySales.forEach((val, i) => {
      const x = padding.left + gap + i * (barW + gap);
      const barH = (val / maxVal) * chartH;
      const y = padding.top + chartH - barH;

      // Bar
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [3, 3, 0, 0]);
      ctx.fill();

      // Day label
      ctx.fillStyle = 'rgba(200,180,140,0.5)';
      ctx.font = '8px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${i + 1}日`, x + barW / 2, H - 5);
    });
  }
}
