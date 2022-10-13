import React from 'react'



const DetailComponents = ({ data, dataErr, dataLoader }) => {

  return (
    <div className='container-fluid bg-dark my-0'>
      <div className='row d-flex justify-content-around py-3'>
        {
          dataLoader
            ?
            <h1 className='text-center text-dark'>Loading ........</h1>
            :
            data
              ?
              (
                <div className='text-center w-75 border rounded p-3 mx-2 my-3 bg-secondary'>
                  <img src={`${data.poster_path ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}` :
                    data.profile_path ? `https://image.tmdb.org/t/p/w500${data.profile_path}` :
                      "https://via.placeholder.com/450"}`}
                    alt=""
                    className='w-100 '
                    style={{ height: '30rem' }}
                  />
                  <h1 className='text-dark mt-3'>{data.original_name ? data.original_name : data.original_title ? data.original_title : data.name}</h1>
                  {
                    data.original_language
                      ?
                      <h5 className='text-dark my-2'><span className='text-warning'>Language:</span> {data.original_language}</h5>
                      :
                      <h5 className='text-dark my-2'><span className='text-warning'>Birthday:</span> {data.birthday}</h5>
                  }
                  <h6 className='text-dark my-2'>{data.overview}</h6>
                  {
                    data.known_for_department
                      ?
                      <h5 className='text-dark my-2'><span className='text-warning'>Department:</span> {data.known_for_department}</h5>
                      :
                      null
                  }
                  {
                    data.biography
                      ?
                      <h5 className='text-dark my-2'><span className='text-warning'>About:</span> {data.biography}</h5>
                      :
                      null
                  }
                </div>
              )
              :
              <h1 className='text-center text-danger'>{dataErr}</h1>
        }
      </div>
    </div>
  )
}

export default DetailComponents