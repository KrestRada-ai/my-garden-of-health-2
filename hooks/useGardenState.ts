
import { useState, useEffect, useCallback } from 'react';
import { type GardenState, ActivityType, PlantStage, type RewardId, type PlacedDecoration, type DecorationType } from '../types';
import { 
    ACTIVITY_POINTS, 
    PLANT_STAGE_THRESHOLDS, 
    HEALTH_DECAY_DAYS, 
    HEALTH_DECAY_AMOUNT,
    HEALTH_RECOVERY_AMOUNT,
    FRUIT_HARVEST_COINS,
    INITIAL_STEP_GOAL
} from '../constants';
import { ACHIEVEMENTS, REWARDS } from '../rewards';

const getInitialState = (): GardenState => {
  const savedState = localStorage.getItem('gardenState');
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    
    // Migration for inventory and new decoration system
    if (!parsedState.inventory) {
      parsedState.inventory = {};
    }
    if (parsedState.placedDecorations && parsedState.placedDecorations.length > 0 && parsedState.placedDecorations[0].slotId === undefined) {
      parsedState.placedDecorations.forEach((deco: { type: DecorationType }) => {
        parsedState.inventory[deco.type] = (parsedState.inventory[deco.type] || 0) + 1;
      });
      parsedState.placedDecorations = []; // Clear old decorations, user can replace them
    }

    return {
      gardenLevel: 1,
      coins: 0,
      plants: [{
        id: 'lemon_tree_1',
        type: 'lemon_tree',
        stage: PlantStage.Seed,
        health: 100,
        growthPoints: 0,
      }],
      placedDecorations: [],
      activityLog: [],
      settings: {
        stepGoal: INITIAL_STEP_GOAL,
      },
      lastActivityDate: null,
      unlockedRewards: ['lemon_tree'],
      completedAchievements: [],
      inventory: {},
      ...parsedState,
    };
  }
  return {
    gardenLevel: 1,
    coins: 0,
    plants: [{
      id: 'lemon_tree_1',
      type: 'lemon_tree',
      stage: PlantStage.Seed,
      health: 100,
      growthPoints: 0,
    }],
    inventory: {},
    placedDecorations: [],
    activityLog: [],
    settings: {
      stepGoal: INITIAL_STEP_GOAL,
    },
    lastActivityDate: null,
    unlockedRewards: ['lemon_tree'],
    completedAchievements: [],
  };
};

export const useGardenState = () => {
  const [state, setState] = useState<GardenState>(getInitialState);

  useEffect(() => {
    localStorage.setItem('gardenState', JSON.stringify(state));
  }, [state]);
  
  const checkHealth = useCallback(() => {
    if (!state.lastActivityDate) return;

    const lastDate = new Date(state.lastActivityDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > HEALTH_DECAY_DAYS) {
      setState(prevState => {
        const newPlants = prevState.plants.map(plant => ({
          ...plant,
          health: Math.max(0, plant.health - HEALTH_DECAY_AMOUNT)
        }));
        return { ...prevState, plants: newPlants };
      });
    }
  }, [state.lastActivityDate, state.plants]);

  useEffect(() => {
    const timer = setInterval(checkHealth, 1000 * 60 * 60); // Check once an hour
    checkHealth(); // Initial check on load
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkHealth]);

  const getNextStage = (points: number): PlantStage => {
        const stages = Object.keys(PLANT_STAGE_THRESHOLDS) as PlantStage[];
        let nextStage: PlantStage = PlantStage.Seed;
        for (const stage of stages) {
            if (points >= PLANT_STAGE_THRESHOLDS[stage]) {
                nextStage = stage;
            }
        }
        return nextStage;
  };
  
  const checkForNewAchievements = (currentState: GardenState): Partial<GardenState> => {
      const newlyCompleted = ACHIEVEMENTS.filter(
        ach => !currentState.completedAchievements.includes(ach.id) && ach.isUnlocked(currentState)
      );

      if (newlyCompleted.length > 0) {
        const newAchievements = newlyCompleted.map(ach => ach.id);
        const newRewards = newlyCompleted.map(ach => ach.rewardId).filter(id => !currentState.unlockedRewards.includes(id));
        
        const newInventory = { ...currentState.inventory };
        for (const ach of newlyCompleted) {
            const reward = REWARDS[ach.rewardId];
            if (reward && reward.type === 'decoration') {
                const decoType = reward.id as DecorationType;
                newInventory[decoType] = (newInventory[decoType] || 0) + 1;
            }
        }
        
        return {
          completedAchievements: [...currentState.completedAchievements, ...newAchievements],
          unlockedRewards: [...currentState.unlockedRewards, ...newRewards as RewardId[]],
          inventory: newInventory,
        };
      }
      return {};
  };

  const addActivity = (type: ActivityType, value?: number) => {
    setState(prevState => {
      let points = 0;
      if (type === 'walking' && value) {
        points = Math.floor(value / 1000) * ACTIVITY_POINTS.walking;
      } else if (type !== 'walking') {
        points = ACTIVITY_POINTS[type];
      }

      const newLogEntry = {
        id: new Date().toISOString(),
        type,
        date: new Date().toISOString(),
        value,
      };
      
      const updatedPlants = prevState.plants.map(plant => {
          if (plant.health <= 0) return plant;
          const newGrowthPoints = plant.growthPoints + points;
          const newStage = getNextStage(newGrowthPoints);
          const newHealth = Math.min(100, plant.health + HEALTH_RECOVERY_AMOUNT);
          return { ...plant, growthPoints: newGrowthPoints, stage: newStage, health: newHealth };
      });
      
      const newLevel = Math.floor(updatedPlants[0].growthPoints / 500) + 1;

      const intermediateState: GardenState = {
        ...prevState,
        plants: updatedPlants,
        gardenLevel: newLevel,
        activityLog: [newLogEntry, ...prevState.activityLog],
        lastActivityDate: new Date().toISOString(),
      };
      
      const achievementUpdates = checkForNewAchievements(intermediateState);

      return { ...intermediateState, ...achievementUpdates };
    });
  };

  const harvestPlant = (plantId: string) => {
    setState(prevState => {
        const plantToHarvest = prevState.plants.find(p => p.id === plantId && p.stage === PlantStage.Fruiting && p.health > 0);
        if (!plantToHarvest) return prevState;

        const updatedPlants = prevState.plants.map(p =>
            p.id === plantId ? { ...p, stage: PlantStage.Flowering, growthPoints: PLANT_STAGE_THRESHOLDS[PlantStage.Flowering] } : p
        );
        return { ...prevState, plants: updatedPlants, coins: prevState.coins + FRUIT_HARVEST_COINS };
    });
  };

  const purchaseDecoration = (decorationId: DecorationType) => {
    setState(prevState => {
      const decoration = REWARDS[decorationId];
      if (!decoration || decoration.type !== 'decoration' || decoration.cost === undefined) return prevState;

      if (prevState.coins >= decoration.cost) {
        const newInventory = { ...prevState.inventory };
        newInventory[decorationId] = (newInventory[decorationId] || 0) + 1;
        return {
          ...prevState,
          coins: prevState.coins - decoration.cost,
          inventory: newInventory,
        };
      }
      return prevState;
    });
  };

  const placeDecoration = (decorationType: DecorationType, slotId: number) => {
    setState(prevState => {
      const inventoryCount = prevState.inventory[decorationType] || 0;
      const isSlotOccupied = prevState.placedDecorations.some(d => d.slotId === slotId);

      if (inventoryCount > 0 && !isSlotOccupied) {
        const newInventory = { ...prevState.inventory };
        newInventory[decorationType] = inventoryCount - 1;

        const newDecoration: PlacedDecoration = {
          id: `${decorationType}_${Date.now()}`,
          type: decorationType,
          slotId: slotId,
        };

        return {
          ...prevState,
          inventory: newInventory,
          placedDecorations: [...prevState.placedDecorations, newDecoration],
        };
      }
      return prevState;
    });
  };

  const removeDecoration = (placedDecorationId: string) => {
    setState(prevState => {
      const decorationToRemove = prevState.placedDecorations.find(d => d.id === placedDecorationId);
      if (!decorationToRemove) return prevState;

      const newInventory = { ...prevState.inventory };
      newInventory[decorationToRemove.type] = (newInventory[decorationToRemove.type] || 0) + 1;

      return {
        ...prevState,
        inventory: newInventory,
        placedDecorations: prevState.placedDecorations.filter(d => d.id !== placedDecorationId),
      };
    });
  };

  const updateStepGoal = (newGoal: number) => {
    setState(prevState => ({
      ...prevState,
      settings: { ...prevState.settings, stepGoal: newGoal },
    }));
  };

  const resetProgress = () => {
    localStorage.removeItem('gardenState');
    setState(getInitialState());
    window.location.reload();
  };

  return { state, addActivity, harvestPlant, updateStepGoal, resetProgress, purchaseDecoration, placeDecoration, removeDecoration };
};