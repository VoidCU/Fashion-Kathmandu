import { useParams, Link } from 'react-router-dom';
import { useReducer, useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';
import Newarrivalscard from '../../components/Cards/Newarrivalscard';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        categoryproduct: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        categoryproduct: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function Category() {
  const params = useParams();
  const { category } = params;
  const [{ loading, error, categoryproduct }, dispatch] = useReducer(reducer, {
    loading: true,
    categoryproduct: [],
    error: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/api/categorie/${category}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      }
    })();
  }, [category]);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <div>
        <div className=" max-w-5xl m-auto font-bold text-2xl px-4 py-8">
          {category}
        </div>
        <div className="max-w-6xl m-auto p-4 md:pt-4 md:pb-14 flex gap-4 flex-col md:flex-row md:flex-wrap justify-center items-center">
          {categoryproduct.map((item) => (
            <Newarrivalscard key={item.slug} newitems={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
