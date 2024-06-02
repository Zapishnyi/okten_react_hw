import { MouseEventHandler } from "react";
import clearMarks from "./pressedButtonMarksClear";

const buttonMarkAdd: MouseEventHandler<HTMLAnchorElement> = (e) => {
  clearMarks();
  const pressedCarWrapper = e.currentTarget.offsetParent as HTMLDialogElement;
  pressedCarWrapper?.offsetParent?.classList.add("pressedWrapper");
  e.currentTarget.classList.add("pressedLink");
};

export default buttonMarkAdd;
