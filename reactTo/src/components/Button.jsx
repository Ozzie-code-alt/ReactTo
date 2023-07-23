import React from "react";
import "./Styles/btn.css"
import { useState } from "react";




const Button =() =>{
// return function as jsx
const [click, setClick] = useState(0)


return(
    <div className="btn-container" >

    <button onClick={() => setClick(click +1)}>
        Counter Increment
    </button>

    <button onClick={()=> setClick(click - 1)}>
        counter Decrement
    </button>

    <div className="counter-container-P">
        <p>Button Clicks: {click} </p>
    </div>

    </div>

)}



export default Button