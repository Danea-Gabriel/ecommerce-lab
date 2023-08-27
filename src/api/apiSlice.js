import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapiserver.reactbd.com" }),
  tagTypes: ["Products"],
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
  }),
});
console.log(apiSlice);
export const { useGetProductsQuery } = apiSlice;
