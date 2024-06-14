import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import User from "../components/UserPost/User";
import { UsersActions } from "../redux/UsersSlice/UsersSlice";

const Users: FC = () => {
  console.log(".");
  const { users, userLoadingState } = useAppSelector(
    (state) => state.UserBundle,
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(UsersActions.loadUsers());
  }, []);
  return (
    <div>
      {userLoadingState && <p>Loading...</p>}
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
