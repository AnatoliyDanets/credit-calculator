import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://creds-application.herokuapp.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const addUser = createAsyncThunk(
  "auth/addUser",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/signup", obj);
      if (data) {
        toast.success("Go to your email and confirm registration");

        return data;
      }
    } catch (err) {
      if (err.response.status === 409) {
        return rejectWithValue(toast.error("User already exist"));
      }
      if (err.response.status === 400) {
        return rejectWithValue(toast.error("Incorrect data"));
      }
      if (err.response.status === 500) {
        return toast.error("Please try again later");
      }
      return rejectWithValue(toast.error("Please try again later"));
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", obj);
      token.set(data.token);
      return { ...data.user, token: data.token };
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(toast.error("Email or password is incorrect"));
      }
      if (err.response.status === 500) {
        return rejectWithValue(toast.error("Confirm your email or try again"));
      }
      return rejectWithValue(err.response.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get("/users/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  "users/changeAvatar",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch("/users/avatars", obj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data.avatarURL;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(toast.error("Format only JPG or JPEG"));
      }
      return rejectWithValue(err.response.message);
    }
  
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "users/refresh",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.users.token;
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data.user;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(toast.error("Unauthorized"));
      }
      return rejectWithValue(err.response.message);
    }
  }
);
