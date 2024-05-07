import React, { FC, useState } from "react";
import { useStorage } from "../../customHooks/useStorage";
import styles from "./Storage.module.css";

const Storage: FC = () => {
  let keyInput = document.getElementsByClassName(
    styles.keyInput,
  )[0] as HTMLInputElement;
  let valueInput = document.getElementsByClassName(
    styles.valueInput,
  )[0] as HTMLInputElement;
  const [value, setValue] = useState("");
  useStorage(keyInput.value, value);
  return (
    <div>
      <h3>3. Using of Localstorage</h3>
      <input
        className={styles.keyInput}
        type="text"
        placeholder={"please enter new key"}
      />
      <input
        className={styles.valueInput}
        type="text"
        placeholder={"please enter new value"}
      />
      <button
        onClick={() => {
          setValue(valueInput.value);
        }}
      >
        Save value to local storage
      </button>
    </div>
  );
};

export default Storage;
