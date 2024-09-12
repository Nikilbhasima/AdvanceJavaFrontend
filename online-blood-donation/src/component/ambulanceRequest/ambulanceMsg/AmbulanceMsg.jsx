import React from 'react'
import './AmbulanceMsg.css'
import { Col, Row } from 'react-bootstrap'
import { FaAmbulance } from "react-icons/fa";

function AmbulanceMsg({info}) {
  console.log("this is card",info)
  return (
    <Row className='dataCon' >
        <Col className='d-flex justify-content-center align-items-center' lg={2} md={2} ms={2}>
        <div className='carBac'>
        <FaAmbulance className='carIcon'/>
        </div>
        </Col>
        <Col className=' infoCons' lg={10} md={10} ms={10}>
        <p className='pt p-0 m-0'>{info.hospital}</p>
        <p className='p24 p-0 m-0'>Location: <span className='spanD'>{info.address.location}</span></p>
        <p className='p24 p-0 m-0 '>Driver: <span className='spanD'>{info.driver}</span></p> 
        
        <p className='p25 p-0 m-0 '>Phone Number:
          {info.phoneD.map((data)=>(
            <span className='spanD' key={data.id}>{data.phoneN},</span>
          ))}
        </p>
        </Col>
    </Row>
  )
}

export default AmbulanceMsg