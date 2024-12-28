// import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const cryptoApiHeaders={
//     'X-RapidAPI-Key': '08b7e78688msh8f7ce6a290be728p14d9dejsn3e54a4e6dc03',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
           
// }
// const baseUrl='https://coinranking1.p.rapidapi.com'
// const paramet= {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'}
// const createRequest=(url)=>({url,headers:cryptoApiHeaders,paramet})
// // const createParams=(url,param)=>({url,headers:cryptoApiHeaders,param})
// export const cryptoApi=createApi({
//     reducerPath:'cryptoApi',
//     baseQuery:fetchBaseQuery({baseUrl}),
//     endpoints:(builder)=>({
//         getCryptos:builder.query({
//             query:(count)=>createRequest(`/coins?limit=${count}`)
//         }),
//         getCryptoDetails:builder.query({
//             query: (coinId)=>createRequest(`/coin/${coinId}`)
//         }),
//         getCryptoHistory:builder.query({
//             query: ({coinId,timePeriod})=>createRequest( `coin/${coinId}/history`)
//         })
//     })
// })
// export const {
//     useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
// }=cryptoApi



// var axios = require('axios').default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '65df9cddd1msh1b632c179c457f1p17ea53jsn09d7b2ec7a00',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log('crypto api: ', process.env.REACT_APP_CRYPTO_API_URL);

const cryptoApiHeaders={
        'X-RapidAPI-Key': '08b7e78688msh8f7ce6a290be728p14d9dejsn3e54a4e6dc03',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
               
    }
    const paramet= {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'}
// const baseUrl = process.env.REACT_APP_API_BASE_URL;
const baseUrl='https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
    getExchanges:builder.query({
      query:()=>createRequest('/Qwsogvtv82FCd/exchanges')
    })
  }),
});

export const {
  useGetCryptosQuery,
  useGetExchangesQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useLazyGetExchangesQuery
} = cryptoApi;