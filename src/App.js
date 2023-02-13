import React from 'react';
import Home from './navcomponent/Home';
import About from './navcomponent/About';
import Contact from './navcomponent/Contact';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

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
       <Navbar />    {/*your linker holder  means navbar should be in BrouserRouter and only one brouserRouter can be in one app*/}
        
         <Routes>         {/*use to change route among more than one*/}
          <Route exact path="/" element={<Home/>} />  
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/> 
        </Routes> 
        <Footer/>
        </BrowserRouter>             {/*whatever you want to render in Router keep in Router and rest  out from it*/}
       
       
      </div>
      
    );
    }
  }

export default App;
