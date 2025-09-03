const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String },
  otpExpiry: { type: Date }
});

// ✅ Prevent OverwriteModelError on nodemon restarts
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
