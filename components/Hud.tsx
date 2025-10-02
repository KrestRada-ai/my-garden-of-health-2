import React from 'react';
// FIX: Correctly import `ActivityType` enum as a value to use its members.
import { ActivityType, type ModalType } from '../types';
import { Button } from './ui/Button';
import { YogaIcon, DumbbellIcon, WalkIcon, RunIcon, CyclingIcon, SwimmingIcon, MeditationIcon, DanceIcon, RewardsIcon, LogIcon, SettingsIcon, CoinIcon, PaletteIcon } from './icons';

interface HudProps {
  coins: number;
  onActivityClick: (activity: ActivityType) => void;
  onModalClick: (modal: ModalType) => void;
}

const activityButtons = [
  { type: ActivityType.Yoga, label: 'Йога/Разминка', icon: YogaIcon, color: 'bg-sky-500 hover:bg-sky-600' },
  { type: ActivityType.Dumbbells, label: 'Гантели', icon: DumbbellIcon, color: 'bg-red-500 hover:bg-red-600' },
  { type: ActivityType.Walking, label: 'Ходьба', icon: WalkIcon, color: 'bg-yellow-500 hover:bg-yellow-600' },
  { type: ActivityType.Running, label: 'Бег', icon: RunIcon, color: 'bg-orange-500 hover:bg-orange-600' },
  { type: ActivityType.Cycling, label: 'Велосипед', icon: CyclingIcon, color: 'bg-teal-500 hover:bg-teal-600' },
  { type: ActivityType.Swimming, label: 'Плавание', icon: SwimmingIcon, color: 'bg-indigo-500 hover:bg-indigo-600' },
  { type: ActivityType.Meditation, label: 'Медитация', icon: MeditationIcon, color: 'bg-purple-500 hover:bg-purple-600' },
  { type: ActivityType.Dancing, label: 'Танцы', icon: DanceIcon, color: 'bg-pink-500 hover:bg-pink-600' },
];

const modalButtons = [
  { type: 'rewards', label: 'Награды', icon: RewardsIcon, color: 'bg-amber-500 hover:bg-amber-600' },
  { type: 'decorations', label: 'Украсить', icon: PaletteIcon, color: 'bg-lime-500 hover:bg-lime-600' },
  { type: 'log', label: 'Журнал', icon: LogIcon, color: 'bg-blue-500 hover:bg-blue-600' },
  { type: 'settings', label: 'Настройки', icon: SettingsIcon, color: 'bg-gray-500 hover:bg-gray-600' },
];

export const Hud: React.FC<HudProps> = ({ coins, onActivityClick, onModalClick }) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-4 bg-white/70 px-4 py-2 rounded-full shadow-md flex-wrap justify-center">
        {activityButtons.map(({ type, label, icon: Icon, color }) => (
          <Button key={type} onClick={() => onActivityClick(type)} className={`${color} flex items-center gap-2`} title={label}>
            <Icon className="w-6 h-6" />
            <span className="hidden sm:inline">{label}</span>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-yellow-300 text-yellow-800 font-bold px-4 py-2 rounded-full shadow-md">
          <CoinIcon className="w-6 h-6" />
          <span>{coins}</span>
        </div>
        <div className="flex items-center gap-2 bg-white/70 p-2 rounded-full shadow-md">
         {modalButtons.map(({ type, label, icon: Icon, color }) => (
            <Button
              key={type}
              onClick={() => onModalClick(type as ModalType)}
              className={`${color} rounded-full p-2`}
              title={label}
            >
              <Icon className="w-6 h-6" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};