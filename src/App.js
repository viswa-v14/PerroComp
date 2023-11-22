import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Professional from './components/pages/Professional';
import Services from './components/pages/Services';
import SalonWomen from './components/pages/SalonWomen';
import SalonMen from './components/pages/SalonMen';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


function App() {
  return (
    
          <div>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/salonwomen' element={<SalonWomen/>} />
                <Route path='/salonMen' element={<SalonMen/>} />
                <Route path='/professional' element={<Professional/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
              </Routes>
          </BrowserRouter>
          </div>
      
  );
}

export default App;
