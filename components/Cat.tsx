"use client";
import * as THREE from "three";
import { useRef, useEffect, useState, MutableRefObject } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Mesh } from "three";
import RotationWrapper from "./RotationWrapper";

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

const scene = new THREE.Scene();

function MeshComponent() {
  // const actions: actions = useRef();
  const actions: MutableRefObject<{ idle: { play: () => void } } | undefined> =
    useRef();
  const mesh = useRef<Mesh>(null!);

  const [model, setModel] = useState<THREE.Object3D | null>(null);
  const [animation, setAnimation] = useState<THREE.AnimationClip[] | null>(
    null
  );
  // const [mixer] = useState(() => new THREE.AnimationMixer(null));
  const [mixer] = useState(
    () => new THREE.AnimationMixer(new THREE.Object3D())
  );

  // Load model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      // resource URL
      "model/scene.gltf",
      // called when the resource is loaded
      async function (gltf) {
        scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

        gltf.scene.scale.set(0.1, 0.1, 0.1);
        gltf.scene.translateY(-4);

        const nodes = await gltf.parser.getDependencies("node");
        const animations = await gltf.parser.getDependencies("animation");
        setModel(nodes[0]);
        setAnimation(animations);
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );
  }, []);

  /* Set animation */
  useEffect(() => {
    if (animation && typeof mesh.current != "undefined") {
      actions.current = {
        idle: mixer.clipAction(animation[0], mesh.current as THREE.Object3D),
      };
      actions.current.idle.play();
      return () => animation.forEach((clip) => mixer.uncacheClip(clip));
    }
    console.log(animation);
  }, [animation]);

  // useFrame(() => {
  //   mesh.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={mesh}>
      <primitive object={scene} />
    </mesh>
  );
}

export function Cat() {
  const scroll = useRef(0);

  return (
    <div className="flex justify-center items-center lg:h-screen h-3/4">
      <Canvas className="h-2xl w-2xl">
        <RotationWrapper scroll={scroll}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <MeshComponent />
        </RotationWrapper>
      </Canvas>
    </div>
  );
}
