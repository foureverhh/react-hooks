import React, { useState } from 'react';

const UseStateCounter = () => {
  const[value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(()=> {
      //setValue(value + 1);
      setValue((prev) => {return prev + 1});
    },1000);
  }

  return (
    <React.Fragment>
      <section style = {{margin:'4rem 0'}}>
        <h2>useState counter example</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() =>{setValue(value-1)}}>decrease</button>
        <button className="btn" onClick={() =>{setValue(0)}}>reset</button>
        <button className="btn" onClick={() =>{setValue(value+1)}}>increase</button>
      </section>  
      <section style={{margin: '4rem 0'}}>
        <h2>more complex counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={complexIncrease}>increase later</button>
      </section>
    </React.Fragment>
  );
}; 
 
export default UseStateCounter;
