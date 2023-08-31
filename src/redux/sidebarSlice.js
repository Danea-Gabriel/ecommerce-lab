import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.isOpen = !state.isOpen;
    },
    toggleClose: state => {
      state.isOpen = false;
    },
  },
});

export const { toggleSidebar, toggleClose } = sidebarSlice.actions;
export const sideBarState = state => state.persisted.sidebar.isOpen;

export default sidebarSlice.reducer;
