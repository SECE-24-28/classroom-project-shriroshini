import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const { theme, colors } = useTheme();
  const { isLoggedIn, user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      colors.navBg
    } border-b-4 ${colors.border} shadow-2xl backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="text-4xl">⚡</span>
            <h1 className={`text-3xl font-black transition-all duration-300 ${
              theme === 'dark' ? 'text-[#C0C0C0]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#4361EE] via-[#7209B7] to-[#4CC9F0]'
            }`}>
              QuickRecharge
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`font-bold text-lg transition-all hover:scale-110 px-3 py-2 rounded-xl ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-[#4361EE] to-[#7209B7] text-white'
                  : `${colors.text} hover:bg-white/20`
              }`}
            >
              🏠 Home
            </Link>
            <Link
              to="/plans"
              className={`font-bold text-lg transition-all hover:scale-110 px-3 py-2 rounded-xl ${
                isActive('/plans') 
                  ? 'bg-gradient-to-r from-[#4361EE] to-[#7209B7] text-white'
                  : `${colors.text} hover:bg-white/20`
              }`}
            >
              📱 Plans
            </Link>
            
            <ThemeToggle />

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 ${
                  theme === 'dark' ? 'bg-[#9370DB]/40' : 'bg-[#E6E6FA]/60'
                } backdrop-blur-md border-2 ${colors.border} shadow-lg`}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4361EE] to-[#7209B7] flex items-center justify-center text-white font-black text-xl border-3 border-white shadow-lg">
                    {user.name.charAt(0)}
                  </div>
                  <span className={`font-bold text-lg ${colors.text}`}>
                    Welcome, {user.name}!
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  🚪 Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className={`font-bold text-lg transition-all hover:scale-110 px-4 py-2 rounded-xl ${
                    isActive('/login') 
                      ? 'bg-gradient-to-r from-[#4361EE] to-[#7209B7] text-white'
                      : `${colors.text} hover:bg-white/20`
                  }`}
                >
                  🔑 Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-gradient-to-r from-[#7209B7] to-[#4CC9F0] text-white font-black rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  ✨ Signup
                </Link>
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
            <Link to="/" className="block py-2 font-bold">🏠 Home</Link>
            <Link to="/plans" className="block py-2 font-bold">📱 Plans</Link>
            {!isLoggedIn && (
              <>
                <Link to="/login" className="block py-2 font-bold">🔑 Login</Link>
                <Link to="/signup" className="block py-2 font-bold">✨ Signup</Link>
              </>
            )}
            {isLoggedIn && (
              <button onClick={logout} className="block py-2 font-bold text-red-500">
                🚪 Logout
              </button>
            )}
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
