import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <div>
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
    )
}
