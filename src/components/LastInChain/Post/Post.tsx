import React, { FC } from "react";
import { IPostProps } from "../../../models/IPostProps";
import styles from "../LastInChain.module.css";
import { Link } from "react-router-dom";
import { urls } from "../../../constants/urlFmJsonplaceholder";
import { onClickHandler } from "../../../logic/ChosenClickHandler/ChosenClickHandler";

interface IProps {
  post: IPostProps;
}

const Post: FC<IProps> = ({ post: { id, userId, title, body } }) => {
  return (
    <Link
      className={"link"}
      to={"postComments"}
      state={urls.commentsToPost(id.toString())}
    >
      <div onClick={(e) => onClickHandler(e)} className={styles.card}>
        <p>User ID: {userId}</p>
        <p>Post ID: {id}</p>
        <p>Post title: {title}</p>
        <p>Post body: {body}</p>
      </div>
    </Link>
  );
};

export default Post;
