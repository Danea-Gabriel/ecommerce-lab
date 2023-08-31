import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ARTICLES_URL = `https://gnews.io/api/v4/search?q=fashion&lang=en&max=20&apikey=${
  import.meta.env.VITE_REACT_APP_GNEWS_API_KEY
}`;

const initialState = {
  state: "null",
  data: [],
};

export const fetchArticles = createAsyncThunk("articles/fetchArticles", async () => {
  const response = await axios.get(ARTICLES_URL);
  return response.data.articles;
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      });
  },
});
export const getArticleStatus = state => state.persisted.articles.status;
export const selectAllArticles = state => state.persisted.articles.data;

export default articlesSlice.reducer;
