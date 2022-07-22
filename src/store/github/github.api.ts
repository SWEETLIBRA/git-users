// import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IUser, ServerResponse } from '../../models/models'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        serchUsers: build.query<ServerResponse<IUser>, string>({
            query: (search: string) =>({
                url: `search/users`,
                params: {
                    q: search
                }
            })
        })
    })
})

export const {useSerchUsersQuery} = githubApi