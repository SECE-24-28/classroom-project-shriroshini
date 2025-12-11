import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import PlanCard from '../components/PlanCard';
import { Smartphone, FileText, BarChart3, DollarSign, Star, Crown, Diamond, Briefcase, Building, Tv, Film, Sparkles, TrendingUp, TrendingDown, Activity, CreditCard, Phone, MessageSquare } from 'lucide-react';

function RechargePlans() {
  const { theme, colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState('prepaid');

  const allPlans = {
    prepaid: [
      { id: 1, price: 199, validity: '28 days', data: '1.5GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', badge: 'Best Value' },
      { id: 2, price: 299, validity: '28 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', badge: 'Most Popular' },
      { id: 3, price: 399, validity: '56 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', badge: 'Trending' },
      { id: 4, price: 599, validity: '84 days', data: '3GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming' },
      { id: 5, price: 799, validity: '84 days', data: '4GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming' },
      { id: 6, price: 999, validity: '365 days', data: '5GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming' }
    ],
    postpaid: [
      { id: 7, price: 499, validity: 'Monthly', data: '75GB', calls: 'Unlimited', features: 'Netflix, Amazon Prime', badge: 'Entertainment' },
      { id: 8, price: 699, validity: 'Monthly', data: '100GB', calls: 'Unlimited', features: 'Netflix, Prime, Disney+', badge: 'Premium' },
      { id: 9, price: 999, validity: 'Monthly', data: 'Unlimited', calls: 'Unlimited', features: 'All OTT platforms', badge: 'Ultimate' }
    ],
    datapacks: [
      { id: 10, price: 19, validity: '1 day', data: '1GB', calls: 'NA', features: 'Data only pack' },
      { id: 11, price: 48, validity: '3 days', data: '3GB', calls: 'NA', features: 'Data only pack' },
      { id: 12, price: 98, validity: '7 days', data: '12GB', calls: 'NA', features: 'Data only pack' },
      { id: 13, price: 251, validity: '30 days', data: '50GB', calls: 'NA', features: 'Data only pack' }
    ],
    topups: [
      { id: 14, price: 10, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup' },
      { id: 15, price: 20, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup' },
      { id: 16, price: 50, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup' },
      { id: 17, price: 100, validity: 'Instant', data: 'NA', calls: 'NA', features: 'Main balance topup' }
    ]
  };

  const filters = [
    { id: 'prepaid', label: 'Prepaid', icon: <Smartphone className="w-6 h-6" />, count: allPlans.prepaid.length },
    { id: 'postpaid', label: 'Postpaid', icon: <FileText className="w-6 h-6" />, count: allPlans.postpaid.length },
    { id: 'datapacks', label: 'Data Packs', icon: <BarChart3 className="w-6 h-6" />, count: allPlans.datapacks.length },
    { id: 'topups', label: 'Top-ups', icon: <DollarSign className="w-6 h-6" />, count: allPlans.topups.length }
  ];

  return (
    <div className="min-h-screen transition-all duration-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-6xl font-black mb-4 drop-shadow-lg animate-pulse ${colors.gradientText}`}>
            Browse All Recharge Plans
          </h1>
          <p className={`text-2xl font-bold ${colors.text}`}>
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
                    ? `${colors.buttonPrimary} text-white scale-110 ${colors.shadow}`
                    : `${colors.cardBg} ${colors.text} ${colors.shadow}`
                } backdrop-blur-md border-2 border-white/50`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
                <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                  activeFilter === filter.id
                    ? 'bg-white/30'
                    : 'bg-[#C53030]/30'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mb-12">
          <div className={`mb-8 p-6 rounded-3xl text-center ${colors.cardBg} backdrop-blur-md border-2 border-white/60 shadow-xl ${colors.shadow} transition-all duration-700`}>
            <h2 className={`text-3xl font-black ${colors.gradientText}`}>
              <span className="mr-2">{filters.find(f => f.id === activeFilter)?.icon}</span>
              {filters.find(f => f.id === activeFilter)?.label} Plans
            </h2>
            <p className={`text-lg font-semibold mt-2 ${colors.text}`}>
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


      </div>
    </div>
  );
}

export default RechargePlans;