import React from "react";
import Lasers from "components/player/Lasers";

const LaserController = ({ lasers, setLasers, userPosition }) => {
  return (
    <>
      <mesh
        position={[0, 0, 0]}
        onClick={() =>
          setLasers([
            ...lasers,
            {
              id: Math.random(),
              x: userPosition.position.x,
              y: userPosition.position.y,
              z: 0,
              velocity: [0.7],
            },
          ])
        }
      >
        <planeBufferGeometry attach="geometry" args={[100, 10]} />
        <meshBasicMaterial
          attach="material"
          visible
          opacity={0.3}
          color="white"
          transparent
        />
      </mesh>
      <Lasers lasers={lasers} />
    </>
  );
};

export default LaserController;
