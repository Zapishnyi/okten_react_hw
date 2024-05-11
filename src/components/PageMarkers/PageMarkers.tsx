import React from "react";
import styles from "../Products/Products.module.css";

const PageMarkers = () => {
  return (
    <div>
      <div className={[styles.paginationMarker, styles.mark_0].join(" ")}></div>
      <div
        className={[styles.paginationMarker, styles.mark_20].join(" ")}
      ></div>
      <div
        className={[styles.paginationMarker, styles.mark_40].join(" ")}
      ></div>
      <div
        className={[styles.paginationMarker, styles.mark_60].join(" ")}
      ></div>
      <div
        className={[styles.paginationMarker, styles.mark_80].join(" ")}
      ></div>
    </div>
  );
};

export default PageMarkers;
