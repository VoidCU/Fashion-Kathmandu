import { useState } from 'react';

function ProductQuery({ isOpen, onClose, onSubmit, productName }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleClose = () => {
    setEmail('');
    setName('');
    setQuery('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, query });
    setName('');
    setEmail('');
    setQuery('');
    onclose();
  };

  return (
    <div>
      <div
        className={`modal fixed inset-0 flex items-center justify-center z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="bg-[#00000050] w-[100vw] h-[100vh] flex">
          <div className="modal-content bg-white p-6 rounded shadow-lg max-w-md m-auto">
            <h2 className="text-xl font-semibold mb-4">
              Enter Your Query For: {productName}
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              placeholder="Your Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full mb-2 p-2 border rounded h-32"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="bg-[#008da8] text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              onClick={handleClose}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded ml-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuery;
