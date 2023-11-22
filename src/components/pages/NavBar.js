import React from 'react'

function NavBar(){
    return(
      <>
      <div className="nav">
              <div className='brand'>
                <a href='/'><img src={require('../images/logo.png')} /></a>
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

export default NavBar
  