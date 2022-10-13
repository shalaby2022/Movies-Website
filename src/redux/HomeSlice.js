import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const baseURL = `https://api.themoviedb.org/3/trending/all/week?api_key=f70925f38942b21e7363bd744f4fc321`

export const fetchAll = createAsyncThunk("all/fetchAll", () => {
    return axios.get(baseURL)
        .then(({ data }) => data)
        .then(({ results }) => {
            return results = results.map(item => {
                return { ...item, count: 1 }
            })
        })
        // .catch(err => console.log(err.message))
})

const initialState = {
    allIsLoading: false,
    all: [],
    allErr: ""
}

export const allSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        searchAction: (state, action) => {
            console.log(state.all)
        }
    },
    extraReducers: {
        [fetchAll.pending]: (state, action) => {
            state.allIsLoading = true;
        },
        [fetchAll.fulfilled]: (state, action) => {
            state.allIsLoading = false;
            state.all = action.payload
        },
        [fetchAll.rejected]: (state, action) => {
            state.allIsLoading = false;
            state.allErr = "Request failed with status code 401"
        }
    }
})

export const { searchAction } = allSlice.actions
export default allSlice.reducer