import React from 'react'
import { useState } from 'react';
import '../styles/App.css';
const App = () => {
  const [color,setColor]=useState("rgb(238, 241, 0)");
  const handleChange=(e)=>{
    const target=e.target.value;
    
    switch(target){
      case "Happy":
        setColor("rgb(238, 241, 0)");
        break;
      case "Sad":
        setColor("rgb(19, 0, 164)");
        break;
      case "Sleepy":
        setColor("rgb(35, 177, 0)");
        break;
      case "Excited":
        setColor("rgb(255, 0, 66)");
        break;
      default:
        return null;
    }
  }
  return (
    <div id="main">
      <select onChange={handleChange}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" style={{backgroundColor:color}}></div>
    </div>
  )
}

export default App;
