import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className="p-3 relative">
      {/* Hamburger Button */}


      {/* Navbar Links */}
      <div
        className="flex-col md:flex md:flex-row md:items-center gap-4 mt-4 md:mt-0 md:gap-4 md:justify-end transition-all duration-500"
      >
        <Link
          to="/"
          className="px-4 py-2 text-blue-600 hover:text-blue-800 bg-white shadow-lg hover:shadow-rose-200 shadow-amber-50 font-serif hover:underline animate-pulse hover:animate-none rounded hover transition"
        >
          Home
        </Link>
        <Link
          to="/admin"
          className="px-4 py-2 text-blue-600 hover:text-blue-800 bg-white shadow-lg hover:shadow-rose-200 shadow-amber-50 font-serif hover:underline animate-pulse hover:animate-none rounded hover transition"
        >
          Admin
        </Link>
        <Link
          to="/manager"
          className="px-4 py-2 text-blue-600 hover:text-blue-800 bg-white shadow-lg hover:shadow-rose-200 shadow-amber-50 font-serif hover:underline animate-pulse hover:animate-none rounded hover transition"
        >
          Manager
        </Link>
        <Link
          to="/sales"
          className="px-4 py-2 text-blue-600 hover:text-blue-800 bg-white shadow-lg hover:shadow-rose-200 shadow-amber-50 font-serif hover:underline animate-pulse hover:animate-none rounded hover transition"
        >
          Sales
        </Link>
        <Link
          to="/customer"
          className="px-4 py-2 text-blue-600 hover:text-blue-800 bg-white shadow-lg hover:shadow-rose-200 shadow-amber-50 font-serif hover:underline animate-pulse hover:animate-none rounded hover transition"
        >
          Customer
        </Link>
      </div>
    </div>
  );
}
