import React, { FC } from "react";
import styles from "./Storage.module.css";
import { useStorage } from "../../customHooks/useStorage";

const Storage: FC = () => {
  let storageWrite = useStorage();

  function onClickHandler() {
    let inputs = document.getElementsByClassName(
      styles.input,
    ) as unknown as HTMLInputElement[];
    storageWrite(inputs[0].value, inputs[1].value);
  }

  return (
    <div>
      <h3>3. Using of Localstorage</h3>
      <input
        className={styles.input}
        type="text"
        placeholder={"please enter new key"}
      />
      <input
        className={styles.input}
        type="text"
        placeholder={"please enter new value"}
      />
      <button
        onClick={() => {
          onClickHandler();
        }}
      >
        Save value to local storage
      </button>
    </div>
  );
};

export default Storage;
