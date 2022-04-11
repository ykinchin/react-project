import React from 'react';

import './styles/Modal.css'

const Modal = (props) => {
  return (
    <div onClick={props.onCloseHandler} className='modal'></div>
  )
}

export default Modal