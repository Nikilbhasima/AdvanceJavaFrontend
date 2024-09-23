import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Col, Container, FormControl, FormLabel, Row } from 'react-bootstrap'
import profileImg from '../../assets/profile.jpg'
import CustomButton from '../ButtonPack/CustonButtton'
import axios from 'axios'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, Select, MenuItem, InputAdornment, IconButton, FormControlLabel, Radio, RadioGroup } from '@mui/material';


function Profile() {
    const [isThere,setIsThere]=useState("")
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [address,SetAddress]=useState([])
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [credential,setCredential]=useState(false)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };

    const [userDetail, setUserDetail] = useState({
        username: "",
        bloodGrp: "",
        address: "",
        date: "",
        phone: "",
        gmail: "",
        gender:"",
        imgData:""
      });

      const [changeDetail, setChangeDetail] = useState({
        username: "",
        bloodGrp: "",
        address: "",
        date: "",
        phone: "",
        gmail: "",
        gender:"",
      });

    const handleDetailChange= (e)=>{
      const {name,value}=e.target;
      const updatedValue = name === 'address' ? Number(value) : value;
      setChangeDetail((pre)=>({
        ...pre,
        [name]:updatedValue
      }))
    }
    console.log(userDetail)
    console.log(changeDetail)

    const handleDetailSubmit= async (e)=>{
      
      e.preventDefault()
      try{
        const response=await axios.post('http://localhost:8080/api/changeUserDetail',changeDetail, {
          withCredentials: true, 
        })
        alert("Profile updated Successfully")
        handleClose2()
        getUserData()
      }catch(err){
        console.log(err)
        console.log("data didn't each database")
      }
    }


    // State for the current password input
  const [changePassword, setChangePassword] = useState({
    password: "",
  });

  // Handler for updating the current password state
  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setChangePassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // State for the new password and confirmation input
  const [changePassword2, setChangePassword2] = useState({
    password: "",
    confirm: "",
  });

  // Handler for updating the new password and confirmation state
  const handleChangePassword2 = (e) => {
    const { name, value } = e.target;
    setChangePassword2((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Effect hooks for logging state changes, useful for debugging
  useEffect(() => {
    console.log("Updated changePassword state:", changePassword);
  }, [changePassword]);

  useEffect(() => {
    console.log("Updated changePassword2 state:", changePassword2);
  }, [changePassword2]);

  // Handler for submitting the password change form
  const submitChangePassword = (e) => {
    e.preventDefault();
    if (changePassword2.password === changePassword2.confirm) {
      updatePass(changePassword2.password);
    } else {
      alert("Please enter the same passwords");
    }
  };

  // Function to send the new password to the backend
  const updatePass = async (newPassword) => {
    try {
      console.log("Attempting to change password:", newPassword);
      const response = await axios.post('http://localhost:8080/api/changePassword', { password: newPassword }, {
        withCredentials: true, 
      });


      if (response.data) {
        alert("Password changed successfully");
        setCredential(false); 
        handleClose(); 
        setChangePassword({ password: '' });
        setChangePassword2({ password: '', confirm: '' });
      }
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };
    
///////
    const checkUser=async(e)=>{
      e.preventDefault()
      try{
        const response=await axios.post('http://localhost:8080/api/checkPassword',changePassword, {
          withCredentials: true, // include credentials
        })
        
        if(response.data){
          setCredential(response.data);
          setChangePassword({password:''})
        }
        if(!response.data){
          alert("enter correct password")
        }

        // setChangePassword({})

      }catch(err){
        console.log(err)
        console.log("enter correct credetial")
      }

    }
    
    const imageSrc = userDetail.imgData ? `data:image/jpeg;base64,${userDetail.imgData}` : null;
    const [img,setImg]=useState()
    const [preview,setPreview]=useState()

    const handleChange=(e)=>{
        const file=e.target.files[0]
        setImg(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleSubmit=async(e)=>{
      e.preventDefault()
        if(!img){
            alert('please select image to upload')
        }
        const formData = new FormData();
        formData.append('imgData', img);
        try{
            setUserDetail({...userDetail,imgData:img})
            const response= await axios.post('http://localhost:8080/api/upload',formData,{
              headers: {
                'Content-Type': 'multipart/form-data',
              },withCredentials: true,
            }
              
            )

        }catch(error){
            console.log(err)
            console.log("img failed to upload")
        }
    }
    const edit={
        backGround:"#DE1C1C",
        name:"Edit",
        hoverColor:"#fff",
        fontColor:"#fff"
      }


    //   for data retreival 

    const getUserData= async()=>{
        try{
            const response=await axios.get('http://localhost:8080/api/getUserData', {
              withCredentials: true, 
            })
            setUserDetail(response.data)
            setChangeDetail(response.data)
        }catch(err){
            console.log(err)
            console.log("data not retrieved")
        }
    }
    const fetchAddresses = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/address', {
            withCredentials: true, // include credentials
          });
          SetAddress(response.data)
        } catch (err) {
          console.error('Data not retrieved:', err);
        }
      };
console.log(address)
    useEffect(()=>{
        fetchAddresses()
        getUserData()
        getUserAvailability()
    },[])


    const EndAdornment = ({ visible, setVisible }) => (
        <InputAdornment position='end'>
          <IconButton onClick={() => setVisible(!visible)}>
            {visible ? <FaRegEye /> : <FaRegEyeSlash />}
          </IconButton>
        </InputAdornment>
      );
      const EndAdornment2 = ({ visible2, setVisible2 }) => (
        <InputAdornment position='end'>
          <IconButton onClick={() => setVisible2(!visible2)}>
            {visible2 ? <FaRegEye /> : <FaRegEyeSlash />}
          </IconButton>
        </InputAdornment>
      );
      const EndAdornment3 = ({ visible3, setVisible3 }) => (
        <InputAdornment position='end'>
          <IconButton onClick={() => setVisible3(!visible3)}>
            {visible3 ? <FaRegEye /> : <FaRegEyeSlash />}
          </IconButton>
        </InputAdornment>
      );

      const getUserAvailability=async()=>{
        try{
            const response=await axios.get('http://localhost:8080/api/getUserData',{withCredentials: true})
            console.log("is this",response.data.availability);
            setIsThere(response.data)
        }catch(err){
            console.log(err)
            console.log("user status is not fetched")
        }
    }


    const makeAvailable=async()=>{
      try{
        const response=await axios.put('http://localhost:8080/api/makeAvailable',{},{withCredentials: true})
      }catch(err){
        console.log(err)
      }
    }

    const makeUnavailable=async()=>{
      try{
        const response=await axios.put('http://localhost:8080/api/makeUnavailable',{},{withCredentials: true})
      }catch(err){
        console.log(err)
      }
    }

    const [count,setCount]=useState()

    const numberOfRequest=async()=>{
      try{
        const response=await axios.get('http://localhost:8080/api/numberOfParticipation',{withCredentials: true})
        console.log("this is count",response.data)
        setCount(response.data)
      }catch(err){
        console.log(err)
      }
    }

    const [count1,setCount1]=useState()
    const numberOfDonation=async ()=>{
      try{
        const response=await axios.get('http://localhost:8080/api/numberOfBloodDonation',{withCredentials: true})
        console.log("how many time participated:",response.data)
        setCount1(response.data)
      }catch(err){
        console.log(err)
      }
    }
useEffect(()=>{
 numberOfRequest()
 numberOfDonation()
},[])



  return (
    <Container className='profileCon '>
        <Row className='d-flex justify-content-center gap-4 p-3 border' >
            {/* profile information */}
            <Col className='border profile-data ' lg={3}>
            <div className='d-flex align-items-center img-conw flex-column gap-3'>
                {imageSrc?<img src={imageSrc} alt="profile picture"  className='profile-picture' />:
                <img src={preview} alt="profile picture"  className='profile-picture' />
                }
                <form onSubmit={handleSubmit} className='d-flex  p-0 m-0' style={{overflow:'hidden'}} encType='multipart/form-data'>
                    <input type="file" onChange={handleChange} className='p-0 m-0'/>
                    <input type="submit" value="Upload"   className='p-1 m-0' />
                </form>
            </div>
            <div class="user-info">
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">User Name</p>
                             <p class="m-0 actual-data">{userDetail.username}</p>
                        </div>
                        <div class="right-part">
                            <p class="m-0 data-tile">Blood Group</p>
                             <p class="m-0 actual-data">{userDetail.bloodGrp}</p>
                        </div>
                    </div>
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">Location</p>
                             <p class="m-0 actual-data">{userDetail.address}</p>
                        </div>
                        <div class="right-part">
                            <p class="m-0 data-tile">Phone Number</p>
                             <p class="m-0 actual-data">{userDetail.phone}</p>
                        </div>
                    </div>
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">Date of Birth</p>
                             <p class="m-0 actual-data">{userDetail.date}</p>
                        </div>
                        <div class="right-part">
                            <p class="m-0 data-tile">Gender</p>
                             <p class="m-0 actual-data">{userDetail.gender}</p>
                        </div>
                    </div>
                    <div class="data">
                        <div class="left-part">
                            <p class="m-0 data-tile">Email</p>
                             <p class="m-0 actual-data">{userDetail.gmail}</p>
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
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Edit Profile</p>
                    <Button variant="outlined" onClick={handleClickOpen2}>
                               Change UserDetails
                          </Button>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Edit Password</p>
                            <Button variant="outlined" onClick={handleClickOpen}>
                               Change Password
                          </Button>
                </div>
            </Row>
            <Row className='border d-flex flex-direction-column' style={{borderRadius:"10px",padding:"15px"}}>
                <p style={{fontFamily:"serif",fontSize:"16px",opacity:"0.5"}}>Edit Profile</p>
                <hr />
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Total Request</p>
                    <span>{count}</span>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Total Blood Donation</p>
                    <span>{count1}</span>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <p style={{fontFamily:"serif",fontSize:"16px"}}>Total Blood Campaign Participation</p>
                    <span>10</span>
                </div>
            </Row>

            <Row className='border' style={{borderRadius:"10px",padding:"15px"}}>
              {isThere.availability!="no"?
              ( <div>
                <p>Make Yourself unavailable</p>
                <button style={{background:'red',color:'white'}} onClick={makeUnavailable}>Unavailable</button>
                </div>):
                (<div>
                  <p>Make Yourself available</p>
                  <button style={{background:'red',color:'white'}} onClick={makeAvailable}>Available</button>
                   </div>)}
            </Row>
            </Col>
        </Row>

{/* this dialog is for user password update */}
      <Dialog open={open} onClose={handleClose}   maxWidth="xs"  fullWidth={true} >
        {!credential?
        <div>  <DialogTitle>Current Password</DialogTitle>
        <DialogContent>
          <p>Enter your current password</p>
          <form className='d-flex flex-column gap-2' onSubmit={checkUser}>
          <TextField
                id="full-name"
                label="Current Password"
                className='inputField'
                fullWidth
                value={changePassword.password}
                onChange={handleChangePassword}
                name="password"
                type={visible ? "text" : "password"}
                InputProps={{
                    endAdornment: <EndAdornment visible={visible} setVisible={setVisible} />
                  }}
              />
              <input type="submit" value="Submit" style={{color:'white',borderRadius:'10px',padding:'12px 32px',fontSize:'12px',backgroundColor:'red',width:'fit-content'}}/>
          </form>
        </DialogContent></div>:
        <div>
        <DialogTitle>Password Change</DialogTitle>
        <DialogContent>
          <p>Enter your Your new Password</p>
          <form className='d-flex flex-column gap-2' onSubmit={submitChangePassword} >
          <TextField
                id="full-name"
                label="New Password"
                className='inputField'
                type={visible2 ? "text" : "password"}
                InputProps={{
                    endAdornment: <EndAdornment2 visible2={visible2} setVisible2={setVisible2} />
                  }}
                fullWidth
                name="password"
                value={changePassword2.password}
                onChange={handleChangePassword2}
              />
              <TextField
                id="full-name"
                label="Confirm Password"
                className='inputField'
                type={visible3 ? "text" : "password"}
                InputProps={{
                    endAdornment: <EndAdornment3 visible3={visible3} setVisible3={setVisible3} />
                  }}
                fullWidth
                name="confirm"
                value={changePassword2.confirm}
                onChange={handleChangePassword2}
              />
              <input type="submit" value="Change" style={{color:'white',borderRadius:'10px',padding:'12px 32px',fontSize:'12px',backgroundColor:'red',width:'fit-content'}}/>
          </form>
        </DialogContent>
            </div>}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

{/* this dialog is for user details update */}
      <Dialog open={open2} onClose={handleClose2}   maxWidth="xs"  fullWidth={true} >
        <div>  <DialogTitle>Enter new User Detail</DialogTitle>
        <DialogContent>
          <p>Please enter your correct details</p>
          <form className='d-flex flex-column gap-3' onSubmit={handleDetailSubmit}>
            <div className='d-flex gap-2' style={{flex:'1'}}>
            <TextField
                id="full-name"
                placeholder='Username'
                className='inputField'
                fullWidth
                name="username"
                type='text'
                value={changeDetail.username}
                onChange={handleDetailChange}
              />
           <select name="bloodGrp" style={{width:'94%',background:'white',color:'black',padding:'10px',borderRadius:'4px'}} value={changeDetail.bloodGrp} onChange={handleDetailChange}>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
           </select>
            </div>
            <div className='d-flex gap-2'>
            <TextField
                id="full-name"
                placeholder='Phone Number'
                className='inputField'
                fullWidth
                name="phone"
                type='text'
                value={changeDetail.phone}
                onChange={handleDetailChange}
              />
            <TextField
                id="full-name"
                placeholder='Gmail'
                className='inputField'
                fullWidth
                name="gmail"
                type='gmail'
                value={changeDetail.gmail}
                onChange={handleDetailChange}
              />
            </div>
            <div className='d-flex gap-2'>
            <select type="number" name="address" style={{width:'94%',background:'white',color:'black',padding:'10px',borderRadius:'4px'}} value={changeDetail.address} onChange={handleDetailChange}>
            {address.map((data)=>(
              <option key={data.id} value={data.id}>{data.location}</option>
            ))}
            </select>
            <TextField
                id="full-name"
                className='inputField'
                fullWidth
                name="date"
                type='date'
                value={changeDetail.date}
                onChange={handleDetailChange}
              />
            </div>

 
              <input type="submit" value="Update" style={{color:'white',borderRadius:'10px',padding:'12px 32px',fontSize:'12px',backgroundColor:'red',width:'fit-content'}}/>
          </form>
        </DialogContent></div>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      

    </Container>
  )
}

export default Profile