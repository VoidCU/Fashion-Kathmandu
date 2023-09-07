import { createContext, useContext, useEffect, useReducer } from 'react';
import axiosInstance from '../config/Axios';

const ProductsContext = createContext();

export function useProducts() {
  return useContext(ProductsContext);
}

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

export function ProductsProvider({ children }) {
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
  const value = {
    products,
    loading,
    error,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
