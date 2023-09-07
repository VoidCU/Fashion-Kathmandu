import { useState } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';

import { useProducts } from '../../context/ProductsContext';

function Navbar() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const { products } = useProducts();
  const handleSearch = async (query) => {
    setSearchQuery(query);
    const sanitizedQuery = query.toLowerCase().replace(/-/g, '');
    const fuse = new Fuse(products, {
      keys: ['name'],
      threshold: 0.4,
    });
    const searchResults = fuse.search(sanitizedQuery);
    setSearchResults(searchResults.slice(0, 3));
  };

  const toggleMobileMenu = () => {
    setSearchQuery('');
    setSearchResults([]);
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <nav className=" sticky top-0 bg-white z-50 flex w-full flex-col border-b">
        <div className=" hidden md:block border-b border-gray-400">
          <div className="flex justify-between w-full max-w-6xl m-auto px-4 py-2 ">
            <div className="flex gap-10  ">
              <div className="flex gaLink-2 justify-center items-center text-gray-600 gap-2">
                <Link to="#">
                  <i className="fa fa-twitter hover:text-black"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-facebook hover:text-black"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram hover:text-black"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play hover:text-black"></i>
                </Link>
              </div>
              <div className="text-sm text-gray-700">
                Best items you can find anywhere
              </div>
            </div>
            <div className="text-sm text-gray-700">{formattedDate}</div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center max-w-6xl m-auto px-4">
            <div
              onClick={() => (window.location.href = '/')}
              className="cursor-pointer"
            >
              <img src="/images/logo.png" className="h-12 " alt="" />
            </div>
            <div className="flex gap-4 items-center">
              <div
                className="md:hidden cursor-pointer"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <i className="fa fa-times text-gray-600 text-xl"></i>
                ) : (
                  <i className="fa fa-bars text-gray-600 text-xl"></i>
                )}
              </div>
              {mobileMenuOpen && (
                <div className="lg:hidden flex flex-col gap-4 absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md p-4">
                  <Link
                    to="/"
                    className="text-gray-600  font-semibold hover:text-black"
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-600 font-semibold hover:text-black"
                    onClick={toggleMobileMenu}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-600 font-semibold hover:text-black"
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </Link>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-8 pr-2 py-1 border border-gray-300 rounded-md"
                      value={searchQuery}
                      onChange={(e) => {
                        handleSearch(e.target.value);
                      }}
                    />
                    {searchResults.length > 0 && (
                      <div className="z-10 mt-50 bg-white border border-gray-300 rounded-md p-4 mt-2 absolute w-full max-h-48 overflow-y-auto">
                        <h3 className="text-gray-700 text-sm mb-2">
                          Search Results:
                        </h3>
                        <ul>
                          {console.log(searchResults)}
                          {searchResults.map((result) => (
                            <li
                              key={result.item.id}
                              className="rounded hover:bg-[#008da8] text-blue-500 hover:text-white p-2 "
                            >
                              <Link
                                to={`/product/${result.item.slug}`}
                                className="font-bold "
                              >
                                {result.item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <i className="fa fa-search absolute left-2 top-2 text-gray-400"></i>
                    <button onClick={handleSearch} className="hidden">
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:flex gap-4 items-center ">
              <Link
                to="/"
                className="text-gray-600  font-semibold hover:text-black"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 font-semibold hover:text-black"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 font-semibold hover:text-black"
              >
                Contact
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-2 py-1 border border-gray-300 rounded-md"
                  value={searchQuery}
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }} // Update searchQuery state on input change
                />
                {searchResults.length > 0 && (
                  <div className="z-10 mt-50 bg-white border border-gray-300 rounded-md p-4 mt-2 absolute w-full max-h-48 overflow-y-auto">
                    <h3 className="text-gray-700 text-sm mb-2">
                      Search Results:
                    </h3>
                    <ul>
                      {console.log(searchResults)}
                      {searchResults.map((result) => (
                        <li
                          key={result.item.id}
                          className="rounded hover:bg-[#008da8] text-blue-500 hover:text-white p-2 "
                        >
                          <Link
                            to={`/product/${result.item.slug}`}
                            className="font-bold "
                          >
                            {result.item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <i className="fa fa-search absolute left-2 top-2 text-gray-400"></i>
                <button onClick={handleSearch} className="hidden">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Display the search results */}
    </>
  );
}

export default Navbar;
