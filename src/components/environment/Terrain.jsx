import React, { useRef, Suspense } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Html } from "drei";
import {
  LEFT_LIMIT,
  RIGHT_LIMIT,
  LEVEL_START,
  LEVEL_END,
} from "../../constants/constants";
import Stars from "./Stars";
import Clouds from "./Clouds";
import End from "../objects/End";
import Forest from "./Forest";
import Text from "../objects/Text";
import Computer from "../objects/Computer";
import Ufo from "../objects/Ufo";
import Enemies from "components/objects/Enemies";

const Terrain = ({ terrainPos, setTerrainPos, isDay, enemiesPos }) => {
  const terrainRef = useRef();

  const { size } = useThree();

  // Detect screen size
  const isMobile = size.width < 700;

  useFrame(({ mouse }) => {
    if (terrainRef !== undefined) {
      // Define limits on environment
      const isBeforeEnd = terrainRef.current.position.x > -RIGHT_LIMIT;
      const isAfterStart = terrainRef.current.position.x < -LEFT_LIMIT;
      const canMoveRight = mouse.x > 0.8 && mouse.y < -0.01 && mouse.y > -0.2;
      const canMoveLeft =
        mouse.x < -0.8 && mouse.y < -0.01 && mouse.y > -0.2 && isAfterStart;

      // Instead of moving airplane & camera, make terrain move right and left when mouse is at edge of screen
      if (canMoveRight && isBeforeEnd) {
        // Move to the right
        setTerrainPos({
          position: { x: (terrainRef.current.position.x -= 1) },
        });
      }

      if (canMoveLeft && isAfterStart) {
        // Move to the left
        setTerrainPos({
          position: { x: (terrainRef.current.position.x += 1) },
        });
      }
    }
  });

  useFrame(() => {
    if (terrainRef && terrainPos) {
      terrainRef.current.position.x = terrainPos.position.x;
    }
  });

  return (
    <group ref={terrainRef} dispose={null}>
      <Forest />
      <Suspense fallback={null}>
        <Text
          children="MARY"
          size={0.1}
          position={[-7, 0, -6]}
          scale={isMobile ? [0.2, 0.2, 0.02] : [0.8, 0.8, 0.02]}
        />
        <Text
          children="SEDAROUS"
          size={0.1}
          position={[-7, -1.2, -6]}
          scale={isMobile ? [0.2, 0.2, 0.02] : [0.8, 0.8, 0.02]}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Ufo />
      </Suspense>
      <Suspense fallback={null}>
        <Computer />
      </Suspense>
      <Suspense fallback={null}>
        <Enemies enemiesPos={enemiesPos} />
      </Suspense>
      <End />
      <Clouds />
      {/* TODO: Add some html text toward the end of the terrain as credits */}
      {/* Conditionally render stars if night */}
      {!isDay && <Stars position={[0, 0, -2]} />}
    </group>
  );
};

export default Terrain;
