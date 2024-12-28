import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '08b7e78688msh8f7ce6a290be728p14d9dejsn3e54a4e6dc03',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      
}

const baseUrl='https://bing-news-search1.p.rapidapi.com'
const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi= createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
                query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
       })
     } )
    
})

export const {useGetCryptoNewsQuery}=cryptoNewsApi