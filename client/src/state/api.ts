import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
    }),
    tagTypes: [],
    endpoints:(build)=>({}),
});
export const{}=api;