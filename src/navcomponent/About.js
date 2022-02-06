import React from 'react';
import "./about.css";
function About(){
    return(
   <div className="container">
    <section style={{color:"white"}}>
      <div>
        <h2>Hi!</h2>
        <h3>I am Nikhil, I am student and love coding </h3>
        <h3>I am currently pursuing my masters from a prestigeous college 'Jabalpur Engineering college'</h3>
        <h3>this is my Educational background:-</h3>
      </div>
 <table>
  <thead>
    <th>Education</th>
    <th>year</th>
    <th>percentage</th>
  </thead>
  <tbody>
      <tr>
        <td data-level="Education">MCA</td>
        <td data-level="year">2023</td>
        <td data-level="percentage">running</td>
      </tr>
    <tr>
      <td data-level="Education">BSc</td>
      <td data-level="year">2021</td>
      <td data-level="percentage">69%</td>
    </tr>
    <tr>
      <td  data-level="Education">12</td>
      <td  data-level="year">2017</td>
      <td  data-level="percentage">89.2%</td>
    </tr>
    <tr>
      <td data-level="Education">10</td>
      <td data-level="year">2015</td>
      <td data-level="percentage">88.2%</td>
    </tr>
    </tbody>
</table> 
    </section>
   </div>
    );
}
export default About; 