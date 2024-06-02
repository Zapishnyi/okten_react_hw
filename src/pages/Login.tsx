import React from "react";
import LoginForm from "../forms/LoginForm";
import { useLocation } from "react-router-dom";
import IUserCredentials from "../models/IUserCredentials";
import ILocation from "../models/ILocation";

const Login = () => {
  console.log(".");

  const locationData: ILocation<IUserCredentials> = useLocation();

  let userCredentials;

  locationData.state
    ? (userCredentials = locationData.state)
    : (userCredentials = { username: "", password: "" });

  return (
    <div>
      <LoginForm userCredentials={userCredentials} />
    </div>
  );
};

export default Login;
