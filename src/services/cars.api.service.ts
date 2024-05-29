import axios, { AxiosResponse } from "axios";
import { carsURLs } from "../constants/carsURLs";
import { IPaginInfo } from "../models/IPaginInfo";
import { IRegisterProps } from "../models/IRegisterProps";
import { ICreatedProps } from "../models/ICreatedProps";
import { ITokensProps } from "../models/ITokensProps";
import { storage } from "./localStorageService";
import { ICarProps } from "../models/ICarProps";

const axiosInstance = axios.create({
  baseURL: carsURLs.base,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

interface ICarsApi {
  getCars: () => Promise<AxiosResponse<IPaginInfo>>;
  register: (props: IRegisterProps) => Promise<AxiosResponse<ICreatedProps>>;
  login: (props: IRegisterProps) => Promise<AxiosResponse<ITokensProps>>;
  me: () => Promise<AxiosResponse<ICreatedProps>>;
  refresh: () => Promise<AxiosResponse<ITokensProps>>;
  addCar: (props: ICarProps) => Promise<AxiosResponse<ICarProps>>;
}

axiosInstance.interceptors.request.use((request) => {
  let accessToken = storage.getAccessToken();
  accessToken
    ? (request.headers.Authorization = `Bearer ${accessToken}`)
    : console.log("NO TOKEN");
  return request;
});

const carsApi: ICarsApi = {
  getCars: () => axiosInstance.get(carsURLs.allCars),
  register: (props) => axiosInstance.post(carsURLs.users, { ...props }),
  login: (props) => axiosInstance.post(carsURLs.auth, { ...props }),
  me: () => axiosInstance.get(carsURLs.authMe),
  refresh: () =>
    axiosInstance.post(carsURLs.authRefresh, {
      refresh: storage.getRefreshToken(),
    }),
  addCar: (newCar) => axiosInstance.post(carsURLs.allCars, { newCar }),
};

export default carsApi;
