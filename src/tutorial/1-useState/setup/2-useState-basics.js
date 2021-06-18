import React, { useState } from 'react';

//



const UseStateBasics = () => {
  
  const [text,setText] = useState('init');  

  const handleClick = () => {
    if(text === 'Init')
      setText("hello world");
    else
      setText("Init");
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
