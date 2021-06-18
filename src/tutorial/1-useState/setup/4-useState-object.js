import React, { useState } from 'react';
import data from '../../../data'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age:24,
    message:'random message'
  }); 

  const changeMessage = () => {
    setPerson({...person,message:"hello world"});
  };

  return (
    <React.Fragment>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage} >change message</button>
    </React.Fragment>
  );
};

export default UseStateObject;
