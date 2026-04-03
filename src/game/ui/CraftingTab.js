/**
 * CraftingTab — 調合タブ（カードベース素材選択UI）
 * 素材スロットにカードを表示し、クリックで候補一覧から選択
 */
import { ItemBlueprints, Recipes, TraitDefs } from '../data/items.js';
import { craftItem } from '../ItemSystem.js';
import { eventBus } from '../core/EventBus.js';
import { GameConfig } from '../data/config.js';
import { getQualityTier, getTypeInfo, createItemCardHTML } from './UIHelpers.js';
import { CraftingPuzzle } from './CraftingPuzzle.js';

function traitColorClass(traitName) {
  const def = TraitDefs[traitName];
  return def ? `trait-${def.color}` : '';
}

export class CraftingTab {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.elRecipeList = document.getElementById('recipe-list');
    this.elDetails = document.getElementById('crafting-details');
    this.selectedRecipeId = null;
    this.selectedMaterials = {}; // { slotKey: uid }
    this.expandedSlot = null;    // 現在開いている候補一覧のslotKey
  }

  render() {
    this._renderRecipeList();
    this._renderDetails();
  }

  // =============================================
  //  レシピ一覧
  // =============================================

  _renderRecipeList() {
    const unlockedRecipes = Object.entries(Recipes).filter(([, r]) => r.unlocked);

    this.elRecipeList.innerHTML = unlockedRecipes.map(([key, r]) => {
      const isSelected = this.selectedRecipeId === key;
      const bp = ItemBlueprints[r.targetId];
      return `<button class="btn ${isSelected ? 'primary' : ''}" data-recipe-id="${key}">${bp.name}</button>`;
    }).join('');

    this.elRecipeList.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectedRecipeId = e.currentTarget.getAttribute('data-recipe-id');
        this.selectedMaterials = {};
        this.expandedSlot = null;
        this.render();
      });
    });
  }

  // =============================================
  //  調合詳細（素材スロット + プレビュー）
  // =============================================

  _renderDetails() {
    if (!this.selectedRecipeId) {
      this.elDetails.innerHTML = `
        <div class="crafting-empty-state">
          <div class="crafting-empty-icon">⚗️</div>
          <p>左のレシピ一覧から<br>作りたいアイテムを選択してください</p>
        </div>`;
      return;
    }

    const recipe = Recipes[this.selectedRecipeId];
    if (!recipe || !recipe.unlocked) {
      this.elDetails.innerHTML = '<p>レシピを選択してください</p>';
      this.selectedRecipeId = null;
      return;
    }

    const targetBp = ItemBlueprints[recipe.targetId];

    // 素材スロット構築
    const requiredSlots = [];
    recipe.materials.forEach((m, idx) => {
      requiredSlots.push({ matId: m, slotKey: `${m}_${idx}` });
    });

    let html = `
      <div class="crafting-header">
        <h4>⚒️ ${targetBp.name}</h4>
        <span class="crafting-header-type">${getTypeInfo(targetBp.type).icon} ${getTypeInfo(targetBp.type).label}</span>
      </div>
      <div class="crafting-section-label">素材を選択</div>
      <div class="crafting-slots">
    `;

    const materialInstances = [];
    const usedUids = new Set();
    let allSlotsFilled = true;

    for (const slot of requiredSlots) {
      const allOwned = this.inventory.getItemsByBlueprint(slot.matId)
        .sort((a, b) => b.quality - a.quality);
      const available = allOwned.filter(i => !usedUids.has(i.uid) || this.selectedMaterials[slot.slotKey] === i.uid);
      const matName = ItemBlueprints[slot.matId].name;
      const hasAny = available.length > 0;

      // デフォルト選択（最高品質）
      let selectedUid = this.selectedMaterials[slot.slotKey];
      const selectedItem = available.find(i => i.uid === selectedUid);
      if (!selectedItem && hasAny) {
        // 自動選択しない — ユーザーに選ばせる
        // ただし1つしかない場合は自動選択
        if (available.length === 1) {
          selectedUid = available[0].uid;
          this.selectedMaterials[slot.slotKey] = selectedUid;
        } else {
          selectedUid = null;
        }
      }

      if (selectedUid) {
        usedUids.add(selectedUid);
        const chosen = available.find(i => i.uid === selectedUid);
        if (chosen) materialInstances.push(chosen);
      }

      const isExpanded = this.expandedSlot === slot.slotKey;
      const isFilled = !!selectedUid && !!available.find(i => i.uid === selectedUid);
      if (!isFilled) allSlotsFilled = false;

      if (!hasAny) {
        // 素材不足
        html += `
          <div class="craft-slot craft-slot-empty">
            <div class="craft-slot-label">${matName}</div>
            <div class="craft-slot-placeholder craft-slot-missing">
              <span class="craft-slot-missing-icon">✖</span>
              <span>素材不足</span>
            </div>
          </div>
        `;
        allSlotsFilled = false;
        continue;
      }

      if (isFilled) {
        const chosen = available.find(i => i.uid === selectedUid);
        const tier = getQualityTier(chosen.quality);
        const typeInfo = getTypeInfo(chosen.type);
        const traitsHtml = chosen.traits
          .map(t => `<span class="trait-badge ${traitColorClass(t)}">${t}</span>`)
          .join('');

        html += `
          <div class="craft-slot craft-slot-filled ${tier.css}" data-slot="${slot.slotKey}">
            <div class="craft-slot-label">${matName} <span class="craft-slot-change">変更 ▾</span></div>
            <div class="craft-slot-card">
              <div class="craft-slot-card-icon">${typeInfo.emoji}</div>
              <div class="craft-slot-card-info">
                <div class="craft-slot-card-name">${chosen.name}</div>
                <div class="craft-slot-card-quality">${tier.icon} Q: ${chosen.quality} <span class="craft-slot-tier">${tier.name}</span></div>
                <div class="craft-slot-card-traits">${traitsHtml || '<span class="text-dim">特性なし</span>'}</div>
              </div>
            </div>
          </div>
        `;
      } else {
        // 未選択 — プレースホルダーカード
        html += `
          <div class="craft-slot craft-slot-unfilled" data-slot="${slot.slotKey}">
            <div class="craft-slot-label">${matName}</div>
            <div class="craft-slot-placeholder">
              <span class="craft-slot-placeholder-icon">＋</span>
              <span>クリックで素材を選択 (${available.length}個)</span>
            </div>
          </div>
        `;
      }

      // 候補一覧（展開時）
      if (isExpanded) {
        html += `<div class="craft-slot-candidates">`;
        for (const item of available) {
          const tier = getQualityTier(item.quality);
          const typeInfo = getTypeInfo(item.type);
          const isChosen = item.uid === selectedUid;
          const traitsHtml = item.traits
            .map(t => `<span class="trait-badge ${traitColorClass(t)}">${t}</span>`)
            .join('');

          html += `
            <div class="craft-candidate-card ${tier.css} ${isChosen ? 'craft-candidate-selected' : ''}" data-slot="${slot.slotKey}" data-uid="${item.uid}">
              <div class="craft-candidate-icon">${typeInfo.emoji}</div>
              <div class="craft-candidate-body">
                <div class="craft-candidate-header">
                  <span class="craft-candidate-name">${item.name}</span>
                  <span class="craft-candidate-quality">${tier.icon} Q: ${item.quality}</span>
                </div>
                <div class="item-quality-bar"><div class="item-quality-fill" style="width:${item.quality}%"></div></div>
                <div class="craft-candidate-traits">${traitsHtml || '<span class="text-dim">特性なし</span>'}</div>
              </div>
              ${isChosen ? '<div class="craft-candidate-check">✓</div>' : ''}
            </div>
          `;
        }
        html += `</div>`;
      }
    }

    html += `</div>`; // .crafting-slots end

    // 完成予測プレビュー
    if (allSlotsFilled && materialInstances.length === requiredSlots.length) {
      const avgQ = Math.floor(materialInstances.reduce((s, i) => s + i.quality, 0) / materialInstances.length);
      const allTraitsSet = new Set();
      materialInstances.forEach(i => i.traits.forEach(t => allTraitsSet.add(t)));
      const previewTraits = Array.from(allTraitsSet).slice(0, GameConfig.maxTraitSlots);
      const estimatedValue = Math.floor(targetBp.baseValue * (1 + avgQ / 100));
      const previewTier = getQualityTier(avgQ);
      const previewType = getTypeInfo(targetBp.type);

      html += `
        <div class="crafting-preview">
          <div class="crafting-section-label">完成予測</div>
          <div class="crafting-preview-card ${previewTier.css}">
            <div class="craft-preview-icon">${previewType.emoji}</div>
            <div class="craft-preview-info">
              <div class="craft-preview-name">${targetBp.name}</div>
              <div class="craft-preview-quality">${previewTier.icon} Q ≈ ${avgQ} <span class="craft-slot-tier">${previewTier.name}</span></div>
              <div class="item-quality-bar"><div class="item-quality-fill" style="width:${avgQ}%"></div></div>
              <div class="craft-preview-traits">
                ${previewTraits.map(t => {
                  const def = TraitDefs[t];
                  const colorCls = def ? `trait-${def.color}` : '';
                  return `<span class="trait-badge ${colorCls}">${t}</span>`;
                }).join('') || '<span class="text-dim">特性なし</span>'}
              </div>
              <div class="craft-preview-value">💰 推定売値: ${estimatedValue}G</div>
            </div>
          </div>
          <div class="crafting-buttons">
            <button id="btn-do-craft" class="btn crafting-execute-btn">⚒️ 通常調合</button>
            <button id="btn-puzzle-craft" class="btn primary crafting-execute-btn crafting-puzzle-btn">🧩 パズル調合<span class="puzzle-hint">ボーナスチャンス!</span></button>
          </div>
        </div>
      `;
    } else if (!allSlotsFilled && requiredSlots.length > 0) {
      const filledCount = materialInstances.length;
      html += `
        <div class="crafting-progress-hint">
          <span>素材: ${filledCount} / ${requiredSlots.length} 選択済み</span>
        </div>
      `;
    }

    this.elDetails.innerHTML = html;
    this._bindDetailsEvents(materialInstances, targetBp);
  }

  // =============================================
  //  イベントバインド
  // =============================================

  _bindDetailsEvents(materialInstances, targetBp) {
    // スロットクリック → 候補一覧展開/折り畳み
    this.elDetails.querySelectorAll('.craft-slot-filled, .craft-slot-unfilled').forEach(slot => {
      slot.addEventListener('click', () => {
        const slotKey = slot.dataset.slot;
        this.expandedSlot = this.expandedSlot === slotKey ? null : slotKey;
        this._renderDetails();
      });
    });

    // 候補カードクリック → 素材選択
    this.elDetails.querySelectorAll('.craft-candidate-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const slotKey = card.dataset.slot;
        const uid = card.dataset.uid;
        this.selectedMaterials[slotKey] = uid;
        this.expandedSlot = null; // 選択後に閉じる
        this._renderDetails();
      });
    });

    // 調合ボタン
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

  // =============================================
  //  調合実行
  // =============================================

  async _executeCrafting(recipeId, materials, qualityBonus = 0) {
    const allTraitsSet = new Set();
    materials.forEach(i => i.traits.forEach(t => allTraitsSet.add(t)));
    const selectedTraits = Array.from(allTraitsSet).slice(0, GameConfig.maxTraitSlots);

    // ローディング演出
    this.elDetails.innerHTML = `
      <div class="crafting-loading">
        <div class="crafting-loading-icon">⚗️</div>
        <div class="crafting-loading-text">調合中...</div>
        <div class="crafting-loading-dots"><span></span><span></span><span></span></div>
      </div>
    `;
    await new Promise(r => setTimeout(r, 600));

    try {
      const newItem = craftItem(recipeId, materials, selectedTraits, qualityBonus);
      materials.forEach(m => this.inventory.removeItem(m.uid));
      this.inventory.addItem(newItem);

      eventBus.emit('inventory:changed');
      eventBus.emit('item:crafted', { item: newItem });

      // 選択状態リセット
      this.selectedMaterials = {};
      this.expandedSlot = null;
      this.render();

      // クラフト成功エフェクト
      const flash = document.createElement('div');
      flash.className = 'craft-flash';
      document.body.appendChild(flash);
      requestAnimationFrame(() => flash.classList.add('fade-out'));
      setTimeout(() => flash.remove(), 550);

      // 完成品リザルトモーダル
      this._showCraftResult(newItem);

    } catch (e) {
      console.error('[CraftingTab]', e);
    }
  }

  /** 完成品リザルトモーダル */
  _showCraftResult(item) {
    const tier = getQualityTier(item.quality);
    const typeInfo = getTypeInfo(item.type);
    const bp = ItemBlueprints[item.blueprintId];
    const value = item.value || Math.floor(bp.baseValue * (1 + item.quality / 100));

    const overlay = document.createElement('div');
    overlay.className = 'craft-result-overlay';
    overlay.innerHTML = `
      <div class="craft-result-modal">
        <div class="craft-result-sparkle">✨</div>
        <h3 class="craft-result-title">調合成功！</h3>
        <div class="craft-result-card">
          ${createItemCardHTML(item)}
        </div>
        <div class="craft-result-stats">
          <span class="craft-result-quality ${tier.css}">品質: ${tier.icon} ${item.quality}</span>
          <span class="craft-result-value">💰 ${value.toLocaleString('ja-JP')}G</span>
        </div>
        <button class="btn primary craft-result-close">OK</button>
      </div>
    `;
    document.body.appendChild(overlay);

    const close = () => {
      overlay.classList.add('craft-result-fade-out');
      setTimeout(() => overlay.remove(), 300);
    };
    overlay.querySelector('.craft-result-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
  }

  async _executePuzzleCrafting(recipeId, materials, recipeName) {
    eventBus.emit('game:pause');

    const puzzle = new CraftingPuzzle();
    const result = await puzzle.start(recipeName);

    eventBus.emit('game:resume');

    this._executeCrafting(recipeId, materials, result.bonus);
  }
}
