import React, { useMemo } from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";

const Text = ({
  children = "TEST",
  color = "#000000",
  position,
  rotation = [0, 0, 0],
  scale = [0.8, 0.8, 0.02],
  ...props
}) => {
  const font = useLoader(THREE.FontLoader, "/font.blob");

  const config = useMemo(
    () => ({
      size: 1,
      font,
      height: 3,
      curveSegments: 14,
    }),
    [font]
  );

  return (
    <group {...props} scale={scale}>
      <mesh visible position={position} rotation={rotation}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    </group>
  );
};

export default Text;
