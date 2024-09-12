import React from 'react'
import './RequestDonor.css'
import { Container, Nav, NavLink } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

function RequestDonor() {
  return (
    <Container className='border p-5 mainReqCon'>
    <Nav className='d-flex gap-3 pb-3 navStyle' >
        <Link to="subRequest1">
        Request Donor
        </Link>
        <Link to="subRequest2">
        Check Request
        </Link>
    </Nav>
    <Outlet/>
    </Container>
  )
}

export default RequestDonor