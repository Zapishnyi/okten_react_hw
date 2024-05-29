import React, { FC, useContext } from "react";
import { ICreatedProps } from "../../models/ICreatedProps";
import { Link, Navigate } from "react-router-dom";
import { IRegisterProps } from "../../models/IRegisterProps";
import { CredentialsF } from "../AuthComponents/RegisterForm";

interface IProps {
  response: ICreatedProps;
}

const RegisterResponse: FC<IProps> = ({
  response: {
    id,
    created,
    updated,
    is_superuser,
    username,
    is_active,
    last_login,
    is_staff,
  },
}) => {
  const registerData = useContext(CredentialsF);
  return (
    <div>
      <p>User ID: {id}</p>
      <p>Username: {username} </p>
      <p>Created date: {created}</p>
      <p>Updated date: {updated};</p>
      <p>Is active: {is_active + ""}</p>
      <p>Is superuser: {is_superuser + ""};</p>
      <p>Last login date: {last_login + ""}</p>
      <Link to={"/login"} state={registerData}>
        Login
      </Link>
    </div>
  );
};

export default RegisterResponse;
