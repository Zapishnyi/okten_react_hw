import React, { FC, useEffect, useState } from "react";

import "./App.css";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";
import UserDetails from "./components/UserDetails/UserDetails";

import {
  getUser,
  getUserPosts,
  getUsers,
} from "./services/users_posts_get.api.service";

import IUserProps from "./models/IUserProps";
import IPostProps from "./models/IPostProps";

const App: FC = () => {
  const [users, setUsers] = useState<IUserProps[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);
  const [userDetailsData, setUserDetailsData] = useState<IUserProps>({});
  const [userPosts, setUserPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    getUsers(skip).then(({ data: { users } }) => {
      setUsers(users);
    });
  }, [skip]);

  useEffect(() => {
    if (userId) {
      getUser(userId).then(({ data }) => {
        setUserDetailsData(data);
      });
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getUserPosts(userId).then(({ data: { posts } }) => {
        setUserPosts(posts);
      });
    }
  }, [userId]);

  const userDetails = (userId: number) => {
    setUserId(userId);
  };

  return (
    <div className="App">
      <div className="usersInfo">
        <Users
          users={users}
          skip={skip}
          setSkip={setSkip}
          userDetails={userDetails}
        />
        <UserDetails userDetailsData={userDetailsData} />
        <UserPosts userPosts={userPosts} />
      </div>
    </div>
  );
};
export default App;
