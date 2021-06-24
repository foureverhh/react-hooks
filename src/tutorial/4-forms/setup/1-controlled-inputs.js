import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({firstName: '', email:'',age:''});
  
  // const handleSubmit = (e)=> {
    // e.preventDefault();
    // if(firstName && email){
      // console.log('Submit the form');
      // const person = {id:new Date().getTime().toString(),firstName, email, age};
      // console.log('Person: ' + JSON.stringify(person));
      // setPeople((peopleOld)=>[...peopleOld,person]);
      // setEmail('');  
      // setFirstName('');
      // setAge('');
    // }else{
      // console.log('empty values');
    // }
  //}
  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age){
      const newPerson = {...person,id:new Date().getTime().toString()}
      setPeople([...people,newPerson]);
      setPerson({firstName:'',age:'',email:''});
    }

  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value  = e.target.value;
    console.log(name + ' , ' + value);
    setPerson({...person,[name]:value});
  }
  return (
    <>
      <article>
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={person.firstName} 
                    //onChange={(e)=> setFirstName(e.target.value)}/>
                    onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" 
            id="email" 
            name="email" 
            value={person.email}
            //onChange={(e)=>setEmail(e.target.value)}/>
            onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input type="text" 
                    id="age" 
                    name="age" 
                    value={person.age} 
                    //onChange={(e)=> setFirstName(e.target.value)}/>
                    onChange={handleChange}/>
          </div>
          <button type="submit" onClick={handleSubmit}>Add Person</button>
        </form>
        <ul>
          welcome:
          {people.map((person,index) => {
            const {id,firstName,email} = person ;
            return (
              <li key={id}>name -> {firstName}, email -> {email}</li>
            )
          })}
        </ul>
      </article>
    </>
  );
};

export default ControlledInputs;
