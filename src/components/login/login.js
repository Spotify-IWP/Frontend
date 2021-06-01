import React from 'react'
import './signup.css';
import a from './b.png'; 
const login = () => {
    return ( 
        <div className="main">
            <div className="b">
                <img src={a} alt="abc"/>
            </div>
            <div className="a1">
                <form name="form1" action="#" >
                    <div className="b">
                        <h2>Login:</h2>
                        <label>Username*:</label><br/>
                        <input type="text" name="username" width="100" required/><br/><br/>  
                        <label>Password*:</label><br/>
                        <input type="password" name="password" required/><br/><br/>      
                        <input className="cen" type="submit" value="Login"/>
                    </div>          
                </form>
            </div>
        </div>
    );
}
 
export default login;