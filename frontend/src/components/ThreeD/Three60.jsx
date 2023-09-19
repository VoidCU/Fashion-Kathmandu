import { ReactImageTurntable } from 'react-image-turntable';

function Three60({ images }) {
  const modifiedImages = images.map((imagePath) => `/files/${imagePath}`);
  return (
    <>
      <div className="w-full md:w-[350px] ">
        <ReactImageTurntable images={modifiedImages} />
      </div>
    </>
  );
}

export default Three60;
