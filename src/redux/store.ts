import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counter } from "./slice1/slice1";

export const store = configureStore({
  reducer: {
    slice1: counter.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

type RootDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<RootDispatch>();
