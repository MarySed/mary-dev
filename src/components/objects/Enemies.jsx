import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";

const Enemies = ({ enemiesPos }) => {
  const { nodes } = useLoader(GLTFLoader, "/models/alien-1.glb");

  const enemyRef = useRef();

  return (
    <group ref={enemyRef}>
      {enemiesPos.map((enemy) => (
        <group
          scale={[0.1, 0.1, 0.1]}
          position={[enemy.x, enemy.y, enemy.z]}
          key={Math.random()}
        >
          <mesh key={`${enemy.id}-1`} geometry={nodes["poly-0-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={`${enemy.id}-2`} geometry={nodes["poly-1-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={`${enemy.id}-3`} geometry={nodes["poly-2-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={`${enemy.id}-4`} geometry={nodes["poly-3-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
          <mesh key={`${enemy.id}-5`} geometry={nodes["poly-4-0"].geometry}>
            <meshBasicMaterial attach="material" color="white" visible />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default Enemies;
