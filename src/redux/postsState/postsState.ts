import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonAPI from "../../services/json.api.servise";
import { AxiosError } from "axios";
import IPost from "../../models/IPost";

interface IPosts {
  postsState: IPost[];
}

const initialState: IPosts = {
  postsState: [],
};

const loadPosts = createAsyncThunk("posts/loadPosts", async (_, thunkAPI) => {
  try {
    const posts = await jsonAPI.getPosts();
    return thunkAPI.fulfillWithValue(posts);
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

export const postsSlice = createSlice({
  name: "postsState",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.postsState = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        console.log(action.payload);
      }),
});

export const PostsActions = { ...postsSlice.actions, loadPosts };
