import React, { useState } from 'react';
import CountUp from 'react-countup';
import ManagerHeader from './ManagerHeader/managerheader';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", Project: 30000, Product: 20000 },
  { day: "Tue", Project: 50000, Product: 35000 },
  { day: "Wed", Project: 80000, Product: 40000 },
  { day: "Thu", Project: 60000, Product: 30000 },
  { day: "Fri", Project: 40000, Product: 30000 },
  { day: "Sat", Project: 20000, Product: 25000 },
  { day: "Sun", Project: 10000, Product: 10000 },
];

const employees = [
  {
    name: "Terry Upshurz",
    email: "te@prokreative.com",
    role: "UI/UX Designer",
    status: "Active",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Jaylon Amisoff",
    email: "ja@prokreative.com",
    role: "Graphic Designer",
    status: "Probation",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Terry Herwitz",
    email: "th@prokreative.com",
    role: "UX Designer",
    status: "Active",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Leo Septimius",
    email: "ls@prokreative.com",
    role: "Content Writer",
    status: "Onboarding",
    manager: "Craig",
    team: "Marketing",
    office: "IND",
  },
  {
    name: "Terry Upshurz",
    email: "te@prokreative.com",
    role: "UI/UX Designer",
    status: "Active",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Jaylon Amisoff",
    email: "ja@prokreative.com",
    role: "Graphic Designer",
    status: "Probation",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Terry Herwitz",
    email: "th@prokreative.com",
    role: "UX Designer",
    status: "Active",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Leo Septimius",
    email: "ls@prokreative.com",
    role: "Content Writer",
    status: "Onboarding",
    manager: "Craig",
    team: "Marketing",
    office: "IND",
  },
  {
    name: "Terry Upshurz",
    email: "te@prokreative.com",
    role: "UI/UX Designer",
    status: "Active",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Jaylon Amisoff",
    email: "ja@prokreative.com",
    role: "Graphic Designer",
    status: "Probation",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Terry Herwitz",
    email: "th@prokreative.com",
    role: "UX Designer",
    status: "Active",
    manager: "Wilson",
    team: "Design Team",
    office: "IND",
  },
  {
    name: "Leo Septimius",
    email: "ls@prokreative.com",
    role: "Content Writer",
    status: "Onboarding",
    manager: "Craig",
    team: "Marketing",
    office: "IND",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-600",
  Probation: "bg-blue-100 text-blue-600",
  Onboarding: "bg-yellow-100 text-yellow-600",
};

const managerservices = () => {


  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <ManagerHeader />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="min-h-screen p-6 text-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">
              Inventory Management - Services
            </h1>

            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-1 rounded"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Employees */}
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">Total Employees</p>
              <h2 className="text-2xl font-bold">
                <CountUp end={10512} duration={3} separator="," />
              </h2>
              <p className="text-green-500 text-xs mt-1">▲ 44.2%</p>
            </div>

            {/* Job Applicants */}
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">Job Applicants</p>
              <h2 className="text-2xl font-bold">
                <CountUp end={11322} duration={3} separator="," />
              </h2>
              <p className="text-red-500 text-xs mt-1">▼ 21.7%</p>
            </div>

            {/* New Employees */}
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">New Employees</p>
              <h2 className="text-2xl font-bold">
                <CountUp end={91202} duration={3} separator="," />
              </h2>
              <p className="text-green-500 text-xs mt-1">▲ 33.6%</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-4 rounded mt-6 shadow">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Team Performance</h3>
              <select className="text-sm border rounded px-2 py-1">
                <option>Last 7 Months</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Project" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Product" fill="#6ee7b7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Employee Table */}
          <div className="bg-white p-4 mt-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Employees</h3>
              <button className="text-sm bg-black text-white px-4 py-1 rounded">
                Add filter
              </button>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-2">Employee</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Manager</th>
                  <th>Team</th>
                  <th>Office</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.role}</td>
                    <td>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${statusColors[emp.status]}`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td>{emp.manager}</td>
                    <td>{emp.team}</td>
                    <td>{emp.office}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

    </div>
  );
};

export default managerservices;
