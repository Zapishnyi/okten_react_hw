import React, { FC } from "react";
import { ICommentProps } from "../../../models/ICommentProps";
import styles from "../LastInChain.module.css";

interface IProps {
  comment: ICommentProps;
}

const Comment: FC<IProps> = ({
  comment: { id, name, body, postId, email },
}) => {
  return (
    <div className={styles.card}>
      <p>Post ID: {postId}</p>
      <p>Comment ID: {id}</p>
      <p>Commentator email:{email}</p>
      <p>Comment title: {name}</p>
      <p>Comment body: {body}</p>
    </div>
  );
};

export default Comment;
