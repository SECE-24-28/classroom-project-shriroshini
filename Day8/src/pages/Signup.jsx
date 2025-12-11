import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Signup() {
  const { theme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: 'Shri',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^[6-9][0-9]{9}$/.test(mobile);
  
  const getPasswordStrength = (password) => {
    if (password.length < 6) return { strength: 'weak', color: 'red', text: 'Weak' };
    if (password.length < 8) return { strength: 'medium', color: 'yellow', text: 'Medium' };
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)) {
      return { strength: 'strong', color: 'green', text: 'Strong' };
    }
    return { strength: 'medium', color: 'yellow', text: 'Medium' };
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = 'Enter valid 10-digit mobile number starting with 6-9';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!acceptTerms) {
      newErrors.terms = 'Please accept terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      login(formData.email, formData.password);
      setIsLoading(false);
      navigate('/');
    }, 2000);
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-12 transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#FFE4E6] via-[#E8F4FD] to-[#F0F9FF]' 
        : 'bg-gradient-to-br from-[#FFF7ED] via-[#FEF3C7] to-[#ECFDF5]'
    }`}>
      <div className="w-full max-w-lg">
        <div className="bg-white/95 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-4 border-white/60 hover:shadow-[0_30px_70px_rgba(244,114,182,0.2)] transition-all duration-700">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-[#F472B6] to-[#A78BFA] bg-clip-text text-transparent mb-2">
              Join QuickRecharge!
            </h1>
            <p className="text-lg font-semibold text-[#7C3AED]">
              Create your account and start recharging
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-[#7C3AED] mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full p-4 pl-12 rounded-2xl border-3 font-semibold text-lg transition-all duration-500 focus:outline-none focus:ring-4 ${
                    errors.fullName
                      ? 'border-red-300 bg-red-50'
                      : formData.fullName.trim()
                      ? 'border-green-300 bg-green-50'
                      : 'border-[#F472B6]/50 bg-[#FEF3C7]/30 focus:border-[#A78BFA] focus:ring-[#F472B6]/30 focus:shadow-[0_10px_30px_rgba(244,114,182,0.2)]'
                  }`}
                  placeholder="Enter your full name"
                  autoFocus
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">👤</span>
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-[#7C3AED] mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full p-4 pl-12 pr-16 rounded-2xl border-3 font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 ${
                    errors.email
                      ? 'border-red-300 bg-red-50'
                      : validateEmail(formData.email) && formData.email
                      ? 'border-green-300 bg-green-50'
                      : 'border-[#8B5CF6]/50 bg-[#F8FAFC] focus:border-[#6366F1] focus:ring-[#8B5CF6]/30'
                  }`}
                  placeholder="Enter your email"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">📧</span>
                {formData.email && (
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">
                    {validateEmail(formData.email) ? '✅' : '❌'}
                  </span>
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.email}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-bold text-[#7C3AED] mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className={`w-full p-4 pl-12 pr-16 rounded-2xl border-3 font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 ${
                    errors.mobile
                      ? 'border-red-300 bg-red-50'
                      : validateMobile(formData.mobile)
                      ? 'border-green-300 bg-green-50'
                      : 'border-[#8B5CF6]/50 bg-[#F8FAFC] focus:border-[#6366F1] focus:ring-[#8B5CF6]/30'
                  }`}
                  placeholder="Enter 10-digit mobile number"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">📱</span>
                {formData.mobile && (
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">
                    {validateMobile(formData.mobile) ? '✅' : '❌'}
                  </span>
                )}
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.mobile}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-[#7C3AED] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full p-4 pl-12 rounded-2xl border-3 font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 ${
                    errors.password
                      ? 'border-red-300 bg-red-50'
                      : formData.password.length >= 6
                      ? 'border-green-300 bg-green-50'
                      : 'border-[#8B5CF6]/50 bg-[#F8FAFC] focus:border-[#6366F1] focus:ring-[#8B5CF6]/30'
                  }`}
                  placeholder="Create a strong password"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">🔒</span>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          passwordStrength.color === 'red' ? 'bg-red-300 w-1/3' :
                          passwordStrength.color === 'yellow' ? 'bg-yellow-300 w-2/3' :
                          'bg-green-300 w-full'
                        }`}
                      />
                    </div>
                    <span className={`text-sm font-bold ${
                      passwordStrength.color === 'red' ? 'text-red-500' :
                      passwordStrength.color === 'yellow' ? 'text-yellow-600' :
                      'text-green-500'
                    }`}>
                      {passwordStrength.text}
                    </span>
                  </div>
                </div>
              )}
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-bold text-[#7C3AED] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`w-full p-4 pl-12 pr-16 rounded-2xl border-3 font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 ${
                    errors.confirmPassword
                      ? 'border-red-300 bg-red-50'
                      : formData.confirmPassword && formData.password === formData.confirmPassword
                      ? 'border-green-300 bg-green-50'
                      : 'border-[#8B5CF6]/50 bg-[#F8FAFC] focus:border-[#6366F1] focus:ring-[#8B5CF6]/30'
                  }`}
                  placeholder="Confirm your password"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">🔐</span>
                {formData.confirmPassword && (
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">
                    {formData.password === formData.confirmPassword ? '✅' : '❌'}
                  </span>
                )}
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-5 h-5 text-[#4361EE] rounded focus:ring-[#4361EE] mt-1"
                />
                <span className="text-sm font-semibold text-[#4F46E5]">
                  I accept the{' '}
                  <Link to="/terms" className="text-[#6366F1] hover:text-[#8B5CF6] font-bold">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-[#6366F1] hover:text-[#8B5CF6] font-bold">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.terms && (
                <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {errors.terms}</p>
              )}
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
                  <span className="animate-spin">⏳</span> Creating Account...
                </span>
              ) : (
                '🎉 Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#7C3AED] font-semibold">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#F472B6] font-black hover:text-[#A78BFA] transition-colors duration-300"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;