import React, { FC, useEffect, useState } from "react";
import { usePrevious } from "../../customHooks/usePrevious";
import ValueList from "../ValueList/ValueList";
import styles from "./Previouse.module.css";

const Previous: FC = () => {
  const [values, pushNewValue] = usePrevious();
  const [random, setRandom] = useState<number>(0);
  let input = document.getElementsByClassName(
    styles.valueInput,
  )[0] as HTMLInputElement;
  return (
    <div>
      <h3>2. Previous values assigment</h3>
      <input
        type="text"
        className={styles.valueInput}
        placeholder={"please enter new value"}
      />
      <button
        onClick={() => {
          setRandom(Math.random());
          pushNewValue(input.value);
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
