import React, { useEffect, useState } from 'react'
import './BecomeDonor.css'
import { Container } from 'react-bootstrap'
import RequestDetails from '../requestComponent/RequestDetails'
import axios from 'axios'

function BecomeDonor() {

  const [requestData,setRequestData]=useState([])
  const [isThere,setIsThere]=useState("")

  const handleGetRequestDetail=async()=>{
    try{
      const response=await axios.get('http://localhost:8080/api/getRequestedBlood',{
        withCredentials: true
      })
      console.log(response.data)
      setRequestData(response.data)
    }catch(err){
      console.log(err)
      console.log("data not retrived from ")
    }
  }
  const getUserData=async()=>{
    try{
        const response=await axios.get('http://localhost:8080/api/getUserData',{withCredentials: true})
        console.log("is this",response.data.availability);
        setIsThere(response.data)
    }catch(err){
        console.log(err)
        console.log("user status is not fetched")
    }
}

  useEffect(()=>{
    handleGetRequestDetail()
    getUserData()
  },[])

  console.log("am just checking:",isThere)
  return (
    <Container className='border p-3'>
            <p style={{fontSize:'20px',fontFamily:'serif',textAlign:'center',fontWeight:'550'}}>Become Donor</p>

            {isThere.availability!="no"?(<div className='d-flex flex-column align-items-center gap-3 fff' >
              {requestData.map((data)=>(
                  <RequestDetails key={data.id} requestData={data}/>
              ))}
               
            </div>):( <p style={{textAlign:'center',fontFamily:'serif'}}>"once you participate blood campaign, you have to wait for 3 month. If your 3 month is completed go to profile to activate"</p>

          )}
            
    </Container>

  )
}

export default BecomeDonor