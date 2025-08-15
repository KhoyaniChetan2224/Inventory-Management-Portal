import React, { useState, useEffect } from 'react';
import CountUp from "react-countup";
import axios from 'axios';
import { useInView } from "react-intersection-observer";
import AdminHeader from "./AdminHeader/adminheader";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";


const pieData = [
  { name: "Women's Clothing", value: 400000 },
  { name: "Accessories", value: 250000 },
  { name: "Footwear", value: 150000 },
  { name: "Men's Clothing", value: 120000 },
  { name: "Children's Clothing", value: 80000 },
];

const pieColors = ["#A3E635", "#FACC15", "#60A5FA", "#F87171", "#C084FC"];

const lineData = [
  { name: "0", amount: 1400, Profit: 3100, export: 800, import: 2300 },
  { name: "Mon", amount: 3100, Profit: 700, export: 2100, import: 1500 },
  { name: "Tue", amount: 500, Profit: 2200, export: 900, import: 3500 },
  { name: "Wed", amount: 2500, Profit: 1200, export: 2900, import: 900 },
  { name: "Thu", amount: 1100, Profit: 2400, export: 3100, import: 1900 },
  { name: "Fri", amount: 3500, Profit: 2800, export: 1800, import: 1100 },
  { name: "Sat", amount: 1200, Profit: 400, export: 2900, import: 1800 },
  { name: "Sun", amount: 1000, Profit: 3200, export: 1400, import: 2000 },
];

const AdminInventory = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const stats = [
    { title: "Total Products", value: 4892, status: "↑ 12.4%" },
    { title: "Available Stock", value: 2137, status: "↓ 4.1%" },
    { title: "Low Stock", value: 1952, status: "↑ 1.8%" },
    { title: "Out of Stock", value: 803, status: "↓ 2.3%" },
    { title: "Total Orders", value: 10203, status: "↑ 8.6%" },
  ];

  const [formData, setFormData] = useState({
    product: "",
    performance: "",
    stock: "",
    price: "",
    visibility: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  // 📦 Fetch data from DB
  const fetchAdmin = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products`);
      setProducts(response.data);
    } catch (err) {
      console.error('Failed to fetch Admin:', err);
    }
  };

  // 📌 Load data on mount
  useEffect(() => {
    fetchAdmin();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: formData.product,
      review: 4.5,
      performance: formData.performance,
      sold: Math.floor(Math.random() * 1000),
      views: "12.4k",
      stock: Number(formData.stock),
      price: Number(formData.price),
      visibility: formData.visibility === "Visible",
    };

    // Optional: Basic validation
    if (!newProduct.name || !newProduct.performance || !newProduct.stock || !newProduct.price || formData.visibility === "") {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/products`,
        newProduct
      );

      if (response.status === 201) {
        console.log("Product submitted successfully!");
        fetchAdmin(); // refresh list
        setFormData({
          product: "",
          performance: "",
          stock: "",
          price: "",
          visibility: "",
        });
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };


  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <AdminHeader />
   <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
  <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-900 text-center sm:text-left">
    Inventory Management - Inventory Products
  </h1>

  {/* KPI Cards */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
    {stats.map((card, i) => (
      <div
        key={i}
        className="bg-white p-3 sm:p-4 rounded shadow text-center"
      >
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          <CountUp end={card.value} duration={2.5} separator="," />
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">{card.title}</p>
        <p
          className={`text-xs font-semibold ${
            card.status.includes("↓") ? "text-red-500" : "text-green-500"
          }`}
        >
          {card.status}
        </p>
      </div>
    ))}
  </div>

  {/* Charts */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
        Profit by Category
      </h3>
      <PieChart width={265} height={200} className="mx-auto">
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={70}
          dataKey="value"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index]} />
          ))}
        </Pie>
      </PieChart>
      <p className="text-center text-base sm:text-lg font-bold">$1,000,000</p>
    </div>

    <div className="bg-white p-4 rounded shadow lg:col-span-2 overflow-x-auto">
      <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
        Order Summary
      </h3>
      <div className="min-w-[500px]">
        <LineChart width={500} height={200} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#60A5FA" />
          <Line type="monotone" dataKey="Profit" stroke="#10b981" />
          <Line type="monotone" dataKey="export" stroke="#F87171" />
          <Line type="monotone" dataKey="import" stroke="#C084FC" />
        </LineChart>
      </div>
      <p className="text-center text-base sm:text-lg font-bold mt-2">$8,870</p>
    </div>
  </div>

  {/* Admin Product Panel */}
  <h2 className="text-lg sm:text-2xl font-semibold my-4 sm:my-6 underline text-center">
    Admin Product Panel
  </h2>

  <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6"
  >
    <input
      type="text"
      name="product"
      value={formData.product}
      onChange={handleChange}
      placeholder="Product Name"
      className="border border-gray-300 p-2 sm:p-3 rounded shadow-sm"
      required
    />
    <input
      type="text"
      name="performance"
      value={formData.performance}
      onChange={handleChange}
      placeholder="Performance"
      className="border border-gray-300 p-2 sm:p-3 rounded shadow-sm"
      required
    />
    <input
      type="number"
      name="stock"
      value={formData.stock}
      onChange={handleChange}
      placeholder="Stock"
      className="border border-gray-300 p-2 sm:p-3 rounded shadow-sm"
      required
    />
    <input
      type="number"
      name="price"
      value={formData.price}
      onChange={handleChange}
      placeholder="Price"
      className="border border-gray-300 p-2 sm:p-3 rounded shadow-sm"
      required
    />
    <select
      name="visibility"
      value={formData.visibility}
      onChange={handleChange}
      className="border border-gray-300 p-2 sm:p-3 rounded shadow-sm"
      required
    >
      <option value="">Visibility</option>
      <option value="Visible">Visible</option>
      <option value="Hidden">Hidden</option>
    </select>
    <button
      type="submit"
      className="border bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
    >
      + Add Product
    </button>
  </form>

  {/* Product Count Summary */}
  <div
    ref={ref}
    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-6 text-center text-xs sm:text-sm"
  >
    <div>
      <p className="text-gray-500">Active Product</p>
      <p className="text-lg sm:text-xl font-bold">
        {inView ? <CountUp end={products.length} duration={2.5} /> : 0} Product
      </p>
    </div>
    <div>
      <p className="text-gray-500">Winning Product</p>
      <p className="text-lg sm:text-xl font-bold text-gray-900">
        {inView ? <CountUp end={950} duration={3} separator="," /> : "0"} Seater Sofa
      </p>
    </div>
    <div>
      <p className="text-gray-500">Average Performance</p>
      <p className="text-lg sm:text-xl font-bold text-green-500">Good</p>
    </div>
    <div>
      <p className="text-gray-500">Product Sold</p>
      <p className="text-lg sm:text-xl font-bold">
        {inView ? <CountUp end={12340} duration={3} separator="," /> : "0"} Items
      </p>
    </div>
    <div>
      <p className="text-gray-500">Product Returned</p>
      <p className="text-lg sm:text-xl font-bold">
        {inView ? <CountUp end={420} duration={3} separator="," /> : "0"} Items
      </p>
    </div>
  </div>

  {/* Product Table */}
  <div className="overflow-x-auto mt-4 rounded-lg shadow bg-white">
    <table className="w-full text-left text-xs sm:text-sm">
      <thead className="bg-gray-100 text-gray-600 uppercase">
        <tr>
          <th className="px-3 sm:px-4 py-2 sm:py-3">Product</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3">Performance</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3">Stock</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3">Price</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3">Visibility</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="px-3 sm:px-4 py-2 sm:py-3">
              <div className="font-semibold">{p.name}</div>
              <div className="text-[10px] sm:text-xs text-gray-500">
                Review: {p.review}★
              </div>
            </td>
            <td className="px-3 sm:px-4 py-2 sm:py-3">
              <span
                className={`font-semibold text-[10px] sm:text-xs ${
                  p.performance === "Excellent"
                    ? "text-green-600"
                    : p.performance === "Good"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {p.performance}
              </span>
              <div className="text-[10px] sm:text-xs text-gray-400">
                {p.sold} sold • {p.views} views
              </div>
            </td>
            <td className="px-3 sm:px-4 py-2 sm:py-3">{p.stock}</td>
            <td className="px-3 sm:px-4 py-2 sm:py-3">${p.price}</td>
            <td className="px-3 sm:px-4 py-2 sm:py-3">
              <span
                className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded ${
                  p.visibility
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {p.visibility ? "Visible" : "Hidden"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</main>

    </div>
  );
};

export default AdminInventory;
