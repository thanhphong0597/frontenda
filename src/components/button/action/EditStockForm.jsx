import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function EditStockForm({ initialValues = {}, onSubmit, onCancle }) {
  const [color, setColor] = useState(initialValues.color || '');
  const [size, setSize] = useState(initialValues.size || '');
  const [number, setNumber] = useState(initialValues.number || '')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues.id)
    console.log(size)
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        "id": initialValues.id,
        "color": color,
        "size": size || 0,
        "number": number
      }),
    };

    fetch("https://localhost:7091/api/products/editstock", options)
      .then((res) => res.json())
      .then((data) => console.log(data));

    onSubmit()
  };

  const handleCancel = () => {
    onCancle();
  };

  return (

    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">My Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Color
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={color}
                disabled
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Size
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full"
                id="name"
                type="text"
                placeholder="size"
                value={size}
                disabled
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                Number
              </label>

              <div className="flex items-center">

                <input
                  type="number"
                  className="border-l border-r rounded-none py-2 px-3 w-full text-center"
                  id="price"
                  placeholder="Enter the price"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />


              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStockForm;
