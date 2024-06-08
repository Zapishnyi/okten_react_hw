import React, { FC, useMemo } from "react";
import { dataStore } from "../stateManager/StateManager";
import IUserWithPosts from "../models/IUserWithPosts";
import User from "../components/User";
import Post from "../components/Post";

const UsersWithPosts: FC = () => {
  console.log(".");
  const { allUsers, allPosts, chosenUser } = dataStore();

  const chosenUsersPosts: IUserWithPosts[] = useMemo(
    () =>
      allUsers
        .filter((user) => (chosenUser ? user.id === chosenUser.id : true))
        .map((user) => ({
          ...user,
          posts: allPosts.filter((post) => post.userId === user.id),
        })),
    [chosenUser],
  );

  return (
    <div className={"userWithPost"}>
      {chosenUsersPosts.map((userWithPosts) => (
        <div key={userWithPosts.id}>
          <User key={userWithPosts.id} user={userWithPosts} />
          {userWithPosts.posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UsersWithPosts;
