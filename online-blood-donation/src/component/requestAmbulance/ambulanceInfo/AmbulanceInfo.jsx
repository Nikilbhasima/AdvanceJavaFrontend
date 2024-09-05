import React from 'react'
import './AmbulanceInfo.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAmbulance } from "react-icons/fa";

function AmbulanceInfo({hospital,location,phone}) {
  return (
    <Container>
    <Row className="justify-content-center mt-1">
        <Col lg={12}>
        <Row className='border am-main '>
            <Col className='d-flex justify-content-center' lg={2}>
            <div className='ambulace-icon'>
                <FaAmbulance style={{fontSize: '45px'}} />
            </div>
            </Col>
            <Col lg={9} className=''>
            <h1 className="hospital-name m-0">{hospital}</h1>
            <p className="hospital-location m-0">{location}</p>
            <p className="phone-number m-0">{phone}</p>
            </Col>
        </Row>
        </Col>
    </Row>
    </Container>

  )
}

export default AmbulanceInfo