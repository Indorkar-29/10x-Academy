import React,{useState} from "react";

export default function Button(){
const [Visible,setVisible]=useState(false);
const Click=()=>{
    setVisible(true);
};
return(
    <div>
        <button id="click" onClick={Click}>Click Me!</button>
        {Visible && (
            <p id="para">
                Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
            </p>
        )}
    </div>
);
}