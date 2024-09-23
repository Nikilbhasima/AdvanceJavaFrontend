import React, { useState } from 'react'
import './ContactUs.css'
import { Col, Container, Row } from 'react-bootstrap'

function ContactUs() {

    const [query,setQuery]=useState({
        gmail:"",
        remark:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setQuery((pre)=>({...pre,[name]:value}))
    }
  return (
    <Container className=' hjt'>
        <p style={{textAlign:'center',fontSize:'30px',fontFamily:'serif',fontWeight:'550'}}>Contact Us</p>
        <p style={{textAlign:'center',fontSize:'16px',fontFamily:'serif',fontWeight:'550'}}>Any question or remark? Just write us a message!</p>
        <Row className='d-flex justify-content-center'>
            <Col  lg={6} >
            <form  className='d-flex justify-content-center flex-column'>
                <Row className='d-flex justify-content-center'>
                    <Col className='inpCon'>
                    <input type="gmail" className='contactInput' placeholder='Gmail' value={query.gmail} onChange={handleChange} name='gmail'/>
                    <p className='ap11'>Gmail</p>
                    </Col>
                    <Col className='inpCon'>
                    <input type="text" className='contactInput' placeholder='Remark' value={query.remark} onChange={handleChange} name='remark'/>
                    <p className='ap11'>Message/Query</p>
                    </Col>
                </Row>
                <button className='gbtn'>Submit</button>
            </form>
            </Col>

        </Row>
    </Container>
  )
}

export default ContactUs