import React from 'react'
import './VideoPhoto.css'
import { Col, Container, Row } from 'react-bootstrap'
import person1 from '../../assets/balami.jpg'
import person2 from '../../assets/ashish.jpg'
import person3 from '../../assets/ashok.jpg'
import person4 from '../../assets/darshan.jpg'
// import videos from '../../assets/swayanVideo.mp4'

function VideoPhoto() {
  return (
    <Container className='mt-3 vp-con'>
        <p className='vp-title'>Videos and Photos</p>

        <Row className='mt-5 gap-3 justify-content-center'>
            <Col lg={3}><img src={person1} alt="" className='pic' /></Col>
            <Col lg={3}><img src={person2} alt="" className='pic' /></Col>
            <Col lg={3}><img src={person3} alt="" className='pic' /></Col>
            
            <Col lg={3}>
            <video width="600" controls className='pic'>
            <source src="darshanVideo.mp4" type="video/mp4" />
          </video>
            </Col>
            <Col lg={3}><img src={person4} alt="" className='pic' /></Col>
            <Col lg={3}>
            <video width="600" controls className='pic'>
            <source src="swayanVideo.mp4" type="video/mp4" />
          </video>
            </Col>
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