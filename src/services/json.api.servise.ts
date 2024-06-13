import axios, { AxiosResponse } from "axios";
import IUser from "../models/IUser";
import IPost from "../models/IPost";
import IComment from "../models/IComment";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

interface IJsonAPI {
  getUsers: () => Promise<IUser[]>;
  getPosts: () => Promise<IPost[]>;
  getComments: () => Promise<IComment[]>;
}

const jsonAPI: IJsonAPI = {
  getUsers: () =>
    axiosInstance
      .get("users")
      .then((users: AxiosResponse<IUser[]>) => users.data),
  getPosts: () => axiosInstance.get("posts").then((posts) => posts.data),
  getComments: () =>
    axiosInstance.get("comments").then((comments) => comments.data),
};

export default jsonAPI;
