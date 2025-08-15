import React from 'react'
import SalesHeader from './SalesHeader/salesheader'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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

const salesproject = () => {
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
      <main className="flex-1 p-6 overflow-y-auto">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500">Gross Revenue</p>
            <h3 className="text-2xl font-bold">$3,541.09</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500">Avg. Order Value</p>
            <h3 className="text-2xl font-bold">$87.29</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500">Total Orders</p>
            <h3 className="text-2xl font-bold">$401.09</h3>
          </div>
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

          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
            <p className="text-gray-500">Sale Performance</p>
            <div className="relative w-24 h-24 mt-4">
              <div className="absolute inset-0 rounded-full border-[10px] border-orange-500 border-r-gray-200"></div>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">76%</div>
            </div>
          </div>
        </div>

        {/* Active User + Transactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500 mb-2">Active Users</p>
            <div className="grid grid-cols-6 gap-1">
              {[...Array(36)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded ${i % 3 === 0 ? "bg-orange-400" : "bg-gray-200"}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500 mb-2">Recent Transactions</p>
            <div className="text-sm">
              <div className="flex justify-between border-b py-2">
                <span>#847-392</span>
                <span>Vintage T-shirt</span>
                <span>$440.03</span>
                <span className="text-green-500">Success</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span>#732-293</span>
                <span>Black T-shirt</span>
                <span>$80.00</span>
                <span className="text-yellow-500">Pending</span>
              </div> 
              <div className="flex justify-between py-2">
                <span>#732-328</span>
                <span>White Polo</span>
                <span>$102.03</span>
                <span className="text-green-500">Success</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default salesproject
