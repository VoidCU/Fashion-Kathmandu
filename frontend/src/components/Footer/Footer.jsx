import { Link } from 'react-router-dom';
import axiosInstance from '../../config/Axios';
function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    axiosInstance
      .post('/api/newsletter', { email })
      .then(() => {
        alert('Thank you for subscribing to our newsletter.');
      })
      .catch((error) => {
        alert('Error subscribing to newsletter:', error);
      });
  };
  return (
    <>
      <div className=" ">
        <div className=" bg-[#D9D9D9] ">
          <div className="max-w-6xl m-auto px-4 flex flex-col gap-4 py-8">
            <div className="flex justify-between  flex-col md:flex-row gap-4">
              <div className="flex flex-col ">
                <span className="font-bold text-2xl">NEWSLETTER</span>
                <span className="text-sm">
                  Get updates by subscribe our weekly newsletter
                </span>
              </div>
              <div className="relative">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center flex-col md:flex-row gap-4 md:gap-0">
                    <input
                      className=" w-full pl-10 h-10 rounded-xl  md:rounded-r-none  px-4 gap-4 md:gap-0"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                    <i className="fa fa-envelope absolute left-2 top-3 text-gray-400"></i>

                    <button
                      className="bg-[#008da8] text-white px-4 py-2 font-bold"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col justify-between md:flex-row gap-6">
              <div>
                <div className="text-2xl font-semibold ">QUICK SHOP</div>
                <div className="flex flex-col text-sm">
                  <a href="/#new-in">New In</a>
                  <a href="/#top-item">Top Item</a>
                  <a href="/#category">Category</a>
                </div>
              </div>

          
              <div className="flex gap-4 text-3xl">
                <Link to="#">
                  <i className="fa fa-whatsapp"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl m-auto px-4 py-2 flex justify-between">
          <div>
            {' '}
            <i className="fa fa-copyright"></i> {year} Fashion Kathmandu |
            Elytra Solutions
          </div>
          <div className="hidden md:block">
            <img src="/images/cards.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
