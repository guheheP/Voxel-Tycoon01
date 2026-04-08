/**
 * AutoCraftSystem — オート調合
 *
 * モード:
 *   'single' — 指定レシピ1種を繰り返し調合
 *   'all'    — 作れるレシピを片っ端から調合（解放済み全レシピ対象）
 *
 * 素材はインベントリからロックされていないものを品質降順で自動選択。
 * パズルボーナスなし（品質0ボーナス）、特性は全引き継ぎ。
 */
import { Recipes, ItemBlueprints } from './data/items.js';
import { craftItem, materialMatchesSlot, isCategorySlot } from './ItemSystem.js';
import { eventBus } from './core/EventBus.js';

const AUTO_CRAFT_INTERVAL = 8; // 秒

export class AutoCraftSystem {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;

    this.enabled = false;
    this.mode = 'single';        // 'single' | 'all'
    this.recipeId = null;        // single モード時の選択レシピ
    this.timer = 0;
    this.craftCount = 0;         // 有効化以降の調合回数（統計用）
  }

  /** 毎フレーム更新 */
  update(dt) {
    if (!this.enabled) return;
    if (this.mode === 'single' && !this.recipeId) return;

    this.timer += dt;
    if (this.timer < AUTO_CRAFT_INTERVAL) return;
    this.timer = 0;

    if (this.mode === 'all') {
      this._tryAutoCraftAll();
    } else {
      this._tryAutoCraft(this.recipeId);
    }
  }

  setEnabled(flag) {
    this.enabled = flag;
    this.timer = 0;
    if (!flag) this.craftCount = 0;
  }

  setMode(mode) {
    if (mode === 'single' || mode === 'all') this.mode = mode;
  }

  setRecipe(recipeId) {
    if (recipeId && !Recipes[recipeId]) return;
    this.recipeId = recipeId;
    this.timer = 0;
  }

  /** 現在の設定で調合可能かどうか判定 */
  canCraft() {
    if (this.mode === 'all') return this._findCraftableRecipe() !== null;
    if (!this.recipeId) return false;
    const recipe = Recipes[this.recipeId];
    if (!recipe || !recipe.unlocked) return false;
    return this._findMaterials(recipe) !== null;
  }

  /** 現在のレシピに対する素材候補数を返す（UI用） */
  getMaterialStatus() {
    if (this.mode === 'all') return null; // allモードでは不要
    if (!this.recipeId) return null;
    const recipe = Recipes[this.recipeId];
    if (!recipe) return null;

    const result = [];
    for (const slot of recipe.materials) {
      const candidates = this._getCandidatesForSlot(slot, new Set());
      result.push({
        slot,
        slotLabel: this._getSlotLabel(slot),
        available: candidates.length,
      });
    }
    return result;
  }

  // ── Private ──

  /** 単一レシピの調合を試行 */
  _tryAutoCraft(recipeId) {
    const recipe = Recipes[recipeId];
    if (!recipe || !recipe.unlocked) return;
    // 調合は素材N個消費→1個生成なので、空き0でも素材消費で空く
    // freeSlots + materialsCount - 1 >= 0 を確認
    if (this.inventory.freeSlots + recipe.materials.length - 1 < 0) return;

    const materials = this._findMaterials(recipe);
    if (!materials) return;

    this._executeCraft(recipeId, materials);
  }

  /** 全レシピモード — 作れるものを1つ調合 */
  _tryAutoCraftAll() {
    if (this.inventory.freeSlots <= 0 && this.inventory.items.filter(i => i.type === 'material' && !i.locked).length < 2) return;

    const recipeId = this._findCraftableRecipe();
    if (!recipeId) return;

    const recipe = Recipes[recipeId];
    const materials = this._findMaterials(recipe);
    if (!materials) return;

    this._executeCraft(recipeId, materials);
  }

  /** 解放済みレシピの中から調合可能なものを1つ返す（素材レシピ以外を優先） */
  _findCraftableRecipe() {
    const candidates = [];
    for (const [key, recipe] of Object.entries(Recipes)) {
      if (!recipe.unlocked) continue;
      if (this._findMaterials(recipe)) {
        candidates.push({ key, isMat: recipe.isMaterialRecipe || false });
      }
    }
    if (candidates.length === 0) return null;
    // 素材レシピ以外を優先（売値が高い完成品を先に作る）
    const nonMat = candidates.filter(c => !c.isMat);
    if (nonMat.length > 0) return nonMat[Math.floor(Math.random() * nonMat.length)].key;
    return candidates[Math.floor(Math.random() * candidates.length)].key;
  }

  /** 調合の実行（共通処理） */
  _executeCraft(recipeId, materials) {
    const allTraits = new Set();
    materials.forEach(m => m.traits.forEach(t => allTraits.add(t)));
    const selectedTraits = Array.from(allTraits);

    // アップグレード品質ボーナス
    const upgradeQ = { effectType: 'quality_bonus', result: 0 };
    eventBus.emit('upgrade:queryBonus', upgradeQ);

    try {
      const newItem = craftItem(recipeId, materials, selectedTraits, upgradeQ.result);

      for (const mat of materials) {
        this.inventory.removeItem(mat.uid);
      }

      this.inventory.forceAddItem(newItem);
      this.craftCount++;

      eventBus.emit('inventory:changed');
      eventBus.emit('item:crafted', { item: newItem });
      eventBus.emit('autoCraft:crafted', { item: newItem, recipeId, count: this.craftCount });
    } catch (e) {
      // 素材不足など — 無視
    }
  }

  /** レシピに必要な素材をインベントリから自動選択（品質降順で最良をピック）
   *  指名スロット(例:'flower_petal')をカテゴリスロット(例:'@herb_type')より
   *  先に処理し、指名素材がカテゴリに奪われるのを防止 */
  _findMaterials(recipe) {
    const usedUids = new Set();
    const selected = new Array(recipe.materials.length);

    // 指名スロット → カテゴリスロットの順で処理
    const indices = recipe.materials.map((_, i) => i);
    indices.sort((a, b) => {
      const aIsCategory = isCategorySlot(recipe.materials[a]) ? 1 : 0;
      const bIsCategory = isCategorySlot(recipe.materials[b]) ? 1 : 0;
      return aIsCategory - bIsCategory;
    });

    for (const i of indices) {
      const slot = recipe.materials[i];
      const candidates = this._getCandidatesForSlot(slot, usedUids);
      if (candidates.length === 0) return null;

      candidates.sort((a, b) => b.quality - a.quality);
      const pick = candidates[0];
      selected[i] = pick;
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
      return slot.slice(1).replace('_type', '系');
    }
    const bp = ItemBlueprints[slot];
    return bp ? bp.name : slot;
  }

  /** セーブ用データ */
  toSaveData() {
    return {
      enabled: this.enabled,
      mode: this.mode,
      recipeId: this.recipeId,
    };
  }

  /** ロード */
  loadSaveData(data) {
    if (!data) return;
    this.enabled = data.enabled || false;
    this.mode = data.mode || 'single';
    this.recipeId = data.recipeId || null;
  }
}
