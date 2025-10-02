
import React from 'react';
import type { Plant as PlantType, PlacedDecoration } from '../types';
import { Plant } from './Plant';
import { Decoration } from './Decoration';
import { DECORATION_SLOTS } from '../constants';

interface GardenProps {
  plant: PlantType;
  onHarvest: (plantId: string) => void;
  placedDecorations: PlacedDecoration[];
}

export const Garden: React.FC<GardenProps> = ({ plant, onHarvest, placedDecorations }) => {
  return (
    <div className="flex flex-col items-center justify-end h-96 relative">
      <Plant plant={plant} onHarvest={onHarvest} />

      {placedDecorations.map(deco => {
        const slot = DECORATION_SLOTS.find(s => s.id === deco.slotId);
        if (!slot) return null;
        return (
          <div key={deco.id} className="absolute" style={slot.style}>
            <Decoration decoration={deco} />
          </div>
        );
      })}

      {/* Pot */}
      <div className="w-48 h-32 bg-amber-700 rounded-t-2xl border-b-8 border-amber-800 shadow-lg relative z-10">
        <div className="w-56 h-8 bg-amber-600 rounded-full absolute -top-4 left-1/2 -translate-x-1/2"></div>
      </div>
      {/* Ground */}
      <div className="w-full h-1/2 bg-lime-800/20 absolute bottom-0 rounded-b-3xl"></div>
    </div>
  );
};