import React, { FC } from "react";
import styles from "../Products/Products.module.css";
import { ButtonsOnClick } from "../Products/ButtonsOnClick";
import ISetSkip from "../../models/ISetSkip";

const ButtonRight: FC<ISetSkip> = ({ setSkip }) => {
  return (
    <svg
      className={[styles.arrowRight, styles.arrow].join(" ")}
      viewBox="0 -0.5 17 17"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          className={styles.arrowR}
          onClick={(event) => {
            ButtonsOnClick(event, setSkip);
          }}
          d="M6.077,1.162 C6.077,1.387 6.139,1.612 6.273,1.812 L10.429,8.041 L6.232,14.078 C5.873,14.619 6.019,15.348 6.56,15.707 C7.099,16.068 7.831,15.922 8.19,15.382 L12.82,8.694 C13.084,8.3 13.086,7.786 12.822,7.39 L8.233,0.51 C7.873,-0.032 7.141,-0.178 6.601,0.181 C6.26,0.409 6.077,0.782 6.077,1.162 L6.077,1.162 Z"
        ></path>
      </g>
    </svg>
  );
};

export default ButtonRight;
