import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./usersState/usersState";
import { postsSlice } from "./postsState/postsState";
import { useDispatch, useSelector } from "react-redux";
import { commentsSlice } from "./commentsState/commentsState";
import { chosenUserState } from "./chosenUser/chosenUserState";
import { chosenPostState } from "./chosenPost/chousenPostState";

export const store = configureStore({
  reducer: {
    Users: usersSlice.reducer,
    Posts: postsSlice.reducer,
    Comments: commentsSlice.reducer,
    ChosenUser: chosenUserState.reducer,
    ChosenPost: chosenPostState.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

type RootDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<RootDispatch>();
