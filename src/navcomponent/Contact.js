import React from 'react';
import "./contact.css";


const Contact = () => {
   return (
      <section className="container">
         <div className="c1" id="c1">
            <span className="title">talk to me</span>
            <div className="talk-div animate__flipOutY">
               <span class="material-symbols-outlined">
                  outgoing_mail
               </span>
               <h5>E mail</h5>
               <h6>gnikhil556@gmail.com</h6>
            </div>
            <div className="talk-div animate__flipOutX">
               <span class="material-symbols-outlined">
                  sms
               </span>
               <h5>Whats app</h5>
               <h6>9109750275</h6>
            </div>
            <div className="talk-div animate__flipOutY">
               <span class="material-symbols-outlined">
                  call
               </span>
               <h5>call</h5>
               <h6>9109750275</h6>
            </div>
         </div>
         <div className="c1" id="c2">
            <span className="title">write me</span>
         <form>
               <div className="input animate__animated animate__backInLeft animate__slow">
                  <label>Name</label>
                  <input type="text" placeholder="Insert your name"></input>
               </div>
               <div className="input animate__animated animate__backInLeft animate__slow">
                  <label>Mail</label>
                  <input type="text" placeholder="Insert your name"></input>
               </div>
               <div className="input animate__animated animate__backInLeft animate__slow">
                  <label>Project</label>
                  <input className="project" type="text" placeholder="Insert your name"></input>
               </div>
               <button>send <span class="material-symbols-outlined">
                  send
               </span> </button>
            </form>
         </div>
      </section>
   );
}
export default Contact;