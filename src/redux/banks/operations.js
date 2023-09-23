import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "https://credit-calculator-backend.railway.internal/api";

export const fetchBanks = createAsyncThunk(
  "banks/fetchBanks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/banks");
      const result = data.sort((a, b) => b.date - a.date);
      return result;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          toast.error("Please re-login and try again later")
        );
      }
      if (err.response.status === 500) {
        return toast.error("Please try again later");
      }
      return rejectWithValue(toast.error("Please try again later"));
    }
  }
);

export const getOneBank = createAsyncThunk("banks/oneBank", async (bankId) => {
  const { data } = await axios.get(`/banks/${bankId}`);
  return data;
});
export const addBank = createAsyncThunk(
  "banks/addBank",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/banks", obj);
      return data;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(toast.error("Incorrect data"));
      }
      if (err.response.status === 401) {
        return rejectWithValue(
          toast.error("Please re-login and try again later")
        );
      }
      if (err.response.status === 500) {
        return toast.error("Please try again later");
      }
      return rejectWithValue(toast.error("Please try again later"));
    }
  }
);

export const editBank = createAsyncThunk(
  "banks/editBank",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/banks/${obj.id}`, obj.bank);
      return data;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(toast.error("Incorrect data"));
      }
      if (err.response.status === 401) {
        return rejectWithValue(
          toast.error("Please re-login and try again later")
        );
      }
      if (err.response.status === 500) {
        return toast.error("Please try again later");
      }
      return rejectWithValue(toast.error("Please try again later"));
    }
  }
);

export const deleteBank = createAsyncThunk(
  "banks/deleteBank",
  async (contactId) => {
    await axios.delete(`/banks/${contactId}`);
    return contactId;
  }
);
