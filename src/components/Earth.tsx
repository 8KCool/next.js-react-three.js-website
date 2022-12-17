import { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from '../../public/EarthTexture/Draco';

/* Three.js 3D Earth */
const Earth = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.01} color='#ffffff' />
        <Stars radius={300} depth={60} count={1000} factor={7} saturation={0} />
        <directionalLight args={['#c8d5e3', 5]} position={[-10, 5, -1]} />
        <Model />
      </Suspense>
    </Canvas>
  )
};

export default Earth;
