import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from "axios";
import { Component } from "react";
import './history.css';


class  View extends Component{

    componentDidMount(){
        if(localStorage.getItem('token')){
          axios.get(`https://spotify-iwp.herokuapp.com/lyrics/history`,{ 'headers': { 'authorization': localStorage.getItem('token')} })
          .then(res=>{
            console.log(res.data.searchHistory.length)
            for(var i=0;i<res.data.searchHistory.length;i++)
            {var obj=JSON.stringify(res.data.searchHistory[i])
              obj=JSON.parse(obj)
            document.getElementById("col1").innerHTML+=obj.song+"<br></br>"
            document.getElementById("col2").innerHTML+=obj.artist+"<br></br>"
            }
          })
          .catch(err=> { 
            console.log(err.response.data)
           
        }) 
     

      }
      else{
      alert("Login to view history!")
      window.location="/"
      }

    }
    render(){
        return(
            <div>
           <center>
            <h1 style={{color:"white"}}>Search History</h1>
            <table style={{color:"white"}}>
                <tr>
                <th>
                 Song Name
                </th> <th>
                 Artist
                </th>
                </tr>
                <tr>
                <td id="col1"></td>
                <td id="col2"></td>
                </tr>
                </table>
                </center>
            </div>
            
        )
    }
}
export default View;