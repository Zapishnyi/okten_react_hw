import { AxiosError, AxiosResponse } from "axios";
import { ICreatedProps } from "../models/ICreatedProps";
import carsApi from "./cars.api.service";
import { storage } from "./localStorageService";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ICarProps } from "../models/ICarProps";
import { IPaginInfo } from "../models/IPaginInfo";
import { IRegisterProps } from "../models/IRegisterProps";
import { ITokensProps } from "../models/ITokensProps";

const TokenService = async (
  apiAction: (
    props?: ICarProps | ITokensProps,
  ) => Promise<AxiosResponse<ICreatedProps | IPaginInfo | ICarProps>>,
  path: string,
  navigate: NavigateFunction,
  newCar?: ICarProps,
) => {
  try {
    console.log("Aplication", newCar);
    return await apiAction(newCar).then(({ data }) => data);
  } catch {
    console.log("token error, refresh sent");
    try {
      await carsApi.refresh().then(({ data }) => {
        storage.setAccessToken(data.access);
        storage.setRefreshToken(data.refresh);
      });
      navigate({ pathname: `${path}` });
    } catch {
      console.log("refresh error,  sent to login");
      navigate({ pathname: "/login" });
    }
  }
};

export default TokenService;
