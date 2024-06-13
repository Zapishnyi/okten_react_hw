import IUser from "../../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPost from "../../models/IPost";

interface IChosenPost {
  chosenPost: IPost | null;
}

const initialState: IChosenPost = {
  chosenPost: null,
};

export const chosenPostState = createSlice({
  name: "chosenPostState",
  initialState,
  reducers: {
    setChosenPost: (state, action: PayloadAction<IPost | null>) => {
      state.chosenPost = action.payload;
    },
  },
});

export const { setChosenPost } = chosenPostState.actions;
