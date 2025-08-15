import React from 'react'
import CustomerHeader from './CustomerHeader/customerheader'
import { HeartPulse, Search, Bell } from "lucide-react";

const customerhome = () => {
  return (
    <div className="flex h-screen font-sans bg-blue-50">

        <CustomerHeader />
         <main className="flex-1 p-6 overflow-y-auto">

            {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Patient Overview</h2>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5" />
            <Bell className="w-5 h-5" />
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="rounded-full w-8 h-8"
            />
          </div>
        </div>

        {/* Profile and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://i.pravatar.cc/100"
              alt="Patient"
              className="rounded-full w-20 h-20 mx-auto mb-2"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p className="text-gray-500">Allergy</p>
              <div className="mt-2 text-sm">
                <p>DOB: 03/13/1998</p>
                <p>Age: 22y 4m</p>
                <p>Weight: 168 lb</p>
                <p>Height: 5'9"</p>
              </div>
              <button className="mt-4 bg-teal-600 text-white px-3 py-1 rounded">Send Message</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-sm">
            <p><strong>Home Address:</strong><br />123 Broadway, New York, NY 10012</p>
            <p className="mt-2"><strong>Mobile Phone:</strong><br />917 (543)-1234</p>
            <p className="mt-2"><strong>Home Phone:</strong><br />212 (123)-1234</p>
            <p className="mt-2"><strong>Work Phone:</strong><br />718 (702)-9876</p>
            <p className="mt-2"><strong>Email:</strong><br />j.smith@gmail.com</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-sm">
            <h4 className="font-semibold mb-2">Current Medications</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Desloratadine (Clarinex)</li>
              <li>Ketorolac (Acular, Acuvail)</li>
              <li>Azelastine (Astelin, Astepro)</li>
            </ul>
          </div>
        </div>

        {/* Vitals, Notes, Lab Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Vitals */}
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <h4 className="font-semibold mb-2">Vitals</h4>
            <div className="flex justify-around text-lg">
              <div>
                <p className="text-gray-500 text-sm">Blood Pressure</p>
                <p>121/75</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Pulse</p>
                <p>67 BPM</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white p-4 rounded-lg shadow text-sm md:col-span-1">
            <h4 className="font-semibold mb-2">Notes</h4>
            <p className="text-gray-500">01/06/2025</p>
            <p className="mt-2">
              Patient having severe sinusitis about two to three months ago with facial discomfort, nasal congestion, eye pain, and postnasal drip symptoms.
              Probable environmental inhalant allergies, probable food allergies, and history of asthma.
            </p>
          </div>

          {/* Lab Results */}
          <div className="bg-white p-4 rounded-lg shadow text-sm">
            <h4 className="font-semibold mb-2">Lab Results</h4>
            <ul className="space-y-1">
              <li>📄 X-Ray - John Smith <span className="text-gray-400 float-right">01/06/2025</span></li>
              <li>📄 Allergen-specific IgE <span className="text-gray-400 float-right">31/05/2025</span></li>
              <li>📄 Nasal Endoscopy <span className="text-gray-400 float-right">28/05/2025</span></li>
              <li>📄 CT - John Smith <span className="text-gray-400 float-right">29/05/2025</span></li>
            </ul>
          </div>
        </div>

         </main>
      
    </div>
  )
}

export default customerhome
