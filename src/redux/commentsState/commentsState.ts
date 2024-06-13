import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonAPI from "../../services/json.api.servise";
import { AxiosError } from "axios";
import IComment from "../../models/IComment";

interface IComments {
  commentsState: IComment[];
}

const initialState: IComments = {
  commentsState: [],
};

const loadComments = createAsyncThunk(
  "comment/loadComments",
  async (_, thunkAPI) => {
    try {
      const comments = await jsonAPI.getComments();
      return thunkAPI.fulfillWithValue(comments);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

export const commentsSlice = createSlice({
  name: "commentsState",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadComments.fulfilled, (state, action) => {
        state.commentsState = action.payload;
      })
      .addCase(loadComments.rejected, (state, action) => {
        console.log(action.payload);
      }),
});

export const CommentsActions = { ...commentsSlice.actions, loadComments };
