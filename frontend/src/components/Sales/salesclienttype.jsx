import React, { useState } from "react";
import SalesHeader from "./SalesHeader/salesheader";

const SalesClientType = () => {
  const [opportunity, setOpportunity] = useState("");
  const [tableData, setTableData] = useState([
    { oppId: 1, name: "TCS", createdByUserId: 6 },
    { oppId: 2, name: "microsoft", createdByUserId: 6 },
    { oppId: 3, name: "GPS Tracking", createdByUserId: 6 },
    { oppId: 4, name: "Telemetry", createdByUserId: 6 },
    { oppId: 5, name: "Electronics", createdByUserId: 6 },
    { oppId: 6, name: "Software", createdByUserId: 6 },
  ]);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (opportunity.trim() === "") {
      setError("Opportunity Type is required");
      return;
    }

    const newId = tableData.length
      ? tableData[tableData.length - 1].oppId + 1
      : 1;

    const newEntry = {
      oppId: newId,
      name: opportunity,
      createdByUserId: 6,
    };

    setTableData([...tableData, newEntry]);
    setOpportunity("");
    setError("");
  };

  return (
    <div className="flex h-screen font-sans bg-white">
      {/* Sidebar/Header */}
      <SalesHeader />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white p-8 max-w-4xl mx-auto mt-10">
          {/* Page Title */}
          <h1 className="text-3xl font-sans rounded-md text-center bg-rose-100 text-gray-900 mb-6">
            Client Type Management
          </h1>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm font-medium">
              {error}
            </div>
          )}

          {/* Input & Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Enter Opportunity Type"
              value={opportunity}
              onChange={(e) => setOpportunity(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-700"
            />
            <button
              onClick={handleAdd}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition duration-150"
            >
              Add Type
            </button>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 rounded-md overflow-hidden">
              <thead className="bg-white text-center text-green-800">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    OppId
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    CreatedByUserId
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.oppId} className="hover:bg-gray-100 text-center">
                    <td className="px-4 py-2 border border-gray-200">
                      {row.oppId}
                    </td>
                    <td className="px-4 py-2 border border-gray-200">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-200">
                      {row.createdByUserId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesClientType;
