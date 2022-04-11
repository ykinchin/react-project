import React from "react";

import Counter from "../counter/Counter";
import './styles/Card.css'



const CardItem = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.img} alt={props.value} />
      </div>
      <div className="card__info">
        <div className="card__info__header">
          <h1 className="card__info__header__title">{props.title}</h1>
          <span className="card__info__header__price">{props.price}</span>
        </div>
        <p className="card__info__description">{props.description}</p>
        <div className="card__info__options"></div>
        <div className="card__info__counter">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
