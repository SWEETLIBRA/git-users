// import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        serchUsers: build.query({
            query: () =>({
                url: `search/users`
            })
        })
    })
})