import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


const HomeScreen = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [cinema, setCinema] = useState([])
  const [search, setSearch] = useState([])
  const inpRef = useRef()


  useEffect(() => {
    fetchCinema()
    inpRef.current.focus();
  }, [])

  const fetchCinema = () => {
    setIsLoading(true)
    return axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=f70925f38942b21e7363bd744f4fc321")
      .then(({ data }) => (data))
      .then(({ results }) => (
        setIsLoading(false),
        setCinema(results),
        setSearch(results)
      ))
  }

  const onSearch = (inp) => {
    console.log(inp)
    let newSearch = [...search]
    console.log(newSearch)
    if (inp !== "") {
      newSearch = newSearch.filter(item => ( item?.name?.toLowerCase().includes(inp) ) || ( item?.title?.toLowerCase().includes(inp) ))
      setSearch(newSearch)
    } else {
      setSearch(cinema)
    }
    console.log(newSearch);
  }

  return (
    <>
      <Carousel>
        {
          search && search.map(item => (
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
          <input type="text"
            className='w-50 d-block mx-auto p-2 fs-5 fw-bold rounded'
            style={{ outline: 'none' }}
            placeholder="Search...."
            ref={inpRef}
            onChange={(e) => onSearch(e.target.value)}
          />
          <div className='row d-flex justify-content-around py-5'>
            {
              isLoading
              ?
              <h1 className='text-center text-dark'>Loading ........</h1>
              :
              search && search.length > 0
                ?
                (
                  search.map(item => (
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
                <h1 className='text-center text-danger'>No Matching Results</h1>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen


