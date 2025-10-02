export enum ActivityType {
  Yoga = 'yoga',
  Dumbbells = 'dumbbells',
  Walking = 'walking',
  Running = 'running',
  Cycling = 'cycling',
  Swimming = 'swimming',
  Meditation = 'meditation',
  Dancing = 'dancing',
}

export enum PlantStage {
  Seed = 'seed',
  Sprout = 'sprout',
  Sapling = 'sapling',
  Tree = 'tree', // Represents the main growth stage for any plant
  Flowering = 'flowering',
  Fruiting = 'fruiting', // Fruiting might be specific to some plants
}

export type PlantType = 'lemon_tree' | 'sunflower' | 'cherry_tree';
export type DecorationType = 'garden_gnome' | 'bird_bath';
export type RewardId = PlantType | DecorationType;

export interface Achievement {
  id: string;
  title: string;
  description: string;
  rewardId: RewardId;
  isUnlocked: (state: GardenState) => boolean;
}

export interface Reward {
  id: RewardId;
  name: string;
  type: 'plant' | 'decoration';
  description: string;
  emoji: string;
  cost?: number;
}

export interface ActivityLogEntry {
  id: string;
  type: ActivityType;
  date: string;
  value?: number; // For steps in walking
}

export interface Plant {
  id:string;
  type: PlantType;
  stage: PlantStage;
  health: number; // 0-100
  growthPoints: number;
}

export interface PlacedDecoration {
  id: string; // Unique instance ID
  type: DecorationType;
  slotId: number;
}

export interface GardenSettings {
  stepGoal: number;
}

export interface GardenState {
  gardenLevel: number;
  coins: number;
  plants: Plant[];
  inventory: Partial<Record<DecorationType, number>>;
  placedDecorations: PlacedDecoration[];
  activityLog: ActivityLogEntry[];
  settings: GardenSettings;
  lastActivityDate: string | null;
  unlockedRewards: RewardId[];
  completedAchievements: string[];
}

export type ModalType = 'activity' | 'rewards' | 'log' | 'settings' | 'decorations';