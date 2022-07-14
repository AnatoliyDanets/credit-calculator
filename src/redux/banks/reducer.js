import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  fetchBanks,
  getOneBank,
  addBank,
  editBank,
  deleteBank,
} from "./operations";
const banks = createReducer([], {
  [fetchBanks.fulfilled]: (_, { payload }) => payload,
  [addBank.fulfilled]: (state, { payload }) => [payload, ...state],
  [editBank.fulfilled]: (state, { payload }) =>
    state.map((bank) => (bank._id === payload._id ? payload : bank)),
  [deleteBank.fulfilled]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});
const bank = createReducer(
  {},
  {
    [getOneBank.fulfilled]: (_, { payload }) => payload,
  }
);
const isLoading = createReducer(false, {
  [fetchBanks.pending]: () => true,
  [fetchBanks.fulfilled]: () => false,
  [fetchBanks.rejected]: () => false,
  [getOneBank.pending]: () => true,
  [getOneBank.fulfilled]: () => false,
  [getOneBank.rejected]: () => false,
});

export default combineReducers({ banks, bank, isLoading });
