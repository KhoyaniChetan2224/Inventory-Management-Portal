const express = require("express");
const { resendOtp } = require("../controllers/otpController");

const router = express.Router();

// Route: POST /api/resend-otp
router.post("/resend-otp", resendOtp);

module.exports = router;
