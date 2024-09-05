import React from 'react'
import './Services.css'
import { Container, Row ,Col} from 'react-bootstrap'
// import bloodGiving from '../../assets/balami3.jpg'
import give from '../../assets/give.jpg'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import CustomButton from '../ButtonPack/CustonButtton';

function Services() {
  const loginBtnProperty={
    backGround:"#DE1C1C",
    name:"Donation Blood",
    hoverColor:"#fff",
    fontColor:"#fff"
  }
  const loginBtnProperty2={
    backGround:"#DE1C1C",
    name:"Request Blood Requestor",
    hoverColor:"#fff",
    fontColor:"#fff"
  }
  const loginBtnProperty3 ={
    backGround:"#DE1C1C",
    name:"Participate Blood Campaign",
    hoverColor:"#fff",
    fontColor:"#fff"
  }
  return (
    <Container className='p-0 '>
        <Row className='m-0 p-0'> 
            <Col className='objective m-0 p-0' lg={6}>
            <p className='m-0 p1'>Eliminate blood scarcity in <span style={{color:"red"}}>Nepal</span>  <span className='p1_s'>by </span></p>
            <p className='m-0 p2'>donating your time to make an impact, your blood to save lives or your money to create a holistic blood management cycle.</p>
            <a href="#" className='ad'>Donate Now <RiArrowRightDoubleFill /></a>
            <div className='btn-con'>
              <CustomButton buttonName={loginBtnProperty} className="m-0 c-btn"/>
              <CustomButton buttonName={loginBtnProperty} className="m-0 c-btn"/>
              <CustomButton buttonName={loginBtnProperty} className="m-0 c-btn"/>
            </div>
            </Col>
            <Col className='img-con m-0 p-0' lg={6}>
            <img src={give} alt="" className='giving-img'/>
            </Col>

        </Row>
        <Row className='m-0 p-0'>
        <Col className=' s-con' lg={6}>
        <p  className='p-0 m-0 p3'>"In countries like Nepal, <br /> patients' families often face the daunting task of <br />finding and transporting blood themselves. <br /> We're here to ease that burden and save lives."</p>
        <p className='p-0 m-0 p4'>"Save a life today—donate blood, share hope."</p>
        </Col>
        <Col className=' s2-con p-0 m-0' lg={6}>
        <iframe width="560" height="315" className='vid' src="https://www.youtube.com/embed/VSVYgivfs9c?si=CaL8s2WDuFdHTVdy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
        </Row>
    </Container>
  )
}

export default Services