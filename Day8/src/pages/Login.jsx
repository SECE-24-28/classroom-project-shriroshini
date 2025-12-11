import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Login() {
  const { theme, colors } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      const success = login(email, password);
      setIsLoading(false);
      
      if (success) {
        navigate('/plans');
      } else {
        setErrors({ general: 'Invalid credentials' });
      }
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-12 transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#FFE4E6] via-[#E8F4FD] to-[#F0F9FF]' 
        : 'bg-gradient-to-br from-[#FFF7ED] via-[#FEF3C7] to-[#ECFDF5]'
    }`}>
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-4 border-white/60 hover:shadow-[0_30px_70px_rgba(244,114,182,0.2)] transition-all duration-700">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent mb-2">
              Welcome Back!
            </h1>
            <p className="text-lg font-semibold text-[#7C3AED]">
              Login to your QuickRecharge account
            </p>
          </div>

          {errors.general && (
            <div className="mb-6 p-4 bg-red-100 border-2 border-red-300 rounded-xl">
              <p className="text-red-600 font-bold text-center">❌ {errors.general}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#7C3AED] mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                  }}
                  className={`w-full p-4 pl-12 rounded-2xl border-3 font-semibold text-lg transition-all duration-500 focus:outline-none focus:ring-4 ${
                    errors.email
                      ? 'border-red-300 bg-red-50'
                      : validateEmail(email) && email
                      ? 'border-green-300 bg-green-50'
                      : 'border-[#F472B6]/50 bg-[#FEF3C7]/30 focus:border-[#A78BFA] focus:ring-[#F472B6]/30 focus:shadow-[0_10px_30px_rgba(244,114,182,0.2)]'
                  }`}
                  placeholder="Enter your email"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                  📧
                </span>
                {email && (
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">
                    {validateEmail(email) ? '✅' : '❌'}
                  </span>
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-[#7C3AED] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                  }}
                  className={`w-full p-4 pl-12 pr-16 rounded-2xl border-3 font-semibold text-lg transition-all duration-500 focus:outline-none focus:ring-4 ${
                    errors.password
                      ? 'border-red-300 bg-red-50'
                      : password.length >= 6
                      ? 'border-green-300 bg-green-50'
                      : 'border-[#F472B6]/50 bg-[#FEF3C7]/30 focus:border-[#A78BFA] focus:ring-[#F472B6]/30 focus:shadow-[0_10px_30px_rgba(244,114,182,0.2)]'
                  }`}
                  placeholder="Enter your password"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                  🔒
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl hover:scale-110 transition-transform"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 text-[#4361EE] rounded focus:ring-[#4361EE]"
                />
                <span className="ml-2 text-sm font-semibold text-[#7C3AED]">
                  Remember me
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-bold text-[#F472B6] hover:text-[#A78BFA] transition-colors duration-300"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-3xl font-black text-xl transition-all duration-500 shadow-2xl ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#F472B6] to-[#A78BFA] hover:from-[#A78BFA] hover:to-[#F472B6] hover:scale-105 hover:shadow-[0_20px_50px_rgba(244,114,182,0.4)]'
              } text-white`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span> Logging in...
                </span>
              ) : (
                '🚀 Login to Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#7C3AED] font-semibold">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-[#F472B6] font-black hover:text-[#A78BFA] transition-colors duration-300"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;