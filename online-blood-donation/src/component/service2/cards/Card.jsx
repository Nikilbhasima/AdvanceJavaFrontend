import React, { useContext } from 'react'
import './Card.css'
import { Row } from 'react-bootstrap'
import request from '../../../assets/request.jpg'
import CustomButton from '../../ButtonPack/CustonButtton'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../ProviderContext/AuthProvider'

function Card({title,description,imgCon,path}) {
  const {isLogin,setIsLogin}=useContext(AuthContext)
    const loginBtnProperty={
        backGround:"#DE1C1C",
        name:"Add",
        hoverColor:"#fff",
        fontColor:"#fff"
      }
  return (
    <div className='CardCon'>
        <Row className='p-0 m-0 imgCon'>
        <img src={imgCon} alt="add request img" className='CardImg p-0 m-0' />
        </Row>
        <Row className='p-0 m-0 infoCon'>
        <p className='p-0 m-0 p1'>{title}</p>
        <p className='p-0 m-0 p2 mb-3'>{description}</p>
        {isLogin && (<Link to={`/${path}`}>
        <CustomButton buttonName={loginBtnProperty} />
        </Link>)}
        
       
        </Row>
    </div>
  )
}

export default Card