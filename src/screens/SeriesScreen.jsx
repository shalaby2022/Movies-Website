import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScreenComponent from '../components/ScreenComponent'
import { fetchSeries } from '../redux/SeriesSlice'
import { addCard } from '../redux/MoviesSlice'

const SeriesScreen = () => {
    const { series, seriesErr, seiresIsLoading } = useSelector(state => state.SeriesSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSeries())
    }, [dispatch])

    return (
        <>
            <ScreenComponent data={series} loader={seiresIsLoading} err={seriesErr} linkInfo={"series"} addCard={addCard}/>
        </>
    )
}

export default SeriesScreen