import axios from "axios";
import { urls } from "../constants/urls";
import IPost from "../models/IPost";

const axiosInstance = axios.create({
  baseURL: urls.base,
  headers: { "Content-Type": "application/json" },
});

interface IPostAPI {
  getPosts: Promise<IPost[]>;
  getChosenPost: (postId: string) => Promise<IPost>;
}

const postsAPI: IPostAPI = {
  getPosts: axiosInstance.get(urls.posts).then((res) => res.data),
  getChosenPost: (postId) =>
    axiosInstance.get(urls.chosenPost(postId)).then((res) => res.data),
};

export default postsAPI;
