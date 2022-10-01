import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { keys } from "../keys";

// export const currencyApi = createApi({
//   reducerPath: "currency",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://free.currconv.com/api/v7",
//   }),
//   endpoints: (builder) => ({
//     getUSDtoINR: builder.query({
//       query: () => `convert?q=USD_INR&compact=ultra&apiKey=${keys.FCC_API_KEY}`,
//     }),
//   }),
// });

export const currencyApi = createApi({
    reducerPath: "currency",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.exchangerate.host/latest",
    }),
    endpoints: (builder) => ({
        getUSDtoINR: builder.query({
            query: () => `?base=USD&symbols=INR`,
        }),
    }),
});

export const { useGetUSDtoINRQuery } = currencyApi;