
import React from 'react';
import { Modal } from '../ui/Modal';
import { ACHIEVEMENTS, REWARDS } from '../../rewards';
import type { RewardId } from '../../types';

interface RewardsModalProps {
  completedAchievements: string[];
  unlockedRewards: RewardId[];
  onClose: () => void;
}

export const RewardsModal: React.FC<RewardsModalProps> = ({ completedAchievements, unlockedRewards, onClose }) => {

  return (
    <Modal title="Награды и Достижения" onClose={onClose}>
      <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
        <div>
          <h3 className="text-xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-200 pb-2">Достижения</h3>
          <ul className="space-y-3">
            {ACHIEVEMENTS.map((ach) => {
              const isUnlocked = completedAchievements.includes(ach.id);
              return (
                <li
                  key={ach.id}
                  className={`p-3 rounded-lg flex items-center gap-4 transition-all ${
                    isUnlocked ? 'bg-green-100' : 'bg-gray-100 opacity-70'
                  }`}
                >
                  <div className="text-3xl">{isUnlocked ? '🏆' : '🔒'}</div>
                  <div>
                    <p className={`font-bold ${isUnlocked ? 'text-green-800' : 'text-gray-700'}`}>
                      {ach.title}
                    </p>
                    <p className={`text-sm ${isUnlocked ? 'text-green-600' : 'text-gray-500'}`}>
                      {ach.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">Открытые предметы</h3>
           {unlockedRewards.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {unlockedRewards.map(rewardId => {
                  const reward = REWARDS[rewardId];
                  if (!reward) return null;
                  return (
                      <div key={reward.id} className="bg-amber-50/50 p-3 rounded-lg text-center border border-amber-200 shadow-sm">
                          <div className="text-5xl mb-2">{reward.emoji}</div>
                          <p className="font-bold text-amber-900">{reward.name}</p>
                          <p className="text-xs text-amber-700">{reward.description}</p>
                      </div>
                  );
              })}
            </div>
            ) : (
                 <p className="text-center text-gray-500 mt-4">
                    Продолжайте тренироваться, чтобы открыть новые растения и украшения!
                </p>
            )}
        </div>
      </div>
    </Modal>
  );
};
