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

const teacherPersistConfig = {
  key: "teacher",
  storage,
  whitelist: ["favorite"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(teacherPersistConfig, teacherReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
