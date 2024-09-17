import React, { useEffect, useState } from 'react'
import './CampaignForm.css'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'

function CampaignForm() {

    const [address,setAddress]=useState([])

    const [campaignDetail,setCampaignDetail]=useState({
        id:'',
        organization:'',
        address:'',
        venue:'',
        starting:'',
        ending:'',
        gmail:'',
        date:'',
        phoneN:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        const updatedValue = name === 'address' ? Number(value) : value;
        setCampaignDetail((pre)=>(
           {...pre,[name]:updatedValue}
        ))
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        console.log(campaignDetail)
        try{
            const response=await axios.post('http://localhost:8080/api/insertCampaign',campaignDetail, {withCredentials: true, })
            console.log(response.data)
            alert("Campaign added Successfully")
            setCampaignDetail({
                id:'',
        organization:'',
        address:'',
        venue:'',
        starting:'',
        ending:'',
        gmail:'',
        date:'',
        phoneN:''
            })
        }catch(err){
            console.log(err)
            console.log("data not transfered")
        }
    }

    // fetching address data from backend
    const getAddress=async()=>{
        try{
            const response = await axios.get('http://localhost:8080/api/address', {withCredentials: true, });
            console.log(response.data)
            setAddress(response.data)
        }catch(err){
            console.log(err)
            console.log("data not fetched from backedn")
        }
    }

    

   useEffect(()=>{
    console.log("hello everyone")
    getAddress()
   },[])

   console.log(campaignDetail)

  return (
    <div className='p-3'>
        <p>Fill the campaign form</p>
        <form className='d-flex flex-column gap-4 p-1' onSubmit={handleSubmit}>
            <Row className='d-flex justify-content-center'>
                <Col lg={3} className='parent'><input type="text" className='child' placeholder='Organization Name' value={campaignDetail.organization} onChange={handleChange} name='organization'/>
                <p className='p99'>Organization Name</p></Col>
                <Col lg={3} className='parent'>
                <select name="address" id="" className='child' value={campaignDetail.location} onChange={handleChange}>
                    
                    {address.map((data)=>(
                        <option key={data.id} value={data.id}>{data.location}</option>
                    ))}
                </select>
                <p className='p99'>Campaign Location</p>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col lg={3} className='parent'><input type="text" className='child' placeholder='Venue' name='venue' value={campaignDetail.venue} onChange={handleChange}/>
                <p className='p99'>Venue Name</p>
                </Col>
                <Col lg={3} className='parent'><input type="date" className='child' placeholder='Organization Name' name='date' value={campaignDetail.date} onChange={handleChange}/>
                <p className='p99'>Starting Date</p>
                </Col>
                
            </Row>
            <Row className='d-flex justify-content-center'>
            <Col lg={3} className='parent'><input type="time" className='child' placeholder='Time' name='starting' value={campaignDetail.starting} onChange={handleChange} />
            <p className='p99'>Starting time</p>
            </Col>
            <Col lg={3} className='parent'><input type="time" className='child' placeholder='Time' name='ending' value={campaignDetail.ending} onChange={handleChange} />
            <p className='p99'>Ending time</p></Col>
            </Row>
            <Row className='d-flex justify-content-center'>
            <Col lg={3} className='parent'><input type="text" className='child' placeholder='Phone number' name='phoneN' value={campaignDetail.phoneN} onChange={handleChange} />
            <p className='p99'>Organization Phone</p>
            </Col>
                <Col lg={3} className='parent'><input type="gmail" className='child' placeholder='Gmail' name='gmail' value={campaignDetail.gmail} onChange={handleChange}/>
                <p className='p99'>Organization Gmail</p>
                </Col>
                
            </Row>

            <button style={{width:'fit-content'}} className='m-auto'>Submit</button>
        </form>
    </div>
  )
}

export default CampaignForm