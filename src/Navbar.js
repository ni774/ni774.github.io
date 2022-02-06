import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{zIndex:"101",margin:"0"}}>
    <span style={{margin:"0 2em",color:"white",fontWeight:"bold",fontSize:"1.2em"}}>genius.</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active px-3">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/contact">contact</Link>
        </li>
      </ul>
      <div  >
      <span className="material-icons" style={{color:"white", margin:"0 0 0 10em"}}>
       phone
      </span>
      <span style={{color:"white",}}>+919109750275</span>
      <span className="material-icons"style={{color:"white",margin:"0 0 0 5em"}}>
      email
      </span>
      <span style={{color:"white",}}>gnikhil556@gmail.com</span>
      </div>
    </div>
  </nav>
      
  );
}