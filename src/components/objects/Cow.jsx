import React, { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";

const Cow = () => {
  const [direction, setDirection] = useState(true);
  const { nodes } = useLoader(GLTFLoader, "/models/cow.glb");

  const cowRef = useRef(null);

  useFrame(() => {
    if (cowRef !== null) {
      if (cowRef.current.position.y > 0) {
        setDirection(false);
      }

      if (cowRef.current.position.y < -1.2) {
        setDirection(true);
      }

      const increment = direction ? 0.01 : -0.01;
      cowRef.current.position.y += increment;
    }
  });

  return (
    <group ref={cowRef} dispose={null}>
      <mesh
        geometry={nodes["grp1"].children[0].geometry}
        visible
        scale={[0.001, 0.001, 0.001]}
        rotation={[-Math.PI / 2, Math.PI / 2, 1]}
        position={[18, -3, 0]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
};

export default Cow;
