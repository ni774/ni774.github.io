import React from 'react';
import './home.css';
import nikhil from '../img/nikhil.jpeg';
import Typewriter from "typewriter-effect";
class Home extends React.Component{
   
   render(){
    const github="https://github.com/ni774";
    const leetcode="https://leetcode.com/nik556/";
    const gfg="https://auth.geeksforgeeks.org/user/gnikhil556";
    return ( 
    <div className="main_header" >
      <img src={nikhil} alt=""class="img"/>
      <div className="coding-profile"> 
        <div className="animate__animated animate__lightSpeedInLeft animate__delay-.6s">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> 
        </div>
        <div className="animate__animated animate__lightSpeedInLeft animate__delay-.5s">
        <a href={leetcode} target="_blank" rel="noopener noreferrer">leetCode</a>
        </div>
        <div className="animate__animated animate__lightSpeedInLeft animate__delay-.4s">
             <a href={gfg} target="_blank" rel="noopener noreferrer">GFG</a>
        </div>
      </div>
       <span className="name">
         <h1  style={{color:"black", fontSize:"4em"}}>Nikhil gupta</h1>
         <h3 style={{color:"red"}}>
            <Typewriter
             options={{
              strings: ['Hello', 'World'],
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter)=> {
  
            typewriter
            .pauseFor(1000)
            .typeString("WebDeveloper")
            
            .start();
            }}
            />
         </h3>
       </span> 
     
    </div>
    );
  }
}
export default Home;
