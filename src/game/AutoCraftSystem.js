/**
 * AutoCraftSystem — オート調合
 *
 * 指定レシピの調合を一定間隔で自動実行する。
 * 素材はインベントリからロックされていないものを品質降順で自動選択。
 * パズルボーナスなし（品質0ボーナス）、特性は全引き継ぎ。
 */
import { Recipes, ItemBlueprints, TraitDefs } from './data/items.js';
import { craftItem, materialMatchesSlot } from './ItemSystem.js';
import { GameConfig } from './data/config.js';
import { eventBus } from './core/EventBus.js';

const AUTO_CRAFT_INTERVAL = 8; // 秒

export class AutoCraftSystem {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;

    this.enabled = false;
    this.recipeId = null;        // 選択中のレシピID
    this.timer = 0;
    this.craftCount = 0;         // 今回の有効化以降の調合回数（統計用）
  }

  /** 毎フレーム更新 */
  update(dt) {
    if (!this.enabled || !this.recipeId) return;

    this.timer += dt;
    if (this.timer < AUTO_CRAFT_INTERVAL) return;
    this.timer = 0;

    this._tryAutoCraft();
  }

  /** オート調合の有効/無効を切り替え */
  setEnabled(flag) {
    this.enabled = flag;
    this.timer = 0;
    if (!flag) this.craftCount = 0;
  }

  /** レシピを設定 */
  setRecipe(recipeId) {
    if (recipeId && !Recipes[recipeId]) return;
    this.recipeId = recipeId;
    this.timer = 0;
  }

  /** 現在の設定で調合可能かどうか判定 */
  canCraft() {
    if (!this.recipeId) return false;
    const recipe = Recipes[this.recipeId];
    if (!recipe || !recipe.unlocked) return false;
    return this._findMaterials(recipe) !== null;
  }

  /** 現在のレシピに対する素材候補数を返す（UI用） */
  getMaterialStatus() {
    if (!this.recipeId) return null;
    const recipe = Recipes[this.recipeId];
    if (!recipe) return null;

    const result = [];
    for (const slot of recipe.materials) {
      const candidates = this._getCandidatesForSlot(slot, []);
      result.push({
        slot,
        slotLabel: this._getSlotLabel(slot),
        available: candidates.length,
      });
    }
    return result;
  }

  // ── Private ──

  /** 調合を試行 */
  _tryAutoCraft() {
    const recipe = Recipes[this.recipeId];
    if (!recipe || !recipe.unlocked) return;

    // 倉庫がいっぱいなら停止
    if (this.inventory.isFull) return;

    const materials = this._findMaterials(recipe);
    if (!materials) return;

    // 全素材のトレイトを収集（手動調合と同じ）
    const allTraits = new Set();
    materials.forEach(m => m.traits.forEach(t => allTraits.add(t)));
    const selectedTraits = Array.from(allTraits);

    // アップグレードの品質ボーナスを取得
    const upgradeQ = { effectType: 'quality_bonus', result: 0 };
    eventBus.emit('upgrade:queryBonus', upgradeQ);
    const qualityBonus = upgradeQ.result; // パズルなし → 0 + アップグレード分

    try {
      const newItem = craftItem(this.recipeId, materials, selectedTraits, qualityBonus);

      // 素材をインベントリから消費
      for (const mat of materials) {
        this.inventory.removeItem(mat.uid);
      }

      // 調合品を追加
      this.inventory.forceAddItem(newItem);
      this.craftCount++;

      eventBus.emit('inventory:changed');
      eventBus.emit('item:crafted', { item: newItem });
      eventBus.emit('autoCraft:crafted', { item: newItem, count: this.craftCount });
    } catch (e) {
      // 素材が合わないなど — 無視
    }
  }

  /** レシピに必要な素材をインベントリから自動選択（品質降順で最良をピック） */
  _findMaterials(recipe) {
    const usedUids = new Set();
    const selected = [];

    for (const slot of recipe.materials) {
      const candidates = this._getCandidatesForSlot(slot, usedUids);
      if (candidates.length === 0) return null; // 素材不足

      // 品質降順ソート → 最良を選択
      candidates.sort((a, b) => b.quality - a.quality);
      const pick = candidates[0];
      selected.push(pick);
      usedUids.add(pick.uid);
    }

    return selected;
  }

  /** 特定スロットに合致する未ロック・未使用の素材候補を返す */
  _getCandidatesForSlot(slot, usedUids) {
    return this.inventory.items.filter(item => {
      if (item.locked) return false;
      if (usedUids.has(item.uid)) return false;
      if (item.type !== 'material') return false;
      return materialMatchesSlot(item.blueprintId, slot);
    });
  }

  /** スロットの表示名を返す */
  _getSlotLabel(slot) {
    if (typeof slot === 'string' && slot.startsWith('@')) {
      const catId = slot.slice(1);
      // MaterialCategories は items.js の export
      return catId.replace('_type', '系');
    }
    const bp = ItemBlueprints[slot];
    return bp ? bp.name : slot;
  }

  /** セーブ用データ */
  toSaveData() {
    return {
      enabled: this.enabled,
      recipeId: this.recipeId,
    };
  }

  /** ロード */
  loadSaveData(data) {
    if (!data) return;
    this.enabled = data.enabled || false;
    this.recipeId = data.recipeId || null;
  }
}
