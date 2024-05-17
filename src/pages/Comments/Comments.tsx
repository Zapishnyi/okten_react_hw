import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { placeholderApi } from "../../services/usersPostsComents.api.service";
import { ICommentProps } from "../../models/ICommentProps";
import CommentToPost from "../../components/CommentToPost/CommentToPost";
import styles from "./Comments.module.css";

const Comments: FC = () => {
  const location = useLocation();
  const [userComments, setUserComments] = useState<ICommentProps[] | null>(
    null,
  );
  useEffect(() => {
    if (location.state) {
      placeholderApi.getCommentsOfPost(location.state.id).then(({ data }) => {
        setUserComments(data);
      });
    }
  }, [location.state]);
  return (
    <div className={styles.commentsWrapper}>
      {location.state ? (
        userComments?.map((comment, index) => (
          <CommentToPost key={index} comment={comment} />
        ))
      ) : (
        <p className={"noData"}>{"No data"}</p>
      )}
    </div>
  );
};
export default Comments;
