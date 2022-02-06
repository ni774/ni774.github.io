import React from 'react';
import Home from './navcomponent/Home';
import About from './navcomponent/About';
import Contact from './navcomponent/Contact';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends React.Component{
    render(){
    return (
      <div className="App">
        
       <BrowserRouter>     
        <Navbar />       {/*your linker holder  means navbar should be in BrouserRouter and only one brouserRouter can be in one app*/}
        <Routes>         {/*use to change route among more than one*/}
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>
        </BrowserRouter>             {/*whatever you want to render in Router keep in Router and rest  out from it*/}
        <div className="card text-white" style={{width: "100%",backgroundColor:"#16161acf"}}>
        <div className="social-media">
          <a href="http://www.linkedin.com/in/nikhil-gupta-8562731a6" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin">.</a>
          <a href="https://bit.ly/3gnqE3C" target="_blank" rel="noopener noreferrer" class="fa fa-instagram">.</a>
          <a href="https://mobile.twitter.com/nikhil_gupta55" target="_blank" rel="noopener noreferrer" class="fa fa-twitter">.</a>
          </div>
        <span className="material-icons">
         location_on
        </span>
          <div className="card-body">
          <h5 className="card-title">Address:-</h5>
          <p className="card-text">Jabalpur Engineering college Gokalpur Ranjhi,'Jabalpur',482001</p>
          </div>
        </div>
       
      </div>
      
    );
    }
  }

export default App;
