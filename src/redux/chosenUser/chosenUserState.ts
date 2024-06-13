import IUser from "../../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IChosenUser {
  chosenUser: IUser | null;
}

const initialState: IChosenUser = {
  chosenUser: null,
};

export const chosenUserState = createSlice({
  name: "chosenUserState",
  initialState,
  reducers: {
    setChosenUser: (state, action: PayloadAction<IUser | null>) => {
      state.chosenUser = action.payload;
    },
  },
});

export const { setChosenUser } = chosenUserState.actions;
