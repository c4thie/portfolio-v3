"use client";
import * as THREE from "three";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Cat = ({ isMobile }: { isMobile: Boolean }) => {
  const cat = useGLTF("model/about-cat/scene.gltf");

  const { animations } = useGLTF("model/about-cat/scene.gltf");
  let mixer = new THREE.AnimationMixer(cat.scene);

  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.time /= 10;
    action.play();
  });

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive
        object={cat.scene}
        scale={isMobile ? 0.3 : 0.55}
        position={isMobile ? [0, -1, -2.2] : [-6.7, -4.25, -1.5]}
        rotation={[-0.01, 1, -0.1]}
      />
    </mesh>
  );
};
const CatCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "50vh", width: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cat isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CatCanvas;
