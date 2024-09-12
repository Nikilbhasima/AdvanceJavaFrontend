import React from 'react'
import './AboutUs.css'
import { Container } from 'react-bootstrap'
import Services from '../oservices/Services'
import Desc from '../description2.0/Desc'
import VideoPhoto from '../videophotos/VideoPhoto'

function AboutUs() {
  return (
    <Container>
        <Services/>
        <Desc/>
        <VideoPhoto/>
    </Container>
  )
}

export default AboutUs