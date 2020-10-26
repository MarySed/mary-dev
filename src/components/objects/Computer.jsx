import React, { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";
import { GROUND_HEIGHT } from "../../constants/constants";
import { Html } from "drei";
import styles from "./Computer.module.scss";

const Computer = () => {
  const { nodes } = useLoader(GLTFLoader, "/models/computer-1.glb");

  const computerRef = useRef(null);

  return (
    <group ref={computerRef} dispose={null}>
      <mesh
        geometry={nodes["Cube015_Computer_0"].geometry}
        visible
        scale={[4, 1.5, 1.2]}
        rotation={[-Math.PI / 2, -0.5, 0]}
        position={[45, GROUND_HEIGHT, -3]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
      {/* Overlay div on computer. Potentially this can be moved but for now I'll leave it here. */}
      {/* TODO: Add interactivity */}
      <Html scale={100} position={[41, 1.7, -2]}>
        <div
          className={styles.content}
          onClick={() => console.log("this doesnt do anything yet")}
        ></div>
      </Html>
    </group>
  );
};

export default Computer;
