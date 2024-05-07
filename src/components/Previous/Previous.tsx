import React, { FC, useState } from "react";
import { usePrevious } from "../../customHooks/usePrevious";
import ValueList from "../ValueList/ValueList";
import styles from "./Previouse.module.css";

const Previous: FC = () => {
  const [value, setValue] = useState("");
  let values = usePrevious(value);
  return (
    <div>
      <h3>2. Previous values assigment</h3>
      <input
        className={styles.valueInput}
        type="text"
        placeholder={"please enter new value"}
      />
      <button
        onClick={() => {
          let input = document.getElementsByClassName(
            styles.valueInput,
          )[0] as HTMLInputElement;
          setValue(input.value);
        }}
      >
        Save value
      </button>
      <p>Value mutation List:</p>
      <ValueList values={values} />
    </div>
  );
};

export default Previous;
