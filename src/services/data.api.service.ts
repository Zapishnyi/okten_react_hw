import axios, { AxiosResponse } from "axios";
import IUserProps from "../models/IUserProps";
import IPostProps from "../models/IPostProps";

let axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});

type ITypeUsersData = { users: IUserProps[] };
type ITypePostsData = { posts: IPostProps[] };
const getUsers = (skip: number): Promise<AxiosResponse<ITypeUsersData>> =>
  axiosInstance.get(`/users?limit=20&skip=${skip}`);

const getUser = (id: number): Promise<AxiosResponse<IUserProps>> =>
  axiosInstance.get(`/users/${id}`);

const getUserPosts = (id: number): Promise<AxiosResponse<ITypePostsData>> =>
  axiosInstance.get(`/posts/user/${id}`);

export { getUsers, getUser, getUserPosts };
