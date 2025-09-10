const Order = require('../models/Order');

const getMonthlySales = async (req, res) => {
  try {
    const salesData = await Order.aggregate([
      {
        $match: { status: "Completed" } // Only include completed orders
      },
      {
        $group: {
          _id: { $month: "$createdAt" }, // Group by month number
          totalSales: { $sum: "$totalPrice" }
        }
      },
      {
        $sort: { "_id": 1 } // Sort by month
      }
    ]);

    res.status(200).json({
      success: true,
      data: salesData
    });
  } catch (error) {
    console.error("Error fetching monthly sales:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getMonthlySales };
