import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import QuickRecharge from './components/QuickRecharge';
import PlanCards from './components/PlanCards';
import RecentActivity from './components/RecentActivity';
import OffersCard from './components/OffersCard';

function App() {
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const mainStyle = {
    flex: 1,
    maxWidth: '1600px',
    margin: '2rem auto',
    padding: '0 2rem',
    display: 'flex',
    gap: '2.5rem',
    width: '100%',
  };

  const contentStyle = {
    flex: 1,
  };

  const welcomeStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
    borderRadius: '24px',
    padding: '2rem 2.5rem',
    marginBottom: '2rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(20px)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transform: 'translateY(0)',
    transition: 'all 0.3s ease',
  };

  const welcomeTextStyle = {
    fontSize: '2.2rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const badgeStyle = {
    background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    padding: '0.75rem 1.5rem',
    borderRadius: '30px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '700',
    boxShadow: '0 8px 20px rgba(132, 250, 176, 0.4)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
  };

  const asideStyle = {
    width: '300px',
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <main style={mainStyle}>
        <Sidebar />
        <div style={contentStyle}>
          <div style={welcomeStyle}>
            <div>
              <h2 style={welcomeTextStyle}>Welcome back, User! 👋</h2>
            </div>
            <div style={badgeStyle}>3 successful recharges this month</div>
          </div>
          <QuickRecharge />
          <PlanCards />
          <RecentActivity />
        </div>
        <aside style={asideStyle}>
          <OffersCard />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
