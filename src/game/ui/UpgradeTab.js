/**
 * UpgradeTab — 設備タブ（アップグレード購入UI + チャレンジモード）
 */
import { UpgradeDefs, UpgradeCategories } from '../data/upgrades.js';
import { GameConfig } from '../data/config.js';
import { ChallengeDefs } from '../data/challenges.js';
import { eventBus } from '../core/EventBus.js';

export class UpgradeTab {
  constructor(inventorySystem, shopSystem, dayCycleSystem, battleSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.dayCycle = dayCycleSystem;
    this.battle = battleSystem;
    // DayCycleSystemのclearedChallengesを参照（セーブ/ロード対応）
    this._getClearedChallenges = () => new Set(this.dayCycle.clearedChallenges || []);
  }

  render() {
    const section = document.getElementById('section-upgrade');
    if (!section) return;

    const currentRank = this.dayCycle.currentRankIndex + 1;

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

    // チャレンジモードセクション（ランク8到達後に表示）
    let challengeHTML = '';
    if (currentRank >= GameConfig.goalShopRank) {
      const challengeCards = ChallengeDefs.map(ch => {
        const cleared = this._getClearedChallenges().has(ch.id);
        return `
          <div class="upgrade-card ${cleared ? 'upgrade-purchased' : 'upgrade-available'} challenge-card" data-challenge-id="${ch.id}">
            <div class="upgrade-card-icon">${ch.icon}</div>
            <div class="upgrade-card-body">
              <span class="upgrade-card-name">${ch.name}</span>
              <span class="upgrade-card-desc">${ch.description} (${ch.waves.length}ウェーブ)</span>
            </div>
            <div class="upgrade-card-price">
              ${cleared ? '✅ クリア済' : `🏆 報酬 ${ch.rewards.gold}G`}
            </div>
          </div>
        `;
      }).join('');

      challengeHTML = `
        <div class="upgrade-category">
          <h3 class="upgrade-section-title">🗼 チャレンジモード</h3>
          <p class="text-dim" style="margin-bottom:8px;">全クリアおめでとう！ 強化ボスとの連戦に挑もう。</p>
          <div class="upgrade-grid">${challengeCards}</div>
        </div>
      `;
    }

    section.innerHTML = capacityHTML + upgradesHTML + challengeHTML;

    // 購入ボタンのイベント
    section.querySelectorAll('.upgrade-available:not(.challenge-card)').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const success = this.shop.purchaseUpgrade(id, currentRank);
        if (success) {
          this.render();
          eventBus.emit('inventory:changed');
        }
      });
    });

    // チャレンジ開始ボタン
    section.querySelectorAll('.challenge-card.upgrade-available').forEach(card => {
      card.addEventListener('click', () => {
        const challengeId = card.dataset.challengeId;
        if (this.battle && !this.battle.active) {
          // BattlePrepScreenを経由してチャレンジを開始
          eventBus.emit('challenge:requestStart', { challengeId });
        }
      });
    });
  }

  dispose() {
    // no EventBus subscriptions owned by this tab
  }
}
