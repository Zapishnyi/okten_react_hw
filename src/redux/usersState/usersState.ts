import IUser from "../../models/IUser";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonAPI from "../../services/json.api.servise";
import { AxiosError } from "axios";

interface IUsers {
  usersState: IUser[];
}

const initialState: IUsers = {
  usersState: [],
};

const loadUsers = createAsyncThunk("users/loadUsers", async (_, thunkAPI) => {
  try {
    const users = await jsonAPI.getUsers();
    return thunkAPI.fulfillWithValue(users);
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const usersSlice = createSlice({
  name: "usersState",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.usersState = action.payload;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        console.log(action.payload);
      }),
});

export const UsersActions = { ...usersSlice.actions, loadUsers };
