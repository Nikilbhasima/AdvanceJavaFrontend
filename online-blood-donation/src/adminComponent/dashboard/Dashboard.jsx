import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import './Dashboard.css'
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

function Dashboard() {

  const [user,setUser]=useState()
  const [ambulance,setAmbulance]=useState()
  const [campaign,setCampaign]=useState()
  const [userData,setUserData]=useState([])


  const countUser = async () => {
    try {
      const [userResponse, campaignResponse, ambulanceResponse,dataResponse] = await Promise.all([
        axios.get('http://localhost:8080/api/numberOfUser', { withCredentials: true }),
        axios.get('http://localhost:8080/api/numberOfCampaign', { withCredentials: true }),
        axios.get('http://localhost:8080/api/numberOfAmbulance', { withCredentials: true }),
        axios.get('http://localhost:8080/api/users', { withCredentials: true })
      ]);
  
      setUser(userResponse.data);
      setCampaign(campaignResponse.data);
      setAmbulance(ambulanceResponse.data);
      setUserData(dataResponse.data)
    } catch (err) {
      console.log(err);
      console.log("data not fetched");
    }
  };

  useEffect(()=>{
    countUser()
  },[])
  
  return (
    <>
    <Row className='d-flex justify-content-around'>
      <Col className="border numCon" lg={3}>
      <p className='p8'>{user}</p>
      <p className='p2'>Total User</p>
      </Col>
      <Col className="border numCon" lg={3}>
      <p className='p8'>{campaign}</p>
      <p  className='p2'>On going Campagin</p>
      </Col>
      <Col className="border numCon" lg={3}>
      <p className='p8'>{ambulance}</p>
      <p  className='p2'>Number of ambulance</p>
      </Col>
    </Row>
    <Row>
      <h1>Check User Details</h1>
      <TableContainer className='tableData'>
      <Table >
        <TableHead className='tableTop'>
          <TableRow>
            <TableCell>Sn</TableCell>
            <TableCell >Username</TableCell>
            <TableCell >Blood Group</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell >DOB</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Phone number</TableCell>
            <TableCell >Availability</TableCell>

          </TableRow>
        </TableHead>
        <TableBody >
          {userData.map((data)=>(
            <TableRow>
              <TableCell>{data.id}</TableCell>
              <TableCell >{data.username}</TableCell>
              <TableCell >{data.bloodGrp}</TableCell>
              <TableCell >{data.gender}</TableCell>
              <TableCell >{data.date}</TableCell>
              <TableCell >hello</TableCell>
              <TableCell >{data.phone}</TableCell>
              <TableCell >{data.availability}</TableCell>
            </TableRow>
          ))}
            
           
            

        </TableBody>
      </Table>
    </TableContainer>
    </Row>
    </>
  )
}

export default Dashboard