/**
 * UIManager — タブ切替・ステータスバー・日数表示を管理するオーケストレーター
 */
import { eventBus } from '../core/EventBus.js';
import { SoundManager } from '../core/SoundManager.js';
import { InventoryTab } from './InventoryTab.js';
import { CraftingTab } from './CraftingTab.js';
import { ShopTab } from './ShopTab.js';
import { DispatchTab } from './DispatchTab.js';
import { StatsTab } from './StatsTab.js';
import { UpgradeTab } from './UpgradeTab.js';

import { SettingsPanel } from './SettingsPanel.js';

export class UIManager {
  constructor(inventorySystem, shopSystem, adventurerSystem, customerSystem, dayCycleSystem, randomEventSystem, reputationSystem, questSystem) {
    this.inventory = inventorySystem;
    this.dayCycle = dayCycleSystem;
    this.events = randomEventSystem;
    this.reputation = reputationSystem;
    this.quest = questSystem;
    this.activeTab = 'tab-inventory';

    // DOM Elements
    this.elGold = document.getElementById('gold-value');
    this.elDay = document.getElementById('day-value');
    this.elRent = document.getElementById('rent-value');
    this.elRank = document.getElementById('rank-value');
    this.elDayProgress = document.getElementById('day-progress-fill');
    this.elEventBanner = document.getElementById('event-banner');
    this.elTabs = document.querySelectorAll('.tab-btn');
    this.elSections = document.querySelectorAll('.content-section');

    // タブコンポーネントの初期化
    this.tabs = {
      'tab-inventory': new InventoryTab(inventorySystem),
      'tab-crafting':  new CraftingTab(inventorySystem),
      'tab-shop':      new ShopTab(inventorySystem, shopSystem, customerSystem),
      'tab-dispatch':  new DispatchTab(adventurerSystem, inventorySystem),
      'tab-stats':     new StatsTab(dayCycleSystem, reputationSystem),
      'tab-upgrade':   new UpgradeTab(inventorySystem, shopSystem, dayCycleSystem, questSystem),
    };

    // CraftingTabにdayCycle参照を渡す（AP消費用）
    this.tabs['tab-crafting'].dayCycle = dayCycleSystem;

    // イベント購読
    this._unsubscribers = [
      eventBus.on('item:sold',         () => this.updateAll()),
      eventBus.on('adventurer:return',  () => this.updateAll()),
      eventBus.on('inventory:changed',  () => this.updateAll()),
      eventBus.on('gold:changed',       () => this._updateStatusBar()),
      eventBus.on('day:newDay',         () => this._updateStatusBar()),
      eventBus.on('ap:changed',         () => this._updateAPBar()),
      eventBus.on('ap:spent',           () => this.updateAll()),
      eventBus.on('rank:up',            () => this.updateAll()),
      eventBus.on('recipe:unlocked',    () => { if (this.activeTab === 'tab-crafting') this.updateAll(); }),
      eventBus.on('customer:arrived',   () => { if (this.activeTab === 'tab-shop') this.updateAll(); }),
      eventBus.on('customer:left',      () => { if (this.activeTab === 'tab-shop') this.updateAll(); }),
      eventBus.on('customer:bought',    () => this.updateAll()),
      eventBus.on('reputation:changed', () => this._updateStatusBar()),
      eventBus.on('reputation:levelUp', (d) => {
        eventBus.emit('toast', { message: `⭐ 評判UP！「${d.name}」になりました！`, type: 'success' });
      }),
      eventBus.on('upgrade:purchased', () => this.updateAll()),
    ];

    this._init();
  }

  update(_dt) {
    // AP制: リアルタイムタイマーは不要
    // APバーと日夜ライティングはイベントで更新
  }

  updateAll() {
    this._updateStatusBar();
    const tab = this.tabs[this.activeTab];
    if (tab) tab.render();
  }

  _init() {
    this.elTabs.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-target');
        this._switchTab(targetId);
      });
    });

    // 翌日ボタン
    const skipBtn = document.getElementById('skip-day-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        if (this.dayCycle && !this.dayCycle.isGameOver) {
          this.dayCycle.skipDay();
        }
      });
    }

    this.updateAll();
    this._updateAPBar();

    // 設定ボタン追加
    this._addSettingsButton();
  }

  _addSettingsButton() {
    const statusBar = document.querySelector('.status-bar');
    if (!statusBar) return;
    const btn = SettingsPanel.createGearButton();
    btn.classList.add('game-gear-btn');
    statusBar.appendChild(btn);
  }

  _switchTab(targetId) {
    this.activeTab = targetId;
    this.elTabs.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-target') === targetId);
    });
    this.elSections.forEach(sec => {
      sec.classList.toggle('active', sec.id === targetId);
    });
    this.updateAll();
  }

  _updateStatusBar() {
    if (this.elGold) this.elGold.textContent = this.inventory.gold;
    if (this.dayCycle) {
      if (this.elDay) this.elDay.textContent = `${this.dayCycle.day}日目`;
      if (this.elRent) this.elRent.textContent = `${this.dayCycle.currentRent}G`;
      if (this.elRank) this.elRank.textContent = this.dayCycle.currentRank.name;
    }
    // 評判表示
    if (this.reputation) {
      const repEl = document.getElementById('reputation-value');
      if (repEl) {
        const lvl = this.reputation.currentLevel;
        repEl.textContent = `${lvl.icon} ${lvl.name}`;
      }
    }
    // アクティブイベント表示
    if (this.events && this.elEventBanner) {
      const effects = this.events.getActiveEffects();
      if (effects.length > 0) {
        this.elEventBanner.innerHTML = effects.map(e =>
          `<span class="event-badge">${e.icon} ${e.name}</span>`
        ).join('');
        this.elEventBanner.style.display = 'flex';
      } else {
        this.elEventBanner.style.display = 'none';
      }
    }
  }

  _updateAPBar() {
    if (!this.dayCycle) return;
    const ap = this.dayCycle.ap;
    const maxAP = this.dayCycle.maxAP;
    const pct = (ap / maxAP) * 100;

    // APバー
    if (this.elDayProgress) {
      this.elDayProgress.style.width = `${pct}%`;

      // AP残量で色変化
      if (pct <= 20) {
        this.elDayProgress.style.background = 'linear-gradient(90deg, #e74c3c, #c0392b)';
      } else if (pct <= 50) {
        this.elDayProgress.style.background = 'linear-gradient(90deg, #f39c12, #e67e22)';
      } else {
        this.elDayProgress.style.background = 'linear-gradient(90deg, #27ae60, #2ecc71)';
      }
    }

    // APテキスト
    const apLabel = document.getElementById('ap-label');
    if (apLabel) {
      apLabel.textContent = `⚡ ${ap} / ${maxAP}`;
    }
  }

  dispose() {
    this._unsubscribers.forEach(unsub => unsub());
  }
}
