/**
 * TutorialSystem — 初回プレイ時のステップバイステップガイド
 */
import { eventBus } from '../core/EventBus.js';

const TUTORIAL_KEY = 'voxelshop_tutorial_done';

const STEPS = [
  {
    id: 'welcome',
    title: 'ようこそ！',
    text: '「ひだまり森の錬金工房」へようこそ！\nファンタジー世界で小さなアイテムショップを経営しましょう。',
    highlight: null,
    trigger: null,
  },
  {
    id: 'dispatch',
    title: '① 素材を集めよう',
    text: '冒険者が自動で探索に出かけ、素材を持ち帰ります。\n「派遣」タブで探索エリアを変更できます。',
    highlight: '[data-target="tab-dispatch"]',
    trigger: 'adventurer:return',
  },
  {
    id: 'crafting',
    title: '② アイテムを調合しよう',
    text: '集めた素材で「調合」タブからアイテムを作りましょう。\n品質(Q)が高いほど高く売れます！',
    highlight: '[data-target="tab-crafting"]',
    trigger: 'item:crafted',
  },
  {
    id: 'shop',
    title: '③ お店に陳列しよう',
    text: '「お店」タブでアイテムを陳列しましょう。\nお客さんが来店して、気に入ったアイテムを買ってくれます。',
    highlight: '[data-target="tab-shop"]',
    trigger: 'item:sold',
  },
  {
    id: 'quest',
    title: '④ クエストを達成しよう',
    text: '「設備」タブで昇格クエストを確認できます。\n売上とクエスト達成の両方を満たすとランクアップ！\n新しいレシピやエリアが解放されます。',
    highlight: '[data-target="tab-upgrade"]',
    trigger: null,
  },
  {
    id: 'survive',
    title: '⑤ 維持費に注意！',
    text: '毎日 維持費がかかります。払えなくなるとゲームオーバー！\n探索→調合→販売のサイクルを回して生き残りましょう。',
    highlight: '#rent-value',
    trigger: null,
  },
];

export class TutorialSystem {
  constructor() {
    // 既に完了済み
    if (localStorage.getItem(TUTORIAL_KEY)) return;

    this.stepIndex = 0;
    this.el = document.createElement('div');
    this.el.className = 'tutorial-overlay';
    document.body.appendChild(this.el);
    this._unsubscribers = [];

    this._showStep();
  }

  _showStep() {
    if (this.stepIndex >= STEPS.length) {
      this._complete();
      return;
    }

    const step = STEPS[this.stepIndex];

    this.el.innerHTML = `
      <div class="tutorial-box">
        <div class="tutorial-step-indicator">
          ${STEPS.map((_, i) => `<span class="tutorial-dot ${i === this.stepIndex ? 'active' : i < this.stepIndex ? 'done' : ''}"></span>`).join('')}
        </div>
        <h3 class="tutorial-title">${step.title}</h3>
        <p class="tutorial-text">${step.text.replace(/\n/g, '<br>')}</p>
        <div class="tutorial-actions">
          <button class="btn tutorial-skip-btn" id="btn-tutorial-skip">スキップ</button>
          <button class="btn primary tutorial-next-btn" id="btn-tutorial-next">${step.trigger ? '了解！' : (this.stepIndex === STEPS.length - 1 ? 'はじめる！' : '次へ')}</button>
        </div>
      </div>
    `;

    // ハイライト
    if (step.highlight) {
      const target = document.querySelector(step.highlight);
      if (target) {
        target.classList.add('tutorial-highlight');
        this._lastHighlight = target;
      }
    }

    document.getElementById('btn-tutorial-skip').addEventListener('click', () => this._complete());
    document.getElementById('btn-tutorial-next').addEventListener('click', () => {
      this._clearHighlight();

      if (step.trigger) {
        // トリガーイベントを待つ
        this.el.innerHTML = `
          <div class="tutorial-box tutorial-waiting">
            <p class="tutorial-text">やってみましょう…！</p>
          </div>
        `;
        const unsub = eventBus.on(step.trigger, () => {
          unsub();
          this.stepIndex++;
          this._showStep();
        });
        this._unsubscribers.push(unsub);
      } else {
        this.stepIndex++;
        this._showStep();
      }
    });
  }

  _clearHighlight() {
    if (this._lastHighlight) {
      this._lastHighlight.classList.remove('tutorial-highlight');
      this._lastHighlight = null;
    }
  }

  _complete() {
    this._clearHighlight();
    localStorage.setItem(TUTORIAL_KEY, '1');
    this._unsubscribers.forEach(u => u());
    this.el.classList.add('tutorial-fade-out');
    setTimeout(() => this.el.remove(), 400);
  }
}
