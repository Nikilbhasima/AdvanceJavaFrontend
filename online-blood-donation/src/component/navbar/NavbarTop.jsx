import React, { useContext } from 'react';
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
import { AuthContext } from '../../ProviderContext/AuthProvider';
function NavbarTop() {

  const {isLogin,setIsLogin}=useContext(AuthContext)
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
        setIsLogin(false)
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
            <Nav.Link as={Link} to="/" className='navlink'>Home</Nav.Link>

            {isLogin?(<div className='d-flex'>
              <Nav.Link as={Link} to="profile" className='navlink'>Profile</Nav.Link>
              <Nav.Link as={Link} to="history" className='navlink'>History</Nav.Link>
            </div>):
            (null)}
            


            <Nav.Link as={Link} to="aboutUs" className='navlink'>About Us</Nav.Link>
          </Nav>
          <div className="buttons">  

            {isLogin?(<a onClick={handleLogout} >
            <CustomButton buttonName={RegisterBtnProperty} />
            </a>):
            ( <Link to="login"><CustomButton buttonName={loginBtnProperty}/></Link>)}        
           
          
          {/* <Link to="register"><CustomButton buttonName={RegisterBtnProperty}/></Link> */}

          {/* <button onClick={handleLogout} style={{background:'transparent',padding:'0'}}> */}
            
          
          {/* </button> */}
          
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;