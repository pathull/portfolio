import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "../Loader";

const Coffee = ({isMobile}) => {
  const coffee = useGLTF("./coffee/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} color="gray" />
      <ambientLight intensity={1} color="#D3D3D3" />
      <directionalLight intensity={1} color="black" />
      <primitive
        object={coffee.scene}
        scale={isMobile ? 0.15 : 0.18}
        position={[0.0, -1.8, 0.0]}
        rotation={[0, 0.5, 0]}
      />
    </mesh>
  );
};

const CoffeeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
      style={
        isMobile
          ? {width: "20rem", height: "20rem"}
          : {width: "28rem", height: "28rem"}
      }
    >
      <Canvas
        frameloop="demand"
        shadows
        camera={{position: [10, 14, 20], fov: 10}}
        gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <Coffee isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default CoffeeCanvas;
