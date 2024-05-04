import React, { FC } from "react";
import ObjectCrawler from "../ObjectCrawler/ObjectCrawler";
import IPostProps from "../../models/IPostProps";
import styles from "./UserPost.module.css";

type IUserPostProps = { userPost: IPostProps };

const UserPost: FC<IUserPostProps> = ({ userPost }) => {
  return (
    <div className={styles.post}>
      <ObjectCrawler objectData={userPost} />
    </div>
  );
};

export default UserPost;
