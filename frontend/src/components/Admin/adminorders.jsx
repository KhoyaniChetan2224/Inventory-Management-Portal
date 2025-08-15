import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
  Legend,
} from "recharts";

import { FiEye, FiEyeOff, FiGrid, FiList } from "react-icons/fi";
import AdminHeader from "./AdminHeader/adminheader";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const dataProfit = [
  { month: "Jan", profit: 3000, Balance: 1000, incom: 2000, Expenses: 6900 },
  { month: "Feb", profit: 4000, Balance: 4600, incom: 300, Expenses: 5900 },
  { month: "Mar", profit: 3500, Balance: 1200, incom: 5000, Expenses: 7500 },
  { month: "Apr", profit: 5100, Balance: 6700, incom: 2300, Expenses: 5900 },
  { month: "May", profit: 4500, Balance: 3700, incom: 7600, Expenses: 600 },
  { month: "Jun", profit: 700, Balance: 5700, incom: 5000, Expenses: 7500 },
];

const adminorders = ({ onFilterChange, onViewChange }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const cards = [
    {
      label: "Total Balance",
      value: 2324.44,
      change: "+2.2%",
      color: "bg-green-100",
      text: "text-green-600",
    },
    {
      label: "Total Income",
      value: 4778.52,
      change: "+3.6%",
      color: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      label: "Total Expenses",
      value: 2103.77,
      change: "-1.3%",
      color: "bg-pink-100",
      text: "text-pink-600",
    },
    {
      label: "Total Savings",
      value: 9500.0,
      change: "+1.9%",
      color: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Sneakers");
  const [brand, setBrand] = useState("Zamoran");
  const [sort, setSort] = useState("Best Seller");
  const [view, setView] = useState("grid");

  // Notify parent of filter change
  const handleFilterChange = () => {
    onFilterChange({ search, category, brand, sort });
  };

  const handleViewChange = (mode) => {
    setView(mode);
    onViewChange(mode);
  };

  const [formData, setFormData] = useState({
    productId: "",
    productName: "",
    price: "",
    size: "",
    sold: "",
    isAvailable: false,
    image: null,
    imageUrl: "",


    name: '',
    totalComp: '',
    salary: '',
    actual: '',
    recurring: '',
    offset: '',
    offCycle: '',
    unpaid: '',
    status: '',
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        image: file,
        imageUrl: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.productId || !formData.productName || !formData.price) {
      alert("Please fill in all required fields.");
      return;
    }

    const newRecord = {
      ...formData,
      id: Date.now(),
    };

    setRecords((prev) => [newRecord, ...prev]);

    setFormData({
      productId: "",
      productName: "",
      price: "",
      size: "",
      sold: "",
      isAvailable: false,
      image: null,
      imageUrl: "",
    });
  };

  const [showAdminTable, setShowAdminTable] = useState(false);


  const handleSubmitEmployee = (e) => {
    e.preventDefault();
    setRecords((prev) => [...prev, formData]);
    setFormData({
      image: null,
      name: '',
      totalComp: '',
      salary: '',
      actual: '',
      recurring: '',
      offset: '',
      offCycle: '',
      unpaid: '',
      status: '',
    });
  };

  return (
    <div className="flex h-screen font-sans bg-blue-50">
      {/* Sidebar */}
      <AdminHeader />

      {/* /* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-6 text-blue-900">
              Inventory Management - Orders
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="date"
              className="border px-2 py-1 rounded"
              defaultValue="2025-07-24"
            />
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 border rounded-lg text-sm w-64"
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm ${card.color}`}
            >
              <p className="text-sm text-gray-500">{card.label}</p>
              <h3 className="text-xl font-bold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={card.value}
                    duration={2}
                    decimals={2}
                    prefix="$"
                    separator=","
                  />
                ) : (
                  "$0.00"
                )}
              </h3>
              <p className={`text-sm ${card.text}`}>
                {card.change} than last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-3 gap-3 mb-2 ">
          {/* Income Line Chart */}
          <div className="bg-white p-9 mb-0 px-2 rounded shadow col-span-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-600">
                Total Income
              </h3>
              <select className="text-sm border rounded px-2 py-1">
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last 9 months</option>
                <option>Last 12 months</option>
                <option>Last 2 Year</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dataProfit}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#6366F1" stopOpacity={0.6} />
                    <stop offset="99%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#FACC15" stopOpacity={0.4} />
                    <stop offset="99%" stopColor="#FACC15" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorExpenses"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop stopColor="#A3E635" stopOpacity={0.4} />
                    <stop offset="99%" stopColor="#A3E635" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorIncom" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#C084FC" stopOpacity={0.4} />
                    <stop offset="99%" stopColor="#C084FC" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Legend />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#6366F1"
                  fillOpacity={1}
                  fill="url(#colorProfit)"
                />
                <Area
                  type="monotone"
                  dataKey="Balance"
                  stroke="#FACC15"
                  fillOpacity={1}
                  fill="url(#colorBalance)"
                />
                <Area
                  type="monotone"
                  dataKey="Expenses"
                  stroke="#A3E635"
                  fillOpacity={1}
                  fill="url(#colorExpenses)"
                />
                <Area
                  type="monotone"
                  dataKey="incom"
                  stroke="#C084FC"
                  fillOpacity={1}
                  fill="url(#colorIncom)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Activity Donut (Static) */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Activity
            </h3>
            <div className="flex items-center justify-center h-40">
              <div className="w-32 h-32 rounded-full border-[12px] border-pink-400 border-t-transparent animate-spin-slow"></div>
            </div>
            <p className="text-center font-bold text-xl">$2,103.77</p>
            <div className="mt-2 text-sm text-gray-500">
              <p>House - 32%</p>
              <p>Food - 25%</p>
              <p>Investing - 17%</p>
              <p>Online Shop - 16%</p>
              <p>Beauty - 10%</p>
            </div>
          </div>
        </div>

        {/* Transactions & Goals */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          {/* Transaction History */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Transaction History
            </h3>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400">
                  <th>Recipient</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td>Starbucks Coffee</td>
                  <td>Food</td>
                  <td>15 Jul 2023</td>
                  <td className="text-right">$6.50</td>
                </tr>
                <tr className="border-t">
                  <td>Tesco Market</td>
                  <td>Food</td>
                  <td>14 Jul 2023</td>
                  <td className="text-right">$23.67</td>
                </tr>
                <tr className="border-t">
                  <td>Asos</td>
                  <td>Online Shop</td>
                  <td>10 Jul 2023</td>
                  <td className="text-right">$48.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Goals */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-600">My Goals</h3>
              <button className="text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded">
                Add Goals
              </button>
            </div>
            <div className="text-sm text-gray-600 mb-1">Travel</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full w-1/2" />
            </div>
            <p className="text-sm text-gray-400 mb-4">$1,000.00 / $2,000.00</p>

            <div className="text-sm text-gray-600 mb-1">Savings</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-purple-500 h-2 rounded-full w-[80%]" />
            </div>
            <p className="text-sm text-gray-400">$8,500.00 / $10,500.00</p>
          </div>
        </div>
        {/* Top Bar */}
        <div className="flex flex-wrap items-center mt-4 gap-3 mb-6">
          {/* Search Bar */}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilterChange();
            }}
            placeholder="Search for items"
            className="flex-1 min-w-[150px] px-4 py-2 border rounded-md text-sm"
          />

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleFilterChange();
            }}
            className="px-3 py-2 border rounded-md text-sm"
          >
            <option>Sneakers</option>
            <option>Sports Shoes</option>
            <option>Formal</option>
            <option>Casual</option>
          </select>

          {/* Brand Filter */}
          <select
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              handleFilterChange();
            }}
            className="px-3 py-2 border rounded-md text-sm"
          >
            <option>Zamoran</option>
            <option>Nike</option>
            <option>Adidas</option>
            <option>Puma</option>
          </select>

          {/* Sort By Filter */}
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              handleFilterChange();
            }}
            className="px-3 py-2 border rounded-md text-sm"
          >
            <option>Best Seller</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>

          {/* View Toggle Buttons */}
          <button
            onClick={() => handleViewChange("grid")}
            className={`p-2 border rounded ${view === "grid" ? "bg-gray-200" : ""
              }`}
          >
            <FiGrid />
          </button>
          <button
            onClick={() => setShowAdminTable((prev) => !prev)}
            className={`p-2 border rounded ${showAdminTable ? "bg-green-100" : "bg-green-100"
              }`}
          >
            {showAdminTable ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>

        <div className="max-w-7xl mx-auto p-0">
          {/* Product Form */}
          {showAdminTable && (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-3xl underline font-bold mb-4 text-center font-mono">
                Add Product Form
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Product ID
                  </label>
                  <input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Size</label>
                  <input
                    type="text"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Sold</label>
                  <input
                    type="number"
                    name="sold"
                    value={formData.sold}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    checked={formData.isAvailable}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <label htmlFor="isAvailable" className="text-sm">
                    Available
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleChange}
                  />
                  {formData.imageUrl && (
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="w-24 h-24 mt-2 object-cover border rounded"
                    />
                  )}
                </div>

                <div className="md:col-span-4">
                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
            {/* Left Panel */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500">Purchased</p>
                <p className="text-xl font-bold text-red-500">32,860</p>
                <p className="text-sm text-gray-400">Pairs</p>
                <p className="text-sm text-gray-500 mt-2">Available</p>
                <p className="text-xl font-bold text-blue-500">23,328</p>
                <p className="text-sm text-gray-400">Pairs</p>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500 mb-1">Product Income</p>
                <p className="text-xl font-bold text-blue-500">$1286</p>
                <div className="h-4 mt-2 rounded bg-blue-100" />
              </div>

              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500 mb-1">Product Spending</p>
                <p className="text-xl font-bold text-red-500">$1032</p>
                <div className="h-4 mt-2 rounded bg-red-100" />
              </div>

              <div className="bg-blue-100 p-4 rounded shadow text-center">
                <p className="text-sm font-semibold">Upgrade your plan</p>
                <p className="text-xs text-gray-600 mb-2">
                  Enjoy premium features
                </p>
                <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                  Upgrade
                </button>
              </div>
            </div>

            {/* Records Table */}
            <div className="lg:col-span-3 bg-white p-4 rounded shadow overflow-x-auto">
              {records.length === 0 ? (
                <p className="text-gray-500">No records added yet.</p>
              ) : (
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-50 text-left text-sm font-semibold">
                      <th className="p-2">Image</th>
                      <th className="p-2">Product ID</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Price</th>
                      <th className="p-2">Size</th>
                      <th className="p-2">Sold</th>
                      <th className="p-2">Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((rec) => (
                      <tr key={rec.id} className="border-b text-sm">
                        <td className="p-2">
                          <img
                            src={rec.imageUrl}
                            alt="product"
                            className="w-10 h-10 rounded object-cover"
                          />
                        </td>
                        <td className="p-2">{rec.productId}</td>
                        <td className="p-2">{rec.productName}</td>
                        <td className="p-2">₹{rec.price}</td>
                        <td className="p-2">{rec.size}</td>
                        <td className="p-2">{rec.sold || 0}</td>
                        <td className="p-2">
                          {rec.isAvailable ? "Yes" : "No"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 mt-5 p-6 overflow-auto">
          {/* Header */}
          <div className="flex justify-between items-center -mt-2">
            <h1 className="text-xl font-semibold">Payroll</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                01 Jul 22 - 31 Jul 22
              </span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>All Employment Type</option>
              </select>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            📌 Review your payroll data carefully before closing it.
          </p>

          {/* Table */}
          <div className="bg-white rounded shadow p-4">
            {/* Employee Records Table */}
            <h2 className="text-2xl font-bold text-center underline text-gray-800 mb-4">Employee Compensation Form</h2>

            <form onSubmit={handleSubmitEmployee} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

              <label className="block text-sm font-medium mb-1">Image Upload :- </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.files[0] }))}
                className="p-2 border rounded"
                required
              />

              <label className="block text-sm font-medium mb-1">Employee Name :- </label>
              <input
                type="text"
                name="name"
                placeholder="Employee Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />

              <label className="block text-sm font-medium mb-1">Compensation Details :- </label>
              <input
                type="number"
                name="totalComp"
                placeholder="Total Compensation"
                value={formData.totalComp}
                onChange={handleChange}
                required
                min="0"
                className="p-2 border rounded"
              />

              <label className="block text-sm font-medium mb-1">Salary :- </label>
              <input
                type="number"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
                required
                min="0"
                className="p-2 border rounded"
              />
              <label className="block text-sm font-medium mb-1">Actual :- </label>
              <input
                type="number"
                name="actual"
                placeholder="Actual"
                value={formData.actual}
                onChange={handleChange}
                required
                min="0"
                className="p-2 border rounded"
              />

              <label className="block text-sm font-medium mb-1">Recurring :- </label>
              <input
                type="number"
                name="recurring"
                placeholder="Recurring"
                value={formData.recurring}
                onChange={handleChange}
                required
                min="0"
                className="p-2 border rounded"
              />

              <label className="block text-sm font-medium mb-1">Offset :- </label>
              <input
                type="number"
                name="offset"
                placeholder="Offset"
                value={formData.offset}
                onChange={handleChange}
                required
                min="0"
                className="p-2 border rounded"
              />

              <label className="block text-sm font-medium mb-1">Off Cycle :- </label>
              <input
                type="number"
                name="offCycle"
                placeholder="Off Cycle"
                value={formData.offCycle}
                onChange={handleChange}
                required
                min="0"
                className="p-2 border rounded"
              />

              <label className="block text-sm font-medium mb-1">Unpaid :- </label>
              <input
                type="number"
                name="unpaid"
                placeholder="Unpaid"
                value={formData.unpaid}
                onChange={handleChange}
                required
                min="0"
                className="p-2 border rounded"
              />

              <label className="block text-sm font-medium mb-1">Status :- </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>

              <button
                type="submit"
                className="col-span-1 sm:col-span-2 font-bold md:col-span-3 lg:col-span-4 bg-green-600 text-white p-2 rounded hover:bg-green-700"
              >
                Employee Form Submitted
              </button>
            </form>
            <hr className="my-5" />

            <div className="mt-0">
              <h3 className="text-2xl underline font-bold text-gray-800 mb-4 text-center"> All Employee Records</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className='text-gray-700'>
                      <th className="border-b p-1">Image</th>
                      <th className="border-b p-1">Name</th>
                      <th className="border-b p-1">Total Comp</th>
                      <th className="border-b p-1">Salary</th>
                      <th className="border-b p-1">Actual</th>
                      <th className="border-b p-1">Recurring</th>
                      <th className="border-b p-1">Offset</th>
                      <th className="border-b p-1">Off Cycle</th>
                      <th className="border-b p-1">Unpaid</th>
                      <th className="border-b p-1">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record, index) => (
                      <tr key={index}>
                        <td className="border-b p-2">
                          {record.image && <img src={URL.createObjectURL(record.image)} alt="Employee" className="w-10 h-10 rounded-full" />}
                        </td>
                        <td className="border-b p-2">{record.name}</td>
                        <td className="border-b p-2">{record.totalComp}</td>
                        <td className="border-b p-2">{record.salary}</td>
                        <td className="border-b p-2">{record.actual}</td>
                        <td className="border-b p-2">{record.recurring}</td>
                        <td className="border-b p-2">{record.offset}</td>
                        <td className="border-b p-2">{record.offCycle}</td>
                        <td className="border-b p-2">{record.unpaid}</td>
                        <td className="border-b p-2">{record.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
};

export default adminorders;
