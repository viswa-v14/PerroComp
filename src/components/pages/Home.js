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

function Home() {
  return (
    <>
    
    <NavBar/>
    <Slide />
    <Card />
    
    </>  
  )
}


function NavBar(){
  return(
    <>
    <div className="nav">
            <div className='brand'>
              <a href='/'><img src={require('./logo.png')} /></a>
            </div>
              <ul className='items'>
                <li><a href='/'>Home</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/professional'>Professional</a></li>
              </ul>
              <div className='login'>
                <a href='/login'>Login/Sign Up</a>
              </div>
    </div>
    </>
  );
}

function Slide(){
  return(
    <>
      <Carousel slide={true} className="slide"  prevIcon="" nextIcon="">
        <Carousel.Item>
          <img src={require('./1.png')}/>
        </Carousel.Item>
        <Carousel.Item> 
          <img src={require('./2.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./3.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./4.png')}/>
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
              <a href='/salonwomen'><img src={require('./women.jpeg')}/></a>
              <h4 className='cardtitle'>Salon for Women</h4>
              <button className='cardbtn'><a href='/salonwomen'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <a href='/salonmen'><img src={require('./men.jpeg')}/></a>
              <h4 className='cardtitle'>Salon for Men</h4>
              <button className='cardbtn'><a href='/salonmen'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('./cleaning.jpeg')}/>
              <h4 className='cardtitle'>Home Cleaning</h4>
              <button className='cardbtn'><a href='/cleaning'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('./pests.jpeg')}/>
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

function Privacy(){
  return(
    <>
    <div className='footer'>
      <p>Terms and Conditions</p>
      <p>Copyrights</p>
    </div>
    </>
  )
}

export default Home;