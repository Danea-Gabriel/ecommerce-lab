import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/productsSlice";
import cartReducer from "../redux/cartSlice";
import sidebarReducer from "../redux/sidebarSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    sidebar: sidebarReducer,
  },
});
