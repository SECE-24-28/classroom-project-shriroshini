import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { useUser } from './context/UserContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import UserGreeting from './components/UserGreeting';
import MobileRechargeForm from './components/MobileRechargeForm';
import PlanGrid from './components/PlanGrid';
import RechargeHistory from './components/RechargeHistory';
import InteractiveToggles from './components/InteractiveToggles';

function App() {
  const { theme, colors } = useTheme();
  const { user } = useUser();
  const [activePage, setActivePage] = useState('recharge');

  const plans = [
    { id: 1, price: 199, validity: '28 days', data: '1.5GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '🚀', badge: 'Best Value' },
    { id: 2, price: 299, validity: '28 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '⭐', badge: 'Most Popular' },
    { id: 3, price: 399, validity: '56 days', data: '2GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '👑', badge: 'Trending' },
    { id: 4, price: 599, validity: '84 days', data: '3GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '💎' },
    { id: 5, price: 799, validity: '84 days', data: '4GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '💼' },
    { id: 6, price: 999, validity: '365 days', data: '5GB/day', calls: 'Unlimited', features: '100 SMS/day, Free roaming', icon: '🏢' },
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#483D8B] via-[#36454F] to-[#5F9EA0]' 
        : 'bg-gradient-to-br from-[#FFFFF0] via-[#E6E6FA] to-[#B0E0E6]'
    }`}>
      <Navbar userInfo={user} />
      
      <div className="flex max-w-7xl mx-auto px-6 py-8 gap-6">
        <Sidebar activePage={activePage} />
        
        <main className="flex-1">
          <UserGreeting 
            name={user.name} 
            balance={user.balance} 
            isLoggedIn={user.isLoggedIn}
            loginTime="2 hours ago"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <MobileRechargeForm />
            <InteractiveToggles />
          </div>

          <div className="mb-8">
            <RechargeHistory />
          </div>

          <PlanGrid plans={plans} />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
