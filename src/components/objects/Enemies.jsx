import React, { useRef, useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "react-three-fiber";

const Enemies = ({ enemiesPos }) => {
  const { nodes } = useLoader(GLTFLoader, "/models/alien-1.glb");

  const enemyRef = useRef();

  return (
    <group ref={enemyRef}>
      {enemiesPos.map((enemy) => (
        <group scale={[0.1, 0.1, 0.1]} position={[enemy.x, enemy.y, enemy.z]}>
          <mesh key={enemy.id} geometry={nodes["poly-0-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={enemy.id} geometry={nodes["poly-1-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={enemy.id} geometry={nodes["poly-2-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={enemy.id} geometry={nodes["poly-3-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={enemy.id} geometry={nodes["poly-4-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default Enemies;
