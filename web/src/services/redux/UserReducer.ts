import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { iUserAuthorization, iUser } from "../../../../type";

// Define the initial state using its data type
const initialState: Partial<iUserAuthorization> = {
  isLoggedIn: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    actionLogin: (
      state: Draft<any>,
      action: PayloadAction<iUser>
    ): Draft<any> => {
      return (state = action.payload);
    },
    actionLogout: (state: Draft<any>): Draft<any> => {
      return (state = {
        userId: undefined,
        username: undefined,
        firstName: undefined,
        lastName: undefined,
        status: undefined,
        isLoggedIn: false,
      });
    },
  },
});

export const { actionLogin, actionLogout } = userReducer.actions;
export const user = (state: RootState) => state;

export default userReducer.reducer;
