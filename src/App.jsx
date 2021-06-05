import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import SearchPage from './components/home/Home.js';
import View from './components/viewhistory/history.js';
import Login from './components/login/login.js';
import Signup from './components/login/signup.js';
import Logout from './components/login/logout.js';
import { BrowserRouter as  Switch,Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import {Component} from 'react';

class App extends Component{
	render(){
  return (
	
	<div style={{backgroundColor:"black",height:"3000px"}}>
		
		
			<BrowserRouter>
			<Navbar/>
				
				<Switch>
                     <Route exact path="/home" render={() => <SearchPage/>} />
					 <Route exact path="/view" component={View}/>
                      <Route exact path="/" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/logout" component={Logout} />
			    </Switch>
			</BrowserRouter>
			</div>
		);
	}
}


export default App;

    


