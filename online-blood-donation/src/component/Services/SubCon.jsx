import React from 'react'
import "./Service.css"
import { Col } from 'react-bootstrap'
import { RxSpeakerLoud } from "react-icons/rx";
import { Link } from 'react-router-dom';
function SubCon({icon:Icon,name,travel}) {
  return (
    
        
        <Link className='d-flex flex-column align-items-center ancher-service' to={travel}>
        {/* <RxSpeakerLoud className='service-icon' /> */}
        <Icon className='service-icon'/>
        <p className='service-name'>{name}</p>
        </Link>

  )
}

export default SubCon