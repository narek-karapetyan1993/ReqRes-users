import { RootState } from "app/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthData, IAuthState, meDataInit, tokenInit } from "./authModels";
import { userLogout, userRegister } from "./authThunk";

const initialState: IAuthState = {
  meData: meDataInit,
  token: tokenInit,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMeData: (state, action: PayloadAction<IAuthData>) => {
      state.meData = action.payload;
    },

    deleteAuth: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.token = payload;
        localStorage.setItem("meToken", JSON.stringify(payload));
        state.status = "succeeded";
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "failed";
      });

    builder
      .addCase(userLogout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogout.fulfilled, (state) => {
        state = initialState;
      })
      .addCase(userLogout.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setMeData, deleteAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
