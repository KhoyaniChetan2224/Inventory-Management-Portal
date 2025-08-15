const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addProduct } = require('../controllers/productController');
const apiKeyMiddleware = require('../middleware/upload');

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// POST /api/products/add
router.post('/add', apiKeyMiddleware, upload.single('image'), addProduct);

module.exports = router;
