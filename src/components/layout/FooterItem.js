import React from 'react';


const FooterItem = (props) => {
  return (
    <ul className={props.class}>
        <li><h1 className='footer__list__item__title'>{props.title}</h1></li>
        <li>{props.firstLink}</li>
        <li>{props.secondLink}</li>
        <li>{props.thirdLink}</li>
    </ul>
  )
}

export default FooterItem