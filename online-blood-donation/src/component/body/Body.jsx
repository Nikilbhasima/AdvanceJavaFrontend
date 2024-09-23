import React from 'react'
import Carousal from '../BCarousal/Carousal'
import Service from '../Services/Service'
import Description from '../description/Description'
import FAQ from '../faq/FAQ'
import VideoPhoto from '../videophotos/VideoPhoto'
import Services from '../oservices/Services'
import Desc from '../description2.0/Desc'
import Service2 from '../service2/Service2'
import Footer from '../footer/Footer'

function Body() {
  return (
    <>
    <Services/>
    <Service2/>
    <Desc/>
    <VideoPhoto/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default Body