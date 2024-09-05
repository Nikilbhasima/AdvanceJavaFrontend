import React from 'react'
import './Data.css'

function Data({datas,event}) {
  return (
    <div className='data-con'>
        <p className='p11'>{datas}</p>
        <p className='p12'>{event}</p>
    </div>
  )
}

export default Data