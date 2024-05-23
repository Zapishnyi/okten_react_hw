import axios, { AxiosInstance, AxiosResponse } from "axios";
import { urls } from "../constants/urlFmJsonplaceholder";
import { IUserProps } from "../models/IUserProps";
import { IPostProps } from "../models/IPostProps";
import { ICommentProps } from "../models/ICommentProps";
import { IUserAddProps } from "../models/IUserAddProps";
import { IPostAddProps } from "../models/IPostAddProps";

let axiosInstance: AxiosInstance = axios.create({
  baseURL: urls.baseURL,
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

interface IGetData {
  getAllUsers: () => Promise<AxiosResponse<IUserProps[]>>;
  getPosts: (url: string) => Promise<AxiosResponse<IPostProps[]>>;
  getComments: (url: string) => Promise<AxiosResponse<ICommentProps[]>>;
  addUser: (props: IUserAddProps) => Promise<AxiosResponse<IUserProps>>;
  addPost: (props: IPostAddProps) => Promise<AxiosResponse<IPostProps>>;
}

export const placeHolderApi: IGetData = {
  getAllUsers: () => axiosInstance.get(urls.users),
  getPosts: (url) => axiosInstance.get(url),
  getComments: (url) => axiosInstance.get(url),
  addUser: (props) => axiosInstance.post(urls.users, { ...props }),
  addPost: (props) => axiosInstance.post(urls.posts, { ...props }),
};
