import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(refContainer.current.value);
    console.log(divContainer.current);
    console.log(refContainer.current);
  }

  useEffect(()=>{
    console.log(refContainer.current.value)
    refContainer.current.focus();
    divContainer.current.focus();
  });

  return (
    <>
      <h2>useRef</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          {/* referenContainer refers to this input object */}
          <input type="text" ref={refContainer} /> 
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
