import React from 'react'
import './Gallery.css'
import {FaFire} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import {FaTint} from 'react-icons/fa'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='box'>
            <div className='box_1'>
                <div className='text text_1'>
                    <FaFire className='icon fire'/>
                    <h3>Power and speed unleashed</h3>
                    <span>Learn More <FaArrowRight /></span>
                </div>
                <div className='img_1'>

                </div>
                <div className='img_2'>

                </div>
                <div className='text text_2'>
                    <FaTint className='icon tint'/>
                    <h3>Respectful to the environment</h3>
                </div>
            </div>
            <div className='box_2'>

            </div>
        </div>
    </div>
  )
}

export default Gallery