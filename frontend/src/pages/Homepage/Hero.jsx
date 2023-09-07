import { Link } from 'react-router-dom';

function Hero({ featured }) {
  return (
    <div className="bg-[#D9D9D9]">
      <div className=" max-w-6xl m-auto flex flex-col md:flex-row-reverse items-center px-20">
        <div>
          <img
            src="/images/Testitem.png"
            alt=""
            className="min-w-[250px] w-auto w-[400px] md:w-auto"
          />
        </div>
        <div className="flex flex-col gap-4 py-10  ">
          <div className="font-bold text-xl text-[#008da8]">New Featured</div>
          <div className="font-bold text-4xl">{featured[0].name}</div>
          <div className="text-sm font-light">{featured[0].description}</div>

          {/* <div className="flex gap-2 items-center text-gray-500">
            <div>
              <ul>
                {featured[0].materials.map((material, index) => (
                  <li className="text-[#0a0a0a]" key={index}>
                    <i className="fa fa-check-square text-[#0a0a0a]" />{' '}
                    {material}
                  </li>
                ))}
              </ul>
            </div>{' '}
          </div> */}
          <div className="font-bold text-4xl text-[#008ba8]">
            ${featured[0].price}
          </div>
          <div>
            <Link to={`/product/${featured[0].slug}`}>
              <button className="bg-[#008dA8] px-4 py-2 rounded-sm text-white font-bold ">
                View More <i className="fa fa-angle-right font-bold"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
