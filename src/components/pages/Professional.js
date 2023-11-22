import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import NavBar from './NavBar';

function Professional(){
    return(
        <>
        <NavBar />
        <Body />
        </>
    )
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