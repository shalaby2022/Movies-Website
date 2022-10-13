import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailComponents from '../components/DetailComponents'
import { fetchMovieDetail } from '../redux/MovieDetailSlice'

const MovieDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { movie, movieErr, movieIsLoading } = useSelector(state => state.movieSlice)

  useEffect(() => {
    dispatch(fetchMovieDetail(id))
  }, [dispatch, id])

  return (
    <>
      <DetailComponents data={movie} dataErr={movieErr} dataLoader={movieIsLoading} />
    </>
  )
}

export default MovieDetail