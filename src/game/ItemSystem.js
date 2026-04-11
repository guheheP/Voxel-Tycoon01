import { ItemBlueprints, Recipes, TraitDefs, TraitFusionTable, MaterialCategories } from './data/items.js';
import { GameConfig } from './data/config.js';
import { ShopSystem } from './ShopSystem.js';
import { eventBus } from './core/EventBus.js';

// Re-export for backward compatibility
export { ItemBlueprints, Recipes };

/** 現在の装備品質上限（アップグレード購入で Q100→Q999 に解放可能） */
export function getCurrentQualityCap() {
  const q = { effectType: 'quality_cap', result: 0 };
  eventBus.emit('upgrade:queryBonus', q);
  return 100 + (q.result || 0);
}

/**
 * エリアの「有効」品質上限を返す
 *   品質上限解放 (quality_cap > 0) 後は areaMaxQ を √(qualityCap/100) 倍に拡張。
 *   解放前は areaMaxQ をそのまま返す。
 *   cap=999 解放時の倍率は約 3.16x となり、エリア順序は保たれる。
 */
export function getEffectiveAreaMaxQuality(areaMaxQ, qualityCap = null) {
  const cap = qualityCap ?? getCurrentQualityCap();
  if (cap <= 100) return areaMaxQ;
  const mult = Math.sqrt(cap / 100);
  return Math.min(cap, Math.round(areaMaxQ * mult));
}

/** カテゴリスロットかどうか判定 */
export function isCategorySlot(slot) {
  return typeof slot === 'string' && slot.startsWith('@');
}

/** カテゴリIDを取得 ('@wood_type' → 'wood_type') */
export function getCategoryId(slot) {
  return slot.slice(1);
}

/** 素材がスロット要件を満たすか判定 */
export function materialMatchesSlot(blueprintId, slot) {
  if (isCategorySlot(slot)) {
    const catId = getCategoryId(slot);
    const bp = ItemBlueprints[blueprintId];
    return bp && bp.category === catId;
  }
  return blueprintId === slot;
}


/**
 * 個別のアイテムインスタンスを生成する
 */
export function createItemInstance(blueprintId, quality, traits = []) {
  const bp = ItemBlueprints[blueprintId];
  if (!bp) throw new Error(`Unknown blueprint: ${blueprintId}`);

  const instance = {
    uid: crypto.randomUUID(),
    blueprintId,
    name: bp.name,
    type: bp.type,
    quality: Math.floor(quality),
    traits: [...traits],
    value: 0,
  };
  instance.value = ShopSystem.calcValue(instance);
  return instance;
}

/**
 * クラフト（調合）ロジック — カテゴリスロット対応
 */
export function craftItem(recipeId, materialInstances, selectedTraits = [], qualityBonus = 0) {
  const recipe = Recipes[recipeId];
  if (!recipe) throw new Error(`Unknown recipe: ${recipeId}`);

  // 1. レシピ条件チェック（カテゴリ対応）
  if (recipe.materials.length !== materialInstances.length) {
    throw new Error('素材の数が合いません');
  }
  // スロットごとにマッチング検証
  const usedIndices = new Set();
  for (const slot of recipe.materials) {
    let matched = false;
    for (let i = 0; i < materialInstances.length; i++) {
      if (usedIndices.has(i)) continue;
      if (materialMatchesSlot(materialInstances[i].blueprintId, slot)) {
        usedIndices.add(i);
        matched = true;
        break;
      }
    }
    if (!matched) {
      throw new Error(`素材が条件を満たしていません: ${slot}`);
    }
  }

  // 2. 品質計算 (すべての素材の平均)
  const totalQuality = materialInstances.reduce((sum, item) => sum + item.quality, 0);
  const avgQuality = materialInstances.length > 0 ? (totalQuality / materialInstances.length) : 50;

  // 3. 特性引き継ぎ + 融合
  // 3a. 素材間で重複するトレイトを検出し融合判定
  const traitCounts = {};  // トレイト名 → 持っている素材の数
  materialInstances.forEach(item => {
    const seen = new Set(); // 同一素材内の重複は1回とカウント
    item.traits.forEach(t => {
      if (!seen.has(t)) {
        traitCounts[t] = (traitCounts[t] || 0) + 1;
        seen.add(t);
      }
    });
  });

  // 3b. 融合マップを構築 (元トレイト → 昇格先トレイト)
  const fusionMap = {};  // 元のトレイト名 → 昇格後のトレイト名
  for (const [trait, count] of Object.entries(traitCounts)) {
    if (count >= 2 && TraitFusionTable[trait] && TraitDefs[TraitFusionTable[trait]]) {
      fusionMap[trait] = TraitFusionTable[trait];
    }
  }

  // 3c. 選択されたトレイトを処理（融合適用 → 最終リストに追加）
  const allAvailableTraits = new Set();
  materialInstances.forEach(item => {
    item.traits.forEach(t => allAvailableTraits.add(t));
  });
  // 融合後のトレイトも選択可能にする
  for (const upgraded of Object.values(fusionMap)) {
    allAvailableTraits.add(upgraded);
  }

  const finalTraits = [];
  const usedFusions = new Set();
  for (const t of selectedTraits) {
    // 融合が適用できる場合は昇格版を使用
    if (fusionMap[t] && !usedFusions.has(t)) {
      finalTraits.push(fusionMap[t]);
      usedFusions.add(t);
    } else if (allAvailableTraits.has(t)) {
      // 融合済みの元トレイトは重複追加しない
      if (!usedFusions.has(t)) {
        finalTraits.push(t);
      }
    }
  }

  // レア度が高いものを優先して maxTraitSlots 個に絞る
  const rarityOrder = { legendary: 0, epic: 1, rare: 2, uncommon: 3, common: 4 };
  finalTraits.sort((a, b) => {
    const ra = rarityOrder[TraitDefs[a]?.rarity] ?? 5;
    const rb = rarityOrder[TraitDefs[b]?.rarity] ?? 5;
    return ra - rb;
  });
  finalTraits.length = Math.min(finalTraits.length, GameConfig.maxTraitSlots);

  // パズルボーナス + 素材特性の調合品質ボーナスを適用
  let craftTraitBonus = 0;
  for (const mat of materialInstances) {
    for (const t of (mat.traits || [])) {
      const def = TraitDefs[t];
      if (def && def.effects && def.effects.craftQualityBonus) {
        craftTraitBonus += def.effects.craftQualityBonus;
      }
    }
  }
  const qualityCap = getCurrentQualityCap();
  const finalQuality = Math.min(qualityCap, Math.max(0, avgQuality + qualityBonus + craftTraitBonus));

  // 4. アイテムインスタンスの作成と返却
  return createItemInstance(recipe.targetId, finalQuality, finalTraits);
}
