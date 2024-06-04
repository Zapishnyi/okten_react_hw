import IUser from "../models/IUser";
import IComment from "../models/IComment";
import IPost from "../models/IPost";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type UsersBundleType = {
  allUsers: IUser[];
  allPosts: IPost[];
  allComments: IComment[];
  chosenUser: IUser | null;
  chosenPost: IPost | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setPost: Dispatch<SetStateAction<IPost | null>>;
};
const defaultValue: UsersBundleType = {
  allUsers: [],
  allPosts: [],
  allComments: [],
  chosenUser: null,
  chosenPost: null,
  setUser: () => {},
  setPost: () => {},
};

export const WholeContext = createContext<UsersBundleType>(defaultValue);
export const useContextData = () => useContext(WholeContext);
