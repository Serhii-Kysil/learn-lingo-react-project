import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "/firebaseConfig";
import { ref, get } from "firebase/database";

// Асинхронный экшен для получения данных
export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(database, "/");
      const snapshot = await get(dbRef);
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
    isFavLoading: false,
    favError: null,
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
