import React, { useEffect, useState } from 'react'
import './SubRequest2.css'
import SubRequest22 from './subRequest2_1/SubRequest22'
import { Col } from 'react-bootstrap'
import RequestDetails from '../../requestComponent/RequestDetails.jsx'
import axios from 'axios'

function SubRequest2() {

  const [requestData,setRequestData]=useState([])
  

  const getRequestedData=async()=>{
    try{
      const response = await axios.get('http://localhost:8080/api/getRequestDetail', {
        withCredentials: true,
      });
      
      setRequestData(response.data)
      console.log("this is from database:",response.data)
    }catch(err){
      console.log(err)
      console.log("data not retrieved from data base")
    }
  }



  useEffect(()=>{
    getRequestedData()
  },[])
  return (
    <div  className='d-flex align-items-center gap-3 flex-column subRequestCon'>
      
      {requestData.map((data) => (
        <SubRequest22 key={data.id} data={data} />
    ))}
    

    </div>
  )
}

export default SubRequest2