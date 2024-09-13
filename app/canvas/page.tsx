'use client';

import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function App() {
  return (
    <div className="bg-white w-screen h-screen">
      <Canvas>
        <mesh>
        <ScrollControls damping={0.5} pages={3}>
          <cylinderGeometry />
          {/* <meshPhongMaterial /> */}
          </ScrollControls>
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>
    </div>
  );
}

export default App;
