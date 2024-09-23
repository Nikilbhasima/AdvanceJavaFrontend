import React, { useEffect, useState } from 'react'
import './BloodCampaign.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import CampaignDetail from './campaignDetail/CampaignDetail'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';

function BloodCampaign() {

  const [campaingInfo,setCampaignInfo]=useState([]);

  const [chooseLocation,setChooseLocation]=useState([])

  const [locationName,setLocationName]=useState("")

  useEffect(()=>{
    console.log("first")
    const getData=async()=>{
      try{
        const response=await axios.get('http://localhost:8080/api/campaignData')
        console.log("your collected data is:",response.data)

        const currentDate = new Date(); 

      const filteredData = response.data.filter(campaign => {
        const campaignDate = new Date(campaign.date); 
        return currentDate.toDateString() === campaignDate.toDateString(); 
      });

        // setCampaignInfo(response.data)
        setCampaignInfo(filteredData)
        setChooseLocation(filteredData)
      }catch(err){
        console.log(err)
        console.log("lossing")
      }
    }
    getData()
  },[])

  const filterLocation=()=>{
    const filtered = campaingInfo.filter((data) => {
      if (data.address.location && typeof data.address.location === 'string') {
        return data.address.location.toLowerCase().includes(locationName.toLowerCase());
      }
      return false; // Exclude items with undefined or non-string location
    });
    setChooseLocation(filtered); // Update filtered campaigns
    console.log(filtered);
  }

  return (
    <Container className='border' style={{padding:'30px'}}>
      <div className='topCamCon'>
      <p className='title1'>Participate Blood Campaign</p>
        <div className='search'>
          <TextField
            label='Search By District'
            name='district'
            value={locationName}
            onChange={(e)=>setLocationName(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={filterLocation}>
                    <FaSearch style={{ color: 'black', fontSize: '16px' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        </div>
        <Row className='d-flex justify-content-center mt-2'>
        <Col className='partCampaign' lg={7}>
        {
          chooseLocation.map((data)=>(
            <CampaignDetail key={data.id} name={data.organization} location={data.address} veneue={data.venue} time={data.starting} date={data.date} phone={data.phoneN} gmail={data.gmail} ending={data.ending}/>
          ))
        }
        
        </Col>
        </Row>
        
    </Container>
  )
}

export default BloodCampaign