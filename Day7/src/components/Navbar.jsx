import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import ThemeToggle from './ThemeToggle';

function Navbar({ userInfo }) {
  const { theme, colors } = useTheme();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const displayUser = userInfo || user;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      colors.navBg
    } border-b-4 ${colors.border} shadow-2xl backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">⚡</span>
            <h1 className={`text-3xl font-black transition-all duration-300 ${
              theme === 'dark' ? 'text-[#C0C0C0]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#9370DB] via-[#E6E6FA] to-[#FFDAB9]'
            }`}>
              QuickRecharge
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className={`font-bold text-lg transition-all hover:scale-110 ${
              colors.text
            } hover:opacity-70`}>
              Home
            </a>
            <a href="#plans" className={`font-bold text-lg transition-all hover:scale-110 ${
              colors.text
            } hover:opacity-70`}>
              Plans
            </a>
            <a href="#history" className={`font-bold text-lg transition-all hover:scale-110 ${
              colors.text
            } hover:opacity-70`}>
              History
            </a>
            
            <ThemeToggle />

            {displayUser.isLoggedIn && (
              <div className={`flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 ${
                theme === 'dark' ? 'bg-[#9370DB]/40' : 'bg-[#E6E6FA]/60'
              } backdrop-blur-md border-2 ${colors.border} shadow-lg`}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFDAB9] to-[#B0E0E6] flex items-center justify-center text-[#36454F] font-black text-xl border-3 border-white shadow-lg">
                  {displayUser.name.charAt(0)}
                </div>
                <span className={`font-bold text-lg ${colors.text}`}>
                  {displayUser.name}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <span className="text-3xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <a href="#home" className="block py-2 font-bold">Home</a>
            <a href="#plans" className="block py-2 font-bold">Plans</a>
            <a href="#history" className="block py-2 font-bold">History</a>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
