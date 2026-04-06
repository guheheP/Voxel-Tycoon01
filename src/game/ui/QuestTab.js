/**
 * QuestTab — クエスト・進捗・解放状況タブ
 */
import { GameConfig } from '../data/config.js';
import { AreaDefs } from '../data/areas.js';
import { AdventurerDefs, UnlockableAdventurers } from '../data/adventurers.js';
import { eventBus } from '../core/EventBus.js';

const _allAdvDefs = [...AdventurerDefs, ...UnlockableAdventurers];

export class QuestTab {
  constructor(dayCycleSystem, questSystem, adventurerSystem) {
    this.dayCycle = dayCycleSystem;
    this.quest = questSystem;
    this.adventurers = adventurerSystem;
  }

  render() {
    const section = document.getElementById('section-quest');
    if (!section) return;

    const ranks = GameConfig.ranks;
    const currentRankIndex = this.dayCycle.currentRankIndex;
    const currentRank = ranks[currentRankIndex];
    const nextRankIndex = currentRankIndex + 1;
    const nextRank = nextRankIndex < ranks.length ? ranks[nextRankIndex] : null;

    let html = '';

    // ── 1. ランク進捗バー ──
    html += this._renderRankProgress(currentRank, nextRank);

    // ── 2. ボス挑戦パネル ──
    html += this._renderBossChallenge(nextRank, nextRankIndex);

    // ── 3. クエスト一覧 ──
    html += this._renderQuests(nextRank);

    // ── 4. ランクアップ報酬プレビュー ──
    html += this._renderRewardPreview(nextRank);

    // ── 5. エリア解放状況 ──
    html += this._renderAreaStatus();

    // ── 6. 冒険者一覧 ──
    html += this._renderAdventurerStatus();

    section.innerHTML = html;

    // ボス挑戦ボタン
    const bossBtn = section.querySelector('#btn-challenge-boss');
    if (bossBtn && nextRank) {
      bossBtn.addEventListener('click', () => {
        eventBus.emit('battle:requestStart', {
          rankIndex: nextRankIndex,
          bossId: nextRank.requiredBossId,
        });
      });
    }
  }

  // ── ランク進捗バー ──
  _renderRankProgress(currentRank, nextRank) {
    if (!nextRank) {
      return `
        <div class="quest-rank-progress">
          <div class="quest-rank-label">🏆 ${currentRank.name} <span class="quest-rank-badge">最高ランク</span></div>
        </div>
      `;
    }

    const prevThreshold = currentRank.requiredSales;
    const nextThreshold = nextRank.requiredSales;
    const range = nextThreshold - prevThreshold;
    const progress = this.dayCycle.totalSales - prevThreshold;
    const pct = Math.min(100, Math.max(0, (progress / range) * 100));

    return `
      <div class="quest-rank-progress">
        <div class="quest-rank-label">
          <span>${currentRank.name}</span>
          <span class="quest-rank-arrow">→</span>
          <span class="quest-rank-next">${nextRank.name}</span>
        </div>
        <div class="quest-progress-bar-wrap">
          <div class="quest-progress-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="quest-progress-text">${this.dayCycle.totalSales.toLocaleString('ja-JP')}G / ${nextThreshold.toLocaleString('ja-JP')}G</div>
      </div>
    `;
  }

  // ── ボス挑戦パネル ──
  _renderBossChallenge(nextRank, nextRankIndex) {
    if (!this.dayCycle.rankBossAvailable || !nextRank?.requiredBossId) return '';

    // ボス情報を取得
    const areas = Object.values(AreaDefs);
    const bossArea = areas.find(a => a.boss?.id === nextRank.requiredBossId);
    const boss = bossArea?.boss;

    return `
      <div class="quest-boss-panel">
        <div class="quest-boss-header">⚠️ 昇格試験に挑戦可能！</div>
        ${boss ? `<div class="quest-boss-info">${boss.icon} ${boss.name}</div>` : ''}
        <button id="btn-challenge-boss" class="btn btn-boss-challenge">⚔️ ボスに挑戦する</button>
      </div>
    `;
  }

  // ── クエスト一覧 ──
  _renderQuests(nextRank) {
    if (!nextRank || !this.quest) return '';

    const quests = this.quest.getQuestsForRank(nextRank.rank);
    const reqCount = this.quest.getRequiredCount(nextRank.rank);
    const doneCount = quests.filter(q => q.complete).length;

    if (quests.length === 0) return '';

    return `
      <div class="quest-section">
        <h4 class="quest-section-title">🗺️ 昇格クエスト <span class="quest-progress-badge">${doneCount}/${reqCount}</span></h4>
        <div class="quest-list">
          ${quests.map(q => {
            const pct = q.target > 0 ? Math.min(100, (q.current / q.target) * 100) : 0;
            return `
              <div class="quest-item ${q.complete ? 'quest-complete' : ''}">
                <span class="quest-icon">${q.icon}</span>
                <div class="quest-info">
                  <span class="quest-name">${q.name}</span>
                  <span class="quest-desc">${q.description}</span>
                  <div class="quest-item-bar-wrap">
                    <div class="quest-item-bar-fill" style="width:${pct}%"></div>
                  </div>
                </div>
                <div class="quest-counter">
                  <span class="quest-count">${Math.min(q.current, q.target)}/${q.target}</span>
                  ${q.complete ? '<span class="quest-check">✅</span>' : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // ── ランクアップ報酬プレビュー ──
  _renderRewardPreview(nextRank) {
    if (!nextRank) return '';

    const rewards = [];

    // 新エリア
    if (nextRank.newAreas?.length > 0) {
      for (const areaId of nextRank.newAreas) {
        const area = AreaDefs[areaId];
        if (area) rewards.push({ icon: area.icon, label: area.name, type: 'area' });
      }
    }

    // 新冒険者
    const newAdvs = UnlockableAdventurers.filter(a => a.unlockRank === nextRank.rank);
    for (const adv of newAdvs) {
      rewards.push({ icon: adv.icon, label: adv.name, type: 'adventurer' });
    }

    // 新レシピ数
    const recipeCount = nextRank.newRecipes?.length || 0;
    if (recipeCount > 0) {
      rewards.push({ icon: '📜', label: `新レシピ ${recipeCount}種`, type: 'recipe' });
    }

    if (rewards.length === 0) return '';

    return `
      <div class="quest-section">
        <h4 class="quest-section-title">🎁 ランクアップで解放</h4>
        <div class="quest-reward-list">
          ${rewards.map(r => `
            <div class="quest-reward-item quest-reward-${r.type}">
              <span class="quest-reward-icon">${r.icon}</span>
              <span class="quest-reward-label">${r.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ── エリア解放状況 ──
  _renderAreaStatus() {
    const areas = Object.values(AreaDefs);

    return `
      <div class="quest-section">
        <h4 class="quest-section-title">🗺️ エリア</h4>
        <div class="quest-checklist">
          ${areas.map(area => `
            <div class="quest-check-item ${area.unlocked ? 'quest-unlocked' : 'quest-locked'}">
              <span class="quest-check-icon">${area.unlocked ? area.icon : '🔒'}</span>
              <span class="quest-check-label">${area.unlocked ? area.name : '???'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ── 冒険者一覧（ステータス付き） ──
  _renderAdventurerStatus() {
    const currentRank = this.dayCycle.currentRankIndex + 1;
    const owned = this.adventurers?.adventurers || [];
    const ownedIds = new Set(owned.map(a => a.id));

    return `
      <div class="quest-section">
        <h4 class="quest-section-title">👥 冒険者</h4>
        <div class="quest-adv-list">
          ${_allAdvDefs.map(def => {
            const isOwned = ownedIds.has(def.id);
            const adv = owned.find(a => a.id === def.id);
            const unlockRank = def.unlockRank || 1;
            const bat = def.battle || { maxHp: 100, atk: 10, def: 5, spd: 50 };

            if (isOwned) {
              const lv = adv.level || 1;
              const hp = bat.maxHp + (lv - 1) * 5;
              const atk = bat.atk + (lv - 1) * 2;
              const defStat = bat.def + (lv - 1) * 1;
              const spd = bat.spd + (lv - 1) * 2;
              return `
                <div class="quest-adv-card quest-unlocked">
                  <div class="quest-adv-header">
                    <span class="quest-adv-icon">${def.icon}</span>
                    <span class="quest-adv-name">${def.name}</span>
                    <span class="quest-adv-lv">Lv.${lv}</span>
                  </div>
                  <div class="quest-adv-stats">
                    <span>❤️${hp}</span>
                    <span>⚔${atk}</span>
                    <span>🛡${defStat}</span>
                    <span>💨${spd}</span>
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="quest-adv-card quest-locked">
                  <div class="quest-adv-header">
                    <span class="quest-adv-icon">🔒</span>
                    <span class="quest-adv-name">${currentRank >= unlockRank ? def.name : '???'}</span>
                    <span class="quest-adv-req">Rank ${unlockRank}で加入</span>
                  </div>
                </div>
              `;
            }
          }).join('')}
        </div>
      </div>
    `;
  }
}
