import { Link } from 'react-router-dom';
function Categorycard({ newitems }) {
  return (
    <>
      <Link to={`/product/${newitems.slug}`}>
        <div className=" flex justify-center px-4 items-center border-gray-200 border-2 w-[90vw] rounded-md  md:w-[300px] h-[175px] hover:bg-[#d9d9d9] hover:cursor-pointer hover:transition-transform duration-300 hover:border-0 hover:scale-105">
          <div className="min-w-[150px] md:w-[25%]">
            <div>
              <img
                className="rounded-md object-cover w-full max-h-[150px]"
                src={`http://localhost:3000/files/${newitems.images}`}
                alt={newitems.name}
              />
            </div>
          </div>
          <div className="min-w-[50%] p-2">
            <div className="font-bold text-xl pb-2">{newitems.name}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Categorycard;