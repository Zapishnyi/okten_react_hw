import axios, { AxiosResponse } from "axios";
import {
  baseUrlFmPlaceholder,
  urlsFmPlaceholder,
} from "../constants/urlsJsonplaceholder";
import IUserProps from "../models/IUserProps";
import IPostProps from "../models/IPostProps";
import { ICommentProps } from "../models/ICommentProps";

const axiosInstance = axios.create({
  baseURL: baseUrlFmPlaceholder,
  headers: { "Content-Type": "application/json" },
});

export const placeholderApi = {
  getAllUsers: (): Promise<AxiosResponse<IUserProps[]>> =>
    axiosInstance.get(urlsFmPlaceholder.allUsers),
  getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostProps[]>> =>
    axiosInstance.get(urlsFmPlaceholder.postsOfUser(userId)),
  getCommentsOfPost: (
    postId: string,
  ): Promise<AxiosResponse<ICommentProps[]>> =>
    axiosInstance.get(urlsFmPlaceholder.commentsToPost(postId)),
};
