import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import  Pic from './pic.jsx';
import axios from "axios";
import './style.css';

import { Component } from "react";
class  SearchPage extends Component{
  state = {
    artist:'',
    song:' '
  };
  handleSubmit = event => {
    event.preventDefault();
    const search = {
      artist: this.state.artist,
      song:this.state.song
      
    }
    event.target.reset()
    if (localStorage.getItem('token')){
      axios.get(`https://spotify-iwp.herokuapp.com/lyrics/search?artist=${encodeURIComponent(search.artist)}&song=${encodeURIComponent(search.song)}`,{ 'headers': { 'authorization': localStorage.getItem('token') }})
      .then(res=>{
        console.log(res);
        console.log(res.data);
        document.getElementById('display').innerHTML=res.data.lyrics.replace(/(\n)+/g, '<br />');
        document.getElementById('song').innerHTML="Song: "+search.song
        document.getElementById('artist').innerHTML="Artist: "+search.artist
        document.getElementById('song').style.fontSize="25px"
        document.getElementById('artist').style.fontSize="25px"
      })
      .catch(err=> { 
        console.log(err.response.data)
        document.getElementById('display').innerHTML="Lyrics not available"
        // this.setstate(search.artist="")
      // this.setstate(search.song="")

      })
    }
    else{
      alert('Login required to see lyrics!');
    }      
      

  }
handleChange1 = event =>{
    this.setState({ artist: event.target.value});
  }
  handleChange2 = event =>{
    this.setState({ song: event.target.value});
    
  }


  render(){
  return (
    
      <center>
       
    <Pic/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
    <div class="container-fluid bg-2 text-center">
    <form onSubmit={this.handleSubmit} >
            <input type="text" id="f" name="artist" placeholder="Artist name"  required onChange={this.handleChange1}/><br/><br/>
            <input type="text" id="f" name="song" placeholder="Song name"  required onChange={this.handleChange2}/><br/><br/>
            <button class="btn btn-outline-success" id="btn" type="submit" value="search" >Search</button>
        </form>
      {/* <form className="form-inline mt-4 mb-4" onSubmit={this.handleSubmit}>
        
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search song" aria-label="Search" onChange={this.handleChange2}/>
       
        <br/><br/>
        <center>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search artist" aria-label="Search" onChange={this.handleChange1}/>
        
        </center>
  
        <input style={{backgroundColor:"white"}} className="form-control form-control-sm ml-3 w-25" type="submit" value="Search" />
      </form> */}
      </div>
    {/* </MDBCol> */}
    <p style={{color:"white"}}id="song"></p>
    <p style={{color:"white"}} id="artist"></p>
    <p style={{color:"white"}} id="display"></p>

    
    </center>
 );
}
}

export default SearchPage;
