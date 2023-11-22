import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import {Container,
        Row,
        Col
} from 'react-bootstrap'
import NavBar from './NavBar';

function Home() {
  return (
    <>
    
    <NavBar/>
    <Card />

    </>  
  )
}


function Card() {
  return(
    <>

    <Container fluid>
        <Row className='row1'>
        
          <h1>Salon, Makeup and Massage Services</h1>

            <Col md={2} className='card'>
              <img src={require('../images/women.jpeg')}/>
              <h4 className='cardtitle'>Salon for Women</h4>
              <button className='cardbtn'><a href='/salonwomen'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/men.jpeg')}/>
              <h4 className='cardtitle'>Salon for Men</h4>
              <button className='cardbtn'><a href='/salonmen'>View</a></button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/makeup.jpeg')}/>
              <h4 className='cardtitle'>Party Makeup</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/massage.jpg')}/>
              <h4 className='cardtitle'>Massage</h4>
            <button className='cardbtn'>View</button>
            </Col>
        </Row>

        <Row className='row2'>

        <h1>Home Cleaning, Pests Control etc.,</h1>

            <Col md={2} className='card'>
              <img src={require('../images/card.png')}/>
              <h4 className='cardtitle'>Home Painting</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/repairs.jpeg')}/>
              <h4 className='cardtitle'>Home Repairs</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/cleaning.jpeg')}/>
              <h4 className='cardtitle'>Home Cleaning</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/pests.jpeg')}/>
              <h4 className='cardtitle'>Pest Control</h4>
            <button className='cardbtn'>View</button>
            </Col>
        </Row>

        <Row className='row3'>
          <h1>Installation And Troubleshooting</h1>
            <Col md={2} className='card'>
              <img src={require('../images/card.png')}/>
              <h4 className='cardtitle'>System Services</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('../images/card.png')}/>
              <h4 className='cardtitle'>Applainces Services</h4>
            <button className='cardbtn'>View</button>
            </Col>
        </Row>

    </Container>

    </>
  )
}

export default Home;