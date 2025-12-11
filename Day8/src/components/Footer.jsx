import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`mt-12 py-8 ${
      theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    } border-t-2`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <p className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              QuickRecharge
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#privacy" className={`font-semibold hover:scale-110 transition-transform ${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'
            }`}>
              Privacy
            </a>
            <a href="#terms" className={`font-semibold hover:scale-110 transition-transform ${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'
            }`}>
              Terms
            </a>
            <a href="#contact" className={`font-semibold hover:scale-110 transition-transform ${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'
            }`}>
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
              📘
            </button>
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
              📷
            </button>
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
              🐦
            </button>
          </div>
        </div>

        <p className={`text-center mt-6 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
          © 2025 QuickRecharge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
