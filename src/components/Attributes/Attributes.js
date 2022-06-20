import React from 'react'
import './Attributes.css'

const Attributes = ({icon: {imgUrl, attribute, rate}}) => {
  return (
    <div className='attribute'>
        <img src={imgUrl} alt="icon" className='attribute_image'/>
        <div className='attribute_text'>
            <h4>{attribute}</h4>
            <p>{rate}</p>
        </div>
    </div>
  )
}

export default Attributes