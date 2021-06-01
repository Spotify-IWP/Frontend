import React from 'react';
import './car.css'
import {Carousel}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import head from './head.jpg'
// import mike from './mike.jpg'
// import reel from './reel.jpg'

const Car=()=>
(
    <Carousel>
  <Carousel.Item interval={1000} id="item">
    
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500} id="item">
  
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item id="item">
  
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
export default Car