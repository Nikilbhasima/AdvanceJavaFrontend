
import React, { useEffect, useState } from 'react';
import './Registration.css';
import TextField from '@mui/material/TextField';
import { Col, Container, FormLabel, Row } from 'react-bootstrap';
import { FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import CustomButton from '../ButtonPack/CustonButtton';
import registration from '../../assets/registration.jpg'
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
  
  const loginBtnProperty = {
    backGround: "#DE1C1C",
    name: "Registeration",
    hoverColor: "#fff",
    fontColor: "#fff"
    };
  const navigation=useNavigate()
  const [address,SetAddress]=useState([])
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [userDetail, setUserDetail] = useState({
    username: "",
    bloodGrp: "",
    address: "",
    date: "",
    phone: "",
    gmail: "",
    password: "",
    confirm: "",
    gender:""
  });

  const [errors, setErrors] = useState({
    username: "",
    bloodGrp: "",
    address: "",
    date: "",
    phone: "",
    gmail: "",
    password: "",
    confirm: "",
    gender:""
  });

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const newErrors = {};
  
    for (const [key, value] of Object.entries(userDetail)) {
      if (!value) newErrors[key] = "This field is required";
    }

    if (userDetail.phone.length !== 10 || isNaN(userDetail.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
  
    if (!/\S+@\S+\.\S+/.test(userDetail.gmail)) {
      newErrors.gmail = "Invalid email address.";
    }
  
    if (userDetail.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
  
    if (userDetail.password !== userDetail.confirm) {
      newErrors.confirm = "Passwords do not match.";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      try {
        console.log("why is this error occuring")
        const response = await axios.post('http://localhost:8080/api/setUser', userDetail, {
          headers: {
            'Content-Type': 'application/json'  // Explicitly set Content-Type
        },
          withCredentials: true,
        });
        console.log('Data inserted successfully:', response.data);
        setUserDetail({
          username: '',
          bloodGrp:'',
          address:'',
          date:'',
          phone: '',
          gmail: '',
          password: '',
          confirm: '',
          gender:''
        });
        setErrors({}); 
        navigation("/login")
      } catch (error) {
        console.log("what is the error")
        console.error('Error inserting data:', error);
        setErrors({ submit: 'Failed to submit form. Please try again.' });
      }
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value
    }));
  };
  

  const EndAdornment = ({ visible, setVisible }) => (
    <InputAdornment position='end'>
      <IconButton onClick={() => setVisible(!visible)}>
        {visible ? <FaRegEye /> : <FaRegEyeSlash />}
      </IconButton>
    </InputAdornment>
  );

    useEffect(()=>{
      console.log("first")
      const fetchAddresses = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/address', {
            withCredentials: true, // include credentials
          });
          SetAddress(response.data)
          console.log('Data retrieved successfully:', response.data);
          
        } catch (err) {
          console.error('Data not retrieved:', err);
        }
      };
  
      fetchAddresses();
    },[])

  return (
    <Container>
      <Row className='d-flex justify-content-center regCon'>
        <Col className='border leftCon p-0 m-0' lg={3}>
          <img src={registration} alt="regsitration img"  className='regImg'/>
        </Col>
        <Col className='border rightCon' lg={5}>
          <div className='top-layer d-flex align-items-center'>
            <Link to="/login">
            <FaArrowLeft style={{ fontSize: '20px' }} />
            </Link>
            <p className='registrationTitle m-auto'>Registration</p>
          </div>
          <form className='regForm' onSubmit={handleSubmit}>
            <div className='inputCon d-flex gap-4'>
              <TextField
                id="full-name"
                label="Full Name"
                className='inputField'
                type='text'
                fullWidth
                name="username"
                value={userDetail.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
              />
              <FormControl fullWidth>
                <InputLabel>Blood Group</InputLabel>
                <Select
                  label="Blood Group"
                  name="bloodGrp"
                  value={userDetail.bloodGrp}
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
                  name="address"      
                  value={userDetail.address}
                  onChange={handleChange}
                  error={!!errors.address}
                >
                   {address.map((address)=>(
                      <MenuItem key={address.id} value={address.id}>{address.location}</MenuItem>
                    )
                    )}
                </Select>
                {errors.address && <p className='error'>{errors.address}</p>}
              </FormControl>
              <TextField
                id="date"
                label=""
                className='inputField'
                type='date'
                fullWidth
                name="date"
                value={userDetail.date}
                onChange={handleChange}
                error={!!errors.date}
                helperText={errors.date}
              />
            </div>
            <div className='inputCon d-flex gap-4'>
              <TextField
                id="phone"
                label="Phone number"
                className='inputField'
                type='text'
                fullWidth
                name="phone"
                value={userDetail.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <TextField
                id="gmail"
                label="Gmail"
                className='inputField'
                type='email'
                fullWidth
                name="gmail"
                value={userDetail.gmail}
                onChange={handleChange}
                error={!!errors.gmail}
                helperText={errors.gmail}
              />
            </div>
            <div className='inputCon d-flex gap-4'>
              <TextField
                id="password"
                label="Password"
                className='inputField'
                type={visible ? "text" : "password"}
                fullWidth
                name="password"
                value={userDetail.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <EndAdornment visible={visible} setVisible={setVisible} />
                }}
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                id="confirm-password"
                label="Confirm Password"
                className='inputField'
                type={visible1 ? "text" : "password"}
                fullWidth
                name="confirm"
                value={userDetail.confirm}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <EndAdornment visible={visible1} setVisible={setVisible1} />
                }}
                error={!!errors.confirm}
                helperText={errors.confirm}
              />
            </div>
            <div className='inputCon d-flex '>
                <FormControl>
                  <FormLabel style={{fontSize:'16px'}} className='p-0 m-0'>Select Sex</FormLabel>
                  <RadioGroup name='gender' value={userDetail.gender} onChange={handleChange} className='d-flex flex-row p-0 m-0' >
                   
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other"/>
                  
                  </RadioGroup>
                </FormControl>
            </div>
            <div className='d-flex justify-content-center btnCon'>
              <CustomButton buttonName={loginBtnProperty} />
            </div>
            
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
