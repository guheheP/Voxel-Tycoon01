/**
 * Voxel Shop Tycoon — Main Entry Point
 * セーブ/ロード対応・イベントシステム統合版
 */

import * as THREE from 'three';
import { Renderer } from './core/Renderer.js';
import { SaveSystem } from './core/SaveSystem.js';
import { eventBus } from './core/EventBus.js';
import { SceneManager } from './SceneManager.js';
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

// ============================================================
//  Systems
// ============================================================

const entities = [];
let renderer = null;
let sceneManager = null;
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
let gameStarted = false;

// ============================================================
//  Initialization
// ============================================================

async function initRenderer() {
  renderer = new Renderer('game-canvas');
  sceneManager = new SceneManager(renderer.scene, renderer.camera, entities, renderer);
  await sceneManager.init();
}

async function boot() {
  try {
    await initRenderer();

    // 「Click to Start」スプラッシュ画面 (ブラウザのオーディオポリシー対応)
    _showSplash(() => {
      // ユーザーインタラクション後 → AudioContext初期化 + タイトルBGM
      SoundManager.init();
      SoundManager.startTitleBGM();

      // タイトル画面を表示
      new TitleScreen((saveData) => {
        startGame(saveData);
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
    splash.classList.add('splash-fade-out');
    setTimeout(() => {
      splash.remove();
      onContinue();
    }, 600);
  };
  splash.addEventListener('click', handleClick);
}

function startGame(saveData) {
  // データシステムの初期化
  inventorySystem = new InventorySystem();
  shopSystem = new ShopSystem(inventorySystem);
  adventurerSystem = new AdventurerSystem(inventorySystem);
  questSystem = new QuestSystem();
  dayCycleSystem = new DayCycleSystem(inventorySystem, questSystem);
  randomEventSystem = new RandomEventSystem(inventorySystem);
  reputationSystem = new ReputationSystem();
  customerSystem = new CustomerSystem(inventorySystem, shopSystem, randomEventSystem, reputationSystem);

  // 参照は不要（各システムは独立して動作）

  // セーブデータのロード
  if (saveData) {
    _applySaveData(saveData);
  }

  // セーブシステム
  saveSystem = new SaveSystem(inventorySystem, adventurerSystem, dayCycleSystem, shopSystem, reputationSystem, questSystem);

  // UI初期化
  uiManager = new UIManager(inventorySystem, shopSystem, adventurerSystem, customerSystem, dayCycleSystem, randomEventSystem, reputationSystem, questSystem);
  new ToastManager();
  new GameOverScreen();

  // チュートリアル (初回のみ)
  if (!saveData) {
    new TutorialSystem();
  }

  gameStarted = true;

  // パズル中のゲーム一時停止
  eventBus.on('game:pause', () => { gamePaused = true; });
  eventBus.on('game:resume', () => { gamePaused = false; });

  // ゲームBGMへ移行（タイトル曲が終わったら切り替わる）
  SoundManager.startGameBGM();

  console.log('[VoxelGame] Game started.' + (saveData ? ' (loaded save)' : ''));
}

function _applySaveData(data) {
  // ゴールド
  inventorySystem.gold = data.gold;

  // インベントリ
  inventorySystem.items = [];
  for (const item of data.items) {
    inventorySystem.items.push(createItemInstance(item.blueprintId, item.quality, item.traits));
  }

  // 陳列中アイテム
  shopSystem.displayedItems = [];
  for (const item of data.displayedItems || []) {
    shopSystem.displayedItems.push(createItemInstance(item.blueprintId, item.quality, item.traits));
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

  // アップグレード復元
  if (data.purchasedUpgrades) {
    shopSystem.purchasedUpgrades = [...data.purchasedUpgrades];
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
            assignedArea: 'plains',
            currentArea: null, level: 1, exp: 0,
            equipment: { weapon: null },
          };
          adventurerSystem.adventurers.push(adv);
        }
      }

      if (adv) {
        adv.level = savedAdv.level || 1;
        adv.exp = savedAdv.exp || 0;
        adv.assignedArea = savedAdv.assignedArea || 'plains';
        if (savedAdv.weapon) {
          adv.equipment.weapon = createItemInstance(savedAdv.weapon.blueprintId, savedAdv.weapon.quality, savedAdv.weapon.traits);
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
}



boot();

// ============================================================
//  Game Loop
// ============================================================

const clock = new THREE.Clock();
let gamePaused = false;

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  // Update all entity animations
  for (const entity of entities) {
    entity.update(dt);
  }

  if (!gameStarted) {
    if (renderer) renderer.render();
    return;
  }

  // Update game logic (paused during puzzle)
  if (!gamePaused) {
    if (sceneManager) sceneManager.update(dt);
    if (dayCycleSystem) dayCycleSystem.update(dt);
    if (shopSystem) shopSystem.update(dt);
    if (adventurerSystem) adventurerSystem.update(dt);
    if (customerSystem) customerSystem.update(dt);
    if (saveSystem) saveSystem.update(dt);

    // 日夜ライティング同期
    if (sceneManager && dayCycleSystem) {
      sceneManager.setDayProgress(dayCycleSystem.dayProgress);
    }
  }
  if (uiManager) uiManager.update(dt);

  if (renderer) renderer.render();
}

animate();
