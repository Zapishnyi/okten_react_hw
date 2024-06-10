import React, { FC } from "react";
import { useContextData } from "../contexts/ContextProvider";
import Comment from "../components/Comment";

const Comments: FC = () => {
  console.log(".");
  return (
    <div className={"dataWrapper"}>
      {useContextData().allComments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
