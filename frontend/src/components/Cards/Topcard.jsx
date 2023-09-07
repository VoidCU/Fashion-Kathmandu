import { Link } from 'react-router-dom';
function Topcard({ topitems }) {
  return (
    <>
      <div className=" flex justify-around px-4 items-center border-gray-400 border-2 w-full  md:w-[300px] h-[175px] bg-[#d9d9d9]">
        <div>
          <div className="font-bold text-xl pb-2">{topitems.name}</div>
          <span className="font-light text-sm">Starts</span>
          <div className="font-extrabold text-[#008da8] text-2xl">
            ${topitems.price}
          </div>
          <div className="font-semibold text-sm pt-2 hover:text-[#008da8] hover:cursor-pointer">
            <Link to={`/product/${topitems.slug}`}>
              MORE DETAILS <i className="fa fa-angle-right font-semibold" />
            </Link>
          </div>
        </div>
        <div className="min-w-[75px] md:w-[25%]">
          <div>
            <img
              className=" object- w-full max-h-[150px]"
              src={topitems.image}
              alt={topitems.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topcard;
