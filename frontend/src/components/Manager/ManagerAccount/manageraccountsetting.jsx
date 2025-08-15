import React, { useState } from 'react'
import ManagerHeader from '../ManagerHeader/managerheader';

const manageraccountsetting = () => {

  return (
    <div className="flex h-screen font-sans bg-green-50">
      <ManagerHeader />
      <div className="min-h-screen p-10 flex justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl flex overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-1/4 border-r p-6 bg-white">
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-20 h-20 border-2 border-gray-700 rounded-full mb-2"
            />
            <p className="font-semibold">Steph Crown</p>
            <span className="text-sm text-gray-500">@StephCrown</span>
          </div>
        </div>

        {/* Main Form */}
        <div className="w-3/4 p-8 space-y-6">
          <h2 className="text-xl font-semibold">Account Setting</h2>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              className="border rounded px-4 py-2 w-full"
              placeholder="First Name"
            />
            <input
              name="lastName"
              className="border rounded px-4 py-2 w-full"
              placeholder="Last Name"
            />
            <input
              name="email"
              className="border rounded px-4 py-2 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              name="phone"
              className="border rounded px-4 py-2 w-full"
              placeholder="Phone"
            />
            <input
              name="company"
              className="border rounded px-4 py-2 w-full"
              placeholder="Company"
            />
            <div className="flex gap-2">
              <input
                name="city"
                className="border rounded px-4 py-2 w-full"
                placeholder="City"
              />
              <button className="bg-gray-200 px-4 py-2 rounded">Change</button>
            </div>
          </div>

          {/* Bio */}
          <div>
            <textarea
              name="bio"
              rows="2"
              placeholder='Enater Bio...!'
              className="w-full border rounded px-4 py-2"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Update
            </button>
            <button className="border px-4 py-2 rounded text-gray-600 hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default manageraccountsetting
