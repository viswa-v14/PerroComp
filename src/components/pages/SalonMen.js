import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import {Container,
        Row,
        Col
} from 'react-bootstrap'
import NavBar from './NavBar';
import Footer from './Footer';

function SalonMen(){
    return(
        <>
        <NavBar/>
        <List/>
        <Footer/>
        </>
    )
}


function List(){
    return(
        <>
        <Container fluid>

            <Row className='salonrow'>
                <Col className='saloncol' md={2}>
                    <img className='listimg' src={require('../images/women.jpeg')}/>
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
                    <img className='listimg' src={require('../images/women.jpeg')}/>
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
                    <img className='listimg' src={require('../images/women.jpeg')}/>
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
                    <img className='listimg' src={require('../images/women.jpeg')}/>
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
                    <img className='listimg' src={require('../images/women.jpeg')}/>
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
                    <img className='listimg' src={require('../images/women.jpeg')}/>
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

export default SalonMen;