import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState("default name");
  console.log(useParams());
  const { id } = useParams();
  
  useEffect(()=> {
    const newPerson = data.find(person=>person.id==id);
    setName(newPerson.name);
  },[]);
  //const [{name}] = data.filter(p=> p.id == id);
  console.log(name)
  return (
    <div>
      <h2>person</h2>
      <p>{name}</p>
      <Link to="/people" className="btn">
        back to people
      </Link>
    </div>
  );
};

export default Person;
