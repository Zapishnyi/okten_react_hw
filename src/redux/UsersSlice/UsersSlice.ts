import IUser from "../../models/IUser";
import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import usersAPI from "../../services/users.api.service";

interface IUserBundle {
  users: IUser[];
  chosenUser: IUser | null;
  userLoadingState: boolean;
}

const initialState: IUserBundle = {
  users: [],
  chosenUser: null,
  userLoadingState: false,
};

const loadUsers = createAsyncThunk(
  "UsersBundle/loadUsers",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(UsersActions.clearChosenUser());
    try {
      const users = await usersAPI.getUsers;
      return thunkAPI.fulfillWithValue(users);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(UsersActions.loadingStateToFalse());
    }
  },
);

const setChosenUser = createAsyncThunk(
  "UsersBundle/setChosenUser",
  async (userId: string, thunkAPI) => {
    try {
      const user = await usersAPI.getChosenUser(userId);
      return thunkAPI.fulfillWithValue(user);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(UsersActions.loadingStateToFalse());
    }
  },
);

export const UsersSlice = createSlice({
  name: "UsersBundle",
  initialState,
  reducers: {
    clearChosenUser: (state: IUserBundle) => {
      state.chosenUser = null;
    },
    loadingStateToFalse: (state: IUserBundle) => {
      state.userLoadingState = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(setChosenUser.fulfilled, (state, action) => {
        state.chosenUser = action.payload;
      })
      .addMatcher(isPending(loadUsers, setChosenUser), (state) => {
        state.userLoadingState = true;
      })
      .addMatcher(isRejected(loadUsers, setChosenUser), (state, action) => {
        console.log(action.payload);
      }),
});

export const UsersActions = {
  ...UsersSlice.actions,
  loadUsers,
  setChosenUser,
};
