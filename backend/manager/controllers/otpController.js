const User = require("../models/User");

// Generate 6-digit OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// 📌 Resend OTP function
const resendOtp = async (req, res) => {
  try {
    const { email, apiKey } = req.body;

    // ✅ Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // ✅ Generate OTP
    const otp = generateOtp();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // valid for 5 min

    // ✅ Save OTP in DB
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // ✅ Respond with OTP (in real app → send via Email/SMS)
    return res.json({
      success: true,
      message: "OTP resent successfully",
      otp // ⚠️ only for testing, remove in production
    });

  } catch (error) {
    console.error("Resend OTP Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { resendOtp };
