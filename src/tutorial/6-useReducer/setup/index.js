import React, { useState,useReducer } from 'react';
import Modal from './Modal';
import {Error} from './Error';
import { data } from '../../../data';
import {reducer} from './reducer'
// reducer function

const defaultState = {
  people : [],
  isModelOpen : false,
  modalContetnt : 'hello world',
  isInvalidInput: false
}
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer,defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newPerson = {
        id: new Date().getTime().toString(),
        name: name
      };
      dispatch({type:'ADD_ITEM',payload: newPerson});
      setName('');
    }else{
      dispatch({type:'INVALID'})
    }
  };

  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'});
  }

  return (
    <>
      <h2>useReducer</h2>
      {state.isInvalidInput && <Error/>}
      {state.isModelOpen && <Modal closeModal={closeModal} content={state.modalContetnt}/>}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {state.people.map((person) => {
          return (<li key={person.id}>
            <h4>Person is {person.name}</h4>
            <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})}>Remove</button>
            </li>);
        })}
      </ul>
    </>
  );
};

export default Index;
