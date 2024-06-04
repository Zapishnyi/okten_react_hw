import React, { FC } from "react";
import { useContextData } from "../contexts/ContextProvider";
import IUser from "../models/IUser";
import IPost from "../models/IPost";
import IUserWithPosts from "../models/IUserWithPosts";
import User from "../components/User";
import Post from "../components/Post";

const UsersWithPosts: FC = () => {
  const { allUsers, allPosts, chosenUser } = useContextData();

  const chosenUsersPosts: IUserWithPosts[] = allUsers
    .filter((user) => (chosenUser ? user.id === chosenUser.id : true))
    .map((user) => ({
      ...user,
      posts: allPosts.filter((post) => post.userId === user.id),
    }));

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
