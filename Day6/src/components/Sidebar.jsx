import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '2rem',
    width: '260px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
  };

  const titleStyle = {
    fontSize: '1.3rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '2rem',
    textAlign: 'center',
    letterSpacing: '0.5px',
  };

  const menuStyle = {
    listStyle: 'none',
  };

  const createItemStyle = (bgColor, isActive = false) => ({
    padding: '1.2rem 1.5rem',
    marginBottom: '1rem',
    borderRadius: '18px',
    background: isActive ? `linear-gradient(135deg, ${bgColor}, ${bgColor}dd)` : 'transparent',
    color: isActive ? 'white' : '#4A5568',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.05rem',
    border: `2px solid ${isActive ? 'transparent' : bgColor}`,
    boxShadow: isActive ? `0 8px 20px ${bgColor}66` : 'none',
  });

  return (
    <aside style={sidebarStyle}>
      <h3 style={titleStyle}>Menu</h3>
      <ul style={menuStyle}>
        <li style={createItemStyle('#667eea', true)} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateX(8px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';}}>
          <span style={{fontSize: '1.5rem'}}>📱</span> Recharge
        </li>
        <li style={createItemStyle('#a18cd1')} onMouseOver={(e) => {e.currentTarget.style.background = 'linear-gradient(135deg, #a18cd1, #fbc2eb)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(8px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(161, 140, 209, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A5568'; e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = 'none';}}>
          <span style={{fontSize: '1.5rem'}}>💳</span> Plans
        </li>
        <li style={createItemStyle('#84fab0')} onMouseOver={(e) => {e.currentTarget.style.background = 'linear-gradient(135deg, #84fab0, #8fd3f4)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(8px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(132, 250, 176, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A5568'; e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = 'none';}}>
          <span style={{fontSize: '1.5rem'}}>📊</span> History
        </li>
        <li style={createItemStyle('#ffecd2')} onMouseOver={(e) => {e.currentTarget.style.background = 'linear-gradient(135deg, #ffecd2, #fcb69f)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(8px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(252, 182, 159, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A5568'; e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = 'none';}}>
          <span style={{fontSize: '1.5rem'}}>⭐</span> Offers
        </li>
        <li style={createItemStyle('#ffeaa7')} onMouseOver={(e) => {e.currentTarget.style.background = 'linear-gradient(135deg, #ffeaa7, #fdcb6e)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(8px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(253, 203, 110, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A5568'; e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = 'none';}}>
          <span style={{fontSize: '1.5rem'}}>⚙️</span> Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
