import React from 'react'
import CustomerHeader from './CustomerHeader/customerheader'

const tickets = [
  {
    id: "#665",
    requester: "Floratina",
    priority: "Highest",
    subject: "Login issue",
    status: "Open",
  },
  {
    id: "#662",
    requester: "Melonishop",
    priority: "Low",
    subject: "Customer complaint",
    status: "Pending",
  },
  {
    id: "#642",
    requester: "Tica Co.",
    priority: "Highest",
    subject: "Information request",
    status: "Open",
    isActive: true,
  },
  {
    id: "#659",
    requester: "Brilliant Boutique",
    priority: "High",
    subject: "Updating details",
    status: "Closed",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Open":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-purple-100 text-purple-700";
    case "Closed":
      return "bg-gray-100 text-gray-600";
    case "On hold":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "";
  }
};

const customerproduct = () => {
  return (
   <div className="flex h-screen font-sans bg-blue-50">

        <CustomerHeader />
         <main className="flex-1 p-6 overflow-y-auto">

            <div className="flex justify-between items-center mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">
            + New Ticket
          </button>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search requester"
              className="px-3 py-2 border rounded text-sm"
            />
            <select className="border rounded px-3 py-2 text-sm">
              <option>Filters</option>
              <option>Priority</option>
              <option>Status</option>
            </select>
          </div>
        </div>

        <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Requester</th>
              <th className="p-3 text-left">Priority</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr
                key={index}
                className={`border-t ${ticket.isActive ? "bg-blue-50" : ""}`}
              >
                <td className="p-3">{ticket.id}</td>
                <td className="p-3">{ticket.requester}</td>
                <td className="p-3">{ticket.priority}</td>
                <td className="p-3">{ticket.subject}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Ticket Details */}
      <aside className="w-[28rem] bg-white border-l flex flex-col p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg">Tica Co.</h3>
            <p className="text-sm text-gray-500">User: Simin Nikmanesh</p>
          </div>
          <button className="text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded">
            Close Ticket
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto pr-2 text-sm">
          <div className="bg-gray-100 p-2 rounded">
            More information to proceed with the verification.
          </div>
          <div className="bg-gray-100 p-2 rounded">
            I’ve already attached all of the documents...
          </div>
          <div className="bg-gray-100 p-2 rounded">
            Screenshot attached: <span className="text-blue-600">Screenshot_2022_04.jpg</span>
          </div>
          <div className="bg-blue-100 p-2 rounded self-end">
            OK. Let me check and notify you if we need anything else.
          </div>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Message"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
      </aside>
    </div>
  )
}

export default customerproduct
