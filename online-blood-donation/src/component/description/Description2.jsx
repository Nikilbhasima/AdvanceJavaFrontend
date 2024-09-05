import React from 'react'
import './Description2.css'
import { Col, Row } from 'react-bootstrap'
import CustomButton from '../ButtonPack/CustonButtton'
import person1 from '../../assets/balami.jpg'
import person2 from '../../assets/swayann.jpg'

function Description2() {
    const loginBtnProperty={
        backGround:"#DE1C1C",
        name:"Read More",
        hoverColor:"#fff",
        fontColor:"#fff"
      }
  return (
    <div className='mmm'>
       <p className='into-title'>Introduction to Blood Link</p>
        <Row>
            <Col >
            <img src={person1} alt="" className='program-img' />
            </Col>
            <Col>
            <img src={person2} alt="" className='program-img' />
            </Col>
        </Row>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum hic mollitia culpa beatae commodi illo, doloribus odio dolorum eveniet perferendis minima enim repellat harum repudiandae unde dignissimos? Laudantium, a at!</p>
        <CustomButton buttonName={loginBtnProperty}/>
    </div>
  )
}

export default Description2