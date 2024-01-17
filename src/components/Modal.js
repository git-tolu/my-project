import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    // Implement your save logic here
    console.log('Saving:', name);
    closeModal(); // Close the modal after saving
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
