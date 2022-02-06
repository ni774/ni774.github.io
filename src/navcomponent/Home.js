import React from 'react';
import './home.css';
import nikhil from './nikhil.jpeg';
import Typewriter from "typewriter-effect";
class Home extends React.Component{
  
   render(){
   
    return ( 
    <div className="main_header" >
      <img src={nikhil} alt=""class="img"/>
       <span className="name">
         <h1 className="animate__animated animate__tada animate__delay-2s animate__repeat-3" style={{color:"white", fontSize:"4em"}}>Nikhil gupta</h1>
         {/* <h3 >WebDeveloper</h3> */}
         <h3 style={{color:"red"}}>
         <Typewriter
       onInit={(typewriter)=> {
  
       typewriter
       .pauseFor(1000)
       .typeString("WebDeveloper")
       .start();
       }}
       />
       </h3>
       </span>
      <br/><br/>  
    </div>
    );
  }
}
export default Home;
