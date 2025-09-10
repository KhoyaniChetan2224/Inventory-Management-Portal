const express = require('express');
const router = express.Router();
const { getAdminStats } = require('../controllers/adminController');

// Route: GET /api/admin/stats
router.get('/stats', getAdminStats);

module.exports = router;
