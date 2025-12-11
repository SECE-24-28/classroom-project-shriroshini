import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themeColors = {
  light: {
    background: 'bg-[#FFFFF0]/95',
    primary: 'bg-[#E6E6FA]',
    secondary: 'bg-[#F5FFFA]',
    accent1: 'bg-[#FFDAB9]',
    accent2: 'bg-[#B0E0E6]',
    text: 'text-[#36454F]',
    cardBg: 'bg-white/90',
    inputBg: 'bg-[#F5FFFA]',
    border: 'border-[#E6E6FA]',
    navBg: 'bg-gradient-to-r from-[#E6E6FA] via-[#FFDAB9] to-[#B0E0E6]',
  },
  dark: {
    background: 'bg-[#483D8B]/90',
    primary: 'bg-[#9370DB]',
    secondary: 'bg-[#483D8B]',
    accent1: 'bg-[#AA98A9]',
    accent2: 'bg-[#5F9EA0]',
    text: 'text-[#C0C0C0]',
    cardBg: 'bg-[#483D8B]/80',
    inputBg: 'bg-[#9370DB]/30',
    border: 'border-[#9370DB]',
    navBg: 'bg-gradient-to-r from-[#483D8B] via-[#9370DB] to-[#5F9EA0]',
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const colors = themeColors[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
