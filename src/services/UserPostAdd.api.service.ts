import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IPostProps } from "../models/IPostProps";

let axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json" },
});

const postUserPost = (props: IPostProps) =>
  axiosInstance.post("/post", {
    title: props.title,
    body: props.body,
    userId: props.userId,
  });

export { postUserPost };
