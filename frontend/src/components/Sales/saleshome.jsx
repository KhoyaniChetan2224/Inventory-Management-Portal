import React, { useEffect, useState } from 'react';
import SalesHeader from './SalesHeader/salesheader';
import CountUp from 'react-countup';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SalesHome = () => {
  const [showForm, setShowForm] = useState(false);

  // State to store the current form data
  const [orderData, setOrderData] = useState({
    orderId: '',
    customer: '',
    amount: '',
    status: '',
    date: ''
  });

  // State to store all orders
  const [orders, setOrders] = useState([
    { id: '5001', customer: 'John Doe', amount: '$420', status: 'Delivered', date: '2025-07-15' },
    { id: '5002', customer: 'Alice Smith', amount: '$690', status: 'Pending', date: '2025-07-16' },
    { id: '5003', customer: 'Bob Marley', amount: '$130', status: 'Shipped', date: '2025-07-17' },
  ]);

  // Handle form field changes
  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  // Generate new order ID whenever form is opened
  useEffect(() => {
    if (showForm) {
      setOrderData(prev => ({
        ...prev,
        orderId: generateOrderId()
      }));
    }
  }, [showForm]);

  // Function to generate a new order ID
  const generateOrderId = () => {
    if (orders.length === 0) return '5001';
    const ids = orders.map(order => parseInt(order.id, 10));
    const maxId = Math.max(...ids);
    return (maxId + 1).toString();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: orderData.orderId,
      customer: orderData.customer,
      amount: `$${orderData.amount}`,
      status: orderData.status,
      date: orderData.date
    };
    setOrders([newOrder, ...orders]);
    alert('Order submitted successfully!');
    setOrderData({
      orderId: '',
      customer: '',
      amount: '',
      status: '',
      date: ''
    });
  };

  return (
    <div className="flex h-screen font-sans">
      <SalesHeader />

      <div
        className="flex-1 overflow-y-auto relative"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/96/70/df/9670df3eab618edc6ed4617752a106bc.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back, Sales Executive!</h1>
              <p className="text-gray-700">Here’s an overview of today’s sales performance and quick insights.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">Total Sales</h2>
                <p className="text-2xl font-semibold text-green-600 mt-2">
                  $<CountUp end={23450} duration={2.5} separator="," />
                </p>
              </div>

              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">New Orders</h2>
                <p className="text-2xl font-semibold text-blue-600 mt-2">
                  <CountUp end={58} duration={2} />
                </p>
              </div>

              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">Pending Shipments</h2>
                <p className="text-2xl font-semibold text-yellow-600 mt-2">
                  <CountUp end={14} duration={2} />
                </p>
              </div>

              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">Returns</h2>
                <p className="text-2xl font-semibold text-red-600 mt-2">
                  <CountUp end={4} duration={2} />
                </p>
              </div>
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white bg-opacity-50 text-gray-950 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Recent Orders</h2>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="p-2 border rounded bg-green-100 transition"
                >
                  {showForm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {/* Order Form */}
              {showForm && (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700">Order ID</label>
                    <input
                      type="text"
                      name="orderId"
                      value={orderData.orderId}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700">Customer</label>
                    <input
                      type="text"
                      name="customer"
                      value={orderData.customer}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700">Amount</label>
                    <input
                      type="number"
                      name="amount"
                      value={orderData.amount}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700">Status</label>
                    <select
                      name="status"
                      value={orderData.status}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={orderData.date}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                    >
                      Submit Order
                    </button>
                  </div>
                </form>
              )}

              {/* Orders Table */}
              <table className="min-w-full text-sm text-left text-gray-600">
                <thead className="text-xs uppercase bg-gray-100 text-gray-500">
                  <tr>
                    <th className="px-4 py-2">Order ID</th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">{order.customer}</td>
                      <td className="px-4 py-2">{order.amount}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-600'
                              : order.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-blue-100 text-blue-600'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesHome;
