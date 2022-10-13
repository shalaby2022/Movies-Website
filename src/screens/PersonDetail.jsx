import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailComponents from '../components/DetailComponents'
import { fetchPersonDetail } from '../redux/PersonDetailSlice'

const PersonDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { person, personErr, personIsLoading } = useSelector(state => state.personSlice)

  useEffect(() => {
    dispatch(fetchPersonDetail(id))
  }, [dispatch, id])

  return (
    <>
      <DetailComponents data={person} dataErr={personErr} dataLoader={personIsLoading}/>
    </>
  )
}

export default PersonDetail