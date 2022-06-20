import React from 'react'
import './Specs.css'

const Specs = ({specs: {spec_attribute, rate}}) => {
  return (
    <div className='specs'>
        <div className='specs_text'>
            <p>{spec_attribute}</p>
            <span>{rate}</span>
        </div>
        {/* <hr className='line'/> */}
    </div>
  )
}

export default Specs