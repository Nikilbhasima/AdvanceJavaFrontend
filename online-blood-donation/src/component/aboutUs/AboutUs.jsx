import React from 'react'
import './AboutUs.css'
import { Container } from 'react-bootstrap'
import Services from '../oservices/Services'
import Desc from '../description2.0/Desc'
import VideoPhoto from '../videophotos/VideoPhoto'
import Description from '../description/Description'
import Description2 from '../description/Description2'

function AboutUs() {
  return (
    <Container>
      
    <Desc/>

    {/* <Description/> */}
    <Description2/>
    <VideoPhoto/>
    </Container>
  )
}

export default AboutUs