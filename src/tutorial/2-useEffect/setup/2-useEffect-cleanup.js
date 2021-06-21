import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(()=> {
    console.log('useEffect effects');
    window.addEventListener('resize',checkSize);
    return ()=> {
      console.log('clean up');
      window.removeEventListener('resize',checkSize);
    }
  },[]);

  console.log('rerender');
  return (
    <>
      <h1>window</h1>
      <h2>widown.innerWidth= {size} px</h2>
    </>
  )
};


export default UseEffectCleanup;
