import React, { useState } from "react";
import ManagerHeader from "./ManagerHeader/managerheader";
import { CheckCircle, XCircle, Plus } from "lucide-react";
import { LineChart, Line as RLine, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, Legend as RLegend } from "recharts";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip);

const ManagerEvents = () => {
  const [search, setSearch] = useState("");

  const inventoryData = [
    {
      id: 1,
      name: "Wool Felt Sheets",
      category: "Texture",
      sku: "TS12321",
      incoming: 14,
      price: 15,
      stock: 32,
      value: 200,
      status: "in-stock",
    },
    {
      id: 2,
      name: "Wool Felt Sheets",
      category: "Texture",
      sku: "TS12321",
      incoming: 21,
      price: 0,
      stock: 0,
      value: 90,
      status: "out-stock",
    },
    {
      id: 3,
      name: "Wool Felt Sheets",
      category: "Texture",
      sku: "TS12321",
      incoming: 21,
      price: 15,
      stock: 32,
      value: 200,
      status: "in-stock",
    },
  ];

  const filteredData = inventoryData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    sales: { total: 786, revenue: 17584, cost: 12487, profit: 5097 },
    purchase: { total: 45, cost: 786, cancelled: 4, returned: 7 },
    inventory: { inHand: 214, toReceive: 44 },
    product: { lowStock: 2, groups: 14, total: 104 },
    users: { customers: 1800, suppliers: 27 },
  };

  const lineData = [
    { name: "0", Expense: 10000, Profit: 90000, Purchase:48000, Loss:30000, Sales:70000 },
    { name: "Jan", Expense: 68000, Profit: 44000, Purchase:16000, Loss:89000, Sales:96000 },
    { name: "Feb", Expense: 87000, Profit: 23000, Purchase:38000, Loss:65000, Sales:46000 },
    { name: "Mar", Expense: 64000, Profit: 45000, Purchase:78000, Loss:10000, Sales:89000 },
    { name: "Apr", Expense: 29000, Profit: 13000, Purchase:60000, Loss:80000, Sales:85000 },
    { name: "May", Expense: 48000, Profit: 59000, Purchase:91000, Loss:20000, Sales:30000 },
    { name: "Jun", Expense: 35000, Profit: 74000, Purchase:13000, Loss:90000, Sales:55000 },
    { name: "Jul", Expense: 30000, Profit: 87000, Purchase:50000, Loss:59000, Sales:70000 },
    { name: "Aug", Expense: 23000, Profit: 58000, Purchase:35000, Loss:80000, Sales:90000 },
    { name: "Sep", Expense: 41000, Profit: 69000, Purchase:89000, Loss:95000, Sales:20000 },
    { name: "Oct", Expense: 15000, Profit: 68000, Purchase:37000, Loss:50000, Sales:98000 },
    { name: "Nov", Expense: 89000, Profit: 47000, Purchase:60000, Loss:15000, Sales:28000 },
    { name: "Dec", Expense: 69000, Profit: 95000, Purchase:30000, Loss:58000, Sales:86000 },
  ];

  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <ManagerHeader />
      <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-tr from-white via-slate-50 to-blue-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Inventory Management - Events</h1>
          <input
            type="text"
            placeholder="Search"
            className="border px-4 py-1 rounded"
          />
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="text-gray-500">Categories</h4>
            <p className="text-lg font-bold">Total (17 items)</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="text-gray-500">Total Product</h4>
            <p className="text-lg font-bold">Total 230</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="text-red-500">Low Stock</h4>
            <p className="text-lg font-bold text-red-500">Total (12 items)</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <Plus size={16} /> Add Product
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded shadow mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">SKU</th>
                <th className="px-4 py-2">Incoming</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">In Stock</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full" />
                    {item.name}
                  </td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.sku}</td>
                  <td className="px-4 py-2">{item.incoming}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.stock}</td>
                  <td className="px-4 py-2">${item.value}.00</td>
                  <td className="px-4 py-2">
                    {item.status === "in-stock" ? (
                      <span className="text-green-600 flex items-center gap-1">
                        <CheckCircle size={14} /> In Stock
                      </span>
                    ) : (
                      <span className="text-red-500 flex items-center gap-1">
                        <XCircle size={14} /> Out of Stock
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Sales Overview</h4>
            <p>Total Sales: <strong>{stats.sales.total}</strong></p>
            <p>Revenue: <strong>{stats.sales.revenue}</strong></p>
            <p>Cost: <strong>{stats.sales.cost}</strong></p>
            <p>Profit: <strong>{stats.sales.profit}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Purchase Overview</h4>
            <p>No. of Purchases: <strong>{stats.purchase.total}</strong></p>
            <p>Cost: <strong>{stats.purchase.cost}</strong></p>
            <p>Cancelled Orders: <strong>{stats.purchase.cancelled}</strong></p>
            <p>Returns: <strong>{stats.purchase.returned}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Users</h4>
            <p>Total Customers: <strong>{stats.users.customers}</strong></p>
            <p>Total Suppliers: <strong>{stats.users.suppliers}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Inventory Summary</h4>
            <p>Quantity in Hand: <strong>{stats.inventory.inHand}</strong></p>
            <p>To Receive: <strong>{stats.inventory.toReceive}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Product Details</h4>
            <p>Low Stock Items: <strong>{stats.product.lowStock}</strong></p>
            <p>Item Groups: <strong>{stats.product.groups}</strong></p>
            <p>Total Items: <strong>{stats.product.total}</strong></p>
          </div>
        </div>

        {/* Recharts Line Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-sm text-gray-600 mb-4">Expense vs Profit (Last 12 months)</h3>
          <LineChart width={900} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RTooltip />
            <RLegend />
            <RLine type="monotone" dataKey="Expense" stroke="#f97316" />
            <RLine type="monotone" dataKey="Profit" stroke="#10b981" />
            <RLine type="monotone" dataKey="Purchase" stroke="#3b82f6" />
            <RLine type="monotone" dataKey="Loss" stroke="#db1689" />
            <RLine type="monotone" dataKey="Sales" stroke="#1b38c1" />
          </LineChart>
        </div>
      </main>
    </div>
  );
};

export default ManagerEvents;
