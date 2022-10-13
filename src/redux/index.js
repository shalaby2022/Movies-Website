import { configureStore } from "@reduxjs/toolkit";
import allSlice from "./HomeSlice";
import movieSlice from "./MovieDetailSlice";
import MoviesSlice from "./MoviesSlice";
import personsSlice from "./PeresonsSlice";
import personSlice from "./PersonDetailSlice";
import seriesDetailSlice from "./SeriesDetailSlice";
import SeriesSlice from "./SeriesSlice";



export const store = configureStore({
    reducer: {
        MoviesSlice: MoviesSlice,
        personsSlice: personsSlice,
        SeriesSlice: SeriesSlice,
        allSlice: allSlice,
        movieSlice: movieSlice,
        personSlice: personSlice,
        seriesDetailSlice: seriesDetailSlice,
    }
})