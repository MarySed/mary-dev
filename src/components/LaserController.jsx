import { LASER_LIMIT, LEVEL_END } from "constants/constants";
import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
// Note: This file was able to be created thanks to Stephen Castle's R3F Game tutorial at: https://codeworkshop.dev/blog/2020-06-23-build-a-game-with-react-three-fiber-and-recoil/ . Thank you!

// Calculate the distance between two points in 3d space.
// Used to detect lasers intersecting with enemies.
const distance = (p1, p2) => {
  const a = p2.x - p1.x;
  const b = p2.y - p1.y;
  const c = p2.z - p1.z;

  return Math.sqrt(a * a + b * b + c * c);
};

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
        <planeBufferGeometry attach="geometry" args={[20, 10]} />
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

const GameLogic = ({ userPosition }) => {
  const [enemies, setEnemies] = useState([]); // refactor to take props...
  const [lasers, setLasers] = useState([]);

  useFrame(() => {
    const hitEnemies = enemies
      ? enemies.map((enemy) => {
          return (
            lasers.filter(
              () =>
                lasers.filter((laser) => distance(laser, enemy) < 3).length > 0
            ).length > 0
          );
        })
      : [];

    if (hitEnemies.includes(true) && enemies.length > 0) {
      console.log("enemy hit");
    }

    setEnemies(
      enemies
        .map((enemy) => ({ x: enemy.x, y: enemy.y, z: enemy.z }))
        .filter((enemy, idx) => !hitEnemies[idx])
    );

    setLasers(
      lasers
        .map((laser) => ({
          id: laser.id,
          x: laser.x + laser.velocity[0],
          y: laser.y,
          z: laser.z,
          velocity: laser.velocity,
        }))
        .filter((laser) => {
          return laser.x < LASER_LIMIT;
        })
    );
  });

  return (
    <>
      <LaserController
        lasers={lasers}
        setLasers={setLasers}
        userPosition={userPosition}
      />
    </>
  );
};

export default GameLogic;
