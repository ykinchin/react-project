import React from 'react';

import './styles/Title.css';

const Title = (props) => {
  return (
    <div className='title-page'>
        <h1 className='title-page__title'>{props.title}</h1>
        <h2 className='title-page__subtitle'>{props.subtitle}</h2>
        <p className='title-page__text'>{props.text}</p>
    </div>
  )
}

export default Title