import React from 'react';
import ManagerHeader from '../ManagerHeader/managerheader';
import { Bell, Mail } from 'lucide-react';
import { Package, AlertCircle, CheckCircle } from 'lucide-react';

const inventoryNotifications = [
  {
    id: 1,
    type: 'low-stock',
    message: 'Low stock alert for item: Printer Cartridges',
    time: 'Just now',
    color: 'bg-red-500',
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
  {
    id: 2,
    type: 'restocked',
    message: 'Item restocked: Laptops (Qty: 20)',
    time: '10 min ago',
    color: 'bg-green-500',
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
  },
  {
    id: 3,
    type: 'low-stock',
    message: 'Low stock warning: USB Drives',
    time: '30 min ago',
    color: 'bg-red-500',
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
  {
    id: 4,
    type: 'added',
    message: 'New item added: Wireless Keyboards',
    time: '1 hour ago',
    color: 'bg-blue-500',
    icon: <Package className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 5,
    type: 'restocked',
    message: 'Item restocked: Office Chairs (Qty: 15)',
    time: '2 hours ago',
    color: 'bg-green-500',
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
  },
];

const ManagerNotification = () => {
  return (
    <div className="flex h-screen bg-green-50 font-sans">
      {/* Sidebar */}
      <ManagerHeader />
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Inventory Notifications</h1>

          {/* Notifications List */}
          <div className="bg-white shadow-lg rounded-md divide-y">
            {inventoryNotifications.map((note) => (
              <div
                key={note.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-2 bg-gray-100">
                    {note.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm font-medium">{note.message}</p>
                    <p className="text-xs text-gray-400">{note.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    
    </div>
  );
};

export default ManagerNotification;
