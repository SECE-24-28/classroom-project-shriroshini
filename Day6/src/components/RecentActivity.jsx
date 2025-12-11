import React from 'react';

function RecentActivity() {
  const sectionStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
    borderRadius: '24px',
    padding: '2.5rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(20px)',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '2rem',
  };

  const activities = [
    { amount: 299, number: '98765*****', status: 'success', time: '2 hours ago' },
    { amount: 199, number: '87654*****', status: 'success', time: '1 day ago' },
    { amount: 599, number: '76543*****', status: 'pending', time: '2 days ago' },
  ];

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    borderRadius: '18px',
    marginBottom: '1.2rem',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    border: '2px solid rgba(102, 126, 234, 0.1)',
    transition: 'all 0.3s',
  };

  const statusColors = {
    success: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
    pending: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)',
    failed: 'linear-gradient(135deg, #f093fb, #f5576c)',
  };

  const statusStyle = (status) => ({
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    background: statusColors[status],
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: '800',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
  });

  return (
    <div style={sectionStyle}>
      <h3 style={titleStyle}>Recent Recharges</h3>
      {activities.map((activity, index) => (
        <div key={index} style={itemStyle} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';}}>
          <div>
            <div style={{fontWeight: '900', fontSize: '1.3rem', color: '#4A5568', marginBottom: '0.5rem'}}>₹{activity.amount}</div>
            <div style={{fontSize: '1rem', color: '#718096', fontWeight: '600'}}>{activity.number}</div>
          </div>
          <div style={{textAlign: 'right'}}>
            <div style={statusStyle(activity.status)}>{activity.status.toUpperCase()}</div>
            <div style={{fontSize: '0.85rem', color: '#718096', marginTop: '0.5rem', fontWeight: '600'}}>{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;
