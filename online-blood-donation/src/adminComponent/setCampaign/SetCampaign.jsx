import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

function SetCampaign() {
  return (
    <>
    <Nav style={{fontSize:'16px',fontFamily:'serif'}} className='d-flex gap-3'>
      <Link to='campaignForm'>Campaign Form</Link>
      <Link to='campaignList'>Campaign List</Link>
    </Nav>
    <Outlet/>
    </>
  )
}

export default SetCampaign