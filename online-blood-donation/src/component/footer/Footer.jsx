import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/blood-drop.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";

function Footer() {
  return (
  
    <Container fluid className='border mt-3 footer-body'>
        <Row className='d-flex justify-content-center footer-con g-3'>
            <Col className='d-flex justify-content-center flex-column' lg={3} sm={6}>
            {/* <img src={logo} alt="" className='logo-img' /> */}
            <h1 className='app-name'>Blood Link</h1>
            <p style={{color:"#fff",fontSize:"16px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus veniam dolor nulla culpa ex minima nesciunt asperiores quaerat eligendi!       </p>
            </Col>
            <Col  className='sub-footer-con' lg={2} sm={6}>
                <h1 className="footer-header">Contacts</h1>
                <div className="numbers">+977 98 1234567</div>
                <div className="numbers">+977 98 1234509</div>
                <div className="numbers">+977 9812345678</div>
            </Col>
            <Col  className='sub-footer-con'lg={2} sm={6}>
            <h1 className="footer-header">Quick Links</h1>
                <ul class="quick-link">
                    <li className="quick-li"><a href="#" class="quick-a">Home</a></li>
                    <li className="quick-li"><a href="#" class="quick-a">Profile</a></li>
                    <li className="quick-li"><a href="#" class="quick-a">History</a></li>
                    <li className="quick-li"><a href="#" class="quick-a">About Us</a></li>
                </ul>
            </Col>
            <Col className='sub-footer-con' lg={2} sm={6}>
            <h1 class="footer-header">Follow Us</h1>
                <div class="socila-media">
                    <a href="#" class="media">
                      <FaFacebook  className='footer-icon'/>
                    </a>
                    <a href="#" class="media">
                    <IoLogoInstagram className='footer-icon' />
                    </a>
                    <a href="#" class="media">
                    <FaThreads className='footer-icon' />
                    </a>
                </div>
            </Col>
        </Row>
        <hr  style={{color:"#fff"}}/>
        <Row style={{padding:'15px',opacity:'0.5'}} >
            <p style={{textAlign:'center',color:"#fff"}}>Copyright2024</p>
        </Row>
    </Container>

  );
}

export default Footer;
