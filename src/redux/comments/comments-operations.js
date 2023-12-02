import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://credit-calculator-backend.vercel.app/api";
// axios.defaults.baseURL = "http://localhost:3001/api"   https://credit-calculator-backend.vercel.app 

export const addComment = createAsyncThunk(
  "add/addComment",
  async (text, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/comments", text);
      if (data) {
        toast.success('Thanks for your feedback')
      }
      return data;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(toast.error("Incorrect data"));
      }
      return rejectWithValue(err.response.message);
    }
  }
);
