/**
 * SimChart — Canvas ベースの汎用チャート描画
 * 外部ライブラリ不使用
 */

const COLORS = {
  blue:   '#4dabf7',
  green:  '#69db7c',
  orange: '#ffa94d',
  red:    '#ff6b6b',
  purple: '#da77f2',
  gray:   '#868e96',
  gold:   '#fcc419',
};

function clearCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return ctx;
}

/**
 * 横棒グラフ
 * @param {HTMLCanvasElement} canvas
 * @param {Array<{label: string, value: number, color?: string}>} data
 * @param {Object} options  { title?, yUnit?, maxValue? }
 */
export function drawBarChart(canvas, data, options = {}) {
  const ctx = clearCanvas(canvas);
  const W = canvas.width;
  const H = canvas.height;
  const PAD = { top: 36, bottom: 36, left: 10, right: 20 };
  const BAR_GAP = 4;
  const maxVal = options.maxValue ?? Math.max(...data.map(d => d.value), 1);
  const unit = options.yUnit ?? '';

  // タイトル
  if (options.title) {
    ctx.fillStyle = '#ced4da';
    ctx.font = '13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(options.title, W / 2, 20);
  }

  const chartH = H - PAD.top - PAD.bottom;
  const barH = Math.max(10, (chartH - BAR_GAP * (data.length - 1)) / data.length);
  const chartW = W - PAD.left - PAD.right - 120; // 左ラベル幅
  const labelW = 120;

  data.forEach((d, i) => {
    const y = PAD.top + i * (barH + BAR_GAP);
    const barWidth = (d.value / maxVal) * chartW;
    const color = d.color ?? COLORS.blue;

    // バー背景
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(PAD.left + labelW, y, chartW, barH);

    // バー
    ctx.fillStyle = color;
    ctx.fillRect(PAD.left + labelW, y, barWidth, barH);

    // ラベル
    ctx.fillStyle = '#ced4da';
    ctx.font = '11px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(d.label, PAD.left + labelW - 8, y + barH / 2 + 4);

    // 値
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'left';
    ctx.fillText(`${d.value}${unit}`, PAD.left + labelW + barWidth + 6, y + barH / 2 + 4);
  });
}

/**
 * 折れ線グラフ（複数データセット）
 * @param {HTMLCanvasElement} canvas
 * @param {Array<{label: string, values: number[], color?: string}>} datasets
 * @param {Object} options  { title?, xLabels?, yUnit?, showLegend? }
 */
export function drawLineChart(canvas, datasets, options = {}) {
  const ctx = clearCanvas(canvas);
  const W = canvas.width;
  const H = canvas.height;
  const PAD = { top: 40, bottom: 36, left: 56, right: 20 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const allValues = datasets.flatMap(d => d.values);
  const maxVal = Math.max(...allValues, 1);
  const minVal = Math.min(...allValues, 0);
  const range = maxVal - minVal || 1;

  const xLabels = options.xLabels;
  const unit = options.yUnit ?? '';
  const nPoints = datasets[0]?.values.length ?? 0;

  function xPos(i) {
    return PAD.left + (i / Math.max(nPoints - 1, 1)) * chartW;
  }
  function yPos(v) {
    return PAD.top + chartH - ((v - minVal) / range) * chartH;
  }

  // タイトル
  if (options.title) {
    ctx.fillStyle = '#ced4da';
    ctx.font = '13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(options.title, W / 2, 20);
  }

  // グリッド
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  for (let g = 0; g <= 4; g++) {
    const v = minVal + (range / 4) * g;
    const y = yPos(v);
    ctx.beginPath();
    ctx.moveTo(PAD.left, y);
    ctx.lineTo(PAD.left + chartW, y);
    ctx.stroke();

    ctx.fillStyle = '#868e96';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(v) + unit, PAD.left - 4, y + 4);
  }

  // X軸ラベル
  if (xLabels) {
    const step = Math.ceil(xLabels.length / 8);
    xLabels.forEach((lbl, i) => {
      if (i % step !== 0 && i !== xLabels.length - 1) return;
      ctx.fillStyle = '#868e96';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(lbl, xPos(i), H - 8);
    });
  }

  // 各データセットを描画
  datasets.forEach((ds, di) => {
    const color = ds.color ?? Object.values(COLORS)[di % Object.keys(COLORS).length];
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ds.values.forEach((v, i) => {
      const x = xPos(i);
      const y = yPos(v);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // 凡例
    if (options.showLegend !== false) {
      const legendX = PAD.left + di * 120;
      const legendY = PAD.top - 16;
      ctx.fillStyle = color;
      ctx.fillRect(legendX, legendY, 12, 3);
      ctx.fillStyle = '#ced4da';
      ctx.font = '10px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(ds.label, legendX + 16, legendY + 4);
    }
  });
}

/**
 * 単純なテキスト結果表示（Canvas に文字だけ描く）
 * @param {HTMLCanvasElement} canvas
 * @param {string[]} lines
 */
export function drawTextResult(canvas, lines) {
  const ctx = clearCanvas(canvas);
  ctx.fillStyle = '#ced4da';
  ctx.font = '13px monospace';
  lines.forEach((line, i) => {
    ctx.fillText(line, 20, 28 + i * 22);
  });
}
