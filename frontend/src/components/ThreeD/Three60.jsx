import { ReactImageTurntable } from 'react-image-turntable';
import { Suspense } from 'react';
import GLTFViewer from './GLTFViewer';
function Three60({ images }) {
  const modifiedImages = images.map((imagePath) => `/files/${imagePath}`);
  const getfileext = () => {
    if (modifiedImages.length > 0) {
      const firstfile = modifiedImages[0];
      const ext = firstfile.split('.').pop();
      if (ext === 'gltf' || ext === 'glb') return true;
    }

    return false;
  };
  const isShow = getfileext();
  return (
    <>
      {isShow ? (
        <div className="w-full md:w-[350px] ">
          <Suspense fallback={null}>
            <GLTFViewer modelPath={modifiedImages[0]} />
          </Suspense>
        </div>
      ) : (
        <div className="w-full md:w-[350px] ">
          <ReactImageTurntable images={modifiedImages} />
        </div>
      )}
    </>
  );
}

export default Three60;
