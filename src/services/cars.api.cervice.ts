import axios, { AxiosResponse } from "axios";
import { urls } from "../constants/urls";
import IUserCredentials from "../models/IUserCredentials";
import IUserInfo from "../models/IUserInfo";
import ITokens from "../models/ITokens";
import { localStorageService } from "./localStorageService";
import ICarPaginated from "../models/ICarPaginated";
import ICarToSend from "../models/ICarToSend";
import ICar from "../models/ICar";

const axiosInstance = axios.create({
  baseURL: urls.base,
});

axiosInstance.interceptors.request.use((request) => {
  if (
    localStorageService.getAccessToken() &&
    request.url !== (urls.users || urls.auth || urls.authRefresh)
  ) {
    request.headers.set(
      "Authorization",
      `Bearer ${localStorageService.getAccessToken()}`,
    );
  }
  return request;
});

interface IPublicService {
  register: (
    credentials: IUserCredentials,
  ) => Promise<AxiosResponse<IUserInfo>>;
  login: (credentials: IUserCredentials) => Promise<AxiosResponse<ITokens>>;
}

interface IAuthService {
  refreshTokens: (refreshToken: string) => Promise<AxiosResponse<ITokens>>;
  getCars: () => Promise<AxiosResponse<ICarPaginated>>;
  getMe: () => Promise<AxiosResponse<IUserInfo>>;
  createCar: (newCar: ICarToSend) => Promise<AxiosResponse<ICar>>;
  deleteCar: (id: number) => Promise<AxiosResponse<ICar>>;
}

const publicServices: IPublicService = {
  register: (credentials) => axiosInstance.post(urls.users, credentials),
  login: (credentials) => axiosInstance.post(urls.auth, credentials),
};

const authServices: IAuthService = {
  refreshTokens: (refreshToken) =>
    axiosInstance.post(urls.authRefresh, { refresh: refreshToken }),
  getCars: () => axiosInstance.get(urls.cars),
  getMe: () => axiosInstance.get(urls.authMe),
  createCar: (newCar) => axiosInstance.post(urls.cars, newCar),
  deleteCar: (id) => axiosInstance.delete(urls.carDelete(id)),
};

export { publicServices, authServices };
