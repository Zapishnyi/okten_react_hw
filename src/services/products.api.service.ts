import axios, { AxiosResponse } from "axios";

let axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: { "Content-Type": "application/json" },
});

const getProducts = (skip: number): Promise<AxiosResponse<ITypeUsersData>> =>
  axiosInstance.get(`/products`);

export { getProducts };
