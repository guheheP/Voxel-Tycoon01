/**
 * ItemSystem — アイテム生成とクラフト（調合）ロジック
 * データ定義は data/items.js に分離済み。
 */
import { ItemBlueprints, Recipes, TraitDefs, TraitFusionTable } from './data/items.js';
import { GameConfig } from './data/config.js';
import { ShopSystem } from './ShopSystem.js';

// Re-export for backward compatibility
export { ItemBlueprints, Recipes };



/**
 * 個別のアイテムインスタンスを生成する
 * @param {string} blueprintId
 * @param {number} quality
 * @param {string[]} traits
 * @returns {object} アイテムインスタンス
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
 * クラフト（調合）ロジック
 * @param {string} recipeId
 * @param {Array} materialInstances 使用する具体的なアイテムインスタンスの配列
 * @param {string[]} selectedTraits 引き継ぎたい特性の配列
 * @returns {object} 完成したアイテムインスタンス
 */
export function craftItem(recipeId, materialInstances, selectedTraits = [], qualityBonus = 0) {
  const recipe = Recipes[recipeId];
  if (!recipe) throw new Error(`Unknown recipe: ${recipeId}`);

  // 1. レシピ条件チェック
  const requiredBps = [...recipe.materials].sort();
  const providedBps = materialInstances.map(m => m.blueprintId).sort();

  if (requiredBps.length !== providedBps.length) {
    throw new Error('素材の数が合いません');
  }
  for (let i = 0; i < requiredBps.length; i++) {
    if (requiredBps[i] !== providedBps[i]) {
      throw new Error(`素材が異なります: expected ${requiredBps[i]}, got ${providedBps[i]}`);
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
    if (finalTraits.length >= GameConfig.maxTraitSlots) break;
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
  const finalQuality = Math.min(100, Math.max(0, avgQuality + qualityBonus + craftTraitBonus));

  // 4. アイテムインスタンスの作成と返却
  return createItemInstance(recipe.targetId, finalQuality, finalTraits);
}
