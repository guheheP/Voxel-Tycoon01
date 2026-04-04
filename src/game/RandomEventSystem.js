/**
 * RandomEventSystem — ランダムイベントの発生・適用・UI通知
 */
import { EventDefs } from './data/events.js';
import { createItemInstance } from './ItemSystem.js';
import { AreaDefs } from './data/areas.js';
import { eventBus } from './core/EventBus.js';

export class RandomEventSystem {
  constructor(inventorySystem) {
    this.inventory = inventorySystem;
    this.activeEffects = [];  // { effect, multiplier, remainingDays }

    this._newDayUnsub = eventBus.on('day:newDay', () => this._onNewDay());
  }

  getActiveEffects() {
    return this.activeEffects;
  }

  hasEffect(effectName) {
    return this.activeEffects.some(e => e.effect === effectName);
  }

  getEffectMultiplier(effectName) {
    const eff = this.activeEffects.find(e => e.effect === effectName);
    return eff ? eff.multiplier : 1.0;
  }

  _onNewDay() {
    // 既存エフェクトの日数を減らす
    this.activeEffects = this.activeEffects.filter(e => {
      e.remainingDays--;
      return e.remainingDays > 0;
    });

    // 50%の確率でイベント発生
    if (Math.random() < 0.5) {
      this._triggerRandomEvent();
    }
  }

  _triggerRandomEvent() {
    const event = this._rollEvent();
    if (!event) return;

    eventBus.emit('event:triggered', {
      name: event.name,
      icon: event.icon,
      description: event.description,
    });

    switch (event.effect) {
      case 'bonus_material': {
        // ランダムな素材を2つ無料で獲得
        const unlockedAreas = Object.values(AreaDefs).filter(a => a.unlocked);
        const area = unlockedAreas[Math.floor(Math.random() * unlockedAreas.length)];
        if (area) {
          for (let i = 0; i < 2; i++) {
            const entry = area.dropTable[Math.floor(Math.random() * area.dropTable.length)];
            const item = createItemInstance(entry.blueprintId, 30 + Math.floor(Math.random() * 30), []);
            this.inventory.addItem(item);
          }
        }
        eventBus.emit('inventory:changed');
        break;
      }
      case 'free_material': {
        const materialIds = ['wood', 'stone', 'herb', 'slime_jelly'];
        const id = materialIds[Math.floor(Math.random() * materialIds.length)];
        const item = createItemInstance(id, 40 + Math.floor(Math.random() * 30), []);
        this.inventory.addItem(item);
        eventBus.emit('inventory:changed');
        break;
      }
      case 'pay_tax': {
        this.inventory.spendGold(event.taxAmount);
        break;
      }
      case 'explore_slow':
      case 'double_customers':
      case 'sell_bonus': {
        this.activeEffects.push({
          effect: event.effect,
          multiplier: event.multiplier || 1,
          remainingDays: event.duration,
          name: event.name,
          icon: event.icon,
        });
        break;
      }
    }
  }

  dispose() {
    this._newDayUnsub?.();
  }

  _rollEvent() {
    const totalWeight = EventDefs.reduce((sum, e) => sum + e.weight, 0);
    let roll = Math.random() * totalWeight;
    for (const evt of EventDefs) {
      roll -= evt.weight;
      if (roll <= 0) return evt;
    }
    return EventDefs[0];
  }
}
