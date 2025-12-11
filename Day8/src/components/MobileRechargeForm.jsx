import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import AmountChips from './AmountChips';
import OperatorDropdown from './OperatorDropdown';
import Notification from './Notification';
import PaymentModal from './PaymentModal';

function MobileRechargeForm() {
  const { theme, colors } = useTheme();
  const { addRecharge } = useUser();
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [amount, setAmount] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const amounts = [199, 299, 399, 599, 799, 999];

  const validateMobile = (number) => {
    const regex = /^[6-9][0-9]{9}$/;
    return regex.test(number);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    if (errors.mobile) {
      setErrors(prev => ({ ...prev, mobile: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateMobile(mobileNumber)) {
      newErrors.mobile = 'Enter valid 10-digit mobile number';
    }
    if (!operator) {
      newErrors.operator = 'Please select an operator';
    }
    if (!amount) {
      newErrors.amount = 'Please select recharge amount';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  const confirmPayment = () => {
    setShowModal(false);

    setLoading(true);
    setTimeout(() => {
      const newRecharge = {
        id: Date.now(),
        amount,
        number: mobileNumber.slice(0, 5) + '*****',
        status: 'success',
        date: 'Just now'
      };
      addRecharge(newRecharge);
      setNotification({ type: 'success', message: `Recharge of ₹${amount} successful!` });
      setMobileNumber('');
      setOperator('');
      setAmount(null);
      setErrors({});
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-xl border-4 transition-all duration-500 ${
      colors.border
    } ${colors.cardBg}`}>
      <h2 className={`text-4xl font-black mb-8 ${colors.text}`}>
        ⚡ Quick Recharge
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={`block text-sm font-bold mb-3 ${colors.text}`}>
            Mobile Number
          </label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleMobileChange}
            placeholder="Enter 10-digit number"
            className={`w-full p-5 rounded-2xl font-bold text-lg transition-all duration-300 border-4 focus:outline-none focus:ring-4 shadow-lg ${
              colors.inputBg
            } ${colors.text} ${
              theme === 'dark' ? 'focus:ring-[#9370DB]' : 'focus:ring-[#FFDAB9]'
            } ${
              errors.mobile ? 'border-red-500 animate-shake' : colors.border
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-2 font-bold animate-fadeIn">
              ⚠️ {errors.mobile}
            </p>
          )}
        </div>

        <OperatorDropdown value={operator} onChange={setOperator} error={errors.operator} />

        <div>
          <label className={`block text-sm font-bold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Select Amount
          </label>
          <AmountChips amounts={amounts} selectedAmount={amount} onSelect={setAmount} />
          {errors.amount && <p className="text-red-500 text-sm mt-2 font-semibold">{errors.amount}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-5 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl ${
            loading
              ? 'bg-gray-400 cursor-not-allowed animate-pulse'
              : theme === 'dark'
              ? 'bg-gradient-to-r from-[#9370DB] to-[#AA98A9] hover:from-[#AA98A9] hover:to-[#5F9EA0] hover:scale-105'
              : 'bg-gradient-to-r from-[#FFDAB9] to-[#B0E0E6] hover:from-[#B0E0E6] hover:to-[#E6E6FA] hover:scale-105'
          } text-white border-4 border-white`}
        >
          {loading ? '⏳ Processing...' : '🚀 Recharge Now'}
        </button>
      </form>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <PaymentModal
        isOpen={showModal}
        onClose={confirmPayment}
        amount={amount}
        mobileNumber={mobileNumber}
      />
    </div>
  );
}

export default MobileRechargeForm;
