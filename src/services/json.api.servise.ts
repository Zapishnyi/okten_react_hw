import axios, { AxiosResponse } from "axios";
import IUser from "../models/IUser";
import IPost from "../models/IPost";
import IComment from "../models/IComment";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

interface IJsonAPI {
  getUsers: () => Promise<AxiosResponse<IUser[]>>;
  getPosts: () => Promise<AxiosResponse<IPost[]>>;
  getComments: () => Promise<AxiosResponse<IComment[]>>;
}

const jsonAPI: IJsonAPI = {
  getUsers: () => axiosInstance.get("users"),
  getPosts: () => axiosInstance.get("posts"),
  getComments: () => axiosInstance.get("comments"),
};

export default jsonAPI;
