import IUser from "../../models/IUser";
import IPost from "../../models/IPost";
import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
  PayloadAction,
} from "@reduxjs/toolkit";
import jsonAPI from "../../services/json.api.service";
import { AxiosError } from "axios";

interface ISliceBundle {
  users: IUser[];
  posts: IPost[];
  chosenUser: IUser | null;
  chosenPost: IPost | null;
  loadingState: boolean;
}

const initialState: ISliceBundle = {
  users: [],
  posts: [],
  chosenUser: null,
  chosenPost: null,
  loadingState: false,
};

const loadUsers = createAsyncThunk(
  "UsersPostsBundle/loadUsers",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(StoreActions.clearChosenUser());
    try {
      const users = await jsonAPI.getUsers;
      return thunkAPI.fulfillWithValue(users);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(StoreActions.changeLoadingState(false));
    }
  },
);

const loadPosts = createAsyncThunk(
  "UsersPostsBundle/loadPosts",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(StoreActions.clearChosenPost());
    try {
      const posts = await jsonAPI.getPosts;
      return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(StoreActions.changeLoadingState(false));
    }
  },
);

const setChosenUser = createAsyncThunk(
  "UsersPostsBundle/setChosenUser",
  async (userId: string, thunkAPI) => {
    try {
      const user = await jsonAPI.getChosenUser(userId);
      return thunkAPI.fulfillWithValue(user);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(StoreActions.changeLoadingState(false));
    }
  },
);

const setChosenPost = createAsyncThunk(
  "UsersPostsBundle/setChosenPost",
  async (postId: string, thunkAPI) => {
    try {
      const post = await jsonAPI.getChosenPost(postId);
      return thunkAPI.fulfillWithValue(post);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(StoreActions.changeLoadingState(false));
    }
  },
);

export const jsonSlice = createSlice({
  name: "UsersPostsBundle",
  initialState,
  reducers: {
    changeLoadingState: (
      state: ISliceBundle,
      action: PayloadAction<boolean>,
    ) => {
      state.loadingState = action.payload;
    },
    clearChosenUser: (state: ISliceBundle) => {
      state.chosenUser = null;
    },
    clearChosenPost: (state: ISliceBundle) => {
      state.chosenPost = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(setChosenUser.fulfilled, (state, action) => {
        state.chosenUser = action.payload;
      })
      .addCase(setChosenPost.fulfilled, (state, action) => {
        state.chosenPost = action.payload;
      })
      .addMatcher(
        isPending(loadUsers, loadPosts, setChosenUser, setChosenPost),
        (state, action) => {
          state.loadingState = true;
        },
      )
      .addMatcher(
        isRejected(loadPosts, loadUsers, setChosenUser, setChosenPost),
        (state, action) => {
          console.log(action.payload);
        },
      ),
});

export const StoreActions = {
  ...jsonSlice.actions,
  loadUsers,
  loadPosts,
  setChosenUser,
  setChosenPost,
};
