import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: state => {
      state.userInfo = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const userState = state => state.persisted.user.userInfo;

export default userSlice.reducer;
