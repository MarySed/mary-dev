import React, { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useTransition, a } from "react-spring";
import { useLoader } from "react-three-fiber";
import { GROUND_HEIGHT } from "constants/constants";
import { Html } from "drei";
import Modal from "components/Modal";
import styles from "./Computer.module.scss";

const Computer = () => {
  const [showModal, setShowModal] = useState(false);
  const { nodes } = useLoader(GLTFLoader, "/models/computer-1.glb");

  const transitions = useTransition(showModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const computerRef = useRef(null);

  return (
    <group ref={computerRef} dispose={null}>
      <mesh
        geometry={nodes["Cube015_Computer_0"].geometry}
        visible
        scale={[4, 1.5, 1.2]}
        rotation={[-Math.PI / 2, -0.5, 0]}
        position={[45, GROUND_HEIGHT, -3]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>

      {/* Create divs in 3D space */}
      <Html scale={100} position={[41, 1.7, -2]}>
        <div className={showModal && styles.container}>
          {showModal ? (
            <Modal closeModal={() => setShowModal(false)} />
          ) : (
            <div
              className={styles.content}
              onClick={() => setShowModal(true)}
            />
          )}
        </div>
      </Html>
    </group>
  );
};

export default Computer;
