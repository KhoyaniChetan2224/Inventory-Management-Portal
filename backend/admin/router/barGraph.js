const express = require('express');
const router = express.Router();
const { getMonthlySales } = require('../controllers/barGraphController');
const authenticate = require('../middleware/auth');

// GET /api/bar-graph/monthly-sales
router.get('/monthly-sales', authenticate, getMonthlySales);

module.exports = router;
