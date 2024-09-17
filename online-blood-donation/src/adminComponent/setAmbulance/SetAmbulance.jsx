import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

function SetAmbulance() {
  return (
    <>
      <Nav style={{fontSize:'16px',fontFamily:'serif'}} className='d-flex gap-3'>
          <Link to="ambulanceForm">Ambulance Form</Link>
          <Link to="ambulanceDetail">Ambulance Detail</Link>
      </Nav>
      <Outlet/>
    </>

  )
}

export default SetAmbulance