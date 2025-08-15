import React, { useState } from 'react';

const NewProduct = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    totalComp: '',
    salary: '',
    actual: '',
    recurring: '',
    offset: '',
    offCycle: '',
    unpaid: '',
    status: '',
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords((prev) => [...prev, formData]);
    setFormData({
      image: null,
      name: '',
      totalComp: '',
      salary: '',
      actual: '',
      recurring: '',
      offset: '',
      offCycle: '',
      unpaid: '',
      status: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center underline text-gray-800 mb-4">Employee Compensation Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <label className="block text-sm font-medium mb-1">Image Upload :- </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.files[0] }))}
          className="p-2 border rounded"
          required
        />

        <label className="block text-sm font-medium mb-1">Employee Name :- </label>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <label className="block text-sm font-medium mb-1">Compensation Details :- </label>
        <input
          type="number"
          name="totalComp"
          placeholder="Total Compensation"
          value={formData.totalComp}
          onChange={handleChange}
          required
          min="0"
          className="p-2 border rounded"
        />

        <label className="block text-sm font-medium mb-1">Salary :- </label>
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
          min="0"
          className="p-2 border rounded"
        />
        <label className="block text-sm font-medium mb-1">Actual :- </label>
        <input
          type="number"
          name="actual"
          placeholder="Actual"
          value={formData.actual}
          onChange={handleChange}
          required
          min="0"
          className="p-2 border rounded"
        />

        <label className="block text-sm font-medium mb-1">Recurring :- </label>
        <input
          type="number"
          name="recurring"
          placeholder="Recurring"
          value={formData.recurring}
          onChange={handleChange}
          required
          min="0"
          className="p-2 border rounded"
        />

        <label className="block text-sm font-medium mb-1">Offset :- </label>
        <input
          type="number"
          name="offset"
          placeholder="Offset"
          value={formData.offset}
          onChange={handleChange}
          required
          min="0"
          className="p-2 border rounded"
        />

        <label className="block text-sm font-medium mb-1">Off Cycle :- </label>
        <input
          type="number"
          name="offCycle"
          placeholder="Off Cycle"
          value={formData.offCycle}
          onChange={handleChange}
          required
          min="0"
          className="p-2 border rounded"
        />

        <label className="block text-sm font-medium mb-1">Unpaid :- </label>
        <input
          type="number"
          name="unpaid"
          placeholder="Unpaid"
          value={formData.unpaid}
          onChange={handleChange}
          required
          min="0"
          className="p-2 border rounded"
        />

        <label className="block text-sm font-medium mb-1">Status :- </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="On Leave">On Leave</option>
        </select>

        <button
          type="submit"
          className="col-span-1 sm:col-span-2 font-bold md:col-span-3 lg:col-span-4 bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Employee Form Submitted
        </button>
      </form>

      <hr className="my-5" />

      <div className="mt-0">
        <h3 className="text-2xl underline font-bold text-gray-800 mb-4 text-center"> All Employee Records</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className='text-gray-700'>
                <th className="border-b p-1">Image</th>
                <th className="border-b p-1">Name</th>
                <th className="border-b p-1">Total Comp</th>
                <th className="border-b p-1">Salary</th>
                <th className="border-b p-1">Actual</th>
                <th className="border-b p-1">Recurring</th>
                <th className="border-b p-1">Offset</th>
                <th className="border-b p-1">Off Cycle</th>
                <th className="border-b p-1">Unpaid</th>
                <th className="border-b p-1">Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td className="border-b p-2">
                    {record.image && <img src={URL.createObjectURL(record.image)} alt="Employee" className="w-10 h-10 rounded-full" />}
                  </td>
                  <td className="border-b p-2">{record.name}</td>
                  <td className="border-b p-2">{record.totalComp}</td>
                  <td className="border-b p-2">{record.salary}</td>
                  <td className="border-b p-2">{record.actual}</td>
                  <td className="border-b p-2">{record.recurring}</td>
                  <td className="border-b p-2">{record.offset}</td>
                  <td className="border-b p-2">{record.offCycle}</td>
                  <td className="border-b p-2">{record.unpaid}</td>
                  <td className="border-b p-2">{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
