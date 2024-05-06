import React, { FC } from "react";

import styles from "./ImageSlider.module.css";

interface IProps {
  imgList: string[];
  title: string;
  psn: number[];
  trigger: number[];
  id: number;
}

const ProductImageSlider: FC<IProps> = ({
  imgList,
  title,
  trigger,
  psn,
  id,
}) => {
  psn.push(0);
  trigger.push(0);

  let slider = document.getElementsByClassName(
    title,
  ) as unknown as HTMLDivElement[];
  const sliderInterval = setInterval(
    () => {
      if (psn[id] === 0) {
        trigger[id] = 0;
      }
      if (-psn[id] / 270 === imgList.length - 1) {
        trigger[id] = 1;
      }
      if (imgList.length !== 1) {
        trigger[id] ? (psn[id] = psn[id] + 270) : (psn[id] = psn[id] - 270);
      }
      slider[0]
        ? (slider[0].style.left = psn[id] + "px")
        : clearInterval(sliderInterval);
    },
    Math.random() * 150 + 3000,
  );
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
