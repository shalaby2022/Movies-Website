import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailComponents from '../components/DetailComponents'
import { fetchSeriesDetail } from '../redux/SeriesDetailSlice'

const SeriesDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { ser, serErr, serIsLoading } = useSelector(state => state.seriesDetailSlice)

  useEffect(() => {
    dispatch(fetchSeriesDetail(id))
  }, [dispatch, id])

  return (
    <>
      <DetailComponents data={ser} dataErr={serErr} dataLoader={serIsLoading}/>
    </>
  )
}

export default SeriesDetail