import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

function PlanCard({ plan }) {
  const { theme, colors } = useTheme();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const { price, validity, data, calls, features, badge, icon, gradient } = plan;

  const handleSelectPlan = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    if (isSelected) {
      // Process recharge
      setIsProcessing(true);
      setTimeout(() => {
        alert(`✅ Recharge successful! ₹${price} plan activated.\n\n📱 Plan Details:\n• Validity: ${validity}\n• Data: ${data}\n• Calls: ${calls}\n• Features: ${features}`);
        setIsProcessing(false);
        setIsSelected(false);
      }, 2000);
    } else {
      setIsSelected(true);
    }
  };

  const pastelGradients = {
    199: theme === 'dark' ? 'from-[#FFE4E6] to-[#FEF3C7]' : 'from-[#FFF7ED] to-[#FEF3C7]',
    299: theme === 'dark' ? 'from-[#E8F4FD] to-[#F0F9FF]' : 'from-[#FEF3C7] to-[#ECFDF5]',
    399: theme === 'dark' ? 'from-[#F0F9FF] to-[#FFE4E6]' : 'from-[#ECFDF5] to-[#FFF7ED]',
    599: theme === 'dark' ? 'from-[#FEF3C7] to-[#E8F4FD]' : 'from-[#FFE4E6] to-[#E8F4FD]',
    799: theme === 'dark' ? 'from-[#ECFDF5] to-[#F0F9FF]' : 'from-[#F0F9FF] to-[#FEF3C7]',
    999: theme === 'dark' ? 'from-[#FFF7ED] to-[#ECFDF5]' : 'from-[#E8F4FD] to-[#FFE4E6]',
  };

  return (
    <div
      className={`relative p-8 rounded-3xl transition-all duration-700 cursor-pointer backdrop-blur-lg border-4 ${
        isSelected
          ? 'scale-110 shadow-2xl ring-8 ring-[#F472B6] animate-pulse border-[#F472B6] shadow-[0_25px_60px_rgba(244,114,182,0.4)]'
          : 'hover:scale-105 shadow-xl border-white/60 hover:shadow-[0_20px_50px_rgba(167,139,250,0.3)]'
      } bg-gradient-to-br ${pastelGradients[price] || 'from-[#FFF7ED] to-[#FEF3C7]'}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      {badge && (
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white px-5 py-3 rounded-full font-black text-sm shadow-2xl animate-bounce border-4 border-white hover:shadow-[0_15px_40px_rgba(244,114,182,0.5)]">
          ✨ {badge} ✨
        </div>
      )}

      <div className="text-center mb-4">
        <span className="text-6xl">{icon || '📱'}</span>
      </div>

      <h3 className="text-5xl font-black mb-4 text-center transition-all duration-500 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent">
        ₹{price}
      </h3>

      <div className="space-y-3 mb-6 text-[#7C3AED]">
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

      <div className="space-y-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(!showDetails);
          }}
          className="w-full py-3 rounded-2xl font-bold text-sm transition-all duration-500 bg-[#FEF3C7]/60 text-[#7C3AED] hover:bg-[#FEF3C7]/90 hover:shadow-[0_8px_25px_rgba(167,139,250,0.2)]"
        >
          {showDetails ? '▲ Hide Details' : '▼ View Details'}
        </button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSelectPlan();
          }}
          disabled={isProcessing}
          className={`w-full py-4 rounded-3xl font-black text-lg transition-all duration-500 shadow-xl hover:shadow-2xl ${
            isProcessing
              ? 'bg-gray-400 cursor-not-allowed'
              : isSelected
              ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white scale-105 shadow-[0_20px_50px_rgba(16,185,129,0.4)]'
              : 'bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white hover:from-[#A78BFA] hover:to-[#F472B6] hover:shadow-[0_20px_50px_rgba(244,114,182,0.4)]'
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⏳</span> Processing...
            </span>
          ) : isSelected ? (
            '✓ Selected - Recharge Now'
          ) : (
            'Select Plan'
          )}
        </button>
      </div>

      {showDetails && (
        <div className="mt-4 p-5 backdrop-blur-md rounded-2xl border-2 transition-all duration-700 animate-fadeIn bg-white/90 border-white/60 shadow-lg">
          <p className="font-bold text-base text-[#7C3AED]">
            ✨ {features || '100 SMS/day, Free roaming'}
          </p>
        </div>
      )}
    </div>
  );
}

export default PlanCard;
