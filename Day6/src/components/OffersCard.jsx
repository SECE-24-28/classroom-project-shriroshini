import React from 'react';

function OffersCard() {
  const cardStyle = {
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #f093fb 100%)',
    borderRadius: '24px',
    padding: '2.5rem',
    boxShadow: '0 20px 60px rgba(252, 182, 159, 0.4)',
    marginBottom: '1.5rem',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(10px)',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '1.5rem',
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  const textStyle = {
    color: 'rgba(255, 255, 255, 0.98)',
    fontSize: '1.15rem',
    fontWeight: '700',
    marginBottom: '0.8rem',
  };

  const tipStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '18px',
    padding: '1.5rem',
    marginTop: '1.5rem',
    color: '#4A5568',
    fontSize: '1rem',
    fontWeight: '700',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
  };

  return (
    <div>
      <div style={cardStyle}>
        <h3 style={titleStyle}>🎁 Special Offers</h3>
        <p style={textStyle}>💰 Get 10% Cashback</p>
        <p style={textStyle}>🎯 On recharges above ₹299</p>
        <div style={tipStyle}>
          💡 <strong>Tip:</strong> Recharge during weekends for extra rewards!
        </div>
      </div>
    </div>
  );
}

export default OffersCard;
