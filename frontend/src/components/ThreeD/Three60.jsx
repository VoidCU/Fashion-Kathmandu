import { ReactImageTurntable } from 'react-image-turntable';

function Three60({ images }) {
  const modifiedImages = images.map((imagePath) => `/files/${imagePath}`);
  console.log(modifiedImages);
  return (
    <>
      <div className="h-full">
        <ReactImageTurntable images={modifiedImages} />
      </div>
    </>
  );
}

export default Three60;
