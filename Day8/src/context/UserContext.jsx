import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Shri',
    email: 'shri@example.com',
    balance: 1250,
    isLoggedIn: true
  });

  const [recharges, setRecharges] = useState([
    { id: 1, amount: 299, number: '98765*****', status: 'success', date: '2 hours ago' },
    { id: 2, amount: 199, number: '87654*****', status: 'success', date: '1 day ago' },
    { id: 3, amount: 599, number: '76543*****', status: 'pending', date: '2 days ago' }
  ]);

  const addRecharge = (recharge) => {
    setRecharges(prev => [recharge, ...prev]);
  };

  return (
    <UserContext.Provider value={{ user, setUser, recharges, addRecharge }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
