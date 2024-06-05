import { createContext, useContext } from "react";
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
