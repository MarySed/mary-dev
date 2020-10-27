import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useTransition, a } from "react-spring";

const Enemies = ({ enemiesPos }) => {
  return (
    <group>
      {enemiesPos.map((enemy) => (
        <mesh position={[enemy.x, enemy.y, enemy.z]} key={enemy.id}>
          <sphereBufferGeometry attach="geometry" args={[1, 12, 12]} />
          <meshBasicMaterial
            attach="material"
            color="white"
            wireframe
            visible
          />
        </mesh>
      ))}
    </group>
  );
};

export default Enemies;
