const Product = require('../models/Productid');
const Order = require('../models/Order');

const getAdminStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();

    // Total Stock = sum of stock in all products
    const stockData = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalStock: { $sum: "$stock" },
          outOfStock: { $sum: { $cond: [{ $eq: ["$stock", 0] }, 1, 0] } }
        }
      }
    ]);

    const totalStock = stockData.length > 0 ? stockData[0].totalStock : 0;
    const outOfStock = stockData.length > 0 ? stockData[0].outOfStock : 0;

    res.status(200).json({
      success: true,
      totalProducts,
      totalOrders,
      totalStock,
      outOfStock
    });
  } catch (error) {
    console.error("Admin stats error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getAdminStats };
