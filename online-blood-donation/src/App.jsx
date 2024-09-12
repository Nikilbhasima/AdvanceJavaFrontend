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
import Ambulance from './component/ambulanceRequest/Ambulance';
import AboutUs from './component/aboutUs/AboutUs';
import RequestDonor from './component/requestDonor/RequestDonor';
import SubRequest1 from './component/requestDonor/subRequest1/SubRequest1';
import SubRequest2 from './component/requestDonor/subRequest2/SubRequest2';
import BecomeDonor from './component/becomeDonor/BecomeDonor';
import History from './component/history/History';
import DonationHistory from './component/history/donationHistory/DonationHistory';
import RequestHistory from './component/history/requestHistory/RequestHistory';


function App() {
  return (
    <>
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
    {/* <Footer/> */}

    {/* <Service2/> */}
    {/* <Services/> */}
    {/* <Desc/> */}
    {/* <Login/> */}
    {/* <Registration/> */}
    {/* <Ambulance/> */}
    {/* <RequestDonor/> */}
    </>
  )
}

export default App
