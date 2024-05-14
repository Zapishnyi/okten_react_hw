import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IPostProps } from "../models/IPostProps";

let axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

const postUserPost = (props: IPostProps) => {
  console.log("JSON", JSON.stringify(props));
  return axiosInstance.post(
    "/posts",
    { userId: "2343", title: "wwerwer", body: "fsfdfdsfsdf" },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  );
};

const getPosts = () => {
  return axiosInstance.get("/posts");
};
export { postUserPost, getPosts };
