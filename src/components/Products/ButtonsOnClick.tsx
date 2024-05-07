import React from "react";
import styles from "./Products.module.css";

const ButtonsOnClick = (
  event: React.MouseEvent<SVGPathElement>,
  setSkip: React.Dispatch<React.SetStateAction<number>>,
) => {
  let buttonPressed = event.target as unknown as SVGPathElement;

  setSkip((prevState) => {
    let mark = document.getElementsByClassName(styles[`mark_${prevState}`])[0];

    const warningSign = () => {
      buttonPressed.classList.add(styles.warning);
      setTimeout(() => {
        buttonPressed.classList.remove(styles.warning);
      }, 500);
    };

    switch (true) {
      case buttonPressed.classList.contains(styles.arrowL):
        if (prevState !== 0) {
          mark.classList.remove(styles.checked);
        } else {
          warningSign();
        }
        return prevState !== 0 ? prevState - 20 : prevState;
      case buttonPressed.classList.contains(styles.arrowR):
        if (prevState !== 80) {
          mark.classList.remove(styles.checked);
        } else {
          warningSign();
        }
        return prevState !== 80 ? prevState + 20 : prevState;
    }
    return prevState;
  });
};

export { ButtonsOnClick };
