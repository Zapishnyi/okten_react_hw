import axios from "axios";
import { urls } from "../constants/urls";
import IUser from "../models/IUser";
import IPost from "../models/IPost";

const axiosInstance = axios.create({
  baseURL: urls.base,
  headers: { "Content-Type": "application/json" },
});

interface IJsonAPI {
  getUsers: Promise<IUser[]>;
  getPosts: Promise<IPost[]>;
  getChosenUser: (userId: string) => Promise<IUser>;
  getChosenPost: (postId: string) => Promise<IPost>;
}

const jsonAPI: IJsonAPI = {
  getUsers: axiosInstance.get(urls.users).then((res) => res.data),
  getPosts: axiosInstance.get(urls.posts).then((res) => res.data),
  getChosenUser: (userId) =>
    axiosInstance.get(urls.chosenUser(userId)).then((res) => res.data),
  getChosenPost: (postId) =>
    axiosInstance.get(urls.chosenPost(postId)).then((res) => res.data),
};

export default jsonAPI;
