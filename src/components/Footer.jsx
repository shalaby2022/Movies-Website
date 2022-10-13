import React from 'react'
import './ScreenComponent.css'
import { FaFacebook, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    height: '3.5rem',
    postion: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#777',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'base-line',
    padding: '1rem',
  }

  return (
    <div style={footerStyle}>
      <div className='w-25'>
        <h2 className='text-dark'>Shahid4You</h2>
      </div>
      <div className='w-50'>
        <ul className='d-flex justify-content-around'>
          <li className='list-unstyled'><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className='text-decoration-none fw-bold'><FaFacebook className='fs-3'/></a></li>
          <li className='list-unstyled'><a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer" className='text-decoration-none fw-bold'><FaTwitter className='fs-3'/></a></li>
          <li className='list-unstyled'><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className='text-decoration-none fw-bold'><FaInstagram className='fs-3'/></a></li>
          <li className='list-unstyled'><a href="mailto:ahmedshalaby201495@gmail.com" rel="noreferrer" className='text-decoration-none fw-bold'><FaGoogle className='fs-3'/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer