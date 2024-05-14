import React, { FC } from "react";
import { IPostResponse } from "../../models/IPostResponse";
import styles from "./ServerResponse.module.css";

interface IProps {
  serverResponse: IPostResponse;
}

const ServerResponseObj: FC<IProps> = ({
  serverResponse: { id, userId, title, body },
}) => {
  return (
    <div>
      <p>Server response:</p>
      <p>Record ID: {id}</p>
      <p>User ID: {userId}</p>
      <p>Post title: {title}</p>
      <p className={styles.postBody}>Post body: {body}</p>
    </div>
  );
};

export default ServerResponseObj;
