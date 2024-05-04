import React, { FC, useEffect, useState } from "react";

import "./App.css";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";
import UserDetails from "./components/UserDetails/UserDetails";

import { getUser, getUserPosts, getUsers } from "./services/data.api.service";

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

  const skipChange = (buttonName: string, target: EventTarget) => {
    let buttonPressed = target as unknown as HTMLButtonElement;
    const buttonInWarning = () => {
      buttonPressed.classList.toggle("warning");
      setTimeout(() => buttonPressed.classList.toggle("warning"), 500);
    };
    switch (buttonName) {
      case "prev":
        skip !== 0 ? setSkip(skip - 20) : buttonInWarning();
        break;
      case "next":
        skip !== 80 ? setSkip(skip + 20) : buttonInWarning();
        break;
    }
  };

  const userDetails = (userId: number) => {
    setUserId(userId);
  };

  return (
    <div className="App">
      <div className="usersInfo">
        <Users
          users={users}
          skipChange={skipChange}
          userDetails={userDetails}
        />
        <UserDetails userDetailsData={userDetailsData} />
        <UserPosts userPosts={userPosts} />
      </div>
    </div>
  );
};
export default App;
