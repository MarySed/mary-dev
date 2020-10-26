import React, { useRef } from "react";

const Cloud = (key) => {
  const cloudRef = useRef();

  return (
    <group ref={cloudRef} dispose={null} name={key}>
      <mesh visible position={[-1, 3.8, -3]} rotation={[0, 0, 0]} castShadow>
        <sphereBufferGeometry attach="geometry" args={[0.8, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={1}
          metalness={0.1}
        />
      </mesh>
      <mesh visible position={[0, 4, -3]} rotation={[0, 0, 0]} castShadow>
        <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={1}
          metalness={0.1}
        />
      </mesh>
      <mesh visible position={[1, 3.8, -3]} rotation={[0, 0, 0]} castShadow>
        <sphereBufferGeometry attach="geometry" args={[0.8, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={1}
          metalness={0.1}
        />
      </mesh>

      {/* Trailing cloud fluff */}
      <mesh visible position={[3, 3.8, -3]} rotation={[0, 0, 0]} castShadow>
        <sphereBufferGeometry attach="geometry" args={[0.3, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={1}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

export default Cloud;
