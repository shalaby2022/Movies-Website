import React from 'react'
import './ScreenComponent.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaRegHeart } from "react-icons/fa";


const ScreenComponent = ({ data, err, loader, linkInfo, addCard }) => {
    const dispatch = useDispatch()
    return (
        <div className='container-fluid bg-dark my-0'>
            <div className='row d-flex justify-content-around py-3'>
                {
                    loader
                        ?
                        <h1 className='text-center text-dark'>Loading ........</h1>
                        :
                        data && data.length > 0
                            ?
                            (
                                data.map(item => (
                                    <div className='text-center border rounded p-3 my-3 bg-secondary anime-1 col-9 col-md-4 col-lg-3 mx-md-2' key={item.id}>
                                        <Link to={`/${linkInfo}/${item.id}`} className="text-decoration-none">
                                            <img src={`${item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` :
                                                item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` :
                                                "https://via.placeholder.com/450"}`}
                                                alt=""
                                                className='w-100 '
                                                style={{height: '25rem'}}
                                            />
                                            <h3 className='text-dark my-2'>{item.original_name ? item.original_name : item.original_title}</h3>
                                        </Link>
                                        <button
                                            className='btn btn-outline-primary d-block w-50 mx-auto mt-2 mb-3'
                                            onClick={() => dispatch(addCard(item))}>
                                            <FaRegHeart/>
                                        </button>
                                    </div>
                                ))
                            )
                            :
                            <h1 className='text-center text-danger'>{err}</h1>
                }
            </div>
        </div>
    )
}

export default ScreenComponent