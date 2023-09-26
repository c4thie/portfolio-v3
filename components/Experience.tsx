"use client";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Cat, CatModel } from "./HomeCat";
import CanvasLoader from "./Loader";

import { motion } from "framer-motion-3d";

type Props = {
  section: number;
};

const Experience = ({ section }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
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
    <>
      <motion.group
        scale={isMobile ? 0.08 : 0.1}
        position={isMobile ? [0, -50, 0] : [0, -3.25, -1.5]}
        rotation={[-0.01, 1, -0.1]}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Cat isMobile={isMobile} section={section} />
        </Suspense>
      </motion.group>
    </>
  );
};

export default Experience;
