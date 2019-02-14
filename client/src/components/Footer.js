import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <div className='footer section'>
      <div className='footer-nav'>
        <p className='footer-nav-item'> About </p>
        <p className='footer-nav-item'> Help </p>
        <p className='footer-nav-item'> {'Privacy & Terms'} </p>
      </div>
      <span className='footer-lic'> <span className='footer-title'>Collab-G</span> &copy; 2019 </span>
    </div>
  )
}
