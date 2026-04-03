/**
 * SettingsPanel — 設定UI（音量調整など）
 * タイトル画面・ゲーム画面どちらからも開ける
 */
import { SoundManager } from '../core/SoundManager.js';

export class SettingsPanel {
  constructor() {
    this.el = null;
    this.isOpen = false;
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this._create();
    document.body.appendChild(this.el);
    // フェードイン
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.el.classList.add('settings-visible');
      });
    });
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.el.classList.remove('settings-visible');
    setTimeout(() => {
      this.el?.remove();
      this.el = null;
    }, 300);
  }

  _create() {
    this.el = document.createElement('div');
    this.el.className = 'settings-overlay';
    this.el.innerHTML = `
      <div class="settings-panel">
        <div class="settings-header">
          <h2 class="settings-title">⚙ 設定</h2>
          <button class="settings-close-btn" id="settings-close">✕</button>
        </div>
        <div class="settings-body">
          <div class="settings-section">
            <h3 class="settings-section-title">🔊 サウンド</h3>

            <div class="settings-row">
              <label class="settings-label" for="vol-master">マスター音量</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-master" class="settings-slider"
                  min="0" max="100" value="${Math.round(SoundManager.masterVolume * 100)}" />
                <span class="settings-slider-val" id="val-master">${Math.round(SoundManager.masterVolume * 100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-bgm">BGM</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-bgm" class="settings-slider"
                  min="0" max="100" value="${Math.round(SoundManager.bgmVolume * 100)}" />
                <span class="settings-slider-val" id="val-bgm">${Math.round(SoundManager.bgmVolume * 100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-se">効果音</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-se" class="settings-slider"
                  min="0" max="100" value="${Math.round(SoundManager.seVolume * 100)}" />
                <span class="settings-slider-val" id="val-se">${Math.round(SoundManager.seVolume * 100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label">ミュート</label>
              <button class="settings-toggle-btn ${SoundManager.muted ? 'active' : ''}" id="btn-mute">
                ${SoundManager.muted ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // イベントバインド
    this.el.querySelector('#settings-close').addEventListener('click', () => this.close());
    this.el.addEventListener('click', (e) => {
      if (e.target === this.el) this.close(); // 外側クリックで閉じる
    });

    // スライダー
    this._bindSlider('vol-master', 'val-master', (v) => SoundManager.setMasterVolume(v / 100));
    this._bindSlider('vol-bgm', 'val-bgm', (v) => SoundManager.setBgmVolume(v / 100));
    this._bindSlider('vol-se', 'val-se', (v) => SoundManager.setSeVolume(v / 100));

    // ミュートボタン
    this.el.querySelector('#btn-mute').addEventListener('click', (e) => {
      const muted = SoundManager.toggleMute();
      e.target.textContent = muted ? 'ON' : 'OFF';
      e.target.classList.toggle('active', muted);
    });
  }

  _bindSlider(sliderId, valId, callback) {
    const slider = this.el.querySelector(`#${sliderId}`);
    const valEl = this.el.querySelector(`#${valId}`);
    slider.addEventListener('input', () => {
      const v = parseInt(slider.value);
      valEl.textContent = `${v}%`;
      callback(v);
    });
  }

  /** 歯車アイコンボタンを生成して返す（任意の場所に配置可能） */
  static createGearButton() {
    const btn = document.createElement('button');
    btn.className = 'settings-gear-btn';
    btn.title = '設定';
    btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>`;
    btn.addEventListener('click', () => settingsPanel.toggle());
    return btn;
  }
}

// シングルトン
export const settingsPanel = new SettingsPanel();
