import React, { Suspense } from "react";
import Cow from "./Cow";
import { GROUND_HEIGHT } from "../../constants/constants";

const Ufo = () => {
  return (
    <group position={[0, 0, -6]}>
      <mesh
        visible
        position={[20, GROUND_HEIGHT + 5, 0]}
        rotation={[0, 0, -0.4]}
        scale={[0.5, 0.5, 0.5]}
      >
        <cylinderBufferGeometry attach="geometry" args={[2, 4]} />
        <meshLambertMaterial attach="material" color="white" />
      </mesh>
      {/* Aliens in here */}
      <mesh
        visible
        position={[20, GROUND_HEIGHT + 5, 0]}
        rotation={[0, 0, -0.4]}
      >
        <sphereBufferGeometry
          attach="geometry"
          args={[1, 16, 16, 0, 6.3, 0, 1.8]}
        />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>

      {/* Cow stealing beam */}
      <mesh
        visible
        position={[17.5, GROUND_HEIGHT - 1, 0]}
        rotation={[0, 0, -0.4]}
        scale={[0.5, 0.5, 0.5]}
      >
        <cylinderBufferGeometry attach="geometry" args={[1.5, 4, 25]} />
        <meshLambertMaterial
          attach="material"
          color="white"
          transparent
          opacity={0.4}
        />
      </mesh>

      <Suspense fallback={null}>
        <Cow />
      </Suspense>
    </group>
  );
};

export default Ufo;
