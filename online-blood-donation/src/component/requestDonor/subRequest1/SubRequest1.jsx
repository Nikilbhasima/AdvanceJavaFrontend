import React, { useEffect, useState } from 'react'
import './SubRequest1.css'
import { IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FormControl } from '@mui/material'
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import axios from 'axios';
import CustomButton from '../../ButtonPack/CustonButtton';
import { Col, Row } from 'react-bootstrap';


function SubRequest1() {

  const [requestDetail,setRequestDetail]=useState({
    patient:'',
    bloodGrp:'',
    addressId: '',
    unit:'',
    contact:'',
    phone:'',
    date:'',
    time:'',
    hospital:'',
    cases:''
  })

  const [errors,setErrors]=useState({
    patient:'',
    bloodGrp:'',
    addressId: '',
    unit:'',
    contact:'',
    phone:'',
    date:'',
    time:'',
    hospital:'',
    cases:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'unit' ? Number(value) : value;
  
    setRequestDetail((prev) => ({
      ...prev,
      [name]: updatedValue
    }));
  }
  

  // get address data from database
  const [address,setAddress]=useState([])
  const fetchAddresses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/address',{
        withCredentials: true,
      });
      setAddress(response.data)
      console.log('Data retrieved successfully:', response.data);
    } catch (err) {
      console.error('Data not retrieved:', err);
    }
  };
  useEffect(()=>{
    console.log("first")
    fetchAddresses(); 
  }, []); 

  // giving propterties to button
  const loginBtnProperty = {
    backGround: "#DE1C1C",
    name: "Request",
    hoverColor: "#fff",
    fontColor: "#fff"
    };

// form validation and sending data to database
    const handleSubmit= async (e)=>{
      e.preventDefault();

      const newErrors={};

      for(const [key,value] of Object.entries(requestDetail)){
        if(!value) newErrors[key]="This field is required"
      }

      if (requestDetail.phone.length !== 10 || isNaN(requestDetail.phone)) {
        newErrors.phone = "Phone number must be 10 digits.";
      }
      if(requestDetail.unit>5){
        newErrors.unit="You can't request blood more than 5 Pints"
      }

      if(Object.keys(newErrors).length>0){
        setErrors(newErrors)
        console.log("form not submited")
      }else{
        console.log(requestDetail)
        try{
          const response = await axios.post('http://localhost:8080/api/insertRequestBloodDetail',requestDetail,{
            withCredentials: true,
          });

          if(response.data){
            alert("request send successfully")
          }else{
            alert("Request failed please try again")
          }
          setRequestDetail({
            patient:'',
            bloodGrp:'',
            addressId: '',
            unit:'',
            contact:'',
            phone:'',
            date:'',
            time:'',
            hospital:'',
            cases:''
          })
          setErrors({})
        }catch(err){
          console.log(err)
        }
       
      }
    }
  return (
    <div>
      <p>Fill all the fields to request required blood with the whole Nepali Blood Donor Community. It 
      will help to find donor quickly.</p>

      <Row className='d-flex justify-content-center'>
        <Col lg={6}>
        <form action="#" className='regForm' onSubmit={handleSubmit}>
            <div className='inputCon d-flex gap-4'>
              <TextField
                id="full-name"
                label="Patient Name"
                className='inputField'
                type='text'
                fullWidth
                name="patient"
                value={requestDetail.patient}
                onChange={handleChange}
              error={!!errors.patient}
              helperText={errors.patient}
              />
              <FormControl fullWidth>
                <InputLabel>Blood Group</InputLabel>
                <Select
                  label="Blood Group"
                  name="bloodGrp"
                  value={requestDetail.bloodGrp}
                  onChange={handleChange}
                  error={!!errors.bloodGrp}
                >
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
                {errors.bloodGrp && <p className='error'>{errors.bloodGrp}</p>}
              </FormControl>
          </div>
          <div className='inputCon d-flex gap-4'> 
              <FormControl fullWidth>
                <InputLabel>Address</InputLabel>
                <Select
                  label="Address"
                  name="addressId"
                  value={requestDetail.addressId}
                  onChange={handleChange}
                  error={!!errors.addressId}      
                >
                   {address.map((add)=>(
                      <MenuItem key={add.id} value={add.id}>{add.location}</MenuItem>
                    )
                    )}
                </Select>
                {errors.addressId && <p className='error'>{errors.addressId}</p>}

              </FormControl>
              <TextField
                id="date"
                label="Required Blood"
                className='inputField'
                type='text'
                fullWidth
                name="unit"
                value={requestDetail.unit}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton >
                        Pints
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.unit}
                helperText={errors.unit}
              />
            </div>
          <div className='inputCon d-flex gap-4'>

              <TextField
                id="full-name"
                label="Contact Name"
                className='inputField'
                type='text'
                fullWidth
                name="contact"
                value={requestDetail.contact}
                onChange={handleChange}
                error={!!errors.contact}
                helperText={errors.contact}
              />
              <TextField
                id="full-name"
                label="Phone Number"
                className='inputField'
                type='text'
                fullWidth
                name="phone"
                value={requestDetail.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
          </div>
          <div className='inputCon d-flex gap-4'>
              <TextField
                id="full-name"
                className='inputField'
                type='date'
                fullWidth
                name="date"
                value={requestDetail.date}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton >
                        <BsCalendar2DateFill style={{ color: 'black', fontSize: '16px' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.date}
                helperText={errors.date}
              />
              <TextField
                id="full-name"
                className='inputField'
                type='time'
                fullWidth
                name="time"
                value={requestDetail.time}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton >
                        <IoIosTime style={{ color: 'black', fontSize: '16px' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.time}
                helperText={errors.time}
              />
          </div>
          <div className='inputCon d-flex gap-4'>
              <TextField
                id="full-name"
                label="Hospital Name"
                className='inputField'
                type='text'
                fullWidth
                name="hospital"
              value={requestDetail.hospital}
              onChange={handleChange}
                error={!!errors.hospital}
                helperText={errors.hospital}
              />
              <TextField
                id="full-name"
                label="Patient Case"
                className='inputField'
                type='text'
                fullWidth
                name="cases"
                value={requestDetail.cases}
                onChange={handleChange}
                error={!!errors.cases}
                helperText={errors.cases}
              />
          </div>
          <div className='d-flex justify-content-center btnCon'>
              <CustomButton buttonName={loginBtnProperty} />
            </div>
            
      </form>
        </Col>
      </Row>

      
    </div>
  )
}

export default SubRequest1;