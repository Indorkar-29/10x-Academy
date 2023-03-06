import React,{useState} from 'react'
import "../styles/Child.css";

const Selection = (props) => {
    const [state,setState]= useState({background:""});
    const {applyColor}=props;
  return (
    <div className="fix-box" id="selection" style={{backgroundColor:state.background}} onClick={()=>{applyColor(setState)}}>
        <h2 className="subheading">Selection</h2>
    </div>
  )
}

export default Selection;