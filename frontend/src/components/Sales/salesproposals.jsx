import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SalesHeader from './SalesHeader/salesheader';
import { User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import CountUp from 'react-countup';

const chartData = [
  { day: 'Sun', income: 1200, expense: 800 },
  { day: 'Mon', income: 1400, expense: 900 },
  { day: 'Tue', income: 1500, expense: 1000 },
  { day: 'Wed', income: 1300, expense: 950 },
  { day: 'Thu', income: 1700, expense: 1100 },
  { day: 'Fri', income: 1800, expense: 1050 },
  { day: 'Sat', income: 1600, expense: 950 },
];

const SalesProposals = () => {
  const [formData, setFormData] = useState({
    name: '',
    chanceToClose: '',
    estimatedBudget: '',
    amount: '',
    duration: '',
    revenue: '',
    contactName: '',
    contactNumber: '',
    description: '',
    notes: '',
    rejectionReason: '',
    isRejected: false,
  });

  const [userList, setUserList] = useState([]);

  const fetchProposals = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/proposals`);
      setUserList(response.data);
    } catch (err) {
      console.error('Error fetching proposals:', err);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/proposals`, formData);
      if (response.status === 201) {
        alert('Proposal submitted successfully!');
        setFormData({
          name: '',
          chanceToClose: '',
          estimatedBudget: '',
          amount: '',
          duration: '',
          revenue: '',
          contactName: '',
          contactNumber: '',
          description: '',
          notes: '',
          rejectionReason: '',
          isRejected: false,
        });
        fetchProposals(); // 🔁 Refresh list
      }
    } catch (error) {
      console.error('Submission failed:', error.response?.data || error.message);
      alert('Failed to submit proposal. See console for details.');
    }
  };

  const cards = [
    { label: "Income", value: 8500, change: "+12.5%", color: "text-green-600" },
    { label: "Expense", value: 4900, change: "-8.3%", color: "text-red-600" },
    { label: "Savings", value: 2000, change: "+5%", color: "text-green-600" },
    { label: "Investment", value: 1600, change: "+3.6%", color: "text-green-600" },
  ];

  return (
    <div className="flex h-screen font-sans">
      <SalesHeader />
      <div className="flex-1 overflow-y-auto relative bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/736x/96/70/df/9670df3eab618edc6ed4617752a106bc.jpg')` }}>
        <main className="flex-1 p-6 backdrop-blur-sm overflow-y-auto">

          {/* Header Bar */}
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search here..."
              className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 w-full max-w-sm"
              aria-label="Search"
            />
            <div className="flex items-center gap-3 ml-4">
              <User className="text-green-700" aria-hidden="true" />
              <div>
                <h2 className="font-bold text-sm">Andrew Forbist</h2>
                <p className="text-xs text-gray-500">
                  Finance Score: <span className="text-green-600 font-semibold">92%</span>
                </p>
              </div>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {cards.map((card, i) => (
              <div key={i} className="bg-white/45 p-4 rounded-xl shadow text-sm">
                <h4 className="text-gray-500">{card.label}</h4>

                <div className="text-xl font-bold">
                  $
                  <CountUp
                    end={card.value}
                    duration={3}
                    separator=","
                  />
                </div>

                <p className={`mt-1 font-semibold text-xs ${card.color}`}>
                  {card.change} from last week
                </p>
              </div>
            ))}
          </div>

          {/* Cashflow and Expense Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {/* Cashflow Graph Placeholder */}
            <div className="bg-white/40 p-6 rounded-xl shadow col-span-2">
              <h3 className="text-lg font-bold mb-4">Cashflow</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="2 2" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#16a34a" />
                  <Line type="monotone" dataKey="expense" stroke="#ef4444" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white/70 p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-4">Expense Breakdown</h3>
              <div className="w-28 h-28 rounded-full border-8 border-green-300 mx-auto my-4" />
              <ul className="text-sm space-y-2">
                <li>🍽️ Food & Dining - 50%</li>
                <li>💡 Utilities - 30%</li>
                <li>📊 Investment - 20%</li>
              </ul>
            </div>
          </div>

          {/* Transactions & Saving Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Transactions Table */}
            <div className="bg-white/70 p-6 rounded-xl shadow col-span-2 overflow-x-auto">
              <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Card</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Dividend Payout', 'Platinum Plus', '2024-09-20', '+$2,000', 'Completed'],
                    ['Grocery Shopping', 'Freedom Unlimited', '2024-09-21', '-$400', 'Completed'],
                    ['Electricity Bill', 'Platinum Plus', '2024-09-22', '-$120', 'Completed'],
                    ['Rent', 'Freedom', '2024-09-22', '-$900', 'Pending'],
                  ].map(([name, card, date, amount, status], i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2">{name}</td>
                      <td>{card}</td>
                      <td>{date}</td>
                      <td className={amount.startsWith('+') ? 'text-green-600' : 'text-red-500'}>
                        {amount}
                      </td>
                      <td>
                        <span
                          className={`text-xs font-semibold ${status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                            }`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Saving Plans */}
            <div className="bg-white/70 p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-4">Saving Plans</h3>
              <ul className="space-y-4 text-sm">
                {[
                  { label: 'Emergency Fund', progress: 45 },
                  { label: 'Retirement Fund', progress: 60 },
                  { label: 'Vacation Fund', progress: 80 },
                ].map((plan, i) => (
                  <li key={i}>
                    <div className="flex justify-between mb-1">
                      <span>{plan.label}</span>
                      <span>{plan.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ Form Section */}
          <div className="max-w-6xl mx-auto mt-5 p-5 bg-white/60 shadow-2xl rounded-3xl">
            <h2 className="text-3xl font-mono text-center underline text-rose-600 mb-6">📋 Inventory Proposal Form</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Name', name: 'name' },
                { label: 'Chance to Close (%)', name: 'chanceToClose' },
                { label: 'Estimated Budget (₹)', name: 'estimatedBudget' },
                { label: 'Amount (₹)', name: 'amount' },
                { label: 'Duration (Months)', name: 'duration' },
                { label: 'Revenue (₹)', name: 'revenue' },
                { label: 'Contact Name', name: 'contactName' },
                { label: 'Contact Number', name: 'contactNumber' },
              ].map(({ label, name }) => (
                <div key={name} className="col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter ${label}`}
                    required
                  />
                </div>
              ))}

              {/* Description */}
              <div className="col-span-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  placeholder="Enter proposal description"
                />
              </div>

              {/* Notes */}
              <div className="col-span-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  placeholder="Any additional notes"
                />
              </div>

              {/* Rejected Checkbox + Reason */}
              <div className="col-span-full">
                <label className="flex items-center gap-3 text-sm font-semibold text-gray-700 mb-2">
                  <input
                    type="checkbox"
                    name="isRejected"
                    checked={formData.isRejected}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 border-gray-300 rounded"
                  />
                  <span>Rejected</span>
                </label>
                {formData.isRejected && (
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Rejection Reason</label>
                    <input
                      type="text"
                      name="rejectionReason"
                      value={formData.rejectionReason}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      placeholder="Reason for rejection"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="col-span-full text-center">
                <button
                  type="submit"
                  className="mt-4 px-8 py-3 bg-slate-700 hover:bg-white text-white hover:text-gray-800 font-bold rounded-full shadow-lg transition duration-300"
                >
                  ✅ Accept Proposal
                </button>
              </div>
            </form>

            {/* ✅ Table of Submitted Proposals */}
            {userList.length > 0 && (
              <div className="mt-10 w-full max-w-6xl">
                <h2 className="text-xl font-bold text-green-700 mb-4">Submitted Entries</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border border-gray-300 bg-white rounded-lg shadow text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        {[
                          'Name', 'Chance', 'Budget', 'Amount', 'Duration',
                          'Revenue', 'Contact Name', 'Contact Number',
                          'Description', 'Notes', 'Rejected', 'Rejection Reason'
                        ].map((header, idx) => (
                          <th key={idx} className="px-4 py-2 border">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map((user, index) => (
                        <tr key={index} className="hover:bg-blue-50 text-center">
                          <td className="border px-2">{user.name}</td>
                          <td className="border px-2">{user.chanceToClose}</td>
                          <td className="border px-2">{user.estimatedBudget}</td>
                          <td className="border px-2">{user.amount}</td>
                          <td className="border px-2">{user.duration}</td>
                          <td className="border px-2">{user.revenue}</td>
                          <td className="border px-2">{user.contactName}</td>
                          <td className="border px-2">{user.contactNumber}</td>
                          <td className="border px-2">{user.description}</td>
                          <td className="border px-2">{user.notes}</td>
                          <td className="border px-2">{user.isRejected ? 'Yes' : 'No'}</td>
                          <td className="border px-2">{user.rejectionReason || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesProposals;
