import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import SetAmbulance from '../setAmbulance/SetAmbulance'
import SetCampaign from '../setCampaign/SetCampaign'
import AdminNavbar from '../adminNavbar/AdminNavbar'
import { InputAdornment, TextField } from '@mui/material'
import './AdminHome.css'
import { IoSearch } from "react-icons/io5";
import FromAmbulance from '../setAmbulance/formAmbulance/FromAmbulance'
import DetailAmbulance from '../setAmbulance/detailAmbulance/DetailAmbulance'
import CampaignForm from '../setCampaign/campaignForm/CampaignForm'
import CampaignList from '../setCampaign/campaignList/CampaignList'

function AdminHome() {

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    console.log(formattedDate); // Outputs the current date in YYYY-MM-DD format

  return (


    <Row className=' adminBody'>
    <Col className='border' lg={2}>
    <AdminNavbar/>
    </Col>
    <Col className='border' lg={10}>
    <Col className='d-flex justify-content-between p-2 align-items-center'>
        <p style={{fontSize:'20px',fontFamily:'serif',fontWeight:'bold'}}>{formattedDate}</p>
        <TextField
          id="filled-search"
          label="Search"
          type="search"
          variant="filled"
          className='searchBOx'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IoSearch style={{fontSize:'20px'}}/>
              </InputAdornment>
            ),
          }}
        />
    </Col>
    <hr />
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='setAmbulance' element={<SetAmbulance/>}>
        <Route index element={<FromAmbulance/>}/>
            <Route path='ambulanceForm' element={<FromAmbulance/>}/>
            <Route path='ambulanceDetail' element={<DetailAmbulance/>}/>
        </Route>
        <Route path='setCampaign' element={<SetCampaign/>}>
            <Route index element={<CampaignForm/>}/>
            <Route path='campaignForm' element={<CampaignForm/>}/>
            <Route path='campaignList' element={<CampaignList/>}/>
        </Route>
    </Routes>
    </Col>
    </Row>
 


 
  
  )
}

export default AdminHome