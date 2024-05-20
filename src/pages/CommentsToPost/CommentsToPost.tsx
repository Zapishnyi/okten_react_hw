import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { placeHolderApi } from "../../services/usersPostsComments.api.service";
import Comment from "../../components/LastInChain/Comment/Comment";
import { ICommentProps } from "../../models/ICommentProps";
import styles from "../Comments/Comments.module.css";

const CommentsToPost = () => {
  const location = useLocation();
  const [comments, setComments] = useState<ICommentProps[] | null>(null);
  useEffect(() => {
    placeHolderApi.getComments(location.state).then(({ data }) => {
      setComments(data);
    });
  }, [location]);
  return (
    <div className={styles.wrapper}>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentsToPost;
