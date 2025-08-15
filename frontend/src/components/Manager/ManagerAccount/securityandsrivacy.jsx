import React, { useState } from 'react';
import ManagerHeader from '../ManagerHeader/managerheader';

const SecurityAndPrivacy = ({ theme = 'green' }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ''); // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      alert('Please enter a 4-digit OTP.');
      return;
    }
    console.log('Submitted OTP:', enteredOtp);
    // Place your API call here
  };

  const submitStyle =
    theme === 'green'
      ? 'bg-green-600 hover:bg-green-700'
      : 'bg-black hover:bg-gray-900';

  return (
    <div className="flex h-screen bg-green-50 font-sans">
      <ManagerHeader />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 space-y-6">
          <div className="flex justify-center">
            <img
              src={
                theme === 'green'
                  ? 'https://cdn-icons-png.flaticon.com/512/565/565340.png'
                  : 'https://cdn-icons-png.flaticon.com/512/3209/3209382.png'
              }
              alt="OTP"
              className="h-20"
            />
          </div>

          <h2 className="text-center text-xl font-semibold">OTP Verification</h2>
          <p className="text-center text-gray-600 text-sm leading-relaxed">
            Hello Tsstudio,<br />
            Thank you for registering with us. Please type the OTP as shared on your mobile XXXXXXX123.
          </p>

          <div className="flex justify-between gap-2 mt-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 border border-gray-300 rounded text-center text-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            ))}
          </div>

          <div className="text-center text-sm text-gray-600 mt-2">
            OTP not received?{' '}
            <button className="text-blue-500 font-semibold hover:underline">
              RESEND
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full text-white py-2 rounded mt-4 transition duration-200 ${submitStyle}`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityAndPrivacy;
