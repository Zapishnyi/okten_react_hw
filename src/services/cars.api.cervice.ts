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

interface IAuthServices {
  register: (
    credentials: IUserCredentials,
  ) => Promise<AxiosResponse<IUserInfo>>;
  login: (credentials: IUserCredentials) => Promise<AxiosResponse<ITokens>>;
}

interface ITokenHandledServices {
  refreshTokens: (refreshToken: string) => Promise<AxiosResponse<ITokens>>;
  getCars: (page: string) => Promise<AxiosResponse<ICarPaginated>>;
  getMe: () => Promise<AxiosResponse<IUserInfo>>;
  createCar: (newCar: ICarToSend, id: number) => Promise<AxiosResponse<ICar>>;
  deleteCar: (id: number) => Promise<AxiosResponse<ICar>>;
  editCar: (newCar: ICarToSend, id: number) => Promise<AxiosResponse<ICar>>;
  patchCar: (newCar: ICarToSend, id: number) => Promise<AxiosResponse<ICar>>;
}

const authServices: IAuthServices = {
  register: (credentials) => axiosInstance.post(urls.users, credentials),
  login: (credentials) => axiosInstance.post(urls.auth, credentials),
};

const tokenHandledServices: ITokenHandledServices = {
  refreshTokens: (refreshToken) =>
    axiosInstance.post(urls.authRefresh, { refresh: refreshToken }),
  getCars: (page) => axiosInstance.get(urls.cars, { params: { page: page } }),
  getMe: () => axiosInstance.get(urls.authMe),
  createCar: (newCar, id) => axiosInstance.post(urls.cars, newCar),
  deleteCar: (id) => axiosInstance.delete(urls.carManipulate(id)),
  editCar: (newCar, id) => axiosInstance.put(urls.carManipulate(id), newCar),
  patchCar: (newCar, id) => axiosInstance.patch(urls.carManipulate(id), newCar),
};

export { authServices, tokenHandledServices };
