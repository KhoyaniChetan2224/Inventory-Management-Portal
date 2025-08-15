const Product = require("../models/admin.models");

// Create new product
const createProduct = async (req, res) => {
  try {
    const { name, performance, stock, price, visibility } = req.body;

    const newProduct = new Product({
      name,
      performance,
      stock,
      price,
      visibility: visibility === "Visible" ? true : false,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product created", product: savedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

module.exports = { createProduct, getAllProducts };
