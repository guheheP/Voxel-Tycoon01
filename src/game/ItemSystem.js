/**
 * ItemSystem — アイテム生成とクラフト（調合）ロジック
 * データ定義は data/items.js に分離済み。
 */
import { ItemBlueprints, Recipes } from './data/items.js';
import { GameConfig } from './data/config.js';

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

  return {
    uid: crypto.randomUUID(),
    blueprintId,
    name: bp.name,
    type: bp.type,
    quality: Math.floor(quality),
    traits: [...traits],
    value: Math.floor(bp.baseValue * (1 + quality / 100)),
  };
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

  // 3. 特性引き継ぎ制限のバリデーション
  const allAvailableTraits = new Set();
  materialInstances.forEach(item => {
    item.traits.forEach(t => allAvailableTraits.add(t));
  });

  const finalTraits = [];
  for (const t of selectedTraits) {
    if (allAvailableTraits.has(t) && finalTraits.length < GameConfig.maxTraitSlots) {
      finalTraits.push(t);
    }
  }

  // パズルボーナス適用
  const finalQuality = Math.min(100, Math.max(0, avgQuality + qualityBonus));

  // 4. アイテムインスタンスの作成と返却
  return createItemInstance(recipe.targetId, finalQuality, finalTraits);
}
