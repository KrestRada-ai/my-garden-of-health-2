
import React from 'react';
import type { PlacedDecoration } from '../types';

interface DecorationProps {
  decoration: PlacedDecoration;
}

const GardenGnome: React.FC = () => {
  return (
    <div className="w-16 h-24 animate-grow-in" aria-label="Садовый гном">
      {/* Hat */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] border-l-transparent border-b-[48px] border-b-red-600 border-r-[32px] border-r-transparent"
        style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))' }}
      ></div>
      {/* Face */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-10 h-7 bg-orange-200 rounded-full"></div>
      {/* Beard */}
      <div
        className="absolute top-11 left-1/2 -translate-x-1/2 w-14 h-12 bg-white rounded-b-full shadow-inner"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)' }}
      ></div>
      {/* Body */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-10 bg-blue-600 rounded-t-md"></div>
       {/* Feet */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-3">
        <div className="w-5 h-4 bg-black rounded-t-full"></div>
        <div className="w-5 h-4 bg-black rounded-t-full"></div>
      </div>
    </div>
  );
};

const BirdBath: React.FC = () => {
    return (
        <div className="w-20 h-28 flex flex-col items-center animate-grow-in" aria-label="Ванна для птиц">
            {/* Bowl */}
            <div className="w-20 h-6 bg-stone-300 rounded-b-full border-2 border-stone-400"></div>
            <div className="w-16 h-3 bg-sky-200 rounded-full -mt-2"></div>
            {/* Stem */}
            <div className="w-6 h-16 bg-stone-400 border-x-2 border-stone-500"></div>
            {/* Base */}
            <div className="w-16 h-4 bg-stone-500 rounded-t-md"></div>
        </div>
    );
}

export const Decoration: React.FC<DecorationProps> = ({ decoration }) => {
  switch (decoration.type) {
    case 'garden_gnome':
      return <GardenGnome />;
    case 'bird_bath':
      return <BirdBath />;
    default:
      return null;
  }
};