import React, { lazy } from "react";



const Employee = ({firstName, lastname})=>{
    // you can destructure directly in arguments
// const {firstName, lastname}= props
return(

<div className="employee-container">
  <h4>Employee Name: {firstName} {lastname}</h4>  
</div>

)}


export default Employee