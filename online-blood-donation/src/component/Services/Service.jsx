import React from 'react'
import "./Service.css"
import { Col, Container, Row } from 'react-bootstrap'
import SubCon from './SubCon'
import { RxSpeakerLoud } from "react-icons/rx";
import { IoMdPersonAdd } from "react-icons/io";
import { FaAmbulance } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Service() {

  return (
    <>
    <Container className=' mb-3 mt-5 '>
        <p className="our-service-heading">
                Our Service
        </p>
        <div className='services-c'>
        <Row className='justify-content-between g-1'>
            <Col className='our-service d-flex justify-content-center align-items-center' lg="3" md="3">
            <SubCon icon={RxSpeakerLoud} name="Add Request"/>
            </Col>
            <Col className='border our-service d-flex justify-content-center align-items-center' lg="3" md="3">
            <SubCon icon={IoMdPersonAdd} name="Be Donor"/>
            </Col>
            <Col className='border our-service d-flex justify-content-center align-items-center' lg="3" md="3">
            <SubCon icon={FaAmbulance} name="Call Ambulance" travel="ambulance"/>
            </Col> 
        </Row>
        <Row className='justify-content-between'>
             <Col className='border our-service d-flex justify-content-center align-items-center' lg="3" md="3">
             <SubCon icon={FaPlusCircle} name="Blood Bank"/>
            </Col>
            <Col className='border our-service d-flex justify-content-center align-items-center' lg="3" md="3">
            <SubCon icon={FaTent} name="Blood Campaign" travel="campaign"/>
            </Col>
            <Col className='border our-service d-flex justify-content-center align-items-center' lg="3" md="3">
             <p>Comming Soon</p>
            </Col> 
        </Row>
        
       
        </div>
        
    </Container>
    </>
    

  )
}

export default Service