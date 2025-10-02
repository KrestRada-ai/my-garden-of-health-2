
import React, { useState } from 'react';
import { useGardenState } from './hooks/useGardenState';
import type { ActivityType, ModalType } from './types';
import { Garden } from './components/Garden';
import { Hud } from './components/Hud';
import { ActivityModal } from './components/modals/ActivityModal';
import { LogModal } from './components/modals/LogModal';
import { RewardsModal } from './components/modals/RewardsModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { DecorationsModal } from './components/modals/DecorationsModal';

const App: React.FC = () => {
  const {
    state,
    addActivity,
    harvestPlant,
    updateStepGoal,
    resetProgress,
    purchaseDecoration,
    placeDecoration,
    removeDecoration,
  } = useGardenState();
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityType | null>(null);

  const openActivityModal = (activity: ActivityType) => {
    setSelectedActivity(activity);
    setActiveModal('activity');
  };
  
  const handleLogActivity = (value?: number) => {
    if (selectedActivity) {
      addActivity(selectedActivity, value);
    }
    setActiveModal(null);
    setSelectedActivity(null);
  };

  const currentPlant = state.plants[0];

  const renderModal = () => {
    switch (activeModal) {
      case 'activity':
        return selectedActivity ? (
          <ActivityModal
            activityType={selectedActivity}
            stepGoal={state.settings.stepGoal}
            onClose={() => setActiveModal(null)}
            onLog={handleLogActivity}
          />
        ) : null;
      case 'log':
        return <LogModal log={state.activityLog} onClose={() => setActiveModal(null)} />;
      case 'rewards':
        return (
          <RewardsModal
            completedAchievements={state.completedAchievements}
            unlockedRewards={state.unlockedRewards}
            onClose={() => setActiveModal(null)}
          />
        );
      case 'settings':
        return (
          <SettingsModal
            stepGoal={state.settings.stepGoal}
            onClose={() => setActiveModal(null)}
            onSave={updateStepGoal}
            onReset={resetProgress}
          />
        );
      case 'decorations':
        return (
            <DecorationsModal
                coins={state.coins}
                inventory={state.inventory}
                placedDecorations={state.placedDecorations}
                onClose={() => setActiveModal(null)}
                onPurchase={purchaseDecoration}
                onPlace={placeDecoration}
                onRemove={removeDecoration}
            />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-200 to-lime-200 font-sans text-emerald-800 p-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-50 filter blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-200 rounded-full opacity-50 filter blur-2xl"></div>
      
      <main className="w-full max-w-4xl mx-auto z-10">
        <h1 className="text-4xl font-bold text-center mb-2 text-emerald-900 shadow-text">
          Мой Зеленый Сад Здоровья
        </h1>
        <p className="text-center mb-6 text-emerald-700">Уровень Сада: {state.gardenLevel}</p>
        
        <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-white/30">
            <Garden
              plant={currentPlant}
              onHarvest={harvestPlant}
              placedDecorations={state.placedDecorations}
            />
            <Hud
              coins={state.coins}
              onActivityClick={openActivityModal}
              onModalClick={setActiveModal}
            />
        </div>
      </main>

      {renderModal()}

      <footer className="mt-8 text-center text-emerald-600/80 text-sm">
        <p>Выращивайте свой сад, заботясь о своем здоровье. Каждая тренировка - это шаг к цветению!</p>
      </footer>
    </div>
  );
};

export default App;