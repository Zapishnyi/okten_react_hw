import React, { FC } from "react";
import { ICommentProps } from "../../models/ICommentProps";
import styles from "./CommentsToPost.module.css";

interface IComment {
  comment: ICommentProps;
}

const CommentToPost: FC<IComment> = ({ comment }) => {
  return (
    <div className={styles.postCard}>
      <p>Post ID: {comment.postId}</p>
      <p>Comment ID: {comment.id};</p>
      <p>Commentator email: {comment.email}</p>
      <p>Comment title: {comment.name}</p>
      <p>Comment body:{comment.body}</p>
    </div>
  );
};

export default CommentToPost;
