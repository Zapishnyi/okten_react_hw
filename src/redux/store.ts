import { configureStore } from "@reduxjs/toolkit";
import { jsonSlice } from "./sliceBundle/sliceBundle";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    StoreManipulate: jsonSlice.reducer,
  },
});

export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
