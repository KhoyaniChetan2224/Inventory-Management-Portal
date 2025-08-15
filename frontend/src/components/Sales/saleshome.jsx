import React from 'react';
import SalesHeader from './SalesHeader/salesheader';

const SalesHome = () => {
  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar/Header */}
      <SalesHeader />

      {/* Main Content Area with Background Image */}
      <div
        className="flex-1 overflow-y-auto relative"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/96/70/df/9670df3eab618edc6ed4617752a106bc.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back, Sales Executive!</h1>
              <p className="text-gray-700">Here’s an overview of today’s sales performance and quick insights.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">Total Sales</h2>
                <p className="text-2xl font-semibold text-green-600 mt-2">$23,450</p>
              </div>
              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">New Orders</h2>
                <p className="text-2xl font-semibold text-blue-600 mt-2">58</p>
              </div>
              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">Pending Shipments</h2>
                <p className="text-2xl font-semibold text-yellow-600 mt-2">14</p>
              </div>
              <div className="bg-white bg-opacity-50 text-gray-950 p-5 rounded-xl shadow-md">
                <h2 className="text-sm text-gray-500">Returns</h2>
                <p className="text-2xl font-semibold text-red-600 mt-2">4</p>
              </div>
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white bg-opacity-50 text-gray-950 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
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
                    {[
                      { id: '#00124', customer: 'John Doe', amount: '$420', status: 'Delivered', date: '2025-07-15' },
                      { id: '#00125', customer: 'Alice Smith', amount: '$690', status: 'Pending', date: '2025-07-16' },
                      { id: '#00126', customer: 'Bob Marley', amount: '$130', status: 'Shipped', date: '2025-07-17' },
                    ].map((order, i) => (
                      <tr key={i} className="border-t hover:bg-gray-50">
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
    </div>
  );
};

export default SalesHome;
