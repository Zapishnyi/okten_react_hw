import React, { FC } from "react";
import styles from "../Products/Products.module.css";
import { ButtonsOnClick } from "../Products/ButtonsOnClick";
import ISetSkip from "../../models/ISetSkip";

const ButtonLeft: FC<ISetSkip> = ({ setSkip }) => {
  return (
    <svg
      className={[styles.arrowLeft, styles.arrow].join(" ")}
      viewBox="0 -0.5 17 17"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          className={styles.arrowL}
          onClick={(event) => {
            ButtonsOnClick(event, setSkip);
          }}
          d="M10.978,1.162 C10.978,1.387 10.916,1.612 10.782,1.812 L6.626,8.041 L10.823,14.078 C11.182,14.619 11.036,15.348 10.495,15.707 C9.956,16.068 9.224,15.922 8.865,15.382 L4.235,8.694 C3.971,8.3 3.969,7.786 4.233,7.39 L8.822,0.51 C9.182,-0.032 9.914,-0.178 10.454,0.181 C10.795,0.409 10.978,0.782 10.978,1.162 L10.978,1.162 Z"
        ></path>
      </g>
    </svg>
  );
};

export default ButtonLeft;
