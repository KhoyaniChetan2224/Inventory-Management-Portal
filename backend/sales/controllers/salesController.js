const Sales = require('../models/sales.model');

// Create new sales entry
exports.createSale = async (req, res) => {
  try {
    const sale = new Sales(req.body);
    const savedSale = await sale.save();
    res.status(201).json(savedSale);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all sales
exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sales.find();
    res.status(200).json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single sale by ID
exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sales.findById(req.params.id);
    if (!sale) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(sale);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update sale
exports.updateSale = async (req, res) => {
  try {
    const updatedSale = await Sales.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedSale);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete sale
exports.deleteSale = async (req, res) => {
  try {
    await Sales.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
