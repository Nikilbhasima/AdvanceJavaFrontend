import React from 'react'
import './WhatDo.css'
import digitization from '../../../assets/digitization.jpg'

function WhatDo({title,subTitle,images}) {
  return (
    <div className='what-con p-4'>
        <img src={images} alt="digitization image" className='digImg'/>
        <p className='p-0 m-0 d-titile1'>{title}</p>
        <p className='p-0 m-0 sub-title1'>{subTitle}</p>
    </div>
  )
}

export default WhatDo