import React from 'react'
import './CallAmbulance.css'
import { Col, Container, Row } from 'react-bootstrap'

import { IoMdSearch } from "react-icons/io";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import AmbulanceInfo from './ambulanceInfo/AmbulanceInfo';

function CallAmbulance() {
  return (
    <Container className='' style={{padding:'30px'}}>
        <div className="title1">
            <p className='title-am'>Available Ambulance</p>
            <p className='sub-title'>Find Ambulance</p>
        </div> 
        <form action="#" className='d-flex justify-content-center mt-3'>
            <FormControl className='m-auto' style={{width:'350px',fontSize:'16px',borderRadius:'10px',padding:'0'}}>
                <InputLabel htmlFor="outlined-adornment-amount" style={{padding:'0'}}>Search  by district</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><IoMdSearch style={{fontSize:'20px',padding:'0'}}/></InputAdornment>}
                    label="Search  by district"
                />
            </FormControl>
        </form>
        <Row className=' mt-3 justify-content-center'>
        <Col className="ambulanceInfoCon" lg={7}>
             <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
            <AmbulanceInfo hospital="Hospital Name" location="Hospital Location" phone="Ambulance Phoe"/>
        </Col>
        </Row>
  

        
        
    </Container>
  )
}

export default CallAmbulance