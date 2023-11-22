import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'react-bootstrap';
import './Style.css';
import {Container,
        Row,
        Col
} from 'react-bootstrap';
import { VscArrowDown } from 'react-icons/vsc';
import NavBar from './NavBar';
import Footer from './Footer';

function Home() {
  return (
    <>
      <NavBar/>
      <Slide />
      <Card />
      <Footer/>
    </>  
  )
}

function Slide(){
  return(
    <>
      <Carousel slide={true} className="slide"  prevIcon="" nextIcon="">
        <Carousel.Item>
          <img src={require('../images/1.png')}/>
        </Carousel.Item>
        <Carousel.Item> 
          <img src={require('../images/2.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('../images/3.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('../images/4.png')}/>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

function Card() {
  return(
    <>

    <Container fluid>
        
        <Row className='row1'>
        <h1>Services On User Demand</h1>
            <Col md={2} className='card'>
              <a href='/salonwomen'><img src={require('../images/women.jpeg')}/></a>
              <h4 className='cardtitle'>Salon for Women</h4>
              <button className='cardbtn'><a href='/salonwomen'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <a href='/salonmen'><img src={require('../images/men.jpeg')}/></a>
              <h4 className='cardtitle'>Salon for Men</h4>
              <button className='cardbtn'><a href='/salonmen'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/cleaning.jpeg')}/>
              <h4 className='cardtitle'>Home Cleaning</h4>
              <button className='cardbtn'><a href='/cleaning'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/pests.jpeg')}/>
              <h4 className='cardtitle'>Pest Control</h4>
              <button className='cardbtn'><a href='/pest'>View</a></button>
            </Col>
        </Row>

        <div className='down'>
          <button><a href="/services"><VscArrowDown fontSize={27} /></a></button>
          <p>All Services</p>
        </div>
    </Container>

    </>
  )
}

export default Home;