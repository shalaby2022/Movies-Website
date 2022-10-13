import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incCounter, decCounter, removeItem } from '../redux/MoviesSlice'
import Table from 'react-bootstrap/Table';
import { FaPlus, FaTrash, FaMinus } from "react-icons/fa";

const Favourites = () => {

    const { fav } = useSelector(state => state.MoviesSlice)
    console.log(fav)
    const dispatch = useDispatch()

    const Increment = (itemId) => {
        dispatch(incCounter(itemId))
    }

    const Decrement = (itemId) => {
        dispatch(decCounter(itemId))
    }

    const Remove = (itemId) => {
        dispatch(removeItem(itemId))
    }

    return (
        <div>
            {
                fav && fav.length > 0
                ?
                (
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>Media Type</th>
                                <th>Movie Name</th>
                                <th>Image</th>
                                <th>Count</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fav.map(item => {
                                    return <tr key={item.id} style={{textAlign: 'center', lineHeight: '5rem'}}>
                                            <td>{item.media_type}</td>
                                            <td>{item.title ? item.title : item.original_name}</td>
                                            <td><img src={`${item.profile_path ?
                                                `https://image.tmdb.org/t/p/original/${item.profile_path}` : item.poster_path ?
                                                `https://image.tmdb.org/t/p/original/${item.poster_path}` :
                                                "https://www.fillmurray.com/640/360"}`} alt="" className='w-75' style={{height: '100px'}}/>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary mx-3'
                                                    onClick={() => Increment(item)}>
                                                    <FaPlus/>
                                                </button>
                                                {item.count}
                                                <button className='btn btn-danger mx-3'
                                                    onClick={() => Decrement(item)}>
                                                    <FaMinus/>
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary mx-3'
                                                    onClick={() => Remove(item)}>
                                                    <FaTrash/>
                                                </button>
                                            </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                )
                :
                (
                    <div className='bg-dark text-white text-center fw-bold fs-1' style={{height: '85vh', lineHeight: '38rem'}}>No Favourites 🤔</div>
                )
            }
        </div>
    )
}

export default Favourites