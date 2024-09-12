import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function RequestHistory() {
    

    const [requestDetail,setRequestDetail]=useState([])
    const getAllData=async()=>{
        try{
            const response=await axios.get('http://localhost:8080/api/getDonorList',{withCredentials: true})
            console.log(response.data)
            setRequestDetail(response.data)
            console.log(requestDetail)
        }catch(err){
            console.log(err)
            console.log("data not retieved")
        }
    }
    useEffect(()=>{
        getAllData()
    },[])
  return (
    <div className='d-flex flex-column gap-3'>

    {requestDetail.map((data)=>(
        <TableContainer component={Paper} key={data.id}>
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
            <TableRow >
              <TableCell component="th" scope="row">
              {data.id}
              </TableCell>
              <TableCell >{data.patient}</TableCell>
              <TableCell >{data.bloodGrp}</TableCell>
              <TableCell >{data.cases}</TableCell>
              <TableCell >{data.unit}</TableCell>
              <TableCell >{data.contact}</TableCell>
              <TableCell >{data.phone}</TableCell>
              <TableCell >{data.date}</TableCell>
              <TableCell >{data.time}</TableCell>
              <TableCell >{data.hospital}</TableCell>
              <TableCell >{data.status}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <p className='p-2' style={{fontWeight:'bold'}}>List of People who participated</p>
        {/* inserting table inside a table */}
        <div>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Donor Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Availability</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
            {data.donorlist.map((subData)=>(
                <TableRow >
                <TableCell component="th" scope="row">
                    {subData.id}
                </TableCell>
                <TableCell > {subData.username}</TableCell>
                <TableCell > {subData.bloodGrp}</TableCell>
                <TableCell > {subData.phone}</TableCell>
                <TableCell > {subData.availability}</TableCell>
                
                </TableRow>
            ))}
          
        </TableBody>
      </Table>
        </TableContainer>
    
        </div>
    </TableContainer>
    ))}
    





    </div>
  )
}

export default RequestHistory