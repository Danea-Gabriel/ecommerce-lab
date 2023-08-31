import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sidebarReducer from "./sidebarSlice";
import userReducer from "./userSlice";
import articlesReducer from "./articlesSlice";

const rootReducer = combineReducers({
  articles: articlesReducer,
  cart: cartReducer,
  sidebar: sidebarReducer,
  user: userReducer,
});
export default rootReducer;
