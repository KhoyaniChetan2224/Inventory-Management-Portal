const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chanceToClose: { type: Number, required: true }, // percentage
  estimatedBudget: { type: Number, required: true },
  type: { type: String, enum: ['Product', 'Service', 'Subscription'], required: true },
  duration: { type: String, required: true },
  contactName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  description: { type: String },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Sales', SalesSchema);
