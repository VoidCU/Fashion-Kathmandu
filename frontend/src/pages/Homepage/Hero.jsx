import { Link } from 'react-router-dom';

function Hero({ featured }) {
  const imageUrl = '/files/' + featured[0].images;
  return (
    <div className="bg-[#D9D9D9] p-10">
      <div className=" max-w-4xl w-full m-auto flex flex-col md:flex-row-reverse items-center justify-around gap-10  ">
        <div className="md:w-[50%] ">
          <img
            // src="/images/Testitem.png"
            src={imageUrl}
            alt=""
            className="min-w-[250px] w-auto w-[400px] md:w-auto rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 py-10 md:w-[50%]  ">
          <div className="font-bold text-xl text-[#008da8] ">New Featured</div>
          <div className="font-bold text-4xl">{featured[0].name}</div>
          <div className="text-sm font-light italic">
            {featured[0].category}
          </div>

          <div className="flex gap-2 items-center text-gray-500">
            <i className=" text-yellow-900 fa fa-star"></i>
            <i className="text-yellow-900 fa fa-star"></i>
            <i className="text-yellow-900 fa fa-star"></i>
            <i className="text-yellow-900 fa fa-star"></i>
            <i className="text-yellow-900 fa fa-star"></i>
          </div>
          {featured[0].price && (
            <div className="font-bold text-4xl text-[#008ba8]">
              ${featured[0].price}
            </div>
          )}

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
