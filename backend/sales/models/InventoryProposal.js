const mongoose = require('mongoose');

const InventoryProposalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chanceToClose: { type: String, required: true },
  estimatedBudget: { type: String, required: true },
  amount: { type: String, required: true },
  duration: { type: String, required: true },
  revenue: { type: String, required: true },
  contactName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  description: { type: String },
  notes: { type: String },
  isRejected: { type: Boolean, default: false },
  rejectionReason: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('InventoryProposal', InventoryProposalSchema);
