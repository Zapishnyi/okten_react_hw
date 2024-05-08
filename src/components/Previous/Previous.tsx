import React, { FC, useState } from "react";
import { usePrevious } from "../../customHooks/usePrevious";
import ValueList from "../ValueList/ValueList";
import styles from "./Previouse.module.css";

const Previous: FC = () => {
  const { previousValue, currentValue, pushNewValue } = usePrevious();
  const [, setRandom] = useState<number>(0);

  function clickHandler(): void {
    let input = document.getElementsByClassName(
      styles.valueInput,
    )[0] as HTMLInputElement;
    setRandom(Math.random());
    pushNewValue(input.value);
  }

  return (
    <div>
      <h3>2. "Previous values" assigment</h3>
      <input
        type="text"
        className={styles.valueInput}
        placeholder={"please enter new value"}
      />
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Save value
      </button>
      <p>Value mutation List:</p>
      <ValueList
        previousValue={previousValue}
        currentValue={currentValue}
      /> : <></>
    </div>
  );
};

export default Previous;
