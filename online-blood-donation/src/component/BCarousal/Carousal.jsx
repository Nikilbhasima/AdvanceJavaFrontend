import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../components/ExampleCarouselImage';
import { Container } from 'react-bootstrap';
import './Carousal.css'
import img2 from 'C:/coding/React-java-frontend/online-blood-donation/src/assets/img4.jpg'
function Carousal() {
  return (
   <>
   <Container className='mb-2 border'>
   <Carousel data-bs-theme="dark" e interval={500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </Container>
   </>
  )
}

export default Carousal