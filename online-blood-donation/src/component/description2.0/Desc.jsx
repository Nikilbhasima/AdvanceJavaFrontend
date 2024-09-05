import React from 'react'
import './Desc.css'
import { Col, Container, Row } from 'react-bootstrap'
import cartoon from '../../assets/cartoon.jpg'
import WhatDo from './whatDo/WhatDo'
import digitization from '../../assets/digitization.jpg'
import motivate from '../../assets/motivate.jpg'
import drop from '../../assets/blood-drop.png'
import Data from './data/Data'

function Desc() {


  return (
    <Container className=' p-0'>
        <Row className='p-0 m-0 top-s'>
            <Col className='m-0 p-0 cartoon-con' lg={6}>
            <img src={cartoon} className='cartoon-img' />
            </Col>
            <Col className=' m-0' lg={6}>
            <h1 style={{marginBottom:'24px'}}>Why Blood Link</h1>
            <p className='p19 m-0'>Blood Link is an innovative online platform designed to transform blood donation and management in Nepal. </p>
            <p className='p19 m-0'>Our application connects donors, recipients, and blood banks seamlessly, allowing people to request blood, call for ambulance services, participate in donation drives, and assist blood banks in managing their inventory efficiently.</p>
            <p className='p19 m-0'>We aim to create a smart, transparent, and comprehensive blood management service—from donation to supply. </p>
            <p className='p19 m-0'>With Blood Link, the right information is available at the right time, potentially making the difference between life and death. Join us in our mission to ensure a reliable and efficient blood supply for all.</p>
            </Col>
        </Row>
        <Row className='p-0 m-0 top-s ' >
            <Col className='m-0 p-0  d-flex flex-column gap-4' lg={6}>
                <h1>What we Do?</h1>
                <p className='p-0 m-0 p5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur debitis necessitatibus quae in, quidem nihil nulla excepturi sunt magni, ipsam repellendus expedita perspiciatis pariatur eius nesciunt ea, doloremque omnis!</p>
                <Row className='p-0 m-0'> 
                    <Col className='d-flex flex-column gap-5  m-0' lg={6}>
                    <WhatDo images={digitization} title="Digitization" subTitle="We digitize Blood Bank"/>
                    <WhatDo images={motivate} title="Motivate Donors" subTitle="We motivate and retain donors with our vein-to-vein initiative"/>
                    </Col>
                    <Col className=' m-0 d-flex flex-column justify-content-center' lg={6}>
                    <WhatDo images={drop} title="Blood Link" subTitle={<>Contact Us <br /> 9808029931</>}/>
                    
                    </Col>
                </Row>
            </Col>
            <Col className=' m-0  d-flex flex-column  align-items-center gap-5 p-auto' style={{paddingTop:'8%'}} lg={6} >
            <Row>
                <Col><Data datas="0" event="Blood Organization"/></Col>
                <Col><Data datas="0" event="Blood Search Managed"/></Col>
            </Row>
            <Row>
                <Col><Data datas="0" event="Live Saved"/></Col>
            </Row>
            <Row>
                <Col><Data datas="0" event="Total data digitized"/></Col>
                <Col><Data datas="0" event="Total Blood Calculated"/></Col>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Desc