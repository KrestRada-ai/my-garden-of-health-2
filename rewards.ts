
import type { Achievement, GardenState, Reward, RewardId } from './types';

export const REWARDS: Record<RewardId, Reward> = {
  lemon_tree: {
    id: 'lemon_tree',
    name: 'Лимонное Дерево',
    type: 'plant',
    description: 'Классическое дерево, приносящее ценные лимоны.',
    emoji: '🍋',
  },
  sunflower: {
    id: 'sunflower',
    name: 'Подсолнух',
    type: 'plant',
    description: 'Высокий, яркий цветок, который следует за солнцем.',
    emoji: '🌻',
  },
  cherry_tree: {
    id: 'cherry_tree',
    name: 'Вишневое Дерево',
    type: 'plant',
    description: 'Красивое дерево, цветущее весной и дающее сочные ягоды.',
    emoji: '🍒',
  },
  garden_gnome: {
    id: 'garden_gnome',
    name: 'Садовый Гном',
    type: 'decoration',
    description: 'Веселый друг для вашего сада.',
    emoji: '🍄',
    cost: 100,
  },
  bird_bath: {
    id: 'bird_bath',
    name: 'Ванна для птиц',
    type: 'decoration',
    description: 'Привлекает в сад пернатых друзей.',
    emoji: '🕊️',
    cost: 150,
  },
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_steps',
    title: "Первые шаги",
    description: "Завершите первую тренировку.",
    rewardId: 'sunflower',
    isUnlocked: (state: GardenState) => state.activityLog.length > 0,
  },
  {
    id: 'level_up',
    title: "Новый Уровень",
    description: "Достигните 2-го уровня сада.",
    rewardId: 'garden_gnome',
    isUnlocked: (state: GardenState) => state.gardenLevel >= 2,
  },
  {
    id: 'high_achiever',
    title: "Садовод-профессионал",
    description: "Достигните 3-го уровня сада.",
    rewardId: 'cherry_tree',
    isUnlocked: (state: GardenState) => state.gardenLevel >= 3,
  },
  {
    id: 'stable_gardener',
    title: "Стабильность",
    description: "Тренируйтесь 3 дня подряд.",
    rewardId: 'lemon_tree', // Placeholder, could be coins or another reward
    isUnlocked: (state: GardenState) => {
        // This is a complex check, for now, we'll keep it simple
        return state.activityLog.length >= 3;
    },
  },
  {
    id: 'marathon_runner',
    title: "Марафонец",
    description: "Пройдите 100,000 шагов.",
    rewardId: 'lemon_tree', // Placeholder
    isUnlocked: (state: GardenState) => {
        const totalSteps = state.activityLog
            .filter(entry => entry.type === 'walking' && entry.value)
            .reduce((sum, entry) => sum + entry.value!, 0);
        return totalSteps >= 100000;
    },
  },
];