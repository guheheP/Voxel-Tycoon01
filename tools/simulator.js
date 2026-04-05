/**
 * simulator.js — スタンドアロンシミュレータページのエントリポイント
 * tools/simulator.html から type="module" で読み込まれる
 */
import { runBattleMonteCarlo, getAllBosses, getAllAdventurerDefs as getBattleAdvDefs } from '../src/game/simulator/BattleSim.js';
import { simulateExploration, getAllAreas as getExploreAreas, getAllAdventurerDefs as getExploreAdvDefs } from '../src/game/simulator/ExploreSim.js';
import { simulateEconomy, getAllAreas as getEconAreas, getAllAdventurerDefs as getEconAdvDefs, getRanks } from '../src/game/simulator/EconomySim.js';
import { drawBarChart, drawLineChart } from '../src/game/simulator/SimChart.js';

// ── タブ切替 ──────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('.tab-content').forEach(c =>
      c.classList.toggle('active', c.id === `tab-${btn.dataset.tab}`)
    );
  });
});

// ── Battle Tab ────────────────────────────────────────

const bosses = getAllBosses();
const bossSelect = document.getElementById('boss-select');
bosses.forEach(b => {
  const opt = document.createElement('option');
  opt.value = b.areaId;
  opt.textContent = `${b.boss.icon} ${b.boss.name} (${b.areaName})`;
  bossSelect.appendChild(opt);
});

const advDefs = getBattleAdvDefs();
const advCheckboxes = document.getElementById('adv-checkboxes');
advDefs.forEach(def => {
  const label = document.createElement('label');
  label.className = 'check-label';
  label.innerHTML = `<input type="checkbox" value="${def.id}" ${['adv_knight','adv_archer'].includes(def.id) ? 'checked' : ''}> ${def.icon} ${def.name}`;
  advCheckboxes.appendChild(label);
});

document.getElementById('battle-run').addEventListener('click', () => {
  const bossAreaId = bossSelect.value;
  const level = parseInt(document.getElementById('battle-level').value) || 1;
  const weaponQ = parseInt(document.getElementById('battle-weaponq').value) || 0;
  const iterations = parseInt(document.getElementById('battle-iter').value) || 200;
  const checkedAdvs = [...advCheckboxes.querySelectorAll('input:checked')].map(c => c.value);

  if (checkedAdvs.length === 0) { alert('冒険者を1人以上選択してください'); return; }

  const btn = document.getElementById('battle-run');
  btn.disabled = true; btn.textContent = '計算中...';

  setTimeout(() => {
    try {
      const result = runBattleMonteCarlo({
        adventurerIds: checkedAdvs,
        levels: checkedAdvs.map(() => level),
        weaponQualities: checkedAdvs.map(() => weaponQ),
        bossAreaId,
      }, iterations);

      const rateColor = result.winRate >= 70 ? '#69db7c' : result.winRate >= 40 ? '#ffa94d' : '#ff6b6b';
      document.getElementById('battle-stats').innerHTML = `
        <div class="stat-card"><span class="stat-label">勝率</span><span class="stat-value" style="color:${rateColor}">${result.winRate}%</span></div>
        <div class="stat-card"><span class="stat-label">平均戦闘時間</span><span class="stat-value">${result.avgTime}s</span></div>
        <div class="stat-card"><span class="stat-label">最短</span><span class="stat-value">${result.minTime}s</span></div>
        <div class="stat-card"><span class="stat-label">最長</span><span class="stat-value">${result.maxTime}s</span></div>
        <div class="stat-card"><span class="stat-label">勝利/敗北</span><span class="stat-value">${result.wins}/${result.total - result.wins}</span></div>
      `;

      const canvas = document.getElementById('battle-canvas');
      canvas.width = canvas.offsetWidth || 700;
      drawBarChart(canvas, [
        { label: '勝利', value: result.wins, color: '#69db7c' },
        { label: '敗北', value: result.total - result.wins, color: '#ff6b6b' },
      ], { title: `${iterations}回シミュレーション結果`, yUnit: '回' });

      document.getElementById('battle-results').style.display = 'block';
    } catch (e) {
      console.error(e); alert('エラー: ' + e.message);
    } finally {
      btn.disabled = false; btn.textContent = '▶ シミュレート';
    }
  }, 10);
});

// ── Explore Tab ───────────────────────────────────────

const exploreAreas = getExploreAreas();
const exploreAreaSelect = document.getElementById('explore-area');
exploreAreas.forEach(a => {
  const opt = document.createElement('option');
  opt.value = a.id;
  opt.textContent = `${a.icon} ${a.name} (難易度${'★'.repeat(a.difficulty || 0) || '☆'})`;
  exploreAreaSelect.appendChild(opt);
});

const exploreAdvDefs = getExploreAdvDefs();
const exploreAdvSelect = document.getElementById('explore-adv');
exploreAdvDefs.forEach(def => {
  const opt = document.createElement('option');
  opt.value = def.id;
  opt.textContent = `${def.icon} ${def.name}`;
  exploreAdvSelect.appendChild(opt);
});

document.getElementById('explore-run').addEventListener('click', () => {
  const areaId = exploreAreaSelect.value;
  const adventurerId = exploreAdvSelect.value;
  const level = parseInt(document.getElementById('explore-level').value) || 1;
  const weaponQ = parseInt(document.getElementById('explore-weaponq').value) || 0;

  try {
    const result = simulateExploration({ adventurerId, level, areaId, weaponQ });
    const rateColor = result.successRatePct >= 70 ? '#69db7c' : result.successRatePct >= 40 ? '#ffa94d' : '#ff6b6b';

    document.getElementById('explore-stats').innerHTML = `
      <div class="stat-card"><span class="stat-label">成功率</span><span class="stat-value" style="color:${rateColor}">${result.successRatePct}%</span></div>
      <div class="stat-card"><span class="stat-label">探索時間</span><span class="stat-value">${result.exploreTimeSec}s</span></div>
      <div class="stat-card"><span class="stat-label">アイテム/時間</span><span class="stat-value">${result.itemsPerHour}</span></div>
      <div class="stat-card"><span class="stat-label">平均品質</span><span class="stat-value">${result.qualityDist.avg}</span></div>
      <div class="stat-card"><span class="stat-label">品質範囲</span><span class="stat-value">${result.qualityDist.min}〜${result.qualityDist.max}</span></div>
    `;

    const canvas = document.getElementById('explore-canvas');
    canvas.width = canvas.offsetWidth || 700;
    drawBarChart(canvas, [
      { label: '成功率 %', value: result.successRatePct, color: rateColor },
      { label: '品質 avg', value: result.qualityDist.avg, color: '#4dabf7' },
      { label: '品質 max', value: result.qualityDist.max, color: '#da77f2' },
    ], { title: '探索シミュレーション結果', maxValue: 100 });

    document.getElementById('explore-results').style.display = 'block';
  } catch (e) {
    console.error(e); alert('エラー: ' + e.message);
  }
});

// ── Economy Tab ───────────────────────────────────────

const econAreas = getEconAreas();
const econAreaSelect = document.getElementById('econ-area');
econAreas.forEach(a => {
  const opt = document.createElement('option');
  opt.value = a.id;
  opt.textContent = `${a.icon} ${a.name}`;
  econAreaSelect.appendChild(opt);
});

const econAdvDefs = getEconAdvDefs();
const econAdvSelect = document.getElementById('econ-adv');
econAdvDefs.forEach(def => {
  const opt = document.createElement('option');
  opt.value = def.id;
  opt.textContent = `${def.icon} ${def.name}`;
  econAdvSelect.appendChild(opt);
});

const ranks = getRanks();
const econRankSelect = document.getElementById('econ-rank');
ranks.forEach((r, i) => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = `ランク${r.rank}: ${r.name}`;
  econRankSelect.appendChild(opt);
});

document.getElementById('econ-run').addEventListener('click', () => {
  const areaId = econAreaSelect.value;
  const adventurerId = econAdvSelect.value;
  const numAdventurers = parseInt(document.getElementById('econ-num-advs').value) || 2;
  const level = parseInt(document.getElementById('econ-level').value) || 1;
  const weaponQ = parseInt(document.getElementById('econ-weaponq').value) || 0;
  const craftingIncome = parseInt(document.getElementById('econ-craft').value) || 0;
  const currentRankIndex = parseInt(econRankSelect.value) || 0;
  const days = parseInt(document.getElementById('econ-days').value) || 30;

  try {
    const result = simulateEconomy({
      numAdventurers, areaId, level, weaponQ, adventurerId,
      craftingIncome, currentGold: 250, currentRankIndex,
    }, days);

    const profitColor = result.avgDailyProfit >= 0 ? '#69db7c' : '#ff6b6b';
    document.getElementById('econ-stats').innerHTML = `
      <div class="stat-card"><span class="stat-label">日次利益 avg</span><span class="stat-value" style="color:${profitColor}">${result.avgDailyProfit}G</span></div>
      <div class="stat-card"><span class="stat-label">アイテム/日</span><span class="stat-value">${result.itemsPerDay}</span></div>
      <div class="stat-card"><span class="stat-label">平均売値</span><span class="stat-value">${result.avgItemValue}G</span></div>
      <div class="stat-card"><span class="stat-label">合計売上</span><span class="stat-value">${result.totalSales}G</span></div>
      <div class="stat-card"><span class="stat-label">ランクアップ予測</span><span class="stat-value">${result.rankReachDays !== null ? result.rankReachDays + '日目' : days + '日以上'}</span></div>
    `;

    const xLabels = Array.from({ length: days + 1 }, (_, i) => i === 0 ? '開始' : `${i}日`);
    const canvas = document.getElementById('econ-canvas');
    canvas.width = canvas.offsetWidth || 700;
    drawLineChart(canvas, [
      { label: '所持金', values: result.goldHistory, color: '#fcc419' },
    ], { title: `${days}日間の所持金推移`, xLabels, yUnit: 'G', showLegend: true });

    document.getElementById('econ-results').style.display = 'block';
  } catch (e) {
    console.error(e); alert('エラー: ' + e.message);
  }
});
