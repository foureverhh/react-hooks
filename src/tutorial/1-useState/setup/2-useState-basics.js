import React, { useState } from 'react';
import { data } from '../../../data'
//



const UseStateBasics = () => {
  
  const [text,setText] = useState('init');  
  
  const [people, setPeople] = useState(data);
  console.log(people);

  const handleClick = () => {
    if(text === 'Init')
      setText("hello world"); 
    else
      setText("Init");
  };

  const deleteAllPeople = () => {
    setPeople([]);
  }

  const deleteCurrentItem = (id) => {
    console.log("index -> " + id);
    let peopleCopy = people.filter((person => person.id !== id));
    console.log("peopleCopy-> " + JSON.stringify(peopleCopy));
    setPeople(peopleCopy);
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>change title</button>
      <hr />
      <h2>People List</h2>
      <ul>
        {people.map((person,index) => {
          const {id, name} = person;
          return ( 
            <li onClick={()=>deleteCurrentItem(id)} key={index}>Name of id {id} is {name}</li>
          )
        })}
      </ul>
      <button className="btn" onClick={deleteAllPeople}>delete people list</button>
      <br />
    </React.Fragment>
  );
};

export default UseStateBasics;
