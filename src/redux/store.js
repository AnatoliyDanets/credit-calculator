import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import bankReducer from './banks/reducer'
import userReducer from './auth/auth-reducer'
// import logger from "redux-logger";

const banksPersistConfig = {
  key: "banks",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(authPersistConfig, userReducer),
    banks: persistReducer(banksPersistConfig, bankReducer),

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);