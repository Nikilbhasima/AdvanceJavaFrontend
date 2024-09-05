import React from 'react'
import './BloodCampaign.css'
import { Col, Container, Row } from 'react-bootstrap'
import CampaignDetail from './campaignDetail/CampaignDetail'

function BloodCampaign() {
  return (
    <Container className='' style={{padding:'30px'}}>
        <p className='title1'>Participate Blood Campaign</p>
        <Row className='d-flex justify-content-center'>
        <Col className='partCampaign' lg={7}>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>
        <CampaignDetail name="Organization Name" location="Location" veneue="Campaign Place" time="Time of campaign" date="date of campaign" phone="contacts of org" gmail="gmail of org"/>

        </Col>
        </Row>
        
    </Container>
  )
}

export default BloodCampaign