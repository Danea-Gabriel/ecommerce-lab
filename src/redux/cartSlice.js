import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.productData.find(product => product._id === action.payload._id);
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.productData = state.productData.filter(item => item._id !== action.payload._id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const allCartProducts = state => state.cart.productData;

export default cartSlice.reducer;
