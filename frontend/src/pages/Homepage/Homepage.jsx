import { useEffect, useState, useReducer } from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import Topitems from './Topitems';
import Newitems from './Newitems';
import Category from './Category';
import axiosInstance from '../../config/Axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload, error: '' };
    case 'FETCH_ERROR':
      return { ...state, loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

function Homepage() {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      }
    })();
  }, []);
  const featured = products.filter((product) => product.isFeatured === true);
  const newestItems = products
    .slice() // Create a copy to avoid modifying the original array
    .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
    .slice(0, 6);
  return (
    <>
      {featured.length > 0 && <Hero featured={featured} />}
      <Benefits />
      <Topitems topitems={newestItems.slice(0, 3)} />
      <Newitems newestItems={newestItems} />
      <Category />
    </>
  );
}

export default Homepage;
