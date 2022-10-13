import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = `https://api.themoviedb.org/3/trending/tv/week?api_key=f70925f38942b21e7363bd744f4fc321`

export const fetchSeries = createAsyncThunk("",() => {
    return  axios.get(baseURL)
            .then(({data}) => data)
            .then(({results}) => {
                return results = results.map(item => {
                    return {...item, count: 1 }
                })
            })
            // .catch(err => console.log(err.message))
})


const initialState = {
    seiresIsLoading: false,
    series: [],
    seriesErr: ""
}

export const seriesSlice = createSlice({
    name: "series",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSeries.pending]: (state, action) => {
            state.seiresIsLoading = true
        },
        [fetchSeries.fulfilled]: (state, action) => {
            state.seiresIsLoading = false;
            state.series = action.payload
        },
        [fetchSeries.pending]: (state, action) => {
            state.seiresIsLoading = false;
            state.seriesErr = "Request failed with status code 401"
        }
    }
})

export default seriesSlice.reducer