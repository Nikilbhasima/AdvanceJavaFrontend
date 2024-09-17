import React, { useEffect, useState } from 'react'
import './FromAmbulance.css'
import { Col, FormControl, Row } from 'react-bootstrap'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Hospital } from 'react-bootstrap-icons'
import axios from 'axios'

function FromAmbulance() {
    const [address,setAddress]=useState([])

const [formData,setFromData]=useState({
    hospital:'',
    hphone:'',
    address:'',
    driver:'',
    phoneD:[
        {
            id:"",
            phoneN:""
        },
        {
            id:"",
            phoneN:""
        }
    ]
})

const handleChange = (e, index) => {
    const { name, value } = e.target;
  
    if (name === 'phoneN') {

      const updatedPhoneD = [...formData.phoneD];
      updatedPhoneD[index] = {
        ...updatedPhoneD[index], 
        phoneN: value 
      };
      setFromData((pre) => ({
        ...pre,
        phoneD: updatedPhoneD 
      }));
    } else {
        const updatedValue = name === 'address' ? Number(value) : value;
      setFromData((pre) => ({
        ...pre,
        [name]: updatedValue
      }));
    }
  };
  
 

useEffect(()=>{
    console.log(formData)
},[formData])

const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(formData)
    try{
        const response=await axios.post('http://localhost:8080/api/insertAmbulanceData',formData, {withCredentials: true, })
        console.log(response.data)
        alert("Data added successfully")
        setFromData({
             hospital:'',
              hphone:'',
               address:'',
             driver:'',
             phoneD:[
                        {
                            id:"",
                            phoneN:""
                        },
                        {
                            id:"",
                            phoneN:""
                        }
                    ]
        })
    }catch(err){
        console.log(err)
        console.log("data not saved in database")
    }
}

const getAddress=async()=>{
    try{
        const response=await axios.get('http://localhost:8080/api/address', {withCredentials: true, })
        console.log(response.data)
        setAddress(response.data)

    }catch(err){
        console.log(err)
        console.log("data not fetched")
    }
}

useEffect(()=>{
    getAddress()
},[])


  return (
    <div style={{color:'black'}}>
        <p>Fill ambulance form</p>
    
    <form action="#" className='ambForm' onSubmit={handleSubmit}>
        <Row className='d-flex gap-5 justify-content-center' >
            <Col lg={3} className=' parent'  >
            <input type="text" placeholder='*Hospital Name' name='hospital' className='child' value={formData.hospital} onChange={handleChange} />
            <p className="p98">Hospital Name</p>
            </Col>
            <Col lg={3} className=' parent'>
            <input type="text" placeholder='*Hospital Phone' className='child' name='hphone' value={formData.hphone}  onChange={handleChange}/>
            <p className="p98">Hospital Phone</p>
            </Col>
        </Row>
        <Row className='d-flex gap-5 justify-content-center'>
            <Col className=' parent' lg={3} >
            <select name="address"  className='child' value={formData.address} onChange={handleChange} >
                
                {address.map((data)=>(
                    <option key={data.id} value={data.id}>{data.location}</option>
                ))}
            </select>
            <p className="p98">Select Location</p>
            </Col>
            <Col className=' parent' lg={3} >
            <input type="text" placeholder='*Driver Name' className='child' name='driver' value={formData.driver} onChange={handleChange} />
            <p className="p98">Driver Name</p>
            </Col>
        </Row>
        <Row className='d-flex gap-5 justify-content-center'>
            <Col className=' parent' lg={3}>
            <input type="text" placeholder='*Phone 1' className='child' value={formData.phoneD[0].phoneN} onChange={(e) => handleChange(e, 0)} name='phoneN' />
            <p className="p98">Phone One</p>
            </Col>
            <Col className=' parent' lg={3}>
            <input type="text" placeholder='Phone 2' className='child' value={formData.phoneD[1].phoneN} onChange={(e) => handleChange(e, 1)}     name='phoneN' />
            <p className="p98">Phone Two</p>
            </Col>
        </Row>

        <button style={{width:'fit-content'}} className='m-auto'>Add Ambulance</button>
    </form>
    </div>
  )
}

export default FromAmbulance