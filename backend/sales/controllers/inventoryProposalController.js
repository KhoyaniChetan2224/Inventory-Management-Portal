const InventoryProposal = require('../models/InventoryProposal');

// Create a new proposal
exports.createProposal = async (req, res) => {
  try {
    const newProposal = new InventoryProposal(req.body);
    await newProposal.save();
    res.status(201).json({ success: true, message: 'Proposal created successfully', data: newProposal });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating proposal', error });
  }
};

// Get all proposals
exports.getProposals = async (req, res) => {
  try {
    const proposals = await InventoryProposal.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: proposals });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching proposals', error });
  }
};

// Get single proposal by ID
exports.getProposalById = async (req, res) => {
  try {
    const proposal = await InventoryProposal.findById(req.params.id);
    if (!proposal) return res.status(404).json({ success: false, message: 'Proposal not found' });
    res.status(200).json({ success: true, data: proposal });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching proposal', error });
  }
};

// Update a proposal
exports.updateProposal = async (req, res) => {
  try {
    const updatedProposal = await InventoryProposal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ success: true, message: 'Proposal updated', data: updatedProposal });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating proposal', error });
  }
};

// Delete a proposal
exports.deleteProposal = async (req, res) => {
  try {
    await InventoryProposal.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Proposal deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting proposal', error });
  }
};
