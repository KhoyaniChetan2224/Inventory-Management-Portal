import React, { useState } from "react";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const sales = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameMsg, setUsernameMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const navigate = useNavigate();

  // ✅ Username validation logic
  const validateUsername = (value) => {
    setUsername(value);
    if (value.length < 3) {
      setUsernameMsg("❌ Username too short");
    } else if (value.length > 10) {
      setUsernameMsg("❌ Username too long");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      setUsernameMsg("❌ Only letters, numbers, and underscores allowed");
    } else {
      setUsernameMsg("✅ Strong Username");
    }
  };

  // ✅ Password validation logic
  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordMsg("❌ Too short");
    } else if (
      !/[A-Z]/.test(value) ||
      !/[0-9]/.test(value) ||
      !/[!@#$%^&*]/.test(value)
    ) {
      setPasswordMsg("❌ Include uppercase, number, and symbol");
    } else {
      setPasswordMsg("✅ Strong Password");
    }
  };

  // ✅ Real-time checklist validation for password
  const passwordValidations = [
    {
      label: "A minimum of 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "At least 1 number",
      valid: /\d/.test(password),
    },
    {
      label: "At least 1 special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
    {
      label: "At least one uppercase letter",
      valid: /[A-Z]/.test(password),
    },
  ];

  // ✅ Login button handler
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "sales" && password === "Sales@123") {
      toast.success("Login successful...!", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/sales/home");
      }, 1000);
    } else {
      toast.error("Invalid username or password", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };



  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 underline uppercase">
            Sales Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Sales Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="sales"
                value={username}
                onChange={(e) => validateUsername(e.target.value)}
                required
              />
              {username && (
                <p
                  className={`text-sm mt-1 ${usernameMsg.includes("✅")
                      ? "text-green-600"
                      : "text-red-600"
                    }`}
                >
                  {usernameMsg}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Sales Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Sales@123"
                value={password}
                maxLength={12}
                minLength={8}
                onChange={(e) => validatePassword(e.target.value)}
                required
              />
              {password && (
                <p
                  className={`text-sm mt-1 ${passwordMsg.includes("✅")
                      ? "text-green-600"
                      : "text-red-600"
                    }`}
                >
                  {passwordMsg}
                </p>
              )}
            </div>

            {/* Password Validation Checklist */}
            <div className="text-xs text-gray-800 space-y-1 pl-1">
              {passwordValidations.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span
                    className={`mr-2 ${item.valid ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {item.valid ? "✓" : "✗"}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default sales;
