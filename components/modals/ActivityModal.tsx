import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
// FIX: Import `ActivityType` enum as a value since it's used to define object keys.
import { ActivityType } from '../../types';
import { YogaIcon, DumbbellIcon, WalkIcon, RunIcon, CyclingIcon, SwimmingIcon, MeditationIcon, DanceIcon } from '../icons';

interface ActivityModalProps {
  activityType: ActivityType;
  stepGoal: number;
  onClose: () => void;
  onLog: (value?: number) => void;
}

const activityDetails = {
  [ActivityType.Yoga]: {
    title: 'Йога / Разминка',
    description: 'Отличный способ начать день! Эта активность "попьет" ваше растение, поддерживая его здоровье.',
    icon: YogaIcon,
    color: 'emerald',
  },
  [ActivityType.Dumbbells]: {
    title: 'Тренировка с гантелями',
    description: 'Силовая тренировка - как "удобрение" для вашего сада. Она ускорит рост и приблизит цветение.',
    icon: DumbbellIcon,
    color: 'red',
  },
  [ActivityType.Walking]: {
    title: 'Ходьба',
    description: 'Прогулка на свежем воздухе - это "солнечный свет" для вашего растения. Помогает плодам созревать.',
    icon: WalkIcon,
    color: 'yellow',
  },
  [ActivityType.Running]: {
    title: 'Бег',
    description: 'Отличная кардио-тренировка, которая даст вашему растению мощный заряд для роста!',
    icon: RunIcon,
    color: 'orange',
  },
  [ActivityType.Cycling]: {
    title: 'Велопрогулка',
    description: 'Крутите педали к здоровью! Ваше растение будет расти быстрее с каждой поездкой.',
    icon: CyclingIcon,
    color: 'teal',
  },
  [ActivityType.Swimming]: {
    title: 'Плавание',
    description: 'Плавание - это освежающий дождь для вашего сада, дающий мощный импульс к росту.',
    icon: SwimmingIcon,
    color: 'indigo',
  },
  [ActivityType.Meditation]: {
    title: 'Медитация',
    description: 'Найдите свой дзен. Медитация - это тихий уход за почвой вашего сада, укрепляющий корни.',
    icon: MeditationIcon,
    color: 'purple',
  },
  [ActivityType.Dancing]: {
    title: 'Танцы',
    description: 'Двигайтесь в ритме! Танцы - это праздник для души и тела, который заставит ваш сад цвести еще ярче.',
    icon: DanceIcon,
    color: 'pink',
  },
};

export const ActivityModal: React.FC<ActivityModalProps> = ({ activityType, stepGoal, onClose, onLog }) => {
  const [steps, setSteps] = useState<string>('');
  const details = activityDetails[activityType];
  const Icon = details.icon;

  const handleLog = () => {
    if (activityType === 'walking') {
      const numSteps = parseInt(steps, 10);
      if (!isNaN(numSteps) && numSteps > 0) {
        onLog(numSteps);
      }
    } else {
      onLog();
    }
  };

  return (
    <Modal title={details.title} onClose={onClose}>
      <div className="text-center">
        <Icon className={`w-16 h-16 text-${details.color}-500 mx-auto mb-4`} />
        <p className="text-emerald-700 mb-6">{details.description}</p>
        
        {activityType === 'walking' && (
          <div className="mb-4">
            <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-2">
              Сколько шагов вы прошли? (Цель: {stepGoal})
            </label>
            <input
              type="number"
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Например, 8000"
              className="w-full px-3 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        )}

        <Button onClick={handleLog} className={`bg-${details.color}-500 hover:bg-${details.color}-600 w-full`}>
          Выполнено!
        </Button>
      </div>
    </Modal>
  );
};