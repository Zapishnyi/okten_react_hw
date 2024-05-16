import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const UserDetails: FC = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>User Details</div>;
};

export default UserDetails;
