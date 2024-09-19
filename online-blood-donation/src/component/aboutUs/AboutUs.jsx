import React from 'react'
import './AboutUs.css'
import { Container } from 'react-bootstrap'
import Services from '../oservices/Services'
import Desc from '../description2.0/Desc'
import VideoPhoto from '../videophotos/VideoPhoto'
import Description from '../description/Description'
import Description2 from '../description/Description2'
import ContactUs from '../contactUs/ContactUs'

function AboutUs() {
  return (
    <Container>
    <Desc/>
    <Description2/>
    <VideoPhoto/>
    <ContactUs/>
    </Container>
    
  )
}

export default AboutUs