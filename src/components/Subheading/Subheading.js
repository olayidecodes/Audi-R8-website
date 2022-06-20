import React from 'react'
import './Subheading.css'

const Subheading = ({title1, title2}) => {
  return (
    <div className='subheading_text'>
      <p>{title1}</p>
      <p>{title2}</p>
    </div>
  )
}

export default Subheading