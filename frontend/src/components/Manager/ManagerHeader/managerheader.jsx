import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManagerHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col bg-slate-800 h-screen">
      <aside className="w-64 text-white shadow-lg p-6 flex flex-col h-full rounded-r-2xl">
        <nav className="flex-1">
          {[
            { name: 'Home', path: '/manager/managerhome' },
            { name: 'Services', path: '/manager/managerservices' },
            { name: 'Events', path: '/manager/managerevents' },
            { name: 'Blog', path: '/manager/managerblog' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 my-1 rounded-lg hover:bg-slate-200 hover:text-slate-950 transition font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* Account Settings Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center w-full px-4 py-2 my-1 rounded-lg hover:bg-slate-200 hover:text-slate-950 transition font-medium"
            >
              About Settings
              <svg
                className="h-5 w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="ml-4 mt-1 shadow-md bg-white text-gray-700 w-[95%]">
                <Link
                  to="/manager/manageraccountsetting"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 bg-gray-700 text-white hover:text-gray-900"
                >
                  Account Settings
                </Link>
                <Link
                  to="/manager/password"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 bg-gray-700 text-white hover:text-gray-900"
                >
                  Password
                </Link>
                <Link
                  to="/manager/securityprivacy"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 bg-gray-700 text-white hover:text-gray-900"
                >
                  Security & Privacy
                </Link>
                <Link
                  to="/manager/notification"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 bg-gray-700 text-white hover:text-gray-900"
                >
                  Notification
                </Link>
                <Link
                  to="/manager/about-us"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 bg-gray-700 text-white hover:text-gray-900"
                >
                  About Us
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem('adminToken');
            window.location.href = '/manager';
          }}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Logout for Manager...!
        </button>
      </aside>
    </div>
  );
};

export default ManagerHeader;
