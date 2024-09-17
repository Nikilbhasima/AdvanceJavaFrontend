import React from 'react'
import './AdminNavbar.css'
import { Col, Nav, NavLink, Row } from 'react-bootstrap'
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SetCampaign from '../setCampaign/SetCampaign';
import SetAmbulance from '../setAmbulance/SetAmbulance';
import Dashboard from '../dashboard/Dashboard';
import { TextField } from '@mui/material';
import { MdDashboard } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";



function AdminNavbar() {
  return (
    <div className='navCol'>
        <Row>
            <div className='intro'><FaUserAlt /><p className='adminInfo p-0 m-0'>Admin</p></div>
        </Row>
        <hr />
        <Row className='d-flex flex-column'>
            <Nav className='adminNav'>
            <Link to="/" element={<Dashboard/>} className='al' > <MdDashboard className='icons' />Dashboard</Link>
            <Link to="setCampaign" element={<SetCampaign/>} className='al'><MdCampaign className='icons' />Blood Campaign</Link>
            <Link to="setAmbulance" element={<SetAmbulance/>} className='al'><FaAmbulance className='icons' />Ambulance</Link>
        </Nav>

        <button className='bu'>LogOut</button>
        
        </Row>
    </div>
  )
}

export default AdminNavbar