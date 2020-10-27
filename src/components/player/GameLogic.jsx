import { LASER_LIMIT } from "constants/constants";
import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import LaserController from "components/player/LaserController";
// Note: This functionality was able to be created thanks to Stephen Castle's R3F Game tutorial at: https://codeworkshop.dev/blog/2020-06-23-build-a-game-with-react-three-fiber-and-recoil/ . Thank you!

const distance = (laser, enemy) => {
  // Check if laser intersects with enemy
  if (Math.round(laser.x) === enemy.x / 10 && Math.round(laser.y) === enemy.y) {
    return true;
  }
  return false;
};

const GameLogic = ({ enemiesPos, setEnemiesPos }) => {
  const [lasers, setLasers] = useState([]);

  useFrame(() => {
    const hitEnemies = enemiesPos
      ? enemiesPos.map((enemy) => {
          return (
            lasers.filter(
              () => lasers.filter((laser) => distance(laser, enemy)).length > 0
            ).length > 0
          );
        })
      : [];

    if (hitEnemies.includes(true) && enemiesPos.length > 0) {
      console.log("hitEnemies", hitEnemies);
    }

    // Only return the enemies who have not been hit (whose value in the hitEnemies arr is false)
    setEnemiesPos(
      enemiesPos
        .map((enemy) => ({ x: enemy.x, y: enemy.y, z: enemy.z, key: enemy.id }))
        .filter((enemy, idx) => !hitEnemies[idx])
    );

    // TODO: Make laser disappear
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

  return <LaserController lasers={lasers} setLasers={setLasers} />;
};

export default GameLogic;
