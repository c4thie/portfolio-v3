"use client";
import { Suspense, useEffect, useRef } from "react";
// react three fiber
import { TextureLoader } from "three";
import { useThree, useLoader } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
//  Components
import illustration from "../public/IOGO.png";
import { projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";

type Props = {
  scrollTarget: number;
  w?: number;
  h?: number;
  gap?: 0.3;
};

type spriteProps = {
  position: [number, number, number];
  w: number;
  h: number;
};
const Sprite = (props: spriteProps) => {
  const { position, w, h } = props;
  const map = new TextureLoader().load(
    "/model/textures/Material_2_baseColor.jpeg"
  );

  return (
    <group position={position}>
      <sprite scale={[w, h, 1]}>
        <spriteMaterial map={map} />
      </sprite>
    </group>
  );
};

export default function Scene({
  scrollTarget,
  w = 3.2,
  h = 4.4,
  gap = 0.3,
}: Props) {
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
      damping={4}
      pages={(width / 3 - xW + projects.length * xW) / width}
    >
      <Scroll>
        <Suspense fallback={null}>
          <group>
            {projects.map((illu, idx) => (
              <Sprite
                key={idx}
                position={[idx * xW - width / 3, 0, 0]}
                w={w}
                h={h}
              />
            ))}
          </group>
        </Suspense>
      </Scroll>
    </ScrollControls>
  );
}
