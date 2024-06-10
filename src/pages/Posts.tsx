import React, { FC } from "react";
import { useContextData } from "../contexts/ContextProvider";
import Post from "../components/Post";

const Posts: FC = () => {
  console.log(".");
  const { chosenUser } = useContextData();

  return (
    <div className={"dataWrapper"}>
      {useContextData().allPosts?.map((post) =>
        chosenUser ? (
          post.userId === chosenUser?.id && <Post key={post.id} post={post} />
        ) : (
          <Post key={post.id} post={post} />
        ),
      )}
    </div>
  );
};

export default Posts;
