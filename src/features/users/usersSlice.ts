import { RootState } from "app/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUsersData, IUsersState, usersInitState } from "./userModels";

import { getUsers } from "./usersThunk";

const initialState: IUsersState = {
  users: usersInitState,
  status: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    like: (state, action: PayloadAction<number>) => {
      const user = state.users.data.find(
        (element) => element.id === action.payload
      );
      if (!user) return;
      user.liked = !user.liked;
      localStorage.setItem("usersData", JSON.stringify(state.users));
    },

    deleteUsers: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users.data = state.users.data.concat(payload.data);
        state.users.page = payload.page;
        state.users.per_page = payload.per_page;
        state.users.support = payload.support;
        state.users.total = payload.total;
        state.users.total_pages = payload.total_pages;

        localStorage.setItem("usersData", JSON.stringify(state.users));

        state.users.data.forEach((user: IUser) => {
          if (
            localStorage.getItem("usersData") !== undefined &&
            localStorage.getItem("usersData") !== null
          ) {
            const localUsers: IUsersData = JSON.parse(localStorage?.usersData);
            const localUser = localUsers.data.find(
              (element) => element.id === user.id
            );
            user.liked = localUser?.liked;
          }
        });
        state.status = "succeeded";
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { like, deleteUsers } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
