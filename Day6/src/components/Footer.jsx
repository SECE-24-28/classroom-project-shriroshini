import React from 'react';

function Footer() {
  const footerStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
    backdropFilter: 'blur(20px)',
    padding: '3rem 2rem',
    marginTop: 'auto',
    borderTop: '3px solid rgba(102, 126, 234, 0.2)',
    boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.1)',
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.5px',
  };

  const textStyle = {
    color: '#718096',
    fontSize: '1rem',
    fontWeight: '600',
    marginTop: '0.5rem',
  };

  const linksStyle = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  };

  const linkStyle = {
    color: '#4A5568',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    transition: 'all 0.3s',
  };

  const socialStyle = {
    display: 'flex',
    gap: '1rem',
  };

  const iconStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '1.5rem',
    transition: 'all 0.3s',
    border: '3px solid rgba(255, 255, 255, 0.5)',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <div style={logoStyle}>⚡ QuickRecharge</div>
          <p style={textStyle}>© 2025 QuickRecharge. All rights reserved.</p>
        </div>
        <ul style={linksStyle}>
          <li><a href="#privacy" style={linkStyle} onMouseOver={(e) => {e.target.style.color = '#667eea'; e.target.style.transform = 'translateY(-2px)';}} onMouseOut={(e) => {e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)';}}>Privacy</a></li>
          <li><a href="#terms" style={linkStyle} onMouseOver={(e) => {e.target.style.color = '#764ba2'; e.target.style.transform = 'translateY(-2px)';}} onMouseOut={(e) => {e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)';}}>Terms</a></li>
          <li><a href="#contact" style={linkStyle} onMouseOver={(e) => {e.target.style.color = '#f093fb'; e.target.style.transform = 'translateY(-2px)';}} onMouseOut={(e) => {e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)';}}>Contact</a></li>
          <li><a href="#help" style={linkStyle} onMouseOver={(e) => {e.target.style.color = '#f5576c'; e.target.style.transform = 'translateY(-2px)';}} onMouseOut={(e) => {e.target.style.color = '#4A5568'; e.target.style.transform = 'translateY(0)';}}>Help</a></li>
        </ul>
        <div style={socialStyle}>
          <div style={{...iconStyle, background: 'linear-gradient(135deg, #667eea, #764ba2)'}} onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; e.currentTarget.style.boxShadow = 'none';}}>📘</div>
          <div style={{...iconStyle, background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)'}} onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(161, 140, 209, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; e.currentTarget.style.boxShadow = 'none';}}>🐦</div>
          <div style={{...iconStyle, background: 'linear-gradient(135deg, #f093fb, #f5576c)'}} onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 87, 108, 0.5)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; e.currentTarget.style.boxShadow = 'none';}}>📷</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
