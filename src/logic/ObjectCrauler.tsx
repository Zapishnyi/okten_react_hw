import React from "react";

export const ObjectCrawlerToRender = (props: any) =>
  Object.entries(props).map(([key, value], index) => (
    <div key={index} className={styles.dataLine}>
      <div>
        <span className={styles.key}>{key}</span>
      </div>
      <span className={styles.separator}>:</span>
      <div>
        {typeof value === "object" ? (
          ObjectCrawlerToRender(value)
        ) : (
          <span className={styles.value}>{value}</span>
        )}
      </div>
    </div>
  ));
