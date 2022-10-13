import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchSeriesDetail = createAsyncThunk("seriesDetail/fetchSeriesDetail", (id) => {
    return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f70925f38942b21e7363bd744f4fc321&language=en-US`)
        .then(({ data }) => {return{...data, count: 1}})
        // .catch(err => console.log(err.message))
})

const initialState = {
    serIsLoading: false,
    ser: {},
    serErr: ""
}

export const seriesDetailSlice = createSlice({
    name: 'seriesDetail',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSeriesDetail.pending]: (state, action) => {
            state.serIsLoading = true;
        },
        [fetchSeriesDetail.fulfilled]: (state, action) => {
            state.serIsLoading = false;
            state.ser = action.payload
        },
        [fetchSeriesDetail.rejected]: (state, action) => {
            state.serIsLoading = false;
            state.serErr = "Request failed with status code 401"
        }
    }
})

export default seriesDetailSlice.reducer