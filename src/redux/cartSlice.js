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
    incrementQuantityCart: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantityCart: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload._id);
      if (item === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeEverythingFromCart: state => {
      state.productData = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantityCart, decrementQuantityCart, removeEverythingFromCart } =
  cartSlice.actions;
export const allCartProducts = state => state.cart.productData;
export const totalCartPrice = state => {
  let total = 0;
  state.cart.productData.forEach(product => {
    total += product.price * product.quantity;
  });
  return total;
};

export default cartSlice.reducer;
