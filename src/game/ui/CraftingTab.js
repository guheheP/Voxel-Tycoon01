/**
 * CraftingTab — 調合タブの描画・素材選択・クラフト実行を担当
 * 解放済みレシピのみ表示
 */
import { ItemBlueprints, Recipes, TraitDefs } from '../data/items.js';
import { craftItem } from '../ItemSystem.js';
import { eventBus } from '../core/EventBus.js';
import { GameConfig } from '../data/config.js';
import { getQualityTier, getTypeInfo } from './UIHelpers.js';
import { CraftingPuzzle } from './CraftingPuzzle.js';

export class CraftingTab {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.elRecipeList = document.getElementById('recipe-list');
    this.elDetails = document.getElementById('crafting-details');
    this.selectedRecipeId = null;
  }

  render() {
    this._renderRecipeList();
    this._renderDetails();
  }

  _renderRecipeList() {
    // 解放済みレシピのみ表示
    const unlockedRecipes = Object.entries(Recipes).filter(([, r]) => r.unlocked);

    this.elRecipeList.innerHTML = unlockedRecipes.map(([key, r]) => {
      const isSelected = this.selectedRecipeId === key;
      const bp = ItemBlueprints[r.targetId];
      return `<button class="btn ${isSelected ? 'primary' : ''}" data-recipe-id="${key}">${bp.name}</button>`;
    }).join('');

    this.elRecipeList.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectedRecipeId = e.currentTarget.getAttribute('data-recipe-id');
        this.render();
      });
    });
  }

  _renderDetails() {
    if (!this.selectedRecipeId) {
      this.elDetails.innerHTML = '<p>レシピを選択してください</p>';
      return;
    }

    const recipe = Recipes[this.selectedRecipeId];
    if (!recipe || !recipe.unlocked) {
      this.elDetails.innerHTML = '<p>レシピを選択してください</p>';
      this.selectedRecipeId = null;
      return;
    }

    const targetBp = ItemBlueprints[recipe.targetId];

    // 必要素材カウント
    const requiredCounts = {};
    recipe.materials.forEach(m => {
      requiredCounts[m] = (requiredCounts[m] || 0) + 1;
    });

    let html = `<h4>製作: ${targetBp.name}</h4><div class="crafting-details-body">`;
    let canCraft = true;
    const materialInstances = [];

    for (const [matId, count] of Object.entries(requiredCounts)) {
      const owned = this.inventory.getItemsByBlueprint(matId);
      const matName = ItemBlueprints[matId].name;
      const hasEnough = owned.length >= count;
      if (!hasEnough) canCraft = false;

      const selected = hasEnough ? owned.slice(0, count) : [];
      materialInstances.push(...selected);

      html += `
        <div class="crafting-material-slot">
          <div class="crafting-material-header">
            <span>${matName}</span>
            <span class="${hasEnough ? 'text-ok' : 'text-ng'}">${owned.length} / ${count} 所持</span>
          </div>
          ${selected.map(item =>
            `<div class="crafting-material-detail">- [Q:${item.quality}] ${item.traits.join(', ')}</div>`
          ).join('')}
        </div>
      `;
    }

    if (canCraft) {
      const avgQ = materialInstances.length
        ? Math.floor(materialInstances.reduce((s, i) => s + i.quality, 0) / materialInstances.length)
        : 0;

      const allTraitsSet = new Set();
      materialInstances.forEach(i => i.traits.forEach(t => allTraitsSet.add(t)));
      const previewTraits = Array.from(allTraitsSet).slice(0, GameConfig.maxTraitSlots);

      // 販売価格のプレビュー
      const estimatedValue = Math.floor(targetBp.baseValue * (avgQ / 50));

      const previewTier = getQualityTier(avgQ);
      const previewType = getTypeInfo(targetBp.type);

      html += `
        <div class="crafting-preview">
          <h5>完成予測</h5>
          <div class="item-card ${previewTier.css} ${previewType.css}">
            <div class="item-card-type-strip">
              <span class="item-type-icon">${previewType.icon}</span>
              <span class="item-type-label">${previewType.label}</span>
            </div>
            <div class="item-card-header">
              <span class="item-name">${targetBp.name}</span>
              <span class="item-quality">${previewTier.icon} Q ≈ ${avgQ}</span>
            </div>
            <div class="item-quality-bar">
              <div class="item-quality-fill" style="width:${avgQ}%"></div>
            </div>
            <div class="item-traits">
              ${previewTraits.map(t => {
                const def = TraitDefs[t];
                const colorCls = def ? `trait-${def.color}` : '';
                return `<span class="trait-badge ${colorCls}">${t}</span>`;
              }).join('')}
            </div>
            <div class="crafting-value-preview">💰 推定売値: ${estimatedValue}G</div>
          </div>
          <div class="crafting-buttons">
            <button id="btn-do-craft" class="btn crafting-execute-btn">⚒️ 通常調合</button>
            <button id="btn-puzzle-craft" class="btn primary crafting-execute-btn crafting-puzzle-btn">🧩 パズル調合<span class="puzzle-hint">ボーナスチャンス!</span></button>
          </div>
        </div>
      `;
    } else {
      html += `<div class="text-ng crafting-insufficient">素材が足りません</div>`;
    }

    html += `</div>`;
    this.elDetails.innerHTML = html;

    const btnDoCraft = document.getElementById('btn-do-craft');
    if (btnDoCraft) {
      btnDoCraft.addEventListener('click', () => {
        this._executeCrafting(this.selectedRecipeId, materialInstances);
      });
    }
    const btnPuzzle = document.getElementById('btn-puzzle-craft');
    if (btnPuzzle) {
      btnPuzzle.addEventListener('click', () => {
        this._executePuzzleCrafting(this.selectedRecipeId, materialInstances, targetBp.name);
      });
    }
  }

  _executeCrafting(recipeId, materials, qualityBonus = 0) {
    const allTraitsSet = new Set();
    materials.forEach(i => i.traits.forEach(t => allTraitsSet.add(t)));
    const selectedTraits = Array.from(allTraitsSet).slice(0, GameConfig.maxTraitSlots);

    try {
      const newItem = craftItem(recipeId, materials, selectedTraits, qualityBonus);
      materials.forEach(m => this.inventory.removeItem(m.uid));
      this.inventory.addItem(newItem);

      eventBus.emit('inventory:changed');
      eventBus.emit('item:crafted', { item: newItem });
      this.render();

      // クラフト成功エフェクト
      const flash = document.createElement('div');
      flash.className = 'craft-flash';
      document.body.appendChild(flash);
      requestAnimationFrame(() => flash.classList.add('fade-out'));
      setTimeout(() => flash.remove(), 550);

    } catch (e) {
      console.error('[CraftingTab]', e);
    }
  }

  async _executePuzzleCrafting(recipeId, materials, recipeName) {
    // DayCycleSystem を一時停止
    eventBus.emit('game:pause');

    const puzzle = new CraftingPuzzle();
    const result = await puzzle.start(recipeName);

    // ゲーム再開
    eventBus.emit('game:resume');

    // パズル結果のボーナスを適用
    this._executeCrafting(recipeId, materials, result.bonus);
  }
}
