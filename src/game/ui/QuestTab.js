/**
 * QuestTab — クエスト・ボス挑戦タブ
 */
import { GameConfig } from '../data/config.js';
import { eventBus } from '../core/EventBus.js';

export class QuestTab {
  constructor(dayCycleSystem, questSystem) {
    this.dayCycle = dayCycleSystem;
    this.quest = questSystem;
  }

  render() {
    const section = document.getElementById('section-quest');
    if (!section) return;

    const nextRankIndex = this.dayCycle.currentRankIndex + 1;
    const nextRank = nextRankIndex < GameConfig.ranks.length ? GameConfig.ranks[nextRankIndex] : null;

    // ボス挑戦パネル
    let bossHTML = '';
    if (this.dayCycle.rankBossAvailable && nextRank && nextRank.requiredBossId) {
      bossHTML = `
        <div class="upgrade-boss-panel">
          <h4 style="color: #ffcccc;">⚠️ 昇格試験に挑戦可能！</h4>
          <p style="margin-bottom: 1rem;">ランクアップ条件を満たしました。ボスを撃破して新しいランクとエリアを解放しましょう！</p>
          <button id="btn-challenge-boss" class="btn btn-boss-challenge">⚔️ ボスに挑戦する</button>
        </div>
      `;
    }

    // クエスト進捗
    let questHTML = '';
    if (nextRank && this.quest) {
      const quests = this.quest.getQuestsForRank(nextRank.rank);
      const reqCount = this.quest.getRequiredCount(nextRank.rank);
      const doneCount = quests.filter(q => q.complete).length;

      if (quests.length > 0) {
        questHTML = `
          <div class="upgrade-quest-panel">
            <h4>🗺️ ランク${nextRank.rank}昇格クエスト <span class="quest-progress-badge">${doneCount}/${reqCount} 達成</span></h4>
            <div class="quest-list">
              ${quests.map(q => `
                <div class="quest-item ${q.complete ? 'quest-complete' : ''}">
                  <span class="quest-icon">${q.icon}</span>
                  <div class="quest-info">
                    <span class="quest-name">${q.name}</span>
                    <span class="quest-desc">${q.description}</span>
                  </div>
                  <div class="quest-counter">
                    <span class="quest-count">${Math.min(q.current, q.target)}/${q.target}</span>
                    ${q.complete ? '<span class="quest-check">✅</span>' : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
    } else if (!nextRank) {
      questHTML = `<div class="upgrade-quest-panel"><p class="quest-max">🏆 最高ランク達成！</p></div>`;
    }

    section.innerHTML = bossHTML + questHTML;

    // ボス挑戦ボタン
    const bossBtn = section.querySelector('#btn-challenge-boss');
    if (bossBtn) {
      bossBtn.addEventListener('click', () => {
        eventBus.emit('battle:requestStart', {
          rankIndex: nextRankIndex,
          bossId: nextRank.requiredBossId,
        });
      });
    }
  }
}
