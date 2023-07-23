import React from "react";
import "./Styles/btn.css"
import { useState } from "react";




const Button =() =>{
// return function as jsx
const [click, setClick] = useState(0)


const clickedEvent = () =>{
setClick( click + 1)
}

const DecrementCLick = () =>{
    setClick(click  - 1 )
}
 

return(
    <div className="btn-container" >

    <button onClick={clickedEvent}>
        Counter Increment
    </button>

    <button onClick={DecrementCLick}>
        counter Decrement
    </button>

    <div className="counter-container-P">
        <p>Button Clicks: {click} </p>
    </div>

    </div>

)}



export default Button