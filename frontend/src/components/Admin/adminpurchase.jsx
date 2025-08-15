import React from "react";
import AdminHeader from "./AdminHeader/adminheader";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const revenueData = [
  { range: "0-5K", count: 4 },
  { range: "5K-10K", count: 7 },
  { range: "10K-15K", count: 5 },
  { range: "15K-20K", count: 3 },
  { range: "20K-25K", count: 2 },
  { range: "25K+", count: 1 },
];

const data = [
  { name: "0", revenue: 0 },
  { name: "Jan", revenue: 2400 },
  { name: "Feb", revenue: 3200 },
  { name: "Mar", revenue: 2800 },
  { name: "Apr", revenue: 3500 },
  { name: "May", revenue: 4000 },
  { name: "Jun", revenue: 3700 },
  { name: "Jul", revenue: 4500 },
  { name: "Aug", revenue: 4800 },
  { name: "Sep", revenue: 5200 },
  { name: "Oct", revenue: 6000 },
  { name: "Nov", revenue: 5800 },
  { name: "Dec", revenue: 7000 },
];

const cards = [
  {
    title: "Total Attendance",
    value: 1870,
    subtext: "-6% vs last month",
    color: "bg-white",
    badge: "text-red-500",
  },
  {
    title: "Shipments",
    value: 8472,
    subtext: "From last month",
    color: "bg-white",
    badge: "text-pink-500",
  },
  {
    title: "Litecoin",
    value: 23456.7,
    isCurrency: true,
    subtext: "↗ Trend",
    color: "bg-white",
    badge: "text-green-600",
  },
  {
    title: "Invoices",
    value: 2478,
    subtext: "23% growth",
    color: "bg-white",
    badge: "text-purple-500",
  },
  {
    title: "Monthly Growth",
    value: 85,
    suffix: "%",
    subtext: "Performance",
    color: "bg-white",
    badge: "text-teal-500",
  },
  {
    title: "Today’s Live Orders",
    value: 142934,
    subtext: "Updated now",
    color: "bg-white",
    badge: "text-blue-600",
  },
];

const dataSpending = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 700 },
  { name: "Utilities", value: 200 },
  { name: "Entertainment", value: 150 },
  { name: "Transport", value: 100 },
];

const COLORS = ["#6366F1", "#EC4899", "#F59E0B", "#10B981", "#EF4444"];

const dataTried = [
  { name: "Mon", tried: 5 },
  { name: "Tue", tried: 8 },
  { name: "Wed", tried: 6 },
  { name: "Thu", tried: 10 },
  { name: "Fri", tried: 7 },
  { name: "Sat", tried: 4 },
  { name: "Sun", tried: 9 },
];

const adminpurchase = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const stats = [
    { label: "Approved Transactions", value: 1748, change: "+3.12%" },
    { label: "Declined Transactions", value: 224, change: "+1.25%" },
    { label: "Refunded Transactions", value: 87, change: "-3.54%" },
    { label: "New Customers", value: 344, change: "+1.23%" },
  ];
  return (
    <div className="flex h-screen font-sans bg-blue-50">
      {/* Sidebar */}
      <AdminHeader />

      {/* /* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="bg-blue-50 min-h-screen p-4 sm:p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">

            {/* Main Dashboard */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-9 text-blue-900">
                  Inventory Management - Purchase Dashboard Overview
                </h1>
              </div>

              {/* Metrics */}
              <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 sm:p-4 rounded shadow text-sm"
                  >
                    <p className="text-gray-500">{item.label}</p>
                    <p className="text-lg sm:text-xl font-bold">
                      {inView ? <CountUp end={item.value} duration={3} separator="," /> : 0}
                    </p>
                    <p
                      className={`text-xs ${item.change.includes("-") ? "text-red-500" : "text-green-500"}`}
                    >
                      {item.change} last year
                    </p>
                  </div>
                ))}
              </div>

              {/* Revenue Chart */}
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xs sm:text-sm text-gray-500 mb-2">Revenue</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-600 mb-4 gap-2 sm:gap-0">
                  <div>
                    <p>
                      Gross Volume:{" "}
                      <span className="font-bold text-black">$48,580</span>{" "}
                      <span className="text-green-600 text-xs">+3.12%</span>
                    </p>
                    <p>
                      Net Volume:{" "}
                      <span className="font-bold text-black">$29,540</span>{" "}
                      <span className="text-green-600 text-xs">+1.45%</span>
                    </p>
                  </div>
                  <select className="border rounded p-1 text-xs sm:text-sm">
                    <option>This Year</option>
                    <option>Last Year</option>
                  </select>
                </div>
                <div className="h-40 sm:h-56 bg-white rounded shadow p-2 sm:p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#ff7300"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="bg-white p-4 rounded shadow overflow-x-auto">
                <h3 className="text-xs sm:text-sm text-gray-500 mb-2">Transactions</h3>
                <table className="w-full text-xs sm:text-sm min-w-[500px]">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="py-2">Customer ID</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Account</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "Leslie Alexander", type: "Sale", status: "Approved", account: "5943", date: "08/15/17", amount: "$127.25" },
                      { id: "Dianne Russell", type: "Refund", status: "Declined", account: "0039", date: "21/11/12", amount: "$127.25" },
                    ].map((txn, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="py-2">{txn.id}</td>
                        <td>{txn.type}</td>
                        <td className={`font-medium ${txn.status === "Approved" ? "text-green-500" : "text-red-500"}`}>
                          {txn.status}
                        </td>
                        <td className="text-center">{txn.account}</td>
                        <td>{txn.date}</td>
                        <td>{txn.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-white p-4 rounded shadow space-y-4">
              <h4 className="text-xs sm:text-sm text-gray-500">Monthly Volume</h4>
              <div className="text-xl sm:text-2xl font-bold text-black">$2,243.34</div>
              <p className="text-xs text-gray-400">
                This month’s daily sale volume is 3.54% larger than last month
              </p>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow h-56 sm:h-64">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-4">
                  Tried Graph
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataTried}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="tried" stroke="#6366F1" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <h5 className="text-xs sm:text-sm text-gray-500 mt-4">Volume by Card Type</h5>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                <li className="flex justify-between"><span>Visa</span><span>$1,500.31</span></li>
                <li className="flex justify-between"><span>Mastercard</span><span>$489.30</span></li>
                <li className="flex justify-between"><span>American Express</span><span>$132.00</span></li>
                <li className="flex justify-between"><span>Discover</span><span>$60.50</span></li>
                <li className="flex justify-between"><span>Capital One</span><span>$45.00</span></li>
                <li className="flex justify-between"><span>Other</span><span>$15.75</span></li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button className="bg-gray-100 text-xs sm:text-sm px-3 py-1 rounded">Export</button>
                <button className="bg-black text-white text-xs sm:text-sm px-3 py-1 rounded">Create Report</button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="min-h-screen bg-blue-50 p-4 sm:p-6 font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {cards.map((card, idx) => {
              const { ref, inView } = useInView({ triggerOnce: true });
              return (
                <div
                  key={idx}
                  ref={ref}
                  className={`rounded-xl cursor-pointer shadow ${card.color} p-3 sm:p-4`}
                >
                  <p className="text-gray-500 text-xs sm:text-sm">{card.title}</p>
                  <p className="text-lg sm:text-2xl font-bold mt-1">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={card.value}
                        duration={3}
                        separator=","
                        decimals={card.value % 1 !== 0 ? 2 : 0}
                        prefix={card.isCurrency ? "$" : ""}
                        suffix={card.suffix || ""}
                      />
                    ) : (
                      card.isCurrency ? "$0" : "0"
                    )}
                  </p>
                  <p className={`text-xs mt-2 ${card.badge}`}>{card.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Chart Section */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow h-56 sm:h-64">
              <h3 className="text-gray-700 text-xs sm:text-sm font-semibold mb-2">
                Revenue Histogram
              </h3>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#598e89" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow h-56 sm:h-64">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-600">
                Spending Categories
              </h3>
              <ResponsiveContainer width="105%" height="105%">
                <PieChart>
                  <Pie
                    data={dataSpending}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataSpending.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend layout="vertical" align="right" verticalAlign="middle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default adminpurchase;
