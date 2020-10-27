import React from "react";

const Lasers = ({ lasers }) => {
  return (
    <group>
      {lasers.length < 8 &&
        lasers.map((laser) => (
          <mesh
            position={[laser.x, laser.y, laser.z]}
            key={`${laser.id}`}
            rotation={[0, 0, 0]}
          >
            <sphereBufferGeometry attach="geometry" args={[0.08, 12, 12]} />
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

export default Lasers;
