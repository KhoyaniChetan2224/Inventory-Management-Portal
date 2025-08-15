import React, { useState } from 'react'
import CustomerHeader from './CustomerHeader/customerheader'
import { Plus, Filter, Eye, Search } from "lucide-react";

const items = [
  {
    name: "Running shoes light series",
    image: "https://i.pinimg.com/736x/44/a5/d1/44a5d1f47f156cd73bb3b6aa27214eba.jpg",
    items: "2",
    statusColor: "text-green-500",
  },
  {
    name: "Black sport and outdoor hat",
    image: "https://i.pinimg.com/1200x/bc/ec/88/bcec88ab7222086ebb0284c6430cbeb3.jpg",
    items: "3",
    statusColor: "text-green-500",
  },
  {
    name: "Large sport equipment bag",
    image: "https://i.pinimg.com/1200x/5a/d6/e8/5ad6e8beaf327a76842fe9315a074930.jpg",
    items: "2",
    statusColor: "text-green-500",
  },
  {
    name: "Black Red parachute jacket",
    image: "https://i.pinimg.com/736x/11/51/71/11517192a4b9dbbfb30cc069cd4ce7ab.jpg",
    items: "1",
    statusColor: "text-red-500",
  },
];

const customerpayment = () => {

     const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex h-screen font-sans bg-blue-50">

        <CustomerHeader />
         <main className="flex-1 p-6 overflow-y-auto">
  {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-gray-500">4 items</p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search items"
              className="border px-3 py-1 rounded text-sm w-40"
            />
            <button className="text-gray-600 hover:text-black">
              <Filter size={16} />
            </button>
            <button className="text-gray-600 hover:text-black">
              <Eye size={16} />
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow">
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white p-4 rounded-lg shadow hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-sm font-semibold">{item.name}</p>
              <p className={`text-xs mt-1 ${item.statusColor}`}>{item.items}</p>

              {/* Hover Tooltip */}
              {hoveredIndex === index && (
                <div className="absolute top-full mt-2 z-10 left-1/2 -translate-x-1/2 w-64 bg-gray-800 text-white text-xs p-4 rounded-lg shadow-lg">
                  <div className="text-gray-400 text-[10px] mb-2">Data from: 13 - 18 June 2025</div>
                  <div className="mb-2">
                    <p>Total Purchased: <strong>8,547</strong></p>
                    <p>Total Views: <strong>128,547</strong></p>
                  </div>
                  <div>
                    <p className="mb-1">Purchased stats last 6 days:</p>
                    <div className="flex items-end gap-1 h-20">
                      {[400, 600, 300, 700, 800, 650].map((val, i) => (
                        <div
                          key={i}
                          className="w-3 bg-green-400"
                          style={{ height: `${(val / 800) * 80}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Add Button */}
        <button className="absolute bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg">
          <Plus size={20} />
        </button>
            
         </main>
    </div>
  )
}

export default customerpayment
