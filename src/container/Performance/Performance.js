import React from 'react'

import './Performance.css'
import Subheading from '../../components/Subheading/Subheading'
import Attributes from '../../components/Attributes/Attributes'
import data from '../../constants/data'

const Performance = () => {
  return (
    <div className='performance'>
        <div className='first_text'>
            <Subheading 
            title1='Take a journey,'
            title2='bend space'
            />
            <p className='p'>The R8 can't help but stael the spotlight. With its sharp angular lines and exotic, glass overed engine, the R8 has a wide and commanding presence that makes it impossible to look anywhere else.</p>
        </div>
        <div className='attributes'>
            {data.icons.map((icon) => <Attributes icon={icon} key={icon.attribute} />)}
        </div>
    </div>

  )
}

export default Performance