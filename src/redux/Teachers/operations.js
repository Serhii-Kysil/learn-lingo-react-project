import { createAsyncThunk } from "@reduxjs/toolkit";

import { database } from "/firebaseConfig";
import { ref, get, query, limitToFirst, startAfter } from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async ({ page, lastKey }, { rejectWithValue }) => {
    try {
      const dbRef = ref(database, "/");
      let teachersQuery;

      teachersQuery = query(dbRef, limitToFirst(4 * page));

      const snapshot = await get(teachersQuery);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lastKey = Object.keys(data)[Object.keys(data).length - 1];
        return { data, lastKey };
      } else {
        return rejectWithValue("No data available");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
