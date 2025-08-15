const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventoryProposalController');

// POST - create proposal
router.post('/', controller.createProposal);

// GET - all proposals
router.get('/', controller.getProposals);

// GET - single proposal by ID
router.get('/:id', controller.getProposalById);

// PUT - update proposal
router.put('/:id', controller.updateProposal);

// DELETE - delete proposal
router.delete('/:id', controller.deleteProposal);

module.exports = router;
