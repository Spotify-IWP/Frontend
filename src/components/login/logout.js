import React from 'react'
import {Component} from 'react' 

class logout extends Component{
    
    componentDidMount(){
        if (localStorage.getItem('token')){
            localStorage.removeItem('token');
            alert("Successfully Logged Out!");
        }
        else{
            alert("Log In first!");
        }
        window.location="/"
      }
      render(){
          return(
            <div style={{backgroundColor:"black"}}></div>
          );
      }
}
 
export default logout;