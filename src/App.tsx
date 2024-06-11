import React, { MouseEvent } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/store";
import {
  customValueChange,
  decrement,
  increment,
  reset,
} from "./redux/slice1/slice1";

const App = () => {
  const { value } = useAppSelector((state) => state.slice1);

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h2>{value}</h2>
      <div>
        <button className={"increment"} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className={"decrement"} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className={"customBox"}>
        <p> Please enter desired value to change:</p>
        <input className={"custom"} type="number" />
        <button
          className={"customAction"}
          onClick={(e) =>
            dispatch(
              customValueChange(
                +(e.currentTarget.previousSibling as HTMLInputElement).value,
              ),
            )
          }
        >
          Change
        </button>
      </div>
      <button className={"reset"} onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};
export default App;
