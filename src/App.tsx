import React, { MouseEvent } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { customValueChange, decrement, increment } from "./redux/slice1/slice1";

const App = () => {
  const { value } = useAppSelector((state) => state.slice1);

  const dispatch = useAppDispatch();

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.className) {
      case "increment":
        dispatch(increment());
        break;
      case "decrement":
        dispatch(decrement());
        break;
      case "customAction":
        dispatch(
          customValueChange(
            +(document.getElementsByClassName("custom")[0] as HTMLInputElement)
              .value,
          ),
        );
        break;
    }
  };

  return (
    <div className="App">
      <h2>{value}</h2>
      <div>
        <button className={"increment"} onClick={clickHandler}>
          Increment
        </button>
        <button className={"decrement"} onClick={clickHandler}>
          Decrement
        </button>
      </div>
      <div className={"customBox"}>
        <p> Please enter desired value to change:</p>
        <input className={"custom"} type="number" />
        <button className={"customAction"} onClick={clickHandler}>
          Change
        </button>
      </div>
    </div>
  );
};
export default App;
