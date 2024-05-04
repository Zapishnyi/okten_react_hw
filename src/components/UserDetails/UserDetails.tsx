import React, { FC } from "react";

import ObjectCrawler from "../ObjectCrawler/ObjectCrawler";

import IUserProps from "../../models/IUserProps";

import styles from "./UserDetais.module.css";

type ITypeUserDetailsData = { userDetailsData: IUserProps };

const UserDetails: FC<ITypeUserDetailsData> = ({ userDetailsData }) => {
  console.log("data details", userDetailsData);
  return (
    <div className={styles.userDetails}>
      <h3 className={styles.header}>User details</h3>
      <div className={styles.detailsWrapper}>
        <ObjectCrawler objectData={userDetailsData} />
      </div>
    </div>
  );
};

export default UserDetails;
