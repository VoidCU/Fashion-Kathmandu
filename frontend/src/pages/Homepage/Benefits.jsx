function Benefits() {
  return (
    <>
      <div className="flex flex-wrap max-w-6xl m-auto justify-center  p-4 md:gap-20 gap-8">
        <div className="flex gap- justify-center items-center gap-2 ">
          <i className="fa fa-send text-2xl text-gray-500 "></i>
          <div className="flex flex-col gap-0">
            <span className="font-bold">Best Shipping</span>
            <span className="font-light text-sm">All Around World</span>
          </div>
        </div>
        <div className="flex gap- justify-center items-center gap-2 ">
          <i className="fa fa-hand-peace-o text-2xl text-gray-500 "></i>
          <div className="flex flex-col gap-0">
            <span className="font-bold">Best Quality</span>
            <span className="font-light text-sm">Hard to Find</span>
          </div>
        </div>
        <div className="flex gap- justify-center items-center gap-2  ">
          <i className="fa fa-fighter-jet text-2xl text-gray-500 "></i>
          <div className="flex flex-col gap-0">
            <span className="font-bold">Fast Delivery</span>
            <span className="font-light text-sm">We Reach in Time </span>
          </div>
        </div>
        <div className="flex gap- justify-center items-center gap-2  ">
          <i className="fa fa-headphones text-2xl text-gray-500 "></i>
          <div className="flex flex-col gap-0">
            <span className="font-bold">Best Service</span>
            <span className="font-light text-sm">Call Us</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
