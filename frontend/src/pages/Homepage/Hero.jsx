function Hero() {
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
          <div className="font-bold text-xl text-[#008da8]">New Arrivals</div>
          <div className="font-bold text-4xl">Bohemain Style Trouser</div>
          <div className="text-sm font-light">
            Women&apos;s styles Trouser with colorful design. You cant find this
            better anywhere
          </div>

          <div className="flex gap-2 items-center text-gray-500">
            <div className="font-bold text-md">2 Degins:</div>
            <img
              className="bg-white p-2 h-10 rounded-xl"
              src="/images/item1.png"
              alt=""
            />
            <img
              className="bg-white p-2 h-10 rounded-xl"
              src="/images/item2.png"
              alt=""
            />
          </div>
          <div>
            <button className="bg-[#008dA8] px-4 py-2 rounded-sm text-white font-bold ">
              View More <i className="fa fa-angle-right font-bold"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
