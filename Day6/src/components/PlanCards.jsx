import React from 'react';

function PlanCards() {
  const sectionStyle = {
    marginBottom: '2rem',
  };

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '2rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  };

  const plans = [
    { price: 199, validity: '28 days', data: '1.5GB/day', calls: 'Unlimited', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', badge: false },
    { price: 299, validity: '28 days', data: '2GB/day', calls: 'Unlimited', bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', badge: true },
    { price: 399, validity: '56 days', data: '2GB/day', calls: 'Unlimited', bg: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', badge: false },
    { price: 599, validity: '84 days', data: '3GB/day', calls: 'Unlimited', bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', badge: false },
  ];

  const cardStyle = (bg) => ({
    background: bg,
    borderRadius: '24px',
    padding: '2.5rem',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s',
    cursor: 'pointer',
    position: 'relative',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
  });

  const badgeStyle = {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    fontSize: '0.85rem',
    fontWeight: '900',
    boxShadow: '0 8px 20px rgba(245, 87, 108, 0.4)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
  };

  const priceStyle = {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '1rem',
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  const detailStyle = {
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: '0.8rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '1.2rem',
    borderRadius: '16px',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    background: 'white',
    color: '#4A5568',
    fontWeight: '900',
    fontSize: '1.05rem',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'all 0.3s',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>🔥 Popular Plans for You</h2>
      <div style={gridStyle}>
        {plans.map((plan, index) => (
          <div key={index} style={cardStyle(plan.bg)} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 25px 70px rgba(0, 0, 0, 0.25)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.15)';}}>
            {plan.badge && <span style={badgeStyle}>⭐ Most Popular</span>}
            <div style={priceStyle}>₹{plan.price}</div>
            <div style={detailStyle}>📅 {plan.validity}</div>
            <div style={detailStyle}>📊 {plan.data}</div>
            <div style={detailStyle}>📞 {plan.calls} Calls</div>
            <button style={buttonStyle} onMouseOver={(e) => {e.target.style.background = plan.bg; e.target.style.color = 'white'; e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';}} onMouseOut={(e) => {e.target.style.background = 'white'; e.target.style.color = '#4A5568'; e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';}}>
              Select Plan →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanCards;
