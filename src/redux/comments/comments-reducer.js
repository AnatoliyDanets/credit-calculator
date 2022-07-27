import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addComment } from "./comments-operations";

const comments = createReducer("", {
  [addComment.fulfilled]: (_, { payload }) => payload,
});

export default combineReducers({ comments });
