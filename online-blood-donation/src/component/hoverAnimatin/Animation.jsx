import React from 'react'
import './Animation.css'
import { IoIosArrowDropdownCircle } from "react-icons/io";


function Animation(props) {
  return (
    <div className='main-des border mb-2'>
        <div className="animation-title same ">
            <p>{props.title}</p>
            <IoIosArrowDropdownCircle />
        </div>
        <div className="description-data same ">
            <div className="des-content">
            <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Animation