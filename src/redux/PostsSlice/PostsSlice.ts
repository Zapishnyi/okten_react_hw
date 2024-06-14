import IPost from "../../models/IPost";
import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import postsAPI from "../../services/posts.api.service";

interface IPostBundle {
  posts: IPost[];
  chosenPost: IPost | null;
  postLoadingState: boolean;
}

const initialState: IPostBundle = {
  posts: [],
  chosenPost: null,
  postLoadingState: false,
};

const loadPosts = createAsyncThunk(
  "PostsBundle/loadPosts",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(PostsActions.clearChosenPost());
    try {
      const posts = await postsAPI.getPosts;
      return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(PostsActions.loadingStateToFalse());
    }
  },
);

const setChosenPost = createAsyncThunk(
  "PostsBundle/setChosenPost",
  async (postId: string, thunkAPI) => {
    try {
      const post = await postsAPI.getChosenPost(postId);
      return thunkAPI.fulfillWithValue(post);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(PostsActions.loadingStateToFalse());
    }
  },
);

export const PostsSlice = createSlice({
  name: "PostsBundle",
  initialState,
  reducers: {
    clearChosenPost: (state: IPostBundle) => {
      state.chosenPost = null;
    },
    loadingStateToFalse: (state: IPostBundle) => {
      state.postLoadingState = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      .addCase(setChosenPost.fulfilled, (state, action) => {
        state.chosenPost = action.payload;
      })
      .addMatcher(isPending(loadPosts, setChosenPost), (state) => {
        state.postLoadingState = true;
      })
      .addMatcher(isRejected(loadPosts, setChosenPost), (state, action) => {
        console.log(action.payload);
      }),
});

export const PostsActions = {
  ...PostsSlice.actions,
  loadPosts,
  setChosenPost,
};
