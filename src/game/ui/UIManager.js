/**
 * UIManager — タブ切替・ステータスバー・日数表示を管理するオーケストレーター
 * 調合タブ中は時間停止
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

    // イベント購読
    this._unsubscribers = [
      eventBus.on('item:sold',         () => this.updateAll()),
      eventBus.on('adventurer:return',  () => this.updateAll()),
      eventBus.on('inventory:changed',  () => this.updateAll()),
      eventBus.on('gold:changed',       () => this._updateStatusBar()),
      eventBus.on('day:newDay',         () => this.updateAll()),
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

  /** 毎フレーム — 日進行バー＋タイマー更新 */
  update(dt) {
    this._updateDayProgressBar();

    // ディスパッチタブのタイマー更新
    if (this.activeTab === 'tab-dispatch') {
      const dispatchTab = this.tabs['tab-dispatch'];
      if (dispatchTab && dispatchTab.updateTimers) dispatchTab.updateTimers();
    }

    // ショップタブの客タイマー更新
    if (this.activeTab === 'tab-shop') {
      const shopTab = this.tabs['tab-shop'];
      if (shopTab && shopTab.updateCustomerTimers) shopTab.updateCustomerTimers();
    }
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
    // 調合タブの一時停止制御
    if (this.activeTab === 'tab-crafting' && targetId !== 'tab-crafting') {
      this.dayCycle.setPaused(false);
    }
    if (targetId === 'tab-crafting') {
      this.dayCycle.setPaused(true);
    }

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

  /** 日進行バー更新（リアルタイム） */
  _updateDayProgressBar() {
    if (!this.dayCycle || !this.elDayProgress) return;
    const pct = this.dayCycle.dayProgress * 100;
    this.elDayProgress.style.width = `${pct}%`;

    // 時間帯で色変化（朝→昼→夕→夜）
    if (pct < 25) {
      this.elDayProgress.style.background = 'linear-gradient(90deg, #27ae60, #2ecc71)';
    } else if (pct < 60) {
      this.elDayProgress.style.background = 'linear-gradient(90deg, #2ecc71, #f1c40f)';
    } else if (pct < 80) {
      this.elDayProgress.style.background = 'linear-gradient(90deg, #f39c12, #e67e22)';
    } else {
      this.elDayProgress.style.background = 'linear-gradient(90deg, #e74c3c, #c0392b)';
    }

    // 一時停止表示と時間帯テキスト
    const pauseLabel = document.getElementById('ap-label');
    if (pauseLabel) {
      if (this.dayCycle.paused) {
        pauseLabel.textContent = '⏸ 調合中…';
      } else {
        if (pct < 25) pauseLabel.textContent = '🌅 朝';
        else if (pct < 60) pauseLabel.textContent = '☀️ 昼';
        else if (pct < 80) pauseLabel.textContent = '🌇 夕方';
        else pauseLabel.textContent = '🌙 夜';
      }
    }
  }

  dispose() {
    this._unsubscribers.forEach(unsub => unsub());
  }
}
