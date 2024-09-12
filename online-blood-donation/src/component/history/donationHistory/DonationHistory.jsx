import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function DonationHistory() {

  const [getParticipation,setParticipation]=useState([])
    const getParticipatedData=async()=>{
        try{
          console.log("when to database but didn't get data")
            const response=await axios.get('http://localhost:8080/api/getParticipatedList',{withCredentials: true})
            console.log(response.data)
            setParticipation(response.data)
        }catch(err){
            console.log(err)
            console.log("data not retieved")
        }
    }

    useEffect(()=>{
        getParticipatedData()
    },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Request Id</TableCell>
            <TableCell>Patient</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Case</TableCell>
            <TableCell>Unit</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Hospital</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {getParticipation.map((data)=>(
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.patient}</TableCell>
              <TableCell>{data.bloodGrp}</TableCell>
              <TableCell>{data.cases}</TableCell>
              <TableCell>{data.unit}</TableCell>
              <TableCell>{data.contact}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.time}</TableCell>
              <TableCell>{data.hospital}</TableCell>
              <TableCell>{data.status}</TableCell>
            </TableRow>
          ))}
            

        </TableBody>
      </Table>
    </TableContainer>
   
  )
}

export default DonationHistory