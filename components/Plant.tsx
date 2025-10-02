import React, { useState } from 'react';
import type { Plant as PlantType, PlantStage, PlantType as PType } from '../types';

interface PlantProps {
  plant: PlantType;
  onHarvest: (plantId: string) => void;
}

const LemonTreeVisual: React.FC<{ stage: PlantStage; isFruiting: boolean; isHarvesting: boolean; baseClasses: string; }> = ({ stage, isFruiting, isHarvesting, baseClasses }) => {
    const fruitBaseClasses = "absolute w-8 h-8 bg-yellow-400 rounded-full";
    return (
        <div className={`${baseClasses} w-64 h-80 animate-sway`}>
            {/* Trunk */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-40 bg-lime-900 rounded-t-lg"></div>
            {/* Leaves */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-600 rounded-full"></div>
            <div className="absolute top-0 left-10 w-48 h-48 bg-green-500 rounded-full"></div>
            {/* Flowers for flowering and fruiting stage */}
            {(stage === 'flowering' || stage === 'fruiting') && (
            <>
                <div className="absolute top-10 left-20 w-5 h-5 bg-white rounded-full animate-grow-in" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-20 left-48 w-5 h-5 bg-white rounded-full animate-grow-in" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-32 left-16 w-5 h-5 bg-white rounded-full animate-grow-in" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute top-0 left-32 w-5 h-5 bg-white rounded-full animate-grow-in" style={{animationDelay: '0.5s'}}></div>
            </>
            )}
            {/* Fruits for fruiting stage */}
            {isFruiting && (
            <>
                <div className={`${fruitBaseClasses} top-16 left-24 ${isHarvesting ? 'animate-harvest-pop' : 'animate-pulse'}`}></div>
                <div className={`${fruitBaseClasses} top-24 left-40 ${isHarvesting ? 'animate-harvest-pop' : 'animate-pulse'}`} style={{animationDelay: isHarvesting ? '0.1s' : '0.5s'}}></div>
                <div className={`${fruitBaseClasses} top-5 left-36 ${isHarvesting ? 'animate-harvest-pop' : 'animate-pulse'}`} style={{animationDelay: isHarvesting ? '0.2s' : '1s'}}></div>
            </>
            )}
        </div>
    );
}

const SunflowerVisual: React.FC<{ stage: PlantStage; baseClasses: string; }> = ({ stage, baseClasses }) => {
     // A sunflower doesn't have a 'fruiting' stage in the same way. We'll treat 'flowering' as its final visual stage.
    switch (stage) {
        case 'sapling':
            return (
                <svg className={`${baseClasses} w-32 h-48 animate-sway`} viewBox="0 0 100 150">
                    <path d="M50 150 V 50" stroke="#4d7c0f" fill="none" strokeWidth="10" strokeLinecap="round" />
                    {/* Basic leaves */}
                    <ellipse cx="35" cy="100" rx="15" ry="5" fill="#65a30d" transform="rotate(-20 35 100)" />
                    <ellipse cx="65" cy="80" rx="15" ry="5" fill="#65a30d" transform="rotate(20 65 80)" />
                </svg>
            );
        default: // Covers Tree, Flowering
            return (
                <div className={`${baseClasses} w-64 h-80 animate-sway`}>
                    {/* Stem */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-64 bg-gradient-to-t from-lime-700 to-lime-500 rounded-t-full"></div>
                    {/* Head */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40">
                         {/* Petals */}
                        <div className="absolute w-full h-full bg-yellow-400 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
                        <div className="absolute w-full h-full bg-yellow-500 rounded-full transform rotate-12 animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
                        {/* Center */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-900 rounded-full border-4 border-yellow-800"></div>
                    </div>
                </div>
            );
    }
}

const CherryTreeVisual: React.FC<{ stage: PlantStage; isFruiting: boolean; isHarvesting: boolean; baseClasses: string; }> = ({ stage, isFruiting, isHarvesting, baseClasses }) => {
    const fruitBaseClasses = "absolute w-5 h-5 bg-red-600 rounded-full border-2 border-red-800";
    return (
        <div className={`${baseClasses} w-64 h-80 animate-sway`}>
            {/* Trunk */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-48 bg-stone-800 rounded-t-xl"></div>
            {/* Leaves */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-64 bg-green-700 rounded-full filter blur-sm"></div>
            <div className="absolute top-0 left-10 w-48 h-48 bg-green-600 rounded-full filter blur-sm"></div>
            
            {/* Flowers for flowering stage */}
            {stage === 'flowering' && (
            <>
                <div className="absolute top-10 left-20 w-6 h-6 bg-pink-200 rounded-full animate-grow-in" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-20 left-48 w-6 h-6 bg-pink-200 rounded-full animate-grow-in" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-32 left-16 w-6 h-6 bg-pink-200 rounded-full animate-grow-in" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute top-0 left-32 w-6 h-6 bg-pink-200 rounded-full animate-grow-in" style={{animationDelay: '0.5s'}}></div>
                 <div className="absolute top-16 left-32 w-6 h-6 bg-pink-200 rounded-full animate-grow-in" style={{animationDelay: '0.6s'}}></div>
            </>
            )}

            {/* Fruits for fruiting stage */}
            {isFruiting && (
            <>
                <div className={`${fruitBaseClasses} top-16 left-24 ${isHarvesting ? 'animate-harvest-pop' : 'animate-pulse'}`}></div>
                <div className={`${fruitBaseClasses} top-24 left-40 ${isHarvesting ? 'animate-harvest-pop' : 'animate-pulse'}`} style={{animationDelay: isHarvesting ? '0.1s' : '0.5s'}}></div>
                <div className={`${fruitBaseClasses} top-5 left-36 ${isHarvesting ? 'animate-harvest-pop' : 'animate-pulse'}`} style={{animationDelay: isHarvesting ? '0.2s' : '1s'}}></div>
                <div className={`${fruitBaseClasses} top-32 left-20 ${isHarvesting ? 'animate-harvest-pop' : 'animate-pulse'}`} style={{animationDelay: isHarvesting ? '0.3s' : '0.7s'}}></div>
            </>
            )}
        </div>
    );
}


const DeadPlantVisual: React.FC<{ stage: PlantStage }> = ({ stage }) => {
    const deadContainerClasses = `absolute bottom-28 transition-all duration-1000 filter grayscale opacity-60 animate-grow-in`;

    if (stage === 'seed' || stage === 'sprout') {
        return (
            <div className={deadContainerClasses}>
                <svg className="w-16 h-24" viewBox="0 0 100 150" transform="rotate(-15)">
                    <path d="M50 150 C 50 120, 30 100, 45 80 C 60 60, 40 40, 50 0" stroke="#a1a1aa" fill="none" strokeWidth="6" strokeLinecap="round" />
                </svg>
            </div>
        );
    }
    
    return (
        <div className={`${deadContainerClasses} -rotate-12`}>
            <div className={`w-64 h-80`}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-40 bg-zinc-600 rounded-t-lg"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-zinc-500 rounded-full scale-90 opacity-70"></div>
            </div>
        </div>
    );
};


const PlantVisual: React.FC<{
  plantType: PType;
  stage: PlantStage;
  health: number;
  isFruiting: boolean;
  isHarvesting: boolean;
}> = ({ plantType, stage, health, isFruiting, isHarvesting }) => {
  if (health <= 0) {
    return <DeadPlantVisual stage={stage} />;
  }
  
  const witheringStyle = health < 50 ? 'saturate-50 opacity-70' : '';
  const baseClasses = `absolute bottom-28 transition-all duration-1000 transform ${witheringStyle} animate-grow-in`;

  switch (stage) {
    case 'seed':
      return <div className={`w-8 h-8 bg-yellow-900 rounded-full absolute bottom-32 animate-grow-in ${witheringStyle}`}></div>;
    case 'sprout':
      return (
        <svg className={`${baseClasses} w-16 h-24`} viewBox="0 0 100 150">
          <path d="M50 150 C 50 120, 70 110, 60 80 S 40 60, 50 0" stroke="#4d7c0f" fill="none" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
    default:
        if (plantType === 'sunflower') {
            return <SunflowerVisual stage={stage} baseClasses={baseClasses} />;
        }
        if (plantType === 'cherry_tree') {
            return <CherryTreeVisual stage={stage} isFruiting={isFruiting} isHarvesting={isHarvesting} baseClasses={baseClasses} />;
        }
        return <LemonTreeVisual stage={stage} isFruiting={isFruiting} isHarvesting={isHarvesting} baseClasses={baseClasses} />;
  }
};

export const Plant: React.FC<PlantProps> = ({ plant, onHarvest }) => {
  const [isHarvesting, setIsHarvesting] = useState(false);
  const isDead = plant.health <= 0;
  const isFruiting = plant.stage === 'fruiting' && !isDead;

  const handleHarvest = () => {
    if (isFruiting && !isHarvesting) {
      setIsHarvesting(true);
      setTimeout(() => {
        onHarvest(plant.id);
        setTimeout(() => setIsHarvesting(false), 100);
      }, 700);
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center ${isFruiting && !isHarvesting ? 'cursor-pointer' : ''}`}
      onClick={handleHarvest}
      aria-live="polite"
    >
      <PlantVisual
        key={`${plant.id}-${plant.stage}`} // Re-mounts on stage change, re-triggering animation
        plantType={plant.type}
        stage={plant.stage}
        health={plant.health}
        isFruiting={isFruiting}
        isHarvesting={isHarvesting}
      />
      {isFruiting && !isHarvesting && (
        <div className="absolute top-0 -mt-8 px-4 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-bold shadow-lg animate-bounce">
          Собрать урожай!
        </div>
      )}
      {isDead && (
        <div className="absolute top-0 -mt-8 px-4 py-2 bg-slate-700 text-white rounded-full text-sm font-bold shadow-lg">
            Растение погибло
        </div>
      )}
    </div>
  );
};