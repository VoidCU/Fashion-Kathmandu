import { useState } from 'react';
import axiosInstance from '../../config/Axios';

function ProductQuery({ isOpen, onClose, onSubmit, product }) {
  const [newquery, setnewQuery] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleClose = () => {
    setnewQuery({
      name: '',
      email: '',
      query: '',
    });
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/api/queries/${product.id}`, newquery)
      .then(() => {
        alert('Review submitted successfully! We will get back to you soon.');
      })
      .catch((error) => {
        alert('Error adding review:', error);
      });
    onSubmit();
    setnewQuery({
      name: '',
      email: '',
      query: '',
    });
    onClose();
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
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold mb-4">
                Enter Your Query For: {product.name}
              </h2>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={newquery.name}
                onChange={(e) =>
                  setnewQuery({ ...newquery, name: e.target.value })
                }
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newquery.email}
                onChange={(e) =>
                  setnewQuery({ ...newquery, email: e.target.value })
                }
                required
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                placeholder="Your Query"
                value={newquery.query}
                onChange={(e) =>
                  setnewQuery({ ...newquery, query: e.target.value })
                }
                required
                className="w-full mb-2 p-2 border rounded h-32"
              ></textarea>
              <button
                type="submit"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuery;
