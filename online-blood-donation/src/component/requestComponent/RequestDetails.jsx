import React, { useState } from 'react'
import './RequestDetails.css'
import { Col, Row } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";
import CustomButton from '../ButtonPack/CustonButtton';
import axios from 'axios';

function RequestDetails({requestData}) {



    const id=requestData.id

        const handleDonateBlood=async()=>{
            try{
                const response=await axios.post(`http://localhost:8080/api/registerDonorRequest/${id}`,{},{withCredentials: true})
                console.log(response.data)
                getUserData()
            }catch(err){
                console.log(err)
                console.log("you are not recorded")
            }
        }



    const loginBtnProperty={
        backGround:"#DE1C1C",
        name:"Accept",
        hoverColor:"#fff",
        fontColor:"#fff"
      }
  return (
<>
<Col lg={8}>
        <Row className='reqCon d-flex justify-content-center' style={{borderRadius:'10px',overflow:'hidden'}} >
        <Row className='topCon'>
            <Col>
            <p  className='p51' style={{color:'#cf3d3c'}}>Request Blood: <span>{requestData.bloodGrp}</span></p>
            </Col>
            <Col>
            <p className='p51'> <FaLocationDot className='me-3'/>Location: <span>{requestData.address}</span></p>
            </Col>
        </Row>
    
        <Row>
            <Col className='secCon' lg={10}>
            <Row>
                <Col><p className='p52'>Patient: <span  className='s51'>{requestData.patient}</span></p></Col>
                <Col> <p className='p52'>Case: <span className='s51'>{requestData.cases}</span></p></Col>
            </Row>
            <Row>
                <Col><p className='p52'>Contact: <span className='s51'>{requestData.contact}</span></p></Col>
                <Col> <p className='p52'>Phone: <span  className='s51'>{requestData.phone}</span></p></Col>
            </Row>
            <Row>
                <Col><p className='p52'>Requires: <span className='s51'>{requestData.unit} Pints Required on {requestData.date} at {requestData.time} {requestData.time>=12?"pm":"am"} on {requestData.hospital}</span></p></Col>
                
            </Row>
            </Col> 
            <Col className=' d-flex justify-content-center align-items-center' lg={2}>
            <button onClick={handleDonateBlood}>
            <CustomButton  buttonName={loginBtnProperty}/>
            </button>
            
            </Col>
            
        </Row>
    </Row>
    </Col>
    
</>
    

  )
}

export default RequestDetails