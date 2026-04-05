/**
 * TutorialSystem — タブ初回訪問時のガイド表示
 * 
 * 各タブを初めて開いたとき、そのタブの使い方を説明するカードを表示。
 * 一度表示したタブは記録され、再度表示されない。
 * ゲーム開始直後にウェルカムメッセージを1回表示する。
 */
import { eventBus } from '../core/EventBus.js';

const STORAGE_KEY = 'voxelshop_tab_guides';

/** タブごとのガイド定義 */
const TAB_GUIDES = {
  'tab-inventory': {
    icon: '📦',
    title: '倉庫',
    lines: [
      '集めた素材やクラフト品を管理する場所です',
      'フィルタで種類ごとに絞り込めます',
      '品質(Q)が高いほどアイテムの価値が上がります',
    ],
  },
  'tab-crafting': {
    icon: '🔨',
    title: '調合',
    lines: [
      '素材を組み合わせてアイテムを作れます',
      'パズルをうまくクリアすると品質がアップ！',
      'ランクが上がると新しいレシピが解放されます',
    ],
  },
  'tab-shop': {
    icon: '🏪',
    title: 'お店',
    lines: [
      'アイテムを陳列するとお客さんが買いに来ます',
      '品質が高いアイテムほど高く売れます',
      '売上を貯めてランクアップを目指しましょう',
    ],
  },
  'tab-dispatch': {
    icon: '🗺️',
    title: '派遣',
    lines: [
      '冒険者が自動で探索に出かけ素材を集めます',
      'エリアを選んで割り当て、装備で成功率UP！',
      'レベルが上がると探索が速く・成功しやすくなります',
    ],
  },
  'tab-upgrade': {
    icon: '⬆️',
    title: '設備',
    lines: [
      '売上目標とクエストを達成するとランクアップ！',
      '新エリア・新レシピ・新冒険者が解放されます',
      'ボス討伐に挑戦してランクを上げましょう',
    ],
  },
  'tab-stats': {
    icon: '📊',
    title: '統計',
    lines: [
      'これまでの冒険の記録を振り返れます',
      '売上やクラフト数など各種実績を確認できます',
    ],
  },
};

export class TutorialSystem {
  constructor() {
    // 表示済みタブを読み込み
    this._shown = {};
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) this._shown = JSON.parse(saved);
    } catch { /* */ }

    this._activeGuide = null;
    this._autoHideTimer = null;

    // ウェルカムメッセージ（初回ゲーム開始時のみ）
    if (!this._shown['_welcome']) {
      this._shown['_welcome'] = true;
      // ウェルカム表示時は初期タブ(倉庫)のガイドを兼ねる
      this._shown['tab-inventory'] = true;
      this._save();
      // 少し遅らせてゲームUIが見えてから表示
      setTimeout(() => this._showWelcome(), 600);
    }

    // タブ切替イベントを購読
    this._unsub = eventBus.on('tab:switched', (d) => {
      if (d?.tabId) this._onTabVisit(d.tabId);
    });
  }

  _onTabVisit(tabId) {
    if (this._shown[tabId]) return; // 既に表示済み
    const guide = TAB_GUIDES[tabId];
    if (!guide) return;

    this._shown[tabId] = true;
    this._save();
    this._showGuide(guide);
  }

  _showWelcome() {
    this._showGuide({
      icon: '🌿',
      title: 'ひだまり森の錬金工房へようこそ！',
      lines: [
        '冒険者が集めた素材を調合して販売しましょう',
        '売上を伸ばしてお店のランクを上げていきます',
        '各タブを開くと使い方をお教えします',
      ],
    });
  }

  /**
   * ガイドカードをスライドイン表示
   */
  _showGuide(guide) {
    // 既存のガイドがあれば即座に消す
    this._dismiss();

    const el = document.createElement('div');
    el.className = 'tab-guide';
    el.innerHTML = `
      <div class="tab-guide-card">
        <div class="tab-guide-header">
          <span class="tab-guide-icon">${guide.icon}</span>
          <span class="tab-guide-title">${guide.title}</span>
          <button class="tab-guide-close" aria-label="閉じる">✕</button>
        </div>
        <ul class="tab-guide-list">
          ${guide.lines.map(line => `<li>${line}</li>`).join('')}
        </ul>
      </div>
    `;

    document.body.appendChild(el);
    this._activeGuide = el;

    // 閉じるボタン
    el.querySelector('.tab-guide-close').addEventListener('click', () => this._dismiss());

    // 画面クリックで閉じる（カード自体は除外）
    el.addEventListener('click', (e) => {
      if (e.target === el) this._dismiss();
    });

    // 8秒後に自動で消す
    this._autoHideTimer = setTimeout(() => this._dismiss(), 8000);
  }

  _dismiss() {
    if (this._autoHideTimer) {
      clearTimeout(this._autoHideTimer);
      this._autoHideTimer = null;
    }
    if (this._activeGuide) {
      const el = this._activeGuide;
      el.classList.add('tab-guide-exit');
      setTimeout(() => el.remove(), 400);
      this._activeGuide = null;
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._shown));
    } catch { /* */ }
  }

  dispose() {
    if (this._unsub) this._unsub();
    this._dismiss();
  }
}
