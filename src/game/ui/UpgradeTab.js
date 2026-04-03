/**
 * UpgradeTab — 設備タブ（アップグレード購入UI）
 */
import { UpgradeDefs, UpgradeCategories } from '../data/upgrades.js';
import { QuestDefs } from '../data/quests.js';
import { GameConfig } from '../data/config.js';
import { eventBus } from '../core/EventBus.js';

export class UpgradeTab {
  constructor(inventorySystem, shopSystem, dayCycleSystem, questSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.dayCycle = dayCycleSystem;
    this.quest = questSystem;
  }

  render() {
    const section = document.getElementById('section-upgrade');
    if (!section) return;

    const currentRank = this.dayCycle.currentRankIndex + 1;
    const nextRankIndex = this.dayCycle.currentRankIndex + 1;
    const nextRank = nextRankIndex < GameConfig.ranks.length ? GameConfig.ranks[nextRankIndex] : null;

    // クエスト進捗
    let questHTML = '';
    if (nextRank && this.quest) {
      const quests = this.quest.getQuestsForRank(nextRank.rank);
      const reqCount = this.quest.getRequiredCount(nextRank.rank);
      const doneCount = quests.filter(q => q.complete).length;

      if (quests.length > 0) {
        questHTML = `
          <div class="upgrade-quest-panel">
            <h3 class="upgrade-section-title">🗺️ ランク${nextRank.rank}昇格クエスト <span class="quest-progress-badge">${doneCount}/${reqCount} 達成</span></h3>
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

    // カテゴリ分類
    const categories = Object.entries(UpgradeCategories).sort((a, b) => a[1].order - b[1].order);
    let upgradesHTML = '';

    for (const [catKey, catDef] of categories) {
      const upgrades = UpgradeDefs.filter(u => u.category === catKey);
      if (upgrades.length === 0) continue;

      upgradesHTML += `
        <div class="upgrade-category">
          <h3 class="upgrade-section-title">${catDef.name}</h3>
          <div class="upgrade-grid">
            ${upgrades.map(u => {
              const purchased = this.shop.isPurchased(u.id);
              const canAfford = this.inventory.gold >= u.cost;
              const rankOk = currentRank >= u.requiredRank;
              const locked = !rankOk;

              let stateClass = '';
              let stateLabel = '';
              if (purchased) {
                stateClass = 'upgrade-purchased';
                stateLabel = '購入済み';
              } else if (locked) {
                stateClass = 'upgrade-locked';
                stateLabel = `Rank ${u.requiredRank} 必要`;
              } else if (!canAfford) {
                stateClass = 'upgrade-expensive';
                stateLabel = `${u.cost}G`;
              } else {
                stateClass = 'upgrade-available';
                stateLabel = `${u.cost}G`;
              }

              return `
                <div class="upgrade-card ${stateClass}" data-id="${u.id}">
                  <div class="upgrade-card-icon">${u.icon}</div>
                  <div class="upgrade-card-body">
                    <span class="upgrade-card-name">${u.name}</span>
                    <span class="upgrade-card-desc">${u.description}</span>
                  </div>
                  <div class="upgrade-card-price">
                    ${purchased ? '✅' : locked ? '🔒' : stateLabel}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 倉庫状態
    const capacityHTML = `
      <div class="upgrade-capacity-bar">
        <span>📦 倉庫: ${this.inventory.items.length} / ${this.inventory.maxCapacity}</span>
        <span>🏪 販売棚: ${this.shop.displayedItems.length} / ${this.shop.maxSlots}</span>
      </div>
    `;

    section.innerHTML = capacityHTML + questHTML + upgradesHTML;

    // 購入ボタンのイベント
    section.querySelectorAll('.upgrade-available').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const success = this.shop.purchaseUpgrade(id, currentRank);
        if (success) {
          this.render();
          eventBus.emit('inventory:changed');
        }
      });
    });
  }
}
