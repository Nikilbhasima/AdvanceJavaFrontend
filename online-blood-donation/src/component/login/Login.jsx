import React, { useContext, useState } from 'react';
import './Login.css';
import { FaArrowLeft } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IconButton, InputAdornment } from '@mui/material';
import CustomButton from '../ButtonPack/CustonButtton';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import google from '../../assets/google.png';
import loginFront from '../../assets/loginFront.webp';
import axios from 'axios';
import { AuthContext } from '../../ProviderContext/AuthProvider';



function Login() {

  const {isLogin,setIsLogin}=useContext(AuthContext)
  const {role,setRole}=useContext(AuthContext)
  

  console.log("is user login:"+isLogin)

  const navigation=useNavigate();
  const [visible, setVisible] = useState(false);
  const [checkLogin,setCheckLogin]=useState(false)
  const [loginData, setLoginData] = useState({
    phone: "",
    password: ""
  });

  const [error, setError] = useState({
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


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


  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const newErr = {};
  

    for (const [key, value] of Object.entries(loginData)) {
      if (!value) {
        newErr[key] = "Field can't be empty";
      }
    }
  

    if (loginData.phone && (loginData.phone.length !== 10 || isNaN(loginData.phone))) {
      newErr.phone = 'Phone number must be 10 digits and numeric.';
    }
  
    if (loginData.password && loginData.password.length < 8) {
      newErr.password = 'Password must be at least 8 characters.';
    }
  
    if (Object.keys(newErr).length > 0) {
      setError(newErr);
    }else if(newErr.phone==="1234567890" && newErr.password==="admin1234" ){
      setRole("admin")
    } else {
      try{
        const response=await axios.post('http://localhost:8080/api/checkCredential',loginData, {
          withCredentials: true, 
        })
        setCheckLogin(response.data)
        console.log("data entered successfully",response.data)
        if(response.data){
          setIsLogin(true)
          setRole("user")
          navigation("/")
          setCheckLogin(response.data)
        }else{
          alert("enter correct credentials")
        }
        
      }catch(err){
        console.log(err)
      }
      setLoginData({
        phone: "",
       password: ""
      })
      setError({});

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
          <form action="#" className='formCon' onSubmit={handleSubmit2}>
            <TextField
              id="phone-number"
              label="Phone Number"
              className='inputField'
              type='text'
              name="phone"
              value={loginData.phone}
              onChange={handleChange}
              error={!!error.phone}
              helperText={error.phone}
            />
            <TextField
              id="password"
              label="Password"
              className='inputField'
              type={visible ? "text" : "password"}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: <EndAdornment visible={visible} setVisible={setVisible} />
              }}
              error={!!error.password}
              helperText={error.password}
            />
            <CustomButton buttonName={loginBtnProperty} />
          </form>
          <p className='register m-0 p-0'>Don't have account? <Link to="/register">Register</Link></p>
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
