import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './component/body/Body';
import NavbarTop from './component/navbar/NavbarTop';
import Footer from './component/footer/Footer';
import CallAmbulance from './component/requestAmbulance/CallAmbulance';
import BloodCampaign from './component/participateBloodCampaign/BloodCampaign';
import Profile from './component/profileInfo/Profile';
import { Route, Routes } from 'react-router-dom';
import Services from './component/oservices/Services';
import Desc from './component/description2.0/Desc';
import Service2 from './component/service2/Service2';
import Login from './component/login/Login';
import Registration from './component/registrationForm/Registration';


function App() {
  return (
    <>
    <NavbarTop/>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='campaign' element={<BloodCampaign/>}/>
      <Route path='ambulance' element={<CallAmbulance/>}/>
      <Route path='register' element={<Registration/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
    {/* <Service2/> */}
    {/* <Services/> */}
    {/* <Desc/> */}
    {/* <Footer/> */}
    {/* <Login/> */}
    {/* <Registration/> */}
    </>
  )
}

export default App
