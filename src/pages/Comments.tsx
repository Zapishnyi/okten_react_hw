import React, { FC } from "react";
import { dataStore } from "../stateManager/StateManager";
import Comment from "../components/Comment";

const Comments: FC = () => {
  return (
    <div className={"dataWrapper"}>
      {dataStore().allComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
