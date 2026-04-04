/**
 * TitleScreen — 森を駆け抜けるアニメーション付きタイトル画面
 */
import { SaveSystem } from '../core/SaveSystem.js';
import { GameConfig } from '../data/config.js';
import { SoundManager } from '../core/SoundManager.js';
import { settingsPanel, SettingsPanel } from './SettingsPanel.js';
import { assetPath } from '../core/assetPath.js';

export class TitleScreen {
  // 波紋のタイミング（ms）— BGMに合わせてここを調整
  static RIPPLE_DELAYS = [200, 900, 1500];
  // 波紋が全部終わってから森アニメーション開始までの待ち（ms）
  static FOREST_DELAY_AFTER_RIPPLES = 800;

  constructor(onStart) {
    this.onStart = onStart;
    this.el = document.createElement('div');
    this.el.className = 'title-overlay';
    this._render();
    document.body.appendChild(this.el);

    // アセットの読み込み完了を待ってから演出開始
    this._waitForAssets().then(() => {
      this._startRippleSequence();
    });
  }

  /** ロゴ画像 + タイトルBGMの読み込みを待つ */
  async _waitForAssets() {
    const promises = [];

    // ロゴ画像
    const img = this.el.querySelector('.title-logo-img');
    if (img && !img.complete) {
      promises.push(new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      }));
    }

    // タイトルBGM
    promises.push(SoundManager.waitForCurrentTrack());

    await Promise.all(promises);
  }

  /** 波紋を3つ順番に表示し、完了後に森アニメーション開始 */
  _startRippleSequence() {
    const container = this.el.querySelector('.title-ripple-container');
    const delays = TitleScreen.RIPPLE_DELAYS;

    delays.forEach((delayMs) => {
      setTimeout(() => {
        // ランダムな位置（端を避ける：20%~80%）
        const x = 20 + Math.random() * 40;
        const y = 20 + Math.random() * 40;
        const ripple = document.createElement('div');
        ripple.className = 'title-ripple';
        ripple.style.left = `${x}%`;
        ripple.style.top = `${y}%`;
        container.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      }, delayMs);
    });

    // 最後の波紋が出た後に森アニメーション開始
    const lastRippleTime = delays[delays.length - 1];
    setTimeout(() => {
      this.el.classList.add('title-animate');
    }, lastRippleTime + TitleScreen.FOREST_DELAY_AFTER_RIPPLES);
  }

  _render() {
    const saveInfo = SaveSystem.getSaveInfo();
    const rankName = saveInfo ? (GameConfig.ranks[saveInfo.rankIndex]?.name || '—') : '';
    const dateStr = saveInfo ? new Date(saveInfo.timestamp).toLocaleString('ja-JP') : '';

    // 木々のシルエット生成 — 奥から手前に迫ってくる複数レイヤー
    let treesHTML = '';
    const layers = 5;
    for (let layer = 0; layer < layers; layer++) {
      const treesInLayer = 4 + layer * 2;
      let layerTrees = '';
      for (let t = 0; t < treesInLayer; t++) {
        const x = (t / treesInLayer) * 100 + (Math.random() - 0.5) * (70 / treesInLayer);
        const height = 50 + Math.random() * 50;
        const type = Math.random() > 0.45 ? 'pine' : 'oak';
        const width = 8 + Math.random() * 6 + layer * 2;
        layerTrees += `<div class="tree-sil tree-${type}"
          style="left:${x}%; height:${height}%; width:${width}%;"></div>`;
      }
      const delay = layer * 0.35;
      const dur = 2.5 + layer * 0.3;
      const startScale = 0.15 + layer * 0.2;
      treesHTML += `<div class="forest-depth-layer" style="
        --layer-delay:${delay}s; --layer-dur:${dur}s; --start-scale:${startScale};
        z-index:${layer + 1};">${layerTrees}</div>`;
    }

    // 蛍パーティクル
    let particlesHTML = '';
    for (let i = 0; i < 25; i++) {
      const x = Math.random() * 100;
      const y = 20 + Math.random() * 70;
      const size = 2 + Math.random() * 3;
      const dur = 3 + Math.random() * 4;
      const delay = Math.random() * 6;
      particlesHTML += `<div class="title-particle"
        style="left:${x}%; top:${y}%; width:${size}px; height:${size}px;
               --dur:${dur}s; --delay:${delay}s;"></div>`;
    }

    this.el.innerHTML = `
      <div class="title-ripple-container"></div>
      <div class="title-sky-layer"></div>
      <div class="title-forest-tunnel">${treesHTML}</div>
      <div class="title-light-rays"></div>
      <div class="title-fog-layer"></div>
      <div class="title-particles">${particlesHTML}</div>
      <div class="title-content">
        <div class="title-logo">
          <img src="${assetPath('/art/Title_logo.png')}" alt="ひだまり森の錬金工房" class="title-logo-img" />
        </div>
        <div class="title-buttons">
          <button class="title-menu-btn title-menu-btn-primary" id="btn-new-game">
            <span class="title-menu-label">はじめから</span>
          </button>
          ${saveInfo ? `
            <button class="title-menu-btn title-menu-btn-secondary" id="btn-continue">
              <span class="title-menu-label">つづきから</span>
              <span class="title-save-info">${saveInfo.day}日目 / ${rankName} / ${saveInfo.gold}G</span>
              <span class="title-save-date">${dateStr}</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;

    this.el.querySelector('#btn-new-game').addEventListener('click', () => {
      if (saveInfo) {
        if (!confirm('セーブデータを削除して新しく始めますか？')) return;
        SaveSystem.deleteSave();
      }
      this._close(null);
    });

    // 右上に歯車アイコン
    const gearBtn = SettingsPanel.createGearButton();
    gearBtn.classList.add('title-gear-btn');
    this.el.appendChild(gearBtn);

    const btnContinue = this.el.querySelector('#btn-continue');
    if (btnContinue) {
      btnContinue.addEventListener('click', () => {
        this._close(SaveSystem.loadSaveData());
      });
    }
  }

  _close(saveData) {
    this.el.classList.add('title-fade-out');
    setTimeout(() => {
      this.el.remove();
      this.onStart(saveData);
    }, 600);
  }
}
