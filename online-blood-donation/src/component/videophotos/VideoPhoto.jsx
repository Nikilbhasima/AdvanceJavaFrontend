import React from 'react'
import './VideoPhoto.css'
import { Col, Container, Row } from 'react-bootstrap'
import person1 from '../../assets/balami.jpg'

function VideoPhoto() {
  return (
    <Container className='mt-3 vp-con'>
        <p className='vp-title'>Videos and Photos</p>

        <Row className='mt-5 gap-3 justify-content-center'>
            <Col lg={3}><img src={person1} alt="" className='pic' /></Col>
            <Col lg={3}><img src={person1} alt="" className='pic' /></Col>
            <Col lg={3}><img src={person1} alt="" className='pic' /></Col>
            <Col lg={3}><img src={person1} alt="" className='pic' /></Col>
            <Col lg={3}><img src={person1} alt=""  className='pic'/></Col>
            <Col lg={3}><img src={person1} alt="" className='pic' /></Col>
        </Row>
        <Row className='mt-2 '>
            <Col className='anc d-flex flex-row-reverse' lg={12}  >
            <a href="#" className='anc ms-auto' >See All</a>
            </Col>
        </Row>
    </Container>
  )
}

export default VideoPhoto