import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MacbookModel } from "./MacbookModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MacbookModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <MacbookModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MacbookModelContainer;
