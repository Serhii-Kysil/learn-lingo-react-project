import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "/firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return {
        uid: user.uid,
        email: user.email,
        accessToken: user.accessToken,
      };
    } catch (error) {
      console.error("Error during registration:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        accessToken: user.accessToken,
      };
    } catch (error) {
      console.error("Error during login:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(rejectWithValue("No user logged in"));
        }
      });
    });
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
