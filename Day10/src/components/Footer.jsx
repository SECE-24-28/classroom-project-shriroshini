import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Zap, CreditCard, Signal, Battery } from 'lucide-react';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`mt-12 py-8 ${
      theme === 'dark' ? 'bg-[#3A0713] border-[#8B2635]' : 'bg-[#FCE7EB] border-[#E4A5B8]'
    } border-t-2`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            <p className={`font-bold text-xl ${theme === 'dark' ? 'text-[#F8D8E0]' : 'text-[#3A0713]'}`}>
              QuickRecharge
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#privacy" className={`font-semibold hover:scale-110 transition-transform ${
              theme === 'dark' ? 'text-[#E4A5B8] hover:text-[#F8D8E0]' : 'text-[#8B2635] hover:text-[#C53030]'
            }`}>
              Privacy
            </a>
            <a href="#terms" className={`font-semibold hover:scale-110 transition-transform ${
              theme === 'dark' ? 'text-[#E4A5B8] hover:text-[#F8D8E0]' : 'text-[#8B2635] hover:text-[#C53030]'
            }`}>
              Terms
            </a>
            <a href="#contact" className={`font-semibold hover:scale-110 transition-transform ${
              theme === 'dark' ? 'text-[#E4A5B8] hover:text-[#F8D8E0]' : 'text-[#8B2635] hover:text-[#C53030]'
            }`}>
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B2635] to-[#C53030] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
              <CreditCard className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C53030] to-[#E4A5B8] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
              <Signal className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E4A5B8] to-[#F8D8E0] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
              <Battery className="w-6 h-6" />
            </button>
          </div>
        </div>

        <p className={`text-center mt-6 ${theme === 'dark' ? 'text-[#E4A5B8]' : 'text-[#8B2635]'}`}>
          © 2025 QuickRecharge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
