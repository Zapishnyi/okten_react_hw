import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { StoreActions } from "../redux/sliceBundle/sliceBundle";
import User from "../components/UserPost/User";

const Users: FC = () => {
  console.log(".");
  const { users, loadingState } = useAppSelector(
    (state) => state.StoreManipulate,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(StoreActions.loadUsers());
  }, []);
  return (
    <div>
      {loadingState && <p>Loading...</p>}
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
