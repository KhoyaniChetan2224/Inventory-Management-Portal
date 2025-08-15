import React from "react";
import CountUp from "react-countup";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AdminHeader from "./AdminHeader/adminheader";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#ffbb28", "#00C49F"];

const pieData = [
  { name: "Sold Units", value: 18 },
  { name: "Total Units", value: 30 },
  { name: "Total Revenue", value: 2 },
  { name: "Total Profit", value: 24 },
  { name: "Total Expenses", value: 9 },
  { name: "Total Inventory", value: 17 },
];

const lineData = [
  { name: "0", Expense: 10000, Profit: 90000 },
  { name: "Jan", Expense: 68000, Profit: 44000 },
  { name: "Feb", Expense: 87000, Profit: 23000 },
  { name: "Mar", Expense: 64000, Profit: 45000 },
  { name: "Apr", Expense: 29000, Profit: 13000 },
  { name: "May", Expense: 48000, Profit: 59000 },
  { name: "Jun", Expense: 35000, Profit: 74000 },
  { name: "Jul", Expense: 30000, Profit: 87000 },
  { name: "Aug", Expense: 23000, Profit: 58000 },
  { name: "Sep", Expense: 41000, Profit: 69000 },
  { name: "Oct", Expense: 15000, Profit: 68000 },
  { name: "Nov", Expense: 89000, Profit: 47000 },
  { name: "Dec", Expense: 69000, Profit: 95000 },
];

const topStores = [
  "Gateway",
  "The Rustic",
  "Velvet Vine",
  "Blue Harbor",
  "Nebula",
  "Crimson Crafters",
  "Tidal Treasures",
  "Whimsy Wild",
  "Microcrate",
  "Emporium",
];
const topSales = [874, 721, 599, 558, 496, 344, 271, 213, 193, 171];

export default function InventoryDashboard() {
  const cards = [
    { label: "Total Products", value: 5483 },
    { label: "Orders", value: 2859 },
    { label: "Total Stock", value: 5483 },
    { label: "Out of Stock", value: 38 },
  ];

  return (
    <div className="flex h-screen font-sans bg-blue-50">

      {/* Sidebar */}
      <AdminHeader />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Inventory Management - Dashboard
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 w-full sm:w-60"
          />
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {cards.map((card) => (
            <div key={card.label} className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-lg sm:text-xl font-bold">
                <CountUp end={card.value} duration={3} separator="," />
              </h2>
              <p className="text-sm text-gray-500">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Customers Bar Graph */}
          <div className="bg-white p-4 rounded shadow flex flex-col items-center">
            <h3 className="text-sm text-gray-600 mb-2">
              Total Customers for Bar Graph
            </h3>
            <div className="flex items-end h-32 space-x-2 w-full justify-center">
              {[
                { name: "A", value: 120, color: "bg-blue-500" },
                { name: "B", value: 90, color: "bg-green-500" },
                { name: "C", value: 75, color: "bg-yellow-400" },
                { name: "D", value: 60, color: "bg-pink-500" },
                { name: "E", value: 110, color: "bg-purple-500" },
                { name: "F", value: 95, color: "bg-orange-400" },
                { name: "G", value: 80, color: "bg-teal-500" },
                { name: "H", value: 100, color: "bg-red-400" },
              ].map((customer, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`${customer.color} w-4 sm:w-6 rounded-t`}
                    style={{ height: `${customer.value / 2}px` }}
                  ></div>
                  <span className="text-xs mt-1">{customer.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-lg sm:text-xl font-bold text-gray-700">
              Customers
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-4 rounded shadow flex flex-col items-center">
            <h3 className="text-sm text-gray-600 mb-2">Inventory Values</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Stores */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-sm text-gray-600 mb-2">Top 10 Stores by sales</h3>
            <ul className="space-y-1">
              {topStores.map((store, i) => (
                <li key={store} className="flex justify-between text-sm">
                  <span>{store}</span>
                  <span>{topSales[i]}k</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-600 mb-4">
            Expense vs Profit (Last 12 months)
          </h3>
          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Expense" stroke="#f97316" />
                <Line type="monotone" dataKey="Profit" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
