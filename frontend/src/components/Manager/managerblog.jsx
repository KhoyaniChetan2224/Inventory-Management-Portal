import React from 'react'
import ManagerHeader from './ManagerHeader/managerheader'
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer,
  YAxis,
  Legend,
  CartesianGrid
} from "recharts";
import CountUp from "react-countup";

const pieData = [
  { name: "Direct", value: 81.3 },
  { name: "Other", value: 7.3 },
  { name: "Referral", value: 5.2 },
  { name: "Paid Search", value: 3.2 },
  { name: "Display", value: 2.1 },
  { name: "Social", value: 0.9 },
];

const pieColors = ["#00bcd4", "#8bc34a", "#ff9800", "#f44336", "#3f51b5", "#e91e63"];

const userLineData = [
  { date: "Oct 25", users: 2000, newUsers: 800, existingUser: 2300 },
  { date: "Oct 30", users: 2100, newUsers: 900, existingUser: 180 },
  { date: "Nov 4", users: 1800, newUsers: 600, existingUser: 2260 },
  { date: "Nov 9", users: 2300, newUsers: 1100, existingUser: 60 },
  { date: "Nov 14", users: 1900, newUsers: 700, existingUser: 2300 },
  { date: "Nov 19", users: 2200, newUsers: 1000, existingUser: 100 },
];

const managerblog = () => {
  const stats = [
    { label: "Users", value: 54068 },
    { label: "Sessions", value: 70595 },
    { label: "Bounce Rate", value: 44.5, suffix: "%" },
    { label: "Goal Completions", value: 9414 },
    { label: "Avg. Time on Page", value: 50, format: (val) => `00:00:${val < 10 ? `0${val}` : val}` },
  ];

  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <ManagerHeader />

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="p-6 bg-white min-h-screen space-y-6">
          <div className="flex justify-between items-center border-b pb-2">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">
              Inventory Management - Blogs
            </h1>
            <div className="flex gap-2">
              {[
                { label: "Continent", options: ["Asia", "Europe", "North America", "South America", "Africa"] },
                { label: "Region", options: ["East", "West", "North", "South", "Central"] },
                { label: "Channel", options: ["Direct", "Referral", "Organic", "Paid", "Social"] },
                { label: "Device", options: ["Mobile", "Desktop", "Tablet", "Smart TV", "Other"] },
              ].map((filter, i) => (
                <select key={i} className="border px-2 py-1 rounded text-sm text-gray-700">
                  <option disabled selected>{filter.label}</option>
                  {filter.options.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option>
                  ))}
                </select>
              ))}
            </div>

          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 cursor-pointer rounded shadow"
              >
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-bold">
                  {stat.format ? (
                    <CountUp start={0} end={stat.value} duration={2} formattingFn={stat.format} />
                  ) : (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      separator=","
                      decimals={stat.suffix ? 2 : 0}
                      suffix={stat.suffix || ""}
                    />
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pie Chart */}
            <div className="bg-gray-50 p-4 rounded shadow">
              <h2 className="text-md font-semibold mb-2">Top Acquisition Channels</h2>
              <ResponsiveContainer width="100%" height={235}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Line Chart */}
            <div className="bg-gray-50 p-4 rounded shadow col-span-2">
              <h2 className="text-md font-semibold mb-2">Users (v/s) New Users (v/s) existingUser</h2>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={userLineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="newUsers" stroke="#f97316" strokeWidth={2} />
                  <Line type="monotone" dataKey="existingUser" stroke="#8bc34a" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Table Summary */}
          <div className="overflow-x-auto bg-white shadow rounded-lg mt-6">
            <table className="w-full text-sm text-left border-t">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Source / Medium</th>
                  <th className="px-4 py-2">Sessions</th>
                  <th className="px-4 py-2">Users</th>
                  <th className="px-4 py-2">New Users</th>
                  <th className="px-4 py-2">Bounce Rate</th>
                  <th className="px-4 py-2">Pages / Session</th>
                  <th className="px-4 py-2">Avg. Duration</th>
                  <th className="px-4 py-2">Goal Conv. Rate</th>
                  <th className="px-4 py-2">Completions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["(direct) / (none)", "70268", "54110", "49200", "44.5%", "4.9", "03:18", "13.3%", "9414"],
                  ["google / cpc", "6027", "4086", "2734", "49.6%", "4.2", "02:29", "16.3%", "1023"],
                  ["Partners / affiliate", "2196", "1481", "1416", "38.2%", "2.3", "00:54", "3.6%", "77"],
                  ["Referral / example", "1180", "860", "678", "40.1%", "3.0", "01:23", "5.1%", "120"],
                  ["Social / Facebook", "845", "700", "490", "55.0%", "2.5", "00:58", "2.7%", "64"],
                ].map((row, i) => {
                  const rowColors = [
                    "bg-red-100",
                    "bg-yellow-100",
                    "bg-green-100",
                    "bg-blue-100",
                    "bg-purple-100",
                  ];
                  const bgColor = rowColors[i % rowColors.length];

                  return (
                    <tr key={i} className={`${bgColor} border-t hover:bg-opacity-75`}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </main>

    </div>
  )
}

export default managerblog
