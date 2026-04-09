/**
 * SaveSystem — LocalStorageベースのセーブ/ロードシステム (v4 リアルタイム制)
 */
import { GameConfig } from '../data/config.js';
import { Recipes } from '../data/items.js';
import { AreaDefs } from '../data/areas.js';
import { eventBus } from './EventBus.js';
import { StatsTracker } from '../StatsTracker.js';

const SAVE_KEY = 'voxelshop_save_v6';
const LEGACY_KEYS = ['voxelshop_save_v5', 'voxelshop_save_v4', 'voxelshop_save_v3', 'voxelshop_save_v2', 'voxelshop_save_v1'];
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
        version: 6,
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
        adventurers: this.adventurers.adventurers.map(a => {
          const equipSave = {};
          for (const slot of ['weapon', 'armor', 'accessory']) {
            equipSave[slot] = a.equipment[slot] ? {
              blueprintId: a.equipment[slot].blueprintId,
              quality: a.equipment[slot].quality,
              traits: a.equipment[slot].traits,
            } : null;
          }
          return {
            id: a.id,
            level: a.level,
            exp: a.exp,
            assignedArea: a.assignedArea,
            equipment: equipSave,
            // 後方互換: v5ロード用
            weapon: equipSave.weapon,
          };
        }),
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
        clearedChallenges: this.dayCycle.clearedChallenges || [],
        autoSellEnabled: this.shop.autoSellEnabled || false,
        autoSellRules: this.shop.autoSellRules || null,
        autoDisposeEnabled: this.shop.autoDisposeEnabled || false,
        autoDisposeMaxQuality: this.shop.autoDisposeMaxQuality ?? 30,
        collection: this.collection ? this.collection.toSaveData() : null,
        autoCraft: this.autoCraft ? this.autoCraft.toSaveData() : null,
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
      console.log('[Save] ゲームを保存しました (v6)');
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
          // v6未満 → v6 フィールド補完 (3スロット装備 + 自動処分)
          if (data.version < 6) {
             // 冒険者の装備データを3スロット形式にマイグレーション
             if (data.adventurers) {
               for (const adv of data.adventurers) {
                 if (!adv.equipment) {
                   adv.equipment = {
                     weapon: adv.weapon || null,
                     armor: null,
                     accessory: null,
                   };
                 }
               }
             }
             data.autoDisposeEnabled = data.autoDisposeEnabled ?? false;
             data.autoDisposeMaxQuality = data.autoDisposeMaxQuality ?? 30;
          }
          data.version = 6;
          localStorage.removeItem(key);
          localStorage.setItem(SAVE_KEY, JSON.stringify(data));
          console.log(`[Save] ${key} → v6 マイグレーション完了`);
          return data;
        }
      }
      return null;
    } catch { return null; }
  }
}
