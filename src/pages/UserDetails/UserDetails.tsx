import React, { FC, useRef } from "react";
import { useLocation } from "react-router-dom";
import IUserProps from "../../models/IUserProps";
import styles from "./UserDetails.module.css";

const UserDetails: FC = () => {
  const location = useLocation();
  const ObjectCrawlerToRender = (props: IUserProps) =>
    Object.entries(props).map(([key, value], index) => (
      <div key={index} className={styles.dataLine}>
        <div>
          <span>{key}</span>
        </div>
        <span className={styles.separator}>:</span>
        <div>
          {typeof value === "object" ? (
            ObjectCrawlerToRender(value)
          ) : (
            <span>{value}</span>
          )}
        </div>
      </div>
    ));
  return (
    <div className={styles.objectWrapper}>
      {location.state ? ObjectCrawlerToRender(location.state) : "No data"}
    </div>
  );
};

export default UserDetails;
