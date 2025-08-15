import React, { useState } from "react";
import AdminHeader from "./AdminHeader/adminheader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { ArrowUpRight } from "lucide-react";
import axios from "axios";

// Chart data
const data = [
  { day: "Mon", clients: 30 },
  { day: "Tue", clients: 45 },
  { day: "Wed", clients: 38 },
  { day: "Thu", clients: 50 },
  { day: "Fri", clients: 65 },
  { day: "Sat", clients: 40 },
  { day: "Sun", clients: 20 },
];

const dataOrders = [
  { name: "Online", value: 381 },
  { name: "Offline", value: 121 },
  { name: "Direct", value: 380 },
  { name: "In-Store", value: 445 },
  { name: "Other", value: 50 },
];

const COLORS = ["#6366F1", "#10B981", "#F43F5E", "#3B82F6", "#FBBF24"];

const dataProfit = [
  { month: "Jan", profit: 3000 },
  { month: "Feb", profit: 4000 },
  { month: "Mar", profit: 3500 },
  { month: "Apr", profit: 5000 },
  { month: "May", profit: 4500 },
  { month: "Jun", profit: 6000 },
];

// Initial tickets
const initialTickets = [
  {
    id: "01",
    requester: "Floratina",
    priority: "Highest",
    subject: "Login issue",
    status: "Open",
  },
  {
    id: "02",
    requester: "Melonishop",
    priority: "Low",
    subject: "Customer complaint",
    status: "Pending",
  },
  {
    id: "03",
    requester: "Shoppine",
    priority: "High",
    subject: "More information req.",
    status: "Pending",
  },
  {
    id: "04",
    requester: "Brilliant Boutique",
    priority: "High",
    subject: "Updating details",
    status: "Closed",
  },
];

const statusColors = {
  Open: "bg-green-100 text-green-700",
  Pending: "bg-purple-100 text-purple-700",
  Closed: "bg-gray-200 text-gray-700",
  "In Progress": "bg-orange-100 text-orange-700",
  Completed: "bg-blue-100 text-blue-700",
};

const priorityIcons = {
  Highest: "⬆️",
  High: "🔼",
  Medium: "🔽",
  Low: "⬇️",
  Critical: "⚠️",
  Urgent: "🚨",
  Normal: "ℹ️",
  Minor: "🔹",
  Major: "🔸",
};

const activeBuyers = [
  { name: 'Aaron Wong', orders: 12 },
  { name: 'Ava Taylor', orders: 9 },
  { name: 'Mary Smith', orders: 7 },
  { name: 'John Doe', orders: 6 },
];


const AdminReporting = () => {
  const [formData, setFormData] = useState({
    id: "",
    requester: "",
    priority: "",
    subject: "",
    status: "",
  });

  const [ticketsList, setTicketsList] = useState(initialTickets);
  const [showNewTicket, setShowNewTicket] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate that all required fields are filled
    if (!formData.id || !formData.requester || !formData.priority || !formData.subject || !formData.status) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Add timestamp to the ticket
      const newTicket = {
        ...formData,
        timestamp: new Date().toISOString()
      };

      // Add the new ticket to the tickets list
      setTicketsList([newTicket, ...ticketsList]);

      // Reset the form
      setFormData({
        id: "",
        requester: "",
        priority: "",
        subject: "",
        status: ""
      });

      // Close the new ticket form
      setShowNewTicket(false);

    } catch (error) {
      console.error("Error creating ticket:", error);
      alert("Failed to create ticket. Please try again.");
    }
  };

  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <AdminHeader />

      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Inventory Management - Product Reporting
          </h1>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-6">
          {/* Orders Received */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">
              Orders Received
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center mt-4">
              <div className="w-full sm:w-24 h-24 mx-auto sm:mx-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataOrders}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={40}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {dataOrders.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 text-sm text-gray-600 space-y-1">
                {dataOrders.map((order, i) => (
                  <p key={i}>
                    <span
                      className="inline-block w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[i] }}
                    ></span>
                    {order.name}: <strong>{order.value}</strong>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Clients Activity */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">
              Clients Activity
            </h4>
            <div className="mt-2 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="clients" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">Summary</h4>
            <ul className="text-sm text-gray-700 space-y-1 mt-2">
              <li>
                Open Orders: <strong>2345</strong>
              </li>
              <li>
                Completed: <strong>8290</strong>
              </li>
              <li>
                Total Revenue: <strong>$750,890</strong>
              </li>
            </ul>
          </div>

          {/* Total Profit */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">Total Profit</h4>
            <div className="mt-2 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataProfit}>
                  <defs>
                    <linearGradient
                      id="colorProfit"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#6366F1"
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sales Summary + Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-9 gap-6">
          <div className="lg:col-span-2 bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">Sales Summary</h4>
            <div className="mt-2 h-24 bg-indigo-100 rounded flex items-center justify-center text-indigo-600 text-xl font-bold">
              $186,640
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">Top Clients</h4>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>Jane Smith — $4200</li>
              <li>Madison Fischer — $3900</li>
              <li>Scarlett Lewis — $2500</li>
              <li>Raymond Taylor — $2000</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-6">
          {/* Best Sellers */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">Best Sellers</h4>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>Macbook Pro M1 — $1200</li>
              <li>iPhone 13 — $999</li>
              <li>Galaxy Tab S8 — $850</li>
              <li>Apple Watch Series 6 — $560</li>
            </ul>
          </div>

          {/* Active Buyers */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">Active Buyers</h4>
            <div className="mt-4 space-y-2">
              {activeBuyers.map((buyer, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-700">
                  <span>{buyer.name}</span>
                  <span className="text-indigo-600 font-medium">{buyer.orders} orders</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-sm font-medium text-gray-500">Customer Satisfaction</h4>
            <div className="mt-2">
              <p className="text-indigo-600 text-xl font-bold">93.3%</p>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <ArrowUpRight size={12} className="text-green-500" />
                ↑ 18.7% from last week
              </p>
            </div>
          </div>
        </div>

        {/* Tickets Table */}
        <div className="p-4 sm:p-6 mt-5">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b gap-2">
              <h2 className="text-lg font-semibold">All Active Tickets</h2>
              <button
                onClick={() => setShowNewTicket((prev) => !prev)}
                className="p-2 border rounded bg-green-100"
              >
                {showNewTicket ? "- Close Ticket" : "+ Open Ticket"}
              </button>
            </div>

            {showNewTicket && (
              <div className="w-full max-w-5xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 underline">
                  Admin Reporting Form
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="Enter ID"
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    name="requester"
                    value={formData.requester}
                    onChange={handleChange}
                    placeholder="Requester Name"
                    className="border p-2 rounded"
                  />
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Select Priority</option>
                    {Object.keys(priorityIcons).map((p, i) => (
                      <option key={i} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter Subject"
                    className="border p-2 rounded md:col-span-2"
                  />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Select Status</option>
                    {Object.keys(statusColors).map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <button
                type="submit"
                className="col-span-1 sm:col-span-2 font-bold md:col-span-3 lg:col-span-4 bg-green-600 text-white p-2 rounded hover:bg-green-700"
              >
                Admin Reporting Form Submitted
              </button>
                </form>
              </div>
            )}

            {/* Records */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">Requester</th>
                    <th className="p-3 text-left">Priority</th>
                    <th className="p-3 text-left">Subject</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketsList.map((ticket, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-3">{ticket.id}</td>
                      <td className="p-3">{ticket.requester}</td>
                      <td className="p-3">
                        {priorityIcons[ticket.priority] || ""} {ticket.priority}
                      </td>
                      <td className="p-3">{ticket.subject}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded text-sm ${statusColors[ticket.status] ||
                            "bg-gray-100 text-gray-700"
                            }`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminReporting;

