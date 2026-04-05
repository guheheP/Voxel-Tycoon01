/**
 * SimulatorPanel — ゲーム内バランス調整デバッグパネル
 * ` キーでトグル（DEV モードのみ main.js で初期化される）
 */
import { runBattleMonteCarlo, getAllBosses, getAllAdventurerDefs as getBattleAdvDefs } from '../simulator/BattleSim.js';
import { simulateExploration, getAllAreas as getExploreAreas, getAllAdventurerDefs as getExploreAdvDefs } from '../simulator/ExploreSim.js';
import { simulateEconomy, getAllAreas as getEconAreas, getAllAdventurerDefs as getEconAdvDefs, getRanks } from '../simulator/EconomySim.js';
import { drawBarChart, drawLineChart } from '../simulator/SimChart.js';


export class SimulatorPanel {
  constructor() {
    this.isOpen = false;
    this.activeTab = 'battle';
    this.el = null;
    this._buildDOM();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    if (!this.el.parentNode) document.body.appendChild(this.el);
    requestAnimationFrame(() => this.el.classList.add('sim-panel-visible'));
  }

  close() {
    this.isOpen = false;
    this.el.classList.remove('sim-panel-visible');
  }

  _buildDOM() {
    this.el = document.createElement('div');
    this.el.className = 'sim-panel-overlay';
    this.el.innerHTML = `
      <div class="sim-panel">
        <div class="sim-panel-header">
          <span class="sim-panel-title">🧪 デバッグシミュレータ</span>
          <div class="sim-tab-bar">
            <button class="sim-tab-btn active" data-tab="battle">⚔️ バトル</button>
            <button class="sim-tab-btn" data-tab="explore">🗺️ 探索</button>
            <button class="sim-tab-btn" data-tab="economy">💰 経済</button>
          </div>
          <button class="sim-close-btn" title="閉じる (`)">✕</button>
        </div>
        <div class="sim-panel-body">
          <div id="sim-tab-battle" class="sim-tab-content active"></div>
          <div id="sim-tab-explore" class="sim-tab-content"></div>
          <div id="sim-tab-economy" class="sim-tab-content"></div>
        </div>
      </div>
    `;

    this.el.querySelectorAll('.sim-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => this._switchTab(btn.dataset.tab));
    });
    this.el.querySelector('.sim-close-btn').addEventListener('click', () => this.close());
    // オーバーレイクリックで閉じる
    this.el.addEventListener('click', (e) => {
      if (e.target === this.el) this.close();
    });

    this._buildBattleTab();
    this._buildExploreTab();
    this._buildEconomyTab();
  }

  _switchTab(tab) {
    this.activeTab = tab;
    this.el.querySelectorAll('.sim-tab-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.tab === tab));
    this.el.querySelectorAll('.sim-tab-content').forEach(c =>
      c.classList.toggle('active', c.id === `sim-tab-${tab}`));
  }

  // ─────────────────── Battle Tab ───────────────────

  _buildBattleTab() {
    const container = this.el.querySelector('#sim-tab-battle');
    const bosses = getAllBosses();
    const advDefs = getBattleAdvDefs();

    const bossOptions = bosses.map(b =>
      `<option value="${b.areaId}">${b.boss.icon} ${b.boss.name} (${b.areaName})</option>`
    ).join('');

    const advCheckboxes = advDefs.map(def =>
      `<label class="sim-check-label">
        <input type="checkbox" class="sim-adv-check" value="${def.id}" ${['adv_knight','adv_archer'].includes(def.id) ? 'checked' : ''}>
        ${def.icon} ${def.name}
      </label>`
    ).join('');

    container.innerHTML = `
      <div class="sim-controls">
        <div class="sim-field">
          <label>ボス</label>
          <select id="sim-boss-select">${bossOptions}</select>
        </div>
        <div class="sim-field">
          <label>冒険者</label>
          <div class="sim-check-group">${advCheckboxes}</div>
        </div>
        <div class="sim-field sim-field-row">
          <div>
            <label>レベル</label>
            <input type="number" id="sim-battle-level" value="1" min="1" max="10" class="sim-input-sm">
          </div>
          <div>
            <label>武器品質</label>
            <input type="number" id="sim-battle-weaponq" value="0" min="0" max="100" class="sim-input-sm">
          </div>
          <div>
            <label>試行回数</label>
            <select id="sim-battle-iter">
              <option value="100">100</option>
              <option value="200" selected>200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
          </div>
        </div>
        <button class="sim-run-btn" id="sim-battle-run">▶ シミュレート</button>
      </div>
      <div class="sim-results" id="sim-battle-results" style="display:none">
        <div class="sim-result-grid" id="sim-battle-stats"></div>
        <canvas id="sim-battle-canvas" width="480" height="180"></canvas>
      </div>
    `;

    container.querySelector('#sim-battle-run').addEventListener('click', () => this._runBattle());
  }

  _runBattle() {
    const bossAreaId = this.el.querySelector('#sim-boss-select').value;
    const level = parseInt(this.el.querySelector('#sim-battle-level').value) || 1;
    const weaponQ = parseInt(this.el.querySelector('#sim-battle-weaponq').value) || 0;
    const iterations = parseInt(this.el.querySelector('#sim-battle-iter').value) || 200;

    const checkedAdvs = [...this.el.querySelectorAll('.sim-adv-check:checked')].map(c => c.value);
    if (checkedAdvs.length === 0) {
      alert('冒険者を1人以上選択してください');
      return;
    }

    const btn = this.el.querySelector('#sim-battle-run');
    btn.disabled = true;
    btn.textContent = '計算中...';

    // 非同期にして UI をブロックしないようにする
    setTimeout(() => {
      try {
        const result = runBattleMonteCarlo({
          adventurerIds: checkedAdvs,
          levels: checkedAdvs.map(() => level),
          weaponQualities: checkedAdvs.map(() => weaponQ),
          bossAreaId,
        }, iterations);

        const statsEl = this.el.querySelector('#sim-battle-stats');
        const rateColor = result.winRate >= 70 ? '#69db7c' : result.winRate >= 40 ? '#ffa94d' : '#ff6b6b';
        statsEl.innerHTML = `
          <div class="sim-stat-card">
            <span class="sim-stat-label">勝率</span>
            <span class="sim-stat-value" style="color:${rateColor}">${result.winRate}%</span>
          </div>
          <div class="sim-stat-card">
            <span class="sim-stat-label">平均戦闘時間</span>
            <span class="sim-stat-value">${result.avgTime}s</span>
          </div>
          <div class="sim-stat-card">
            <span class="sim-stat-label">最短</span>
            <span class="sim-stat-value">${result.minTime}s</span>
          </div>
          <div class="sim-stat-card">
            <span class="sim-stat-label">最長</span>
            <span class="sim-stat-value">${result.maxTime}s</span>
          </div>
          <div class="sim-stat-card">
            <span class="sim-stat-label">勝利/敗北</span>
            <span class="sim-stat-value">${result.wins}/${result.total - result.wins}</span>
          </div>
        `;

        const canvas = this.el.querySelector('#sim-battle-canvas');
        drawBarChart(canvas, [
          { label: '勝利', value: result.wins, color: '#69db7c' },
          { label: '敗北', value: result.total - result.wins, color: '#ff6b6b' },
        ], { title: `${iterations}回シミュレーション結果`, yUnit: '回' });

        this.el.querySelector('#sim-battle-results').style.display = 'block';
      } catch (e) {
        console.error(e);
        alert('エラー: ' + e.message);
      } finally {
        btn.disabled = false;
        btn.textContent = '▶ シミュレート';
      }
    }, 10);
  }

  // ─────────────────── Explore Tab ───────────────────

  _buildExploreTab() {
    const container = this.el.querySelector('#sim-tab-explore');
    const areas = getExploreAreas();
    const advDefs = getExploreAdvDefs();

    const areaOptions = areas.map(a =>
      `<option value="${a.id}">${a.icon} ${a.name} (難易度${'★'.repeat(a.difficulty || 0)})</option>`
    ).join('');

    const advOptions = advDefs.map(def =>
      `<option value="${def.id}">${def.icon} ${def.name}</option>`
    ).join('');

    container.innerHTML = `
      <div class="sim-controls">
        <div class="sim-field sim-field-row">
          <div>
            <label>エリア</label>
            <select id="sim-explore-area">${areaOptions}</select>
          </div>
          <div>
            <label>冒険者</label>
            <select id="sim-explore-adv">${advOptions}</select>
          </div>
        </div>
        <div class="sim-field sim-field-row">
          <div>
            <label>レベル</label>
            <input type="number" id="sim-explore-level" value="1" min="1" max="10" class="sim-input-sm">
          </div>
          <div>
            <label>武器品質</label>
            <input type="number" id="sim-explore-weaponq" value="0" min="0" max="100" class="sim-input-sm">
          </div>
        </div>
        <button class="sim-run-btn" id="sim-explore-run">▶ シミュレート</button>
      </div>
      <div class="sim-results" id="sim-explore-results" style="display:none">
        <div class="sim-result-grid" id="sim-explore-stats"></div>
        <canvas id="sim-explore-canvas" width="480" height="200"></canvas>
      </div>
    `;

    container.querySelector('#sim-explore-run').addEventListener('click', () => this._runExplore());
  }

  _runExplore() {
    const areaId = this.el.querySelector('#sim-explore-area').value;
    const adventurerId = this.el.querySelector('#sim-explore-adv').value;
    const level = parseInt(this.el.querySelector('#sim-explore-level').value) || 1;
    const weaponQ = parseInt(this.el.querySelector('#sim-explore-weaponq').value) || 0;

    try {
      const result = simulateExploration({ adventurerId, level, areaId, weaponQ });
      const statsEl = this.el.querySelector('#sim-explore-stats');
      const rateColor = result.successRatePct >= 70 ? '#69db7c' : result.successRatePct >= 40 ? '#ffa94d' : '#ff6b6b';

      statsEl.innerHTML = `
        <div class="sim-stat-card">
          <span class="sim-stat-label">成功率</span>
          <span class="sim-stat-value" style="color:${rateColor}">${result.successRatePct}%</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">探索時間</span>
          <span class="sim-stat-value">${result.exploreTimeSec}s</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">アイテム/時間</span>
          <span class="sim-stat-value">${result.itemsPerHour}</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">平均品質</span>
          <span class="sim-stat-value">${result.qualityDist.avg}</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">品質範囲</span>
          <span class="sim-stat-value">${result.qualityDist.min}〜${result.qualityDist.max}</span>
        </div>
      `;

      const canvas = this.el.querySelector('#sim-explore-canvas');
      drawBarChart(canvas, [
        { label: '成功率 %', value: result.successRatePct, color: rateColor },
        { label: '品質 avg', value: result.qualityDist.avg, color: '#4dabf7' },
        { label: '品質 max', value: result.qualityDist.max, color: '#da77f2' },
      ], { title: '探索シミュレーション結果', maxValue: 100 });

      this.el.querySelector('#sim-explore-results').style.display = 'block';
    } catch (e) {
      console.error(e);
      alert('エラー: ' + e.message);
    }
  }

  // ─────────────────── Economy Tab ───────────────────

  _buildEconomyTab() {
    const container = this.el.querySelector('#sim-tab-economy');
    const areas = getEconAreas();
    const advDefs = getEconAdvDefs();

    const areaOptions = areas.map(a =>
      `<option value="${a.id}">${a.icon} ${a.name}</option>`
    ).join('');

    const advOptions = advDefs.map(def =>
      `<option value="${def.id}">${def.icon} ${def.name}</option>`
    ).join('');

    const ranks = getRanks();
    const rankOptions = ranks.map((r, i) =>
      `<option value="${i}">ランク${r.rank}: ${r.name}</option>`
    ).join('');

    container.innerHTML = `
      <div class="sim-controls">
        <div class="sim-field sim-field-row">
          <div>
            <label>エリア</label>
            <select id="sim-econ-area">${areaOptions}</select>
          </div>
          <div>
            <label>冒険者</label>
            <select id="sim-econ-adv">${advOptions}</select>
          </div>
        </div>
        <div class="sim-field sim-field-row">
          <div>
            <label>冒険者数</label>
            <input type="number" id="sim-econ-num-advs" value="2" min="1" max="5" class="sim-input-sm">
          </div>
          <div>
            <label>レベル</label>
            <input type="number" id="sim-econ-level" value="1" min="1" max="10" class="sim-input-sm">
          </div>
          <div>
            <label>武器品質</label>
            <input type="number" id="sim-econ-weaponq" value="0" min="0" max="100" class="sim-input-sm">
          </div>
        </div>
        <div class="sim-field sim-field-row">
          <div>
            <label>調合売上/日 (G)</label>
            <input type="number" id="sim-econ-craft" value="0" min="0" class="sim-input-sm">
          </div>
          <div>
            <label>現在のランク</label>
            <select id="sim-econ-rank">${rankOptions}</select>
          </div>
          <div>
            <label>シミュレーション日数</label>
            <select id="sim-econ-days">
              <option value="14">14日</option>
              <option value="30" selected>30日</option>
              <option value="60">60日</option>
              <option value="90">90日</option>
            </select>
          </div>
        </div>
        <button class="sim-run-btn" id="sim-econ-run">▶ シミュレート</button>
      </div>
      <div class="sim-results" id="sim-econ-results" style="display:none">
        <div class="sim-result-grid" id="sim-econ-stats"></div>
        <canvas id="sim-econ-canvas" width="480" height="200"></canvas>
      </div>
    `;

    container.querySelector('#sim-econ-run').addEventListener('click', () => this._runEconomy());
  }

  _runEconomy() {
    const areaId = this.el.querySelector('#sim-econ-area').value;
    const adventurerId = this.el.querySelector('#sim-econ-adv').value;
    const numAdventurers = parseInt(this.el.querySelector('#sim-econ-num-advs').value) || 2;
    const level = parseInt(this.el.querySelector('#sim-econ-level').value) || 1;
    const weaponQ = parseInt(this.el.querySelector('#sim-econ-weaponq').value) || 0;
    const craftingIncome = parseInt(this.el.querySelector('#sim-econ-craft').value) || 0;
    const currentRankIndex = parseInt(this.el.querySelector('#sim-econ-rank').value) || 0;
    const days = parseInt(this.el.querySelector('#sim-econ-days').value) || 30;

    try {
      const result = simulateEconomy({
        numAdventurers, areaId, level, weaponQ, adventurerId,
        craftingIncome, currentGold: 250, currentRankIndex,
      }, days);

      const statsEl = this.el.querySelector('#sim-econ-stats');
      const profitColor = result.avgDailyProfit >= 0 ? '#69db7c' : '#ff6b6b';

      statsEl.innerHTML = `
        <div class="sim-stat-card">
          <span class="sim-stat-label">日次利益 avg</span>
          <span class="sim-stat-value" style="color:${profitColor}">${result.avgDailyProfit}G</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">アイテム/日</span>
          <span class="sim-stat-value">${result.itemsPerDay}</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">平均売値</span>
          <span class="sim-stat-value">${result.avgItemValue}G</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">合計売上</span>
          <span class="sim-stat-value">${result.totalSales}G</span>
        </div>
        <div class="sim-stat-card">
          <span class="sim-stat-label">ランクアップ予測</span>
          <span class="sim-stat-value">${result.rankReachDays !== null ? result.rankReachDays + '日目' : '${days}日以上'}</span>
        </div>
      `;

      // 期間軸ラベル
      const xLabels = Array.from({ length: days + 1 }, (_, i) => i === 0 ? '開始' : `${i}日`);

      const canvas = this.el.querySelector('#sim-econ-canvas');
      drawLineChart(canvas, [
        { label: '所持金', values: result.goldHistory, color: '#fcc419' },
      ], { title: `${days}日間の所持金推移`, xLabels, yUnit: 'G', showLegend: true });

      this.el.querySelector('#sim-econ-results').style.display = 'block';
    } catch (e) {
      console.error(e);
      alert('エラー: ' + e.message);
    }
  }
}
