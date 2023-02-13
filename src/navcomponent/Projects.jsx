import React from 'react'
import project1 from "../img/project1.png";
import project2 from "../img/chatbot.png";
import project3 from "../img/login.png";
import "./project.css";

export default function Projects() {
    const Card=(props)=>(
        <div className="project-card" >
            <img className="project-img" src={props.img} alt=" " height="100%" width="45%"/>
            <div>
                
                <h3>{props.title}</h3>
                <p>{props.description}</p>
              
            </div>
            
        </div>
    );
    return (
        <div className="project-container">
            <div data-aos="slide-left">
            <Card  img={project1} title='E-learning'
                description="E-learning is Education website
                help student to upskill"
                
            /> 
            </div>
           
           <div data-aos="slide-right">
           <Card  img={project2} title='chatbot'
                description="Using Teligraf dependency used chatbot 
                API of Teligram and append some logic to create chatbot"
                
            /> 
           </div>
           
           <div data-aos="slide-left">
           <Card  img={project3} title='login'
                description="this is login frontend page designed"
              
            /> 
           </div>
          
        </div>
    )
}
