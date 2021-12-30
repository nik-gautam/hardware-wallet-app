import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { keys } from "../keys";

export const etherscanApi = createApi({
  reducerPath: "etherscan",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-rinkeby.etherscan.io/api",
    prepareHeaders: async (headers) => {
      headers.set("Content-Type", "application/x-www-form-urlencoded");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: ({ address, offset }) =>
        `?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=${offset}&sort=desc&apikey=${keys.ETHERSCAN_API_KEY}`,

      transformResponse: (rawResult, meta) => {
        return rawResult.result;
      },
    }),
    getGasPrice: builder.query({
      query: () =>
        `?module=gastracker&action=gasoracle&apikey=${keys.ETHERSCAN_API_KEY}`,

      transformResponse: (rawResult, meta) => {
        return rawResult.result;
      },
    }),
  }),
});

// console.log(etherscanApi);

export const { useGetTransactionsQuery, useGetGasPriceQuery } = etherscanApi;
