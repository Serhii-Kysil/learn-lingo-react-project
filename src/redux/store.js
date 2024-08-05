import { configureStore } from "@reduxjs/toolkit";
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

import storage from "redux-persist/lib/storage";

import teacherReducer from "./Teachers/TeacherSlice";
import authReducer from "./Auth/AuthSlice";

const teacherPersistConfig = {
  key: "teacher",
  storage,
  whitelist: ["favorite"],
};

export const store = configureStore({
  reducer: {
    teachers: persistReducer(teacherPersistConfig, teacherReducer),
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
