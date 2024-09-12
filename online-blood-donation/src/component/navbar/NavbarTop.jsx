import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from 'C:/coding/React-java-frontend/online-blood-donation/src/assets/blood-drop.png';
import CustomButton from '../ButtonPack/CustonButtton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function NavbarTop() {

  const navigation=useNavigate()
  const loginBtnProperty={
    backGround:"#DE1C1C",
    name:"Login",
    hoverColor:"#fff",
    fontColor:"#fff"
  }
  const RegisterBtnProperty={
    backGround:"#fff",
    name:"LogOut",
    hoverColor:"#DE1C1C",
    fontColor:"#DE1C1C"
  }

  const handleLogout= async ()=>{
    try{
      const response=await axios.post('http://localhost:8080/api/logout',{},{withCredentials: true})
      console.log(response.data)
      if(response.data){
        alert("You are logout")
        navigation("/login")
      }
    }catch(err){
      console.log(err)
      console.log("logout fail")
    }
  }
  return (
    <Navbar expand="lg" className="top-nav">
      <Container className='con' >
        <Navbar.Brand href="#">
          {/* <img src={LogoImg} alt="" className='logo-img' /> */}
          <h1 className='app_name'>Blood Link</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
            <Nav.Link as={Link} to="profile" className='nav-link'>Profile</Nav.Link>
            <Nav.Link as={Link} to="history" className='nav-link'>History</Nav.Link>
            <Nav.Link as={Link} to="aboutUs" className='nav-link'>About Us</Nav.Link>
          </Nav>
          <div className="buttons">          
           
           <Link to="login"><CustomButton buttonName={loginBtnProperty}/></Link>
          {/* <Link to="register"><CustomButton buttonName={RegisterBtnProperty}/></Link> */}

          {/* <button onClick={handleLogout} style={{background:'transparent',padding:'0'}}> */}
            <a onClick={handleLogout} >
            <CustomButton buttonName={RegisterBtnProperty} />
            </a>
          
          {/* </button> */}
          
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;