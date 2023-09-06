import { useParams, Link } from 'react-router-dom';
import { useReducer, useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';
import ProductCarousel from '../../components/Carousel/ProductCarousel';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, product: action.payload, error: '' };
    case 'FETCH_ERROR':
      return { ...state, loading: false, product: [], error: action.payload };
    default:
      return state;
  }
};

function ProductDetails() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    product: [],
    error: '',
  });

  const [currentView, setCurrentView] = useState('photo');
  const [selectedTab, setSelectedTab] = useState('description');

  const toggleView = (view) => {
    setCurrentView(view);
  };
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/api/product/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      }
    })();
  }, [slug]);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <div className="bg-[#d9d9d9]">
        <div className="max-w-6xl m-auto p-4 ">
          <Link
            to="/"
            className="text-black font-semibold text-sm hover:text-[#008da8]"
          >
            Home
          </Link>{' '}
          /{' '}
          <Link
            to="/"
            className="text-black font-semibold text-sm hover:text-[#008da8]"
          >
            {product.category}
          </Link>{' '}
          /{' '}
          <Link
            to={`/product/${product.slug}`}
            className="text-[#008da8] text-sm"
          >
            {product.name}
          </Link>
        </div>
      </div>
      <div className="max-w-6xl m-auto p-4 flex justify-around flex flex-col md:flex-row">
        <div className="w-full md:w-[350px] h-[475px] p-4">
          {currentView === 'photo' && <ProductCarousel />}
          {currentView === '3d' && <div>Check</div>}{' '}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => toggleView('photo')}
              className={`bg-gray-500 hover:bg-blue-700 text-white font-bold my-2 py-1 px-4 rounded ${
                currentView === 'photo' ? 'bg-[#008ba8]' : ''
              }`}
            >
              Photo
            </button>
            <button
              onClick={() => toggleView('3d')}
              className={`bg-gray-500 hover:bg-blue-700 text-white font-bold my-2 py-1 px-4 rounded ${
                currentView === '3d' ? 'bg-[#008ba8]' : ''
              }`}
            >
              3D
            </button>
          </div>
        </div>
        <div className="flex flex-col p-10 md:pt-20 text-left gap-4">
          <div className="font-bold text-3xl">{product.name}</div>
          <div className="text-lg">{product.description}</div>
          <div className="font-bold text-4xl text-[#008ba8]">
            ${product.price}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleTabClick('description')}
              className={`${
                selectedTab === 'description'
                  ? 'bg-[#008ba8] text-white'
                  : 'bg-gray-300 text-gray-700'
              } py-2 px-4 rounded-tr-xl rounded-tl-xl`}
            >
              Description
            </button>
            <button
              onClick={() => handleTabClick('materials')}
              className={`${
                selectedTab === 'materials'
                  ? 'bg-[#008ba8] text-white'
                  : 'bg-gray-300 text-gray-700'
              } py-2 px-4 rounded-tr-xl rounded-tl-xl`}
            >
              Materials
            </button>
            <button
              onClick={() => handleTabClick('reviews')}
              className={`${
                selectedTab === 'reviews'
                  ? 'bg-[#008ba8] text-white'
                  : 'bg-gray-300 text-gray-700'
              } py-2 px-4 rounded-tr-xl rounded-tl-xl`}
            >
              Reviews
            </button>
          </div>
          <hr className="border-1 border-[#008ba8] max-w-6xl m-auto" />
          <div className="mt-4 max-w-xl text-center m-auto min-h-[200px]">
            {selectedTab === 'description' && (
              <div>
                <p>{product.detailed_description}</p>
              </div>
            )}
            {selectedTab === 'materials' && (
              <div>
                <ul>
                  {product.materials.map((material, index) => (
                    <li key={index}>
                      <i className="fa fa-check-square text-[#adadad]" />{' '}
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedTab === 'reviews' && (
              <div>
                <p>Reviews</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
