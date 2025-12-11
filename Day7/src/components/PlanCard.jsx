import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function PlanCard({ plan }) {
  const { theme, colors } = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const { price, validity, data, calls, features, badge, icon, gradient } = plan;

  const pastelGradients = {
    199: theme === 'dark' ? 'from-[#5F9EA0] to-[#9370DB]' : 'from-[#F5FFFA] to-[#B0E0E6]',
    299: theme === 'dark' ? 'from-[#AA98A9] to-[#9370DB]' : 'from-[#FFDAB9] to-[#E6E6FA]',
    399: theme === 'dark' ? 'from-[#9370DB] to-[#483D8B]' : 'from-[#AA98A9] to-[#E6E6FA]',
    599: theme === 'dark' ? 'from-[#483D8B] to-[#5F9EA0]' : 'from-[#B0E0E6] to-[#FFDAB9]',
    799: theme === 'dark' ? 'from-[#9370DB] to-[#AA98A9]' : 'from-[#E6E6FA] to-[#F5FFFA]',
    999: theme === 'dark' ? 'from-[#5F9EA0] to-[#AA98A9]' : 'from-[#FFDAB9] to-[#B0E0E6]',
  };

  return (
    <div
      className={`relative p-8 rounded-3xl transition-all duration-500 cursor-pointer backdrop-blur-lg border-4 ${
        isSelected
          ? 'scale-110 shadow-2xl ring-8 ring-[#FFDAB9] animate-pulse border-[#FFDAB9]'
          : 'hover:scale-105 shadow-xl border-white/50'
      } bg-gradient-to-br ${pastelGradients[price] || 'from-[#E6E6FA] to-[#B0E0E6]'}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      {badge && (
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF6347] text-white px-5 py-3 rounded-full font-black text-sm shadow-2xl animate-bounce border-4 border-white">
          ✨ {badge} ✨
        </div>
      )}

      <div className="text-center mb-4">
        <span className="text-6xl">{icon || '📱'}</span>
      </div>

      <h3 className={`text-5xl font-black mb-4 text-center transition-all duration-300 ${
        theme === 'dark' ? 'text-[#C0C0C0]' : 'text-[#36454F]'
      }`}>
        ₹{price}
      </h3>

      <div className={`space-y-3 mb-6 ${
        theme === 'dark' ? 'text-[#C0C0C0]' : 'text-[#36454F]'
      }`}>
        <p className="flex items-center gap-3 font-bold text-lg">
          <span className="text-2xl">📅</span> {validity}
        </p>
        <p className="flex items-center gap-3 font-bold text-lg">
          <span className="text-2xl">📊</span> {data}
        </p>
        <p className="flex items-center gap-3 font-bold text-lg">
          <span className="text-2xl">📞</span> {calls || 'Unlimited calls'}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowDetails(!showDetails);
        }}
        className={`w-full py-4 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl hover:shadow-2xl ${
          isSelected
            ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white scale-105'
            : theme === 'dark'
            ? 'bg-[#9370DB] text-white hover:bg-[#AA98A9]'
            : 'bg-white text-[#36454F] hover:bg-[#E6E6FA]'
        }`}
      >
        {isSelected ? '✓ Selected' : 'Select Plan'}
      </button>

      {showDetails && (
        <div className={`mt-4 p-5 backdrop-blur-md rounded-2xl border-2 transition-all duration-500 animate-fadeIn ${
          theme === 'dark' ? 'bg-[#483D8B]/60 border-[#9370DB]' : 'bg-white/80 border-[#E6E6FA]'
        }`}>
          <p className={`font-bold text-base ${
            theme === 'dark' ? 'text-[#C0C0C0]' : 'text-[#36454F]'
          }`}>
            ✨ {features || '100 SMS/day, Free roaming'}
          </p>
        </div>
      )}
    </div>
  );
}

export default PlanCard;
