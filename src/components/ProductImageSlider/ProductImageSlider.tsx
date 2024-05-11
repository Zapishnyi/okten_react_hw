import React, { FC } from "react";

import styles from "./ImageSlider.module.css";

interface IProps {
  imgList: string[];
  title: string;
  id: number;
}

const ProductImageSlider: FC<IProps> = ({ imgList, title, id }) => {
  let psn = 0;
  let trigger = 0;

  let slider = document.getElementsByClassName(
    title,
  ) as unknown as HTMLDivElement[];

  let sliderInterval: ReturnType<typeof setTimeout>;
  const slideIntervalDriver = () => {
    sliderInterval = setInterval(
      () => {
        if (psn === 0) {
          trigger = 0;
        }
        if (-psn / 200 === imgList.length - 1) {
          trigger = 1;
        }
        if (imgList.length !== 1) {
          trigger ? (psn = psn + 200) : (psn = psn - 200);
        }
        slider[0]
          ? (slider[0].style.left = psn + "px")
          : clearInterval(sliderInterval);
      },
      Math.random() * 400 + 4000,
    );
  };
  slideIntervalDriver();
  document.addEventListener("visibilitychange", (event) => {
    document.hidden ? clearInterval(sliderInterval) : slideIntervalDriver();
  });

  return (
    <div className={styles.imgWrapper}>
      <div className={[styles.imgRibbon, title].join(" ")}>
        {imgList.map((img: string, index: number) => (
          <img key={index} src={img} alt={title} />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
