import React from 'react'
import './SubRequest22.css'
import { Col, Row } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import CustomButton from '../../../ButtonPack/CustonButtton';
import { FaPhoneAlt } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SubRequest22({data}) {

    const navigation=useNavigate()
    const handleChangeState = async (id) => {
        try {
          const response = await axios.put(`http://localhost:8080/api/closeRequestBlood/${id}`, 
            {}, 
            {
              withCredentials: true, 
            }
          );
          console.log('Request state updated successfully:', response.data);
          if(response.data){
            alert("Blood request has been closed")

            navigation("/requestDonor/subRequest1")
          }
        } catch (err) {
          console.log(err);
          console.log("Request state not updated");
        }
      };
    const loginBtnProperty={
        backGround:"#DE1C1C",
        name:"Close",
        hoverColor:"#fff",
        fontColor:"#fff"
      }
  return (
    <Col lg={8}>
        <Row className='reqCon d-flex justify-content-center' style={{borderRadius:'10px',overflow:'hidden'}} >
        <Row className='topCon'>
            <Col>
            <p  className='p51' style={{color:'#cf3d3c'}}>Request Blood: <span>{data.bloodGrp}</span></p>
            </Col>
            <Col>
            <p className='p51'> <FaLocationDot className='me-3'/>Location: <span>{data.address}</span></p>
            </Col>
        </Row>
    
        <Row>
            <Col className='secCon' lg={10}>
            <Row>
                <Col><p className='p52'>Patient: <span  className='s51'>{data.patient}</span></p></Col>
                <Col> <p className='p52'>Case: <span className='s51'>{data.cases}</span></p></Col>
            </Row>
            <Row>
                <Col><p className='p52'>Contact: <span className='s51'>{data.contact}</span></p></Col>
                <Col> <p className='p52'>Phone: <span  className='s51'>{data.phone}</span></p></Col>
            </Row>
            <Row>
                <Col><p className='p52'>Requires: <span className='s51'>{data.unit} Pints Required on {data.date} at {data.time}{data.time>12?"pm":"am"} on {data.hospital  }</span></p></Col>
                
            </Row>
            </Col> 
            <Col className=' d-flex justify-content-center align-items-center' lg={2}>
            <button onClick={()=>handleChangeState(data.id)} style={{background:'transparent'}}>
            <CustomButton   buttonName={loginBtnProperty} />
            </button>
            
            </Col>
        </Row>
    </Row>
    </Col>

  )
}

export default SubRequest22