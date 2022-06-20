import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <nav className='header'>
            <span className='logo'>Audi R8</span>
            <ul className='header_links'>
                <li>Home</li>
                <li>Garage</li>
                <li>News</li>  
                <li>Purchase</li>
            </ul>
        </nav>
        <div className='bottom_text'>
            <h1>Join The Journey</h1>
            <p>Leaner and meaner than ever. The new Audi R8<br/>boddly goes where no car has gone before</p>
        </div>
    </div>
  )
}

export default Banner