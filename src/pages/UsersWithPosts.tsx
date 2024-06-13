import React, { FC, useMemo } from "react";
import IUserWithPosts from "../models/IUserWithPosts";
import User from "../components/User";
import Post from "../components/Post";
import { useAppSelector } from "../redux/store";

const UsersWithPosts: FC = () => {
  console.log(".");
  const {
    Users: { usersState },
    Posts: { postsState },
    ChosenUser: { chosenUser },
  } = useAppSelector((store) => store);

  const chosenUsersPosts: IUserWithPosts[] = useMemo(
    () =>
      usersState
        .filter((user) => (chosenUser ? user.id === chosenUser.id : true))
        .map((user) => ({
          ...user,
          posts: postsState.filter((post) => post.userId === user.id),
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
