import React from 'react'
import './Techspecs.css'

import data from '../../constants/data'
import Subheading from '../../components/Subheading/Subheading'
import Specs from '../../components/Specs/Specs'

const Techspecs = () => {
  return (
    <div className='techspecs'>
        <div className='techspec_body'>
            <div className='spec_subheading'>
                <Subheading 
                title1="Tech Specs"
                className="sub_sub"/>
                <span>Engine</span>
            </div>
            <div className='techspec_attributes'>
                {data.techspecs.map((specs) => <Specs specs={specs} key = {specs.attribute}/>)}
            </div>
        </div>
        
    </div>

  )
}

export default Techspecs