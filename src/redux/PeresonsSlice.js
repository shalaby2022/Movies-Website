import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = `https://api.themoviedb.org/3/trending/person/week?api_key=f70925f38942b21e7363bd744f4fc321`

export const fetchPersons = createAsyncThunk("",() => {
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
    perosonsIsLoading: false,
    persons: [],
    personsErr: ""
}

export const personsSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPersons.pending]: (state, action) => {
            state.perosonsIsLoading = true
        },
        [fetchPersons.fulfilled]: (state, action) => {
            state.perosonsIsLoading = false;
            state.persons = action.payload
        },
        [fetchPersons.pending]: (state, action) => {
            state.perosonsIsLoading = false;
            state.moviesErr = "Request failed with status code 401"
        }
    }
})


export default personsSlice.reducer