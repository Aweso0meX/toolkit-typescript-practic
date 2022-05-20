import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IPost } from '../models/IPost'


export const PostAPI = createApi ({
  reducerPath : 'PostAPI' ,
  baseQuery : fetchBaseQuery ({ baseUrl : 'https://jsonplaceholder.typicode.com/' }) ,
  endpoints : (build) => ({
    fetchAllUsers : build.query<IPost[] , number> ({
      query : (limit = 5) => ({
        url : `/users` ,
        params : { _limit : limit }
      })
    })
  })
})