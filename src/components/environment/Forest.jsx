import React from "react";
import { GROUND_HEIGHT } from "../../constants/constants";

const Tree = ({ position }) => {
  return (
    <mesh visible position={position} scale={[0.8, 0.8, 0.2]}>
      <coneBufferGeometry attach="geometry" args={[1, 2, 8]} />
      <meshStandardMaterial
        attach="material"
        color="#63683e"
        roughness={1}
        metalness={0.1}
      />
    </mesh>
  );
};

const Forest = () => {
  return (
    <>
      <Tree position={[4, GROUND_HEIGHT, 0]} />
      <Tree position={[0, GROUND_HEIGHT, 0]} />
      <Tree position={[-4, GROUND_HEIGHT, 0]} />
      <Tree position={[-8, GROUND_HEIGHT, 0]} />
      <Tree position={[-12, GROUND_HEIGHT, 0]} />
    </>
  );
};

export default Forest;
