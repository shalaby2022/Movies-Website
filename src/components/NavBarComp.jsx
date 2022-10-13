import React from 'react'
import './ScreenComponent.css'
import { Link } from 'react-router-dom'


const NavBarComp = ({ isLogged }) => {

  return (
    <ul className='p-2 bg-secondary d-flex justify-content-between my-0'>
      <div className='w-25'>
        <li className='list-unstyled'><Link to='/home' className='text-decoration-none fw-bold fs-4 logo'>Shahid🎬</Link></li>
      </div>
      <div className='w-50 d-flex justify-content-between align-items-baseline'>
        <li className='list-unstyled'><Link to='/movies' className='text-decoration-none fw-bold fs-5'>Movies</Link></li>
        <li className='list-unstyled'><Link to='/series' className='text-decoration-none fw-bold fs-5'>Series</Link></li>
        <li className='list-unstyled'><Link to='/persons' className='text-decoration-none fw-bold fs-5'>Stars</Link></li>
        <li className='list-unstyled'><Link to='/favourites' className='text-decoration-none fw-bold fs-5'>Favourites</Link></li>
        {
          isLogged
          ?
          <li className='list-unstyled'><Link to='/signIn' className='text-decoration-none fw-bold fs-5'>SignOut</Link></li>
          :
          <li className='list-unstyled'><Link to='/' className='text-decoration-none fw-bold fs-5'>SignIn</Link></li>
        }
      </div>
    </ul>
  )
}

export default NavBarComp