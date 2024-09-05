
import React, { useState } from 'react';
import './Registration.css';
import TextField from '@mui/material/TextField';
import { Col, Container, Row } from 'react-bootstrap';
import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import CustomButton from '../ButtonPack/CustonButtton';
import registration from '../../assets/registration.jpg'
import axios from 'axios';

function Registration() {
  
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
    confirm: ""
  });

  // State to handle errors
  const [errors, setErrors] = useState({
    username: "",
    bloodGrp: "",
    address: "",
    date: "",
    phone: "",
    gmail: "",
    password: "",
    confirm: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
  
    // Required fields
    for (const [key, value] of Object.entries(userDetail)) {
      if (!value) newErrors[key] = "This field is required";
    }
  
    // Phone number validation
    if (userDetail.phone.length !== 10 || isNaN(userDetail.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
  
    // Email validation
    if (!/\S+@\S+\.\S+/.test(userDetail.gmail)) {
      newErrors.gmail = "Invalid email address.";
    }
  
    // Password length validation
    if (userDetail.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
  
    // Password match validation
    if (userDetail.password !== userDetail.confirm) {
      newErrors.confirm = "Passwords do not match.";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // No validation errors, proceed with data submission
      try {
        const response = await axios.post('http://localhost:8080/api/insertData', userDetail);
        console.log('Data inserted successfully:', response.data);
  
        // Optionally, reset form after successful submission
        setUserDetail({
          // reset the form fields here if needed
          username: '',
          bloodGrp:'',
          address:'',
          date:'',
          phone: '',
          gmail: '',
          password: '',
          confirm: ''
        });
        setErrors({}); // Clear errors
      } catch (error) {
        console.error('Error inserting data:', error);
        // Optionally, handle error state here
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

  // this is for styling the button
    const loginBtnProperty = {
    backGround: "#DE1C1C",
    name: "Registeration",
    hoverColor: "#fff",
    fontColor: "#fff"
    };

  return (
    <Container>
      <Row className='d-flex justify-content-center regCon'>
        <Col className='border leftCon p-0 m-0' lg={3}>
          <img src={registration} alt="regsitration img"  className='regImg'/>
        </Col>
        <Col className='border rightCon' lg={5}>
          <div className='top-layer'>
            <p className='registrationTitle'>Registration</p>
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
                  <MenuItem value="Kathmandu">Kathmandu</MenuItem>
                  <MenuItem value="Lalitput">Lalitput</MenuItem>
                  <MenuItem value="Bhaktapur">Bhaktapur</MenuItem>
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
