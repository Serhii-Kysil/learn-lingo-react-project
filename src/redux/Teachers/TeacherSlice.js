import { createSlice } from "@reduxjs/toolkit";

import { fetchTeachers } from "./operations";

const handleItemsPending = (state) => {
  state.isItemsLoading = true;
};

const handleItemsRejected = (state, action) => {
  state.isItemsLoading = false;
  state.itemsError = action.payload;
};

const teacherSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    isItemsLoading: false,
    itemsError: null,
    favorite: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (teacher) => teacher._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, handleItemsPending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isItemsLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, handleItemsRejected);
  },
});

export const { addFavorite, removeFavorite } = teacherSlice.actions;
const teacherReducer = teacherSlice.reducer;
export default teacherReducer;
