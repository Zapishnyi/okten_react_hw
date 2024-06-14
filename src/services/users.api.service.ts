import axios from "axios";
import { urls } from "../constants/urls";
import IUser from "../models/IUser";

const axiosInstance = axios.create({
  baseURL: urls.base,
  headers: { "Content-Type": "application/json" },
});

interface IUserAPI {
  getUsers: Promise<IUser[]>;
  getChosenUser: (userId: string) => Promise<IUser>;
}

const usersAPI: IUserAPI = {
  getUsers: axiosInstance.get(urls.users).then((res) => res.data),
  getChosenUser: (userId) =>
    axiosInstance.get(urls.chosenUser(userId)).then((res) => res.data),
};

export default usersAPI;
