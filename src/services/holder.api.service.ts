import axios, { AxiosInstance, AxiosResponse } from "axios";
import { urls } from "../constants/urls";
import { IUserProps } from "../models/IUserProps";

let axiosInstance: AxiosInstance = axios.create({
  baseURL: urls.baseURL,
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

interface IGetData {
  getAllUsers: () => Promise<AxiosResponse<IUserProps[]>>;
}

export const holderApi: IGetData = {
  getAllUsers: () => axiosInstance.get(urls.users),
};
