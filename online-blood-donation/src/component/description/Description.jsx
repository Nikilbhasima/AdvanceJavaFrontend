import React from 'react'
import './Description.css'
import { Col, Container, Row } from 'react-bootstrap'
import Animation from '../hoverAnimatin/Animation'
import Description2 from './Description2'

function Description() {
  return (
    <Container className='description-main'>
        <Row className=' justify-content-center gap-3'>
        <Col className='border des-con' lg="5">
        <Description2/>
        </Col>
        <Col className='border des-con' lg="5" >
        <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
        <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
        <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
        <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
        <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
        </Col>
        </Row>
        
    </Container>
    
  )
}

export default Description