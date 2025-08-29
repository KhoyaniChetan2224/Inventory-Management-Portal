const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    company: { type: String },
    city: { type: String },
    bio: { type: String, maxlength: 500 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
