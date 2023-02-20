import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk<any, number>(
  "users/getUsers",
  async (page, { rejectWithValue }) => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=8`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return response.data;
  }
);
