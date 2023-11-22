import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import {Container,
        Row,
        Col
} from 'react-bootstrap'

function SalonMen(){
    return(
        <>
        <NavBar/>
        <List/>
        <Privacy/>
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

function List(){
    return(
        <>
        <Container fluid>

            <Row className='salonrow'>
                <Col className='saloncol' md={2}>
                    <img className='listimg' src={require('./women.jpeg')}/>
                </Col>
                <Col className='saloncol' md={6}>
                    <h3>Heading</h3>
                    <p>Contents</p>
                </Col>
                <Col className='saloncol' md={3}>
                    <h3>Price Details</h3>
                    <button >Order</button>
                </Col>
            </Row>

            <Row className='salonrow'>
                <Col className='saloncol' md={2}>
                    <img className='listimg' src={require('./women.jpeg')}/>
                </Col>
                <Col className='saloncol' md={6}>
                    <h3>Heading</h3>
                    <p>Contents</p>
                </Col>
                <Col className='saloncol' md={3}>
                    <h3>Price Details</h3>
                    <button >Order</button>
                </Col>
            </Row>

            <Row className='salonrow'>
                <Col className='saloncol' md={2}>
                    <img className='listimg' src={require('./women.jpeg')}/>
                </Col>
                <Col className='saloncol' md={6}>
                    <h3>Heading</h3>
                    <p>Contents</p>
                </Col>
                <Col className='saloncol' md={3}>
                    <h3>Price Details</h3>
                    <button >Order</button>
                </Col>
            </Row>

            <Row className='salonrow'>
                <Col className='saloncol' md={2}>
                    <img className='listimg' src={require('./women.jpeg')}/>
                </Col>
                <Col className='saloncol' md={6}>
                    <h3>Heading</h3>
                    <p>Contents</p>
                </Col>
                <Col className='saloncol' md={3}>
                    <h3>Price Details</h3>
                    <button >Order</button>
                </Col>
            </Row>

            <Row className='salonrow'>
                <Col className='saloncol' md={2}>
                    <img className='listimg' src={require('./women.jpeg')}/>
                </Col>
                <Col className='saloncol' md={6}>
                    <h3>Heading</h3>
                    <p>Contents</p>
                </Col>
                <Col className='saloncol' md={3}>
                    <h3>Price Details</h3>
                    <button >Order</button>
                </Col>
            </Row>

            <Row className='salonrow'>
                <Col className='saloncol' md={2}>
                    <img className='listimg' src={require('./women.jpeg')}/>
                </Col>
                <Col className='saloncol' md={6}>
                    <h3>Heading</h3>
                    <p>Contents</p>
                </Col>
                <Col className='saloncol' md={3}>
                    <h3>Price Details</h3>
                    <button >Order</button>
                </Col>
            </Row>

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

export default SalonMen;