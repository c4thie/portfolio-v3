import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

type Props = {
  scroll: React.MutableRefObject<number>;
  children: React.ReactNode;
};

export default function RotationWrapper(props: Props) {
  // This reference will give us direct access to the THREE.Mesh object
  const group = useRef<THREE.Group | null>(null);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   group.current!.rotation.y = THREE.MathUtils.degToRad(
  //     (props.scroll.current * 360) / 1
  //   );
  // });

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // Rotate the group based on the scroll value
    group.current!.rotation.y += THREE.MathUtils.degToRad(
      props.scroll.current * 1 // Adjust the factor to control the rotation speed
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]}>{props.children}</group>
    </group>
  );
}
