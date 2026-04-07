/**
 * CraftingTab — 調合タブ（2カラム分割レイアウト版）
 * 左: レシピカードグリッド / 右: 調合ワークスペース
 */
import { ItemBlueprints, Recipes, TraitDefs, TraitFusionTable, MaterialCategories } from '../data/items.js';
import { craftItem, isCategorySlot, getCategoryId, materialMatchesSlot } from '../ItemSystem.js';
import { eventBus } from '../core/EventBus.js';
import { GameConfig } from '../data/config.js';
import { ShopSystem } from '../ShopSystem.js';
import { getQualityTier, getTypeInfo, createItemCardHTML, createTraitBadgeHTML } from './UIHelpers.js';
import { CraftingPuzzle } from './CraftingPuzzle.js';
import { assetPath } from '../core/assetPath.js';

function traitColorClass(traitName) {
  const def = TraitDefs[traitName];
  return def ? `trait-${def.color}` : '';
}

const TypeIcons = { equipment: '⚔️', consumable: '🧪', accessory: '💎' };

export class CraftingTab {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.el = document.querySelector('#tab-crafting');
    this.selectedRecipeId = null;
    this.selectedMaterials = {};
    this.expandedSlot = null;
    this.recipeFilter = 'all';
    this.craftableOnly = false;
  }

  render() {
    const unlockedRecipes = Object.entries(Recipes).filter(([, r]) => r.unlocked);

    // ── 左パネル: レシピ一覧 ──
    // フィルターカウント
    const counts = { all: 0, equipment: 0, consumable: 0, accessory: 0, material: 0 };
    unlockedRecipes.forEach(([, r]) => {
      const bp = ItemBlueprints[r.targetId];
      if (bp) {
        counts.all++;
        if (r.isMaterialRecipe) {
          counts.material++;
        } else if (counts[bp.type] !== undefined) {
          counts[bp.type]++;
        }
      }
    });

    let filteredRecipes = unlockedRecipes;
    if (this.recipeFilter === 'material') {
      filteredRecipes = filteredRecipes.filter(([, r]) => r.isMaterialRecipe);
    } else if (this.recipeFilter !== 'all') {
      filteredRecipes = filteredRecipes.filter(([, r]) => {
        const bp = ItemBlueprints[r.targetId];
        return bp && bp.type === this.recipeFilter && !r.isMaterialRecipe;
      });
    }
    if (this.craftableOnly) {
      filteredRecipes = filteredRecipes.filter(([, r]) => this._canCraft(r));
    }

    const recipeCards = filteredRecipes.map(([key, r]) => {
      const bp = ItemBlueprints[r.targetId];
      if (!bp) return '';
      const isSelected = this.selectedRecipeId === key;
      const canCraft = this._canCraft(r);
      const typeInfo = getTypeInfo(bp.type);
      const imgUrl = bp.image ? assetPath(bp.image) : null;
      const imgHtml = imgUrl
        ? `<div class="craft-rcard-img"><img src="${imgUrl}" alt="${bp.name}" /></div>`
        : `<div class="craft-rcard-img craft-rcard-img-placeholder"><span>${typeInfo.emoji}</span></div>`;

      const needed = {};
      r.materials.forEach(m => { needed[m] = (needed[m] || 0) + 1; });
      const matBadges = Object.entries(needed).map(([matId, cnt]) => {
        let owned, name;
        if (isCategorySlot(matId)) {
          const catId = getCategoryId(matId);
          const cat = MaterialCategories[catId];
          owned = this.inventory.getItemsByCategory(catId).length;
          name = cat ? `${cat.icon} ${cat.name}` : matId;
        } else {
          owned = this.inventory.getItemsByBlueprint(matId).length;
          name = ItemBlueprints[matId]?.name ?? matId;
        }
        const ok = owned >= cnt;
        return `<span class="craft-mat-badge ${ok ? 'ok' : 'ng'}">${name} ${owned}/${cnt}</span>`;
      }).join('');

      return `
        <div class="craft-rcard ${isSelected ? 'craft-rcard-selected' : ''} ${!canCraft ? 'craft-rcard-disabled' : ''}" data-recipe-id="${key}">
          ${imgHtml}
          <div class="craft-rcard-body">
            <span class="craft-rcard-name">${bp.name}</span>
            <span class="craft-rcard-meta">${typeInfo.icon} ${bp.baseValue}G</span>
            <div class="craft-rcard-mats">${matBadges}</div>
          </div>
        </div>
      `;
    }).join('');

    const leftPanel = `
      <div class="craft-panel craft-panel-left">
        <div class="craft-panel-header">
          <h4>📖 レシピ一覧</h4>
          <span class="craft-recipe-count">${counts.all}種</span>
        </div>
        <div class="shop-inv-filters">
          <button class="shop-filter-btn ${this.recipeFilter === 'all' ? 'active' : ''}" data-craft-filter="all">すべて <span class="shop-filter-count">${counts.all}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter === 'equipment' ? 'active' : ''}" data-craft-filter="equipment">⚔️ 武具 <span class="shop-filter-count">${counts.equipment}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter === 'consumable' ? 'active' : ''}" data-craft-filter="consumable">🧪 消耗品 <span class="shop-filter-count">${counts.consumable}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter === 'accessory' ? 'active' : ''}" data-craft-filter="accessory">💎 アクセ <span class="shop-filter-count">${counts.accessory}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter === 'material' ? 'active' : ''}" data-craft-filter="material">🧱 素材 <span class="shop-filter-count">${counts.material}</span></button>
          <button class="shop-filter-btn craft-craftable-toggle ${this.craftableOnly ? 'active' : ''}" id="craft-toggle-craftable">✅ 作成可能のみ</button>
        </div>
        <div class="craft-recipe-grid">${recipeCards}</div>
      </div>
    `;

    // ── 右パネル: 調合ワークスペース ──
    const rightPanel = `
      <div class="craft-panel craft-panel-right">
        <div class="craft-panel-header">
          <h4>⚒️ 調合ワークスペース</h4>
        </div>
        <div class="craft-workspace" id="craft-workspace">${this._renderWorkspace()}</div>
      </div>
    `;

    // ── オート調合パネル ──
    const autoCraftPanel = this._renderAutoCraftPanel();

    this.el.innerHTML = `
      <div class="craft-layout">
        <div class="craft-columns">${leftPanel}${rightPanel}</div>
        ${autoCraftPanel}
      </div>
    `;

    this._bindEvents();
    this._bindAutoCraftEvents();
  }

  // =============================================
  //  素材チェック
  // =============================================

  _canCraft(recipe) {
    const needed = {};
    recipe.materials.forEach(m => { needed[m] = (needed[m] || 0) + 1; });
    for (const [matId, count] of Object.entries(needed)) {
      let owned;
      if (isCategorySlot(matId)) {
        owned = this.inventory.getItemsByCategory(getCategoryId(matId)).length;
      } else {
        owned = this.inventory.getItemsByBlueprint(matId).length;
      }
      if (owned < count) return false;
    }
    return true;
  }

  // =============================================
  //  右パネル: ワークスペース
  // =============================================

  _renderWorkspace() {
    if (!this.selectedRecipeId) {
      return `
        <div class="crafting-empty-state">
          <div class="crafting-empty-icon">⚗️</div>
          <p>左のレシピ一覧から<br>作りたいアイテムを選択してください</p>
        </div>`;
    }

    const recipe = Recipes[this.selectedRecipeId];
    if (!recipe || !recipe.unlocked) {
      this.selectedRecipeId = null;
      return '<p>レシピを選択してください</p>';
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
      let allOwned;
      let matName;
      if (isCategorySlot(slot.matId)) {
        const catId = getCategoryId(slot.matId);
        const cat = MaterialCategories[catId];
        allOwned = this.inventory.getItemsByCategory(catId)
          .sort((a, b) => b.quality - a.quality);
        matName = cat ? `${cat.icon} ${cat.name}` : slot.matId;
      } else {
        allOwned = this.inventory.getItemsByBlueprint(slot.matId)
          .sort((a, b) => b.quality - a.quality);
        matName = ItemBlueprints[slot.matId]?.name ?? slot.matId;
      }
      const available = allOwned.filter(i => !usedUids.has(i.uid) || this.selectedMaterials[slot.slotKey] === i.uid);
      const hasAny = available.length > 0;

      let selectedUid = this.selectedMaterials[slot.slotKey];
      const selectedItem = available.find(i => i.uid === selectedUid);
      if (!selectedItem && hasAny) {
        // 最高品質のアイテムを自動選択
        selectedUid = available[0].uid;
        this.selectedMaterials[slot.slotKey] = selectedUid;
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
          .map(t => createTraitBadgeHTML(t))
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
            .map(t => createTraitBadgeHTML(t))
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

      // 融合判定プレビュー
      const traitCounts = {};
      materialInstances.forEach(item => {
        const seen = new Set();
        item.traits.forEach(t => { if (!seen.has(t)) { traitCounts[t] = (traitCounts[t] || 0) + 1; seen.add(t); } });
      });
      const fusionPreviews = []; // { from, to }
      const fusedSet = new Set();
      for (const [trait, count] of Object.entries(traitCounts)) {
        if (count >= 2 && TraitFusionTable[trait] && TraitDefs[TraitFusionTable[trait]]) {
          fusionPreviews.push({ from: trait, to: TraitFusionTable[trait] });
          fusedSet.add(trait);
        }
      }

      // プレビュー用トレイトリスト（融合適用後）
      const allTraitsSet = new Set();
      materialInstances.forEach(i => i.traits.forEach(t => allTraitsSet.add(t)));
      const previewTraits = [];
      const addedFusions = new Set();
      for (const t of allTraitsSet) {
        if (fusedSet.has(t) && !addedFusions.has(t)) {
          previewTraits.push(TraitFusionTable[t]);
          addedFusions.add(t);
        } else if (!fusedSet.has(t)) {
          previewTraits.push(t);
        }
      }
      // レア度が高いものを優先
      const rarityOrder = { legendary: 0, epic: 1, rare: 2, uncommon: 3, common: 4 };
      previewTraits.sort((a, b) => {
        const ra = rarityOrder[TraitDefs[a]?.rarity] ?? 5;
        const rb = rarityOrder[TraitDefs[b]?.rarity] ?? 5;
        return ra - rb;
      });
      const finalPreview = previewTraits.slice(0, GameConfig.maxTraitSlots);

      const estimatedValue = ShopSystem.calcValue({ blueprintId: this.selectedRecipeId ? Recipes[this.selectedRecipeId].targetId : '', quality: avgQ, traits: finalPreview });
      const previewTier = getQualityTier(avgQ);
      const previewType = getTypeInfo(targetBp.type);

      // 融合プレビューHTML
      const fusionHtml = fusionPreviews.length > 0
        ? `<div class="craft-fusion-preview">${fusionPreviews.map(f => {
            const fromDef = TraitDefs[f.from];
            const toDef = TraitDefs[f.to];
            return `<div class="craft-fusion-row">
              ${createTraitBadgeHTML(f.from)}
              <span class="craft-fusion-arrow">×2 → </span>
              ${createTraitBadgeHTML(f.to, 'trait-fused')}
            </div>`;
          }).join('')}</div>`
        : '';

      html += `
        <div class="crafting-preview">
          <div class="crafting-section-label">完成予測</div>
          ${fusionHtml}
          <div class="crafting-preview-card ${previewTier.css}">
            <div class="craft-preview-icon">${previewType.emoji}</div>
            <div class="craft-preview-info">
              <div class="craft-preview-name">${targetBp.name}</div>
              <div class="craft-preview-quality">${previewTier.icon} Q ≈ ${avgQ} <span class="craft-slot-tier">${previewTier.name}</span></div>
              <div class="item-quality-bar"><div class="item-quality-fill" style="width:${avgQ}%"></div></div>
              <div class="craft-preview-traits">
                ${finalPreview.map(t => {
                  const def = TraitDefs[t];
                  const colorCls = def ? `trait-${def.color}` : '';
                  const isFused = fusionPreviews.some(f => f.to === t);
                  return createTraitBadgeHTML(t, isFused ? 'trait-fused' : '');
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

    return html;
  }

  // =============================================
  //  イベントバインド
  // =============================================

  _bindEvents() {
    // レシピカード選択
    this.el.querySelectorAll('.craft-rcard').forEach(card => {
      card.addEventListener('click', () => {
        const recipeId = card.dataset.recipeId;
        if (this.selectedRecipeId === recipeId) return;
        this.selectedRecipeId = recipeId;
        this.selectedMaterials = {};
        this.expandedSlot = null;
        this.render();
      });
    });

    // フィルター
    this.el.querySelectorAll('[data-craft-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.recipeFilter = e.currentTarget.dataset.craftFilter;
        this.render();
      });
    });

    // 作成可能のみトグル
    const toggleBtn = document.getElementById('craft-toggle-craftable');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.craftableOnly = !this.craftableOnly;
        this.render();
      });
    }

    this._bindWorkspaceEvents();
  }

  _bindWorkspaceEvents() {
    const ws = document.getElementById('craft-workspace');
    if (!ws) return;

    const recipe = this.selectedRecipeId ? Recipes[this.selectedRecipeId] : null;
    if (!recipe) return;
    const targetBp = ItemBlueprints[recipe.targetId];

    // Collect material instances for craft execution
    const requiredSlots = recipe.materials.map((m, idx) => ({ matId: m, slotKey: `${m}_${idx}` }));
    const materialInstances = [];
    const usedUids = new Set();
    for (const slot of requiredSlots) {
      const uid = this.selectedMaterials[slot.slotKey];
      if (uid) {
        let candidates;
        if (isCategorySlot(slot.matId)) {
          candidates = this.inventory.getItemsByCategory(getCategoryId(slot.matId));
        } else {
          candidates = this.inventory.getItemsByBlueprint(slot.matId);
        }
        const item = candidates.find(i => i.uid === uid);
        if (item) {
          materialInstances.push(item);
          usedUids.add(uid);
        }
      }
    }

    // スロットクリック → 候補一覧展開/折り畳み
    ws.querySelectorAll('.craft-slot-filled, .craft-slot-unfilled').forEach(slot => {
      slot.addEventListener('click', () => {
        const slotKey = slot.dataset.slot;
        this.expandedSlot = this.expandedSlot === slotKey ? null : slotKey;
        ws.innerHTML = this._renderWorkspace();
        this._bindWorkspaceEvents();
      });
    });

    // 候補カードクリック → 素材選択
    ws.querySelectorAll('.craft-candidate-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const slotKey = card.dataset.slot;
        const uid = card.dataset.uid;
        this.selectedMaterials[slotKey] = uid;
        this.expandedSlot = null;
        ws.innerHTML = this._renderWorkspace();
        this._bindWorkspaceEvents();
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
    // 全素材のトレイトを収集（融合判定は craftItem 内で実行）
    const allTraitsSet = new Set();
    materials.forEach(i => i.traits.forEach(t => allTraitsSet.add(t)));
    const selectedTraits = Array.from(allTraitsSet);

    const ws = document.getElementById('craft-workspace');
    if (ws) {
      ws.innerHTML = `
        <div class="crafting-loading">
          <div class="crafting-loading-icon">⚗️</div>
          <div class="crafting-loading-text">調合中...</div>
          <div class="crafting-loading-dots"><span></span><span></span><span></span></div>
        </div>
      `;
    }
    await new Promise(r => setTimeout(r, 600));

    try {
      // アップグレードの品質ボーナスを加算
      const upgradeQ = { effectType: 'quality_bonus', result: 0 };
      eventBus.emit('upgrade:queryBonus', upgradeQ);
      const newItem = craftItem(recipeId, materials, selectedTraits, qualityBonus + upgradeQ.result);
      materials.forEach(m => this.inventory.removeItem(m.uid));

      // 融合が起きたかチェック（元のトレイトにない特性が結果に含まれている）
      for (const t of newItem.traits) {
        if (!allTraitsSet.has(t)) {
          eventBus.emit('toast', { message: `✨ 特性融合！ → ${t}`, type: 'success' });
          break;
        }
      }
      // 調合品は必ず獲得（素材を消費しているため）
      this.inventory.forceAddItem(newItem);

      eventBus.emit('inventory:changed');
      eventBus.emit('item:crafted', { item: newItem });

      this.selectedMaterials = {};
      this.expandedSlot = null;
      this.render();

      const flash = document.createElement('div');
      flash.className = 'craft-flash';
      document.body.appendChild(flash);
      requestAnimationFrame(() => flash.classList.add('fade-out'));
      setTimeout(() => flash.remove(), 550);

      this._showCraftResult(newItem, allTraitsSet);
    } catch (e) {
      console.error('[CraftingTab]', e);
    }
  }

  _showCraftResult(item, originalTraits) {
    const tier = getQualityTier(item.quality);
    const bp = ItemBlueprints[item.blueprintId];
    const value = item.value || ShopSystem.calcValue(item);

    // 融合で生まれたトレイトを検出
    const fusedTraits = new Set();
    if (originalTraits) {
      for (const t of item.traits) {
        if (!originalTraits.has(t)) fusedTraits.add(t);
      }
    }

    // 融合トレイトを強調表示するカスタムトレイトHTML
    const traitsHtml = item.traits.length > 0
      ? item.traits.map(t => {
          const def = TraitDefs[t];
          const colorCls = def ? `trait-${def.color}` : '';
          const isFused = fusedTraits.has(t);
          return createTraitBadgeHTML(t, isFused ? 'trait-fused' : '');
        }).join('')
      : '';
    const fusionNotice = fusedTraits.size > 0
      ? `<div class="craft-result-fusion">✨ 特性融合が発生！</div>`
      : '';

    const overlay = document.createElement('div');
    overlay.className = 'craft-result-overlay';
    overlay.innerHTML = `
      <div class="craft-result-modal">
        <div class="craft-result-sparkle">✨</div>
        <h3 class="craft-result-title">調合成功！</h3>
        ${fusionNotice}
        <div class="craft-result-card">
          ${createItemCardHTML(item)}
        </div>
        ${traitsHtml ? `<div class="craft-result-traits">${traitsHtml}</div>` : ''}
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

  // =============================================
  //  オート調合パネル
  // =============================================

  _renderAutoCraftPanel() {
    // AutoCraftSystemの状態をEventBus経由で取得
    const q = { enabled: false, recipeId: null, canCraft: false, materialStatus: null, craftCount: 0 };
    eventBus.emit('autoCraft:query', q);

    const unlockedRecipes = Object.entries(Recipes).filter(([, r]) => r.unlocked);

    // レシピ選択オプション
    const recipeOptions = unlockedRecipes.map(([key, r]) => {
      const bp = ItemBlueprints[r.targetId];
      if (!bp) return '';
      const sel = q.recipeId === key ? 'selected' : '';
      return `<option value="${key}" ${sel}>${bp.name}</option>`;
    }).join('');

    // 素材状態
    let matStatusHtml = '';
    if (q.materialStatus) {
      matStatusHtml = q.materialStatus.map(m => {
        const ok = m.available > 0;
        return `<span class="ac-mat-badge ${ok ? 'ac-mat-ok' : 'ac-mat-ng'}">${m.slotLabel}: ${m.available}個</span>`;
      }).join('');
    }

    const statusText = !q.recipeId
      ? '<span class="ac-status-idle">レシピ未選択</span>'
      : q.canCraft
        ? '<span class="ac-status-ready">調合可能</span>'
        : '<span class="ac-status-wait">素材不足 — 待機中</span>';

    return `
      <div class="autocraft-panel">
        <div class="autocraft-header">
          <label class="autocraft-toggle">
            <input type="checkbox" id="autocraft-enabled" ${q.enabled ? 'checked' : ''} />
            <span class="autocraft-toggle-label">🤖 オート調合</span>
          </label>
          <span class="autocraft-desc">素材があれば自動で調合（パズルなし・8秒間隔）</span>
        </div>
        <div class="autocraft-body ${q.enabled ? '' : 'autocraft-body-disabled'}">
          <div class="autocraft-row">
            <span class="autocraft-label">レシピ:</span>
            <select id="autocraft-recipe" class="autocraft-select">
              <option value="">-- 選択 --</option>
              ${recipeOptions}
            </select>
          </div>
          <div class="autocraft-row">
            <span class="autocraft-label">素材:</span>
            <div class="autocraft-mat-status">${matStatusHtml || '<span class="text-dim">—</span>'}</div>
          </div>
          <div class="autocraft-row">
            <span class="autocraft-label">状態:</span>
            ${statusText}
            ${q.craftCount > 0 ? `<span class="ac-count-badge">調合 ${q.craftCount}回</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  _bindAutoCraftEvents() {
    const toggle = this.el.querySelector('#autocraft-enabled');
    if (toggle) {
      toggle.addEventListener('change', () => {
        eventBus.emit('autoCraft:setEnabled', { enabled: toggle.checked });
        this.render();
      });
    }
    const select = this.el.querySelector('#autocraft-recipe');
    if (select) {
      select.addEventListener('change', () => {
        eventBus.emit('autoCraft:setRecipe', { recipeId: select.value || null });
        this.render();
      });
    }
  }
}
