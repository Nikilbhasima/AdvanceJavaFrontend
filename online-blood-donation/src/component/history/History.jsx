import axios from 'axios'
import React, { useEffect } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import './History.css'

function History() {



  return (
    <Container className='border setH' style={{padding:'30px'}}>
    <Nav className='d-flex gap-2 mb-3' style={{fontFamily:'serif',fontSize:'16px'}}>
        <Link to="reqHis">Request History</Link>
        <Link to="donHis">Donation History</Link>
    </Nav>
    <Outlet/>





    {/* Uncomment the div below when you need to use it */}
    {/* 
    <div>
        This is History
        <button onClick={getAllData}>Get all donor requests</button>
    </div> 
    */}
</Container>
  )
}

export default History