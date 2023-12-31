import { useParams, Link } from 'react-router-dom';
import { useReducer, useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';
import ProductCarousel from '../../components/Carousel/ProductCarousel';
import { useProducts } from '../../context/ProductsContext';
import RelatedProduct from './RelatedProduct';
import ProductQuery from '../../components/Query/ProductQuery';
import ReviewProduct from './ReviewProduct';
import Three60 from '../../components/ThreeD/Three60';

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
  const [isQueryModalOpen, setQueryModalOpen] = useState(false);

  const toggleView = (view) => {
    setCurrentView(view);
  };
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleQuerySubmit = (queryData) => {
    setQueryModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/api/product/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
        setCurrentView('photo');
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
      <div className="max-w-6xl m-auto p-4 flex justify-around flex flex-col md:flex-row ">
        <div className="flex flex-col justify-between">
          <div className="w-full md:w-[350px] h-[475px]  flex items-center justify-center">
            {currentView === 'photo' && product && (
              <ProductCarousel key={product.slug} images={product.images} />
            )}
            {currentView === '3d' && (
              <div className="flex items-center justify-center">
                {' '}
                <Three60 images={product.threeDView} />
              </div>
            )}{' '}
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => toggleView('photo')}
              className={` hover:bg-blue-700 text-white font-bold my-2 py-1 px-4 rounded ${
                currentView === 'photo' ? 'bg-[#008ba8]' : 'bg-gray-500'
              }`}
            >
              Photo
            </button>
            {product.threeDView.length > 0 && (
              <button
                onClick={() => toggleView('3d')}
                className={` hover:bg-blue-700 text-white font-bold my-2 py-1 px-4 rounded ${
                  currentView === '3d' ? 'bg-[#008ba8]' : 'bg-gray-500'
                }`}
              >
                3D
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col p-10 md:pt-20 text-left gap-4 md:w-[50%]">
          <div className="font-bold text-3xl">{product.name}</div>
          <div className="">{product.description}</div>
          {product.price && (
            <div className="font-bold text-4xl text-[#008ba8]">
              ${product.price}
            </div>
          )}
          <div className="font-bold text-xl ">Sizes: {product.sizes}</div>
          <div className="flex items-center">
            {product.inStock ? (
              <div className="text-green-500 flex items-center">
                <i className="fa fa-check-circle mr-2"></i> In Stock
              </div>
            ) : (
              <div className="text-red-500 flex items-center">
                <i className="fa fa-times-circle mr-2"></i> Out of Stock
              </div>
            )}
          </div>
          <div className="pt-4">
            <button
              className="px-4 py-2 bg-[#008da8] font-semibold text-white rounded hover:bg-blue-700"
              onClick={() => setQueryModalOpen(true)}
            >
              Query
            </button>
            {isQueryModalOpen && (
              <ProductQuery
                isOpen={isQueryModalOpen}
                onClose={() => setQueryModalOpen(false)}
                onSubmit={handleQuerySubmit}
                product={product}
              />
            )}
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
              <div
                dangerouslySetInnerHTML={{
                  __html: product.detailed_description,
                }}
              />
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
            {selectedTab === 'reviews' && <ReviewProduct product={product} />}
          </div>
        </div>
      </div>
      <div className="max-w-6xl p-4 m-auto">
        <RelatedProduct relatedproducts={related} />
      </div>
    </>
  );
}

export default ProductDetails;
