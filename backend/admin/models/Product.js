const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  sold: { type: Number, default: 0 },
  available: { type: Boolean, default: true },
  image: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
