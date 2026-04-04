/**
 * UIManager — タブ切替・ステータスバー・日数表示を管理するオーケストレーター
 * 調合タブ中は時間停止
 */
import { eventBus } from '../core/EventBus.js';
import { GameConfig } from '../data/config.js';
import { SoundManager } from '../core/SoundManager.js';
import { InventoryTab } from './InventoryTab.js';
import { CraftingTab } from './CraftingTab.js';
import { ShopTab } from './ShopTab.js';
import { DispatchTab } from './DispatchTab.js';
import { StatsTab } from './StatsTab.js';
import { UpgradeTab } from './UpgradeTab.js';

import { SettingsPanel } from './SettingsPanel.js';

// 時間帯ブレークポイント (dayProgress 0〜1)
const TIME_DAWN_END   = 0.25;  // 〜25%: 朝
const TIME_NOON_END   = 0.60;  // 〜60%: 昼
const TIME_SUNSET_END = 0.80;  // 〜80%: 夕方
// 〜100%: 夜

const AMBIENT_PARTICLE_COUNT = 15;  // 環境パーティクル数

export class UIManager {
  constructor(inventorySystem, shopSystem, adventurerSystem, customerSystem, dayCycleSystem, randomEventSystem, reputationSystem, questSystem) {
    this.inventory = inventorySystem;
    this.shop = shopSystem;
    this.customer = customerSystem;
    this.dayCycle = dayCycleSystem;
    this.events = randomEventSystem;
    this.reputation = reputationSystem;
    this.quest = questSystem;
    this.activeTab = 'tab-inventory';

    // ゴールドアニメーション用
    this._displayedGold = inventorySystem.gold;
    this._targetGold = inventorySystem.gold;
    this._goldAnimTimer = 0;

    // DOM Elements
    this.elGold = document.getElementById('gold-value');
    this.elDay = document.getElementById('day-value');
    this.elRent = document.getElementById('rent-value');
    this.elRank = document.getElementById('rank-value');
    this.elDayProgress = document.getElementById('day-progress-fill');
    this.elEventBanner = document.getElementById('event-banner');
    this.elTabs = document.querySelectorAll('.tab-btn');
    this.elSections = document.querySelectorAll('.content-section');

    // ランク進捗バーを動的に追加
    this._createRankProgressBar();

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
      eventBus.on('gold:changed',       () => this._onGoldChanged()),
      eventBus.on('day:newDay',         () => this.updateAll()),
      eventBus.on('rank:up',            () => this.updateAll()),
      eventBus.on('recipe:unlocked',    () => { if (this.activeTab === 'tab-crafting') this.updateAll(); }),
      eventBus.on('customer:arrived',   () => { this._updateCustomerBadge(); if (this.activeTab === 'tab-shop') this.updateAll(); }),
      eventBus.on('customer:left',      () => { this._updateCustomerBadge(); if (this.activeTab === 'tab-shop') this.updateAll(); }),
      eventBus.on('customer:bought',    () => { this._updateCustomerBadge(); this.updateAll(); }),
      eventBus.on('reputation:changed', () => this._updateStatusBar()),
      eventBus.on('reputation:levelUp', (d) => {
        eventBus.emit('toast', { message: `⭐ 評判UP！「${d.name}」になりました！`, type: 'success' });
      }),
      eventBus.on('upgrade:purchased', () => this.updateAll()),
      eventBus.on('save:completed', () => this._showSaveIndicator()),
      // Wave A エフェクト
      eventBus.on('item:sold', (d) => this._showSaleFloatingText(d)),
      eventBus.on('rank:up', (d) => this._showRankUpOverlay(d)),
      eventBus.on('item:crafted', (d) => this._onItemCrafted(d)),
    ];

    this._init();
  }

  /** 毎フレーム — 日進行バー＋タイマー更新 */
  update(dt) {
    this._updateDayProgressBar();
    this._animateGold(dt);
    this._updateTimeOfDayUI();

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
    this._updateCustomerBadge();
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

    // キーボードショートカット
    this._initKeyboardShortcuts();

    // 環境パーティクル
    this._initAmbientParticles();
  }

  _initAmbientParticles() {
    const container = document.createElement('div');
    container.className = 'ambient-particles';
    document.body.insertBefore(container, document.body.firstChild);

    for (let i = 0; i < AMBIENT_PARTICLE_COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'ambient-particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${12 + Math.random() * 18}s`;
      p.style.animationDelay = `${Math.random() * 15}s`;
      p.style.width = `${2 + Math.random() * 3}px`;
      p.style.height = p.style.width;
      container.appendChild(p);
    }
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
    eventBus.emit('tab:switched', { tabId: targetId });
  }

  // =============================================
  //  ゴールド変動アニメーション
  // =============================================

  _onGoldChanged() {
    const newGold = this.inventory.gold;
    const diff = newGold - this._targetGold;
    this._targetGold = newGold;
    this._goldAnimTimer = 0;

    // フラッシュエフェクト
    if (this.elGold) {
      const wrapper = this.elGold.closest('.gold-display');
      if (wrapper) {
        // 色フラッシュ
        if (diff > 0) {
          wrapper.classList.add('gold-flash-up');
          setTimeout(() => wrapper.classList.remove('gold-flash-up'), 600);
        } else if (diff < 0) {
          wrapper.classList.add('gold-flash-down');
          setTimeout(() => wrapper.classList.remove('gold-flash-down'), 600);
        }
      }
    }
  }

  _animateGold(dt) {
    if (Math.abs(this._displayedGold - this._targetGold) < 1) {
      this._displayedGold = this._targetGold;
    } else {
      // スムーズにカウントアップ/ダウン
      const speed = Math.max(1, Math.abs(this._targetGold - this._displayedGold) * 5);
      if (this._displayedGold < this._targetGold) {
        this._displayedGold = Math.min(this._targetGold, this._displayedGold + speed * dt);
      } else {
        this._displayedGold = Math.max(this._targetGold, this._displayedGold - speed * dt);
      }
    }
    if (this.elGold) {
      this.elGold.textContent = this._formatGold(Math.round(this._displayedGold));
    }
  }

  /** ゴールド桁区切りフォーマット */
  _formatGold(amount) {
    return amount.toLocaleString('ja-JP');
  }

  // =============================================
  //  ステータスバー
  // =============================================

  _updateStatusBar() {
    // ゴールド（アニメーションで更新されるので、ここではターゲット同期のみ）
    this._targetGold = this.inventory.gold;

    if (this.dayCycle) {
      if (this.elDay) this.elDay.textContent = `${this.dayCycle.day}日目`;
      if (this.elRent) this.elRent.textContent = `${this._formatGold(this.dayCycle.currentRent)}G`;
      if (this.elRank) this.elRank.textContent = this.dayCycle.currentRank.name;

      // ランク進捗バー更新
      this._updateRankProgress();
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

  // =============================================
  //  ランクアップ進捗バー
  // =============================================

  _createRankProgressBar() {
    const rankItem = document.querySelector('.status-item:has(#rank-value)');
    if (!rankItem) return;

    // 進捗バーコンテナを追加
    const progressContainer = document.createElement('div');
    progressContainer.className = 'rank-progress-container';
    progressContainer.innerHTML = `
      <div class="rank-progress-bar">
        <div id="rank-progress-fill" class="rank-progress-fill"></div>
      </div>
      <span id="rank-progress-text" class="rank-progress-text"></span>
    `;
    rankItem.appendChild(progressContainer);
    this.elRankProgress = document.getElementById('rank-progress-fill');
    this.elRankProgressText = document.getElementById('rank-progress-text');
  }

  _updateRankProgress() {
    if (!this.elRankProgress || !this.dayCycle) return;
    const ranks = GameConfig.ranks;
    const idx = this.dayCycle.currentRankIndex;

    if (idx >= ranks.length - 1) {
      // 最大ランク
      this.elRankProgress.style.width = '100%';
      if (this.elRankProgressText) this.elRankProgressText.textContent = 'MAX';
      return;
    }

    const currentThreshold = ranks[idx].requiredSales;
    const nextThreshold = ranks[idx + 1].requiredSales;
    const range = nextThreshold - currentThreshold;
    const progress = this.dayCycle.totalSales - currentThreshold;
    const pct = Math.min(100, Math.max(0, (progress / range) * 100));

    this.elRankProgress.style.width = `${pct}%`;
    if (this.elRankProgressText) {
      this.elRankProgressText.textContent = `${this._formatGold(Math.floor(progress))} / ${this._formatGold(range)}G`;
    }
  }

  // =============================================
  //  お店タブ客通知バッジ
  // =============================================

  _updateCustomerBadge() {
    const shopBtn = document.querySelector('[data-target="tab-shop"]');
    if (!shopBtn) return;

    // 既存バッジを削除
    const oldBadge = shopBtn.querySelector('.tab-badge');
    if (oldBadge) oldBadge.remove();

    // 来客数
    const count = this.customer ? this.customer.getActiveCustomers().length : 0;
    if (count > 0) {
      const badge = document.createElement('span');
      badge.className = 'tab-badge';
      badge.textContent = count;
      shopBtn.appendChild(badge);
    }
  }

  /** 日進行バー更新（リアルタイム） */
  _updateDayProgressBar() {
    if (!this.dayCycle || !this.elDayProgress) return;
    const pct = this.dayCycle.dayProgress * 100;
    this.elDayProgress.style.width = `${pct}%`;

    // 時間帯で色変化（朝→昼→夕→夜）
    const p100 = pct / 100;
    if (p100 < TIME_DAWN_END) {
      this.elDayProgress.style.background = 'linear-gradient(90deg, #27ae60, #2ecc71)';
    } else if (p100 < TIME_NOON_END) {
      this.elDayProgress.style.background = 'linear-gradient(90deg, #2ecc71, #f1c40f)';
    } else if (p100 < TIME_SUNSET_END) {
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
        if (p100 < TIME_DAWN_END) pauseLabel.textContent = '🌅 朝';
        else if (p100 < TIME_NOON_END) pauseLabel.textContent = '☀️ 昼';
        else if (p100 < TIME_SUNSET_END) pauseLabel.textContent = '🌇 夕方';
        else pauseLabel.textContent = '🌙 夜';
      }
    }
  }

  // =============================================
  //  セーブインジケータ
  // =============================================

  _showSaveIndicator() {
    const old = document.querySelector('.save-indicator');
    if (old) old.remove();

    const indicator = document.createElement('div');
    indicator.className = 'save-indicator';
    indicator.textContent = '💾 保存しました';
    document.body.appendChild(indicator);

    setTimeout(() => {
      indicator.classList.add('save-indicator-hide');
      setTimeout(() => indicator.remove(), 500);
    }, 1500);
  }

  // =============================================
  //  Wave A: 販売 +G フローティングテキスト
  // =============================================

  _showSaleFloatingText(data) {
    const price = data?.price || data?.item?.value || 0;
    if (price <= 0) return;

    const el = document.createElement('div');
    el.className = 'sale-floating-text';
    el.textContent = `+${price.toLocaleString('ja-JP')}G`;

    // ゴールドアイコンの近くに配置
    const goldEl = document.querySelector('.gold-display');
    if (goldEl) {
      const rect = goldEl.getBoundingClientRect();
      el.style.left = `${rect.left + rect.width / 2}px`;
      el.style.top = `${rect.top}px`;
    } else {
      el.style.right = '200px';
      el.style.top = '40px';
    }

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  // =============================================
  //  Wave A: ランクアップオーバーレイ
  // =============================================

  _showRankUpOverlay(data) {
    const rankName = data?.rank || 'ランクアップ！';

    const overlay = document.createElement('div');
    overlay.className = 'rankup-overlay';
    overlay.innerHTML = `
      <div class="rankup-confetti-layer"></div>
      <div class="rankup-content">
        <div class="rankup-icon">👑</div>
        <div class="rankup-label">ランクアップ！</div>
        <div class="rankup-name">${rankName}</div>
      </div>
    `;
    document.body.appendChild(overlay);

    // CSS紙吹雪パーティクルを動的生成
    const confettiLayer = overlay.querySelector('.rankup-confetti-layer');
    const colors = ['#e8b84b', '#7daa68', '#c47a5a', '#7ab0c4', '#f5e6c8', '#ff9955', '#fff'];
    for (let i = 0; i < 60; i++) {
      const particle = document.createElement('div');
      particle.className = 'rankup-confetti-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particle.style.animationDuration = `${2 + Math.random() * 2}s`;
      particle.style.width = `${4 + Math.random() * 6}px`;
      particle.style.height = `${3 + Math.random() * 5}px`;
      confettiLayer.appendChild(particle);
    }

    // 3秒後にフェードアウト
    setTimeout(() => {
      overlay.classList.add('rankup-overlay-hide');
      setTimeout(() => overlay.remove(), 600);
    }, 3000);
  }

  // =============================================
  //  Wave A: レジェンダリー調合フラッシュ
  // =============================================

  _onItemCrafted(data) {
    if (!data?.item) return;
    const q = data.item.quality;

    if (q >= 81) {
      // レジェンダリー！金色フルスクリーンフラッシュ
      const flash = document.createElement('div');
      flash.className = 'legendary-flash';
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 1200);
    } else if (q >= 61) {
      // 優品 — 控えめなフラッシュ
      const flash = document.createElement('div');
      flash.className = 'excellent-flash';
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 800);
    }
  }

  // =============================================
  //  UI時間帯連動エフェクト
  // =============================================

  _updateTimeOfDayUI() {
    if (!this.dayCycle) return;
    const p = this.dayCycle.dayTimer / this.dayCycle.dayDuration; // 0-1

    const root = document.documentElement;
    let tintR, tintG, tintB, tintA, borderTint;

    if (p < TIME_DAWN_END) {
      // 夜明け → 暖かい朝色
      const t = p / TIME_DAWN_END;
      tintR = 255; tintG = 220; tintB = 180; tintA = 0.03 * t;
      borderTint = `rgba(255, 200, 140, ${0.08 * t})`;
    } else if (p < TIME_NOON_END) {
      // 朝 → 昼: 徐々にニュートラルに
      const t = (p - TIME_DAWN_END) / (TIME_NOON_END - TIME_DAWN_END);
      tintR = 255; tintG = 248; tintB = 230; tintA = 0.03 * (1 - t);
      borderTint = `rgba(160, 132, 92, 0.08)`;
    } else if (p < TIME_SUNSET_END) {
      // 昼 → 夕方
      const t = (p - TIME_NOON_END) / (TIME_SUNSET_END - TIME_NOON_END);
      tintR = 255; tintG = 150; tintB = 80; tintA = 0.04 * t;
      borderTint = `rgba(196, 122, 90, ${0.12 * t})`;
    } else {
      // 夕方 → 夜
      const t = (p - TIME_SUNSET_END) / (1 - TIME_SUNSET_END);
      tintR = 30; tintG = 40; tintB = 80; tintA = 0.04 * (0.5 + t * 0.5);
      borderTint = `rgba(50, 60, 120, ${0.08 * t})`;
    }

    root.style.setProperty('--time-tint', `rgba(${tintR}, ${tintG}, ${tintB}, ${tintA})`);
    root.style.setProperty('--time-border', borderTint);
  }

  // =============================================
  //  キーボードショートカット
  // =============================================

  _initKeyboardShortcuts() {
    const tabMap = {
      '1': 'tab-inventory',
      '2': 'tab-crafting',
      '3': 'tab-shop',
      '4': 'tab-dispatch',
      '5': 'tab-upgrade',
      '6': 'tab-stats',
    };

    this._keyHandler = (e) => {
      // パズル中・モーダル中は無視
      if (document.querySelector('.puzzle-overlay, .craft-result-overlay, .gameover-overlay, .title-overlay')) return;
      // テキスト入力中は無視
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (tabMap[e.key]) {
        e.preventDefault();
        this._switchTab(tabMap[e.key]);
      }
      if (e.code === 'Space') {
        e.preventDefault();
        if (this.dayCycle && !this.dayCycle.isGameOver) {
          this.dayCycle.skipDay();
        }
      }
    };
    document.addEventListener('keydown', this._keyHandler);
  }

  dispose() {
    this._unsubscribers.forEach(unsub => unsub());
    if (this._keyHandler) document.removeEventListener('keydown', this._keyHandler);
  }
}

