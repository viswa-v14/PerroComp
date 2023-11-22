import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';

function Professional(){
    return(
        <>
        <NavBar />
        <Body />
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

function Body(){
    return(
        <>
        <div className='contents'>
            <h1>Earn More. Earn Respect.</h1>
        </div>
        <div className='forms'>
            <form>
              <label htmlFor='phone' id='phone'>Mobile Number : <input type="tel" /></label>
              <label htmlFor='email' id='email'>Email : <input type="email" /></label>
              <button className='btn'><a href="">Submit</a></button>
            </form>
        </div>
        </>
    )
}


export default Professional;