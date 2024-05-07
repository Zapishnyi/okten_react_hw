import React, { FC } from "react";
import { useToggle } from "../../customHooks/useToggle";

const Toggle: FC = () => {
  let [toggleValue, toggle] = useToggle();
  return (
    <div>
      <h3>1. Toggle assigment</h3>
      <button onClick={() => toggle()}>
        Toggle: value - {`${toggleValue}`}
      </button>
    </div>
  );
};

export default Toggle;
