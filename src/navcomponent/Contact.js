import React from 'react';
import "./contact.css";


const Contact=()=>{
   const popup=()=>{
      alert('your massage is sent');
   } 
    return (
     <div className="container">
     <h1 id="text-heading">Text me:-</h1>
     <div>
     <level>
        Name: 
     <input type='text'/>
     </level>
     <level>
        position: 
     <input type='text'/>
     </level>
     <div className="form-group massage">
    <label >massage:</label>
    <textarea /*className="form-control" */id="exampleFormControlTextarea1" rows="3"></textarea>
   </div>
     </div>
     <button onClick={popup}> send </button> 
     </div>
    );
}
export default Contact;