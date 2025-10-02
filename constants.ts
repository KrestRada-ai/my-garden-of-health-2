
// FIX: Import React to use the `React.CSSProperties` type.
import React from 'react';
import type { PlantStage } from './types';

export const ACTIVITY_POINTS = {
  yoga: 10,
  dumbbells: 15,
  walking: 5, // per 1000 steps
  running: 20,
  cycling: 18,
  swimming: 25,
  meditation: 5,
  dancing: 18,
};

export const PLANT_STAGE_THRESHOLDS: Record<PlantStage, number> = {
  seed: 0,
  sprout: 30,
  sapling: 100,
  tree: 250,
  flowering: 450,
  fruiting: 700,
};

export const HEALTH_DECAY_DAYS = 3; // Plant starts withering after 3 days of inactivity
export const HEALTH_DECAY_AMOUNT = 20; // Health decreases by 20 points
export const HEALTH_RECOVERY_AMOUNT = 25; // Health recovers by 25 on new activity

export const FRUIT_HARVEST_COINS = 50;

export const INITIAL_STEP_GOAL = 8000;

export const DECORATION_SLOTS: { id: number, style: React.CSSProperties }[] = [
    { id: 1, style: { bottom: '4rem', left: '1rem', transform: 'scale(0.9)' } },
    { id: 2, style: { bottom: '4rem', right: '1rem', transform: 'scale(0.9) translateX(15%)' } },
    { id: 3, style: { bottom: '8rem', left: '5rem', transform: 'scale(0.8)', zIndex: 0 } },
];
