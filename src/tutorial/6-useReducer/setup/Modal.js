import React, { useEffect } from 'react';

const Modal = (props) => {
  useEffect(()=>{
    setTimeout(()=>{props.closeModal()},3000)
  })
  return <div>{props.content}</div>;
};

export default Modal;
