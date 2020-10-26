import React from "react";
import { RIGHT_LIMIT } from "../../constants/constants";

const End = () => {
  return (
    <>
      <mesh
        visible
        position={[RIGHT_LIMIT, 2, -4]}
        rotation={[0, 0, -0.2]}
        receiveShadow
      >
        <planeBufferGeometry attach="geometry" args={[12, 6, 2, 2]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={1}
          metalness={0.1}
        />
      </mesh>
    </>
  );
};

export default End;
