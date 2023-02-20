import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteUsers } from "features/users/usersSlice";
import { IAuthData } from "./authModels";
import { deleteAuth } from "./authSlice";

export const userRegister = createAsyncThunk<any, IAuthData>(
  "auth/userRegister",
  async ({ email, password }: IAuthData, { rejectWithValue }) => {
    const response = await axios.post(
      "https://reqres.in/api/register",
      {
        email,
        password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data;
  }
);

export const userLogout = createAsyncThunk(
  "auth/userLogout",
  async (_, { rejectWithValue, dispatch }) => {
    await axios.post("https://reqres.in/api/logout", {
      headers: { accept: "*/*" },
    });

    dispatch(deleteAuth);
    dispatch(deleteUsers);
  }
);
