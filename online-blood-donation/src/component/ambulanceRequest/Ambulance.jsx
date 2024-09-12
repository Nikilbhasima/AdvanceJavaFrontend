import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import AmbulanceMsg from './ambulanceMsg/AmbulanceMsg';
import './Ambulance.css'
import axios from 'axios';

function Ambulance() {

  const [ambulanceInfo,setAmbulanceInfo]=useState([])
  const [filterData,setFilterData]=useState([])
  const [address,setLocation]=useState("")

  useEffect(()=>{
    const getAmbulanceDetail= async()=>{
      try{
        const response=await axios.get('http://localhost:8080/api/getAmbulanceData')
        console.log("ambulance data are:",response.data)
        setAmbulanceInfo(response.data)
        setFilterData(response.data)
      }catch(err){
        console.log("err")
      }
      }
      getAmbulanceDetail()
  },[])

const filterDataByDistrict = () => {
  console.log("Filtering by district with address:", address);

  setFilterData(ambulanceInfo)

  // Make sure the return statement is present in the filter callback
  const filtered = ambulanceInfo.filter((data) =>
    data.address.location.toLowerCase().includes(address.toLowerCase())
  );

  // Update the state with the filtered results
  setFilterData(filtered);

  // Log the filtered results directly instead of the state
  console.log("Filtered data:", filtered);
};


  return (
    <Container className='border' style={{paddingTop:'30px'}}> 
      <div className='ambulanceCon'>
        <div className='topTitle'>
          <p className='pp p21 p-0 m-0'>Available Ambulance</p>
          <p className='pp p22 p-0 m-0'>Find Ambulance</p>
        </div>
        <div className='search'>
          <TextField
            label='Search By District'
            name='district'
            value={address}
            onChange={(e)=>setLocation(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={filterDataByDistrict}>
                    <FaSearch style={{ color: 'black', fontSize: '16px' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <Row className='d-flex justify-content-center p-3  m-4'>
        <Col lg={7} className='d-flex flex-column dataSlide p-4' style={{ gap: '10px' }}>

        {
          filterData.map((data)=>(
            <AmbulanceMsg key={data.id} info={data}/>
          ))
        }
          

        </Col>
      </Row>
    </Container>
  );
}

export default Ambulance;
