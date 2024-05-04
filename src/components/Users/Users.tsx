import React, { FC } from "react";

import IUserProps from "../../models/IUserProps";
import User from "../User/User";

import styles from "./Users.module.css";

interface IUsers {
  users: IUserProps[];
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  userDetails: (userId: number) => void;
}

const Users: FC<IUsers> = ({ users, skip, setSkip, userDetails }) => {
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
  return (
    <div className={styles.usersWrapper}>
      <button onClick={({ target }) => skipChange("prev", target)}>Prev</button>
      <div>
        {users.map((user, index) => (
          <User key={index} user={user} userDetails={userDetails} />
        ))}
      </div>
      <button onClick={({ target }) => skipChange("next", target)}>Next</button>
    </div>
  );
};

export default Users;
