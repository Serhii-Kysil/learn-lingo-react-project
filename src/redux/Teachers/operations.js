import { createAsyncThunk } from "@reduxjs/toolkit";

import { database } from "/firebaseConfig";
import { ref, get, query, limitToFirst } from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(database, "/");
      const limitedQuery = query(dbRef, limitToFirst(4));
      const snapshot = await get(limitedQuery);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return rejectWithValue("No data available");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
