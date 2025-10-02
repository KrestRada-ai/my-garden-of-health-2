import React from 'react';
import { Modal } from '../ui/Modal';
import type { ActivityLogEntry } from '../../types';
import { ActivityType } from '../../types';
import { YogaIcon, DumbbellIcon, WalkIcon, RunIcon, CyclingIcon, SwimmingIcon, MeditationIcon, DanceIcon } from '../icons';

interface LogModalProps {
  log: ActivityLogEntry[];
  onClose: () => void;
}

const activityDisplay = {
  [ActivityType.Yoga]: { label: 'Йога/Разминка', icon: YogaIcon, color: 'text-sky-500' },
  [ActivityType.Dumbbells]: { label: 'Гантели', icon: DumbbellIcon, color: 'text-red-500' },
  [ActivityType.Walking]: { label: 'Ходьба', icon: WalkIcon, color: 'text-yellow-600' },
  [ActivityType.Running]: { label: 'Бег', icon: RunIcon, color: 'text-orange-500' },
  [ActivityType.Cycling]: { label: 'Велосипед', icon: CyclingIcon, color: 'text-teal-500' },
  [ActivityType.Swimming]: { label: 'Плавание', icon: SwimmingIcon, color: 'text-indigo-500' },
  [ActivityType.Meditation]: { label: 'Медитация', icon: MeditationIcon, color: 'text-purple-500' },
  [ActivityType.Dancing]: { label: 'Танцы', icon: DanceIcon, color: 'text-pink-500' },
};

export const LogModal: React.FC<LogModalProps> = ({ log, onClose }) => {
  return (
    <Modal title="Журнал Активности" onClose={onClose}>
      <div className="max-h-96 overflow-y-auto pr-2">
        {log.length === 0 ? (
          <p className="text-center text-gray-500">Ваш журнал пока пуст. Начните тренировку!</p>
        ) : (
          <ul className="space-y-3">
            {log.map(entry => {
              const display = activityDisplay[entry.type];
              const Icon = display.icon;
              return (
                <li key={entry.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-8 h-8 ${display.color}`} />
                    <div>
                      <p className="font-bold text-emerald-800">{display.label}</p>
                      <p className="text-sm text-gray-500">{new Date(entry.date).toLocaleString('ru-RU')}</p>
                    </div>
                  </div>
                  {entry.type === 'walking' && entry.value && (
                    <p className="font-semibold text-yellow-700">{entry.value.toLocaleString('ru-RU')} шагов</p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Modal>
  );
};