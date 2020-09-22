import React, { useState } from 'react';
import './App.css';


function Room() {
    let [isLit, setLit] = useState(true)
  return (
    <div className={isLit? 'dayLight':'night'}>
        <p>The Room is {isLit? 'lit' : 'dark'} </p>
        <button   onClick={()=> setLit(!isLit)}>Change Mode</button>
    </div>
  );
}

export default Room;