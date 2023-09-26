"use client";
import * as THREE from "three";
import {
  Suspense,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  ReactNode,
  SyntheticEvent,
} from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "./Loader";
import { motion } from "framer-motion-3d";

export const Cat = ({
  isMobile,
  section,
}: {
  isMobile?: Boolean;
  section: number;
}) => {
  const cat = useGLTF("model/home-cat/scene.gltf");
  const { animations } = useGLTF("model/home-cat/scene.gltf");
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
    <motion.group
      name="Cat"
      animate={{
        scale: section === 0 ? 1 : 0.5,
        x: isMobile ? 0 : 30,
        y: -40,
      }}
    >
      <mesh>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <primitive
          object={cat.scene}
          // scale={isMobile ? 0.05 : 0.1}
          // position={isMobile ? [-2, -3, -2.2] : [-2, -3.25, -1.5]}
          // rotation={[-0.01, 1, -0.1]}
        />
      </mesh>
    </motion.group>
  );
};

export const CatModel = () => {
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
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* <Cat isMobile={isMobile} /> */}
    </Suspense>
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
      // frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "100vh", width: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <Cat isMobile={isMobile} /> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CatCanvas;
