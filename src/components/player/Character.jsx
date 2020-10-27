import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Character = ({ userPosition, setUserPosition }) => {
  // Place GLB models in public dir
  const { nodes } = useLoader(GLTFLoader, "/models/paper-plane.glb");

  const user = useRef();

  // useFrame runs outside of react in optimized animation frames
  useFrame(({ mouse }) => {
    if (user !== undefined) {
      const flipPlane = () => {
        // Make plane face left
        if (mouse.x < -0.8) {
          return -Math.PI / 2;
        }

        return -mouse.y * 0.2;
      };

      setUserPosition({
        position: { x: mouse.x * 6, y: mouse.y * 2 },
        rotation: { z: -mouse.x * 0.2, x: -mouse.x * 0.5, y: flipPlane() },
      });
    }
  });

  useFrame(() => {
    user.current.rotation.z = userPosition.rotation.z;
    user.current.rotation.y = userPosition.rotation.y;
    user.current.rotation.x = userPosition.rotation.x;
    user.current.position.x = userPosition.position.x;
    user.current.position.y = userPosition.position.y;
  });

  return (
    <group ref={user} dispose={null}>
      <mesh
        visible
        geometry={nodes["Airplane_1"].geometry}
        // display model at 90 degree angle to screen for 2.5D experience
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.7, 0.7, 0.7]}
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

export default Character;
