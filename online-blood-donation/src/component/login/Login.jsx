import React, { useState } from 'react';
import './Login.css';
import { FaArrowLeft } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IconButton, InputAdornment } from '@mui/material';
import CustomButton from '../ButtonPack/CustonButtton';
import { Link } from 'react-router-dom';
import { Col, Container,Row } from 'react-bootstrap';
import google from '../../assets/google.png'
import loginFront from '../../assets/loginFront.webp'

function Login() {
  // State for managing visibility of the password
  const [visible, setVisible] = useState(false);
  // States for managing input values
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  // States for managing input errors
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Component for password visibility toggle
  const EndAdornment = ({ visible, setVisible }) => {
    return (
      <InputAdornment position='end'>
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <FaRegEye /> : <FaRegEyeSlash />}
        </IconButton>
      </InputAdornment>
    );
  };

  const loginBtnProperty = {
    backGround: "#DE1C1C",
    name: "Login",
    hoverColor: "#fff",
    fontColor: "#fff"
  };

  const validateInputs = () => {
    let isValid = true;
    setPhoneError('');
    setPasswordError('');
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setPhoneError('Phone number must be 10 digits.');
      isValid = false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      isValid = false;
    }

    return isValid;
  };

  // Submit handler for the form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log('Form submitted successfully!');
    }
  };

  return (

    <Container>
      <Row className='d-flex justify-content-center loginCon '>
        {/* this is first column */}
        <Col className='border leftCon p-0 m-0' lg={4} md={4} sm={10} style={{borderRadius:'10px 0 0 10px'}}>        
          <img src={loginFront} alt="This is login front" className='loginFront' />
        </Col>
        {/* this is second column */}
        <Col className='border loginForm d-flex flex-column gap-3 rightCon' lg={4} md={4} sm={10} style={{borderRadius:'0 10px 10px 0'}} >
        <div className='topLayer'>
          <Link>
          <FaArrowLeft style={{ fontSize: '20px' }} />
          </Link>
          <p className='loginTitle'>Login</p>
        </div>
        <form action="#" className='formCon' onSubmit={handleSubmit}>
          <TextField
            id="phone-number"
            label="Phone Number"
            className='inputField'
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={!!phoneError}
            helperText={phoneError}
          />
          <TextField
            id="password"
            label="Password"
            className='inputField'
            type={visible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: <EndAdornment visible={visible} setVisible={setVisible} />
            }}
            error={!!passwordError}
            helperText={passwordError}
          />
          <CustomButton buttonName={loginBtnProperty} />
        </form>
        <p className='register m-0 p-0'>Don't have account? <Link>Register</Link></p>
        <div className='divider'>
          <div className='line'></div>
          <p className='p-0 m-0 other'>SignUp with other</p>
          <div className='line'></div>
        </div>
        <div className='otherApp'>
          <img src={google} alt="login with google" className='logo' />
          <p className='p-0 m-0 appName'>Login with <span className='sG'>Google</span></p>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
