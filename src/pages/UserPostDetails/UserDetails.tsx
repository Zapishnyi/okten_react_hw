import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import { UsersActions } from "../../redux/UsersSlice/UsersSlice";

const UserDetails = () => {
  console.log(".");

  const dispatch = useAppDispatch();

  const { chosenUser, userLoadingState } = useAppSelector(
    (store) => store.UserBundle,
  );
  const { userId } = useParams();
  useEffect(() => {
    userId
      ? dispatch(UsersActions.setChosenUser(userId))
      : console.log("no userId given");
  }, [userId]);
  return (
    <div>
      {userLoadingState && <p>Loading...</p>}
      <div>
        {chosenUser && (
          <div>
            <p>User ID: {chosenUser.id}</p>
            <p>Name: {chosenUser.name}</p>
            <p>Username: {chosenUser.username}</p>
            <p>User Email: {chosenUser.email}</p>
            <p>User Address:</p>
            <div>
              <p>Street: {chosenUser.address?.street}</p>
              <p>Suite: {chosenUser.address?.suite}</p>
              <p>City: {chosenUser.address?.city}</p>
              <p>Zipcode: {chosenUser.address?.zipcode}</p>
              <p>Geo:</p>
              <div>
                <p>lat: {chosenUser.address?.geo.lat}</p>
                <p>lng: {chosenUser.address?.geo.lng}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
