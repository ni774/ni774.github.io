import React,{useState}from 'react';
import ReactDOM from "react-dom";

function Form(){
  const [color, setColor] = useState("color");
  let fire=()=>console.log("20 rupay doge to ek raaj ki baat bataunga");
    return(
        <div className="card">
          <h1>I am {color}</h1>
        <div className="card-header">
        <button type="button" style={{ backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
          Featured
          <button type="button" style={{ backgroundColor:"blue"}} onClick={()=>setColor("blue")}>red</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button className='btn btn-primary'onClick={fire}>click here</button>
        </div>
      </div>
    );
}
export default Form;