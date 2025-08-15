import React from "react";
import ManagerHeader from "./ManagerHeader/managerheader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample data
const data = [
  { month: "Jan", income: 19000, expense: 12000 },
  { month: "Feb", income: 12100, expense: 13000 },
  { month: "Mar", income: 17900, expense: 28500 },
  { month: "Apr", income: 20000, expense: 11000 },
  { month: "May", income: 27800, expense: 14000 },
  { month: "Jun", income: 13900, expense: 23400 },
  { month: "Jul", income: 23900, expense: 11500 },
];

const pieData = [
  { name: "Completed", value: 32 },
  { name: "In Progress", value: 14 },
  { name: "Not Started", value: 54 },
];

// Color map
const COLORS = ["#4ade80", "#facc15", "#94a3b8"];

const ManagerHome = () => {
  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <ManagerHeader />
      {/* /* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="min-h-screen bg-gradient-to-tr from-white via-slate-50 to-blue-100 p-6 text-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">
              Inventory Management - Home
            </h1>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* My Tasks */}
            <div className="bg-white rounded-xl p-4 shadow col-span-1">
              <h2 className="font-semibold mb-4">My Tasks</h2>
              <div className="space-y-3">
                {[
                  "BrightBridge - Website Design",
                  "Github - Upload Files",
                  "9TDesign - Mobile App",
                  "Horizon - Dashboard",
                ].map((task, i) => (
                  <div key={i} className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm font-medium">{task}</p>
                    <p className="text-xs text-gray-500">Sample description</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview Charts */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {/* Projects Overview */}
              <div className="bg-white rounded-xl p-4 shadow">
                <h3 className="font-semibold mb-2">Projects Overview</h3>

                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={5}
                        fill="#8884d8"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Income VS Expense */}
              <div className="bg-white rounded-xl p-4 shadow">
                <h3 className="font-semibold mb-2">Income VS Expense</h3>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#4f46e5"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#f97316"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* My Meetings */}
            <div className="bg-white rounded-xl p-4 shadow col-span-1">
              <h2 className="font-semibold mb-4">My Meetings</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium">App Project - 4:45 PM</p>
                  <p className="text-gray-500">Meet</p>
                </div>
                <div>
                  <p className="font-medium">User Research - 6:45 PM</p>
                  <p className="text-gray-500">Zoom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Invoice Overview */}
            <div className="bg-white rounded-xl p-4 shadow col-span-2">
              <h2 className="font-semibold mb-4">Invoice Overview</h2>
              {[
                ["Overdue", "bg-purple-600"],
                ["Not Paid", "bg-red-500"],
                ["Partially Paid", "bg-blue-400"],
                ["Fully Paid", "bg-green-500"],
                ["Draft", "bg-yellow-400"],
              ].map(([label, color], i) => (
                <div key={i} className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{label}</span>
                    <span>USD 183.00$</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${color}`}
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Open Tickets */}
            <div className="bg-white rounded-xl p-4 shadow col-span-1">
              <h2 className="font-semibold mb-4">Open Tickets</h2>
              {["Jacob Martinez", "Luke Bell", "Connor Mitchell"].map(
                (name, i) => (
                  <div key={i} className="mb-3">
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-gray-500">
                      Requested new features...
                    </p>
                    <button className="text-xs text-blue-600 mt-1">
                      Check &gt;
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManagerHome;
