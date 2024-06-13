import React, { FC } from "react";
import Post from "../components/Post";
import { useAppSelector } from "../redux/store";

const Posts: FC = () => {
  console.log(".");

  const {
    Posts: { postsState },
    ChosenUser: { chosenUser },
  } = useAppSelector((state) => state);

  return (
    <div className={"dataWrapper"}>
      {postsState.map((post) =>
        chosenUser ? (
          post.userId === chosenUser.id && <Post key={post.id} post={post} />
        ) : (
          <Post key={post.id} post={post} />
        ),
      )}
    </div>
  );
};

export default Posts;
