import React from "react";

import CardItem from "./CardItem";

const CardsBuild = (props) => {
  return (
    <div className="card__wrapper">
      {props.cardItems.map((cardItem) => (
        <CardItem
          key={cardItem.id}
          id={cardItem.id}
          img={cardItem.image}
          title={cardItem.name}
          price={cardItem.price}
          description={cardItem.description}
        />
      ))}
    </div>
  );
};

export default CardsBuild;
