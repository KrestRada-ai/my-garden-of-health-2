
import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { REWARDS } from '../../rewards';
import { DECORATION_SLOTS } from '../../constants';
import { CoinIcon } from '../icons';
import type { DecorationType, PlacedDecoration } from '../../types';

interface DecorationsModalProps {
  coins: number;
  inventory: Partial<Record<DecorationType, number>>;
  placedDecorations: PlacedDecoration[];
  onClose: () => void;
  onPurchase: (decorationId: DecorationType) => void;
  onPlace: (decorationType: DecorationType, slotId: number) => void;
  onRemove: (placedDecorationId: string) => void;
}

type Tab = 'manage' | 'shop';

export const DecorationsModal: React.FC<DecorationsModalProps> = ({
  coins,
  inventory,
  placedDecorations,
  onClose,
  onPurchase,
  onPlace,
  onRemove
}) => {
  const [activeTab, setActiveTab] = useState<Tab>('manage');
  const [placingSlot, setPlacingSlot] = useState<number | null>(null);

  const decorationItems = Object.values(REWARDS).filter(r => r.type === 'decoration');
  // FIX: Use a type guard to ensure `count` is a number before comparison. This resolves an error where `count` could be inferred as `unknown`.
  const inventoryItems = Object.entries(inventory).filter(([, count]) => typeof count === 'number' && count > 0);

  const handlePlace = (decorationType: DecorationType) => {
    if (placingSlot !== null) {
      onPlace(decorationType, placingSlot);
      setPlacingSlot(null);
    }
  };

  const renderManagementTab = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-emerald-800">Слоты для украшений</h3>
      <div className="space-y-3">
        {DECORATION_SLOTS.map(slot => {
          const placedItem = placedDecorations.find(d => d.slotId === slot.id);
          return (
            <div key={slot.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
              <div className="font-semibold text-gray-600">Слот {slot.id}</div>
              {placedItem ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{REWARDS[placedItem.type].emoji}</span>
                  <span className="font-bold text-emerald-900">{REWARDS[placedItem.type].name}</span>
                  <Button onClick={() => onRemove(placedItem.id)} className="bg-red-500 hover:bg-red-600 text-xs px-2 py-1">
                    Убрать
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setPlacingSlot(slot.id)} className="bg-green-500 hover:bg-green-600 text-xs px-2 py-1">
                  Поставить
                </Button>
              )}
            </div>
          );
        })}
      </div>
      {inventoryItems.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-emerald-800 mt-6">Ваш инвентарь</h3>
           <div className="flex flex-wrap gap-2 mt-2">
            {inventoryItems.map(([type, count]) => {
                const item = REWARDS[type as DecorationType];
                return (
                    <div key={type} className="bg-lime-100 p-2 rounded-md text-sm text-center">
                        <span className="text-3xl">{item.emoji}</span>
                        <p className="font-semibold text-lime-800">{item.name} (x{count})</p>
                    </div>
                )
            })}
           </div>
        </div>
      )}
    </div>
  );
  
  const renderShopTab = () => (
    <div className="space-y-3">
       {decorationItems.map(item => {
        const cost = item.cost || 0;
        const canAfford = coins >= cost;
        return (
            <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="text-4xl">{item.emoji}</span>
                    <div>
                        <p className="font-bold text-emerald-800">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                </div>
                <Button 
                    onClick={() => onPurchase(item.id as DecorationType)} 
                    disabled={!canAfford}
                    className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    <CoinIcon className="w-5 h-5" />
                    {cost}
                </Button>
            </div>
        );
       })}
    </div>
  );

  return (
    <>
    <Modal title="Украшение Сада" onClose={onClose}>
      <div className="mb-4 flex border-b border-lime-200">
        <button onClick={() => setActiveTab('manage')} className={`px-4 py-2 text-lg font-semibold ${activeTab === 'manage' ? 'border-b-4 border-emerald-500 text-emerald-700' : 'text-gray-500'}`}>
          Управление
        </button>
        <button onClick={() => setActiveTab('shop')} className={`px-4 py-2 text-lg font-semibold ${activeTab === 'shop' ? 'border-b-4 border-emerald-500 text-emerald-700' : 'text-gray-500'}`}>
          Магазин
        </button>
      </div>
      <div className="max-h-[60vh] overflow-y-auto pr-2">
        {activeTab === 'manage' ? renderManagementTab() : renderShopTab()}
      </div>
    </Modal>
    {placingSlot !== null && (
        <Modal title="Выберите предмет" onClose={() => setPlacingSlot(null)}>
            {inventoryItems.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {inventoryItems.map(([type, count]) => {
                         const item = REWARDS[type as DecorationType];
                         return(
                            <button key={type} onClick={() => handlePlace(type as DecorationType)} className="flex flex-col items-center p-3 bg-lime-100 hover:bg-lime-200 rounded-lg transition-colors">
                                <span className="text-5xl">{item.emoji}</span>
                                <span className="mt-2 font-semibold text-emerald-800">{item.name}</span>
                                <span className="text-sm text-gray-500">В наличии: {count}</span>
                            </button>
                         )
                    })}
                </div>
            ) : (
                <p className="text-center text-gray-500">У вас нет предметов в инвентаре. Посетите магазин!</p>
            )}
        </Modal>
    )}
    </>
  );
};
