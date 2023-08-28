import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapiserver.reactbd.com/products";

const initialState = {
  state: "null",
  data: [],
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get(PRODUCTS_URL);
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      });
  },
});
export const getProductStatus = state => state.products.status;
export const selectAllProducts = state => state.products.data;

export default productsSlice.reducer;
