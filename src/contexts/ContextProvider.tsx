import IUser from "../models/IUser";
import IComment from "../models/IComment";
import IPost from "../models/IPost";
import { createContext, Dispatch, SetStateAction, useContext } from "react";
import IContextBundle from "../models/IContextBundle";

const defaultValue: IContextBundle = {
  allUsers: [],
  allPosts: [],
  allComments: [],
  chosenUser: null,
  chosenPost: null,
  setUser: () => {},
  setPost: () => {},
};

export const WholeContext = createContext<IContextBundle>(defaultValue);
export const useContextData = () => useContext(WholeContext);
