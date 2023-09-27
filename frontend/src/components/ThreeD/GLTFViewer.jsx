import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

function GLTFViewer({ modelPath }) {
  const gltf = useGLTF(modelPath);
  const gltfRef = useRef();

  return (
    <div className="h-full w-full border rounded-lg ">
      <Canvas style={{ width: '350px', height: '475px' }}>
        <ambientLight intensity={20} />
        <primitive ref={gltfRef} object={gltf.scene} />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxDistance={2}
          minDistance={2}
          target={[0, 1, 0]} // Adjust the target to the center of your model
          args={[gltfRef, { enableDamping: true }]}
        />
      </Canvas>
    </div>
  );
}

export default GLTFViewer;
