import React, { FC } from "react";

import IUserProps from "../../models/IUserProps";
import IPostProps from "../../models/IPostProps";

import styles from "./ObjectCrawler.module.css";

type ITypeObjectToCrawl = { objectData: IUserProps | IPostProps };

const ObjectCrawler: FC<ITypeObjectToCrawl> = ({ objectData }) => {
  const ObjectCrawlerToRender = (props: IUserProps | IPostProps) =>
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
  return (
    <div className={styles.objectWrapper}>
      {ObjectCrawlerToRender(objectData)}
    </div>
  );
};

export default ObjectCrawler;
