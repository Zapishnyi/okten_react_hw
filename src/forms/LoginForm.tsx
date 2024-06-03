import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import IUserCredentials from "../models/IUserCredentials";
import { authServices } from "../services/cars.api.cervice";
import { localStorageService } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import { tokenAutoRefreshService } from "../services/tokenAutoRefreshService";
import { AxiosError } from "axios";

interface IProps {
  userCredentials: IUserCredentials;
}

interface IErrorDetails {
  detail: string;
}

const LoginForm: FC<IProps> = ({ userCredentials: { username, password } }) => {
  console.log(".");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IUserCredentials>({
    defaultValues: { username: username, password: password },
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const Login = async (LoginData: IUserCredentials) => {
    try {
      await authServices.login(LoginData).then(({ data }) => {
        localStorageService.saveTokens(data);
        tokenAutoRefreshService("externalCall");
      });
      navigate("/cars?page=1");
    } catch (err) {
      const errorMessage = err as AxiosError<IErrorDetails>;
      setServerError(errorMessage.response?.data.detail || "");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Login)}>
        <label>
          Username:
          <input type="text" {...register("username")} />
        </label>
        <label>
          Password:
          <input type="text" {...register("password")} />
        </label>
        <button>Login</button>
        {serverError && <span>{`Server response: ${serverError}`}</span>}
      </form>
    </div>
  );
};

export default LoginForm;
