import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IPostProps } from "../models/IPostProps";
import { IPostResponse } from "../models/IPostResponse";

let axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

const postUserPost = (
  props: IPostProps,
): Promise<AxiosResponse<IPostResponse>> =>
  axiosInstance.post("/posts", { ...props });

export { postUserPost };
