import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SalesHeader from './SalesHeader/salesheader';
import { useNavigate } from 'react-router-dom';

const SalesOpportunities = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    chanceToClose: '',
    estimatedBudget: '',
    type: '--Select Type--',
    duration: '',
    contactName: '',
    contactNumber: '',
    description: '',
    notes: '',
  });

  const [userList, setUserList] = useState([]);

  // 📦 Fetch data from DB
  const fetchSales = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/sales`);
      setUserList(response.data);
    } catch (err) {
      console.error('Failed to fetch sales:', err);
    }
  };

  // 📌 Load data on mount
  useEffect(() => {
    fetchSales();
  }, []);

  // 🧠 Update input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit and update database
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/sales`,
        form
      );

      if (response.status === 201) {
        console.log('Form submitted successfully!');
        fetchSales(); // refresh data
        navigate('/sales/opportunities'); // optional navigation
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }

    // Clear form
    setForm({
      name: '',
      chanceToClose: '',
      estimatedBudget: '',
      type: '--Select Type--',
      duration: '',
      contactName: '',
      contactNumber: '',
      description: '',
      notes: '',
    });
  };

  return (
    <div className="flex h-screen font-sans">
      <SalesHeader />
      <main className="flex-1 p-6 backdrop-blur-sm overflow-y-auto">
        <div className=" p-10 font-sans flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl w-full max-w-6xl p-8 space-y-6"
          >
            <h1 className="text-3xl font-sans bg-blue-100 text-center text-blue-800">
              Opportunities Management
            </h1>

            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-rose-100 p-4 rounded-lg">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-blue-400 focus:ring-2"
                  placeholder="Testing"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Chance to Close</label>
                <input
                  type="number"
                  name="chanceToClose"
                  value={form.chanceToClose}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-green-400 focus:ring-2"
                  placeholder="20"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Estimated Budget</label>
                <input
                  type="number"
                  name="estimatedBudget"
                  value={form.estimatedBudget}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-yellow-400 focus:ring-2"
                  placeholder="8080"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:ring-2"
                  required
                >
                  <option>--Select Type--</option>
                  <option>Product</option>
                  <option>Service</option>
                  <option>Subscription</option>
                </select>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-rose-100 p-4 rounded-lg">
              <div>
                <label className="font-semibold">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-purple-400 focus:ring-2"
                  placeholder="e.g., 6 months"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={form.contactName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-orange-400 focus:ring-2"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={form.contactNumber}
                  onChange={handleChange}
                  maxLength={10}
                  minLength={10}
                  className="w-full px-3 py-2 border rounded focus:ring-red-400 focus:ring-2"
                  placeholder="1234567890"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Description</label>
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-teal-400 focus:ring-2"
                  placeholder="Project details"
                  required
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-rose-100 p-4 rounded-lg">
              <div>
                <label className="font-semibold">Notes</label>
                <input
                  type="text"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:ring-cyan-400 focus:ring-2"
                  placeholder="Additional info"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold w-full"
                >
                  Submit Opportunity
                </button>
              </div>
            </div>
          </form>

          {/* Submitted Table */}
          {userList.length > 0 && (
            <div className="mt-10 w-full max-w-6xl">
              <h2 className="text-xl font-bold text-green-700 mb-4">
                Submitted Entries
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 bg-white rounded-lg shadow">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      {[
                        'Name', 'Chance', 'Budget', 'Type', 'Duration',
                        'Contact Name', 'Contact Number', 'Description', 'Notes'
                      ].map((header, idx) => (
                        <th key={idx} className="px-4 py-2 border">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) => (
                      <tr key={index} className="text-center hover:bg-blue-50">
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.chanceToClose}</td>
                        <td className="border px-4 py-2">{user.estimatedBudget}</td>
                        <td className="border px-4 py-2">{user.type}</td>
                        <td className="border px-4 py-2">{user.duration}</td>
                        <td className="border px-4 py-2">{user.contactName}</td>
                        <td className="border px-4 py-2">{user.contactNumber}</td>
                        <td className="border px-4 py-2">{user.description}</td>
                        <td className="border px-4 py-2">{user.notes}</td>
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
  );
};

export default SalesOpportunities;
