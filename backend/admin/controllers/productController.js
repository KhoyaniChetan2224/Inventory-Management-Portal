const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const { productId, productName, price, size, sold, available } = req.body;
    const image = req.file?.filename;

    if (!image) {
      return res.status(400).json({ message: 'Image upload required' });
    }

    const newProduct = new Product({
      productId,
      productName,
      price,
      size,
      sold,
      available: available === 'true' || available === true,
      image,
    });

    const saved = await newProduct.save();
    res.status(201).json({ message: 'Product added', product: saved });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
