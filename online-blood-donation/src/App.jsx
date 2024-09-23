import React, { useContext, useState } from 'react'
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
import Ambulance from './component/ambulanceRequest/Ambulance';
import AboutUs from './component/aboutUs/AboutUs';
import RequestDonor from './component/requestDonor/RequestDonor';
import SubRequest1 from './component/requestDonor/subRequest1/SubRequest1';
import SubRequest2 from './component/requestDonor/subRequest2/SubRequest2';
import BecomeDonor from './component/becomeDonor/BecomeDonor';
import History from './component/history/History';
import DonationHistory from './component/history/donationHistory/DonationHistory';
import RequestHistory from './component/history/requestHistory/RequestHistory';
import Dashboard from './adminComponent/dashboard/Dashboard';
import SetAmbulance from './adminComponent/setAmbulance/SetAmbulance';

import { Nav } from 'react-bootstrap';
import SetCampaign from './adminComponent/setCampaign/SetCampaign';
import { AuthContext } from './ProviderContext/AuthProvider';
import AdminHome from './adminComponent/adminHome/AdminHome';


function App() {
  // const [role,setRole]=useState("admin")
  const {role,setRole}=useContext(AuthContext)
  return (
    <>

    {role==null && (
      <div>
 <NavbarTop/> 
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='campaign' element={<BloodCampaign/>}/>
        <Route path='register' element={<Registration/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='ambulance' element={<Ambulance/>}/>
        <Route path='aboutUs' element={<AboutUs/>}/>
        <Route path='requestDonor' element={<RequestDonor/>}>
            <Route index element={<SubRequest1/>}/> 
            <Route path='subRequest1' element={<SubRequest1/>}/>
            <Route path='subRequest2' element={<SubRequest2/>}/>
        </Route>
        <Route path="donate" element={<BecomeDonor/>}/>
        <Route path='history' element={<History/>}>
          <Route index element={<RequestHistory/>}/>
            <Route path="reqHis" element={<RequestHistory/>}/>
            <Route path="donHis" element={<DonationHistory/>}/>
        </Route>
      </Routes>
      </div>
    )}

    {role==="admin" && (
      <div style={{overflow:'hidden'}}>
        <AdminHome/>
        </div>
      
    )}

    {role==="user" && (
      <div>
        <NavbarTop/> 
          <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='campaign' element={<BloodCampaign/>}/>
            <Route path='register' element={<Registration/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='ambulance' element={<Ambulance/>}/>
            <Route path='aboutUs' element={<AboutUs/>}/>
            <Route path='requestDonor' element={<RequestDonor/>}>
                <Route index element={<SubRequest1/>}/> 
                <Route path='subRequest1' element={<SubRequest1/>}/>
                <Route path='subRequest2' element={<SubRequest2/>}/>
            </Route>
            <Route path="donate" element={<BecomeDonor/>}/>
            <Route path='history' element={<History/>}>
              <Route index element={<RequestHistory/>}/>
                <Route path="reqHis" element={<RequestHistory/>}/>
                <Route path="donHis" element={<DonationHistory/>}/>
            </Route>
          </Routes>
      </div>
    )}

    {/* {role==="user"?(
      <div>     
         <NavbarTop/> 
          <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='campaign' element={<BloodCampaign/>}/>
            <Route path='register' element={<Registration/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='ambulance' element={<Ambulance/>}/>
            <Route path='aboutUs' element={<AboutUs/>}/>
            <Route path='requestDonor' element={<RequestDonor/>}>
                <Route index element={<SubRequest1/>}/> 
                <Route path='subRequest1' element={<SubRequest1/>}/>
                <Route path='subRequest2' element={<SubRequest2/>}/>
            </Route>
            <Route path="donate" element={<BecomeDonor/>}/>
            <Route path='history' element={<History/>}>
              <Route index element={<RequestHistory/>}/>
                <Route path="reqHis" element={<RequestHistory/>}/>
                <Route path="donHis" element={<DonationHistory/>}/>
            </Route>
          </Routes>
    </div>

    ):(
      <div style={{overflow:'hidden'}}>
       <AdminHome/>
      </div>
    )} */}
    
    </>
  )
}

export default App
