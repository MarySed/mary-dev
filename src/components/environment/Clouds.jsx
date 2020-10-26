import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import Cloud from "./Cloud";
import { LEFT_LIMIT, RIGHT_LIMIT } from "../../constants/constants";

// TODO: Randomly generate clouds between certain points rather than tailored coords
const cloudsArr = [
  { x: 7, y: -0.7, z: 0, name: "one" },
  { x: 18, y: -1.5, z: 0, name: "two" },
  { x: 10, y: 1, z: 0, name: "three" },
  { x: 30, y: 0, z: 0, name: "four" },
];

const Clouds = () => {
  const cloudsRef = useRef([useRef(), useRef(), useRef(), useRef()]);

  useFrame(() => {
    cloudsRef.current.map((cloud) => {
      if (cloud.current.position.x <= LEFT_LIMIT - 8) {
        // Loop clouds
        return (cloud.current.position.x = RIGHT_LIMIT + 4);
      }
      // Clouds should drift across the screen
      return (cloud.current.position.x -= 0.01);
    });
  });

  return (
    <>
      {cloudsArr.map((cloud, idx) => {
        return (
          <group
            position={[cloud.x, cloud.y, cloud.z]}
            key={`${cloud.x}`}
            ref={cloudsRef.current[idx]}
            name={`${cloud.name}`}
          >
            <Cloud key={`${cloud.name}`} />
          </group>
        );
      })}
    </>
  );
};

export default Clouds;
