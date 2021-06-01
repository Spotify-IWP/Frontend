import React from 'react';
import './card.css'
import {Card}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards=({cardinfo})=>{
const{
    image,
    title,
}=cardinfo
  return(
    <Card className="bg-dark text-white" id="dis">
  <Card.Img src={image} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
    
    </Card.Text>
    
  </Card.ImgOverlay>
</Card>

);
}

export default Cards