const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// POST - Create
router.post('/', salesController.createSale);

// GET - All
router.get('/', salesController.getAllSales);

// GET - One
router.get('/:id', salesController.getSaleById);

// PUT - Update
router.put('/:id', salesController.updateSale);

// DELETE - Remove
router.delete('/:id', salesController.deleteSale);

module.exports = router;
