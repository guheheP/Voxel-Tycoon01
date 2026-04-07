/**
 * SaveSystem — LocalStorageベースのセーブ/ロードシステム (v4 リアルタイム制)
 */
import { GameConfig } from '../data/config.js';
import { Recipes } from '../data/items.js';
import { AreaDefs } from '../data/areas.js';
import { eventBus } from './EventBus.js';
import { StatsTracker } from '../StatsTracker.js';

const SAVE_KEY = 'voxelshop_save_v5';
const LEGACY_KEYS = ['voxelshop_save_v4', 'voxelshop_save_v3', 'voxelshop_save_v2', 'voxelshop_save_v1'];
const AUTOSAVE_INTERVAL = 30;

export class SaveSystem {
  constructor(inventorySystem, adventurerSystem, dayCycleSystem, shopSystem, reputationSystem, questSystem, collectionSystem, autoCraftSystem) {
    this.inventory = inventorySystem;
    this.adventurers = adventurerSystem;
    this.dayCycle = dayCycleSystem;
    this.shop = shopSystem;
    this.reputation = reputationSystem;
    this.quest = questSystem;
    this.collection = collectionSystem;
    this.autoCraft = autoCraftSystem;
    this.timer = 0;
  }

  update(dt) {
    this.timer += dt;
    if (this.timer >= AUTOSAVE_INTERVAL) {
      this.timer = 0;
      this.save();
    }
  }

  save() {
    try {
      const data = {
        version: 5,
        timestamp: Date.now(),
        gold: this.inventory.gold,
        maxCapacity: this.inventory.maxCapacity,
        items: this.inventory.items.map(i => ({
          blueprintId: i.blueprintId,
          quality: i.quality,
          traits: i.traits,
          locked: i.locked || false,
        })),
        displayedItems: this.shop.displayedItems.map(i => ({
          blueprintId: i.blueprintId,
          quality: i.quality,
          traits: i.traits,
        })),
        maxSlots: this.shop.maxSlots,
        purchasedUpgrades: this.shop.purchasedUpgrades,
        adventurers: this.adventurers.adventurers.map(a => ({
          id: a.id,
          level: a.level,
          exp: a.exp,
          assignedArea: a.assignedArea,
          weapon: a.equipment.weapon ? {
            blueprintId: a.equipment.weapon.blueprintId,
            quality: a.equipment.weapon.quality,
            traits: a.equipment.weapon.traits,
          } : null,
        })),
        day: this.dayCycle.day,
        dayTimer: this.dayCycle.dayTimer,
        totalSales: this.dayCycle.totalSales,
        currentRankIndex: this.dayCycle.currentRankIndex,
        unlockedRecipes: Object.keys(Recipes).filter(k => Recipes[k].unlocked),
        unlockedAreas: Object.keys(AreaDefs).filter(k => AreaDefs[k].unlocked),
        reputation: this.reputation ? this.reputation.toSaveData() : null,
        stats: StatsTracker.toSaveData(),
        quest: this.quest ? this.quest.toSaveData() : null,
        rankBossAvailable: this.dayCycle.rankBossAvailable,
        defeatedBosses: this.dayCycle.defeatedBosses || [],
        autoSellEnabled: this.shop.autoSellEnabled || false,
        autoSellRules: this.shop.autoSellRules || null,
        collection: this.collection ? this.collection.toSaveData() : null,
        autoCraft: this.autoCraft ? this.autoCraft.toSaveData() : null,
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
      console.log('[Save] ゲームを保存しました (v5)');
      eventBus.emit('save:completed');
    } catch (e) {
      console.error('[Save] 保存失敗:', e);
    }
  }

  static hasSave() {
    if (localStorage.getItem(SAVE_KEY)) return true;
    for (const key of LEGACY_KEYS) {
      if (localStorage.getItem(key)) return true;
    }
    return false;
  }

  static getSaveInfo() {
    try {
      let raw = localStorage.getItem(SAVE_KEY);
      if (!raw) {
        for (const key of LEGACY_KEYS) {
          raw = localStorage.getItem(key);
          if (raw) break;
        }
      }
      if (!raw) return null;
      const data = JSON.parse(raw);
      return {
        day: data.day,
        gold: data.gold,
        totalSales: data.totalSales,
        rankIndex: data.currentRankIndex,
        timestamp: data.timestamp,
      };
    } catch { return null; }
  }

  static deleteSave() {
    localStorage.removeItem(SAVE_KEY);
    for (const key of LEGACY_KEYS) {
      localStorage.removeItem(key);
    }
  }

  static loadSaveData() {
    try {
      let raw = localStorage.getItem(SAVE_KEY);
      if (raw) return JSON.parse(raw);
      // Legacy migration
      for (const key of LEGACY_KEYS) {
        raw = localStorage.getItem(key);
        if (raw) {
          const data = JSON.parse(raw);
          // v4未満 → v4 フィールド補完（v5移行より先に実行する必要がある）
          if (data.version < 4) {
             data.maxCapacity = data.maxCapacity || GameConfig.initialInventoryCapacity;
             data.maxSlots = data.maxSlots || GameConfig.shopMaxDisplaySlots;
             data.purchasedUpgrades = data.purchasedUpgrades || [];
             data.quest = data.quest || null;
             data.dayTimer = 0;
             delete data.ap;
             delete data.maxAP;
          }
          // v5未満 → v5 フィールド補完
          if (data.version < 5) {
             data.rankBossAvailable = data.rankBossAvailable ?? false;
             data.defeatedBosses = data.defeatedBosses || [];
          }
          data.version = 5;
          localStorage.removeItem(key);
          localStorage.setItem(SAVE_KEY, JSON.stringify(data));
          console.log(`[Save] ${key} → v5 マイグレーション完了`);
          return data;
        }
      }
      return null;
    } catch { return null; }
  }
}
