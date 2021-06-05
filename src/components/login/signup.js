import React from 'react'
import './signup.css';
import a from './b.png'; 
import { Component } from 'react';
import axios from 'axios'
class Signup extends Component {
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
        console.log(user)
        axios.post('https://spotify-iwp.herokuapp.com/auth/signup',  user )
          .then(res=>{
            localStorage.setItem('token', res.data.token)
            console.log(res)
            window.location = "/";
          })
          .catch(err=> { 
              console.log(err.response.data)
            })
      }
    handleChange1 = event =>{
        this.setState({ username: event.target.value});
      }
      handleChange2 = event =>{
        this.setState({ password: event.target.value});
      }
    render(){
    var c=0;
    const Validate=()=>{
        
         const usernameRegex = new RegExp('^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$');
         const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\\w\\s]|[_])).{8,20}$');
         if(!usernameRegex.test(document.form1.username))
         {
             alert("Username incorrect")
         }
         else
         c=c+1
         if(!passwordRegex.test(document.form1.password))
         {
             alert("Password incorrect")
         }
         else
         c=c+1
        if((document.form1.password.value)===(document.form1.cpassword.value)){
            c=c+1;
        }
        else{
            alert("Passwords don't match!")
        }
        if(c===3){
            alert("Successful sign in!");
        }
    }
    return ( 
        <div className="main">
           
            <div className="b">
                <img src={a} alt="abc"/>
            </div>
            <div className="a">
                <form name="form1" onSubmit={this.handleSubmit} >
                    <div className="b">
                    <h2>Sign Up:</h2>
                    <label>Username*:</label><br/>
                    <input type="text" name="username" width="100" required onChange={this.handleChange1}/><br/><br/>  
                    <label>Password*:</label><br/>
                    <input type="password" name="password" required onChange={this.handleChange2}/><br/><br/> 
                    <label>Confirm Password*:</label><br/>
                    <input type="password" name="cpassword" required/><br/><br/> 
                    <input className="cen" type="submit" value="Register" onClick={Validate} />
                    </div>                    
                </form>
            </div>
        </div>
     );
}
}
 
export default Signup;