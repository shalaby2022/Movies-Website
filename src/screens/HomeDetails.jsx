import React, { useEffect, useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../redux/HomeSlice'


const HomeDetails = () => {
    const { all, allErr, allIsLoading } = useSelector(state => state.allSlice)
    const dispatch = useDispatch()
    const inpRef = useRef()

    useEffect(() => {
        dispatch(fetchAll())
        inpRef.current.focus();
    }, [dispatch])

    return (
        <>
            <Carousel>
                {
                    all && all.map(item => (
                        <Carousel.Item key={item.id}
                            style={{ backgroundColor: '#000' }}
                            interval={2000}
                        >
                            <img
                                className="d-block w-75 m-auto"
                                style={{ height: '80vh' }}
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            <div className='container-fluid bg-dark my-0'>
                <div className='container pt-5'>
                    <input type="text" name="" id=""
                        className='w-50 d-block mx-auto p-2 fs-5 fw-bold rounded'
                        style={{ outline: 'none' }}
                        placeholder="Search...."
                        ref={inpRef}
                    />
                    <div className='row d-flex justify-content-around py-5'>
                        {
                            allIsLoading
                                ?
                                <h1 className='text-center text-dark'>Loading ........</h1>
                                :
                                all && all.length > 0
                                    ?
                                    (
                                        all.map(item => (
                                            <div className='text-center w-25 border rounded p-3 mx-2 my-4 bg-secondary anime-1' key={item.id}>
                                                <img src={`${item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` :
                                                    item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` :
                                                        "https://via.placeholder.com/450"}`}
                                                    alt=""
                                                    className='w-100 '
                                                    style={{ height: '25rem' }}
                                                />
                                                <h3 className='text-dark my-2'>{item.original_name ? item.original_name : item.original_title}</h3>
                                            </div>
                                        ))
                                    )
                                    :
                                    <h1 className='text-center text-danger'>{allErr}</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDetails