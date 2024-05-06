import axios, { AxiosResponse } from "axios";
import IProductProps from "../models/IProductProps";

let axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: { "Content-Type": "application/json" },
});

const getProducts = (
  skip: number,
): Promise<AxiosResponse<{ products: IProductProps[] }>> =>
  axiosInstance.get(`/products?skip=${skip}&limit=20`);

export { getProducts };
