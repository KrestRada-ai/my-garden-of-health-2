
import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface SettingsModalProps {
  stepGoal: number;
  onClose: () => void;
  onSave: (newGoal: number) => void;
  onReset: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ stepGoal, onClose, onSave, onReset }) => {
  const [currentGoal, setCurrentGoal] = useState<string>(stepGoal.toString());

  const handleSave = () => {
    const numGoal = parseInt(currentGoal, 10);
    if (!isNaN(numGoal) && numGoal > 0) {
      onSave(numGoal);
      onClose();
    }
  };

  const handleReset = () => {
    if (window.confirm("Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя будет отменить.")) {
        onReset();
        onClose();
    }
  }

  return (
    <Modal title="Настройки" onClose={onClose}>
      <div className="space-y-6">
        <div>
          <label htmlFor="step-goal" className="block text-sm font-medium text-gray-700 mb-2">
            Ежедневная цель по шагам
          </label>
          <input
            type="number"
            id="step-goal"
            value={currentGoal}
            onChange={(e) => setCurrentGoal(e.target.value)}
            className="w-full px-3 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              Сохранить
            </Button>
          </div>
        </div>
        
        <div className="border-t border-lime-200 pt-4">
          <h3 className="text-lg font-bold text-red-700">Опасная зона</h3>
          <p className="text-sm text-gray-600 mt-1 mb-3">Сброс удалит все ваши растения, монеты и историю активности.</p>
          <Button onClick={handleReset} className="bg-red-600 hover:bg-red-700">
            Сбросить прогресс
          </Button>
        </div>
      </div>
    </Modal>
  );
};
