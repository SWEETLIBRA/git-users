import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface GithubState {
    favourites: string[]
}

const initialState: GithubState = {
    favourites: []
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavorite(state, payload: PayloadAction) {

        },
        removeFavorite(state, payload: PayloadAction) {

        },
    }
})