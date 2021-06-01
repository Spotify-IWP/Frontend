import React from 'react';
import './App.css';
import Header from './components/navbar/navbar.jsx';
import SearchPage from './components/Home.jsx';
import  Pic from './components/pic.jsx';

const App=()=>{
// const cardinfo1 = {
// image: require("./components/slide/head.jpg"),
// title:"Album"
// }
// const cardinfo2 = {
// image: require("./components/slide/mike.jpg"),
// title:"Genre"
// }
// const cardinfo3 = {
// image: require("./components/slide/reel.jpg"),
// title:"Music"
// } 
return (
<div className='App'>
<Header>
<Pic/>
<SearchPage/>
{/* <div className="col">
<Cards id="space" cardinfo={cardinfo1}/>
<Cards id="space" cardinfo={cardinfo2}/>
<Cards id="space" cardinfo={cardinfo3}/>
</div> */}
</Header>
</div> 
);
}
export default App;


    


