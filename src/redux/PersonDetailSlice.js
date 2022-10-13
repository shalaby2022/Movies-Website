import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchPersonDetail = createAsyncThunk("person/fetchPersonDetail", (id) => {
    return axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=f70925f38942b21e7363bd744f4fc321&language=en-US`)
        .then(({ data }) => {return{...data, count: 1}})
        // .catch(err => console.log(err.message))
})

const initialState = {
    personIsLoading: false,
    person: {},
    personErr: ""
}

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPersonDetail.pending]: (state, action) => {
            state.personIsLoading = true;
        },
        [fetchPersonDetail.fulfilled]: (state, action) => {
            state.personIsLoading = false;
            state.person = action.payload
        },
        [fetchPersonDetail.rejected]: (state, action) => {
            state.personIsLoading = false;
            state.personErr = "Request failed with status code 401"
        }
    }
})

export default personSlice.reducer