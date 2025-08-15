import React, { useState } from "react";
import ManagerHeader from "../ManagerHeader/managerheader";

const ManagerPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const passwordValidations = [
    {
      label: "A minimum of 8 characters",
      valid: form.newPassword.length >= 8,
    },
    {
      label: "At least 1 number",
      valid: /\d/.test(form.newPassword),
    },
    {
      label: "At least 1 special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(form.newPassword),
    },
    {
      label: "At least one uppercase letter",
      valid: /[A-Z]/.test(form.newPassword),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    const allValid = passwordValidations.every((v) => v.valid);
    if (!allValid) {
      alert("New password doesn't meet all requirements.");
      return;
    }

    alert("Password updated successfully (stub)");
    // You can call your backend API here
  };

  return (
    <div className="flex h-screen bg-green-50 font-sans">
      <ManagerHeader />

      <div className="flex justify-center items-center flex-1 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Update Password...!</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Please fill the form below to update your password
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Current Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Current password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="current"
                  value={form.current}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Password Validation */}
            <div className="text-xs text-gray-600 space-y-1 pl-1">
              {passwordValidations.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className={`mr-2 ${item.valid ? "text-green-500" : "text-red-500"}`}>
                    {item.valid ? "✓" : "✗"}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Confirm password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Update Password
            </button>
          </form>

          {/* Forgot Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPassword;
