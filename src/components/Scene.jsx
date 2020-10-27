import React, { Suspense, useState } from "react";
import classNames from "classnames";
import { Canvas, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { isDaytime } from "../utilities/utilities";
import {
  LEFT_LIMIT,
  LEVEL_START,
  LEVEL_END,
  RIGHT_LIMIT,
} from "../constants/constants";
import Character from "./Character";
import Loading from "./Loading";
import CameraControls from "components/CameraControls";
import Terrain from "components/environment/Terrain";
import MoonIcon from "assets/icons/MoonIcon";
import SunIcon from "assets/icons/SunIcon";
import GameLogic from "components/GameLogic";
import styles from "./Scene.module.scss";

extend({ OrbitControls });

const Scene = () => {
  const [isDay, setIsDay] = useState(isDaytime);
  const [terrainPos, setTerrainPos] = useState({ position: { x: 0 } });
  const [userPosition, setUserPosition] = useState({
    position: { x: 0, y: 0 },
    rotation: { z: 0, x: 0, y: 0 },
  });
  const [enemiesPos, setEnemiesPos] = useState([
    { id: Math.random(), x: 60, y: 3, z: 0 },
    { id: Math.random(), x: 70, y: -2, z: 0 },
    { id: Math.random(), x: 80, y: 0, z: 0 },
  ]);

  const fogColor = isDay ? "#b666d2" : "#85e21f";

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          className={classNames({
            [styles.day]: isDay,
            [styles.night]: !isDay,
          })}
          shadowMap
        >
          <CameraControls />

          <directionalLight intensity={0.5} />
          <ambientLight color="#d8d0d1" intensity={0.8} />
          {/* TODO: Decide between the classic halloween colors of green (#85e21f) and orange (#cc7b32) */}
          <fog attach="fog" args={[fogColor, 1, 20]} />

          <Suspense fallback={<Loading />}>
            <Character
              userPosition={userPosition}
              setUserPosition={setUserPosition}
            />
          </Suspense>

          {-terrainPos.position.x > LEVEL_START &&
            -terrainPos.position.x < LEVEL_END && (
              <GameLogic
                userPosition={userPosition}
                enemiesPos={enemiesPos}
                setEnemiesPos={setEnemiesPos}
              />
            )}

          <Terrain
            terrainPos={terrainPos}
            setTerrainPos={setTerrainPos}
            isDay={isDay}
            enemiesPos={enemiesPos}
            setEnemiesPos={setEnemiesPos}
            userPosition={userPosition}
          />
        </Canvas>
      </Suspense>

      <div className={styles["move-forward"]}>
        <span className={styles.indicator}>
          {terrainPos.position.x !== -RIGHT_LIMIT ? ">" : ""}
        </span>
      </div>

      <div className={styles["move-backward"]}>
        <span className={styles.indicator}>
          {terrainPos.position.x !== -LEFT_LIMIT ? "<" : ""}
        </span>
      </div>

      <div className={styles["day-night"]}>
        {isDay ? (
          <span onClick={() => setIsDay(!isDay)}>
            <SunIcon />
          </span>
        ) : (
          <span onClick={() => setIsDay(!isDay)}>
            <MoonIcon />
          </span>
        )}
      </div>
    </>
  );
};

export default Scene;
