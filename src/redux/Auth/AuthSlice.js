import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  extraReducers: (builder) => {
    builder;
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
