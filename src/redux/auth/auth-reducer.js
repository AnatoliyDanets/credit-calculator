import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addUser,
  loginUser,
  logOut,
  fetchCurrentUser,
  changeAvatar,
} from "./auth-operations";

const initialUserState = {
  name: null,
  email: null,
};

const users = createReducer(initialUserState, {
  [addUser.fulfilled]: (_, { payload }) => payload.user,
  [loginUser.fulfilled]: (_, { payload }) => payload,
  [changeAvatar.fulfilled]: (state, { payload }) => ({
    ...state,
    ...{ avatar: payload },
  }),

  [logOut.fulfilled]: () => initialUserState,
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [addUser.fulfilled]: (_, { payload }) => payload.token,
  [loginUser.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
});

const isAuth = createReducer(false, {
  [addUser.fulfilled]: () => false,
  [loginUser.fulfilled]: () => true,
  [changeAvatar.fulfilled]: () => true,
  [logOut.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
});

const isAuthRefresh = createReducer(false, {
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});

export default combineReducers({ users, isAuth, isAuthRefresh, token });
