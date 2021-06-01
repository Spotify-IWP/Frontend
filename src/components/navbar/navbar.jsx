import React from 'react';
import './navbar.css'
import {Navbar,Nav}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../login/login.js';
import Signup from '../login/signup.js';
import { BrowserRouter as  Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Header=({children})=>{
  return(
  <Router>
     <div className="main">
      
       <Navbar className="inner"  variant="dark">
        <Navbar.Brand href="/"> 
          Songly-Lyrics
        </Navbar.Brand>
       <Nav className="mr-auto" >
       {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#mymusic">My Music</Nav.Link>
      <Nav.Link href="#charts">Charts</Nav.Link>
      <Nav.Link href="#login">Signup</Nav.Link>   */}
      
      <ul className="navbar-nav mr-auto">
            {/* <li><Link to={'/'} className="nav-link"> Home </Link></li> */}
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/signup'} className="nav-link">Signup</Link></li>
          </ul>
     </Nav>
     </Navbar>
         <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
          </Switch>
  <br></br><br></br>
  {children}

  
</div>
</Router>
  );}
    
export default Header;