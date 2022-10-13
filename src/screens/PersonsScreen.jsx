import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScreenComponent from '../components/ScreenComponent'
import { fetchPersons } from '../redux/PeresonsSlice'
import { addCard } from '../redux/MoviesSlice'

const PersonsScreen = () => {
    const { persons, personsErr, perosonsIsLoading } = useSelector(state => state.personsSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPersons())
    }, [dispatch])

    return (
        <>
            <ScreenComponent data={persons} loader={perosonsIsLoading} err={personsErr} linkInfo={"persons"} addCard={addCard}/>
        </>
    )
}

export default PersonsScreen