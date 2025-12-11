import React from 'react';

function QuickRecharge() {
  const cardStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    borderRadius: '24px',
    padding: '2.5rem',
    boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
    marginBottom: '2rem',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
  };

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle = {
    width: '100%',
    padding: '1.2rem 1.5rem',
    borderRadius: '16px',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    fontSize: '1.1rem',
    marginBottom: '1.2rem',
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#4A5568',
    fontWeight: '600',
    transition: 'all 0.3s',
  };

  const chipsContainerStyle = {
    display: 'flex',
    gap: '0.8rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  };

  const chipStyle = {
    padding: '1rem 2rem',
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.95)',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    fontWeight: '800',
    fontSize: '1.1rem',
    color: '#4A5568',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '1.3rem',
    borderRadius: '16px',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '900',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>
        <span>⚡</span> Quick Recharge
      </h2>
      <input type="tel" placeholder="Enter Mobile Number" style={inputStyle} maxLength="10" />
      <select style={inputStyle}>
        <option>Select Operator</option>
        <option>Airtel</option>
        <option>Jio</option>
        <option>Vi</option>
        <option>BSNL</option>
      </select>
      <div style={chipsContainerStyle}>
        <button style={chipStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #ffecd2, #fcb69f)'; e.target.style.transform = 'scale(1.1)'; e.target.style.color = 'white'; e.target.style.boxShadow = '0 8px 25px rgba(252, 182, 159, 0.5)';}} onMouseOut={(e) => {e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'scale(1)'; e.target.style.color = '#4A5568'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';}}>₹199</button>
        <button style={chipStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #ffeaa7, #fdcb6e)'; e.target.style.transform = 'scale(1.1)'; e.target.style.color = 'white'; e.target.style.boxShadow = '0 8px 25px rgba(253, 203, 110, 0.5)';}} onMouseOut={(e) => {e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'scale(1)'; e.target.style.color = '#4A5568'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';}}>₹299</button>
        <button style={chipStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #a18cd1, #fbc2eb)'; e.target.style.transform = 'scale(1.1)'; e.target.style.color = 'white'; e.target.style.boxShadow = '0 8px 25px rgba(161, 140, 209, 0.5)';}} onMouseOut={(e) => {e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'scale(1)'; e.target.style.color = '#4A5568'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';}}>₹399</button>
        <button style={chipStyle} onMouseOver={(e) => {e.target.style.background = 'linear-gradient(135deg, #84fab0, #8fd3f4)'; e.target.style.transform = 'scale(1.1)'; e.target.style.color = 'white'; e.target.style.boxShadow = '0 8px 25px rgba(132, 250, 176, 0.5)';}} onMouseOut={(e) => {e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'scale(1)'; e.target.style.color = '#4A5568'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';}}>₹599</button>
      </div>
      <button style={buttonStyle} onMouseOver={(e) => {e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 15px 40px rgba(245, 87, 108, 0.6)';}} onMouseOut={(e) => {e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 30px rgba(245, 87, 108, 0.4)';}}>
        Recharge Now 🚀
      </button>
    </div>
  );
}

export default QuickRecharge;
