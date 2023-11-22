import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import {Container,
        Row,
        Col
} from 'react-bootstrap'

function Home() {
  return (
    <>
    
    <NavBar/>
    <Card />

    </>  
  )
}


function NavBar(){
  return(
    <>
    <div className="nav">
            <div className='brand'>
            <a href='/'><img src={require('./logo.png')} /></a>            </div>
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

function Card() {
  return(
    <>

    <Container fluid>
        <Row className='row1'>
        
          <h1>Salon, Makeup and Massage Services</h1>

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
              <img src={require('./makeup.jpeg')}/>
              <h4 className='cardtitle'>Party Makeup</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('./massage.jpg')}/>
              <h4 className='cardtitle'>Massage</h4>
            <button className='cardbtn'>View</button>
            </Col>
        </Row>

        <Row className='row2'>

        <h1>Home Cleaning, Pests Control etc.,</h1>

            <Col md={2} className='card'>
              <img src={require('./card.png')}/>
              <h4 className='cardtitle'>Home Painting</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('./repairs.jpeg')}/>
              <h4 className='cardtitle'>Home Repairs</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('./cleaning.jpeg')}/>
              <h4 className='cardtitle'>Home Cleaning</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('./pests.jpeg')}/>
              <h4 className='cardtitle'>Pest Control</h4>
            <button className='cardbtn'>View</button>
            </Col>
        </Row>

        <Row className='row3'>
          <h1>Installation And Troubleshooting</h1>
            <Col md={2} className='card'>
              <img src={require('./card.png')}/>
              <h4 className='cardtitle'>System Services</h4>
            <button className='cardbtn'>View</button>
            </Col>
            <Col md={2} className='card'>
              <img src={require('./card.png')}/>
              <h4 className='cardtitle'>Applainces Services</h4>
            <button className='cardbtn'>View</button>
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

export default Home;