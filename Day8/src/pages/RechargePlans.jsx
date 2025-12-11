import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import PlanCard from '../components/PlanCard';

function RechargePlans() {
  const { theme, colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState('prepaid');

  const allPlans = {
    prepaid: [
      { id: 1, price: 199, validity: '28 days', data: '1.5GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '🚀', badge: 'Best Value' },
      { id: 2, price: 299, validity: '28 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '⭐', badge: 'Most Popular' },
      { id: 3, price: 399, validity: '56 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '👑', badge: 'Trending' },
      { id: 4, price: 599, validity: '84 days', data: '3GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '💎' },
      { id: 5, price: 799, validity: '84 days', data: '4GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '💼' },
      { id: 6, price: 999, validity: '365 days', data: '5GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '🏢' }
    ],
    postpaid: [
      { id: 7, price: 499, validity: 'Monthly', data: '75GB', calls: 'Unlimited', features: 'Netflix, Amazon Prime', icon: '📺', badge: 'Entertainment' },
      { id: 8, price: 699, validity: 'Monthly', data: '100GB', calls: 'Unlimited', features: 'Netflix, Prime, Disney+', icon: '🎬', badge: 'Premium' },
      { id: 9, price: 999, validity: 'Monthly', data: 'Unlimited', calls: 'Unlimited', features: 'All OTT platforms', icon: '🌟', badge: 'Ultimate' }
    ],
    datapacks: [
      { id: 10, price: 19, validity: '1 day', data: '1GB', calls: 'NA', features: 'Data only pack', icon: '📊' },
      { id: 11, price: 48, validity: '3 days', data: '3GB', calls: 'NA', features: 'Data only pack', icon: '📈' },
      { id: 12, price: 98, validity: '7 days', data: '12GB', calls: 'NA', features: 'Data only pack', icon: '📉' },
      { id: 13, price: 251, validity: '30 days', data: '50GB', calls: 'NA', features: 'Data only pack', icon: '💹' }
    ],
    topups: [
      { id: 14, price: 10, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup', icon: '💰' },
      { id: 15, price: 20, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup', icon: '💵' },
      { id: 16, price: 50, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup', icon: '💸' },
      { id: 17, price: 100, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup', icon: '💳' }
    ]
  };

  const filters = [
    { id: 'prepaid', label: 'Prepaid', icon: '📱', count: allPlans.prepaid.length },
    { id: 'postpaid', label: 'Postpaid', icon: '📋', count: allPlans.postpaid.length },
    { id: 'datapacks', label: 'Data Packs', icon: '📊', count: allPlans.datapacks.length },
    { id: 'topups', label: 'Top-ups', icon: '💰', count: allPlans.topups.length }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#FFE4E6] via-[#E8F4FD] to-[#F0F9FF]' 
        : 'bg-gradient-to-br from-[#FFF7ED] via-[#FEF3C7] to-[#ECFDF5]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            📱 Browse All Recharge Plans
          </h1>
          <p className="text-2xl font-bold text-[#7C3AED]">
            Find the perfect plan for your needs
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 rounded-3xl font-black text-lg transition-all duration-500 shadow-xl hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white scale-110 shadow-[0_15px_40px_rgba(244,114,182,0.4)]'
                    : 'bg-gradient-to-r from-[#FEF3C7]/90 to-[#ECFDF5]/90 text-[#7C3AED] hover:from-[#FEF3C7] hover:to-[#ECFDF5] hover:shadow-[0_10px_30px_rgba(167,139,250,0.2)]'
                } backdrop-blur-md border-2 border-white/50`}
              >
                <span className="text-2xl mr-2">{filter.icon}</span>
                {filter.label}
                <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                  activeFilter === filter.id
                    ? 'bg-white/30'
                    : 'bg-[#8B5CF6]/30'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mb-12">
          <div className="mb-8 p-6 rounded-3xl text-center bg-gradient-to-r from-[#FEF3C7]/85 to-[#ECFDF5]/85 backdrop-blur-md border-2 border-white/60 shadow-xl hover:shadow-[0_20px_50px_rgba(244,114,182,0.2)] transition-all duration-700">
            <h2 className="text-3xl font-black bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent">
              {filters.find(f => f.id === activeFilter)?.icon} {' '}
              {filters.find(f => f.id === activeFilter)?.label} Plans
            </h2>
            <p className="text-lg font-semibold mt-2 text-[#7C3AED]">
              {allPlans[activeFilter].length} plans available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {allPlans[activeFilter].map(plan => (
              <div
                key={plan.id}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-[#FEF3C7]/85 to-[#ECFDF5]/85 backdrop-blur-xl border-4 border-white/60 shadow-2xl hover:shadow-[0_30px_70px_rgba(167,139,250,0.3)] transition-all duration-700">
          <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl font-semibold mb-8 text-[#7C3AED]">
            Contact our support team for personalized plan recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white font-black text-lg rounded-3xl shadow-xl hover:scale-105 hover:shadow-[0_20px_50px_rgba(244,114,182,0.4)] transition-all duration-500">
              📞 Contact Support
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-[#FEF3C7]/90 to-[#ECFDF5]/90 text-[#7C3AED] font-black text-lg rounded-3xl shadow-xl hover:scale-105 hover:shadow-[0_15px_40px_rgba(167,139,250,0.3)] transition-all duration-500 border-2 border-white/60">
              💬 Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RechargePlans;