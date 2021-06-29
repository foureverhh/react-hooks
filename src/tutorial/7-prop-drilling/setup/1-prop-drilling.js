import React, { useState } from 'react';
import {data} from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  
  const removePerson = (id) => {
    setPeople((prevPeople)=>{
        return prevPeople.filter((person) => 
          id !== person.id
        )
    });
  }
  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson}/>
    </>
  );
};

const List = ({people,removePerson}) => {
  return (
    <ul>
      {people.map((person)=>
          <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
        )
      }
    </ul>
  );
}

const SinglePerson = ({id,name,removePerson}) => {
  return (
    <li className="item">{name} 
      <button className="btn" onClick={() =>removePerson(id)}>remove</button>
    </li>
  );
}
export default PropDrilling;
