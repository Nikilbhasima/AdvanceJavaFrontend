import React from 'react'
import './Service2.css'
import { Col, Container, Row } from 'react-bootstrap'
import Card from './cards/Card'
import ambulacne from '../../assets/ambulance.jpg'
import request from '../../assets/request.jpg'
import campaign from '../../assets/campaign.jpg'

function Service2() {
  return (
    <Container className='serCon'>
        <p className='sTitle'>Our Services</p>
        <Row className=' tt'>
            <Col className='p-0 CardCon' lg={3} md={6} sm={12}>
            <Card title="Add Request" description="You can add blood request to other people here" imgCon={request} path="requestDonor"/>
            </Col>
            <Col className='p-0 CardCon' lg={3} md={6} sm={12}>
            <Card title="Become Donor" description="If your are eager to donote blood. Your can donate here." imgCon={request} path="donate"/>
            </Col>
            <Col className='p-0 CardCon' lg={3} md={6} sm={12}>
            <Card title="Call Ambulance" description="You can get ambulance contact information here." imgCon={ambulacne} path="ambulance"/>
            </Col>
            <Col className='p-0 CardCon' lg={3} md={6} sm={12}>
            <Card title="Participate Campaign" description="You can donate your precious blood to other by here." imgCon={campaign} path="campaign"/>
            </Col>
           
        </Row>
    </Container>
  )
}

export default Service2