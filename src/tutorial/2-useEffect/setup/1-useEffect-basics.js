  import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect(()=>{
    console.log('call useEffect');
    if(value > 1){
    document.title = `New Message (${value})`;
    }
  },[value]);

  useEffect(()=>{
    console.log("Hello world!");
  },[]
  );
  console.log("rerender component"); 
  
  return (
    <div>
      <h1>useEffect Basics</h1>
      <h2>{value}</h2>
      <button className='btn' onClick={()=>{setValue(value+1)}}>click me</button>
    </div>
  )
};

export default UseEffectBasics;
