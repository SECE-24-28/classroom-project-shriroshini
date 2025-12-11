import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PlanCard from '../components/PlanCard';

function LandingPage() {
  const { theme, colors } = useTheme();

  const featuredPlans = [
    { id: 1, price: 199, validity: '28 days', data: '1.5GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '🚀', badge: 'Best Value' },
    { id: 2, price: 299, validity: '28 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '⭐', badge: 'Most Popular' },
    { id: 3, price: 399, validity: '56 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '👑', badge: 'Trending' }
  ];

  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Instant recharges in seconds' },
    { icon: '🔒', title: 'Secure Payments', desc: 'Bank-grade security' },
    { icon: '💰', title: 'Best Cashback', desc: 'Up to 10% cashback on every recharge' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#FFE4E6] via-[#E8F4FD] to-[#F0F9FF]' 
        : 'bg-gradient-to-br from-[#FFF7ED] via-[#FEF3C7] to-[#ECFDF5]'
    }`}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-7xl font-black bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent mb-6 drop-shadow-2xl animate-pulse">
            Welcome to QuickRecharge
          </h1>
          <p className="text-3xl font-bold text-[#7C3AED] mb-12 drop-shadow-lg">
            Lightning-fast mobile recharges with best offers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/signup"
              className="px-12 py-6 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-110 hover:shadow-[0_20px_50px_rgba(244,114,182,0.4)] transition-all duration-500 border-4 border-white/70 backdrop-blur-sm"
            >
              🚀 Get Started
            </Link>
            <Link
              to="/plans"
              className="px-12 py-6 bg-gradient-to-r from-[#FEF3C7]/95 to-[#ECFDF5]/95 backdrop-blur-xl text-[#7C3AED] font-black text-2xl rounded-3xl border-4 border-[#F472B6]/40 hover:scale-110 hover:shadow-[0_20px_50px_rgba(167,139,250,0.3)] transition-all duration-500"
            >
              📱 View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent mb-16 drop-shadow-lg">
            Why Choose QuickRecharge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl backdrop-blur-xl border-4 border-white/60 shadow-2xl hover:scale-105 hover:shadow-[0_25px_60px_rgba(244,114,182,0.2)] transition-all duration-500 ${
                  theme === 'dark' ? 'bg-gradient-to-br from-[#FEF3C7]/80 to-[#ECFDF5]/80' : 'bg-gradient-to-br from-[#FFFFFF]/90 to-[#FEF3C7]/70'
                }`}
              >
                <div className="text-6xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-black text-[#7C3AED] mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-lg font-semibold text-[#8B5A96] text-center">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plans Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent mb-16 drop-shadow-lg">
            🔥 Featured Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPlans.map(plan => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/plans"
              className="px-10 py-4 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white font-black text-xl rounded-3xl shadow-2xl hover:scale-110 hover:shadow-[0_20px_50px_rgba(244,114,182,0.4)] transition-all duration-500"
            >
              View All Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`p-12 rounded-3xl backdrop-blur-xl border-4 border-white/60 shadow-2xl hover:shadow-[0_30px_70px_rgba(167,139,250,0.3)] transition-all duration-700 ${
            theme === 'dark' ? 'bg-gradient-to-br from-[#FEF3C7]/85 to-[#ECFDF5]/85' : 'bg-gradient-to-br from-[#FFFFFF]/90 to-[#FEF3C7]/80'
          }`}>
            <h2 className="text-4xl font-black bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent mb-6">
              Ready to Start Recharging?
            </h2>
            <p className="text-xl font-semibold text-[#7C3AED] mb-8">
              Join thousands of satisfied customers and experience the fastest recharge service!
            </p>
            <Link
              to="/login"
              className="px-12 py-6 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-110 hover:shadow-[0_20px_50px_rgba(244,114,182,0.4)] transition-all duration-500 border-4 border-white/70 backdrop-blur-sm animate-pulse"
            >
              ✨ Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;