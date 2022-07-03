import React, { useState } from 'react'
import './Banner.css'
import {GiHamburgerMenu} from "react-icons/gi"
import {IoClose} from "react-icons/io5"

const Banner = () => {

  const [toggle, setToggle] = useState(false)

  const toggler = () => {
    setToggle(!(toggle))
  }


  return (
    <div className='banner'>
        <nav className='header'>
            <span className='logo'>Audi R8</span>
            <div className={toggle ? "active" : ""}>
              <ul >
                <li>Home</li>
                <li>Garage</li>
                <li>News</li>  
                <li>Purchase</li>
              </ul>
              <IoClose 
              className='close'
              onClick={toggler}
              />
              
            </div>
            <GiHamburgerMenu
              className='hamburger'
              onClick={toggler}/>
        </nav>
        <div className='bottom_text'>
            <h1>Join The Journey</h1>
            <p>Leaner and meaner than ever. The new Audi R8<br/>boddly goes where no car has gone before</p>
        </div>
    </div>
  )
}

export default Banner