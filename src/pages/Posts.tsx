import React, { FC } from "react";
import { dataStore } from "../stateManager/StateManager";
import Post from "../components/Post";

const Posts: FC = () => {
  const { chosenUser, allPosts } = dataStore();

  return (
    <div className={"dataWrapper"}>
      {allPosts.map((post) =>
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
