import { MouseEventHandler } from "react";
import clearMarks from "./pressedButtonMarksClear";

const buttonMarkAdd: MouseEventHandler<HTMLAnchorElement> = (e) => {
  clearMarks();
  const pressedLink = e.target as HTMLAnchorElement;
  pressedLink.classList.add("pressed");
};

export default buttonMarkAdd;
