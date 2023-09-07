import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    // Add your search functionality here
    // You can use the searchQuery state to access the search query value
    console.log('Search Query:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); // Toggle the mobile menu state
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
                      onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state on input change
                    />
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
                  onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state on input change
                />
                <i className="fa fa-search absolute left-2 top-2 text-gray-400"></i>
                <button onClick={handleSearch} className="hidden">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
