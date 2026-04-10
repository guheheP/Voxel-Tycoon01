/**
 * Voxel Shop Tycoon — Main Entry Point
 * セーブ/ロード対応・イベントシステム統合版
 */

import { SaveSystem } from './core/SaveSystem.js';
import { eventBus } from './core/EventBus.js';
import { InventorySystem } from './InventorySystem.js';
import { ShopSystem } from './ShopSystem.js';
import { AdventurerSystem } from './AdventurerSystem.js';
import { DayCycleSystem } from './DayCycleSystem.js';
import { CustomerSystem } from './CustomerSystem.js';
import { RandomEventSystem } from './RandomEventSystem.js';
import { UIManager } from './ui/UIManager.js';
import { ToastManager } from './ui/ToastManager.js';
import { GameOverScreen } from './ui/GameOverScreen.js';
import { TitleScreen } from './ui/TitleScreen.js';
import { TutorialSystem } from './ui/TutorialSystem.js';
import { createItemInstance } from './ItemSystem.js';
import { Recipes } from './data/items.js';
import { AreaDefs } from './data/areas.js';
import { UnlockableAdventurers } from './data/adventurers.js';
import { SoundManager } from './core/SoundManager.js';
import { ReputationSystem } from './ReputationSystem.js';
import { StatsTracker } from './StatsTracker.js';
import { QuestSystem } from './QuestSystem.js';
import { BattleSystem } from './BattleSystem.js';
import { BattleScreen } from './ui/BattleScreen.js';
import { BattlePrepScreen } from './ui/BattlePrepScreen.js';
import { CollectionSystem } from './CollectionSystem.js';
import { GameTooltip } from './ui/GameTooltip.js';
import { AutoCraftSystem } from './AutoCraftSystem.js';
import { MainSceneCanvas } from './ui/MainSceneCanvas.js';

// ============================================================
//  Systems
// ============================================================

const entities = [];
let mainSceneCanvas = null;
let inventorySystem = null;
let shopSystem = null;
let adventurerSystem = null;
let dayCycleSystem = null;
let customerSystem = null;
let randomEventSystem = null;
let reputationSystem = null;
let questSystem = null;
let saveSystem = null;
let uiManager = null;
let battleSystem = null;
let battleScreen = null;
let battlePrepScreen = null;
let collectionSystem = null;
let autoCraftSystem = null;
let toastManager = null;
let gameOverScreen = null;
let tutorialSystem = null;
let gameStarted = false;
let _gameEventUnsubs = null;

// ============================================================
//  Initialization
// ============================================================

async function initGame() {
  mainSceneCanvas = new MainSceneCanvas();
  mainSceneCanvas.init('main-scene-container');
}

async function boot() {
  try {
    GameTooltip.init();
    await initGame();

    // 「Click to Start」スプラッシュ画面 (ブラウザのオーディオポリシー対応)
    _showSplash(() => {
      // ユーザーインタラクション後 → AudioContext初期化 + タイトルBGM
      SoundManager.init();
      SoundManager.startTitleBGM();

      // タイトル画面を表示
      new TitleScreen(async (saveData) => {
        // ローディング画面を表示してからゲームを初期化
        const loading = _showLoading();
        // 1フレーム待ってDOMを確実に描画
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        await startGame(saveData);
        _hideLoading(loading);
      });
    });
  } catch (err) {
    console.error('[VoxelGame] Failed to load:', err);
  }
}

function _showSplash(onContinue) {
  const splash = document.createElement('div');
  splash.className = 'splash-overlay';
  splash.innerHTML = `
    <div class="splash-content">
      <p class="splash-text">Click to Start</p>
    </div>
  `;
  document.body.appendChild(splash);

  // 初回ロードのFOUC防止用ローダーを削除
  const loader = document.getElementById('initial-loader');
  if (loader) loader.remove();

  const handleClick = () => {
    splash.removeEventListener('click', handleClick);
    // タイトル画面をスプラッシュの下に先に生成してから、
    // スプラッシュをフェードアウトする（ゲーム画面が見えるのを防ぐ）
    onContinue();
    splash.classList.add('splash-fade-out');
    setTimeout(() => {
      splash.remove();
    }, 600);
  };
  splash.addEventListener('click', handleClick);
}

function _showLoading() {
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p class="loading-text">Now Loading...</p>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

function _hideLoading(overlay) {
  if (!overlay) return;
  overlay.classList.add('loading-fade-out');
  setTimeout(() => overlay.remove(), 500);
}

// 初期のunlocked状態を記録（ニューゲーム時のリセット用）
const _initialRecipeUnlocked = {};
for (const [key, r] of Object.entries(Recipes)) {
  _initialRecipeUnlocked[key] = !!r.unlocked;
}
const _initialAreaUnlocked = {};
for (const [key, a] of Object.entries(AreaDefs)) {
  _initialAreaUnlocked[key] = !!a.unlocked;
}

async function startGame(saveData) {
  // グローバルデータのリセット（HMR・マルチセッション対策）
  for (const key in Recipes) {
    Recipes[key].unlocked = _initialRecipeUnlocked[key] || false;
  }
  for (const key in AreaDefs) {
    AreaDefs[key].unlocked = _initialAreaUnlocked[key] || false;
  }

  // データシステムの初期化
  inventorySystem = new InventorySystem();
  shopSystem = new ShopSystem(inventorySystem);
  adventurerSystem = new AdventurerSystem(inventorySystem);
  questSystem = new QuestSystem();
  dayCycleSystem = new DayCycleSystem(inventorySystem, questSystem);
  randomEventSystem = new RandomEventSystem(inventorySystem);
  reputationSystem = new ReputationSystem();
  customerSystem = new CustomerSystem(inventorySystem, shopSystem, randomEventSystem, reputationSystem);
  autoCraftSystem = new AutoCraftSystem(inventorySystem);

  // セーブデータのロード
  if (saveData) {
    _applySaveData(saveData);
  }

  // メインシーンの初期ショップランクを同期（セーブ復元後）
  if (mainSceneCanvas) {
    mainSceneCanvas.setShopRank(dayCycleSystem.currentRankIndex + 1);
  }

  // 図鑑システム
  collectionSystem = new CollectionSystem();

  // セーブシステム
  saveSystem = new SaveSystem(inventorySystem, adventurerSystem, dayCycleSystem, shopSystem, reputationSystem, questSystem, collectionSystem, autoCraftSystem);

  // UI初期化（前回のインスタンスをクリーンアップ）
  if (uiManager) uiManager.dispose();
  if (toastManager) toastManager.dispose();
  uiManager = new UIManager(inventorySystem, shopSystem, adventurerSystem, customerSystem, dayCycleSystem, randomEventSystem, reputationSystem, questSystem, collectionSystem, battleSystem);
  toastManager = new ToastManager();
  gameOverScreen = new GameOverScreen();

  // タブガイド（各タブ初回訪問時に表示）
  tutorialSystem = new TutorialSystem();

  // バトルシステム初期化
  battleSystem = new BattleSystem(adventurerSystem, inventorySystem);
  battleScreen = new BattleScreen(inventorySystem);
  battlePrepScreen = new BattlePrepScreen(inventorySystem, adventurerSystem, dayCycleSystem);

  // イベントリスナー（重複防止: 前回のリスナーを解除してから再登録）
  if (_gameEventUnsubs) _gameEventUnsubs.forEach(u => u());
  _gameEventUnsubs = [
    eventBus.on('battle:requestStart', (d) => {
      let bossDef = null;
      for (const key in AreaDefs) {
        if (AreaDefs[key].boss && AreaDefs[key].boss.id === d.bossId) {
          bossDef = AreaDefs[key].boss;
          break;
        }
      }
      if (bossDef) {
        battlePrepScreen.show(d.rankIndex, bossDef);
      } else {
        eventBus.emit('toast', { message: 'ボスの情報が見つかりません', type: 'error' });
      }
    }),
    eventBus.on('battle:prepComplete', (d) => {
      // チャレンジモードの場合はstartChallengeを使用
      if (d.challengeId) {
        battleSystem.startChallenge(d.challengeId, d.selectedItems, d.selectedBgm || null);
      } else {
        battleSystem.startBattle(d.rankIndex, d.bossDef, d.selectedItems);
      }
    }),
    // チャレンジモード開始リクエスト → BattlePrepScreen表示
    eventBus.on('challenge:requestStart', (d) => {
      if (battlePrepScreen) {
        battlePrepScreen.showChallenge(d.challengeId);
      }
    }),
    eventBus.on('battle:command', (d) => {
      if (d.action === 'flee') battleSystem.flee();
      else if (d.action === 'useItem') battleSystem.useItem(d.uid, d.targetAdvId || null);
    }),
    eventBus.on('game:pause', () => { gamePaused = true; }),
    eventBus.on('game:resume', () => { gamePaused = false; }),
    // オート調合: UIからの問い合わせに応答
    eventBus.on('autoCraft:query', (q) => {
      if (!autoCraftSystem) return;
      q.enabled = autoCraftSystem.enabled;
      q.mode = autoCraftSystem.mode;
      q.recipeId = autoCraftSystem.recipeId;
      q.canCraft = autoCraftSystem.canCraft();
      q.materialStatus = autoCraftSystem.getMaterialStatus();
      q.craftCount = autoCraftSystem.craftCount;
    }),
    eventBus.on('autoCraft:setEnabled', (d) => {
      if (autoCraftSystem) autoCraftSystem.setEnabled(d.enabled);
    }),
    eventBus.on('autoCraft:setMode', (d) => {
      if (autoCraftSystem) autoCraftSystem.setMode(d.mode);
    }),
    eventBus.on('autoCraft:setRecipe', (d) => {
      if (autoCraftSystem) autoCraftSystem.setRecipe(d.recipeId);
    }),
  ];

  gameStarted = true;

  // ゲームBGMへ移行（タイトル曲が終わったら切り替わる）
  SoundManager.startGameBGM();

  // DEV モード: シミュレータパネル（` キーでトグル）
  if (import.meta.env.DEV) {
    const { SimulatorPanel } = await import('./ui/SimulatorPanel.js');
    const simPanel = new SimulatorPanel();
    document.addEventListener('keydown', (e) => {
      if (e.key === '`' || e.key === '半角/全角') simPanel.toggle();
    });
    console.log('[DEV] SimulatorPanel ready — press ` to open');
  }

  console.log('[VoxelGame] Game started.' + (saveData ? ' (loaded save)' : ''));
}

function _applySaveData(data) {
  // ゴールド
  inventorySystem.gold = data.gold;

  // インベントリ
  inventorySystem.items = [];
  for (const item of data.items) {
    try {
      const inst = createItemInstance(item.blueprintId, item.quality, item.traits);
      if (item.locked) inst.locked = true;
      inventorySystem.items.push(inst);
    } catch (e) {
      console.warn('[Load] 不明なアイテムをスキップ:', item.blueprintId, e.message);
    }
  }

  // 陳列中アイテム（売値をShopSystemの計算式で再設定する）
  shopSystem.displayedItems = [];
  for (const item of data.displayedItems || []) {
    try {
      const inst = createItemInstance(item.blueprintId, item.quality, item.traits);
      inst.value = shopSystem._calcValue(inst);
      shopSystem.displayedItems.push(inst);
    } catch (e) {
      console.warn('[Load] 不明な陳列アイテムをスキップ:', item.blueprintId, e.message);
    }
  }

  // レシピ解放
  for (const key of (data.unlockedRecipes || [])) {
    if (Recipes[key]) Recipes[key].unlocked = true;
  }

  // エリア解放
  for (const key of (data.unlockedAreas || [])) {
    if (AreaDefs[key]) AreaDefs[key].unlocked = true;
  }

  // 日数・ランク・日タイマー
  dayCycleSystem.day = data.day || 1;
  dayCycleSystem.dayTimer = data.dayTimer || 0;
  dayCycleSystem.totalSales = data.totalSales || 0;
  dayCycleSystem.currentRankIndex = data.currentRankIndex || 0;
  dayCycleSystem.rankBossAvailable = data.rankBossAvailable || false;
  dayCycleSystem.defeatedBosses = data.defeatedBosses || [];
  dayCycleSystem.clearedChallenges = data.clearedChallenges || [];

  // アップグレード復元
  if (data.purchasedUpgrades) {
    shopSystem.purchasedUpgrades = [...data.purchasedUpgrades];
    shopSystem.recalculateUpgrades();
  }
  // maxSlots復元
  if (data.maxSlots) {
    shopSystem.maxSlots = data.maxSlots;
  }
  // 倉庫容量復元
  if (data.maxCapacity) {
    inventorySystem.maxCapacity = data.maxCapacity;
  }
  // クエスト復元
  if (data.quest && questSystem) {
    questSystem.loadSaveData(data.quest);
  }

  // オートセル復元
  if (data.autoSellEnabled != null) {
    shopSystem.autoSellEnabled = data.autoSellEnabled;
  }
  if (data.autoSellRules) {
    Object.assign(shopSystem.autoSellRules, data.autoSellRules);
  }

  // 素材自動処分の復元
  if (data.autoDisposeEnabled != null) {
    shopSystem.autoDisposeEnabled = data.autoDisposeEnabled;
  }
  if (data.autoDisposeMaxQuality != null) {
    shopSystem.autoDisposeMaxQuality = data.autoDisposeMaxQuality;
  }

  // オート調合の復元
  if (data.autoCraft && autoCraftSystem) {
    autoCraftSystem.loadSaveData(data.autoCraft);
  }

  // 冒険者の復元
  if (data.adventurers) {
    for (const savedAdv of data.adventurers) {
      let adv = adventurerSystem.adventurers.find(a => a.id === savedAdv.id);

      // 解放済み冒険者の追加
      if (!adv) {
        const def = UnlockableAdventurers.find(d => d.id === savedAdv.id);
        if (def) {
          adv = {
            id: def.id, name: def.name, icon: def.icon,
            status: 'idle', timer: 0, maxTimer: 0,
            exploreTimeMultiplier: def.exploreTimeMultiplier,
            preset: def.preset,
            allowedEquipTypes: def.allowedEquipTypes || [],
            battle: def.battle ? { ...def.battle } : { maxHp: 100, atk: 20, def: 10, spd: 70 },
            assignedArea: 'plains',
            currentArea: null, level: 1, exp: 0,
            equipment: { weapon: null, armor: null, accessory: null },
          };
          adventurerSystem.adventurers.push(adv);
        }
      }

      if (adv) {
        adv.level = savedAdv.level || 1;
        adv.exp = savedAdv.exp || 0;
        adv.assignedArea = savedAdv.assignedArea || 'plains';

        // 3スロット装備の復元 (v6+: equipment オブジェクト, v5: weapon のみ)
        const eqData = savedAdv.equipment || { weapon: savedAdv.weapon || null, armor: null, accessory: null };
        for (const slot of ['weapon', 'armor', 'accessory']) {
          const slotData = eqData[slot];
          if (slotData) {
            try {
              adv.equipment[slot] = createItemInstance(slotData.blueprintId, slotData.quality, slotData.traits);
            } catch (e) {
              console.warn(`[Load] 不明な装備をスキップ (${slot}):`, slotData.blueprintId, e.message);
              adv.equipment[slot] = null;
            }
          } else {
            adv.equipment[slot] = null;
          }
        }
      }
    }
  }

  // 評判の復元
  if (data.reputation && reputationSystem) {
    reputationSystem.loadSaveData(data.reputation);
  }

  // 統計の復元
  if (data.stats) {
    StatsTracker.loadSaveData(data.stats);
  }

  // 図鑑の復元
  if (data.collection && collectionSystem) {
    collectionSystem.loadSaveData(data.collection);
  }
}



boot();

// ============================================================
//  Game Loop
// ============================================================


let gamePaused = false;
let lastTime = 0;

function animate(time) {
  requestAnimationFrame(animate);
  const dt = Math.min((time - lastTime) / 1000, 0.1);
  lastTime = time;

  if (!gameStarted) return;

  if (battleSystem && battleSystem.active) {
    battleSystem.update(dt);
  }

  // Update game logic (paused during puzzle)
  if (!gamePaused && !(battleSystem && battleSystem.active)) {
    if (dayCycleSystem) dayCycleSystem.update(dt);
    if (shopSystem) shopSystem.update(dt);
    if (adventurerSystem) adventurerSystem.update(dt);
    if (customerSystem) customerSystem.update(dt);
    if (autoCraftSystem) autoCraftSystem.update(dt);
    if (saveSystem) saveSystem.update(dt);
    // 日進行バーをイベントを介さず直接更新（毎フレームevent発火を避ける）
    if (mainSceneCanvas && dayCycleSystem) {
      mainSceneCanvas.setDayProgress(dayCycleSystem.dayProgress);
    }
  }
  if (uiManager) uiManager.update(dt);
}

animate();
