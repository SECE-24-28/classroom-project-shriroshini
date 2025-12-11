import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-4 rounded-2xl transition-all duration-500 transform ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-yellow-300 to-orange-300 text-gray-900 shadow-yellow-300/50'
          : 'bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-purple-400/50'
      } shadow-2xl hover:scale-110 hover:rotate-12 active:scale-95`}
      aria-label="Toggle theme"
    >
      <span className="text-3xl block transition-transform duration-500 ${
        theme === 'dark' ? 'rotate-180' : 'rotate-0'
      }">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
}

export default ThemeToggle;
