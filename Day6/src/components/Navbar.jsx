import React from 'react';

function Navbar() {
  const navStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    padding: '1.2rem 2.5rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '2.2rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
    textShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#4A5568',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.05rem',
    transition: 'all 0.3s',
    cursor: 'pointer',
    padding: '0.7rem 1.3rem',
    borderRadius: '12px',
  };

  const avatarStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(245, 87, 108, 0.4)',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>⚡ QuickRecharge</h1>
        <ul style={navLinksStyle}>
          <li><a href="#home" style={linkStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'; e.target.style.color = 'white'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none';}}>Home</a></li>
          <li><a href="#recharge" style={linkStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #84fab0, #8fd3f4)'; e.target.style.color = 'white'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 20px rgba(132, 250, 176, 0.4)';}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none';}}>Recharge</a></li>
          <li><a href="#plans" style={linkStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #a18cd1, #fbc2eb)'; e.target.style.color = 'white'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 20px rgba(161, 140, 209, 0.4)';}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none';}}>Plans</a></li>
          <li><a href="#history" style={linkStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #ffecd2, #fcb69f)'; e.target.style.color = 'white'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 20px rgba(252, 182, 159, 0.4)';}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none';}}>History</a></li>
          <li><a href="#profile" style={linkStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #ffeaa7, #fdcb6e)'; e.target.style.color = 'white'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 20px rgba(253, 203, 110, 0.4)';}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none';}}>Profile</a></li>
          <li><div style={avatarStyle} onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1) rotate(0deg)';}}>👤</div></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
