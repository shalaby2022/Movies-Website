import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScreenComponent from '../components/ScreenComponent'
import { fetchMovies, addCard } from '../redux/MoviesSlice'

const MoviesScreen = () => {
    const { movies, moviesErr, moviesIsLoading } = useSelector(state => state.MoviesSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return (
        <>
            <ScreenComponent data={movies} loader={moviesIsLoading} err={moviesErr} linkInfo={"movies"} addCard={addCard}/>
        </>
    )
}

export default MoviesScreen