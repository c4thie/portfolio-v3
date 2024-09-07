"use client";
import { Canvas } from "@react-three/fiber";
import { Cat, CatModel } from "../components/HomeCat";
import RootLayout from "./layout";
import { Suspense, useState } from "react";
import { Scroll, ScrollControls, Html } from "@react-three/drei";
import Interface from "@/components/Interface";
// import ScrollManager from "@/components/ScrollManager";
import Experience from "@/components/Experience";
import { MotionConfig } from "framer-motion";

export default function Home() {
  const [section, setSection] = useState(0);
  return (
    <MotionConfig
      transition={{
        type: "spring",
        mass: 5,
        stiffness: 50,
        damping: 50,
        restDelta: 0.0001,
      }}
    >
      <Canvas
        shadows
        camera={{ position: [20, 10, 10], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ height: "100%", width: "100%" }}
      >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={5} damping={0.1}>
          <Scroll>
            <Experience section={section} />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </MotionConfig>
  );
}
