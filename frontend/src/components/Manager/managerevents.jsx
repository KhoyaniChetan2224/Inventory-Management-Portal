import React, { useState } from "react";
import ManagerHeader from "./ManagerHeader/managerheader";
import { CheckCircle, XCircle, Plus } from "lucide-react";
import {
  LineChart,
  Line as RLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  Legend as RLegend,
} from "recharts";

const ManagerEvents = () => {
  const [search, setSearch] = useState("");
  const [inventoryData, setInventoryData] = useState([
    {
      id: 1,
      name: "Wool Felt Sheets",
      category: "Texture",
      sku: "TS12321",
      incoming: 14,
      price: 15,
      stock: 32,
      value: 200,
      status: "in-stock",
    },
    {
      id: 2,
      name: "Cotton Rolls",
      category: "Fabric",
      sku: "FB3321",
      incoming: 21,
      price: 0,
      stock: 0,
      value: 90,
      status: "out-stock",
    },
    {
      id: 3,
      name: "Acrylic Paint Set",
      category: "Art Supplies",
      sku: "AS12345",
      incoming: 10,
      price: 25,
      stock: 50,
      value: 500,
      status: "in-stock",
    },
    {
      id: 4,
      name: "Canvas Boards",
      category: "Art Supplies",
      sku: "AS67890",
      incoming: 5,
      price: 10,
      stock: 20,
      value: 200,
      status: "out-stock",
    },
    {
      id: 5,
      name: "Paint Brushes",
      category: "Art Supplies",
      sku: "AS54321",
      incoming: 15,
      price: 5,
      stock: 100,
      value: 500,
      status: "in-stock",
    },
  ]);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    sku: "",
    incoming: 0,
    price: 0,
    stock: 0,
    value: 0,
    status: "in-stock",
  });

  // Filter search across multiple fields
  const filteredData = inventoryData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.sku.toLowerCase().includes(search.toLowerCase())
  );

  // Add product handler
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newId = inventoryData.length + 1;
    setInventoryData([...inventoryData, { id: newId, ...newProduct }]);
    setShowModal(false);
    setNewProduct({
      name: "",
      category: "",
      sku: "",
      incoming: 0,
      price: 0,
      stock: 0,
      value: 0,
      status: "in-stock",
    });
  };

  // Stats (overview numbers)
  const stats = {
    sales: { total: 786, revenue: 17584, cost: 12487, profit: 5097 },
    purchase: { total: 45, cost: 786, cancelled: 4, returned: 7 },
    inventory: { inHand: 214, toReceive: 44 },
    product: { lowStock: 2, groups: 14, total: 104 },
    users: { customers: 1800, suppliers: 27 },
  };

  // Chart data
  const lineData = [
    { name: "Jan", Expense: 68000, Profit: 44000, Purchase: 16000, Loss: 89000, Sales: 96000 },
    { name: "Feb", Expense: 87000, Profit: 23000, Purchase: 38000, Loss: 65000, Sales: 46000 },
    { name: "Mar", Expense: 64000, Profit: 45000, Purchase: 78000, Loss: 10000, Sales: 89000 },
    { name: "Apr", Expense: 29000, Profit: 13000, Purchase: 60000, Loss: 80000, Sales: 85000 },
    { name: "May", Expense: 48000, Profit: 59000, Purchase: 91000, Loss: 20000, Sales: 30000 },
    { name: "Jun", Expense: 35000, Profit: 74000, Purchase: 13000, Loss: 90000, Sales: 55000 },
    { name: "Jul", Expense: 30000, Profit: 87000, Purchase: 50000, Loss: 59000, Sales: 70000 },
    { name: "Aug", Expense: 23000, Profit: 58000, Purchase: 35000, Loss: 80000, Sales: 90000 },
    { name: "Sep", Expense: 41000, Profit: 69000, Purchase: 89000, Loss: 95000, Sales: 20000 },
    { name: "Oct", Expense: 15000, Profit: 68000, Purchase: 37000, Loss: 50000, Sales: 98000 },
    { name: "Nov", Expense: 89000, Profit: 47000, Purchase: 60000, Loss: 15000, Sales: 28000 },
    { name: "Dec", Expense: 69000, Profit: 95000, Purchase: 30000, Loss: 58000, Sales: 86000 },
  ];

  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <ManagerHeader />
      <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-tr from-white via-slate-50 to-blue-100">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Inventory Management - Events</h1>
        </div>

        {/* Inventory Table Header */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Plus size={16} /> Add Product
          </button>
        </div>

        {/* Inventory Table */}
        <div className="overflow-x-auto bg-white rounded shadow mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">SKU</th>
                <th className="px-4 py-2">Incoming</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">In Stock</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.sku}</td>
                  <td className="px-4 py-2">{item.incoming}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.stock}</td>
                  <td className="px-4 py-2">${item.value}</td>
                  <td className="px-4 py-2">
                    {item.status === "in-stock" ? (
                      <span className="text-green-600 flex items-center gap-1">
                        <CheckCircle size={14} /> In Stock
                      </span>
                    ) : (
                      <span className="text-red-500 flex items-center gap-1">
                        <XCircle size={14} /> Out of Stock
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Product Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Add New Product</h2>
              <form onSubmit={handleAddProduct} className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 rounded"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full border p-2 rounded"
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="SKU"
                  className="w-full border p-2 rounded"
                  value={newProduct.sku}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, sku: e.target.value })
                  }
                  required
                />
                <input
                  type="number"
                  placeholder="Incoming"
                  className="w-full border p-2 rounded"
                  value={newProduct.incoming}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, incoming: Number(e.target.value) })
                  }
                />
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full border p-2 rounded"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: Number(e.target.value) })
                  }
                />
                <input
                  type="number"
                  placeholder="Stock"
                  className="w-full border p-2 rounded"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: Number(e.target.value) })
                  }
                />
                <input
                  type="number"
                  placeholder="Value"
                  className="w-full border p-2 rounded"
                  value={newProduct.value}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, value: Number(e.target.value) })
                  }
                />
                <select
                  className="w-full border p-2 rounded"
                  value={newProduct.status}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, status: e.target.value })
                  }
                >
                  <option value="in-stock">In Stock</option>
                  <option value="out-stock">Out of Stock</option>
                </select>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Sales Overview</h4>
            <p>Total Sales: <strong>{stats.sales.total}</strong></p>
            <p>Revenue: <strong>{stats.sales.revenue}</strong></p>
            <p>Cost: <strong>{stats.sales.cost}</strong></p>
            <p>Profit: <strong>{stats.sales.profit}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Purchase Overview</h4>
            <p>No. of Purchases: <strong>{stats.purchase.total}</strong></p>
            <p>Cost: <strong>{stats.purchase.cost}</strong></p>
            <p>Cancelled Orders: <strong>{stats.purchase.cancelled}</strong></p>
            <p>Returns: <strong>{stats.purchase.returned}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Users</h4>
            <p>Total Customers: <strong>{stats.users.customers}</strong></p>
            <p>Total Suppliers: <strong>{stats.users.suppliers}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Inventory Summary</h4>
            <p>Quantity in Hand: <strong>{stats.inventory.inHand}</strong></p>
            <p>To Receive: <strong>{stats.inventory.toReceive}</strong></p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-700 mb-2">Product Details</h4>
            <p>Low Stock Items: <strong>{stats.product.lowStock}</strong></p>
            <p>Item Groups: <strong>{stats.product.groups}</strong></p>
            <p>Total Items: <strong>{stats.product.total}</strong></p>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-sm text-gray-600 mb-4">Expense vs Profit (Last 12 months)</h3>
          <LineChart width={900} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RTooltip />
            <RLegend />
            <RLine type="monotone" dataKey="Expense" stroke="#f97316" />
            <RLine type="monotone" dataKey="Profit" stroke="#10b981" />
            <RLine type="monotone" dataKey="Purchase" stroke="#3b82f6" />
            <RLine type="monotone" dataKey="Loss" stroke="#db1689" />
            <RLine type="monotone" dataKey="Sales" stroke="#1b38c1" />
          </LineChart>
        </div>
      </main>
    </div>
  );
};

export default ManagerEvents;
