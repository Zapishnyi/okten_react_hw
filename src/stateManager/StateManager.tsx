import IStoreBundle from "../models/IStoreBundle";
import { create } from "zustand";

export const dataStore = create<IStoreBundle>()((set) => {
  return {
    allUsers: [],
    setAllUsers: (allUsers) =>
      set((state: IStoreBundle) => ({
        ...state,
        allUsers: allUsers,
      })),
    allPosts: [],
    setAllPosts: (allPosts) =>
      set((state: IStoreBundle) => ({
        ...state,
        allPosts: allPosts,
      })),
    allComments: [],
    setAllComments: (allComments) =>
      set((state: IStoreBundle) => ({
        ...state,
        allComments: allComments,
      })),
    chosenUser: null,
    setChosenUser: (chosenUser) =>
      set((state: IStoreBundle) => ({
        ...state,
        chosenUser: chosenUser,
      })),
    chosenPost: null,
    setChosenPost: (chosenPost) =>
      set((state: IStoreBundle) => ({
        ...state,
        chosenPost: chosenPost,
      })),
  };
});
