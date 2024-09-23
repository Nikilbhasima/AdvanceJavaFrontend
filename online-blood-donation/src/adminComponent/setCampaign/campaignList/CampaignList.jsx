import React, { useEffect, useState } from 'react'
import './CampaignList.css'
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Table } from 'react-bootstrap'
import axios from 'axios'


function CampaignList() {
  const [count,setCount]=useState(0)
  const [campaignDetail,setCampaignDetail]=useState([])
  const [address,setAddress]=useState([])
  const[editRowId,setEditRowId]=useState(null)
  const [editFormData,setEditFormData]=useState({
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
    setEditFormData((pre)=>(
      {...pre,[name]:updatedValue}
    ))
  }

  const handleEditClick = (id) => {
    const selectedRow = campaignDetail.find((detail) => detail.id === id);
    setEditRowId(id); 
    setEditFormData(selectedRow); 
  };


  const handleUpdate = () => {
    handleUpdateDatabase(editFormData)

    const updatedDetails = campaignDetail.map((detail) =>
      detail.id === editRowId ? editFormData : detail
    );
    console.log("this is edit form:",editFormData)
    
    setCampaignDetail(updatedDetails);
    setEditRowId(null); 
  };

  const handleUpdateDatabase=async(editFormData1)=>{
    try{
      const response=await axios.put('http://localhost:8080/api/updateCampaignData',editFormData1, {withCredentials: true, })
      setCount((pre)=>pre+1)
      alert("table updated successfully")
    }catch(err){
      console.log(err)
      console.log("fail to update database")
    }
  }

  const getCampaignList=async()=>{
    try{
      const response=await axios.get('http://localhost:8080/api/campaignData', {withCredentials: true, })
      setCampaignDetail(response.data)
    }catch(err){
      console.log(err)
      console.log("campaign list not fetched from database")
    }
  }

  // fetching address data from backend
  const getAddress=async()=>{
    try{
        const response = await axios.get('http://localhost:8080/api/address', {withCredentials: true, });
        setAddress(response.data)
    }catch(err){
        console.log(err)
        console.log("data not fetched from backedn")
    }
}

const handleDelete=async(id)=>{
  try{
    const response=await axios.delete(`http://localhost:8080/api/deleteCampaign/${id}`, {withCredentials: true, })
    setCount(pre=>pre+1)
    alert('Campaign deleted successfully')
    console.log(id)
  }catch(err){
    console.log(err)
    console.log("campaign not deleted")
  }
}

useEffect(()=>{
  getCampaignList()
},[count])

  useEffect(()=>{
    getCampaignList()
    getAddress()
  },[])

  useEffect(()=>{
    if (editRowId !== null) {
      console.log('editRowId:', editRowId);
      console.log('editFormData:', editFormData);
    }
  },[editRowId,editFormData])

  const getStatus = (campaignDate) => {
    const currentDate = new Date(); 
    const campaign = new Date(campaignDate); 

    if (currentDate.getTime() < campaign.getTime()) {
      return 'Pending';
    } else if (currentDate.toDateString() === campaign.toDateString()) {
      return 'Ongoing';
    } else {
      return 'Complete';
    }
  };

  const cancel=async ()=>{
    setEditRowId(null)
  }

  return (
    
    <div>
      <p>Edit the form as required</p>
          <TableContainer className='tableData2'>
      <Table >
       <TableHead className='tableTop2'>
           <TableRow>
              <TableCell>Sn</TableCell>             
             <TableCell >Organization Name</TableCell>
             <TableCell >Location</TableCell>
             <TableCell >Venue</TableCell>
             <TableCell >Data</TableCell>
             <TableCell >Starting</TableCell>
             <TableCell >Ending</TableCell>
             <TableCell >Telephone</TableCell>
             <TableCell >Gmail</TableCell>
             <TableCell >Status</TableCell>
             <TableCell >Action</TableCell>
           </TableRow>
         </TableHead>        
          <TableBody >
            {campaignDetail.map((data)=>(
              editRowId===data.id?(
                    <TableRow key={data.id}>
                    <TableCell style={{padding:'0'}}>{data.id}</TableCell>
                     <TableCell style={{padding:'0'}}><input type="text" style={{width:'6rem',padding:'5px'}} value={editFormData.organization} onChange={handleChange} name='organization'/></TableCell>
                     <TableCell style={{padding:'0'}}>
                      <select name="address" style={{width:'7rem',padding:'5px'}} id="" value={editFormData.address} onChange={handleChange} > 
                        {address.map((addData)=>(
                          <option key={addData.id} value={addData.id}>{addData.location}</option>
                        ))}
                      </select>
                     </TableCell>
                     <TableCell style={{padding:'0'}}><input type="text" style={{width:'7rem',padding:'5px'}} value={editFormData.venue} onChange={handleChange} name='venue'/></TableCell>             
                     <TableCell style={{padding:'0'}} ><input type="date" style={{width:'7rem',padding:'5px'}} value={editFormData.date} onChange={handleChange} name='date'/></TableCell>
                      <TableCell style={{padding:'0'}}><input type="time" style={{width:'8rem',padding:'5px'}} value={editFormData.starting} onChange={handleChange} name='starting'/></TableCell>
                      <TableCell style={{padding:'0'}}><input type="time" style={{width:'8rem',padding:'5px'}} value={editFormData.ending} onChange={handleChange} name='ending'/></TableCell>  
                      <TableCell style={{padding:'0'}}><input type="text" style={{width:'6rem',padding:'5px'}} value={editFormData.phoneN} onChange={handleChange} name='phoneN'/></TableCell>
                      <TableCell style={{padding:'0'}}><input type="text" style={{width:'11rem',padding:'5px'}} value={editFormData.gmail} onChange={handleChange} name='gmail'/></TableCell> 
                      <TableCell>hello</TableCell>          
                       <TableCell style={{padding:'0'}}><button onClick={handleUpdate}>Update</button>
                       <button className='ms-2' onClick={cancel}>Cancel</button>
                       </TableCell>
                  </TableRow>
              ):(
                <TableRow key={data.id}>               
                <TableCell>{data.id}</TableCell>
                <TableCell >{data.organization}</TableCell>
                <TableCell >{data.address}</TableCell>
                <TableCell >{data.venue}</TableCell>
                 <TableCell >{data.date}</TableCell>
                <TableCell >{data.starting}</TableCell>
                <TableCell >{data.ending}</TableCell>
                <TableCell >{data.phoneN}</TableCell>
                <TableCell >{data.gmail}</TableCell>
                <TableCell>{getStatus(data.date)}</TableCell>
                 <TableCell className='d-flex gap-3'>
                 <button onClick={()=>handleEditClick(data.id)}>Edit</button>
                   <button onClick={()=>handleDelete(data.id)}>Delete</button>
                 </TableCell>            
                  </TableRow>
              )
            ))}
          

             
        </TableBody>

     </Table>
    </TableContainer>
    </div>
  )
}

export default CampaignList