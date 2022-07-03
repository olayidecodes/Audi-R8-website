import React from 'react'
import './CarStats.css'
import Car from '../../assets/car.png'

const CarStats = () => {
  return (
    <div className='car_stats'>
        <div className='stats'>
            <div className='stat 1'>
                <h2>206</h2>
                <h3>km</h3>
                <p>TOP SPEED</p>
            </div>
            <div className='stat 2'>
                <h2>7</h2>
                <h3>gears</h3>
                <p>GEAR BOX</p>
            </div>
            <div className='stat 3'>
                <h2>206</h2>
                <h3>km</h3>
                <p>TOP SPEED</p>
            </div>
        </div>
        <div className='car'>
            <div className='circle'>
                <img src={Car} alt="car" />
                <div className='inner_md_circle'></div>
                <div className='inner_sm_circle'></div>
            </div>
        </div>
    </div>
  )
}

export default CarStats