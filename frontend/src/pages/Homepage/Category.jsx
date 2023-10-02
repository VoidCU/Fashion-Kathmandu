import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../config/Axios'; // Import your Axios instance for API requests

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the server when the component mounts
    axiosInstance
      .get('/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="max-w-5xl px-4 pb-10 m-auto" id="category">
      <div className="font-bold text-2xl pb-4">Category</div>
      <div className="flex flex-wrap justify-around gap-y-2">
        {categories.map((category) => (
          <div key={category._id} className="relative w-full ">
            <Link to={`/category/${category.title}`}>
              <div className="rounded-xl hover:scale-105 w-full bg-[#dcdcdc] p-4 font-bold text-center transform hover:cursor-pointer transition-transform duration-300 ease-in-out">
                {category.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
