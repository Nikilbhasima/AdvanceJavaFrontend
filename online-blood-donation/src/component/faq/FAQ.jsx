import React from 'react'
import './FAQ.css'
import { Container } from 'react-bootstrap'
import Animation from '../hoverAnimatin/Animation'

function FAQ() {
  return (
    <Container className='faq-con mt-3'>
      <p className='title1'>FAQ</p>
      <p className='msg title1'>Everything you want to know about Blood Link</p>
      <div className="fqas p-4">
      <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
      <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
      <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
      <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
      <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
      <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
      <Animation title="How to request People?" description="First go to service section in home page then go into add request"/>
      </div>
    </Container>
  )
}

export default FAQ