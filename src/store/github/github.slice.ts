import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const LS_FAV_KEY = "fav-key"

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
        addFavorite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavorite(state, action: PayloadAction<string>) {

        },
    }
})