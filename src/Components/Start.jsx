import React from "react";
import { useRef } from "react";

function Start({setUserName}) {
  const inputRef = useRef();
  
  const handleClick = () =>{
    inputRef.current.value && setUserName(inputRef.current.value)
  }
  return (
    <div className="start">
      <input
        placeholder="enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>start</button>
    </div>
  );
}

export default Start;
