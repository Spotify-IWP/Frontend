import React from 'react'
import './signup.css';
import a from './b.png'; 
const Signup = () => {
    var c=0;
    const Validate=()=>{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.form1.emailid.value)){
            c=c+1;    
        }
        else{
            alert("You have entered an invalid email address!")
        }
        var phoneno = /^[789][0-9]{8}[1-9]$/;
        if((document.form1.phoneno.value).match(phoneno)){
            c=c+1;     
        }
        else{
            alert("Incorrect phone number!");
        }
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
                <form name="form1" action="#" >
                    <div className="b">
                    <h2>Sign Up:</h2>
                    <label>Username*:</label><br/>
                    <input type="text" name="username" width="100" required/><br/><br/>  
                    <label>Email id*:</label><br/>               
                    <input type="email" name="emailid" required/><br/><br/> 
                    <label>Phone number*:</label><br/>
                    <input type="text" name="phoneno" required/><br/><br/> 
                    <label>Password*:</label><br/>
                    <input type="password" name="password" required/><br/><br/> 
                    <label>Confirm Password*:</label><br/>
                    <input type="password" name="cpassword" required/><br/><br/> 
                    <input className="cen" type="submit" value="Register" onClick={Validate}/>
                    </div>                    
                </form>
            </div>
        </div>
     );
}
 
export default Signup;