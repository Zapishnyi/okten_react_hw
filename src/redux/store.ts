import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { UsersSlice } from "./UsersSlice/UsersSlice";
import { PostsSlice } from "./PostsSlice/PostsSlice";

export const store = configureStore({
  reducer: {
    UserBundle: UsersSlice.reducer,
    PostBundle: PostsSlice.reducer,
  },
});

export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
