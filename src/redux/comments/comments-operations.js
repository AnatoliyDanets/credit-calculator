import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://creds-application.herokuapp.com/api";

export const addComment = createAsyncThunk(
  "add/addComment",
  async (text, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/comments", text);
      if(data){
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
