import React, { useState } from 'react';
import "./about.css";
import CV from "../img/newResume sde.pdf";
import Project from "./Projects";
import Skill from "./Skill";
function About() {
  const [open, setOpen] = useState(false);
  const Record = (props) => (
    <div className="ed-container animate__animated animate__fadeInDown" >
      <div id="s1">
        <div className="ed-label">{props.label} </div>
        <h5 id="marks">{props.marks}</h5>
      </div>
      <div className="ed-content">
          <h5>{props.institute}</h5>
          <h5>{props.place}</h5>
          <p>{props.duration}</p>
      </div>

    </div>
  );

  return (
    <div className="about-container">

      <div id="about-1">
        <div id="section-1">
          <h1>AboUt Me</h1>
          <h6>My introduction</h6>
          <div id="info-1" className="animate__animated animate__bounce animate__delay-1s animate__repeat-2">
            
              
              <a href='#project-container'>
              <span class="material-symbols-outlined">
              arrow_downward
              </span>
              </a>
             

          </div>
          <p id="info-2">
            Web developer , i created webpages with UI/UX
            and fullstack websites. i am confident in server 
            part as well as frontend part, have Projects in 
            React and Node js.

          </p>
          <a download=" " href = {CV} className="cv-button">Download CV 
          <span class="material-symbols-outlined">
          download
          </span>
          </a>

        </div>
        
        {/* 2nd section */}

        <div id="qualifications">
          <div id="title-name" className="animate__animated animate__slideInUp" onClick={() => setOpen(!open)} >
            Qualification
            <span class="material-symbols-outlined">
            expand_more
            </span>
          </div>
          {
            open && 
          <div id="records">
          <Record
            label="MCA"
            institute="jabalpur Engineering college"
            place="Jabalpur"
            duration="2021 - 2023"
            marks="8.2"
          />
          <Record
            label="BSc"
            institute="govt Science college"
            place="Jabalpur"
            duration="2016 - 2017"
            marks="69%"
          />
          <Record
            label="12th"
            institute="govt school Patharaula"
            place="sidhi"
            duration="2016 - 2017"
            marks="89%" 
          />
        </div>}
        </div>
      </div>
      <div id="project-title">Projects:</div>
      <div id='project-container'>
        <Skill/>
        <Project />  
      </div>
       
     
    </div>
  );

}
export default About; 