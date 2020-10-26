import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-body"]}>
        Something something somethingSomething something something Something
        something somethingSomething something something
        <div className={styles["modal-button"]} onClick={closeModal}>
          - closeModal()
        </div>
      </div>
    </div>
  );
};

export default Modal;
