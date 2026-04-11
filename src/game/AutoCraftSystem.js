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
import { craftItem, materialMatchesSlot, isCategorySlot, getCategoryId } from './ItemSystem.js';
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

    // tick ローカルの素材候補インデックス（update() 開始時に構築、成功craft毎に再構築）
    // 各バケットは品質降順にソート済み。インデックスにはロック済み素材と
    // 非素材は含まれない。
    this._candByBlueprint = new Map();  // blueprintId → Item[]（品質降順）
    this._candByCategory  = new Map();  // categoryId  → Item[]（品質降順）
    this._candTotalCount  = 0;
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
    // 候補インデックス構築後に詳細チェック
    this._buildCandidateIndex();
    return this._findMaterials(recipe) !== null;
  }

  /** 現在のレシピに対する素材候補数を返す（UI用） */
  getMaterialStatus() {
    if (this.mode === 'all') return null; // allモードでは不要
    if (!this.recipeId) return null;
    const recipe = Recipes[this.recipeId];
    if (!recipe) return null;

    // インデックスを構築してから各スロットの候補数を取得
    this._buildCandidateIndex();
    const result = [];
    for (const slot of recipe.materials) {
      const candidates = this._getCandidatesForSlot(slot);
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

    // 候補インデックスを構築してから _findMaterials を呼ぶ
    this._buildCandidateIndex();
    const materials = this._findMaterials(recipe);
    if (!materials) return;

    this._executeCraft(recipeId, materials);
  }

  /** 全レシピモード — 作れるものを1つ調合 */
  _tryAutoCraftAll() {
    // 倉庫が容量の2倍を超えている場合は安全停止（メモリリーク防止）
    if (this.inventory.items.length >= this.inventory.maxCapacity * 2) return;
    // 空き0のときは素材2個以上が必要 (型別インデックスで O(1)相当)
    if (this.inventory.freeSlots <= 0) {
      const mats = this.inventory.getItemsByType('material');
      let unlocked = 0;
      for (const m of mats) { if (!m.locked) { unlocked++; if (unlocked >= 2) break; } }
      if (unlocked < 2) return;
    }

    // _findCraftableRecipe の中で _buildCandidateIndex を呼んでいる
    const recipeId = this._findCraftableRecipe();
    if (!recipeId) return;

    const recipe = Recipes[recipeId];
    const materials = this._findMaterials(recipe);
    if (!materials) return;

    this._executeCraft(recipeId, materials);
  }

  /** 解放済みレシピの中から調合可能なものを1つ返す（素材レシピ以外を優先） */
  _findCraftableRecipe() {
    // 候補インデックスを構築（tickローカル、品質降順、ロック済み/非素材は除外）
    this._buildCandidateIndex();
    if (this._candTotalCount < 2) return null; // 素材2個未満なら調合不可能

    const nonMatCandidates = [];
    const matCandidates = [];
    for (const [key, recipe] of Object.entries(Recipes)) {
      if (!recipe.unlocked) continue;
      // 詳細チェック（候補インデックスは構築済みなので直接参照するだけ）
      if (this._findMaterials(recipe)) {
        if (recipe.isMaterialRecipe) {
          matCandidates.push(key);
        } else {
          nonMatCandidates.push(key);
        }
      }
    }
    if (nonMatCandidates.length > 0) return nonMatCandidates[Math.floor(Math.random() * nonMatCandidates.length)];
    if (matCandidates.length > 0) return matCandidates[Math.floor(Math.random() * matCandidates.length)];
    return null;
  }

  /**
   * 未ロック素材の候補配列インデックスを構築する。
   * - blueprintId / categoryId 別にバケット化
   * - 各バケットは品質降順で 1 度だけソート
   * - 次回 _getCandidatesForSlot() からは filter/sort 無しで直接参照できる
   *
   * _findMaterials() は tick ローカル usedUids を用いて候補から未使用品を選ぶ。
   */
  _buildCandidateIndex() {
    const byBlueprint = this._candByBlueprint;
    const byCategory = this._candByCategory;
    byBlueprint.clear();
    byCategory.clear();
    let total = 0;

    // 型別インデックスで素材のみ走査 (O(material count))
    const materials = this.inventory.getItemsByType('material');
    for (const item of materials) {
      if (item.locked) continue;
      total++;
      let bList = byBlueprint.get(item.blueprintId);
      if (!bList) { bList = []; byBlueprint.set(item.blueprintId, bList); }
      bList.push(item);

      const bp = ItemBlueprints[item.blueprintId];
      if (bp?.category) {
        let cList = byCategory.get(bp.category);
        if (!cList) { cList = []; byCategory.set(bp.category, cList); }
        cList.push(item);
      }
    }

    // 品質降順ソートを 1 回だけ
    const descByQuality = (a, b) => b.quality - a.quality;
    for (const list of byBlueprint.values()) list.sort(descByQuality);
    for (const list of byCategory.values())  list.sort(descByQuality);

    this._candTotalCount = total;
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

      // バッチモード: 複数素材の除去 → 結果アイテム追加を 1 回の inventory:changed に集約
      this.inventory.beginBatch();
      for (const mat of materials) {
        this.inventory.removeItem(mat.uid);
      }
      // 容量チェック付きで追加（forceAddItemによる無制限増加を防止）
      if (!this.inventory.addItem(newItem)) {
        // 倉庫満杯でも素材は消費済み — 強制追加（素材N個→1個なので差し引きで減る）
        this.inventory.forceAddItem(newItem);
      }
      this.inventory.endBatch();

      this.craftCount++;

      eventBus.emit('item:crafted', { item: newItem, auto: true });
      eventBus.emit('autoCraft:crafted', { item: newItem, recipeId, count: this.craftCount });
    } catch (e) {
      // 素材不足など — 無視
    }
  }

  /** レシピに必要な素材をインベントリから自動選択（品質降順で最良をピック）
   *  指名スロット(例:'flower_petal')をカテゴリスロット(例:'@herb_type')より
   *  先に処理し、指名素材がカテゴリに奪われるのを防止
   *
   *  A2最適化: 候補インデックス (_buildCandidateIndex) から直接参照するため
   *  filter/sort がループ内に無く、O(R × S × k) (kはバケット内で未使用を見つけるまで) で済む */
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
      const pick = this._pickBestFromSlot(slot, usedUids);
      if (!pick) return null;
      selected[i] = pick;
      usedUids.add(pick.uid);
    }

    return selected;
  }

  /** 候補インデックスから指定スロットに合致する未使用の最良候補を返す。
   *  候補は品質降順でソート済みなので先頭から usedUids を避けて返すだけ。 */
  _pickBestFromSlot(slot, usedUids) {
    if (isCategorySlot(slot)) {
      const list = this._candByCategory.get(getCategoryId(slot));
      if (!list) return null;
      for (const item of list) {
        if (!usedUids.has(item.uid)) return item;
      }
      return null;
    }
    // 指名スロット: まず blueprint バケット、無ければ（通常無い）カテゴリフォールバック
    const list = this._candByBlueprint.get(slot);
    if (list) {
      for (const item of list) {
        if (!usedUids.has(item.uid)) return item;
      }
    }
    // フォールバック: スロットが blueprintId の場合、そのアイテムが属するカテゴリでも検索
    const bp = ItemBlueprints[slot];
    if (bp?.category) {
      const cList = this._candByCategory.get(bp.category);
      if (cList) {
        for (const item of cList) {
          if (item.blueprintId === slot && !usedUids.has(item.uid)) return item;
        }
      }
    }
    return null;
  }

  /** UI 用: 指定スロットに合致する未ロック素材の候補数を返す（getMaterialStatus から利用）。
   *  インデックスが未構築の場合は構築する。 */
  _getCandidatesForSlot(slot) {
    if (this._candTotalCount === 0) this._buildCandidateIndex();
    if (isCategorySlot(slot)) {
      return this._candByCategory.get(getCategoryId(slot)) || [];
    }
    return this._candByBlueprint.get(slot) || [];
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
