/**
 * ChallengeTab — チャレンジモード専用タブ
 * ランク8以降に解放されるエンドコンテンツ。
 * 今後の拡張要素もここに配置していく。
 */
import { ChallengeDefs } from '../data/challenges.js';
import { GameConfig } from '../data/config.js';
import { eventBus } from '../core/EventBus.js';

export class ChallengeTab {
  constructor(inventorySystem, dayCycleSystem, battleSystem) {
    this.inventory = inventorySystem;
    this.dayCycle = dayCycleSystem;
    this.battle = battleSystem;
    this._getClearedChallenges = () => new Set(this.dayCycle.clearedChallenges || []);
  }

  render() {
    const section = document.getElementById('section-challenge');
    if (!section) return;

    const currentRank = this.dayCycle.currentRankIndex + 1;

    // ランク8未満なら未解放メッセージ
    if (currentRank < GameConfig.goalShopRank) {
      section.innerHTML = `
        <div class="challenge-locked-msg">
          <div class="challenge-locked-icon">🔒</div>
          <p>ランク${GameConfig.goalShopRank}に到達するとチャレンジモードが解放されます。</p>
        </div>
      `;
      return;
    }

    const cleared = this._getClearedChallenges();

    const challengeCards = ChallengeDefs.map(ch => {
      const isCleared = cleared.has(ch.id);
      const waveIcons = ch.waves.map((_, i) => 
        `<span class="challenge-wave-dot">${i + 1}</span>`
      ).join('');

      return `
        <div class="challenge-card ${isCleared ? 'challenge-cleared' : 'challenge-available'}" data-challenge-id="${ch.id}">
          <div class="challenge-card-header">
            <span class="challenge-card-icon">${ch.icon}</span>
            <div class="challenge-card-title">
              <span class="challenge-card-name">${ch.name}</span>
              ${isCleared ? '<span class="challenge-cleared-badge">✅ クリア済</span>' : ''}
            </div>
          </div>
          <p class="challenge-card-desc">${ch.description}</p>
          <div class="challenge-card-meta">
            <div class="challenge-card-waves">
              <span class="challenge-meta-label">ウェーブ:</span>
              <div class="challenge-wave-dots">${waveIcons}</div>
            </div>
            <div class="challenge-card-reward">
              <span class="challenge-meta-label">報酬:</span>
              <span class="challenge-reward-gold">🪙 ${ch.rewards.gold.toLocaleString('ja-JP')}G</span>
            </div>
          </div>
          ${!isCleared ? '<button class="challenge-start-btn">⚔️ 挑戦する</button>' : '<button class="challenge-start-btn challenge-retry-btn">🔄 再挑戦</button>'}
        </div>
      `;
    }).join('');

    section.innerHTML = `
      <div class="challenge-intro">
        <p class="challenge-intro-text">
          全クリアおめでとう！ 🎉<br>
          強化ボスとの連戦に挑み、己の限界を試そう。
        </p>
      </div>
      <div class="challenge-grid">
        ${challengeCards}
      </div>
    `;

    // チャレンジ開始ボタン
    section.querySelectorAll('.challenge-start-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.challenge-card');
        const challengeId = card?.dataset.challengeId;
        if (challengeId && this.battle && !this.battle.active) {
          eventBus.emit('challenge:requestStart', { challengeId });
        }
      });
    });
  }

  dispose() {
    // no EventBus subscriptions owned by this tab
  }
}
