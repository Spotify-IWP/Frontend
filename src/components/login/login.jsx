import React from 'react'
import {Component} from 'react'
import axios from "axios"; 
import './signup.css';
import a from './b.png'; 

class login extends Component{
    state = {
        username: '',
        password:''
      };
      handleSubmit = event => {
        event.preventDefault();
        const user = {
          username: this.state.username,
          password:this.state.password
        }
        
        axios.post('https://spotify-iwp.herokuapp.com/auth/login',  user )
          .then(res=>{
            console.log(res);
            localStorage.setItem('token', res.data.token)
            console.log(res.data.token)
            window.location = "/home";
          })
          .catch(err=> { 
            console.log(err.response.data)
            alert("Incorrect username/password");
          })
      }
    handleChange1 = event =>{
        this.setState({ username: event.target.value});
      }
      handleChange2 = event =>{
        this.setState({ password: event.target.value});
      }
    render(){
    return ( 
        <div className="main">
            <div className="b">
                <img src={a} alt="abc"/>
            </div>
            <div className="a1">
                <form name="form1" onSubmit={this.handleSubmit} >
                    <div className="b">
                        <h2>Login:</h2>
                        <label>Username*:</label><br/>
                        <input type="text" name="username" width="100" required onChange={this.handleChange1}/><br/><br/>  
                        <label>Password*:</label><br/>
                        <input type="password" name="password" required onChange={this.handleChange2}/><br/><br/>      
                        <input className="cen" type="submit" value="Login"/>
                    </div>          
                </form>
            </div>
        </div>
    );
}}
 
export default login;