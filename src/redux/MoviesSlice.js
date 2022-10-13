import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const baseURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=f70925f38942b21e7363bd744f4fc321`

export const fetchMovies = createAsyncThunk("movies/fetchMovies", () => {
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
    moviesIsLoading: false,
    movies: [],
    moviesErr: "",
    fav: []
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addCard: (state, action) => {
            let favs = state.fav
            let ind = favs.findIndex(item => item.id === action.payload.id)
            if(ind === -1) {
                state.fav.push(action.payload)
            } else {
                // console.log([ind]);
                state.fav[ind].count++
            }
        },
        incCounter: (state, action) => {
            let ind = state.fav.findIndex(item => item.id === action.payload.id)
            // console.log(ind)
            state.fav[ind].count++
        },
        decCounter: (state, action) => {
            let ind = state.fav.findIndex(item => item.id === action.payload.id)
            // console.log(ind)
            if(state.fav[ind].count > 1) {
                state.fav[ind].count--
            } else {
                state.fav = state.fav.filter(item => item.id !== action.payload.id)
            }
        },
        removeItem : (state, action) => {
            state.fav = state.fav.filter(item => item.id !== action.payload.id)
        }
    },
    extraReducers: {
        [fetchMovies.pending]: (state, action) => {
            state.moviesIsLoading = true;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.moviesIsLoading = false;
            state.movies = action.payload
        },
        [fetchMovies.rejected]: (state, action) => {
            state.moviesIsLoading = false;
            state.moviesErr = "Request failed with status code 401"
        }
    }
})

export const { addCard, incCounter, decCounter, removeItem } = moviesSlice.actions
export default moviesSlice.reducer