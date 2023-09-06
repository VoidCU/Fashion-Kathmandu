import { Link } from 'react-router-dom';
function Newarrivalscard({ newitems }) {
  return (
    <>
      <Link to={`/product/${newitems.slug}`}>
        <div className=" flex justify-around px-4 items-center border-gray-200 border-2 w-[90vw]  md:w-[300px] h-[175px] hover:bg-[#d9d9d9] hover:cursor-pointer hover:transition-transform duration-300 hover:border-0 hover:scale-105">
          <div className="min-w-[75px] md:w-[25%]">
            <div>
              <img
                className=" object- w-full max-h-[150px]"
                src={newitems.images[0].imageUrl}
                alt={newitems.name}
              />
            </div>
          </div>
          <div className="min-w-[50%]">
            <div className="font-light text-sm">{newitems.category}</div>
            <div className="font-bold text-xl pb-2">{newitems.name}</div>
            <span className="font-light text-sm">Starts</span>
            <div className="font-extrabold text-[#008da8] text-2xl">
              ${newitems.price}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Newarrivalscard;
