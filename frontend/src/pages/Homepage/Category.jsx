function Category() {
  return (
    <div className="max-w-6xl px-4 pb-10 m-auto">
      <div className="font-bold text-2xl pb-4">Category</div>
      <div className="flex flex-wrap justify-around gap-y-2">
        <div className="relative w-full max-w-[200px]">
          <div className="rounded-xl hover:scale-105 w-full bg-[#dcdcdc] p-4 font-bold text-center transform hover:cursor-pointer transition-transform duration-300 ease-in-out">
            Women
          </div>
        </div>
        <div className="relative w-full max-w-[200px]">
          <div className="rounded-xl hover:scale-105 w-full bg-[#dcdcdc] p-4 font-bold text-center transform hover:cursor-pointer transition-transform duration-300 ease-in-out">
            Bags
          </div>
        </div>
        <div className="relative w-full max-w-[200px]">
          <div className=" rounded-xl hover:scale-105 w-full bg-[#dcdcdc] p-4 font-bold text-center transform hover:cursor-pointer transition-transform duration-300 ease-in-out">
            Men
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
