import React, { useState } from "react";
import CountUp from "react-countup";
import ManagerHeader from "./ManagerHeader/managerheader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data for different ranges
const weeklyData = [
  { day: "Mon", Project: 30000, Product: 20000 },
  { day: "Tue", Project: 50000, Product: 35000 },
  { day: "Wed", Project: 80000, Product: 40000 },
  { day: "Thu", Project: 60000, Product: 30000 },
  { day: "Fri", Project: 40000, Product: 30000 },
  { day: "Sat", Project: 20000, Product: 25000 },
  { day: "Sun", Project: 10000, Product: 10000 },
];

const monthlyData = [
  { month: "Mar", Project: 200000, Product: 180000 },
  { month: "Apr", Project: 240000, Product: 200000 },
  { month: "May", Project: 180000, Product: 150000 },
  { month: "Jun", Project: 300000, Product: 250000 },
  { month: "Jul", Project: 280000, Product: 230000 },
  { month: "Aug", Project: 320000, Product: 270000 },
  { month: "Sep", Project: 260000, Product: 210000 },
];

const yearlyData = [
  { year: "2021", Project: 1200000, Product: 950000 },
  { year: "2022", Project: 1350000, Product: 1100000 },
  { year: "2023", Project: 1450000, Product: 1200000 },
  { year: "2024", Project: 1600000, Product: 1350000 },
  { year: "2024", Project: 1289190, Product: 980000 },
];

const employeesData = [
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

const Managerservices = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    manager: "",
    team: "",
    office: "",
  });

  // Filter employees
  const employees = employeesData.filter((emp) => {
    return (
      (filters.search === "" ||
        emp.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        emp.email.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.status === "" || emp.status === filters.status) &&
      (filters.manager === "" || emp.manager === filters.manager) &&
      (filters.team === "" || emp.team === filters.team) &&
      (filters.office === "" || emp.office === filters.office)
    );
  });

  const [range, setRange] = useState("7months");

  const getChartData = () => {
    switch (range) {
      case "7days":
        return { data: weeklyData, key: "day" };
      case "7months":
        return { data: monthlyData, key: "month" };
      case "5years":
        return { data: yearlyData, key: "year" };
      default:
        return { data: monthlyData, key: "month" };
    }
  };

  const { data, key } = getChartData();


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
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white cursor-pointer p-4 rounded shadow">
              <p className="text-sm text-gray-500">Total Employees</p>
              <h2 className="text-2xl font-bold">
                <CountUp end={10512} duration={3} separator="," />
              </h2>
              <p className="text-green-500 text-xs mt-1">▲ 44.2%</p>
            </div>
            <div className="bg-white cursor-pointer p-4 rounded shadow">
              <p className="text-sm text-gray-500">Job Applicants</p>
              <h2 className="text-2xl font-bold">
                <CountUp end={11322} duration={3} separator="," />
              </h2>
              <p className="text-red-500 text-xs mt-1">▼ 21.7%</p>
            </div>
            <div className="bg-white cursor-pointer p-4 rounded shadow">
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
              <select
                className="text-sm border rounded px-2 py-1"
                value={range}
                onChange={(e) => setRange(e.target.value)}
              >
                <option value="7days">Last 7 Days</option>
                <option value="7months">Last 7 Months</option>
                <option value="5years">Last 5 Years</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey={key} />
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
              <button
                className="text-sm bg-black text-white px-4 py-1 rounded"
                onClick={() => setShowFilter(!showFilter)}
              >
                {showFilter ? "Hide filter" : "Add filter"}
              </button>
            </div>

            {/* Filter Form */}
            {showFilter && (
              <div className="mb-4 p-4 bg-gray-50 border rounded grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Search by name/email"
                  className="border px-3 py-1 rounded"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
                <select
                  className="border px-3 py-1 rounded"
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                >
                  <option value="">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Probation">Probation</option>
                  <option value="Onboarding">Onboarding</option>
                </select>
                <select
                  className="border px-3 py-1 rounded"
                  value={filters.manager}
                  onChange={(e) =>
                    setFilters({ ...filters, manager: e.target.value })
                  }
                >
                  <option value="">All Managers</option>
                  <option value="Wilson">Wilson</option>
                  <option value="Craig">Craig</option>
                </select>
                <select
                  className="border px-3 py-1 rounded"
                  value={filters.team}
                  onChange={(e) =>
                    setFilters({ ...filters, team: e.target.value })
                  }
                >
                  <option value="">All Teams</option>
                  <option value="Design Team">Design Team</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <select
                  className="border px-3 py-1 rounded"
                  value={filters.office}
                  onChange={(e) =>
                    setFilters({ ...filters, office: e.target.value })
                  }
                >
                  <option value="">All Offices</option>
                  <option value="IND">IND</option>
                  <option value="US">US</option>
                </select>
              </div>
            )}

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
                        className={`text-xs px-2 py-1 rounded-full ${statusColors[emp.status]
                          }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td>{emp.manager}</td>
                    <td>{emp.team}</td>
                    <td>{emp.office}</td>
                  </tr>
                ))}
                {employees.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">
                      No employees match the filter
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Managerservices;
