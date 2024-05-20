import axios, { AxiosInstance, AxiosResponse } from "axios";
import { urls } from "../constants/urlFmJsonplaceholder";
import { IUserProps } from "../models/IUserProps";
import { IPostProps } from "../models/IPostProps";
import { ICommentProps } from "../models/ICommentProps";

let axiosInstance: AxiosInstance = axios.create({
  baseURL: urls.baseURL,
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

interface IGetData {
  getAllUsers: () => Promise<AxiosResponse<IUserProps[]>>;
  getPosts: (url: string) => Promise<AxiosResponse<IPostProps[]>>;
  getComments: (url: string) => Promise<AxiosResponse<ICommentProps[]>>;
}

export const placeHolderApi: IGetData = {
  getAllUsers: () => axiosInstance.get(urls.users),
  getPosts: (url) => axiosInstance.get(url),
  getComments: (url) => axiosInstance.get(url),
};
