import React from 'react';
import { Link } from 'react-router-dom';

import './styles/button.css';

const Button = (props) => {
  return (
    <div className='button'><button className='btn'><Link to={props.path}>{props.text}</Link></button></div>
  )
}

export default Button