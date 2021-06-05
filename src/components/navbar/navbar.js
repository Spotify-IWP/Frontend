import React, { Component } from "react";
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { NavbarBrand } from "react-bootstrap";

class Navbar extends Component {

    render() {
        return (
          
            <div>
           <div className="inner">
                
                    <NavbarBrand>
                        <b>Songly-Lyrics</b>
                    </NavbarBrand>
                    
                        <NavLink to='/home' className="Home">
                            Home
                        </NavLink>
                        <NavLink to="/view" className="view">
                        ViewHistory
                        </NavLink> 

                    <NavLink to="/" className="login">
                        Login
                        </NavLink> 
                    
                    <NavLink to="/signup" className="signup"> 
                        Signup
                    </NavLink> 
                    <NavLink to="/logout" className="logout"> 
                        Logout
                    </NavLink> 
                    
                    
                   </div>
              
            </div>
        );
    }
}

export default Navbar;