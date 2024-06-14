import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { StoreActions } from "../../redux/sliceBundle/sliceBundle";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  console.log(".");

  const dispatch = useAppDispatch();

  const { chosenUser, loadingState } = useAppSelector(
    (store) => store.StoreManipulate,
  );
  const { userId } = useParams();
  useEffect(() => {
    dispatch(StoreActions.setChosenUser(userId || "error"));
  }, [userId]);
  return (
    <div>
      {loadingState && <p>Loading...</p>}
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
