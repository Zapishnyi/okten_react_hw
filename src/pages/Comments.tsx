import React, { FC } from "react";
import Comment from "../components/Comment";
import { useAppSelector } from "../redux/store";

const Comments: FC = () => {
  console.log(".");

  const { commentsState } = useAppSelector((store) => store.Comments);

  return (
    <div className={"dataWrapper"}>
      {commentsState.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
