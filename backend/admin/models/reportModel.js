// models/reporting.model.js
const mongoose = require("mongoose");

const reportingSchema = new mongoose.Schema({
  reportId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ["Open", "In Progress", "Closed"], required: true }
}, { timestamps: true });

module.exports = mongoose.model("Reporting", reportingSchema);
