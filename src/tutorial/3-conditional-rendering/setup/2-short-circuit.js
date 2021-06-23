import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  
  
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  console.log(secondValue);
  console.log(firstValue);
  return (
    <>
      {/* <h2>short circuit</h2> */}
      {/* <h2>firstValue: {firstValue}</h2> */}
      {/* <h2>secondValue: {secondValue}</h2> */}
      <h1>{text ||'john doe'}</h1>
      <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error......</h1>}
      <p>ternary expression-> {isError ? 'isError is true' : 'isError is false' }</p>
    </>
  )
};

export default ShortCircuit;
