import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user,setUser] = useState('default user');
  //const [respError,setRespError] = useState('Error....');

  useEffect(()=>{
    //setIsLoading(true);
    fetch(url)
      .then((resp)=>{
        if(resp.status>=200 && resp.status<=299){
          return resp.json();
        }else{
          setIsLoading(false);
          setIsError(true);
          //setRespError(`${resp.statusText}`);
          //console.log(resp.statusText);
          throw new Error(resp.statusText);
        }
      
        
      })  
      .then( data => {
        setIsLoading(false);
        const {login} = data;
        setUser(login);
      })
      .catch(error => console.log(error))
  },[])

  if(isLoading){
      return (
        <div>
          <h2>Loading......</h2>
        </div>
      );
  }

  if(isError){
    return (
      <div>
        <h2>Erorr....</h2>
      </div>
    );
}

  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
