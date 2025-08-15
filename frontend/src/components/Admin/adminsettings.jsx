import React, { useState } from 'react'
import AdminHeader from './AdminHeader/adminheader'

const adminsettings = () => {
  const [mobilePush, setMobilePush] = useState(true);
  const [desktopPush, setDesktopPush] = useState(true);
  const [emailPush, setEmailPush] = useState(false);

  return (
    <div className="flex h-screen font-sans bg-blue-50">

      {/* Sidebar */}
      <AdminHeader />

      {/* /* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-50 min-h-screen font-inter">
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <h1 className="text-lg md:text-xl ml-12 font-semibold text-gray-800">
              Settings &gt; General
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded px-3 py-1 w-full sm:w-48"
              />
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl shadow p-4 md:p-6 w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              My Notifications
            </h2>

            <div className="mb-4">
              <p className="font-medium mb-2 text-gray-700">Notify me when...</p>
              <label className="block mb-1">
                <input type="checkbox" className="mr-2" defaultChecked /> Daily
                productivity update
              </label>
              <label className="block mb-1">
                <input type="checkbox" className="mr-2" /> New event created
              </label>
              <label className="block mb-1">
                <input type="checkbox" className="mr-2" defaultChecked /> When
                added on new team
              </label>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span>Mobile push notifications</span>
                <input
                  type="checkbox"
                  checked={mobilePush}
                  onChange={() => setMobilePush(!mobilePush)}
                  className="toggle toggle-primary"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Desktop notification</span>
                <input
                  type="checkbox"
                  checked={desktopPush}
                  onChange={() => setDesktopPush(!desktopPush)}
                  className="toggle toggle-primary"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Email notification</span>
                <input
                  type="checkbox"
                  checked={emailPush}
                  onChange={() => setEmailPush(!emailPush)}
                  className="toggle toggle-primary"
                />
              </div>
            </div>

            {/* My Settings */}
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              My Settings
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Appearance</span>
                <select className="border rounded px-2 py-1 w-full sm:w-auto">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Two-factor authentication</span>
                <span className="text-gray-500 text-xs">
                  Keep your account secure
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Language</span>
                <select className="border rounded px-2 py-1 w-full sm:w-auto">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default adminsettings
