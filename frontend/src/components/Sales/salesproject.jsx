import React, { useEffect, useState } from "react";
import SalesHeader from "./SalesHeader/salesheader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import CountUp from "react-countup";

const transactionData = [
  { name: "Jan", total: 10000 },
  { name: "Feb", total: 12000 },
  { name: "Mar", total: 8000 },
  { name: "Apr", total: 15000 },
  { name: "May", total: 7000 },
  { name: "Jun", total: 12000 },
  { name: "Jul", total: 30000 },
  { name: "Aug", total: 5000 },
];

const SalesProject = () => {
  // Stats cards
  const stats = [
    { label: "Gross Revenue", value: 3541.09, prefix: "$" },
    { label: "Avg. Order Value", value: 87.29, prefix: "$" },
    { label: "Total Orders", value: 401.09, prefix: "$" },
  ];

  // Circular chart setup
  const percentage = 76;
  const radius = 50;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    setTimeout(() => {
      setOffset(circumference - (percentage / 100) * circumference);
    }, 100);
  }, [circumference, percentage]);

  // Transactions state
  const [transactions, setTransactions] = useState([
    { id: "5001", item: "Vintage T-shirt", amount: 440.03, status: "Success" },
    { id: "5002", item: "Black T-shirt", amount: 80.0, status: "Pending" },
    { id: "5003", item: "White Polo", amount: 102.03, status: "Success" },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    item: "",
    amount: "",
    status: "Success",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit new transaction
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id || !formData.item || !formData.amount || formData.amount <= 0) {
      alert("Please fill all fields correctly!");
      return;
    }

    const newTransaction = {
      ...formData,
      amount: parseFloat(formData.amount),
    };

    setTransactions([...transactions, newTransaction]);
    setFormData({ id: "", item: "", amount: "", status: "Success" });
  };

  return (
    <div className="flex h-screen font-sans">
      <SalesHeader />

      <div
        className="flex-1 overflow-y-auto relative"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/96/70/df/9670df3eab618edc6ed4617752a106bc.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-bold">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    decimals={2}
                    separator=","
                    prefix={stat.prefix}
                  />
                </h3>
              </div>
            ))}
          </div>

          {/* Graph + Sale Performance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="col-span-2 bg-white rounded-lg shadow p-4">
              <p className="text-gray-500 mb-2">Transaction Activity</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={transactionData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#fb923c" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Sale Performance Circle */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
              <p className="text-gray-500">Sale Performance</p>
              <div className="relative w-28 h-28 mt-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="lightgray"
                    strokeWidth={stroke}
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="orange"
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  <CountUp end={percentage} duration={2} suffix="%" />
                </div>
              </div>
            </div>
          </div>

          {/* Active User + Transactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Active Users */}
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-gray-500 mb-2">Active Users</p>
              <div className="grid grid-cols-6 gap-1">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded ${
                      i % 3 === 0 ? "bg-orange-400 animate-pulse" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-gray-500 mb-2 font-semibold">Add Transaction</p>

              {/* Input Form */}
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6 text-sm"
              >
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="Transaction ID"
                  className="border rounded p-2 focus:outline-orange-400"
                />
                <input
                  type="text"
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  placeholder="Item Name"
                  className="border rounded p-2 focus:outline-orange-400"
                />
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Amount"
                  className="border rounded p-2 focus:outline-orange-400"
                />
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border rounded p-2 focus:outline-orange-400"
                >
                  <option value="Success">Success</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                </select>

                <button
                  type="submit"
                  className="col-span-1 md:col-span-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                >
                  Add Transaction
                </button>
              </form>

              {/* Transaction Records */}
              <p className="text-gray-500 mb-2 font-semibold">Recent Transactions</p>
              <div className="text-sm divide-y">
                {transactions.map((t, i) => (
                  <div key={i} className="flex justify-between py-2">
                    <span>{t.id}</span>
                    <span>{t.item}</span>
                    <span>${t.amount.toFixed(2)}</span>
                    <span
                      className={
                        t.status === "Success"
                          ? "text-green-500 font-medium"
                          : t.status === "Pending"
                          ? "text-yellow-500 font-medium"
                          : "text-red-500 font-medium"
                      }
                    >
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesProject;
