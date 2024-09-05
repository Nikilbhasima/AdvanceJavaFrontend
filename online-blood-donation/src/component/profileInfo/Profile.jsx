import React from 'react'
import './Profile.css'
import { Col, Container, Row } from 'react-bootstrap'
import profileImg from '../../assets/profile.jpg'
import CustomButton from '../ButtonPack/CustonButtton'

function Profile() {
    const edit={
        backGround:"#DE1C1C",
        name:"Edit",
        hoverColor:"#fff",
        fontColor:"#fff"
      }
  return (
    <Container className='profileCon'>
        <Row className='d-flex justify-content-center gap-4 p-3' >
            {/* profile information */}
            <Col className='border profile-data ' lg={3}>
            <div className='d-flex justify-content-center'>
                <img src={profileImg} alt="profile picture"  className='profile-picture' />
            </div>
            <div class="user-info">
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">User Name</p>
                             <p class="m-0 actual-data">Nikil Bhasima</p>
                        </div>
                        <div class="right-part">
                            <p class="m-0 data-tile">Blood Group</p>
                             <p class="m-0 actual-data">A+</p>
                        </div>
                    </div>
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">Location</p>
                             <p class="m-0 actual-data">Madhyapur,Thimi</p>
                        </div>
                        <div class="right-part">
                            <p class="m-0 data-tile">Phone Number</p>
                             <p class="m-0 actual-data">9808029931</p>
                        </div>
                    </div>
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">Date of Birth</p>
                             <p class="m-0 actual-data">12-03-2004</p>
                        </div>
                        <div class="right-part">
                            <p class="m-0 data-tile">Gender</p>
                             <p class="m-0 actual-data">Male</p>
                        </div>
                    </div>
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">Email</p>
                             <p class="m-0 actual-data">nikilbhasima474@gmail.com</p>
                        </div>
                    </div>
                </div>
            </Col>
            {/* edit options */}
            <Col className=' d-flex flex-column justify-content-around gap-4 ' lg={3}>
            <Row className='border d-flex flex-direction-column' style={{borderRadius:"10px",padding:"15px"}}>
                <p style={{fontFamily:"serif",fontSize:"16px",opacity:"0.5"}}>Edit Profile</p>
                <hr />
                <div className='d-flex justify-content-between align-items-center mt-1'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Edit password</p>
                    <CustomButton buttonName={edit}/>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Update Profile</p>
                    <CustomButton buttonName={edit} />
                </div>
            </Row>
            <Row className='border d-flex flex-direction-column' style={{borderRadius:"10px",padding:"15px"}}>
                <p style={{fontFamily:"serif",fontSize:"16px",opacity:"0.5"}}>Edit Profile</p>
                <hr />
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Total Request</p>
                    <span>10</span>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Total Blood Donation</p>
                    <span>10</span>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Total Blood Campaign Participation</p>
                    <span>10</span>
                </div>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Profile