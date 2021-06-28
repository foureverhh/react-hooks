import React, { useState,useReducer } from 'react';
import Modal from './Modal';
import {Error} from './Error';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data); 
  const [showModal, setShowModal] =  useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      setShowModal(true); 
      setPeople([...people,{id:new Date().getTime().toString(),name}]);
      setName('');
    }else{
      setShowModal(true);
      setIsInvalidInput(true);
    }
  };

  return (
    <>
      <h2>useReducer</h2>
      {isInvalidInput && <Error/>}
      {showModal && <Modal/>}
       {/* {name || <p style={{color:'#fff000'}}>invalid input</p>} */}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {people.map((person) => {
          return (<li key={person.id}>Person is {person.name}</li>);
        })}
      </ul>
    </>
  );
};

export default Index;
