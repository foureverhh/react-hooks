import React from 'react';

const ErrorExample = () => {
  let title = 'random title'; 
  let handler = () => {
    console.log("button is clicked");
  }
  return (
    <React.Fragment>
      <h2>useState error example</h2>
      <button type='button' className='btn' onClick={()=>handler()}>button</button>
    </React.Fragment>
  );
};

export default ErrorExample;
