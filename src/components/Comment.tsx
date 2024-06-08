import React, { FC } from "react";
import IComment from "../models/IComment";

interface IProps {
  comment: IComment;
}

const Comment: FC<IProps> = ({ comment: { id, postId, name, body } }) => {
  console.log(".");
  return (
    <div className={"comment"}>
      <p>
        Comment ID {id} for post ID {postId}, Title:{name}
      </p>
      <p className={"body"}>Comment body: {body}</p>
    </div>
  );
};

export default Comment;
