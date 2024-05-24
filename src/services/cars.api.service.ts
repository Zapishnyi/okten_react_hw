import axios, { AxiosResponse } from "axios";
import { carsURLs } from "../constants/carsURLs";
import { IPaginInfo } from "../models/IPaginInfo";
import { IAuthProps } from "../models/IAuthProps";
import { stringify } from "node:querystring";
import { ICreatedProps } from "../models/ICreatedProps";

const axiosInstance = axios.create({
  baseURL: carsURLs.base,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

interface ICarsApi {
  getCars?: () => Promise<AxiosResponse<IPaginInfo>>;
  register: (props: IAuthProps) => Promise<AxiosResponse<ICreatedProps>>;
}

export const carsApi: ICarsApi = {
  getCars: () => axiosInstance.get(carsURLs.allCars),
  register: (props) => axiosInstance.post(carsURLs.users, { ...props }),
};
