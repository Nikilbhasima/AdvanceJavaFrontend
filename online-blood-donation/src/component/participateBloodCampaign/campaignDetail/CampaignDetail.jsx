import React from 'react'
import './CampaignDetail.css'
import { Col, Row } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";


function CampaignDetail({name,location,veneue,time,date,phone,gmail,ending}) {
  return (

    <div className='border campaign-con mt-3'>
        <div className='d-flex justify-content-between'>
            <div><p className='top' style={{fontWeight:'550'}}>{name}</p></div>
            <div><p className='top'><FaLocationDot />{location}</p></div>
        </div>
        <hr className='mt-0 mb-0'/>
        <Row>
            <Row>
                <Col>
                <p className='entity'><span className='sub-entity'  >Venue:</span> {veneue}</p>
                </Col>
                <Col>
                <p className='entity'><span className='sub-entity'>Time:</span>{time}-{ending}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className='entity'><span className='sub-entity'  >Date:</span>{date}</p>
                </Col>
                <Col>
                <p className='entity'><span className='sub-entity'>Phone number:</span>{phone}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className='entity'><span className='sub-entity'  >Gmail:</span>{gmail}</p>
                </Col>
            </Row>
        </Row>
    </div>
  )
}

export default CampaignDetail