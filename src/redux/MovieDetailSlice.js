import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchMovieDetail = createAsyncThunk("movie/fetchMovieDetail", (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f70925f38942b21e7363bd744f4fc321&language=en-US`)
        .then(({ data }) => {return{...data, count: 1}})
        // .catch(err => console.log(err.message))
})

const initialState = {
    movieIsLoading: false,
    movie: {},
    movieErr: ""
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovieDetail.pending]: (state, action) => {
            state.movieIsLoading = true;
        },
        [fetchMovieDetail.fulfilled]: (state, action) => {
            state.movieIsLoading = false;
            state.movie = action.payload
        },
        [fetchMovieDetail.rejected]: (state, action) => {
            state.movieIsLoading = false;
            state.movieErr = "Request failed with status code 401"
        }
    }
})

export default movieSlice.reducer