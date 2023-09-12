import { Carousel } from '@material-tailwind/react';
function ProductCarousel({ images }) {
  return (
    <>
      <Carousel
        autoplay
        className="rounded-xl flex items-center"
        loop
        nextArrow={({ handleNext }) => (
          <i
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 fa fa-angle-right text-[#008ba8] text-4xl font-bold hover:text-[#008dA8] hover:cursor-pointer"
          ></i>
        )}
        prevArrow={({ handlePrev }) => (
          <i
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 !left-4 -translate-y-2/4 fa fa-angle-left text-[#008ba8] text-4xl font-bold hover:text-[#008dA8] hover:cursor-pointer"
          ></i>
        )}
        style={{ backgroundColor: '#a9a9a9', color: '#a9a9a9' }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:3000/files/${image}`}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </>
  );
}

export default ProductCarousel;
