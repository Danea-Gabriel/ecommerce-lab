import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sidebarReducer from "./sidebarSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({ cart: cartReducer, sidebar: sidebarReducer, user: userReducer });
export default rootReducer;
