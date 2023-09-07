import { useParams, Link } from 'react-router-dom';
import { useReducer, useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';
import ProductCarousel from '../../components/Carousel/ProductCarousel';
import { useProducts } from '../../context/ProductsContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function ProductDetails() {
  const { products } = useProducts();
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    product: [],
    error: '',
  });

  const [currentView, setCurrentView] = useState('photo');
  const [selectedTab, setSelectedTab] = useState('description');
  // const [relatedProducts, setRelatedProducts] = useState([]);

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

  const related = products.filter(
    (x) => x.category === product.category && x.slug !== product.slug
  );
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
            to={`/category/${product.category}`}
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
      <div className="max-w-6xl p-4 m-auto">
        <div className="font-bold text-xl text-center pb-4">
          Related Products
        </div>
        {related.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {related.map((product) => (
              <div
                key={product.id}
                className="flex flex-col  justify-center items-center border-gray-200 border-2 w-[90vw]  md:w-[300px] h-[175px] hover:bg-[#d9d9d9] hover:cursor-pointer hover:transition-transform duration-300 hover:border-0 hover:scale-105"
              >
                <Link to={`/product/${product.slug}`}>
                  <div className="flex gap-4">
                    <div className="min-w-[75px] md:w-[25%]">
                      <div>
                        <img
                          className=" object- w-full max-h-[150px]"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </div>
                    <div className="min-w-[50%]">
                      <div className="font-light text-sm">
                        {product.category}
                      </div>
                      <div className="font-bold text-xl pb-2">
                        {product.name}
                      </div>
                      <span className="font-light text-sm">Starts</span>
                      <div className="font-extrabold text-[#008da8] text-2xl">
                        ${product.price}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div key="noData">No related products</div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
