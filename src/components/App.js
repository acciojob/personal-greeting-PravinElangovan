
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[value,updateValue]=useState("");
  function greet(e){
    updateValue(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input 
        onChange={greet}
        /> 
        {value} && 
        <p>Hello {value}!</p>
    </div>
  )
}

export default App