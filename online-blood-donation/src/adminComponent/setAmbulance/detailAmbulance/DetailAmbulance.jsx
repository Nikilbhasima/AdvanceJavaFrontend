import React, { useEffect, useState } from 'react'
import './DetailAmbulance.css'
import { TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { Table } from 'react-bootstrap'
import axios from 'axios'

function DetailAmbulance() {
  const [count,setCount]=useState()
  const[editRowId,setEditRowId]=useState(null)
  const [ambulanceDetails,setAmbulanceDetails]=useState([])
  const [address,setAddress]=useState([])
  const [editFormData,setEditFormData]=useState({
    id:'',
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

    const updatedPhoneD = [...editFormData.phoneD];
    updatedPhoneD[index] = {
      ...updatedPhoneD[index], 
      phoneN: value 
    };
    setEditFormData((pre) => ({
      ...pre,
      phoneD: updatedPhoneD 
    }));
  } else {
      const updatedValue = name === 'address' ? Number(value) : value;
      setEditFormData((pre) => ({
      ...pre,
      [name]: updatedValue
    }));
  }
};


// fetching address data from backend
const getAddress=async()=>{
  try{
      const response = await axios.get('http://localhost:8080/api/address', {withCredentials: true, });
      console.log("list address",response.data)
      setAddress(response.data)
  }catch(err){
      console.log(err)
      console.log("data not fetched from backedn")
  }
}

// const handleEditClick=(id)=>{
//   const selectedRow=ambulanceDetails.find((detail)=>detail.id==id);
//   setEditRowId(id)
//   setEditFormData(selectedRow)
//   console.log("lets edit form data",editFormData)
// }
const handleEditClick = (id) => {
  const selectedRow = ambulanceDetails.find((detail) => detail.id === id);
  
  // Ensure phoneD array has two entries (add an empty entry if missing)
  const normalizedPhoneD = selectedRow.phoneD.length === 1 
    ? [...selectedRow.phoneD, { id: '', phoneN: '' }] 
    : selectedRow.phoneD;

  setEditRowId(id);
  setEditFormData({
    ...selectedRow,
    phoneD: normalizedPhoneD,
  });
  console.log("lets edit form data", editFormData);
};


const getAllAmbulance=async()=>{
  try{
    const response = await axios.get('http://localhost:8080/api/getAmbulanceData', {withCredentials: true, });
    console.log("list of ambulance detail",response.data)
    setAmbulanceDetails(response.data)
  }catch(err){
    console.log(err)
    console.log("data not fetched")
  }
}

const updateAmbulanceDetail=async()=>{
  console.log(editFormData)
  try{
    const response = await axios.post('http://localhost:8080/api/updateAmbulanceDetail',editFormData, {withCredentials: true, });
    console.log(response.data)

    const updatedDetails = ambulanceDetails.map((detail) =>
      detail.id === editRowId ? editFormData : detail
    );
    console.log("this is edit form:",editFormData)
    
    setAmbulanceDetails(updatedDetails);
    setEditRowId(null);

  }catch(err){
    console.log(err)
    console.log("data not updated")
  }
}

useEffect(()=>{
console.log(editFormData)
},[editFormData])
  useEffect(()=>{
    getAddress()
    getAllAmbulance()
  },[])



  return (
    <div style={{color:'black'}}>
    <p>Here is the list of ambulance detail.</p>
    <TableContainer className='tableData2'>
      <Table >
        <TableHead className='tableTop2'>
          <TableRow>
            <TableCell>Sn</TableCell>
            <TableCell >Hospital Name</TableCell>
            <TableCell >Hospital Phone</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Driver Name</TableCell>
            <TableCell >Phone 1</TableCell>
            <TableCell >Phone 2</TableCell>
            <TableCell >Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody >

          {ambulanceDetails.map((data)=>(
            editRowId===data.id?(
              
              <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell ><input type="text" style={{width:'8rem'}}  value={editFormData.hospital} onChange={handleChange} name='hospital'/></TableCell>
              <TableCell ><input type="text" style={{width:'8rem'}} value={editFormData.hphone} onChange={handleChange} name='hphone'/></TableCell>
              <TableCell >
                {/* <input type="text" style={{width:'8rem'}} value={editFormData.address.location} onChange={handleChange} name='address'/> */}
                <select name="address" style={{width:'8rem',padding:'10px'}} value={editFormData.address.id} onChange={handleChange}>
                  {address.map((data)=>(
                    <option key={data.id} value={data.id} >{data.location}</option>
                  ))}
                </select>
                </TableCell>
              <TableCell ><input type="text" style={{width:'8rem'}} value={editFormData.driver} onChange={handleChange} name='driver'/></TableCell>
              <TableCell ><input type="text" style={{width:'8rem'}} value={editFormData.phoneD[0]?.phoneN} onChange={(e) => handleChange(e, 0)} name='phoneN'/></TableCell>
              <TableCell ><input type="text" style={{width:'8rem'}} value={editFormData.phoneD[1]?.phoneN} onChange={(e) => handleChange(e, 1)} name='phoneN'/></TableCell>
              <TableCell ><button onClick={updateAmbulanceDetail}>Update</button></TableCell>
            </TableRow>
            ):(<TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell >{data.hospital}</TableCell>
              <TableCell >{data.hphone}</TableCell>
              <TableCell >{data.address.location}</TableCell>
              <TableCell >{data.driver}</TableCell>
              <TableCell >{data.phoneD[0]?.phoneN}</TableCell>
              <TableCell >{data?.phoneD[1]?.phoneN}</TableCell>
              <TableCell className='d-flex gap-3'>
                <button onClick={()=>{handleEditClick(data.id)}}>Edit</button>
                <button>Delete</button>
              </TableCell>
            </TableRow> )
          ))}
             
            
        </TableBody>

      </Table>
    </TableContainer>
    </div>
  )
}

export default DetailAmbulance



